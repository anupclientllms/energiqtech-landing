import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Activity,
  ArrowRight,
  BatteryCharging,
  BookOpen,
  Brain,
  Building2,
  CheckCircle2,
  ChevronRight,
  Cpu,
  Droplets,
  Dumbbell,
  FlaskConical,
  GraduationCap,
  Hotel,
  Layers3,
  Leaf,
  Lightbulb,
  Moon,
  Network,
  Server,
  ShieldCheck,
  SunMedium,
  Utensils,
  Waves,
  Zap,
} from "lucide-react";

import "../styles/UniversityAI.css";


const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },

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
   CONNECTED UNIVERSITY ASSETS
========================================================= */

const assets = [
  [
    Building2,
    "Teaching Space HVAC",
    "Reduce HVAC energy waste across lecture theatres, classrooms and teaching spaces using timetable, occupancy and environmental data while maintaining comfort.",
  ],

  [
    FlaskConical,
    "Laboratories & Fume Extraction",
    "Identify excessive ventilation, extraction and research-equipment energy consumption while maintaining laboratory safety and research requirements.",
  ],

  [
    Waves,
    "Campus Central Plant",
    "Improve chiller, boiler, pump and thermal-storage operation to reduce central-plant energy consumption and peak demand.",
  ],

  [
    Server,
    "Research Computing & Server Rooms",
    "Analyse cooling demand, UPS loads, server-room energy consumption and research-computing operating patterns to identify efficiency opportunities.",
  ],

  [
    BookOpen,
    "Libraries & Study Spaces",
    "Optimise HVAC, lighting and after-hours schedules around actual occupancy across libraries, study zones and shared learning areas.",
  ],

  [
    Hotel,
    "Student Accommodation",
    "Reduce unnecessary energy consumption across residences, common areas, hot water, HVAC and occupancy-driven loads while protecting student comfort.",
  ],

  [
    Lightbulb,
    "Campus Lighting",
    "Reduce internal, external and common-area lighting energy use through occupancy, daylight and timetable intelligence.",
  ],

  [
    Dumbbell,
    "Sports & Aquatic Facilities",
    "Analyse pool heating, ventilation, pumps, lighting and other high-load recreation systems to identify energy and cost reduction opportunities.",
  ],

  [
    Utensils,
    "Food Services & Refrigeration",
    "Detect energy waste across kitchens, cool rooms, refrigeration, hot water and food-service operating schedules.",
  ],

  [
    Activity,
    "Lifts & Escalators",
    "Analyse operating patterns, standby loads and abnormal energy behaviour across campus vertical-transport systems.",
  ],

  [
    Droplets,
    "Water, Irrigation & Pumps",
    "Identify excessive runtime, pressure loss, inefficient pumping and irrigation schedules that contribute to avoidable energy consumption.",
  ],

  [
    BatteryCharging,
    "Fleet, Staff & Student EV Charging",
    "Coordinate campus charging around demand, tariffs and renewable generation to reduce charging costs and peak-demand exposure.",
  ],

  [
    SunMedium,
    "Solar & Battery",
    "Coordinate solar generation and battery dispatch to improve onsite renewable utilisation, reduce peak demand and lower associated carbon impact.",
  ],

  [
    Moon,
    "After-Hours Base Load",
    "Detect buildings, laboratories, equipment and common-area loads operating unnecessarily outside teaching, research or accommodation requirements.",
  ],

  [
    Network,
    "Campus Energy Coordination",
    "Coordinate campus buildings, central plant, DER, charging and flexible loads through one AI energy optimisation layer.",
  ],
];


/* =========================================================
   AI OPTIMISATION SCENARIOS
========================================================= */

