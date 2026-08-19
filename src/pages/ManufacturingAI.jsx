import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  BarChart3,
  BatteryCharging,
  Brain,
  CheckCircle2,
  ChevronRight,
  CircleGauge,
  Cog,
  Cpu,
  Factory,
  Fan,
  Flame,
  Gauge,
  Layers3,
  Leaf,
  Network,
  PackageCheck,
  Power,
  Settings,
  ShieldCheck,
  Snowflake,
  Thermometer,
  TimerReset,
  TrendingDown,
  Truck,
  Waves,
  Zap,
} from "lucide-react";

import "../styles/ManufacturingAI.css";


const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};


const stagger = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.09,
    },
  },
};


/* =========================================================
   CONNECTED MANUFACTURING ASSETS
========================================================= */

const manufacturingAssets = [
  {
    icon: Factory,
    title: "Production Lines",
    text:
      "Analyse line-level energy consumption, runtime, throughput, idle conditions and operating loads to identify energy-saving opportunities without disrupting production.",
  },

  {
    icon: Settings,
    title: "CNC Machines",
    text:
      "Detect excessive standby consumption, inefficient machining cycles, abnormal spindle loads and unnecessary after-hours operation.",
  },

  {
    icon: Gauge,
    title: "Air Compressors",
    text:
      "Identify leakage, excessive pressure, unloaded runtime and inefficient sequencing that contribute to high compressed-air energy costs.",
  },

  {
    icon: Flame,
    title: "Boilers & Steam",
    text:
      "Analyse boiler loading, steam demand, cycling, pressure, schedules and thermal losses to reduce fuel and thermal energy consumption.",
  },

  {
    icon: Snowflake,
    title: "Refrigeration Systems",
    text:
      "Optimise industrial refrigeration, compressors, evaporators, condensers and defrost cycles to reduce energy cost while protecting process temperatures.",
  },

  {
    icon: PackageCheck,
    title: "Cold Rooms",
    text:
      "Monitor temperature stability, refrigeration demand and door events to identify avoidable cooling energy consumption while protecting product conditions.",
  },

  {
    icon: Waves,
    title: "Cooling Towers",
    text:
      "Analyse fan operation, condenser-water conditions and heat-rejection performance to improve cooling efficiency.",
  },

  {
    icon: CircleGauge,
    title: "Water & Process Pumps",
    text:
      "Detect excessive runtime, throttling losses, inefficient speed control and abnormal flow conditions that increase pumping energy.",
  },

  {
    icon: Fan,
    title: "Process Fans",
    text:
      "Identify unnecessary operation, poor airflow control and abnormal fan power across energy-intensive industrial processes.",
  },

  {
    icon: Power,
    title: "Motors & Drives",
    text:
      "Monitor motor loading, variable-speed-drive performance and abnormal power draw to identify efficiency and reliability opportunities.",
  },

  {
    icon: Truck,
    title: "Conveyor Systems",
    text:
      "Detect idle running and poor coordination with production schedules to reduce unnecessary conveyor energy consumption.",
  },

  {
    icon: Cog,
    title: "Robotics",
    text:
      "Analyse robotic-cell energy consumption, standby loads, operating schedules and cycle behaviour to reduce non-productive energy use.",
  },

  {
    icon: Zap,
    title: "Factory Lighting",
    text:
      "Reduce lighting energy consumption using occupancy, zoning, daylight response and production-driven schedules.",
  },

  {
    icon: BatteryCharging,
    title: "Forklift / EV Charging",
    text:
      "Coordinate forklift and EV charging around site demand, tariffs and renewable generation to reduce charging costs and peak demand.",
  },

  {
    icon: Leaf,
    title: "Solar & Battery",
    text:
      "Coordinate solar generation and battery dispatch to improve renewable utilisation, reduce grid demand and lower associated carbon impact.",
  },

  {
    icon: Thermometer,
    title: "Factory HVAC",
    text:
      "Optimise ventilation, heating, cooling and extraction around occupancy and production requirements to reduce HVAC energy waste.",
  },

  {
    icon: Network,
    title: "Utilities & Energy Centre",
    text:
      "Coordinate electricity, gas, steam, compressed air, chilled water and central utilities to improve whole-site energy efficiency.",
  },
];


