import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Activity,
  ArrowRight,
  BatteryCharging,
  Brain,
  Building2,
  CheckCircle2,
  ChevronRight,
  Cpu,
  Droplets,
  Fan,
  Landmark,
  Layers3,
  Leaf,
  Lightbulb,
  Monitor,
  Printer,
  Refrigerator,
  ShieldCheck,
  SunMedium,
  Utensils,
  Waves,
  Zap,
} from "lucide-react";

import "../styles/LocalGovernmentAI.css";


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
   CONNECTED COUNCIL ASSETS
========================================================= */

const assets = [
  [
    Fan,
    "Council Building HVAC",
    "Reduce HVAC energy waste across civic centres, administration buildings, libraries, community facilities and depots using occupancy, weather and operational schedules.",
  ],

  [
    Lightbulb,
    "Building & Public-Area Lighting",
    "Reduce unnecessary lighting energy consumption across offices, libraries, community spaces, car parks and shared public areas.",
  ],

  [
    Monitor,
    "Workstations",
    "Detect council workstations and office equipment operating unnecessarily outside approved occupancy hours to reduce avoidable base load.",
  ],

  [
    Printer,
    "Printers",
    "Monitor printer fleets, standby demand and after-hours operation across council offices and public facilities.",
  ],

  [
    Utensils,
    "Kitchen & Community Facilities",
    "Analyse staff kitchens, community kitchens, hot water, ventilation and operating schedules to identify avoidable energy consumption.",
  ],

  [
    Refrigerator,
    "Refrigeration",
    "Identify refrigeration energy waste across community facilities, aquatic centres, kitchens, cool rooms and public venues.",
  ],

  [
    Building2,
    "Lifts & Vertical Transport",
    "Monitor lift demand, standby loads, operating patterns and abnormal power behaviour across civic buildings.",
  ],

  [
    Droplets,
    "Water & Pumps",
    "Identify excessive runtime, pressure loss and inefficient pumping across aquatic centres, irrigation systems and council facilities.",
  ],

  [
    Waves,
    "Motors & Plant",
    "Monitor motor loading, runtime and abnormal power draw across depots, plant rooms and council facilities to identify efficiency opportunities.",
  ],

  [
    SunMedium,
    "Solar & Battery",
    "Coordinate solar generation and battery dispatch to improve renewable utilisation, reduce peak demand and lower associated carbon impact across council sites.",
  ],

  [
    BatteryCharging,
    "Fleet & EV Charging",
    "Coordinate council fleet charging around tariffs, site demand, renewable generation and operating schedules to reduce charging costs and demand peaks.",
  ],

  [
    Landmark,
    "Council Energy Coordination",
    "Coordinate council buildings, community facilities, depots, charging and distributed energy assets through one AI energy optimisation layer.",
  ],
];


/* =========================================================
   AI OPTIMISATION SCENARIOS
========================================================= */

const scenarios = [
  [
    Fan,
    "After-Hours HVAC",
    "Detect HVAC operating beyond approved occupancy schedules across civic buildings, libraries and community facilities.",
    "Reduce HVAC energy cost & CO₂ impact",
  ],

  [
    Monitor,
    "Workstation & Plug Load Control",
    "Identify council workstations, printers and office equipment operating unnecessarily after occupancy falls.",
    "Reduce after-hours energy use",
  ],

  [
    Lightbulb,
    "Lighting Optimisation",
    "Reduce lighting in unoccupied council areas while preserving safety, security and community-access requirements.",
    "Reduce lighting energy cost",
  ],

  [
    Zap,
    "Peak Demand Reduction",
    "Forecast demand peaks and coordinate HVAC, pumps, charging and suitable flexible council loads.",
    "Reduce peak-demand charges",
  ],

  [
    Droplets,
    "Aquatic & Pump Intelligence",
    "Optimise pumps, filtration, circulation and associated plant across aquatic and recreation facilities.",
    "Reduce plant energy consumption",
  ],

  [
    BatteryCharging,
    "Fleet EV Charging",
    "Schedule council fleet charging around site demand, off-peak tariffs and available solar generation.",
    "Reduce charging cost & demand peaks",
  ],
];


/* =========================================================
   END-TO-END WORKFLOW
========================================================= */

