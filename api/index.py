# api/index.py

import os
from datetime import datetime
from zoneinfo import ZoneInfo

import httpx
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, Field


# ============================================================
# ENVIRONMENT
# ============================================================

load_dotenv()

ZOOM_ACCOUNT_ID = os.getenv("ZOOM_ACCOUNT_ID")
ZOOM_CLIENT_ID = os.getenv("ZOOM_CLIENT_ID")
ZOOM_CLIENT_SECRET = os.getenv("ZOOM_CLIENT_SECRET")
ZOOM_HOST_USER_ID = os.getenv("ZOOM_HOST_USER_ID")

# Zoom's supported timezone list maps Melbourne to Australia/Sydney.
ZOOM_MELBOURNE_TIMEZONE = "Australia/Sydney"
APP_TIMEZONE = "Australia/Melbourne"


# ============================================================
# FASTAPI
# ============================================================

app = FastAPI(
    title="EnerG IQ Tech Booking API",
    version="1.3.0",
)


# ============================================================
# CORS
# ============================================================

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "https://energiqtech.com",
        "https://www.energiqtech.com",
    ],
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["*"],
)


# ============================================================
# REQUEST MODELS
# ============================================================

class VisitorData(BaseModel):
    firstName: str = Field(min_length=1, max_length=100)
    lastName: str = Field(min_length=1, max_length=100)
    email: EmailStr
    phone: str | None = None
    organisation: str = Field(min_length=1, max_length=200)
    jobTitle: str | None = None
    organisationType: str | None = None
    website: str | None = None
    numberOfSites: str | None = None
    message: str | None = None
    discussionTopics: list[str] = Field(default_factory=list)


class BookingData(BaseModel):
    date: str
    time: str
    duration: int = 30
    timezone: str = APP_TIMEZONE


class BookPilotRequest(BaseModel):
    booking: BookingData
    visitor: VisitorData


# ============================================================
# HEALTH CHECK
# ============================================================

@app.get("/api/health")
async def health():
    return {
        "status": "ok",
        "service": "EnerG IQ Tech Booking API",
        "version": "1.3.0",
    }


# ============================================================
# ENVIRONMENT VALIDATION
# ============================================================

def validate_zoom_environment():
    missing = []

    if not ZOOM_ACCOUNT_ID:
        missing.append("ZOOM_ACCOUNT_ID")
    if not ZOOM_CLIENT_ID:
        missing.append("ZOOM_CLIENT_ID")
    if not ZOOM_CLIENT_SECRET:
        missing.append("ZOOM_CLIENT_SECRET")
    if not ZOOM_HOST_USER_ID:
        missing.append("ZOOM_HOST_USER_ID")

    if missing:
        raise HTTPException(
            status_code=500,
            detail=(
                "Zoom configuration is incomplete. "
                f"Missing: {', '.join(missing)}"
            ),
        )


# ============================================================
# NORMALISATION HELPERS
# ============================================================

def normalise_date(value: str) -> str:
    value = str(value).strip()

    accepted_formats = [
        "%Y-%m-%d",
        "%d/%m/%Y",
        "%Y-%m-%dT%H:%M:%S",
        "%Y-%m-%dT%H:%M:%S.%f",
        "%Y-%m-%dT%H:%M:%SZ",
        "%Y-%m-%dT%H:%M:%S.%fZ",
    ]

    for fmt in accepted_formats:
        try:
            parsed = datetime.strptime(value, fmt)
            return parsed.strftime("%Y-%m-%d")
        except ValueError:
            pass

    # Handle ISO timestamps that include an offset, e.g. +10:00
    try:
        parsed = datetime.fromisoformat(value.replace("Z", "+00:00"))
        return parsed.strftime("%Y-%m-%d")
    except ValueError:
        raise HTTPException(
            status_code=400,
            detail=f"Invalid booking date format: {value}",
        )


