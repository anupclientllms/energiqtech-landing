import { motion } from "framer-motion";

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
  Gauge,
  Layers3,
  Leaf,
  Lightbulb,
  ParkingCircle,
  Refrigerator,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  SunMedium,
  Truck,
  Tv,
  Users,
  Utensils,
  Waves,
  Zap,
} from "lucide-react";

import "../styles/ShoppingCentreAI.css";


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
   CONNECTED SHOPPING CENTRE ASSETS
========================================================= */

const shoppingCentreAssets = [
  [
    Building2,
    "Common Area HVAC",
    "Reduce HVAC energy waste across malls, corridors, atriums and common areas using occupancy, trading hours, weather and operational schedules.",
  ],

  [
    Waves,
    "Central Chiller Plant",
    "Improve chiller sequencing, chilled-water temperatures, pumping and condenser performance to reduce central-plant energy consumption.",
  ],

  [
    Utensils,
    "Food Court Systems",
    "Analyse kitchen exhaust, ventilation, refrigeration, hot water, lighting and operating schedules to identify avoidable food-court energy consumption.",
  ],

  [
    Refrigerator,
    "Retail Refrigeration",
    "Detect inefficient refrigeration operation, compressor cycling and abnormal energy use across tenant refrigeration, display cases and cold rooms.",
  ],

  [
    Lightbulb,
    "Mall & Common Lighting",
    "Reduce mall, atrium, corridor and shared-area lighting energy consumption using schedules, occupancy and daylight conditions.",
  ],

  [
    ParkingCircle,
    "Car Park Lighting",
    "Reduce car-park lighting energy consumption through occupancy, daylight, zoning and after-hours control.",
  ],

  [
    Activity,
    "Escalators & Travelators",
    "Analyse operating patterns, standby loads and customer-driven schedules to identify avoidable vertical-transport energy use.",
  ],

  [
    Users,
    "Passenger & Service Lifts",
    "Monitor lift demand, standby consumption, service patterns and abnormal power behaviour to identify energy-saving opportunities.",
  ],

  [
    Gauge,
    "Tenant Energy & Metering",
    "Measure tenant consumption, common-area demand and abnormal usage to establish energy baselines and identify high-value optimisation opportunities.",
  ],

  [
    Tv,
    "Digital Signage & Façade",
    "Optimise signage, façade lighting and display schedules to reduce energy consumption while maintaining centre presentation and trading requirements.",
  ],

  [
    BatteryCharging,
    "EV Charging",
    "Coordinate customer, staff and fleet charging around site demand, tariffs and renewable generation to reduce peak-demand exposure and charging costs.",
  ],

  [
    SunMedium,
    "Solar & Battery",
    "Coordinate solar generation and battery dispatch to improve onsite renewable utilisation, reduce peak demand and lower associated carbon impact.",
  ],

  [
    Droplets,
    "Water & Pumps",
    "Identify excessive runtime, pressure loss and inefficient pumping that contribute to avoidable centre energy consumption.",
  ],

  [
    Truck,
    "Loading Dock & Back of House",
    "Analyse loading areas, dock equipment, service corridors and back-of-house operating loads to identify unnecessary energy use.",
  ],

  [
    Sparkles,
    "Centre Energy Coordination",
    "Coordinate HVAC, lighting, tenant loads, EV charging, solar and battery assets through one AI energy optimisation layer.",
  ],
];


/* =========================================================
   AI OPTIMISATION SCENARIOS
========================================================= */

const scenarios = [
  [
    Building2,
    "Common Area HVAC Optimisation",
    "Align HVAC operation with trading hours, occupancy, weather and mall-zone demand.",
    "Reduce HVAC energy cost & CO₂ impact",
  ],

  [
    Waves,
    "Chiller Plant Optimisation",
    "Improve chiller and pump sequencing using centre demand, weather and occupancy forecasts.",
    "Reduce central-plant energy costs",
  ],

  [
    Lightbulb,
    "Lighting Schedule Intelligence",
    "Optimise mall, façade and car-park lighting using occupancy, daylight and operating schedules.",
    "Reduce lighting energy costs",
  ],

  [
    Refrigerator,
    "Retail Refrigeration Monitoring",
    "Detect abnormal compressor cycling, temperature drift and inefficient refrigeration operation.",
    "Reduce refrigeration energy waste",
  ],

  [
    BatteryCharging,
    "EV Charging Coordination",
    "Schedule charging around centre demand, tariffs and available solar or battery capacity.",
    "Reduce charging cost & demand peaks",
  ],

  [
    Gauge,
    "Tenant Energy Intelligence",
    "Identify abnormal tenant demand, benchmark performance and prioritise high-value energy-efficiency opportunities.",
    "Reduce tenant energy waste",
  ],
];


