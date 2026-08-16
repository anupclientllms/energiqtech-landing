import { motion } from "framer-motion";

import {
  Activity,
  ArrowRight,
  BatteryCharging,
  Brain,
  CheckCircle2,
  ChevronRight,
  Cpu,
  Database,
  Droplets,
  Gauge,
  Layers3,
  Leaf,
  Network,
  PlugZap,
  Server,
  ShieldCheck,
  Snowflake,
  SunMedium,
  Thermometer,
  UtilityPole,
  Waves,
  Zap,
} from "lucide-react";

import "../styles/DataCentreAI.css";


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
   CONNECTED DATA CENTRE ASSETS
========================================================= */

const dataCentreAssets = [
  [
    Snowflake,
    "Cooling Systems",
    "Reduce cooling energy waste by optimising demand, airflow, setpoints, sequencing and thermal performance across white-space environments.",
  ],

  [
    Server,
    "CRAC / CRAH Units",
    "Identify inefficient loading, fan speeds, supply and return temperatures and unnecessary runtime that increase cooling energy consumption.",
  ],

  [
    Waves,
    "Chiller Plant",
    "Improve chiller sequencing, chilled-water temperatures, pumping and condenser performance to reduce central-plant energy consumption.",
  ],

  [
    Database,
    "Server Racks",
    "Correlate rack-level power, thermal conditions and utilisation to identify energy and capacity optimisation opportunities.",
  ],

  [
    PlugZap,
    "UPS Systems",
    "Identify conversion losses, inefficient loading and abnormal UPS behaviour while protecting critical-power availability.",
  ],

  [
    Network,
    "Power Distribution",
    "Analyse switchboards, PDUs, distribution paths, electrical losses and loading to identify avoidable energy overhead.",
  ],

  [
    BatteryCharging,
    "Battery Systems",
    "Coordinate battery state, charge cycles and reserve capacity with facility demand while maintaining resilience requirements.",
  ],

  [
    UtilityPole,
    "Backup Generators",
    "Monitor readiness, test cycles, runtime and integration with critical-power infrastructure without compromising backup capability.",
  ],

  [
    Thermometer,
    "Thermal Zones",
    "Detect hot spots, overcooling, recirculation and abnormal temperature patterns so cooling energy can be optimised safely.",
  ],

  [
    Droplets,
    "Cooling Water & Pumps",
    "Identify excessive flow, pressure loss, unnecessary runtime and inefficient pumping across cooling-water systems.",
  ],

  [
    SunMedium,
    "Solar & Grid Supply",
    "Coordinate renewable generation, grid supply and facility demand to improve energy utilisation and reduce associated carbon impact.",
  ],

  [
    Gauge,
    "PUE Intelligence",
    "Measure Power Usage Effectiveness and identify non-IT energy overhead across cooling, power and supporting infrastructure.",
  ],

  [
    Brain,
    "Workload & Capacity",
    "Correlate compute demand, rack utilisation, power capacity and thermal constraints to improve infrastructure and energy efficiency.",
  ],
];


/* =========================================================
   AI OPTIMISATION SCENARIOS
========================================================= */

const scenarios = [
  [
    Snowflake,
    "Cooling Optimisation",
    "Identify overcooling, inefficient setpoints, poor sequencing and unnecessary cooling demand while protecting approved thermal conditions.",
    "Reduce cooling energy cost & CO₂ impact",
  ],

  [
    Server,
    "CRAC / CRAH Efficiency",
    "Detect inefficient fan speeds, poor loading, airflow imbalance and unnecessary runtime.",
    "Reduce cooling-unit energy use",
  ],

  [
    Thermometer,
    "Hot Spot & Thermal Risk",
    "Detect thermal anomalies, recirculation and rack-level hot spots before they affect equipment reliability.",
    "Protect thermal reliability",
  ],

  [
    PlugZap,
    "UPS & Power Loss Intelligence",
    "Identify conversion losses, low-load inefficiency and abnormal UPS or distribution behaviour.",
    "Reduce critical-power energy losses",
  ],

  [
    Gauge,
    "PUE Optimisation",
    "Track non-IT energy overhead and prioritise the highest-value cooling and power efficiency opportunities.",
    "Improve PUE & operating efficiency",
  ],

  [
    Brain,
    "Workload & Capacity Coordination",
    "Align compute demand, rack capacity, cooling and power availability to improve utilisation without compromising service requirements.",
    "Improve infrastructure efficiency",
  ],
];


/* =========================================================
   AI WORKFLOW
========================================================= */

