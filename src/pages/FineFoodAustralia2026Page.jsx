import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  ChevronRight,
  ExternalLink,
  Factory,
  Globe2,
  Leaf,
  MapPin,
  Snowflake,
  Sparkles,
  ThermometerSnowflake,
  UtensilsCrossed,
  Zap,
} from "lucide-react";

import "../styles/FineFoodAustralia2026Page.css";

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
   IMAGE MAP
   These are the 5 images reserved for the Fine Food page.
========================================================= */

const FINE_FOOD_IMAGES = {
  brand:
    "/images/events/fine-food-2026/Finefoodevent_logo.jpg",

  flavoursNSW:
    "/images/events/fine-food-2026/Finefoodevent_flavor_nsw_pic.jpg",

  ferguson:
    "/images/events/fine-food-2026/Finefoodevent_ferg_pic.jpg",

  fergusonCooking:
    "/images/events/fine-food-2026/Finefoodevent_ferg_cooking_pic.jpg",

  italy:
    "/images/events/fine-food-2026/Finefoodevent_italy.jpg",
};

/* =========================================================
   INDUSTRY CONTEXT CARDS
========================================================= */

const industryContext = [
  {
    image: FINE_FOOD_IMAGES.flavoursNSW,
    icon: UtensilsCrossed,
    title: "Australian Food Ecosystem",
    text:
      "The exhibition floor brought together producers, suppliers and regional food-industry participants across a wide range of product and service categories.",
  },
  {
    image: FINE_FOOD_IMAGES.ferguson,
    icon: Snowflake,
    title: "Refrigeration & Cold-Chain Context",
    text:
      "Refrigerated display and cold-chain infrastructure reinforce the relevance of refrigeration performance, operating schedules and energy demand within food-sector environments.",
  },
  {
    image: FINE_FOOD_IMAGES.fergusonCooking,
    icon: ThermometerSnowflake,
    title: "Food Production & Thermal Operations",
    text:
      "Live food preparation and production environments highlight the need to optimise energy without compromising process requirements, quality or operational constraints.",
  },
  {
    image: FINE_FOOD_IMAGES.italy,
    icon: Globe2,
    title: "International Industry Participation",
    text:
      "Fine Food Australia also brought international exhibitors and trade organisations into the Australian food-industry ecosystem.",
  },
];

/* =========================================================
   PAGE
========================================================= */