/* =========================================================
   END-TO-END WORKFLOW
========================================================= */

const workflowSteps = [
  [
    "01",
    "Connect",
    "Connect BMS, meters, chillers, lighting, vertical transport, tenant loads, EV charging and DER telemetry through the AI Energy Gateway.",
  ],

  [
    "02",
    "Detect",
    "Identify energy waste, abnormal equipment behaviour, tenant consumption anomalies, peak-demand events and unnecessary after-hours loads.",
  ],

  [
    "03",
    "Analyse",
    "Use AI Decision Agents and Digital Twin context to investigate root causes and quantify potential energy, financial and emissions impact across centre assets and zones.",
  ],

  [
    "04",
    "Simulate",
    "Evaluate optimisation actions against trading hours, tenant requirements, customer comfort, safety and operational constraints.",
  ],

  [
    "05",
    "Approve",
    "Route explainable recommendations through centre management, facilities teams and governed human-in-the-loop approval workflows.",
  ],

  [
    "06",
    "Measure",
    "Compare results against established baselines to quantify energy reduction, peak-demand reduction, financial savings, associated CO₂ outcomes and operational performance.",
  ],
];


/* =========================================================
   PILOT
========================================================= */

const pilotItems = [
  "Shopping-centre energy baseline and priority-system assessment",
  "BMS, smart-meter, tenant-meter and available telemetry integration",
  "Common-area HVAC, chiller and lighting energy analysis",
  "Retail refrigeration and food-court optimisation scenarios",
  "Tenant and after-hours energy-waste assessment",
  "Peak-demand, EV charging, solar and battery optimisation",
  "Digital Twin investigation and AI-recommended actions",
  "Human-in-the-loop centre-management approval workflow",
  "Energy cost, peak demand, associated CO₂ and ROI measurement",
];