const workflowSteps = [
  [
    "01",
    "Connect",
    "Connect DCIM, BMS, smart meters, cooling systems, UPS, racks, thermal sensors, generators and available grid telemetry through the AI Energy Gateway.",
  ],

  [
    "02",
    "Detect",
    "Identify energy waste, overcooling, abnormal equipment behaviour, electrical losses, thermal risk and inefficient infrastructure operation.",
  ],

  [
    "03",
    "Analyse",
    "Use AI Decision Agents and Digital Twin context to investigate root causes and quantify potential energy, PUE, financial and emissions impact.",
  ],

  [
    "04",
    "Simulate",
    "Evaluate optimisation actions against uptime, redundancy, thermal limits, capacity requirements and resilience constraints.",
  ],

  [
    "05",
    "Approve",
    "Route explainable recommendations through engineering, operations and governed human-in-the-loop change-control workflows.",
  ],

  [
    "06",
    "Measure",
    "Compare results against established baselines to quantify energy reduction, PUE improvement, financial savings, associated CO₂ outcomes and operational performance.",
  ],
];


/* =========================================================
   PILOT
========================================================= */

const pilotItems = [
  "Data centre energy and infrastructure baseline assessment",
  "DCIM, BMS, smart-meter and available telemetry integration",
  "Cooling, CRAC / CRAH, chiller and thermal-zone energy analysis",
  "UPS, power distribution and electrical-loss intelligence",
  "PUE and non-IT energy overhead assessment",
  "Workload, rack capacity and infrastructure optimisation scenarios",
  "Digital Twin investigation and AI-recommended actions",
  "Human-in-the-loop engineering and change-control workflow",
  "Energy cost, PUE, associated CO₂ and ROI measurement",
];