/* =========================================================
   AI OPTIMISATION SCENARIOS
========================================================= */

const optimisationScenarios = [
  {
    icon: Gauge,
    title: "Compressed Air Optimisation",
    text:
      "Identify leakage, excess pressure, poor compressor sequencing and extended unloaded operation.",
    outcome: "Reduce compressed-air cost & CO₂ impact",
  },

  {
    icon: Flame,
    title: "Boiler & Steam Efficiency",
    text:
      "Detect inefficient boiler operation, excessive cycling, steam losses and poor operating schedules.",
    outcome: "Reduce fuel & thermal energy costs",
  },

  {
    icon: Power,
    title: "Motor & Drive Efficiency",
    text:
      "Detect abnormal power behaviour, inefficient loading and degrading equipment performance.",
    outcome: "Reduce motor energy consumption",
  },

  {
    icon: TimerReset,
    title: "Idle & Standby Load Reduction",
    text:
      "Identify production equipment, CNC machines, robotics and conveyors running during breaks, changeovers or shutdown periods.",
    outcome: "Reduce non-production energy cost",
  },

  {
    icon: Snowflake,
    title: "Refrigeration & Cold Room Optimisation",
    text:
      "Identify poor compressor sequencing, temperature drift, excessive cycling and inefficient defrost or cooling schedules.",
    outcome: "Reduce refrigeration cost & emissions",
  },

  {
    icon: Zap,
    title: "Peak Demand Management",
    text:
      "Forecast production-driven demand spikes and coordinate flexible loads, charging, batteries and operating schedules.",
    outcome: "Reduce peak-demand charges",
  },

  {
    icon: Activity,
    title: "Equipment Fault Detection",
    text:
      "Identify abnormal relationships between power, pressure, temperature, flow, runtime and production output.",
    outcome: "Protect reliability & reduce waste",
  },

  {
    icon: Leaf,
    title: "Solar, Battery & Carbon Optimisation",
    text:
      "Coordinate renewable generation, storage and flexible industrial demand while measuring energy, financial and associated CO₂ outcomes.",
    outcome: "Lower grid cost & carbon impact",
  },
];


/* =========================================================
   AI WORKFLOW
========================================================= */

const workflowSteps = [
  {
    number: "01",
    title: "Connect",
    text:
      "Connect PLC, SCADA, BMS, meters, production equipment, utilities, refrigeration and IoT telemetry through the AI Energy Gateway.",
  },

  {
    number: "02",
    title: "Detect",
    text:
      "Identify energy waste, idle loads, abnormal equipment behaviour, peak-demand events and process inefficiencies.",
  },

  {
    number: "03",
    title: "Analyse",
    text:
      "Use AI Decision Agents and Digital Twin context to investigate root causes and quantify potential energy, financial and emissions impact.",
  },

  {
    number: "04",
    title: "Simulate",
    text:
      "Evaluate optimisation actions against production throughput, product quality, safety, equipment and process constraints.",
  },

  {
    number: "05",
    title: "Approve",
    text:
      "Route explainable recommendations through site-specific human-in-the-loop approval and operational safeguards.",
  },

  {
    number: "06",
    title: "Measure",
    text:
      "Compare results against established baselines to quantify energy reduction, peak-demand reduction, financial savings, associated CO₂ outcomes, reliability and production performance.",
  },
];


/* =========================================================
   PILOT
========================================================= */

const pilotIncludes = [
  "Manufacturing-site energy baseline and priority-system assessment",
  "PLC, SCADA, BMS, smart-meter, sub-meter and available telemetry integration",
  "Production-energy baseline and operating-pattern analysis",
  "Compressed air, boiler, motor and refrigeration optimisation scenarios",
  "Idle-load, standby and peak-demand opportunity assessment",
  "Solar, battery and charging coordination opportunities",
  "Digital Twin investigation and AI-recommended actions",
  "Human-in-the-loop production and engineering approval workflow",
  "Energy cost, peak demand, associated CO₂ and ROI measurement",
];


/* =========================================================
   POTENTIAL OUTCOMES
========================================================= */

