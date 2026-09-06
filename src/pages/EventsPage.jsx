import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  CalendarDays,
  ChevronRight,
  ExternalLink,
  Leaf,
  MapPin,
  Sparkles,
  UtensilsCrossed,
  Zap,
} from "lucide-react";

import "../styles/EventsPage.css";

/* =========================================================
   MOTION
========================================================= */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

/* =========================================================
   FINE FOOD IMAGES USED ON THE EVENTS HUB

   IMPORTANT:
   Keep the Events hub intentionally light.

   Used here:
   - standing pic1 = featured hero / proof of attendance
   - floor pic     = Fine Food card in the event directory

   Reserved for the dedicated Fine Food event page:
   - Finefoodevent_logo.jpg
   - Finefoodevent_flavor_nsw_pic.jpg
   - Finefoodevent_ferg_pic.jpg
   - Finefoodevent_ferg_cooking_pic.jpg
   - Finefoodevent_italy.jpg
========================================================= */

const FINE_FOOD_IMAGES = {
  standing:
    "/images/events/fine-food-2026/Finefoodevent_standing_pic1.jpg",

  floor:
    "/images/events/fine-food-2026/Finefoodevent_floor_pic.jpg",
};

/* =========================================================
   INDUSTRY ENGAGEMENT AREAS
========================================================= */

const engagementAreas = [
  {
    icon: UtensilsCrossed,
    title: "Food Manufacturing",
    text:
      "Engaging with foodservice, hospitality, food manufacturing and supplier ecosystems around refrigeration, cold-chain, equipment and energy-intensive operations.",
  },
  {
    icon: Zap,
    title: "Energy",
    text:
      "Exploring renewable energy, energy management, grid and network technologies, EV infrastructure, electrification and demand flexibility.",
  },
  {
    icon: Building2,
    title: "Built Environment",
    text:
      "Connecting with contractors, developers, architects, engineers, government and facilities stakeholders around building performance, controls and energy optimisation.",
  },
];

/* =========================================================
   EVENTS DATA - SCALABLE
========================================================= */

const events = [
  {
    slug: "fine-food-australia-2026",
    category: "Food & Beverage",
    title: "Fine Food Australia 2026",
    date: "31 Aug – 3 Sep 2026",
    venue: "Melbourne Convention & Exhibition Centre",
    location: "Melbourne, Australia",
    status: "Attended",

    /*
      Use FLOOR image in the event directory card.
      The hero uses the standing image separately.
    */
    image: FINE_FOOD_IMAGES.floor,

    summary:
      "Australia’s leading trade event for the food industry, bringing together foodservice, hospitality and retail professionals across food, equipment, packaging, technology and supplier categories.",

    energIQFocus:
      "EnerG IQ Tech attended to explore operational energy opportunities across food manufacturing, refrigeration, freezing, cold-chain and production infrastructure.",

    officialUrl: "https://finefoodaustralia.com.au/",
    path: "/events/fine-food-australia-2026",
    featured: true,
  },

  {
    slug: "all-energy-australia-2026",
    category: "Energy",
    title: "All-Energy Australia 2026",
    date: "28–29 October 2026",
    venue: "Melbourne Convention & Exhibition Centre",
    location: "Melbourne, Australia",
    status: "Upcoming",

    /*
      Keep as placeholder until you attend.
      If this file does not exist, the icon fallback is shown.
    */
    image: "/images/events/all-energy-2026/all-energy-hero.jpg",

    summary:
      "APAC’s largest B2B renewable energy conference and exhibition, with dedicated zones covering Energy Management, EV Technology & Infrastructure, and Grid & Network.",

    energIQFocus:
      "A strong fit for EnerG IQ Tech’s energy management, demand optimisation, DER, electrification and intelligent operational energy use cases.",

    officialUrl: "https://www.all-energy.com.au/en-gb.html",
    path: "/events/all-energy-australia-2026",
  },

  {
    slug: "melbourne-build-expo-2026",
    category: "Built Environment",
    title: "Melbourne Build Expo 2026",
    date: "25–26 November 2026",
    venue: "Melbourne Convention & Exhibition Centre",
    location: "Melbourne, Australia",
    status: "Upcoming",

    /*
      Keep as placeholder until you attend.
      If this file does not exist, the icon fallback is shown.
    */
    image:
      "/images/events/melbourne-build-2026/melbourne-build-hero.jpg",

    summary:
      "Victoria’s major construction and design event, bringing together contractors, developers, architects, engineers, government and the wider built-environment ecosystem.",

    energIQFocus:
      "Relevant to EnerG IQ Tech’s commercial-building AI, HVAC optimisation, facilities intelligence and measurable building energy savings.",

    officialUrl: "https://melbournebuildexpo.com/",
    path: "/events/melbourne-build-expo-2026",
  },
];


