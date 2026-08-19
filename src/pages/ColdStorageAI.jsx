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
  Cpu,
  Database,
  Fan,
  Gauge,
  Layers3,
  Leaf,
  Network,
  Refrigerator,
  ShieldCheck,
  Snowflake,
  Thermometer,
  TimerReset,
  TrendingDown,
  Waves,
  Zap,
} from "lucide-react";

import "../styles/ColdStorageAI.css";


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
   CONNECTED COLD STORAGE ASSETS
========================================================= */

const coldStorageAssets = [
  {
    icon: Gauge,
    title: "Compressors",
    text:
      "Identify inefficient loading, sequencing, cycling and pressure conditions that can increase refrigeration energy consumption and peak demand.",
  },

  {
    icon: Fan,
    title: "Evaporators",
    text:
      "Identify airflow, icing, fan-operation and heat-transfer issues that increase energy consumption while affecting cooling performance.",
  },

  {
    icon: Waves,
    title: "Condensers",
    text:
      "Analyse condensing pressure, ambient conditions, fan operation and heat-rejection efficiency to identify refrigeration energy-saving opportunities.",
  },

  {
    icon: Refrigerator,
    title: "Cold Rooms & Freezers",
    text:
      "Track temperature stability, door events, refrigeration demand and abnormal operating patterns while protecting product integrity.",
  },

  {
    icon: TimerReset,
    title: "Defrost Systems",
    text:
      "Detect excessive, overlapping, poorly timed or ineffective defrost cycles that create avoidable energy consumption and demand peaks.",
  },

  {
    icon: Thermometer,
    title: "Temperature Sensors",
    text:
      "Monitor zone conditions and detect deviations so energy optimisation remains within temperature, product and compliance safeguards.",
  },

  {
    icon: BarChart3,
    title: "Smart Meters",
    text:
      "Measure site demand, refrigeration loads, energy consumption and peak-demand events to establish measurable energy baselines.",
  },

  {
    icon: Network,
    title: "BMS, PLC & IoT Systems",
    text:
      "Connect existing controls and operational telemetry through the AI Energy Gateway for AI-driven energy and refrigeration optimisation.",
  },
];


/* =========================================================
   AI OPTIMISATION SCENARIOS
========================================================= */

const optimisationScenarios = [
  {
    icon: Gauge,
    title: "Compressor Optimisation",
    text:
      "Detect inefficient compressor loading, short cycling, poor sequencing and avoidable simultaneous operation.",
    outcome: "Lower compressor energy cost & CO₂ impact",
  },

  {
    icon: TimerReset,
    title: "Defrost Intelligence",
    text:
      "Identify unnecessary, overlapping or poorly scheduled defrost cycles while protecting coil performance and temperature requirements.",
    outcome: "Reduce avoidable defrost energy use",
  },

  {
    icon: Zap,
    title: "Peak Demand Reduction",
    text:
      "Forecast refrigeration-driven demand spikes and recommend load-shifting or equipment-sequencing actions.",
    outcome: "Reduce peak-demand charges",
  },

  {
    icon: Thermometer,
    title: "Temperature Risk Detection",
    text:
      "Detect abnormal temperatures, rapid temperature movement and persistent zone deviations before optimisation affects product conditions.",
    outcome: "Protect temperature compliance",
  },

  {
    icon: Activity,
    title: "Equipment Fault Detection",
    text:
      "Identify abnormal pressure, power, runtime and temperature relationships before equipment problems escalate.",
    outcome: "Protect reliability & reduce waste",
  },

  {
    icon: Leaf,
    title: "Energy & Carbon Intelligence",
    text:
      "Measure energy reduction, financial savings and associated CO₂ outcomes against established refrigeration baselines.",
    outcome: "Prove cost & carbon impact",
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
      "Connect refrigeration controls, compressors, meters, temperature sensors, BMS, PLC and IoT telemetry through the AI Energy Gateway.",
  },

  {
    number: "02",
    title: "Detect",
    text:
      "Identify refrigeration energy waste, temperature anomalies, demand spikes and abnormal equipment behaviour.",
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
      "Evaluate optimisation actions against temperature requirements, product integrity, equipment constraints and operational safeguards.",
  },

  {
    number: "05",
    title: "Approve",
    text:
      "Route explainable recommendations through human-in-the-loop approval before operational changes are applied.",
  },

  {
    number: "06",
    title: "Measure",
    text:
      "Compare results against established baselines to quantify energy reduction, peak-demand reduction, financial savings, associated CO₂ outcomes and operational performance.",
  },
];