const scenarios = [
  [
    Building2,
    "Timetable-Driven HVAC Optimisation",
    "Align HVAC schedules with room bookings, occupancy and teaching timetables while maintaining comfort.",
    "Reduce HVAC energy cost & CO₂ impact",
  ],

  [
    FlaskConical,
    "Laboratory Ventilation Intelligence",
    "Detect excessive air changes, poor extraction schedules and unused laboratory ventilation loads while maintaining safety requirements.",
    "Reduce laboratory energy intensity",
  ],

  [
    Moon,
    "After-Hours Load Reduction",
    "Identify buildings, lighting, equipment and systems operating outside teaching, research or accommodation requirements.",
    "Reduce campus base-load cost",
  ],

  [
    Waves,
    "Central Plant Optimisation",
    "Improve chiller, boiler and pump sequencing using campus demand, weather and occupancy forecasts.",
    "Reduce central-plant energy costs",
  ],

  [
    BatteryCharging,
    "EV Charging Coordination",
    "Schedule fleet, staff and student charging around campus demand, tariffs and renewable generation.",
    "Reduce charging cost & demand peaks",
  ],

  [
    SunMedium,
    "Solar & Battery Optimisation",
    "Coordinate solar generation, battery storage and flexible campus demand to improve renewable-energy utilisation.",
    "Reduce grid cost & carbon impact",
  ],
];


/* =========================================================
   END-TO-END WORKFLOW
========================================================= */

const workflow = [
  [
    "01",
    "Connect",
    "Connect BMS, meters, central plant, laboratories, accommodation, lighting, EV charging and DER telemetry through the AI Energy Gateway.",
  ],

  [
    "02",
    "Detect",
    "Identify energy waste, abnormal equipment behaviour, peak-demand events and unnecessary after-hours consumption.",
  ],

  [
    "03",
    "Analyse",
    "Use AI Decision Agents and Digital Twin context to investigate root causes and quantify potential energy, financial and emissions impact across campus buildings and assets.",
  ],

  [
    "04",
    "Simulate",
    "Evaluate optimisation actions against teaching timetables, research requirements, student comfort, safety and operational constraints.",
  ],

  [
    "05",
    "Approve",
    "Route explainable recommendations through facilities, sustainability and campus human-in-the-loop approval workflows.",
  ],

  [
    "06",
    "Measure",
    "Compare results against established baselines to quantify energy reduction, peak-demand reduction, financial savings, associated CO₂ outcomes and operational performance.",
  ],
];


/* =========================================================
   PILOT SCOPE
========================================================= */

const pilotItems = [
  "Campus energy baseline and priority-building or system assessment",
  "BMS, smart-meter, sub-meter and available telemetry integration",
  "Teaching-space, laboratory, central-plant and after-hours energy analysis",
  "Peak-demand and campus base-load optimisation scenarios",
  "EV charging, solar and battery coordination opportunities",
  "Digital Twin investigation and AI-recommended actions",
  "Human-in-the-loop facilities and sustainability approval workflow",
  "Energy cost, peak demand, associated CO₂ and ROI measurement",
];