export default function ShoppingCentreAI({ openPilotModal }) {
  const handlePilotClick = () => {
    if (typeof openPilotModal === "function") {
      openPilotModal();
      return;
    }

    document
      .getElementById("shopping-centre-pilot")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };


  return (
    <main className="shoppingCentrePage">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="shoppingCentreHero">

        <motion.div
          className="shoppingCentreHeroContent"
          variants={stagger}
          initial="hidden"
          animate="show"
        >

          <motion.div
            className="shoppingCentreBadge"
            variants={fadeUp}
          >
            <ShoppingCart size={17} />
            EnerG IQ Tech Shopping Centre AI
          </motion.div>


          <motion.h1 variants={fadeUp}>
            Reduce Shopping Centre Energy Costs & CO₂ Emissions Without
            Compromising Tenant Operations.
          </motion.h1>


          <motion.p
            className="shoppingCentreLead"
            variants={fadeUp}
          >
            EnerG IQ Tech Shopping Centre AI helps retail property owners and
            facilities teams identify and reduce energy waste, peak demand and
            associated CO₂ emissions across common areas, central plant,
            tenant loads and connected energy assets - while maintaining
            customer comfort, tenant operations and centre presentation.
          </motion.p>


          <motion.p
            className="shoppingCentreDescription"
            variants={fadeUp}
          >
            Edge AI analyses HVAC, chillers, lighting, refrigeration, food
            courts, tenant demand, EV charging and other centre systems in
            real time. The AI Energy Gateway connects BMS, meters and
            operational telemetry so EnerG IQ Tech can identify inefficiencies,
            recommend governed optimisation actions and measure resulting
            energy, financial and carbon outcomes.
          </motion.p>


          <motion.div
            className="shoppingCentreHeroButtons"
            variants={fadeUp}
          >

            <button
              type="button"
              className="shoppingCentrePrimaryBtn"
              onClick={handlePilotClick}
            >
              Request Shopping Centre Pilot
              <ChevronRight size={18} />
            </button>


            <a
              href="#shopping-centre-workflow"
              className="shoppingCentreSecondaryBtn"
            >
              View AI Workflow
            </a>

          </motion.div>


          <motion.div
            className="shoppingCentreHeroTags"
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
              <Gauge size={15} />
              Peak Demand
            </span>

            <span>
              <Users size={15} />
              Tenant & Customer Comfort
            </span>

          </motion.div>

        </motion.div>


        {/* =====================================================
            HERO DASHBOARD
        ===================================================== */}

        <motion.div
          className="shoppingCentreHeroVisual"
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

          <div className="shoppingCentreDashboard">

            <div className="shoppingCentreDashboardTop">

              <div>

                <strong>
                  Shopping Centre Energy Optimisation
                </strong>

                <span>
                  Energy, demand and retail operations overview
                </span>

              </div>


              <b>
                <Activity size={14} />
                Live
              </b>

            </div>


            <div className="shoppingCentreKpis">

              <div>
                <small>
                  Shopping Centres
                </small>

                <strong>
                  4
                </strong>

                <span>
                  Connected properties
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
                  44
                </strong>

                <span>
                  Energy optimisation items
                </span>
              </div>


              <div>
                <small>
                  Peak Reduction
                </small>

                <strong>
                  13%
                </strong>

                <span>
                  Indicative opportunity
                </span>
              </div>

            </div>


            <div className="shoppingCentreInsightCard">

              <div className="shoppingCentreInsightIcon">
                <Brain size={22} />
              </div>


              <div>

                <strong>
                  AI Energy Recommendation
                </strong>

                <p>
                  Common-area HVAC is operating at full load before tenant
                  trading begins. Review a 35-minute delayed Zone B start
                  while retaining ventilation in active loading and
                  food-service areas to reduce unnecessary energy
                  consumption.
                </p>

              </div>

            </div>


            <div className="shoppingCentreApproval">

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

      <section className="shoppingCentreStrip">

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
          SHOPPING CENTRE ENERGY CHALLENGE
      ========================================================= */}

      <section className="shoppingCentreSection shoppingCentreChallengeSection">

        <div className="shoppingCentreSectionHeader">

          <p>
            Shopping Centre Energy Challenge
          </p>

          <h2>
            High Retail Energy Costs & CO₂ Emissions Across Complex
            Multi-Tenant Operations.
          </h2>

          <span>
            Shopping centres combine HVAC, chillers, lighting, refrigeration,
            food courts, vertical transport, tenant loads and charging
            infrastructure across long trading hours. The challenge is
            reducing energy consumption, peak demand and associated emissions
            while maintaining tenant operations, customer comfort and centre
            presentation.
          </span>

        </div>


        <div className="shoppingCentreChallengeGrid">

          {[
            [
              Zap,
              "High Energy Costs & Peak Demand",
              "HVAC, chillers, refrigeration, lighting, food courts and tenant loads can create significant electricity expenditure and costly demand peaks.",
            ],

            [
              Leaf,
              "CO₂ Reduction Requirements",
              "Reducing unnecessary energy consumption can lower associated CO₂ emissions and support retail-property sustainability objectives.",
            ],

            [
              Users,
              "Tenant & Customer Requirements",
              "Optimisation must maintain trading conditions, tenant operations, customer comfort, safety and centre presentation.",
            ],

            [
              Gauge,
              "Complex Multi-Tenant Energy Data",
              "BMS, tenant meters, common-area systems, retail loads and DER telemetry often remain fragmented, making whole-centre optimisation difficult.",
            ],
          ].map(([Icon, title, text]) => (

            <article key={title}>

              <div className="shoppingCentreIcon">
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
          CONNECTED SHOPPING CENTRE ASSETS
      ========================================================= */}

      <section className="shoppingCentreSection shoppingCentreAssetsSection">

        <div className="shoppingCentreSectionHeader">

          <p>
            Connected Shopping Centre Assets
          </p>

          <h2>
            Optimise the Systems Driving Shopping Centre Energy Costs.
          </h2>

          <span>
            The AI Energy Gateway connects existing centre infrastructure,
            BMS, meters and available operational telemetry so EnerG IQ Tech
            can identify energy waste and optimisation opportunities without
            requiring wholesale replacement of existing systems.
          </span>

        </div>


        <motion.div
          className="shoppingCentreAssetsGrid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.08,
          }}
        >

          {shoppingCentreAssets.map(([Icon, title, text]) => (

            <motion.article
              className="shoppingCentreAssetCard"
              variants={fadeUp}
              key={title}
            >

              <div className="shoppingCentreIcon">
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

      <section className="shoppingCentreSection shoppingCentreScenarioSection">

        <div className="shoppingCentreSectionHeader">

          <p>
            AI Optimisation Scenarios
          </p>

          <h2>
            Turn Retail Energy Waste Into Measurable Cost & Carbon
            Reduction Opportunities.
          </h2>

          <span>
            EnerG IQ Tech combines the AI Energy Gateway, Digital Twin,
            Decision Agents and human-in-the-loop governance to identify
            practical optimisation opportunities while maintaining tenant,
            customer and centre operational requirements.
          </span>

        </div>


        <div className="shoppingCentreScenarioGrid">

          {scenarios.map(([Icon, title, text, outcome]) => (

            <article
              className="shoppingCentreScenarioCard"
              key={title}
            >

              <div className="shoppingCentreScenarioTop">

                <div className="shoppingCentreIcon">
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


              <div className="shoppingCentreOutcome">

                <CheckCircle2 size={17} />

                {outcome}

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* =========================================================
          END-TO-END WORKFLOW
      ========================================================= */}

      <section
        className="shoppingCentreSection shoppingCentreWorkflowSection"
        id="shopping-centre-workflow"
      >

        <div className="shoppingCentreSectionHeader shoppingCentreSectionHeaderLight">

          <p>
            End-to-End AI Workflow
          </p>

          <h2>
            From Shopping Centre Energy Data to Measurable Savings.
          </h2>

          <span>
            EnerG IQ Tech transforms centre telemetry into explainable,
            governed optimisation recommendations and measures resulting
            energy, financial and associated CO₂ outcomes while keeping
            centre management and facilities teams in control.
          </span>

        </div>


        <div className="shoppingCentreWorkflow">

          {workflowSteps.map(([number, title, text]) => (

            <div
              className="shoppingCentreWorkflowStep"
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

      <section className="shoppingCentreSection shoppingCentrePlatformSection">

        <div className="shoppingCentrePlatformPanel">

          <div className="shoppingCentrePlatformCopy">

            <p>
              Shared EnerG IQ Tech Platform
            </p>

            <h2>
              Shopping-Centre Optimisation Built on One Energy Intelligence
              Architecture.
            </h2>

            <span>
              Shopping Centre AI uses the shared EnerG IQ Tech architecture
              to connect retail assets, identify energy waste, recommend
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


          <div className="shoppingCentrePlatformFlow">

            <div className="shoppingCentrePlatformNode">

              <ShoppingCart size={25} />

              <span>
                Shopping Centre Assets
              </span>

            </div>


            <ChevronRight size={20} />


            <div className="shoppingCentrePlatformNode featured">

              <Cpu size={25} />

              <span>
                AI Energy Gateway
              </span>

            </div>


            <ChevronRight size={20} />


            <div className="shoppingCentrePlatformNode">

              <Layers3 size={25} />

              <span>
                Digital Twin
              </span>

            </div>


            <ChevronRight size={20} />


            <div className="shoppingCentrePlatformNode">

              <Brain size={25} />

              <span>
                AI Optimisation
              </span>

            </div>


            <ChevronRight size={20} />


            <div className="shoppingCentrePlatformNode">

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
        className="shoppingCentreSection shoppingCentrePilotSection"
        id="shopping-centre-pilot"
      >

        <div className="shoppingCentrePilotBox">

          <div className="shoppingCentrePilotCopy">

            <p>
              Shopping Centre Pilot Program
            </p>

            <h2>
              Start With One Centre Energy Problem. Prove the Savings
              Before Scaling.
            </h2>

            <span>
              Establish an energy baseline for one shopping centre or
              high-value operational system, identify optimisation
              opportunities and quantify potential energy-cost, peak-demand
              and associated CO₂ outcomes while validating tenant, comfort
              and operational safeguards before portfolio-wide deployment.
            </span>


            <button
              type="button"
              className="shoppingCentrePrimaryBtn"
              onClick={handlePilotClick}
            >
              Discuss a Shopping Centre Pilot
              <ChevronRight size={18} />
            </button>

          </div>


          <div className="shoppingCentrePilotList">

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

      <section className="shoppingCentreCta">

        <div>

          <p>
            Now Onboarding Shopping Centre Pilot Partners
          </p>

          <h2>
            Reduce Shopping Centre Energy Costs & CO₂ Emissions Without
            Compromising Tenant Operations.
          </h2>

          <span>
            Start with one measurable shopping-centre energy challenge.
            Establish the baseline, identify energy waste and determine
            whether the potential financial and carbon outcomes justify
            broader deployment - while maintaining tenant operations,
            customer comfort and centre performance.
          </span>

        </div>


        <div className="shoppingCentreCtaActions">

          <button
            type="button"
            className="shoppingCentrePrimaryBtn"
            onClick={handlePilotClick}
          >
            Request Pilot
            <ChevronRight size={18} />
          </button>

        </div>

      </section>

    </main>
  );
}