def normalise_time(value: str) -> str:
    value = str(value).strip()

    accepted_formats = [
        "%H:%M",
        "%H:%M:%S",
        "%I:%M %p",
        "%I:%M%p",
    ]

    for fmt in accepted_formats:
        try:
            parsed = datetime.strptime(value.upper(), fmt)
            return parsed.strftime("%H:%M")
        except ValueError:
            pass

    raise HTTPException(
        status_code=400,
        detail=f"Invalid booking time format: {value}",
    )


def validate_booking_datetime(
    date_string: str,
    time_string: str,
    timezone_name: str,
) -> datetime:
    """Normalise and validate the selected local booking time."""

    date_value = normalise_date(date_string)
    time_value = normalise_time(time_string)

    try:
        timezone = ZoneInfo(timezone_name)
    except Exception:
        raise HTTPException(
            status_code=400,
            detail=f"Unsupported timezone: {timezone_name}",
        )

    try:
        local_datetime = datetime.strptime(
            f"{date_value} {time_value}",
            "%Y-%m-%d %H:%M",
        )
    except ValueError:
        raise HTTPException(
            status_code=400,
            detail="Invalid booking date or time format.",
        )

    return local_datetime.replace(tzinfo=timezone)


def build_zoom_start_time(
    date_string: str,
    time_string: str,
    timezone_name: str,
) -> str:
    """
    Zoom accepts local time in yyyy-MM-ddTHH:mm:ss when a supported
    timezone ID is supplied separately.
    """

    local_datetime = validate_booking_datetime(
        date_string,
        time_string,
        timezone_name,
    )

    return local_datetime.strftime("%Y-%m-%dT%H:%M:%S")


def zoom_timezone_for(app_timezone: str) -> str:
    """
    Zoom's supported timezone list represents Melbourne using
    Australia/Sydney. Both use the same eastern-Australia DST rules.
    """
    if app_timezone in {"Australia/Melbourne", "Australia/Sydney"}:
        return ZOOM_MELBOURNE_TIMEZONE

    return app_timezone


# ============================================================
# ZOOM OAUTH
# ============================================================

async def get_zoom_access_token() -> str:
    validate_zoom_environment()

    token_url = "https://zoom.us/oauth/token"

    params = {
        "grant_type": "account_credentials",
        "account_id": ZOOM_ACCOUNT_ID,
    }

    try:
        async with httpx.AsyncClient(timeout=20.0) as client:
            response = await client.post(
                token_url,
                params=params,
                auth=(ZOOM_CLIENT_ID, ZOOM_CLIENT_SECRET),
            )
    except httpx.RequestError as exc:
        print("Zoom OAuth connection error:", repr(exc))
        raise HTTPException(
            status_code=502,
            detail="Unable to connect to Zoom authentication service.",
        )

    if response.status_code != 200:
        print("Zoom OAuth error:", response.status_code, response.text)
        raise HTTPException(
            status_code=502,
            detail="Unable to authenticate with Zoom.",
        )

    payload = response.json()
    access_token = payload.get("access_token")

    if not access_token:
        raise HTTPException(
            status_code=502,
            detail="Zoom authentication response did not contain an access token.",
        )

    return access_token


# ============================================================
# CREATE ZOOM MEETING
# ============================================================