/* =========================================================
   PILOT
========================================================= */

const pilotIncludes = [
  "Cold-storage energy baseline and refrigeration asset assessment",
  "Smart-meter, BMS, PLC, sensor and available telemetry integration",
  "Compressor, evaporator, condenser and defrost energy analysis",
  "Temperature compliance and operational safeguard assessment",
  "Peak-demand and equipment-sequencing optimisation scenarios",
  "Digital Twin investigation and AI-recommended actions",
  "Human-in-the-loop review and approval workflow",
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
      "Indicative opportunity only. Actual savings depend on site conditions, equipment, tariffs and operating practices.",
  },

  {
    icon: Zap,
    value: "Lower",
    label: "Peak-demand exposure",
    note:
      "Through forecasting, sequencing and flexible refrigeration-load optimisation.",
  },

  {
    icon: Leaf,
    value: "Lower",
    label: "Associated CO₂ emissions",
    note:
      "Through reduced unnecessary energy consumption and improved refrigeration operating efficiency.",
  },

  {
    icon: Thermometer,
    value: "Protected",
    label: "Temperature compliance",
    note:
      "Optimisation recommendations remain subject to operational and temperature safeguards.",
  },
];


export default function ColdStorageAI({ openPilotModal }) {
  const handlePilotClick = () => {
    if (typeof openPilotModal === "function") {
      openPilotModal();
      return;
    }

    const pilotSection = document.getElementById("cold-storage-pilot");

    pilotSection?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };


  return (
    <main className="coldStoragePage">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="coldStorageHero">

        <div className="coldStorageHeroGlow coldStorageHeroGlowOne" />
        <div className="coldStorageHeroGlow coldStorageHeroGlowTwo" />


        <motion.div
          className="coldStorageHeroContent"
          variants={stagger}
          initial="hidden"
          animate="show"
        >

          <motion.div
            className="coldStorageEyebrow"
            variants={fadeUp}
          >
            <Snowflake size={17} />
            EnerG IQ Tech Cold Storage AI
          </motion.div>


          <motion.h1 variants={fadeUp}>
            Reduce Refrigeration Energy Costs & CO₂ Emissions Without
            Compromising Temperature Compliance.
          </motion.h1>


          <motion.p
            className="coldStorageHeroLead"
            variants={fadeUp}
          >
            EnerG IQ Tech Cold Storage AI helps cold-storage and refrigerated
            facilities identify and reduce energy waste, peak demand and
            associated CO₂ emissions while protecting temperature compliance,
            equipment reliability and product integrity.
          </motion.p>


          <motion.p
            className="coldStorageHeroDescription"
            variants={fadeUp}
          >
            Edge AI analyses compressors, evaporators, condensers, defrost
            systems, cold rooms and other refrigeration equipment in real time.
            The AI Energy Gateway connects BMS, PLC, smart-meter and IoT
            telemetry so EnerG IQ Tech can detect inefficient operation,
            recommend governed optimisation actions and measure resulting
            energy, financial and carbon outcomes.
          </motion.p>


          <motion.div
            className="coldStorageHeroActions"
            variants={fadeUp}
          >

           
            <Link to="/book-pilot" className="coldStoragePrimaryButton">
              Book a Discussion
              <ChevronRight size={19} />
            </Link>

            <a
              href="#cold-storage-workflow"
              className="coldStorageSecondaryButton"
            >
              View AI Workflow
            </a>

          </motion.div>


          <motion.div
            className="coldStorageHeroPills"
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
              Peak Demand Reduction
            </span>

            <span>
              <Thermometer size={15} />
              Temperature Protection
            </span>

          </motion.div>

        </motion.div>


        {/* =====================================================
            HERO DASHBOARD
        ===================================================== */}

        <motion.div
          className="coldStorageHeroVisual"
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

          <div className="coldStorageDashboard">

            <div className="coldStorageDashboardTop">

              <div>
                <span>
                  Cold Storage Energy Optimisation
                </span>

                <small>
                  Distribution Centre 01
                </small>
              </div>


              <b>
                <Activity size={15} />
                Live
              </b>

            </div>


            <div className="coldStorageKpiGrid">

              <div>
                <small>Site Load</small>
                <strong>812 kW</strong>
                <span>Current demand</span>
              </div>


              <div>
                <small>Refrigeration Load</small>
                <strong>586 kW</strong>
                <span>72% of site demand</span>
              </div>


              <div>
                <small>Cold Room</small>
                <strong>-18.4°C</strong>
                <span>Within operating range</span>
              </div>


              <div>
                <small>Savings Opportunity</small>
                <strong>$7,850</strong>
                <span>Indicative monthly opportunity</span>
              </div>

            </div>


            <div className="coldStorageChartCard">

              <div className="coldStorageChartHeader">

                <div>
                  <strong>
                    Refrigeration Demand
                  </strong>

                  <span>
                    AI baseline versus actual load
                  </span>
                </div>


                <span className="coldStoragePriorityBadge">
                  High Priority
                </span>

              </div>


              <div className="coldStorageChart">

                <div className="coldStorageBaseline" />

                <span style={{ height: "38%" }} />
                <span style={{ height: "46%" }} />
                <span style={{ height: "52%" }} />
                <span style={{ height: "69%" }} />
                <span className="alertBar" style={{ height: "91%" }} />
                <span className="alertBar" style={{ height: "84%" }} />
                <span style={{ height: "62%" }} />
                <span style={{ height: "50%" }} />
                <span style={{ height: "43%" }} />

              </div>

            </div>


            <div className="coldStorageInsight">

              <div className="coldStorageInsightIcon">
                <Brain size={22} />
              </div>


              <div>

                <strong>
                  AI Energy Recommendation
                </strong>

                <p>
                  Compressor 3 is operating during a simultaneous defrost
                  event, creating a projected 116 kW demand spike. Review
                  compressor sequencing and defer Defrost Zone B by 20 minutes
                  to reduce peak demand while maintaining temperature
                  requirements.
                </p>

              </div>

            </div>


            <div className="coldStorageApproval">

              <div>
                <ShieldCheck size={19} />

                <span>
                  Human approval required before execution
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

      <section className="coldStorageValueStrip">

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
          COLD STORAGE ENERGY CHALLENGE
      ========================================================= */}

      <section className="coldStorageSection coldStorageIntroSection">

        <motion.div
          className="coldStorageSectionHeader"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >

          <motion.p variants={fadeUp}>
            Cold Storage Energy Challenge
          </motion.p>


          <motion.h2 variants={fadeUp}>
            High Refrigeration Energy Costs, Peak Demand and CO₂ Emissions -
            With No Room to Compromise Temperature.
          </motion.h2>


          <motion.span variants={fadeUp}>
            Refrigeration can represent one of the largest electrical loads
            across cold-storage and refrigerated facilities. Operators need
            to reduce energy consumption, electricity costs and associated
            CO₂ emissions while maintaining strict temperature conditions,
            equipment reliability, compliance and product integrity.
          </motion.span>

        </motion.div>


        <div className="coldStorageChallengeGrid">

          <motion.article
            className="coldStorageChallengeCard"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >

            <div className="coldStorageChallengeIcon">
              <Zap size={25} />
            </div>

            <h3>
              High Energy Costs & Demand
            </h3>

            <p>
              Compressors, evaporators, condensers and defrost cycles can
              create significant energy consumption and costly demand peaks.
            </p>

          </motion.article>


          <motion.article
            className="coldStorageChallengeCard"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >

            <div className="coldStorageChallengeIcon">
              <Leaf size={25} />
            </div>

            <h3>
              CO₂ Reduction Requirements
            </h3>

            <p>
              Reducing avoidable refrigeration energy consumption can lower
              associated CO₂ emissions and support organisational
              sustainability objectives.
            </p>

          </motion.article>


          <motion.article
            className="coldStorageChallengeCard"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >

            <div className="coldStorageChallengeIcon">
              <AlertTriangle size={25} />
            </div>

            <h3>
              Product & Compliance Risk
            </h3>

            <p>
              Energy optimisation must remain within temperature,
              food-safety, product-integrity and operational safeguards.
            </p>

          </motion.article>


          <motion.article
            className="coldStorageChallengeCard"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >

            <div className="coldStorageChallengeIcon">
              <Database size={25} />
            </div>

            <h3>
              Fragmented Operational Data
            </h3>

            <p>
              Energy meters, refrigeration controllers, temperature sensors,
              PLCs and operational data often remain disconnected, making
              whole-site optimisation difficult.
            </p>

          </motion.article>

        </div>

      </section>


      {/* =========================================================
          CONNECTED ASSETS
      ========================================================= */}

      <section className="coldStorageSection coldStorageAssetsSection">

        <div className="coldStorageSectionHeader">

          <p>
            Connected Cold Storage Assets
          </p>

          <h2>
            Optimise the Refrigeration Systems Driving Your Energy Costs.
          </h2>

          <span>
            The AI Energy Gateway connects existing refrigeration equipment,
            BMS, PLC, meters and available telemetry so EnerG IQ Tech can
            identify energy waste and optimisation opportunities without
            requiring wholesale replacement of existing refrigeration
            infrastructure.
          </span>

        </div>


        <motion.div
          className="coldStorageAssetsGrid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.12,
          }}
        >

          {coldStorageAssets.map((asset) => {
            const Icon = asset.icon;

            return (
              <motion.article
                className="coldStorageAssetCard"
                variants={fadeUp}
                key={asset.title}
              >

                <div className="coldStorageAssetIcon">
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

      <section className="coldStorageSection coldStorageScenariosSection">

        <div className="coldStorageSectionHeader">

          <p>
            AI Optimisation Scenarios
          </p>

          <h2>
            Turn Refrigeration Energy Waste Into Measurable Cost & Carbon
            Reduction Opportunities.
          </h2>

          <span>
            EnerG IQ Tech combines the AI Energy Gateway, Digital Twin,
            Decision Agents and human-in-the-loop governance to identify
            refrigeration optimisation opportunities while protecting
            temperature requirements, equipment reliability and product
            integrity.
          </span>

        </div>


        <motion.div
          className="coldStorageScenarioGrid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.12,
          }}
        >

          {optimisationScenarios.map((scenario) => {
            const Icon = scenario.icon;

            return (
              <motion.article
                className="coldStorageScenarioCard"
                variants={fadeUp}
                key={scenario.title}
              >

                <div className="coldStorageScenarioTop">

                  <div className="coldStorageScenarioIcon">
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


                <div className="coldStorageScenarioOutcome">
                  <CheckCircle2 size={17} />
                  {scenario.outcome}
                </div>

              </motion.article>
            );
          })}

        </motion.div>

      </section>


      {/* =========================================================
          AI WORKFLOW
      ========================================================= */}

      <section
        className="coldStorageSection coldStorageWorkflowSection"
        id="cold-storage-workflow"
      >

        <div className="coldStorageSectionHeader coldStorageLightHeader">

          <p>
            End-to-End AI Workflow
          </p>

          <h2>
            From Refrigeration Energy Data to Measurable Savings.
          </h2>

          <span>
            EnerG IQ Tech transforms refrigeration telemetry into
            explainable, governed optimisation recommendations and measures
            resulting energy, financial and associated CO₂ outcomes while
            keeping operators in control.
          </span>

        </div>


        <div className="coldStorageWorkflow">

          {workflowSteps.map((step, index) => (

            <div
              className="coldStorageWorkflowStep"
              key={step.number}
            >

              <div className="coldStorageWorkflowNumber">
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
                  className="coldStorageWorkflowArrow"
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

      <section className="coldStorageSection coldStoragePlatformSection">

        <div className="coldStoragePlatformPanel">

          <div className="coldStoragePlatformCopy">

            <p>
              Shared EnerG IQ Tech Platform
            </p>

            <h2>
              Cold-Storage Optimisation Built on One Energy Intelligence
              Architecture.
            </h2>

            <span>
              Cold Storage AI uses the shared EnerG IQ Tech architecture to
              connect refrigeration assets, identify energy waste, recommend
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
                Digital Twin refrigeration context
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


          <div className="coldStoragePlatformFlow">

            <div className="coldStoragePlatformNode">
              <Snowflake size={27} />
              <span>
                Cold Storage Assets
              </span>
            </div>

            <ChevronRight size={22} />


            <div className="coldStoragePlatformNode featured">
              <Cpu size={27} />
              <span>
                AI Energy Gateway
              </span>
            </div>

            <ChevronRight size={22} />


            <div className="coldStoragePlatformNode">
              <Layers3 size={27} />
              <span>
                Digital Twin
              </span>
            </div>

            <ChevronRight size={22} />


            <div className="coldStoragePlatformNode">
              <Brain size={27} />
              <span>
                AI Optimisation
              </span>
            </div>

            <ChevronRight size={22} />


            <div className="coldStoragePlatformNode">
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

      <section className="coldStorageSection coldStorageBenefitsSection">

        <div className="coldStorageSectionHeader">

          <p>
            Potential Energy, Financial & Carbon Outcomes
          </p>

          <h2>
            Convert Refrigeration Optimisation Into Measurable Business &
            Sustainability Value.
          </h2>

          <span>
            EnerG IQ Tech measures potential and realised outcomes against
            established site baselines. Actual results depend on plant
            condition, operating practices, control strategies, tariffs and
            customer-approved optimisation measures.
          </span>

        </div>


        <div className="coldStorageBenefitsGrid">

          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article
                className="coldStorageBenefitCard"
                key={benefit.label}
              >

                <div className="coldStorageBenefitIcon">
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
          PILOT
      ========================================================= */}

      <section
        className="coldStorageSection coldStoragePilotSection"
        id="cold-storage-pilot"
      >

        <div className="coldStoragePilotPanel">

          <div className="coldStoragePilotCopy">

            <p>
              Cold Storage Pilot Program
            </p>

            <h2>
              Start With One Refrigeration Energy Problem. Prove the Savings
              Before Scaling.
            </h2>

            <span>
              Establish the site's refrigeration-energy baseline, identify
              high-value optimisation opportunities and quantify potential
              energy-cost, peak-demand and associated CO₂ outcomes while
              validating temperature and operational safeguards before
              portfolio-scale deployment.
            </span>


            <button
              type="button"
              className="coldStoragePrimaryButton"
              onClick={handlePilotClick}
            >
              Discuss a Cold Storage Pilot
              <ChevronRight size={19} />
            </button>

          </div>


          <div className="coldStoragePilotChecklist">

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

      <section className="coldStorageFinalCta">

        <div>

          <p>
            Now Onboarding Cold Storage Pilot Partners
          </p>

          <h2>
            Reduce Refrigeration Energy Costs & CO₂ Emissions Without
            Compromising Temperature.
          </h2>

          <span>
            Start with one measurable refrigeration energy challenge.
            Establish the baseline, identify energy waste and determine
            whether the potential financial and carbon outcomes justify
            broader deployment - while keeping temperature compliance and
            product integrity protected.
          </span>

        </div>


        <div className="coldStorageFinalActions">

     
          <Link to="/book-pilot" className="coldStoragePrimaryButton">
            Book a Discussion
            <ChevronRight size={19} />
          </Link>
        </div>

      </section>

    </main>
  );
}