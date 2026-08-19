// src/pages/BookPilotPage.jsx

import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Gauge,
  Leaf,
  ShieldCheck,
  Sparkles,
  TrendingDown,
  Zap,
} from "lucide-react";

import "../styles/BookPilotPage.css";


const WEEKDAYS = [
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
  "Sun",
];


const TIME_SLOTS = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
];


function getMondayIndex(date) {
  const day = date.getDay();

  return day === 0 ? 6 : day - 1;
}


function formatMonth(date) {
  return date.toLocaleDateString("en-AU", {
    month: "long",
    year: "numeric",
  });
}


function formatSelectedDate(date) {
  return date.toLocaleDateString("en-AU", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}


function formatTime(time) {
  const [hour, minute] = time
    .split(":")
    .map(Number);

  const date = new Date();

  date.setHours(hour, minute, 0, 0);

  return date.toLocaleTimeString("en-AU", {
    hour: "numeric",
    minute: "2-digit",
  });
}


function sameDate(a, b) {
  return (
    a &&
    b &&
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}


export default function BookPilotPage() {
  const navigate = useNavigate();

  const today = useMemo(() => {
    const date = new Date();

    date.setHours(0, 0, 0, 0);

    return date;
  }, []);


  const [currentMonth, setCurrentMonth] =
    useState(
      new Date(
        today.getFullYear(),
        today.getMonth(),
        1
      )
    );


  const [selectedDate, setSelectedDate] =
    useState(null);


  const [selectedTime, setSelectedTime] =
    useState("");


  const calendarDays = useMemo(() => {
    const year =
      currentMonth.getFullYear();

    const month =
      currentMonth.getMonth();

    const firstDay =
      new Date(year, month, 1);

    const offset =
      getMondayIndex(firstDay);

    const daysInMonth =
      new Date(
        year,
        month + 1,
        0
      ).getDate();

    const days = [];


    for (let index = 0; index < offset; index++) {
      days.push(null);
    }


    for (let day = 1; day <= daysInMonth; day++) {
      days.push(
        new Date(
          year,
          month,
          day
        )
      );
    }


    return days;
  }, [currentMonth]);


  const isBookable = (date) => {
    if (!date) return false;

    const day = date.getDay();

    const isWeekend =
      day === 0 || day === 6;

    const isPast =
      date < today;

    return !isWeekend && !isPast;
  };


  const previousMonth = () => {
    const previous =
      new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth() - 1,
        1
      );

    const currentRealMonth =
      new Date(
        today.getFullYear(),
        today.getMonth(),
        1
      );

    if (previous < currentRealMonth) {
      return;
    }

    setCurrentMonth(previous);
  };


  const nextMonth = () => {
    setCurrentMonth(
      new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth() + 1,
        1
      )
    );
  };


  const selectDate = (date) => {
    if (!isBookable(date)) return;

    setSelectedDate(date);
    setSelectedTime("");
  };


  const continueBooking = () => {
    if (!selectedDate || !selectedTime) {
      return;
    }


    navigate(
      "/book-pilot/details",
      {
        state: {
          date: selectedDate.toISOString(),
          time: selectedTime,
          duration: 30,
          timezone:
            Intl.DateTimeFormat()
              .resolvedOptions()
              .timeZone,
        },
      }
    );
  };


  return (
    <main className="bookPilotPage">

      {/* =====================================================
          TOP BAR
      ===================================================== */}

      <div className="bookPilotBackRow">
        <button
            type="button"
            onClick={() => navigate("/")}
            className="bookPilotBack"
        >
            <ArrowLeft size={18} />
            Back to EnerG IQ Tech
        </button>
       </div>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="bookPilotIntro">

        <p className="bookPilotEyebrow">
          BOOK A DISCUSSION
        </p>


        <h1>
          Explore Your Energy Cost & CO₂ Reduction Opportunity.
        </h1>


        <p>
          Book a 30-minute discussion to review your
          energy-intensive operations, identify potential
          optimisation opportunities and explore whether an
          EnerG IQ Tech pilot could establish a measurable
          financial and sustainability business case.
        </p>

      </section>


      {/* =====================================================
          BOOKING LAYOUT
      ===================================================== */}

      <section className="bookPilotBooking">

        {/* =================================================
            LEFT — CALENDAR
        ================================================= */}

        <div className="bookPilotCalendarPanel">

          <div className="bookPilotMeetingInfo">

            <div className="bookPilotMeetingIcon">
              <Sparkles size={25} />
            </div>


            <p>
              PILOT DISCOVERY
            </p>


            <h2>
              Find a time to meet with
              <br />
              EnerG IQ Tech
            </h2>


            <div className="bookPilotMeetingMeta">

              <span>
                <Clock3 size={17} />
                30 minutes
              </span>


              <span>
                <CalendarDays size={17} />
                Online meeting
              </span>

            </div>

          </div>


          <div className="bookPilotMonthNav">

            <button
              type="button"
              onClick={previousMonth}
              aria-label="Previous month"
            >
              <ChevronLeft size={20} />
            </button>


            <strong>
              {formatMonth(currentMonth)}
            </strong>


            <button
              type="button"
              onClick={nextMonth}
              aria-label="Next month"
            >
              <ChevronRight size={20} />
            </button>

          </div>


          <div className="bookPilotWeekdays">

            {WEEKDAYS.map((day) => (
              <span key={day}>
                {day}
              </span>
            ))}

          </div>


          <div className="bookPilotCalendarGrid">

            {calendarDays.map(
              (date, index) => {

                if (!date) {
                  return (
                    <span
                      key={`empty-${index}`}
                      className="calendarEmpty"
                    />
                  );
                }


                const bookable =
                  isBookable(date);

                const selected =
                  sameDate(
                    date,
                    selectedDate
                  );


                return (
                  <button
                    key={date.toISOString()}
                    type="button"
                    disabled={!bookable}
                    className={
                      selected
                        ? "calendarDay selected"
                        : "calendarDay"
                    }
                    onClick={() =>
                      selectDate(date)
                    }
                  >
                    {date.getDate()}
                  </button>
                );
              }
            )}

          </div>

        </div>


        {/* =================================================
            RIGHT — TIME SELECTION
        ================================================= */}

        <div className="bookPilotTimePanel">

          <div className="bookPilotTimeHeader">

            <p>
              MEETING DETAILS
            </p>


            <h2>
              What time works best?
            </h2>


            {selectedDate ? (

              <span>
                Showing available times for{" "}
                <strong>
                  {formatSelectedDate(
                    selectedDate
                  )}
                </strong>
              </span>

            ) : (

              <span>
                Select a date to view available
                meeting times.
              </span>

            )}

          </div>


          <div className="bookPilotTimezone">

            <Clock3 size={17} />

            <span>
              {
                Intl.DateTimeFormat()
                  .resolvedOptions()
                  .timeZone
              }
            </span>

          </div>


          {!selectedDate && (

            <div className="bookPilotEmptyState">

              <CalendarDays size={34} />

              <strong>
                Select a date
              </strong>

              <span>
                Available meeting times will
                appear here.
              </span>

            </div>

          )}


          {selectedDate && (

            <div className="bookPilotSlots">

              {TIME_SLOTS.map((time) => (

                <button
                  type="button"
                  key={time}
                  className={
                    selectedTime === time
                      ? "bookPilotSlot selected"
                      : "bookPilotSlot"
                  }
                  onClick={() =>
                    setSelectedTime(time)
                  }
                >
                  {formatTime(time)}
                </button>

              ))}

            </div>

          )}


          {selectedTime && (

            <div className="bookPilotContinueBox">

              <div>

                <CheckCircle2 size={19} />

                <span>
                  {formatSelectedDate(
                    selectedDate
                  )}{" "}
                  at{" "}
                  {formatTime(
                    selectedTime
                  )}
                </span>

              </div>


              <button
                type="button"
                className="bookPilotContinue"
                onClick={continueBooking}
              >
                Continue
                <ChevronRight size={18} />
              </button>

            </div>

          )}

        </div>


        {/* =================================================
            VALUE PANEL
        ================================================= */}

        <aside className="bookPilotValuePanel">

          <p>
            WHAT WE'LL DISCUSS
          </p>


          <h2>
            Find the Energy Opportunities Worth Acting On.
          </h2>


          <div className="bookPilotBenefit">

            <TrendingDown />

            <div>
              <strong>
                Reduce Energy Costs
              </strong>

              <span>
                Identify energy waste,
                inefficient assets and costly
                demand patterns.
              </span>
            </div>

          </div>


          <div className="bookPilotBenefit">

            <Leaf />

            <div>
              <strong>
                Reduce CO₂ Emissions
              </strong>

              <span>
                Explore opportunities to reduce
                associated emissions through
                lower energy consumption.
              </span>
            </div>

          </div>


          <div className="bookPilotBenefit">

            <Gauge />

            <div>
              <strong>
                Establish the Business Case
              </strong>

              <span>
                Define measurable energy,
                financial and carbon success
                criteria.
              </span>
            </div>

          </div>


          <div className="bookPilotBenefit">

            <ShieldCheck />

            <div>
              <strong>
                Start With a Controlled Pilot
              </strong>

              <span>
                Prove value at one site or
                system before broader
                deployment.
              </span>
            </div>

          </div>


          <div className="bookPilotValueFooter">

            <Zap size={18} />

            <span>
              No obligation. Start with one
              measurable energy problem.
            </span>

          </div>

        </aside>

      </section>

    </main>
  );
}