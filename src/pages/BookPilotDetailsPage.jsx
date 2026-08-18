// src/pages/BookPilotDetailsPage.jsx

import {
  useEffect,
  useState,
} from "react";

import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import emailjs from "@emailjs/browser";

import {
  ArrowLeft,
  Building2,
  CalendarDays,
  CheckCircle2,
  Clock3,
  ExternalLink,
  Leaf,
  Mail,
  MapPin,
  ShieldCheck,
  UserRound,
  Zap,
} from "lucide-react";

import "../styles/BookPilotDetailsPage.css";


/* =========================================================
   OPTIONS
========================================================= */

const organisationTypes = [
  "Cold Storage & Refrigeration",
  "Manufacturing",
  "Warehouse & Logistics",
  "Commercial Building / Property",
  "Local Government",
  "University",
  "Healthcare",
  "Hotel",
  "Shopping Centre",
  "Airport",
  "Data Centre",
  "Energy / DER Portfolio",
  "Other",
];


const discussionOptions = [
  "Reduce energy costs",
  "Reduce CO₂ emissions",
  "Peak demand reduction",
  "HVAC optimisation",
  "Refrigeration optimisation",
  "Industrial equipment optimisation",
  "Solar PV / Battery optimisation",
  "EV charging optimisation",
  "Digital Twin",
  "Energy monitoring & analytics",
  "Pilot program",
  "Other",
];