async def create_zoom_meeting(
    access_token: str,
    request_data: BookPilotRequest,
):
    booking = request_data.booking
    visitor = request_data.visitor

    # Always normalise incoming frontend values before sending to Zoom.
    app_timezone = booking.timezone or APP_TIMEZONE
    zoom_timezone = zoom_timezone_for(app_timezone)

    start_time = build_zoom_start_time(
        booking.date,
        booking.time,
        app_timezone,
    )

    topic = "EnerG IQ Tech | Energy Optimisation Discussion",

    agenda_lines = [
        "EnerG IQ Tech Energy Optimisation Discussion",
        "",
        f"Organisation: {visitor.organisation}",
        f"Contact: {visitor.firstName} {visitor.lastName}",
        f"Email: {visitor.email}",
    ]

    if visitor.phone:
        agenda_lines.append(f"Phone: {visitor.phone}")

    if visitor.jobTitle:
        agenda_lines.append(f"Role: {visitor.jobTitle}")

    if visitor.organisationType:
        agenda_lines.append(
            f"Organisation type: {visitor.organisationType}"
        )

    if visitor.numberOfSites:
        agenda_lines.append(
            f"Sites / buildings: {visitor.numberOfSites}"
        )

    if visitor.website:
        agenda_lines.append(f"Website: {visitor.website}")

    if visitor.discussionTopics:
        agenda_lines.extend([
            "",
            "Discussion priorities:",
            *[f"- {item}" for item in visitor.discussionTopics],
        ])

    if visitor.message:
        agenda_lines.extend([
            "",
            "Energy challenge:",
            visitor.message,
        ])

    zoom_payload = {
        "topic": topic,
        "type": 2,
        "start_time": start_time,
        "duration": booking.duration,
        "timezone": zoom_timezone,
        "agenda": "\n".join(agenda_lines),
        "settings": {
            "host_video": True,
            "participant_video": True,
            "join_before_host": False,
            "waiting_room": True,
            "mute_upon_entry": False,
            "approval_type": 2,
            "audio": "voip",
            "auto_recording": "none",
        },
    }

    create_url = (
        "https://api.zoom.us/v2/"
        f"users/{ZOOM_HOST_USER_ID}/meetings"
    )

    headers = {
        "Authorization": f"Bearer {access_token}",
        "Content-Type": "application/json",
    }

    try:
        async with httpx.AsyncClient(timeout=20.0) as client:
            response = await client.post(
                create_url,
                headers=headers,
                json=zoom_payload,
            )
    except httpx.RequestError as exc:
        print("Zoom meeting connection error:", repr(exc))
        raise HTTPException(
            status_code=502,
            detail="Unable to connect to Zoom meeting service.",
        )

    if response.status_code not in (200, 201):
        print("Zoom create meeting error:", response.status_code, response.text)
        raise HTTPException(
            status_code=502,
            detail="Zoom was unable to create the meeting.",
        )

    return response.json(), zoom_timezone


# ============================================================
# BOOK PILOT
# ============================================================

@app.post("/api/book-discussion")
async def book_pilot(request_data: BookPilotRequest):
    """
    Create a real 30-minute Zoom meeting.
    Email confirmation is handled by EmailJS in the React frontend.
    """

    if request_data.booking.duration != 30:
        raise HTTPException(
            status_code=400,
            detail="EnerG IQ Tech discussions are currently 30 minutes.",
        )

    # Validate/normalise early so the API returns a clear 400 before
    # requesting a Zoom token if the frontend sent malformed values.
    normalised_date = normalise_date(request_data.booking.date)
    normalised_time = normalise_time(request_data.booking.time)

    request_data.booking.date = normalised_date
    request_data.booking.time = normalised_time
    request_data.booking.timezone = APP_TIMEZONE

    access_token = await get_zoom_access_token()

    meeting, zoom_timezone = await create_zoom_meeting(
        access_token,
        request_data,
    )

    join_url = meeting.get("join_url")

    if not join_url:
        raise HTTPException(
            status_code=502,
            detail="Zoom created the meeting without a participant join URL.",
        )

    return {
        "success": True,
        "status": "confirmed",
        "meeting": {
            "id": meeting.get("id"),
            "uuid": meeting.get("uuid"),
            "topic": meeting.get("topic"),
            "start_time": meeting.get("start_time"),
            "duration": meeting.get("duration"),
            "timezone": meeting.get("timezone") or zoom_timezone,
            "join_url": join_url,
        },
        "booking": {
            "date": normalised_date,
            "time": normalised_time,
            "timezone": APP_TIMEZONE,
        },
        "visitor": {
            "first_name": request_data.visitor.firstName,
            "email": request_data.visitor.email,
            "organisation": request_data.visitor.organisation,
        },
    }