export default function FineFoodAustralia2026Page() {
  return (
    <main className="fineFoodPage">
      {/* =====================================================
          HERO
          Uses the personal EnerG IQ polo image as requested.
      ===================================================== */}

      <section className="fineFoodHero">
        <motion.div
          className="fineFoodHeroCopy"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.div className="fineFoodBadge" variants={fadeUp}>
            <Sparkles size={17} />
            Fine Food Australia 2026
          </motion.div>

          <motion.h1 variants={fadeUp}>
            EnerG IQ Tech at Fine Food Australia 2026.
          </motion.h1>

          <motion.p className="fineFoodLead" variants={fadeUp}>
            Exploring how operational energy intelligence can support food
            manufacturing, refrigeration, freezing, cold-chain and other
            energy-intensive food operations.
          </motion.p>

          <motion.div className="fineFoodMeta" variants={fadeUp}>
            <span>
              <CalendarDays size={16} />
              31 Aug – 3 Sep 2026
            </span>

            <span>
              <MapPin size={16} />
              Melbourne Convention & Exhibition Centre
            </span>
          </motion.div>

          <motion.p className="fineFoodDescription" variants={fadeUp}>
            Fine Food Australia brought together foodservice, hospitality,
            retail, equipment, technology and supplier ecosystems in Melbourne.
            EnerG IQ Tech attended to better understand the operational
            challenges and energy opportunities across the sector.
          </motion.p>

          <motion.div className="fineFoodHeroActions" variants={fadeUp}>
            <Link to="/events" className="fineFoodSecondaryBtn">
              <ArrowLeft size={17} />
              Back to Events
            </Link>

            <a
              href="https://finefoodaustralia.com.au/"
              target="_blank"
              rel="noreferrer"
              className="fineFoodPrimaryBtn"
            >
              Official Event
              <ExternalLink size={16} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="fineFoodHeroVisual"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
        >
          <div className="fineFoodBrandImageWrap">
            <img
              src={FINE_FOOD_IMAGES.brand}
              alt="EnerG IQ Tech branded presence at Fine Food Australia 2026"
            />
          </div>

          <div className="fineFoodBrandCaption">
            <span>EnerG IQ Tech presence</span>
            <strong>Fine Food Australia 2026 · Melbourne</strong>
          </div>
        </motion.div>
      </section>

      {/* =====================================================
          WHY THIS EVENT MATTERS
      ===================================================== */}

      <section className="fineFoodSection fineFoodWhySection">
        <div className="fineFoodSectionHeader">
          <p>Why This Event Matters</p>

          <h2>
            Food Operations Combine Energy-Intensive Assets With Strict
            Operational Constraints.
          </h2>

          <span>
            Refrigeration, freezing, thermal processing, cold-chain,
            compressed air and other site utilities can represent significant
            energy loads. The opportunity is not simply to reduce energy use,
            but to do so while respecting production, food-safety and operating
            requirements.
          </span>
        </div>

        <div className="fineFoodWhyGrid">
          <article>
            <div className="fineFoodWhyIcon">
              <Snowflake size={23} />
            </div>

            <h3>Refrigeration & Freezing</h3>

            <p>
              Identify abnormal baseload, inefficient staging, peak-demand
              events and opportunities to improve refrigeration performance.
            </p>
          </article>

          <article>
            <div className="fineFoodWhyIcon">
              <Factory size={23} />
            </div>

            <h3>Production & Thermal Processing</h3>

            <p>
              Understand how production schedules, warm-idle periods and thermal
              process requirements affect operational energy demand.
            </p>
          </article>

          <article>
            <div className="fineFoodWhyIcon">
              <Zap size={23} />
            </div>

            <h3>Energy Cost & Demand</h3>

            <p>
              Combine operational context with tariff and demand information to
              identify savings that are commercially meaningful.
            </p>
          </article>

          <article>
            <div className="fineFoodWhyIcon">
              <Leaf size={23} />
            </div>

            <h3>Energy-Related CO₂ Reduction</h3>

            <p>
              Lower operational energy use can support both cost reduction and
              measurable energy-related emissions outcomes.
            </p>
          </article>
        </div>
      </section>

      {/* =====================================================
          INDUSTRY CONTEXT ACROSS THE EXHIBITION FLOOR
          Uses the 4 reserved event-context images.
      ===================================================== */}

      <section className="fineFoodSection fineFoodContextSection">
        <div className="fineFoodSectionHeader">
          <p>Industry Context Across the Exhibition Floor</p>

          <h2>
            A Practical View of the Food-Industry Ecosystem.
          </h2>

          <span>
            These event photos capture different parts of the food-sector
            environment that are relevant to EnerG IQ Tech’s operational energy
            focus.
          </span>
        </div>

        <div className="fineFoodContextGrid">
          {industryContext.map((item) => {
            const Icon = item.icon;

            return (
              <motion.article
                className="fineFoodContextCard"
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.5,
                }}
              >
                <div className="fineFoodContextImage">
                  <img src={item.image} alt={item.title} />
                </div>

                <div className="fineFoodContextCopy">
                  <div className="fineFoodContextIcon">
                    <Icon size={19} />
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* =====================================================
          WHAT THIS REINFORCED FOR ENERG IQ TECH
      ===================================================== */}

      <section className="fineFoodSection fineFoodInsightSection">
        <div className="fineFoodInsightPanel">
          <div>
            <p>What This Reinforced for EnerG IQ Tech</p>

            <h2>
              Energy Intelligence Must Work Around the Operation - Not Against
              It.
            </h2>

            <span>
              Food manufacturing is a strong fit for EnerG IQ Tech because
              energy optimisation decisions cannot be made in isolation.
              Production schedules, temperature limits, equipment constraints,
              maintenance conditions and tariff structures all matter.
            </span>
          </div>

          <div className="fineFoodInsightFlow">
            <div>
              <span>01</span>
              <strong>Connect</strong>
              <small>Gateway and operational data</small>
            </div>

            <ChevronRight size={20} />

            <div>
              <span>02</span>
              <strong>Understand</strong>
              <small>Asset and process context</small>
            </div>

            <ChevronRight size={20} />

            <div>
              <span>03</span>
              <strong>Identify</strong>
              <small>Savings opportunities</small>
            </div>

            <ChevronRight size={20} />

            <div>
              <span>04</span>
              <strong>Decide</strong>
              <small>Human-in-the-Loop action</small>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ENERG IQ FOR FOOD & BEVERAGE
      ===================================================== */}

      <section className="fineFoodSection fineFoodApplicationSection">
        <div className="fineFoodApplicationGrid">
          <div>
            <p>EnerG IQ Tech for Food & Beverage</p>

            <h2>
              From Energy Visibility to Measurable Savings.
            </h2>

            <span>
              EnerG IQ Tech is designed to connect operational data, understand
              context, detect abnormal behaviour, investigate causes and present
              measurable savings opportunities while keeping people in control
              of operational changes.
            </span>
          </div>

          <div className="fineFoodApplicationCards">
            <article>
              <strong>Detect</strong>
              <span>Identify abnormal energy behaviour.</span>
            </article>

            <article>
              <strong>Analyse</strong>
              <span>Understand the operational context.</span>
            </article>

            <article>
              <strong>Recommend</strong>
              <span>Quantify potential savings and impact.</span>
            </article>

            <article>
              <strong>Approve</strong>
              <span>Keep operational decisions Human-in-the-Loop.</span>
            </article>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="fineFoodCta">
        <div>
          <p>Food & Beverage Energy Intelligence</p>

          <h2>
            Exploring Energy Savings Across Food Manufacturing Operations.
          </h2>

          <span>
            Talk to EnerG IQ Tech about refrigeration, freezing, thermal
            processing, cold-chain, demand optimisation and measurable
            operational energy savings.
          </span>
        </div>

        <div className="fineFoodCtaActions">
          <Link to="/food-manufacturing-ai" className="fineFoodSecondaryBtn">
            Explore Food & Beverage AI
          </Link>

          <Link to="/book-discussion" className="fineFoodPrimaryBtn">
            Book a Discussion
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}