const workflow = [
  [
    "01",
    "Connect",
    "Connect BMS, meters, HVAC, lighting, workstations, pumps, fleet charging, Solar PV, batteries and available council telemetry through the AI Energy Gateway.",
  ],

  [
    "02",
    "Detect",
    "Identify after-hours consumption, peak-demand events, equipment inefficiencies and operational energy waste.",
  ],

  [
    "03",
    "Analyse",
    "Use AI Decision Agents and Digital Twin context to investigate root causes and quantify potential energy, financial and emissions impact across council facilities.",
  ],

  [
    "04",
    "Simulate",
    "Evaluate optimisation actions against comfort, safety, community access, service delivery and operational requirements.",
  ],

  [
    "05",
    "Approve",
    "Route explainable recommendations through facilities, sustainability and council human-in-the-loop approval workflows.",
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
  "Council facility energy baseline and priority-asset assessment",
  "BMS, smart-meter, sub-meter and available telemetry integration",
  "HVAC, lighting, workstation and after-hours energy analysis",
  "Pumps, aquatic systems and refrigeration optimisation scenarios",
  "Peak-demand and operational energy-waste assessment",
  "Fleet EV charging, solar and battery optimisation",
  "Digital Twin investigation and AI-recommended actions",
  "Human-in-the-loop council approval workflow",
  "Energy cost, peak demand, associated CO₂ and ROI measurement",
];


export default function LocalGovernmentAI({ openPilotModal }) {
  const handlePilotClick = () => {
    if (typeof openPilotModal === "function") {
      openPilotModal();
      return;
    }

    document
      .getElementById("local-government-pilot")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };


  return (
    <main className="localGovernmentPage">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="localGovernmentHero">

        <motion.div
          className="localGovernmentHeroContent"
          variants={stagger}
          initial="hidden"
          animate="show"
        >

          <motion.div
            className="localGovernmentBadge"
            variants={fadeUp}
          >
            <Landmark size={17} />
            EnerG IQ Tech Local Government AI
          </motion.div>


          <motion.h1 variants={fadeUp}>
            Reduce Council Energy Costs & CO₂ Emissions Across Your
            Facility Portfolio.
          </motion.h1>


          <motion.p
            className="localGovernmentLead"
            variants={fadeUp}
          >
            EnerG IQ Tech Local Government AI helps councils identify and
            reduce energy waste, peak demand and associated CO₂ emissions
            across civic buildings, libraries, depots, community facilities,
            aquatic centres and other council assets — while maintaining
            community services, operational requirements and governance.
          </motion.p>


          <motion.p
            className="localGovernmentDescription"
            variants={fadeUp}
          >
            Edge AI analyses council energy and operational data in real time
            to identify after-hours consumption, inefficient equipment
            behaviour and costly demand peaks. The AI Energy Gateway connects
            BMS, meters, HVAC, lighting, pumps, Solar PV, batteries, EV
            charging and other systems so EnerG IQ Tech can recommend governed
            optimisation actions and measure resulting financial and
            sustainability outcomes.
          </motion.p>


          <motion.div
            className="localGovernmentHeroButtons"
            variants={fadeUp}
          >

           
            <Link to="/book-discussion" className="localGovernmentPrimaryBtn">
              Book a Discussion
              <ChevronRight size={19} />
            </Link>
            <a
              href="#local-government-workflow"
              className="localGovernmentSecondaryBtn"
            >
              View AI Workflow
            </a>

          </motion.div>


          <motion.div
            className="localGovernmentHeroTags"
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
              Governed Operations
            </span>

          </motion.div>

        </motion.div>


        {/* =====================================================
            HERO DASHBOARD
        ===================================================== */}

        <motion.div
          className="localGovernmentHeroVisual"
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

          <div className="localGovernmentDashboard">

            <div className="localGovernmentDashboardTop">

              <div>

                <strong>
                  Council Energy Optimisation
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


            <div className="localGovernmentKpis">

              <div>
                <small>
                  Council Sites
                </small>

                <strong>
                  4
                </strong>

                <span>
                  Clocktower, Civic, Library, Depot
                </span>
              </div>


              <div>
                <small>
                  Asset Classes
                </small>

                <strong>
                  12
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
                  41
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


            <div className="localGovernmentInsightCard">

              <div className="localGovernmentInsightIcon">
                <Brain size={22} />
              </div>


              <div>

                <strong>
                  AI Energy Recommendation
                </strong>

                <p>
                  Clocktower Centre HVAC and 43 workstations remain active
                  after occupancy has fallen below 6%. Review an approved
                  HVAC setback and workstation shutdown sequence to reduce
                  unnecessary energy consumption while maintaining operational
                  requirements.
                </p>

              </div>

            </div>


            <div className="localGovernmentApproval">

              <span>
                <ShieldCheck size={18} />
                Council facilities approval required
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

      <section className="localGovernmentStrip">

        <span>
          Connect
        </span>

        <ArrowRight size={15} />

        <span>
          Detect Waste
        </span>

        <ArrowRight size={15} />

        <span>
          Analyse
        </span>

        <ArrowRight size={15} />

        <span>
          Optimise
        </span>

        <ArrowRight size={15} />

        <span>
          Approve
        </span>

        <ArrowRight size={15} />

        <span>
          Measure Savings
        </span>

      </section>


      {/* =========================================================
          COUNCIL ENERGY CHALLENGE
      ========================================================= */}

      <section className="localGovernmentSection localGovernmentChallengeSection">

        <div className="localGovernmentSectionHeader">

          <p>
            Local Government Energy Challenge
          </p>

          <h2>
            Reduce Council Energy Spending While Delivering Measurable
            CO₂ Reduction.
          </h2>

          <span>
            Councils manage diverse buildings and community infrastructure
            across different operating schedules, asset types and service
            requirements. This can create avoidable energy consumption,
            demand peaks and associated emissions across an otherwise
            fragmented facility portfolio.
          </span>

        </div>


        <div className="localGovernmentChallengeGrid">

          {[
            [
              Zap,
              "Energy Budget Pressure",
              "Electricity consumption, tariffs and peak-demand charges can create significant ongoing costs across council portfolios.",
            ],

            [
              Leaf,
              "Sustainability & CO₂ Targets",
              "Reducing unnecessary energy consumption can lower associated CO₂ emissions and contribute to council sustainability and climate-action objectives.",
            ],

            [
              Monitor,
              "After-Hours Energy Waste",
              "HVAC, lighting, workstations and equipment can continue consuming energy after staff and public occupancy has fallen.",
            ],

            [
              Landmark,
              "Governance & Community Services",
              "Optimisation must remain explainable, auditable and subject to council approval while preserving public access and service delivery.",
            ],
          ].map(([Icon, title, text]) => (

            <article key={title}>

              <div className="localGovernmentIcon">
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
          CONNECTED COUNCIL ASSETS
      ========================================================= */}

      <section className="localGovernmentSection localGovernmentAssetsSection">

        <div className="localGovernmentSectionHeader">

          <p>
            Connected Council Assets
          </p>

          <h2>
            Optimise the Facilities and Assets Driving Council Energy Costs.
          </h2>

          <span>
            The AI Energy Gateway connects existing council BMS, meters,
            equipment and distributed energy assets so EnerG IQ Tech can
            identify energy waste and optimisation opportunities without
            requiring wholesale replacement of existing infrastructure.
          </span>

        </div>


        <motion.div
          className="localGovernmentAssetsGrid"
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
              className="localGovernmentAssetCard"
              variants={fadeUp}
              key={title}
            >

              <div className="localGovernmentIcon">
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

      <section className="localGovernmentSection localGovernmentScenarioSection">

        <div className="localGovernmentSectionHeader">

          <p>
            AI Optimisation Scenarios
          </p>

          <h2>
            Turn Council Energy Waste Into Measurable Cost & Carbon
            Reduction Opportunities.
          </h2>

          <span>
            EnerG IQ Tech combines the AI Energy Gateway, Digital Twin,
            Decision Agents and human-in-the-loop governance to identify
            practical optimisation opportunities while maintaining council
            service, safety and governance requirements.
          </span>

        </div>


        <div className="localGovernmentScenarioGrid">

          {scenarios.map(
            ([Icon, title, text, outcome]) => (

              <article
                className="localGovernmentScenarioCard"
                key={title}
              >

                <div className="localGovernmentScenarioTop">

                  <div className="localGovernmentIcon">
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


                <div className="localGovernmentOutcome">

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
        className="localGovernmentSection localGovernmentWorkflowSection"
        id="local-government-workflow"
      >

        <div className="localGovernmentSectionHeader localGovernmentSectionHeaderLight">

          <p>
            End-to-End AI Workflow
          </p>

          <h2>
            From Council Energy Data to Measurable Savings & CO₂ Outcomes.
          </h2>

          <span>
            EnerG IQ Tech transforms operational telemetry into explainable,
            governed optimisation recommendations and measures the resulting
            energy, financial and associated CO₂ outcomes while keeping
            council facilities and sustainability teams in control.
          </span>

        </div>


        <div className="localGovernmentWorkflow">

          {workflow.map(([number, title, text]) => (

            <div
              className="localGovernmentWorkflowStep"
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

      <section className="localGovernmentSection localGovernmentPlatformSection">

        <div className="localGovernmentPlatformPanel">

          <div className="localGovernmentPlatformCopy">

            <p>
              Shared EnerG IQ Tech Platform
            </p>

            <h2>
              Council-Specific Optimisation Built on One Energy Intelligence
              Architecture.
            </h2>

            <span>
              Local Government AI uses the shared EnerG IQ Tech architecture
              to connect council assets, identify energy waste, recommend
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
                Building Digital Twin context
              </li>

              <li>
                <CheckCircle2 size={18} />
                Configurable AI Decision Agents
              </li>

              <li>
                <CheckCircle2 size={18} />
                Human-in-the-loop council governance
              </li>

              <li>
                <CheckCircle2 size={18} />
                Energy, cost, CO₂ and ROI intelligence
              </li>

            </ul>

          </div>


          <div className="localGovernmentPlatformFlow">

            <div className="localGovernmentPlatformNode">

              <Landmark size={25} />

              <span>
                Council Assets
              </span>

            </div>


            <ChevronRight size={20} />


            <div className="localGovernmentPlatformNode featured">

              <Cpu size={25} />

              <span>
                AI Energy Gateway
              </span>

            </div>


            <ChevronRight size={20} />


            <div className="localGovernmentPlatformNode">

              <Layers3 size={25} />

              <span>
                Digital Twin
              </span>

            </div>


            <ChevronRight size={20} />


            <div className="localGovernmentPlatformNode">

              <Brain size={25} />

              <span>
                AI Optimisation
              </span>

            </div>


            <ChevronRight size={20} />


            <div className="localGovernmentPlatformNode">

              <ShieldCheck size={25} />

              <span>
                Measured Outcomes
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          PILOT PROGRAM
      ========================================================= */}

      <section
        className="localGovernmentSection localGovernmentPilotSection"
        id="local-government-pilot"
      >

        <div className="localGovernmentPilotBox">

          <div className="localGovernmentPilotCopy">

            <p>
              Local Government Pilot Program
            </p>

            <h2>
              Start With One or Two Council Facilities. Prove the Energy &
              Carbon Savings.
            </h2>

            <span>
              Establish an energy baseline for one or two priority council
              facilities, identify optimisation opportunities and quantify
              potential energy-cost, peak-demand and associated CO₂ outcomes
              before broader portfolio deployment.
            </span>


            <button
              type="button"
              className="localGovernmentPrimaryBtn"
              onClick={handlePilotClick}
            >
              Discuss a Council Pilot
              <ChevronRight size={18} />
            </button>

          </div>


          <div className="localGovernmentPilotList">

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

      <section className="localGovernmentCta">

        <div>

          <p>
            Now Onboarding Council Pilot Partners
          </p>

          <h2>
            Reduce Council Energy Costs & CO₂ Emissions Across Your
            Facility Portfolio.
          </h2>

          <span>
            Start with one measurable council energy problem. Establish the
            baseline, identify avoidable consumption and determine whether
            the potential financial and sustainability outcomes justify
            broader deployment across council facilities.
          </span>

        </div>


        <div className="localGovernmentCtaActions">

          
          <Link to="/book-discussion" className="localGovernmentPrimaryBtn">
            Book a Discussion
            <ChevronRight size={19} />
          </Link>

        </div>

      </section>

    </main>
  );
}