export default function UniversityAI({ openPilotModal }) {
  const handlePilotClick = () => {
    if (typeof openPilotModal === "function") {
      openPilotModal();
      return;
    }

    document
      .getElementById("university-pilot")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };


  return (
    <main className="universityPage">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="universityHero">

        <motion.div
          className="universityHeroContent"
          variants={stagger}
          initial="hidden"
          animate="show"
        >

          <motion.div
            className="universityBadge"
            variants={fadeUp}
          >
            <GraduationCap size={17} />
            EnerG IQ Tech University AI
          </motion.div>


          <motion.h1 variants={fadeUp}>
            Reduce Campus Energy Costs & CO₂ Emissions Without Compromising
            Teaching or Research.
          </motion.h1>


          <motion.p
            className="universityLead"
            variants={fadeUp}
          >
            EnerG IQ Tech University AI helps universities identify and
            reduce energy waste, peak demand and associated CO₂ emissions
            across teaching buildings, laboratories, central plant,
            accommodation and connected energy assets - while supporting
            teaching, research, student comfort and 24/7 campus operations.
          </motion.p>


          <motion.p
            className="universityDescription"
            variants={fadeUp}
          >
            Edge AI analyses campus operational data in real time to detect
            after-hours consumption, inefficient equipment operation and
            costly demand peaks. The AI Energy Gateway connects BMS, meters,
            central plant, laboratories, EV charging, Solar PV, batteries and
            other campus systems so EnerG IQ Tech can recommend governed
            optimisation actions and measure resulting energy, financial and
            carbon outcomes.
          </motion.p>


          <motion.div
            className="universityHeroButtons"
            variants={fadeUp}
          >

           
            <Link to="/book-pilot" className="universityPrimaryBtn">
              Book a Discussion
              <ChevronRight size={19} />
            </Link>


            <a
              href="#university-workflow"
              className="universitySecondaryBtn"
            >
              View AI Workflow
            </a>

          </motion.div>


          <motion.div
            className="universityHeroTags"
            variants={fadeUp}
          >

            <span>
              <Zap size={15} />
              Energy Cost Reduction
            </span>

            <span>
              <Leaf size={15} />
              CO₂ Reduction
            </span>

            <span>
              <Activity size={15} />
              Peak Demand
            </span>

            <span>
              <GraduationCap size={15} />
              Teaching & Research Protected
            </span>

          </motion.div>

        </motion.div>


        {/* =====================================================
            HERO DASHBOARD
        ===================================================== */}

        <motion.div
          className="universityHeroVisual"
          initial={{
            opacity: 0,
            y: 28,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
        >

          <div className="universityDashboard">

            <div className="universityDashboardTop">

              <div>

                <strong>
                  Campus Energy Optimisation
                </strong>

                <span>
                  Energy, cost and sustainability overview
                </span>

              </div>


              <b>
                <Activity size={14} />
                Live
              </b>

            </div>


            <div className="universityKpis">

              <div>
                <small>
                  University Campuses
                </small>

                <strong>
                  4
                </strong>

                <span>
                  Connected campus sites
                </span>
              </div>


              <div>
                <small>
                  Asset Classes
                </small>

                <strong>
                  15
                </strong>

                <span>
                  Energy-intensive systems
                </span>
              </div>


              <div>
                <small>
                  Opportunities
                </small>

                <strong>
                  47
                </strong>

                <span>
                  Energy optimisation items
                </span>
              </div>


              <div>
                <small>
                  After-Hours Load
                </small>

                <strong>
                  18%
                </strong>

                <span>
                  Indicative opportunity
                </span>
              </div>

            </div>


            <div className="universityInsightCard">

              <div className="universityInsightIcon">
                <Brain size={22} />
              </div>


              <div>

                <strong>
                  AI Energy Recommendation
                </strong>

                <p>
                  Teaching Building B is maintaining full HVAC operation
                  after scheduled classes have ended. Review an approved
                  setback from 8:30 PM while retaining required ventilation
                  in occupied study areas to reduce unnecessary energy
                  consumption.
                </p>

              </div>

            </div>


            <div className="universityApproval">

              <span>
                <ShieldCheck size={18} />
                Facilities approval required before execution
              </span>

              <button type="button">
                Review Action
              </button>

            </div>

          </div>

        </motion.div>

      </section>


      {/* =========================================================
          VALUE FLOW
      ========================================================= */}

      <section className="universityStrip">

        <span>Connect</span>
        <ArrowRight size={15} />

        <span>Detect Waste</span>
        <ArrowRight size={15} />

        <span>Analyse</span>
        <ArrowRight size={15} />

        <span>Optimise</span>
        <ArrowRight size={15} />

        <span>Approve</span>
        <ArrowRight size={15} />

        <span>Measure Savings</span>

      </section>


      {/* =========================================================
          UNIVERSITY ENERGY CHALLENGE
      ========================================================= */}

      <section className="universitySection universityChallengeSection">

        <div className="universitySectionHeader">

          <p>
            University Energy Challenge
          </p>

          <h2>
            High Campus Energy Costs & CO₂ Emissions Across Diverse
            Teaching, Research and Residential Operations.
          </h2>

          <span>
            Universities operate diverse buildings, laboratories, central
            plant, accommodation, research computing and community facilities
            across highly variable schedules. The challenge is reducing
            energy consumption, peak demand and associated emissions while
            supporting teaching, research, safety and 24/7 campus services.
          </span>

        </div>


        <div className="universityChallengeGrid">

          {[
            [
              Zap,
              "High Energy Costs & Peak Demand",
              "Teaching, research, accommodation, laboratories and central plant can create significant energy expenditure and variable demand peaks.",
            ],

            [
              Leaf,
              "CO₂ & Sustainability Targets",
              "Reducing unnecessary campus energy consumption can lower associated CO₂ emissions and support university sustainability and decarbonisation objectives.",
            ],

            [
              FlaskConical,
              "Research & Teaching Constraints",
              "Optimisation must maintain laboratory safety, specialist research requirements, teaching schedules and student comfort.",
            ],

            [
              Moon,
              "After-Hours Energy Waste",
              "Buildings, laboratories, equipment and common areas can continue consuming energy after scheduled activity has fallen significantly.",
            ],
          ].map(([Icon, title, text]) => (

            <article key={title}>

              <div className="universityIcon">
                <Icon size={24} />
              </div>

              <h3>
                {title}
              </h3>

              <p>
                {text}
              </p>

            </article>

          ))}

        </div>

      </section>


      {/* =========================================================
          CONNECTED UNIVERSITY ASSETS
      ========================================================= */}

      <section className="universitySection universityAssetsSection">

        <div className="universitySectionHeader">

          <p>
            Connected University Assets
          </p>

          <h2>
            Optimise the Buildings and Systems Driving Campus Energy Costs.
          </h2>

          <span>
            The AI Energy Gateway connects existing university infrastructure,
            BMS, meters and available telemetry so EnerG IQ Tech can identify
            energy waste and optimisation opportunities without requiring
            wholesale replacement of campus systems.
          </span>

        </div>


        <motion.div
          className="universityAssetsGrid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.08,
          }}
        >

          {assets.map(([Icon, title, text]) => (

            <motion.article
              className="universityAssetCard"
              variants={fadeUp}
              key={title}
            >

              <div className="universityIcon">
                <Icon size={23} />
              </div>

              <h3>
                {title}
              </h3>

              <p>
                {text}
              </p>

            </motion.article>

          ))}

        </motion.div>

      </section>


      {/* =========================================================
          AI OPTIMISATION SCENARIOS
      ========================================================= */}

      <section className="universitySection universityScenarioSection">

        <div className="universitySectionHeader">

          <p>
            AI Optimisation Scenarios
          </p>

          <h2>
            Turn Campus Energy Waste Into Measurable Cost & Carbon
            Reduction Opportunities.
          </h2>

          <span>
            EnerG IQ Tech combines the AI Energy Gateway, Digital Twin,
            Decision Agents and human-in-the-loop governance to identify
            practical optimisation opportunities while protecting teaching,
            research, student comfort and campus operations.
          </span>

        </div>


        <div className="universityScenarioGrid">

          {scenarios.map(([Icon, title, text, outcome]) => (

            <article
              className="universityScenarioCard"
              key={title}
            >

              <div className="universityScenarioTop">

                <div className="universityIcon">
                  <Icon size={23} />
                </div>

                <span>
                  AI Scenario
                </span>

              </div>

              <h3>
                {title}
              </h3>

              <p>
                {text}
              </p>

              <div className="universityOutcome">

                <CheckCircle2 size={17} />

                {outcome}

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* =========================================================
          WORKFLOW
      ========================================================= */}

      <section
        className="universitySection universityWorkflowSection"
        id="university-workflow"
      >

        <div className="universitySectionHeader universitySectionHeaderLight">

          <p>
            End-to-End AI Workflow
          </p>

          <h2>
            From Campus Energy Data to Measurable Savings & CO₂ Outcomes.
          </h2>

          <span>
            EnerG IQ Tech transforms campus telemetry into explainable,
            governed optimisation recommendations and measures resulting
            energy, financial and associated CO₂ outcomes while keeping
            facilities, sustainability and campus teams in control.
          </span>

        </div>


        <div className="universityWorkflow">

          {workflow.map(([number, title, text]) => (

            <div
              className="universityWorkflowStep"
              key={number}
            >

              <b>
                {number}
              </b>

              <div>

                <h3>
                  {title}
                </h3>

                <p>
                  {text}
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* =========================================================
          SHARED PLATFORM
      ========================================================= */}

      <section className="universitySection universityPlatformSection">

        <div className="universityPlatformPanel">

          <div className="universityPlatformCopy">

            <p>
              Shared EnerG IQ Tech Platform
            </p>

            <h2>
              University-Specific Optimisation Built on One Energy
              Intelligence Architecture.
            </h2>

            <span>
              University AI uses the shared EnerG IQ Tech architecture to
              connect campus systems, identify energy waste, recommend
              governed optimisation actions and quantify energy, financial
              and associated carbon outcomes.
            </span>


            <ul>

              <li>
                <CheckCircle2 size={18} />
                AI Energy Gateway connectivity
              </li>

              <li>
                <CheckCircle2 size={18} />
                Digital Twin campus context
              </li>

              <li>
                <CheckCircle2 size={18} />
                Configurable AI Decision Agents
              </li>

              <li>
                <CheckCircle2 size={18} />
                Human-in-the-loop campus governance
              </li>

              <li>
                <CheckCircle2 size={18} />
                Energy, cost, CO₂ and ROI intelligence
              </li>

            </ul>

          </div>


          <div className="universityPlatformFlow">

            <div className="universityPlatformNode">

              <GraduationCap size={25} />

              <span>
                University Assets
              </span>

            </div>


            <ChevronRight size={20} />


            <div className="universityPlatformNode featured">

              <Cpu size={25} />

              <span>
                AI Energy Gateway
              </span>

            </div>


            <ChevronRight size={20} />


            <div className="universityPlatformNode">

              <Layers3 size={25} />

              <span>
                Digital Twin
              </span>

            </div>


            <ChevronRight size={20} />


            <div className="universityPlatformNode">

              <Brain size={25} />

              <span>
                AI Optimisation
              </span>

            </div>


            <ChevronRight size={20} />


            <div className="universityPlatformNode">

              <ShieldCheck size={25} />

              <span>
                Measured Outcomes
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          PILOT
      ========================================================= */}

      <section
        className="universitySection universityPilotSection"
        id="university-pilot"
      >

        <div className="universityPilotBox">

          <div className="universityPilotCopy">

            <p>
              University Pilot Program
            </p>

            <h2>
              Start With One Campus Energy Problem. Prove the Savings
              Before Scaling.
            </h2>

            <span>
              Establish an energy baseline for one campus, building or
              high-value system, identify optimisation opportunities and
              quantify potential energy-cost, peak-demand and associated CO₂
              outcomes while validating teaching, research and operational
              safeguards before campus-wide deployment.
            </span>


            <button
              type="button"
              className="universityPrimaryBtn"
              onClick={handlePilotClick}
            >
              Discuss a University Pilot
              <ChevronRight size={18} />
            </button>

          </div>


          <div className="universityPilotList">

            <h3>
              Indicative Pilot Scope
            </h3>

            <ul>

              {pilotItems.map((item) => (

                <li key={item}>

                  <CheckCircle2 size={18} />

                  <span>
                    {item}
                  </span>

                </li>

              ))}

            </ul>

          </div>

        </div>

      </section>


      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="universityCta">

        <div>

          <p>
            Now Onboarding University Pilot Partners
          </p>

          <h2>
            Reduce Campus Energy Costs & CO₂ Emissions While Supporting
            Teaching & Research.
          </h2>

          <span>
            Start with one measurable campus energy challenge. Establish the
            baseline, identify energy waste and determine whether the
            potential financial and carbon outcomes justify broader
            deployment - while protecting teaching, research, student comfort
            and campus operations.
          </span>

        </div>


        <div className="universityCtaActions">

        
           
          <Link to="/book-pilot" className="universityPrimaryBtn">
            Book a Discussion
            <ChevronRight size={19} />
          </Link>

        </div>

      </section>

    </main>
  );
}