function normaliseBookingDate(value) {
  if (!value) {
    return "";
  }

  // Already in YYYY-MM-DD format
  if (
    typeof value === "string" &&
    /^\d{4}-\d{2}-\d{2}$/.test(value)
  ) {
    return value;
  }

  // Handle DD/MM/YYYY
  if (
    typeof value === "string" &&
    /^\d{1,2}\/\d{1,2}\/\d{4}$/.test(value)
  ) {
    const [day, month, year] =
      value.split("/");

    return [
      year,
      month.padStart(2, "0"),
      day.padStart(2, "0"),
    ].join("-");
  }

  // Handle Date objects / ISO strings
  const parsed = new Date(value);

  if (
    Number.isNaN(
      parsed.getTime()
    )
  ) {
    return "";
  }

  const year =
    parsed.getFullYear();

  const month =
    String(
      parsed.getMonth() + 1
    ).padStart(2, "0");

  const day =
    String(
      parsed.getDate()
    ).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function normaliseBookingTime(value) {
  if (!value) return "";

  const time = String(value).trim();

  // Already 24-hour HH:mm
  if (/^\d{2}:\d{2}$/.test(time)) {
    return time;
  }

  // Also allow H:mm
  if (/^\d{1}:\d{2}$/.test(time)) {
    return `0${time}`;
  }

  // Convert 12-hour values such as:
  // "1:00 pm", "1:00 PM", "01:00 pm"
  const match = time.match(
    /^(\d{1,2}):(\d{2})\s*(am|pm)$/i
  );

  if (!match) {
    return "";
  }

  let hour = Number(match[1]);
  const minute = match[2];
  const period = match[3].toLowerCase();

  if (period === "pm" && hour !== 12) {
    hour += 12;
  }

  if (period === "am" && hour === 12) {
    hour = 0;
  }

  return `${String(hour).padStart(2, "0")}:${minute}`;
}
/* =========================================================
   FORMATTERS
========================================================= */

function formatDate(dateValue) {
  const normalised =
    normaliseBookingDate(
      dateValue
    );

  if (!normalised) {
    return "Invalid Date";
  }

  const [
    year,
    month,
    day,
  ] = normalised
    .split("-")
    .map(Number);

  const date =
    new Date(
      year,
      month - 1,
      day
    );

  return date.toLocaleDateString(
    "en-AU",
    {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );
}


function formatTime(timeValue) {
  const normalised = normaliseBookingTime(timeValue);

  if (!normalised) {
    return "Invalid Time";
  }

  const [hour, minute] =
    normalised.split(":").map(Number);

  const date = new Date();

  date.setHours(
    hour,
    minute,
    0,
    0
  );

  return date.toLocaleTimeString(
    "en-AU",
    {
      hour: "numeric",
      minute: "2-digit",
    }
  );
}


/* =========================================================
   PAGE
========================================================= */

export default function BookPilotDetailsPage() {

  const location = useLocation();

  const navigate = useNavigate();

  const booking =
    location.state;


  /* =======================================================
     FORM STATE
  ======================================================= */

  const [formData, setFormData] =
    useState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      organisation: "",
      jobTitle: "",
      organisationType: "",
      website: "",
      numberOfSites: "",
      message: "",
      discussionTopics: [],
    });


  /* =======================================================
     SUBMISSION STATE
  ======================================================= */

  const [submitted, setSubmitted] =
    useState(false);


  const [submitting, setSubmitting] =
    useState(false);


  const [submitError, setSubmitError] =
    useState("");


  const [meetingResult, setMeetingResult] =
    useState(null);


  const [emailSent, setEmailSent] =
    useState(false);


  /* =======================================================
     BOOKING GUARD
  ======================================================= */

  useEffect(() => {

    if (
      !booking?.date ||
      !booking?.time
    ) {

      navigate(
        "/book-pilot",
        {
          replace: true,
        }
      );
    }

  }, [
    booking,
    navigate,
  ]);


  if (
    !booking?.date ||
    !booking?.time
  ) {
    return null;
  }


  /* =======================================================
     FORM HANDLERS
  ======================================================= */

  const handleChange = (event) => {

    const {
      name,
      value,
    } = event.target;


    setFormData(
      (current) => ({
        ...current,
        [name]: value,
      })
    );


    if (submitError) {
      setSubmitError("");
    }
  };


  const toggleDiscussion =
    (topic) => {

      setFormData(
        (current) => {

          const exists =
            current
              .discussionTopics
              .includes(topic);


          return {
            ...current,

            discussionTopics:
              exists
                ? current
                    .discussionTopics
                    .filter(
                      (item) =>
                        item !== topic
                    )

                : [
                    ...current
                      .discussionTopics,

                    topic,
                  ],
          };
        }
      );


      if (submitError) {
        setSubmitError("");
      }
    };


  /* =======================================================
     CREATE ZOOM + SEND EMAIL
  ======================================================= */

  const handleSubmit =
    async (event) => {

      event.preventDefault();


      if (
        formData
          .discussionTopics
          .length === 0
      ) {

        setSubmitError(
          "Please select at least one discussion topic."
        );

        return;
      }


      setSubmitting(true);

      setSubmitError("");


      /*
       * Local:
       *
       * VITE_BOOKING_API_URL=
       * http://localhost:8000/api/book-pilot
       *
       *
       * Production:
       *
       * leave VITE_BOOKING_API_URL undefined
       * when the Python API is deployed inside
       * the same Vercel project.
       */

      const bookingApiUrl =
        import.meta.env
          .VITE_BOOKING_API_URL ||
        "/api/book-pilot";


      try {

        /* =================================================
           STEP 1
           CREATE THE REAL ZOOM MEETING
        ================================================= */

        const response =
          await fetch(
            bookingApiUrl,
            {
              method: "POST",

              headers: {
                "Content-Type":
                  "application/json",
              },

              body: JSON.stringify({

                booking: {
                  date:
                    normaliseBookingDate(
                      booking.date
                    ),

                  time:
                    normaliseBookingTime(
                      booking.time
                    ),

                  duration:
                    booking.duration || 30,

                  timezone:
                    "Australia/Melbourne",
                },


                visitor: {
                  firstName:
                    formData.firstName.trim(),

                  lastName:
                    formData.lastName.trim(),

                  email:
                    formData.email.trim(),

                  phone:
                    formData.phone.trim() ||
                    null,

                  organisation:
                    formData.organisation.trim(),

                  jobTitle:
                    formData.jobTitle.trim() ||
                    null,

                  organisationType:
                    formData.organisationType ||
                    null,

                  website:
                    formData.website.trim() ||
                    null,

                  numberOfSites:
                    formData.numberOfSites.trim() ||
                    null,

                  message:
                    formData.message.trim() ||
                    null,

                  discussionTopics:
                    formData.discussionTopics,
                },
              }),
            }
          );


        const result =
          await response.json();


        if (!response.ok) {

          throw new Error(
            result?.detail ||
            "Unable to create the Zoom meeting."
          );
        }


        if (!result?.success) {

          throw new Error(
            "The meeting could not be created."
          );
        }


        const joinUrl =
          result
            ?.meeting
            ?.join_url;


        if (!joinUrl) {

          throw new Error(
            "Zoom created the meeting but did not return a participant link."
          );
        }


        /*
         * Meeting now genuinely exists.
         *
         * Save it BEFORE EmailJS.
         *
         * This is important because if EmailJS
         * fails we must NOT make the visitor
         * submit again and accidentally create
         * another Zoom meeting.
         */

        setMeetingResult(
          result.meeting
        );


        /* =================================================
           STEP 2
           EMAILJS CUSTOMER CONFIRMATION
        ================================================= */

        const serviceId =
          import.meta.env
            .VITE_EMAILJS_SERVICE_ID;


        const templateId =
          import.meta.env
            .VITE_EMAILJS_TEMPLATE_ID;


        const publicKey =
          import.meta.env
            .VITE_EMAILJS_PUBLIC_KEY;


        let confirmationEmailSent =
          false;


        if (
          serviceId &&
          templateId &&
          publicKey
        ) {

          try {

            const templateParameters = {

              /*
               * These names match the EmailJS
               * template you configured.
               */

              name:
                `${formData.firstName.trim()} ${formData.lastName.trim()}`,

              email:
                formData.email.trim(),

              organisation:
                formData.organisation.trim(),

              meeting_date:
                formatDate(
                  booking.date
                ),

              meeting_time:
                formatTime(
                  booking.time
                ),

              timezone:
                "Australia/Melbourne",

              zoom_join_url:
                joinUrl,

              discussion_topics:
                formData
                  .discussionTopics
                  .join(", "),

              message:
                formData.message.trim() ||
                "Not provided",

              job_title:
                formData.jobTitle.trim() ||
                "Not provided",

              organisation_type:
                formData
                  .organisationType ||
                "Not provided",

              number_of_sites:
                formData
                  .numberOfSites
                  .trim() ||
                "Not provided",

              phone:
                formData.phone.trim() ||
                "Not provided",

              website:
                formData.website.trim() ||
                "Not provided",

              duration:
                `${
                  booking.duration || 30
                } minutes`,

              reply_to:
                "contact@automationspectrum.com.au",
            };


            await emailjs.send(
              serviceId,
              templateId,
              templateParameters,
              publicKey
            );


            confirmationEmailSent =
              true;


            setEmailSent(true);

          } catch (emailError) {

            /*
             * Zoom meeting already exists.
             *
             * Do NOT fail the entire booking
             * and do NOT ask customer to
             * resubmit.
             */

            console.error(
              "EnerG IQ booking email failed:",
              emailError
            );


            setEmailSent(false);
          }

        } else {

          console.warn(
            "EmailJS booking configuration is missing."
          );


          setEmailSent(false);
        }


        /* =================================================
           STEP 3
           SHOW CONFIRMATION
        ================================================= */

        console.log(
          "EnerG IQ Tech booking confirmed:",
          {
            meeting:
              result.meeting,

            visitor: {
              name:
                `${formData.firstName} ${formData.lastName}`,

              email:
                formData.email,

              organisation:
                formData.organisation,
            },

            emailSent:
              confirmationEmailSent,
          }
        );


        setSubmitted(true);


        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });

      } catch (error) {

        console.error(
          "EnerG IQ booking failed:",
          error
        );


        setSubmitError(
          error?.message ||
          "We could not complete your booking. Please try again."
        );

      } finally {

        setSubmitting(false);
      }
    };


  /* =========================================================
     CONFIRMATION
  ========================================================= */

  if (submitted) {

    return (

      <main className="pilotDetailsPage">

        <section className="pilotConfirmation">


          <div className="pilotConfirmationIcon">

            <CheckCircle2
              size={42}
            />

          </div>


          <p>
            PILOT DISCUSSION
          </p>


          <h1>
            Your Meeting
            Is Confirmed.
          </h1>


          <span>

            Thank you,{" "}

            <strong>
              {formData.firstName}
            </strong>.

            {" "}Your EnerG IQ Tech
            Pilot Discussion is scheduled
            for{" "}

            <strong>
              {formatDate(
                booking.date
              )}
            </strong>

            {" "}at{" "}

            <strong>
              {formatTime(
                booking.time
              )}
            </strong>.

          </span>


          <div className="pilotConfirmationCard">

            <CalendarDays />

            <div>

              <strong>
                EnerG IQ Tech Pilot Discussion
              </strong>


              <span>
                {formatDate(
                  booking.date
                )}
              </span>


              <span>

                {formatTime(
                  booking.time
                )}

                {" "}•{" "}

                {booking.duration || 30}
                {" "}minutes

              </span>


              <span>
                Zoom
              </span>

            </div>

          </div>


          {emailSent ? (

            <p className="pilotConfirmationNote">

              A confirmation email with your
              Zoom meeting link has been sent
              to{" "}

              <strong>
                {formData.email}
              </strong>.

            </p>

          ) : (

            <div className="pilotConfirmationEmailWarning">

              <Mail size={19} />

              <span>

                Your Zoom meeting has been
                created successfully, but we
                could not send the automated
                confirmation email.

                {" "}

                Please save the Zoom meeting
                link below.

              </span>

            </div>

          )}


          {meetingResult?.join_url && (

            <a
              href={
                meetingResult.join_url
              }
              target="_blank"
              rel="noreferrer"
              className="pilotDetailsPrimary pilotZoomJoinButton"
            >

              Join Zoom Meeting

              <ExternalLink
                size={18}
              />

            </a>

          )}


          <p className="pilotConfirmationSupport">

            Need to change your meeting?

            {" "}

            Email{" "}

            <a
              href="mailto:contact@automationspectrum.com.au"
            >
              contact@automationspectrum.com.au
            </a>.

          </p>


          <button
            type="button"
            onClick={() =>
              navigate("/")
            }
            className="pilotConfirmationReturn"
          >

            Return to EnerG IQ Tech

          </button>

        </section>

      </main>
    );
  }


  /* =========================================================
     DETAILS FORM
  ========================================================= */

  return (

    <main className="pilotDetailsPage">


      {/* =====================================================
          BACK
      ===================================================== */}

      <div className="pilotDetailsBackRow">

        <button
          type="button"
          onClick={() =>
            navigate(
              "/book-pilot"
            )
          }
          className="pilotDetailsBack"
          disabled={
            submitting
          }
        >

          <ArrowLeft
            size={18}
          />

          Change date or time

        </button>

      </div>


      <section className="pilotDetailsLayout">


        {/* =================================================
            LEFT SUMMARY
        ================================================= */}

        <aside className="pilotDetailsSummary">


          <p>
            YOUR PILOT DISCUSSION
          </p>


          <h1>
            Tell Us About Your Energy
            Environment.
          </h1>


          <span>

            This helps us make the
            30-minute discussion relevant
            to your organisation and
            energy priorities.

          </span>


          <div className="pilotBookingSummary">


            <div>

              <CalendarDays />

              <span>

                {formatDate(
                  booking.date
                )}

              </span>

            </div>


            <div>

              <Clock3 />

              <span>

                {formatTime(
                  booking.time
                )}

                {" "}•{" "}

                {booking.duration || 30}
                {" "}minutes

              </span>

            </div>


            <div>

              <MapPin />

              <span>
                Zoom meeting
              </span>

            </div>

          </div>


          <div className="pilotSummaryBenefits">


            <div>

              <Zap />

              <span>
                Energy cost reduction
              </span>

            </div>


            <div>

              <Leaf />

              <span>
                CO₂ reduction opportunities
              </span>

            </div>


            <div>

              <ShieldCheck />

              <span>
                Pilot-first validation
              </span>

            </div>

          </div>

        </aside>


        {/* =================================================
            FORM
        ================================================= */}

        <section className="pilotDetailsFormPanel">


          <div className="pilotDetailsFormHeader">


            <p>
              YOUR INFORMATION
            </p>


            <h2>
              Book Your EnerG IQ Tech
              Pilot Discussion
            </h2>


            <span>
              Fields marked * are required.
            </span>

          </div>


          <form
            onSubmit={
              handleSubmit
            }
            className="pilotDetailsForm"
          >


            {/* =============================================
                NAME
            ============================================= */}

            <div className="pilotFormTwoColumns">


              <label>

                First name *

                <input
                  type="text"
                  name="firstName"
                  required
                  autoComplete="given-name"
                  value={
                    formData.firstName
                  }
                  onChange={
                    handleChange
                  }
                  disabled={
                    submitting
                  }
                />

              </label>


              <label>

                Last name *

                <input
                  type="text"
                  name="lastName"
                  required
                  autoComplete="family-name"
                  value={
                    formData.lastName
                  }
                  onChange={
                    handleChange
                  }
                  disabled={
                    submitting
                  }
                />

              </label>

            </div>


            {/* =============================================
                EMAIL
            ============================================= */}

            <label>

              Work email *

              <div className="pilotInputIcon">

                <Mail
                  size={18}
                />

                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  value={
                    formData.email
                  }
                  onChange={
                    handleChange
                  }
                  disabled={
                    submitting
                  }
                />

              </div>

            </label>


            {/* =============================================
                ORGANISATION / JOB TITLE
            ============================================= */}

            <div className="pilotFormTwoColumns">


              <label>

                Organisation *

                <div className="pilotInputIcon">

                  <Building2
                    size={18}
                  />

                  <input
                    type="text"
                    name="organisation"
                    required
                    autoComplete="organization"
                    value={
                      formData.organisation
                    }
                    onChange={
                      handleChange
                    }
                    disabled={
                      submitting
                    }
                  />

                </div>

              </label>


              <label>

                Job title

                <div className="pilotInputIcon">

                  <UserRound
                    size={18}
                  />

                  <input
                    type="text"
                    name="jobTitle"
                    autoComplete="organization-title"
                    value={
                      formData.jobTitle
                    }
                    onChange={
                      handleChange
                    }
                    disabled={
                      submitting
                    }
                  />

                </div>

              </label>

            </div>


            {/* =============================================
                INDUSTRY / SITES
            ============================================= */}

            <div className="pilotFormTwoColumns">


              <label>

                Organisation type *

                <select
                  name="organisationType"
                  required
                  value={
                    formData
                      .organisationType
                  }
                  onChange={
                    handleChange
                  }
                  disabled={
                    submitting
                  }
                >

                  <option value="">
                    Select industry
                  </option>


                  {organisationTypes.map(
                    (type) => (

                      <option
                        key={type}
                        value={type}
                      >
                        {type}
                      </option>

                    )
                  )}

                </select>

              </label>


              <label>

                Number of sites/buildings

                <input
                  type="text"
                  name="numberOfSites"
                  placeholder="e.g. 4"
                  value={
                    formData.numberOfSites
                  }
                  onChange={
                    handleChange
                  }
                  disabled={
                    submitting
                  }
                />

              </label>

            </div>


            {/* =============================================
                PHONE / WEBSITE
            ============================================= */}

            <div className="pilotFormTwoColumns">


              <label>

                Phone

                <input
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  value={
                    formData.phone
                  }
                  onChange={
                    handleChange
                  }
                  disabled={
                    submitting
                  }
                />

              </label>


              <label>

                Website

                <input
                  type="url"
                  name="website"
                  placeholder="https://"
                  value={
                    formData.website
                  }
                  onChange={
                    handleChange
                  }
                  disabled={
                    submitting
                  }
                />

              </label>

            </div>


            {/* =============================================
                DISCUSSION TOPICS
            ============================================= */}

            <fieldset
              className="pilotTopics"
              disabled={
                submitting
              }
            >


              <legend>

                What would you like to
                discuss? *

              </legend>


              <p>
                Select all that apply.
              </p>


              <div className="pilotTopicGrid">


                {discussionOptions.map(
                  (topic) => {

                    const checked =
                      formData
                        .discussionTopics
                        .includes(
                          topic
                        );


                    return (

                      <label
                        key={topic}
                        className={
                          checked
                            ? "pilotTopic selected"
                            : "pilotTopic"
                        }
                      >

                        <input
                          type="checkbox"
                          checked={
                            checked
                          }
                          onChange={() =>
                            toggleDiscussion(
                              topic
                            )
                          }
                        />

                        <span>
                          {topic}
                        </span>

                      </label>

                    );
                  }
                )}

              </div>

            </fieldset>


            {/* =============================================
                ENERGY CHALLENGE
            ============================================= */}

            <label>

              Tell us briefly about your
              energy challenge

              <textarea
                name="message"
                rows="5"
                placeholder="For example: refrigeration energy costs, HVAC after-hours load, peak-demand charges, manufacturing utilities, carbon reduction targets..."
                value={
                  formData.message
                }
                onChange={
                  handleChange
                }
                disabled={
                  submitting
                }
              />

            </label>


            {/* =============================================
                PRIVACY
            ============================================= */}

            <div className="pilotDetailsPrivacy">

              <ShieldCheck
                size={18}
              />

              <span>

                Your information will be
                handled in accordance with
                the EnerG IQ Tech Privacy
                Policy.

              </span>

            </div>


            {/* =============================================
                ERROR
            ============================================= */}

            {submitError && (

              <div
                className="pilotDetailsError"
                role="alert"
              >

                {submitError}

              </div>

            )}


            {/* =============================================
                SUBMIT
            ============================================= */}

            <button
              type="submit"
              className="pilotDetailsPrimary"
              disabled={
                submitting ||
                formData
                  .discussionTopics
                  .length === 0
              }
            >

              {submitting
                ? "Confirming Your Meeting..."
                : "Confirm Pilot Discussion"
              }

            </button>


            {submitting && (

              <p className="pilotDetailsSubmittingNote">

                Creating your secure Zoom
                meeting and preparing your
                confirmation...

              </p>

            )}

          </form>

        </section>

      </section>

    </main>
  );
}