const benefits = [
  {
    icon: TrendingDown,
    value: "10–20%",
    label: "Potential energy-cost reduction",
    note:
      "Indicative opportunity only. Actual savings depend on site conditions, equipment, tariffs, production schedules and approved optimisation measures.",
  },

  {
    icon: Zap,
    value: "Lower",
    label: "Peak-demand exposure",
    note:
      "Through forecasting, equipment sequencing, charging coordination and flexible-load optimisation.",
  },

  {
    icon: Leaf,
    value: "Lower",
    label: "Associated CO₂ emissions",
    note:
      "Through reduced unnecessary electricity and fuel consumption and improved renewable-energy utilisation.",
  },

  {
    icon: Factory,
    value: "Protected",
    label: "Production performance",
    note:
      "Recommendations are evaluated against production, safety, quality and operational constraints before implementation.",
  },
];


export default function ManufacturingAI({ openPilotModal }) {
  const handlePilotClick = () => {
    if (typeof openPilotModal === "function") {
      openPilotModal();
      return;
    }

    document
      .getElementById("manufacturing-pilot")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };


  return (
    <main className="manufacturingPage">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="manufacturingHero">

        <div className="manufacturingHeroGlow manufacturingHeroGlowOne" />
        <div className="manufacturingHeroGlow manufacturingHeroGlowTwo" />


        <motion.div
          className="manufacturingHeroContent"
          variants={stagger}
          initial="hidden"
          animate="show"
        >

          <motion.div
            className="manufacturingEyebrow"
            variants={fadeUp}
          >
            <Factory size={17} />
            EnerG IQ Tech Manufacturing AI
          </motion.div>


          <motion.h1 variants={fadeUp}>
            Reduce Industrial Energy Costs & CO₂ Emissions Without
            Compromising Production.
          </motion.h1>


          <motion.p
            className="manufacturingHeroLead"
            variants={fadeUp}
          >
            EnerG IQ Tech Manufacturing AI helps manufacturers identify and
            reduce energy waste, peak demand and associated CO₂ emissions
            across production equipment, industrial utilities, refrigeration
            and connected energy assets - while protecting throughput,
            product quality, equipment reliability and safety.
          </motion.p>


          <motion.p
            className="manufacturingHeroDescription"
            variants={fadeUp}
          >
            Edge AI analyses production and energy data in real time to detect
            idle loads, inefficient equipment operation, refrigeration waste,
            demand spikes and emerging faults. The AI Energy Gateway connects
            PLC, SCADA, BMS, meters, production assets and utilities so
            EnerG IQ Tech can recommend governed optimisation actions and
            measure resulting energy, financial and carbon outcomes.
          </motion.p>


          <motion.div
            className="manufacturingHeroActions"
            variants={fadeUp}
          >

            <Link to="/book-discussion" className="manufacturingPrimaryButton">
              Book a Discussion
              <ChevronRight size={19} />
            </Link>


            <a
              href="#manufacturing-workflow"
              className="manufacturingSecondaryButton"
            >
              View AI Workflow
            </a>

          </motion.div>


          <motion.div
            className="manufacturingHeroPills"
            variants={fadeUp}
          >

            <span>
              <TrendingDown size={15} />
              Energy Cost Reduction
            </span>

            <span>
              <Leaf size={15} />
              CO₂ Reduction
            </span>

            <span>
              <Zap size={15} />
              Peak Demand
            </span>

            <span>
              <ShieldCheck size={15} />
              Production Protected
            </span>

          </motion.div>

        </motion.div>


        {/* =====================================================
            HERO DASHBOARD
        ===================================================== */}

        <motion.div
          className="manufacturingHeroVisual"
          initial={{
            opacity: 0,
            y: 38,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.16,
          }}
        >

          <div className="manufacturingDashboard">

            <div className="manufacturingDashboardTop">

              <div>
                <span>
                  Manufacturing Energy Optimisation
                </span>

                <small>
                  Production & utilities overview
                </small>
              </div>


              <b>
                <Activity size={15} />
                Live
              </b>

            </div>


            <div className="manufacturingKpiGrid">

              <div>
                <small>
                  Manufacturing Sites
                </small>

                <strong>
                  4
                </strong>

                <span>
                  Connected operations
                </span>
              </div>


              <div>
                <small>
                  Asset Classes
                </small>

                <strong>
                  17
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
                  68
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
                  94 kW
                </strong>

                <span>
                  Indicative current opportunity
                </span>
              </div>

            </div>


            <div className="manufacturingChartCard">

              <div className="manufacturingChartHeader">

                <div>
                  <strong>
                    Site Energy Demand
                  </strong>

                  <span>
                    AI baseline versus actual load
                  </span>
                </div>

                <span className="manufacturingPriorityBadge">
                  High Priority
                </span>

              </div>


              <div className="manufacturingChart">

                <div className="manufacturingBaseline" />

                <span style={{ height: "40%" }} />
                <span style={{ height: "47%" }} />
                <span style={{ height: "55%" }} />
                <span style={{ height: "66%" }} />
                <span className="alertBar" style={{ height: "92%" }} />
                <span className="alertBar" style={{ height: "85%" }} />
                <span style={{ height: "63%" }} />
                <span style={{ height: "52%" }} />
                <span style={{ height: "45%" }} />

              </div>

            </div>


            <div className="manufacturingInsight">

              <div className="manufacturingInsightIcon">
                <Brain size={22} />
              </div>


              <div>

                <strong>
                  AI Energy Recommendation
                </strong>

                <p>
                  Air Compressors 2 and 3 are operating unloaded while
                  Production Line 4 is in changeover. Review a 0.4 bar
                  pressure reduction and temporary Compressor 3 shutdown
                  for an estimated 94 kW demand reduction while maintaining
                  production-air requirements.
                </p>

              </div>

            </div>


            <div className="manufacturingApproval">

              <div>
                <ShieldCheck size={19} />

                <span>
                  Production and engineering approval required before execution
                </span>
              </div>

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

      <section className="manufacturingValueStrip">

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
          MANUFACTURING ENERGY CHALLENGE
      ========================================================= */}

      <section className="manufacturingSection manufacturingIntroSection">

        <div className="manufacturingSectionHeader">

          <p>
            Manufacturing Energy Challenge
          </p>

          <h2>
            High Industrial Energy Costs & CO₂ Emissions - With Production
            Performance Non-Negotiable.
          </h2>

          <span>
            Manufacturing sites combine production equipment, compressed air,
            boilers, refrigeration, pumps, motors and other energy-intensive
            utilities. The challenge is reducing electricity and fuel
            consumption, peak-demand charges and associated CO₂ emissions
            without disrupting throughput, product quality, safety or
            delivery commitments.
          </span>

        </div>


        <div className="manufacturingChallengeGrid">

          {[
            {
              icon: Zap,
              title: "High Energy Costs & Peak Demand",
              text:
                "Production equipment, compressors, boilers, refrigeration and charging can combine to create significant energy expenditure and costly demand peaks.",
            },

            {
              icon: Leaf,
              title: "CO₂ Reduction Requirements",
              text:
                "Reducing unnecessary electricity and fuel consumption can lower associated CO₂ emissions while supporting manufacturing sustainability objectives.",
            },

            {
              icon: AlertTriangle,
              title: "Production & Quality Constraints",
              text:
                "Energy optimisation must remain within throughput, product-quality, equipment, safety and process requirements.",
            },

            {
              icon: Activity,
              title: "Complex Equipment Behaviour",
              text:
                "Industrial assets interact dynamically with production schedules, process conditions and central utilities, making root-cause analysis difficult.",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <article
                className="manufacturingChallengeCard"
                key={item.title}
              >

                <div className="manufacturingChallengeIcon">
                  <Icon size={25} />
                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>

              </article>
            );
          })}

        </div>

      </section>


      {/* =========================================================
          CONNECTED MANUFACTURING ASSETS
      ========================================================= */}

      <section className="manufacturingSection manufacturingAssetsSection">

        <div className="manufacturingSectionHeader">

          <p>
            Connected Manufacturing Assets
          </p>

          <h2>
            Optimise the Production Systems and Utilities Driving Your
            Energy Costs.
          </h2>

          <span>
            The AI Energy Gateway connects existing production equipment,
            industrial controls, utilities and available telemetry so
            EnerG IQ Tech can identify energy waste and optimisation
            opportunities without requiring wholesale replacement of
            existing manufacturing infrastructure.
          </span>

        </div>


        <motion.div
          className="manufacturingAssetsGrid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.08,
          }}
        >

          {manufacturingAssets.map((asset) => {
            const Icon = asset.icon;

            return (
              <motion.article
                className="manufacturingAssetCard"
                variants={fadeUp}
                key={asset.title}
              >

                <div className="manufacturingAssetIcon">
                  <Icon size={23} />
                </div>

                <h3>
                  {asset.title}
                </h3>

                <p>
                  {asset.text}
                </p>

              </motion.article>
            );
          })}

        </motion.div>

      </section>


      {/* =========================================================
          AI OPTIMISATION SCENARIOS
      ========================================================= */}

      <section className="manufacturingSection manufacturingScenariosSection">

        <div className="manufacturingSectionHeader">

          <p>
            AI Optimisation Scenarios
          </p>

          <h2>
            Turn Industrial Energy Waste Into Measurable Cost & Carbon
            Reduction Opportunities.
          </h2>

          <span>
            EnerG IQ Tech combines the AI Energy Gateway, Digital Twin,
            Decision Agents and human-in-the-loop governance to identify
            practical optimisation opportunities while protecting production,
            quality, reliability and safety requirements.
          </span>

        </div>


        <motion.div
          className="manufacturingScenarioGrid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.08,
          }}
        >

          {optimisationScenarios.map((scenario) => {
            const Icon = scenario.icon;

            return (
              <motion.article
                className="manufacturingScenarioCard"
                variants={fadeUp}
                key={scenario.title}
              >

                <div className="manufacturingScenarioTop">

                  <div className="manufacturingScenarioIcon">
                    <Icon size={24} />
                  </div>

                  <span>
                    AI Scenario
                  </span>

                </div>


                <h3>
                  {scenario.title}
                </h3>

                <p>
                  {scenario.text}
                </p>


                <div className="manufacturingScenarioOutcome">
                  <CheckCircle2 size={17} />
                  {scenario.outcome}
                </div>

              </motion.article>
            );
          })}

        </motion.div>

      </section>


      {/* =========================================================
          END-TO-END WORKFLOW
      ========================================================= */}

      <section
        className="manufacturingSection manufacturingWorkflowSection"
        id="manufacturing-workflow"
      >

        <div className="manufacturingSectionHeader manufacturingLightHeader">

          <p>
            End-to-End AI Workflow
          </p>

          <h2>
            From Industrial Energy Data to Measurable Savings.
          </h2>

          <span>
            EnerG IQ Tech transforms operational and energy telemetry into
            explainable, governed optimisation recommendations and measures
            resulting energy, financial and associated CO₂ outcomes while
            keeping production teams in control.
          </span>

        </div>


        <div className="manufacturingWorkflow">

          {workflowSteps.map((step, index) => (

            <div
              className="manufacturingWorkflowStep"
              key={step.number}
            >

              <div className="manufacturingWorkflowNumber">
                {step.number}
              </div>


              <div>

                <h3>
                  {step.title}
                </h3>

                <p>
                  {step.text}
                </p>

              </div>


              {index < workflowSteps.length - 1 && (
                <ChevronRight
                  className="manufacturingWorkflowArrow"
                  size={21}
                />
              )}

            </div>

          ))}

        </div>

      </section>


      {/* =========================================================
          SHARED PLATFORM
      ========================================================= */}

      <section className="manufacturingSection manufacturingPlatformSection">

        <div className="manufacturingPlatformPanel">

          <div className="manufacturingPlatformCopy">

            <p>
              Shared EnerG IQ Tech Platform
            </p>

            <h2>
              Manufacturing-Specific Optimisation Built on One Energy
              Intelligence Architecture.
            </h2>

            <span>
              Manufacturing AI uses the shared EnerG IQ Tech architecture
              to connect industrial assets, identify energy waste, recommend
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
                Digital Twin production context
              </li>

              <li>
                <CheckCircle2 size={18} />
                Configurable AI Decision Agents
              </li>

              <li>
                <CheckCircle2 size={18} />
                Human-in-the-loop production governance
              </li>

              <li>
                <CheckCircle2 size={18} />
                Energy, cost, CO₂ and ROI intelligence
              </li>

            </ul>

          </div>


          <div className="manufacturingPlatformFlow">

            <div className="manufacturingPlatformNode">

              <Factory size={27} />

              <span>
                Industrial Assets
              </span>

            </div>


            <ChevronRight size={22} />


            <div className="manufacturingPlatformNode featured">

              <Cpu size={27} />

              <span>
                AI Energy Gateway
              </span>

            </div>


            <ChevronRight size={22} />


            <div className="manufacturingPlatformNode">

              <Layers3 size={27} />

              <span>
                Digital Twin
              </span>

            </div>


            <ChevronRight size={22} />


            <div className="manufacturingPlatformNode">

              <Brain size={27} />

              <span>
                AI Optimisation
              </span>

            </div>


            <ChevronRight size={22} />


            <div className="manufacturingPlatformNode">

              <ShieldCheck size={27} />

              <span>
                Measured Outcomes
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          POTENTIAL OUTCOMES
      ========================================================= */}

      <section className="manufacturingSection manufacturingBenefitsSection">

        <div className="manufacturingSectionHeader">

          <p>
            Potential Energy, Financial & Carbon Outcomes
          </p>

          <h2>
            Convert Industrial Energy Optimisation Into Measurable Business
            & Sustainability Value.
          </h2>

          <span>
            EnerG IQ Tech measures potential and realised outcomes against
            established site baselines. Actual results depend on equipment
            condition, process design, tariffs, production schedules and
            customer-approved optimisation measures.
          </span>

        </div>


        <div className="manufacturingBenefitsGrid">

          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article
                className="manufacturingBenefitCard"
                key={benefit.label}
              >

                <div className="manufacturingBenefitIcon">
                  <Icon size={24} />
                </div>

                <strong>
                  {benefit.value}
                </strong>

                <h3>
                  {benefit.label}
                </h3>

                <p>
                  {benefit.note}
                </p>

              </article>
            );
          })}

        </div>

      </section>


      {/* =========================================================
          PILOT PROGRAM
      ========================================================= */}

      <section
        className="manufacturingSection manufacturingPilotSection"
        id="manufacturing-pilot"
      >

        <div className="manufacturingPilotPanel">

          <div className="manufacturingPilotCopy">

            <p>
              Manufacturing Pilot Program
            </p>

            <h2>
              Start With One Industrial Energy Problem. Prove the Savings
              Before Scaling.
            </h2>

            <span>
              Establish an energy baseline for one manufacturing site or
              high-value system, identify optimisation opportunities and
              quantify potential energy-cost, peak-demand and associated CO₂
              outcomes while validating production, quality, safety and
              reliability safeguards before broader deployment.
            </span>


            <button
              type="button"
              className="manufacturingPrimaryButton"
              onClick={handlePilotClick}
            >
              Discuss a Manufacturing Pilot
              <ChevronRight size={19} />
            </button>

          </div>


          <div className="manufacturingPilotChecklist">

            <h3>
              Indicative Pilot Scope
            </h3>


            <ul>

              {pilotIncludes.map((item) => (

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

      <section className="manufacturingFinalCta">

        <div>

          <p>
            Now Onboarding Manufacturing Pilot Partners
          </p>

          <h2>
            Reduce Industrial Energy Costs & CO₂ Emissions Without
            Compromising Production.
          </h2>

          <span>
            Start with one measurable industrial energy challenge. Establish
            the baseline, identify energy waste and determine whether the
            potential financial and carbon outcomes justify broader
            deployment - while protecting production reliability, quality
            and operational performance.
          </span>

        </div>


        <div className="manufacturingFinalActions">

          

          <Link to="/book-discussion" className="manufacturingPrimaryButton">
            Book a Discussion
            <ChevronRight size={19} />
          </Link>

        </div>

      </section>

    </main>
  );
}