/* =========================================================
   PAGE
========================================================= */

export default function EventsPage() {
  const featuredEvent =
    events.find((event) => event.featured) || events[0];

  return (
    <main className="eventsPage">
      {/* =====================================================
          HERO
          IMAGE: Finefoodevent_standing_pic1.jpg
      ===================================================== */}

      <section className="eventsHero">
        <motion.div
          className="eventsHeroContent"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.div className="eventsBadge" variants={fadeUp}>
            <Sparkles size={17} />
            Industry Engagement
          </motion.div>

          <motion.h1 variants={fadeUp}>
            Building Energy Intelligence With Industry.
          </motion.h1>

          <motion.p className="eventsLead" variants={fadeUp}>
            EnerG IQ Tech engages directly with energy-intensive industries,
            technology providers and operators to understand real operational
            challenges and shape practical AI-driven energy optimisation
            solutions.
          </motion.p>

          <motion.p className="eventsDescription" variants={fadeUp}>
            Our 2026 industry engagement spans food and beverage, clean energy
            and the built environment - three areas closely aligned with the
            operational energy challenges EnerG IQ Tech is designed to address.
          </motion.p>

          <motion.div className="eventsHeroButtons" variants={fadeUp}>
            <a href="#latest-engagement" className="eventsPrimaryBtn">
              Explore Industry Engagement
              <ChevronRight size={18} />
            </a>

            <Link to="/book-discussion" className="eventsSecondaryBtn">
              Book a Discussion
            </Link>
          </motion.div>

          <motion.div className="eventsHeroTags" variants={fadeUp}>
            <span>
              <UtensilsCrossed size={15} />
              Food & Beverage
            </span>

            <span>
              <Zap size={15} />
              Clean Energy
            </span>

            <span>
              <Building2 size={15} />
              Built Environment
            </span>

            <span>
              <Leaf size={15} />
              Energy & CO₂ Reduction
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          className="eventsHeroVisual"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
        >
          <div className="eventsFeaturedHeroCard">
            <div className="eventsFeaturedImageWrap">
              <img
                src={FINE_FOOD_IMAGES.standing}
                alt="EnerG IQ Tech at Fine Food Australia 2026"
              />

              <span className="eventsFeaturedStatus">
                {featuredEvent.status}
              </span>
            </div>

            <div className="eventsFeaturedHeroContent">
              <span>{featuredEvent.category}</span>

              <strong>{featuredEvent.title}</strong>

              <div className="eventsFeaturedMeta">
                <span>
                  <CalendarDays size={14} />
                  {featuredEvent.date}
                </span>

                <span>
                  <MapPin size={14} />
                  {featuredEvent.location}
                </span>
              </div>

              <p>{featuredEvent.energIQFocus}</p>

              <Link to={featuredEvent.path}>
                Read the event story
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* =====================================================
          INDUSTRY STRIP
      ===================================================== */}

      <section className="eventsStrip">
        <span>Food & Beverage</span>
        <ArrowRight size={15} />

        <span>Energy</span>
        <ArrowRight size={15} />

        <span>Built Environment</span>
        <ArrowRight size={15} />

        <span>Operational Energy Intelligence</span>
      </section>

      {/* =====================================================
          WHY INDUSTRY ENGAGEMENT
      ===================================================== */}

      <section className="eventsSection eventsWhySection">
        <div className="eventsSectionHeader">
          <p>Why Industry Engagement Matters</p>

          <h2>
            Energy Optimisation Works Best When It Starts With Real Operational
            Context.
          </h2>

          <span>
            Industry events give EnerG IQ Tech direct exposure to the
            technologies, operating environments, commercial priorities and
            infrastructure challenges shaping the sectors we serve.
          </span>
        </div>

        <motion.div
          className="eventsAreaGrid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.08,
          }}
        >
          {engagementAreas.map((area) => {
            const Icon = area.icon;

            return (
              <motion.article
                className="eventsAreaCard"
                variants={fadeUp}
                key={area.title}
              >
                <div className="eventsIcon">
                  <Icon size={24} />
                </div>

                <h3>{area.title}</h3>
                <p>{area.text}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </section>

      {/* =====================================================
          EVENT DIRECTORY
          Fine Food card uses Finefoodevent_floor_pic.jpg
      ===================================================== */}

      <section
        className="eventsSection eventsLatestSection"
        id="latest-engagement"
      >
        <div className="eventsSectionHeader">
          <p>2026 Industry Engagement</p>

          <h2>
            Food & Beverage, Clean Energy and the Built Environment.
          </h2>

          <span>
            Each event aligns to an EnerG IQ Tech market: energy-intensive food
            operations, energy management and distributed energy, or commercial
            building and facilities optimisation.
          </span>
        </div>

        <div className="eventsGrid">
          {events.map((event) => (
            <article className="eventsCard" key={event.slug}>
              <div className="eventsCardImage">
                <img
                  src={event.image}
                  alt={event.title}
                  onError={(eventObject) => {
                    eventObject.currentTarget.style.display = "none";
                  }}
                />

                <div className="eventsCardImageFallback">
                  {event.category === "Food & Beverage" && (
                    <UtensilsCrossed size={42} />
                  )}

                  {event.category === "Energy" && <Zap size={42} />}

                  {event.category === "Built Environment" && (
                    <Building2 size={42} />
                  )}
                </div>

                <span
                  className={`eventsCardStatus ${
                    event.status === "Upcoming"
                      ? "upcoming"
                      : "attended"
                  }`}
                >
                  {event.status}
                </span>
              </div>

              <div className="eventsCardBody">
                <span className="eventsCardCategory">
                  {event.category}
                </span>

                <h3>{event.title}</h3>

                <div className="eventsCardMeta">
                  <span>
                    <CalendarDays size={14} />
                    {event.date}
                  </span>

                  <span>
                    <MapPin size={14} />
                    {event.location}
                  </span>
                </div>

                <strong className="eventsVenue">
                  {event.venue}
                </strong>

                <p>{event.summary}</p>

                <div className="eventsCardFocus">
                  <span>EnerG IQ Tech focus</span>
                  <p>{event.energIQFocus}</p>
                </div>

                <div className="eventsCardActions">
                  {event.status === "Attended" ? (
                    <Link to={event.path}>
                      Read insight
                      <ArrowRight size={16} />
                    </Link>
                  ) : (
                    <span className="eventsComingSoon">
                      Event coverage coming after attendance
                    </span>
                  )}

                  <a
                    href={event.officialUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Official site
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =====================================================
          ENGAGE → PILOT → MEASURE
      ===================================================== */}

      <section className="eventsSection eventsApplicationSection">
        <div className="eventsApplicationPanel">
          <div>
            <p>From Industry Engagement to Practical Application</p>

            <h2>
              Industry Insight Helps Shape How EnerG IQ Tech Is Applied.
            </h2>

            <span>
              The objective is not simply to attend events. It is to understand
              where energy is being consumed, where operational constraints
              matter and where AI-assisted optimisation can create measurable
              value.
            </span>
          </div>

          <div className="eventsApplicationFlow">
            <div>
              <span>01</span>
              <strong>Engage</strong>
              <small>Understand sector challenges</small>
            </div>

            <ChevronRight size={20} />

            <div>
              <span>02</span>
              <strong>Translate</strong>
              <small>Map challenges to energy intelligence</small>
            </div>

            <ChevronRight size={20} />

            <div>
              <span>03</span>
              <strong>Pilot</strong>
              <small>Test a measurable energy problem</small>
            </div>

            <ChevronRight size={20} />

            <div>
              <span>04</span>
              <strong>Measure</strong>
              <small>Quantify savings and operational outcomes</small>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="eventsCta">
        <div>
          <p>Industry Engagement</p>

          <h2>
            Have an Energy-Intensive Operational Challenge Worth Exploring?
          </h2>

          <span>
            Talk to EnerG IQ Tech about a measurable energy problem across food
            manufacturing, commercial buildings, industrial facilities or
            connected energy infrastructure.
          </span>
        </div>

        <div className="eventsCtaActions">
          <Link to="/book-discussion" className="eventsPrimaryBtn">
            Book a Discussion
            <ChevronRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
