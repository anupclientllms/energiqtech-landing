import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Activity,
  ArrowRight,
  Brain,
  Building2,
  CheckCircle2,
  ChevronRight,
  Cpu,
  Droplets,
  Fan,
  Layers3,
  Leaf,
  Lightbulb,
  Monitor,
  Printer,
  Refrigerator,
  ShieldCheck,
  Utensils,
  Waves,
  Zap,
} from "lucide-react";

import "../styles/BuildingAI.css";


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
   CONNECTED BUILDING ASSETS
========================================================= */

const assets = [
  [
    Fan,
    "HVAC",
    "Reduce HVAC energy waste by optimising heating, cooling, ventilation, air handling, zoning and schedules using occupancy, weather and building conditions.",
  ],

  [
    Lightbulb,
    "Lighting",
    "Reduce unnecessary lighting energy use through occupancy, daylight, zoning, schedules and after-hours intelligence.",
  ],

  [
    Monitor,
    "Workstations",
    "Identify computers and workstation loads operating unnecessarily outside occupied hours to reduce avoidable building base load.",
  ],

  [
    Printer,
    "Printers",
    "Monitor printer fleets, standby demand and after-hours operation across offices and shared workspaces.",
  ],

  [
    Utensils,
    "Kitchen",
    "Analyse kitchen appliances, hot water, ventilation, refrigeration and operating schedules to identify avoidable energy consumption.",
  ],

  [
    Refrigerator,
    "Refrigeration",
    "Detect inefficient compressor cycling, temperature drift and abnormal energy use across cool rooms, fridges and freezers.",
  ],

  [
    Building2,
    "Lifts",
    "Monitor lift demand, standby loads, operating patterns and abnormal power behaviour to identify optimisation opportunities.",
  ],

  [
    Droplets,
    "Pumps",
    "Identify excessive runtime, pressure loss, inefficient speed control and abnormal pumping conditions that increase energy consumption.",
  ],

  [
    Waves,
    "Motors",
    "Analyse motor loading, runtime and abnormal power draw to identify equipment-efficiency and energy-saving opportunities.",
  ],
];


/* =========================================================
   AI OPTIMISATION SCENARIOS
========================================================= */

const scenarios = [
  [
    Fan,
    "After-Hours HVAC",
    "Detect HVAC operating outside occupancy or approved schedules and recommend safe setback actions.",
    "Reduce HVAC energy cost & CO₂ impact",
  ],

  [
    Zap,
    "Peak Demand Reduction",
    "Forecast building demand spikes and coordinate flexible loads and operating schedules.",
    "Reduce peak-demand charges",
  ],

  [
    Lightbulb,
    "Lighting Optimisation",
    "Identify lighting operating in unoccupied areas or outside approved schedules.",
    "Reduce lighting energy use & cost",
  ],

  [
    Monitor,
    "Workstation & Plug Load Reduction",
    "Detect workstations, printers and office equipment operating unnecessarily after hours.",
    "Reduce building base load",
  ],

  [
    Refrigerator,
    "Refrigeration Intelligence",
    "Detect abnormal cycling, temperature drift and inefficient refrigeration operation.",
    "Reduce refrigeration energy waste",
  ],

  [
    Droplets,
    "Pumps & Motors Optimisation",
    "Identify excessive runtime, inefficient control and abnormal power behaviour.",
    "Improve equipment energy efficiency",
  ],
];


/* =========================================================
   AI WORKFLOW
========================================================= */

const workflow = [
  [
    "01",
    "Connect",
    "Connect BMS, meters, HVAC, lighting, plug loads, refrigeration, lifts, pumps and motors through the AI Energy Gateway.",
  ],

  [
    "02",
    "Detect",
    "Identify energy waste, abnormal equipment behaviour, peak-demand events and unnecessary after-hours loads.",
  ],

  [
    "03",
    "Analyse",
    "Use AI Decision Agents and Digital Twin context to identify root causes and quantify potential energy, cost and emissions impact.",
  ],

  [
    "04",
    "Simulate",
    "Evaluate optimisation actions against comfort, occupancy, safety, equipment requirements and operational constraints.",
  ],

  [
    "05",
    "Approve",
    "Route explainable recommendations through facilities teams and governed human-in-the-loop approval workflows.",
  ],

  [
    "06",
    "Measure",
    "Compare results against established baselines to quantify energy reduction, peak-demand reduction, financial savings and associated CO₂ outcomes.",
  ],
];