export default function DataCentreAI({ openPilotModal }) {
  const handlePilotClick = () => {
    if (typeof openPilotModal === "function") {
      openPilotModal();
      return;
    }

    document
      .getElementById("data-centre-pilot")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };


  return (
    <main className="dataCentrePage">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="dataCentreHero">

        <motion.div
          className="dataCentreHeroContent"
          variants={stagger}
          initial="hidden"
          animate="show"
        >

          <motion.div
            className="dataCentreBadge"
            variants={fadeUp}
          >
            <Database size={17} />
            EnerG IQ Tech Data Centre AI
          </motion.div>


          <motion.h1 variants={fadeUp}>
            Reduce Data Centre Energy Costs & CO₂ Emissions While
            Protecting Uptime.
          </motion.h1>


          <motion.p
            className="dataCentreLead"
            variants={fadeUp}
          >
            EnerG IQ Tech Data Centre AI helps operators identify and reduce
            cooling and infrastructure energy waste, improve PUE and lower
            associated CO₂ emissions while protecting uptime, thermal
            reliability, capacity and critical-power resilience.
          </motion.p>


          <motion.p
            className="dataCentreDescription"
            variants={fadeUp}
          >
            Edge AI analyses cooling, CRAC and CRAH units, chiller plants,
            UPS systems, power distribution, racks, thermal zones and other
            infrastructure in real time. The AI Energy Gateway connects DCIM,
            BMS, meters and operational telemetry so EnerG IQ Tech can detect
            inefficiencies, recommend governed optimisation actions and
            measure resulting energy, financial and carbon outcomes.
          </motion.p>


          <motion.div
            className="dataCentreHeroButtons"
            variants={fadeUp}
          >

            <button
              type="button"
              className="dataCentrePrimaryBtn"
              onClick={handlePilotClick}
            >
              Request Data Centre Pilot
              <ChevronRight size={18} />
            </button>


            <a
              href="#data-centre-workflow"
              className="dataCentreSecondaryBtn"
            >
              View AI Workflow
            </a>

          </motion.div>


          <motion.div
            className="dataCentreHeroTags"
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
              PUE Optimisation
            </span>

            <span>
              <ShieldCheck size={15} />
              Uptime & Resilience
            </span>

          </motion.div>

        </motion.div>


        {/* =====================================================
            HERO DASHBOARD
        ===================================================== */}

        <motion.div
          className="dataCentreHeroVisual"
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

          <div className="dataCentreDashboard">

            <div className="dataCentreDashboardTop">

              <div>
                <strong>
                  Data Centre Energy Optimisation
                </strong>

                <span>
                  Energy, PUE and infrastructure overview
                </span>
              </div>


              <b>
                <Activity size={14} />
                Live
              </b>

            </div>


            <div className="dataCentreKpis">

              <div>
                <small>
                  Data Centre Sites
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
                  13
                </strong>

                <span>
                  Energy-intensive systems
                </span>
              </div>


              <div>
                <small>
                  Current PUE
                </small>

                <strong>
                  1.48
                </strong>

                <span>
                  Portfolio average
                </span>
              </div>


              <div>
                <small>
                  Opportunities
                </small>

                <strong>
                  36
                </strong>

                <span>
                  Energy optimisation items
                </span>
              </div>

            </div>


            <div className="dataCentreInsightCard">

              <div className="dataCentreInsightIcon">
                <Brain size={22} />
              </div>


              <div>

                <strong>
                  AI Energy Recommendation
                </strong>

                <p>
                  Data Hall B is operating 2.1°C below its approved thermal
                  range. Review a 0.8°C CRAC supply-setpoint increase and
                  reduced fan speed to lower cooling energy consumption while
                  continuously monitoring rack inlet temperatures and uptime
                  safeguards.
                </p>

              </div>

            </div>


            <div className="dataCentreApproval">

              <span>
                <ShieldCheck size={18} />
                Engineering approval required before execution
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

      <section className="dataCentreStrip">

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
          DATA CENTRE ENERGY CHALLENGE
      ========================================================= */}

      <section className="dataCentreSection dataCentreChallengeSection">

        <div className="dataCentreSectionHeader">

          <p>
            Data Centre Energy Challenge
          </p>

          <h2>
            High Energy Costs & CO₂ Emissions - With No Room to
            Compromise Uptime.
          </h2>

          <span>
            Data centres must support growing compute demand while managing
            energy-intensive cooling, electrical conversion and power
            infrastructure. The challenge is reducing non-IT energy overhead,
            energy costs and associated CO₂ emissions without compromising
            thermal conditions, redundancy, capacity or service availability.
          </span>

        </div>


        <div className="dataCentreChallengeGrid">

          {[
            [
              Zap,
              "High Energy Costs",
              "Cooling, UPS systems, electrical distribution and supporting infrastructure add significant energy overhead beyond IT workloads.",
            ],

            [
              Gauge,
              "PUE & Efficiency Pressure",
              "Operators need to reduce non-IT energy overhead and improve PUE while supporting increasing compute density and capacity.",
            ],

            [
              Leaf,
              "CO₂ Reduction Requirements",
              "Reducing avoidable infrastructure energy consumption can lower associated CO₂ emissions and support sustainability objectives.",
            ],

            [
              ShieldCheck,
              "Uptime & Thermal Constraints",
              "Every optimisation action must preserve redundancy, approved thermal conditions, reliability and critical service availability.",
            ],
          ].map(([Icon, title, text]) => (

            <article key={title}>

              <div className="dataCentreIcon">
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
          CONNECTED DATA CENTRE ASSETS
      ========================================================= */}

      <section className="dataCentreSection dataCentreAssetsSection">

        <div className="dataCentreSectionHeader">

          <p>
            Connected Data Centre Assets
          </p>

          <h2>
            Optimise the Infrastructure Driving Data Centre Energy Costs.
          </h2>

          <span>
            The AI Energy Gateway connects existing DCIM, BMS, electrical,
            thermal and infrastructure telemetry so EnerG IQ Tech can analyse
            energy behaviour across cooling, power and IT-support systems
            without requiring wholesale replacement of existing
            infrastructure.
          </span>

        </div>


        <motion.div
          className="dataCentreAssetsGrid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.08,
          }}
        >

          {dataCentreAssets.map(([Icon, title, text]) => (

            <motion.article
              className="dataCentreAssetCard"
              variants={fadeUp}
              key={title}
            >

              <div className="dataCentreIcon">
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

      <section className="dataCentreSection dataCentreScenarioSection">

        <div className="dataCentreSectionHeader">

          <p>
            AI Optimisation Scenarios
          </p>

          <h2>
            Turn Infrastructure Energy Waste Into Measurable Cost &
            Carbon Reduction Opportunities.
          </h2>

          <span>
            EnerG IQ Tech combines the AI Energy Gateway, Digital Twin,
            Decision Agents and human-in-the-loop governance to identify
            energy and PUE optimisation opportunities while maintaining
            uptime, thermal, capacity and resilience requirements.
          </span>

        </div>


        <div className="dataCentreScenarioGrid">

          {scenarios.map(
            ([Icon, title, text, outcome]) => (

              <article
                className="dataCentreScenarioCard"
                key={title}
              >

                <div className="dataCentreScenarioTop">

                  <div className="dataCentreIcon">
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


                <div className="dataCentreOutcome">

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
        className="dataCentreSection dataCentreWorkflowSection"
        id="data-centre-workflow"
      >

        <div className="dataCentreSectionHeader dataCentreSectionHeaderLight">

          <p>
            End-to-End AI Workflow
          </p>

          <h2>
            From Data Centre Energy Data to Measurable Savings.
          </h2>

          <span>
            EnerG IQ Tech transforms infrastructure telemetry into
            explainable, governed optimisation recommendations and measures
            resulting energy, PUE, financial and associated CO₂ outcomes
            while keeping engineering and operations teams in control.
          </span>

        </div>


        <div className="dataCentreWorkflow">

          {workflowSteps.map(
            ([number, title, text]) => (

              <div
                className="dataCentreWorkflowStep"
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

            )
          )}

        </div>

      </section>


      {/* =========================================================
          SHARED PLATFORM
      ========================================================= */}

      <section className="dataCentreSection dataCentrePlatformSection">

        <div className="dataCentrePlatformPanel">

          <div className="dataCentrePlatformCopy">

            <p>
              Shared EnerG IQ Tech Platform
            </p>

            <h2>
              Data-Centre Optimisation Built on One Energy Intelligence
              Architecture.
            </h2>

            <span>
              Data Centre AI uses the shared EnerG IQ Tech architecture to
              connect critical infrastructure, identify energy waste,
              recommend governed optimisation actions and quantify energy,
              PUE, financial and associated carbon outcomes.
            </span>


            <ul>

              <li>
                <CheckCircle2 size={18} />
                AI Energy Gateway connectivity
              </li>

              <li>
                <CheckCircle2 size={18} />
                Digital Twin infrastructure context
              </li>

              <li>
                <CheckCircle2 size={18} />
                Configurable AI Decision Agents
              </li>

              <li>
                <CheckCircle2 size={18} />
                Human-in-the-loop change control
              </li>

              <li>
                <CheckCircle2 size={18} />
                Energy, PUE, cost, CO₂ and ROI intelligence
              </li>

            </ul>

          </div>


          <div className="dataCentrePlatformFlow">

            <div className="dataCentrePlatformNode">

              <Database size={25} />

              <span>
                Data Centre Assets
              </span>

            </div>


            <ChevronRight size={20} />


            <div className="dataCentrePlatformNode featured">

              <Cpu size={25} />

              <span>
                AI Energy Gateway
              </span>

            </div>


            <ChevronRight size={20} />


            <div className="dataCentrePlatformNode">

              <Layers3 size={25} />

              <span>
                Digital Twin
              </span>

            </div>


            <ChevronRight size={20} />


            <div className="dataCentrePlatformNode">

              <Brain size={25} />

              <span>
                AI Optimisation
              </span>

            </div>


            <ChevronRight size={20} />


            <div className="dataCentrePlatformNode">

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
        className="dataCentreSection dataCentrePilotSection"
        id="data-centre-pilot"
      >

        <div className="dataCentrePilotBox">

          <div className="dataCentrePilotCopy">

            <p>
              Data Centre Pilot Program
            </p>

            <h2>
              Start With One High-Value Energy Problem. Prove the Savings
              Before Scaling.
            </h2>

            <span>
              Establish an energy and infrastructure baseline for one data
              centre or high-value system, identify optimisation
              opportunities and quantify potential energy-cost, PUE and
              associated CO₂ outcomes while validating uptime, thermal and
              resilience safeguards before broader deployment.
            </span>


            <button
              type="button"
              className="dataCentrePrimaryBtn"
              onClick={handlePilotClick}
            >
              Discuss a Data Centre Pilot
              <ChevronRight size={18} />
            </button>

          </div>


          <div className="dataCentrePilotList">

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

      <section className="dataCentreCta">

        <div>

          <p>
            Now Onboarding Data Centre Pilot Partners
          </p>

          <h2>
            Reduce Data Centre Energy Costs & CO₂ Emissions Without
            Compromising Uptime.
          </h2>

          <span>
            Start with one measurable data-centre energy challenge.
            Establish the baseline, identify cooling and infrastructure
            energy waste and determine whether the potential financial,
            PUE and carbon outcomes justify broader deployment - while
            maintaining uptime, thermal reliability and operational
            resilience.
          </span>

        </div>


        <div className="dataCentreCtaActions">

          <button
            type="button"
            className="dataCentrePrimaryBtn"
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