/* =========================================================
   PILOT SCOPE
========================================================= */

const pilotItems = [
  "Building energy baseline and connected asset assessment",
  "BMS, smart-meter, sub-meter and available telemetry integration",
  "HVAC, lighting, workstation and after-hours energy analysis",
  "Peak-demand, refrigeration, pumps and motors optimisation scenarios",
  "Energy waste and equipment inefficiency identification",
  "Digital Twin investigation and AI-recommended actions",
  "Human-in-the-loop review and approval workflow",
  "Energy cost, peak demand, associated CO₂ and ROI measurement",
];


export default function BuildingAI({ openPilotModal }) {
  const handlePilotClick = () => {
    if (typeof openPilotModal === "function") {
      openPilotModal();
      return;
    }

    document
      .getElementById("building-pilot")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };


  return (
    <main className="buildingAIPage">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="buildingAIHero">

        <motion.div
          className="buildingAIHeroContent"
          variants={stagger}
          initial="hidden"
          animate="show"
        >

          <motion.div
            className="buildingAIBadge"
            variants={fadeUp}
          >
            <Building2 size={17} />
            EnerG IQ Tech Commercial Building AI
          </motion.div>


          <motion.h1 variants={fadeUp}>
            Reduce Commercial Building Energy Costs & CO₂ Emissions.
          </motion.h1>


          <motion.p
            className="buildingAILead"
            variants={fadeUp}
          >
            EnerG IQ Tech Building AI helps building owners and facilities
            teams identify and reduce energy waste, peak demand and associated
            CO₂ emissions across HVAC, lighting and other energy-intensive
            building systems - while maintaining occupant comfort,
            operational reliability and asset performance.
          </motion.p>


          <motion.p
            className="buildingAIDescription"
            variants={fadeUp}
          >
            Edge AI analyses building operations in real time to identify
            inefficient equipment behaviour, unnecessary after-hours loads
            and costly demand peaks. The AI Energy Gateway connects BMS,
            meters, HVAC, lighting, refrigeration, workstations, lifts, pumps
            and motors so EnerG IQ Tech can recommend governed optimisation
            actions and measure the resulting energy, financial and carbon
            outcomes.
          </motion.p>


          <motion.div
            className="buildingAIHeroButtons"
            variants={fadeUp}
          >
         
            <Link to="/book-discussion" className="buildingAIPrimaryBtn">
              Book a Discussion
              <ChevronRight size={18} />
            </Link>

            <a
              href="#building-workflow"
              className="buildingAISecondaryBtn"
            >
              View AI Workflow
            </a>
          </motion.div>


          <motion.div
            className="buildingAIHeroTags"
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
              <ShieldCheck size={15} />
              Comfort & Reliability
            </span>
          </motion.div>

        </motion.div>


        {/* =====================================================
            HERO DASHBOARD
        ===================================================== */}

        <motion.div
          className="buildingAIHeroVisual"
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

          <div className="buildingAIDashboard">

            <div className="buildingAIDashboardTop">
              <div>
                <strong>
                  Building Energy Optimisation
                </strong>

                <span>
                  Energy, demand and operational overview
                </span>
              </div>

              <b>
                <Activity size={14} />
                Live
              </b>
            </div>


            <div className="buildingAIKpis">

              <div>
                <small>
                  Buildings
                </small>

                <strong>
                  4
                </strong>

                <span>
                  Connected facilities
                </span>
              </div>


              <div>
                <small>
                  Asset Classes
                </small>

                <strong>
                  9
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
                  38
                </strong>

                <span>
                  Energy optimisation items
                </span>
              </div>


              <div>
                <small>
                  Monthly Potential
                </small>

                <strong>
                  $2,840
                </strong>

                <span>
                  Indicative energy savings
                </span>
              </div>

            </div>


            <div className="buildingAIInsightCard">

              <div className="buildingAIInsightIcon">
                <Brain size={22} />
              </div>

              <div>
                <strong>
                  AI Energy Recommendation
                </strong>

                <p>
                  Level 2 HVAC and workstations remain active after occupancy
                  has fallen below 8%. Review an HVAC setback and workstation
                  shutdown sequence to reduce unnecessary energy consumption
                  while maintaining comfort and operational requirements.
                </p>
              </div>

            </div>


            <div className="buildingAIApproval">

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
          PROCESS STRIP
      ========================================================= */}

      <section className="buildingAIStrip">

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
          BUILDING ENERGY CHALLENGE
      ========================================================= */}

      <section className="buildingAISection buildingAIChallengeSection">

        <div className="buildingAISectionHeader">

          <p>
            Commercial Building Energy Challenge
          </p>

          <h2>
            Buildings Face Rising Energy Costs, Peak Demand and CO₂
            Reduction Requirements.
          </h2>

          <span>
            HVAC, lighting, plug loads, refrigeration and central equipment
            can consume significant energy across fixed schedules and
            fragmented control systems. The challenge is reducing this
            consumption and associated emissions without compromising
            occupant comfort or building operations.
          </span>

        </div>


        <div className="buildingAIChallengeGrid">

          {[
            [
              Zap,
              "High Energy Costs",
              "HVAC, lighting, refrigeration and other building systems can create significant ongoing electricity expenditure.",
            ],

            [
              Monitor,
              "After-Hours Energy Waste",
              "HVAC, lighting, workstations and office equipment can continue consuming energy after occupancy falls.",
            ],

            [
              Activity,
              "Peak Demand Exposure",
              "Simultaneous HVAC and equipment loads can create costly demand peaks even when total energy consumption is controlled.",
            ],

            [
              Leaf,
              "CO₂ Reduction Pressure",
              "Reducing unnecessary electricity consumption can lower associated CO₂ emissions and support organisational sustainability targets.",
            ],
          ].map(([Icon, title, text]) => (

            <article key={title}>

              <div className="buildingAIIcon">
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
          CONNECTED BUILDING ASSETS
      ========================================================= */}

      <section className="buildingAISection buildingAIAssetsSection">

        <div className="buildingAISectionHeader">

          <p>
            Connected Building Assets
          </p>

          <h2>
            Optimise the Systems Driving Building Energy Costs.
          </h2>

          <span>
            The AI Energy Gateway connects existing BMS, meters and
            operational telemetry so EnerG IQ Tech can understand how
            building systems consume energy, identify avoidable waste and
            coordinate optimisation without requiring wholesale
            infrastructure replacement.
          </span>

        </div>


        <motion.div
          className="buildingAIAssetsGrid"
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
              className="buildingAIAssetCard"
              variants={fadeUp}
              key={title}
            >

              <div className="buildingAIIcon">
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

      <section className="buildingAISection buildingAIScenarioSection">

        <div className="buildingAISectionHeader">

          <p>
            AI Optimisation Scenarios
          </p>

          <h2>
            Turn Building Energy Waste Into Measurable Cost & Carbon
            Reduction Opportunities.
          </h2>

          <span>
            EnerG IQ Tech combines the AI Energy Gateway, Digital Twin,
            Decision Agents and human-in-the-loop governance to identify
            practical optimisation opportunities while protecting occupant
            comfort and operational requirements.
          </span>

        </div>


        <div className="buildingAIScenarioGrid">

          {scenarios.map(
            ([Icon, title, text, outcome]) => (

              <article
                className="buildingAIScenarioCard"
                key={title}
              >

                <div className="buildingAIScenarioTop">

                  <div className="buildingAIIcon">
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


                <div className="buildingAIOutcome">

                  <CheckCircle2 size={17} />

                  {outcome}

                </div>

              </article>

            )
          )}

        </div>

      </section>


      {/* =========================================================
          END-TO-END WORKFLOW
      ========================================================= */}

      <section
        className="buildingAISection buildingAIWorkflowSection"
        id="building-workflow"
      >

        <div className="buildingAISectionHeader buildingAISectionHeaderLight">

          <p>
            End-to-End AI Workflow
          </p>

          <h2>
            From Building Energy Data to Measurable Savings.
          </h2>

          <span>
            EnerG IQ Tech turns operational telemetry into explainable,
            governed optimisation recommendations and measures the resulting
            energy, financial and associated CO₂ outcomes while keeping
            facilities teams in control.
          </span>

        </div>


        <div className="buildingAIWorkflow">

          {workflow.map(([number, title, text]) => (

            <div
              className="buildingAIWorkflowStep"
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
          SHARED ENERG IQ PLATFORM
      ========================================================= */}

      <section className="buildingAISection buildingAIPlatformSection">

        <div className="buildingAIPlatformPanel">

          <div className="buildingAIPlatformCopy">

            <p>
              Shared EnerG IQ Tech Platform
            </p>

            <h2>
              Building-Specific Optimisation Built on One Energy
              Intelligence Architecture.
            </h2>

            <span>
              Building AI uses the shared EnerG IQ Tech architecture to
              connect building systems, identify energy waste, recommend
              governed optimisation actions and measure resulting energy,
              financial and carbon outcomes.
            </span>


            <ul>

              <li>
                <CheckCircle2 size={18} />
                AI Energy Gateway connectivity
              </li>

              <li>
                <CheckCircle2 size={18} />
                Digital Twin operational context
              </li>

              <li>
                <CheckCircle2 size={18} />
                Configurable AI Decision Agents
              </li>

              <li>
                <CheckCircle2 size={18} />
                Human-in-the-loop governance
              </li>

              <li>
                <CheckCircle2 size={18} />
                Energy, cost, CO₂ and ROI intelligence
              </li>

            </ul>

          </div>


          <div className="buildingAIPlatformFlow">

            <div className="buildingAIPlatformNode">

              <Building2 size={25} />

              <span>
                Building Assets
              </span>

            </div>


            <ChevronRight size={20} />


            <div className="buildingAIPlatformNode featured">

              <Cpu size={25} />

              <span>
                AI Energy Gateway
              </span>

            </div>


            <ChevronRight size={20} />


            <div className="buildingAIPlatformNode">

              <Layers3 size={25} />

              <span>
                Digital Twin
              </span>

            </div>


            <ChevronRight size={20} />


            <div className="buildingAIPlatformNode">

              <Brain size={25} />

              <span>
                AI Optimisation
              </span>

            </div>


            <ChevronRight size={20} />


            <div className="buildingAIPlatformNode">

              <ShieldCheck size={25} />

              <span>
                Measured Outcomes
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          BUILDING PILOT
      ========================================================= */}

      <section
        className="buildingAISection buildingAIPilotSection"
        id="building-pilot"
      >

        <div className="buildingAIPilotBox">

          <div className="buildingAIPilotCopy">

            <p>
              Building Pilot Program
            </p>

            <h2>
              Start With One Building Energy Problem. Prove the Savings
              Before Scaling.
            </h2>

            <span>
              Establish an energy baseline for one building or high-value
              system, identify optimisation opportunities and quantify
              potential energy-cost, peak-demand and associated CO₂ outcomes
              before portfolio-wide deployment.
            </span>


            <button
              type="button"
              className="buildingAIPrimaryBtn"
              onClick={handlePilotClick}
            >
              Discuss a Building Pilot
              <ChevronRight size={18} />
            </button>

          </div>


          <div className="buildingAIPilotList">

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

      <section className="buildingAICta">

        <div>

          <p>
            Now Onboarding Building Pilot Partners
          </p>

          <h2>
            Reduce Building Energy Costs & CO₂ Emissions Without
            Compromising Comfort.
          </h2>

          <span>
            Start with one measurable building energy challenge. Establish
            the baseline, identify energy waste and determine whether the
            potential financial and carbon outcomes justify broader
            deployment.
          </span>

        </div>


        <div className="buildingAICtaActions">

         
          <Link to="/book-discussion" className="buildingAIPrimaryBtn">
            Book a Discussion
            <ChevronRight size={18} />
          </Link>

        </div>

      </section>

    </main>
  );
}