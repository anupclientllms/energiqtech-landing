import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Activity,
  ArrowRight,
  BatteryCharging,
  Brain,
  CheckCircle2,
  ChevronRight,
  Cpu,
  Droplets,
  FlaskConical,
  Gauge,
  HeartPulse,
  Hospital,
  Image,
  Layers3,
  Leaf,
  Lightbulb,
  Network,
  Power,
  Refrigerator,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Thermometer,
  UtilityPole,
  Waves,
  Zap,
} from "lucide-react";

import "../styles/HealthCareAI.css";


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
   CONNECTED HEALTHCARE ASSETS
========================================================= */

const healthcareAssets = [
  {
    icon: Stethoscope,
    title: "Operating Theatres",
    text:
      "Analyse HVAC, pressure, temperature, ventilation, lighting and theatre energy loads to identify efficiency opportunities while preserving clinical requirements.",
  },

  {
    icon: HeartPulse,
    title: "ICU & Critical Care",
    text:
      "Monitor environmental conditions, essential power, equipment demand and energy behaviour while protecting critical-care resilience.",
  },

  {
    icon: Hospital,
    title: "Hospital HVAC",
    text:
      "Reduce avoidable HVAC energy consumption through intelligent air-handling, ventilation, zoning and scheduling while maintaining required clinical conditions.",
  },

  {
    icon: Waves,
    title: "Chiller Plant",
    text:
      "Improve chiller sequencing, chilled-water conditions, pumping and condenser performance to reduce central-plant energy consumption.",
  },

  {
    icon: Image,
    title: "MRI / CT Imaging",
    text:
      "Analyse imaging-suite loads, cooling requirements and standby consumption to identify energy-saving opportunities without affecting clinical availability.",
  },

  {
    icon: Refrigerator,
    title: "Medical Refrigeration",
    text:
      "Monitor temperature, compressor behaviour and energy consumption while protecting medicines, samples and clinical refrigeration compliance.",
  },

  {
    icon: Sparkles,
    title: "CSSD & Sterilisation",
    text:
      "Analyse steam, hot water, electrical loads, cycle timing and equipment behaviour to reduce avoidable energy consumption while maintaining sterilisation requirements.",
  },

  {
    icon: FlaskConical,
    title: "Laboratories",
    text:
      "Identify energy waste across ventilation, fume extraction, refrigeration and equipment schedules while maintaining laboratory operating requirements.",
  },

  {
    icon: Lightbulb,
    title: "Lighting & Wards",
    text:
      "Reduce unnecessary lighting and after-hours consumption using occupancy, zoning and operational schedules.",
  },

  {
    icon: Activity,
    title: "Lifts & Vertical Transport",
    text:
      "Analyse lift demand, standby loads, operating patterns and abnormal power behaviour across hospital buildings.",
  },

  {
    icon: Droplets,
    title: "Water & Pumps",
    text:
      "Identify excessive runtime, pressure losses and inefficient pumping that contribute to avoidable hospital energy consumption.",
  },

  {
    icon: Thermometer,
    title: "Hot Water & Steam",
    text:
      "Reduce thermal energy waste by optimising generation, schedules, storage temperatures and distribution performance.",
  },

  {
    icon: Network,
    title: "Medical Gas Systems",
    text:
      "Monitor compressed-air, vacuum and medical-gas infrastructure for inefficient operation while preserving clinical safeguards.",
  },

  {
    icon: Power,
    title: "UPS & Critical Power",
    text:
      "Analyse UPS loading, battery condition and essential electrical systems while maintaining critical-power resilience.",
  },

  {
    icon: UtilityPole,
    title: "Backup Generators",
    text:
      "Monitor readiness, test cycles, runtime and fuel use while preserving emergency-power availability.",
  },

  {
    icon: Leaf,
    title: "Solar & Battery",
    text:
      "Coordinate renewable generation and battery dispatch to improve onsite energy utilisation, reduce peak demand and lower associated carbon impact.",
  },

  {
    icon: BatteryCharging,
    title: "Kitchen & Laundry",
    text:
      "Identify energy waste across thermal loads, hot water, steam, refrigeration and equipment schedules.",
  },

  {
    icon: Gauge,
    title: "Hospital Energy Centre",
    text:
      "Coordinate chillers, boilers, steam, hot water and electrical infrastructure to improve whole-hospital energy efficiency.",
  },
];


/* =========================================================
   AI OPTIMISATION SCENARIOS
========================================================= */

const scenarios = [
  {
    icon: Hospital,
    title: "HVAC & Ventilation Optimisation",
    text:
      "Detect excessive air changes, poor scheduling, simultaneous heating and cooling, and inefficient zoning while preserving clinical environmental requirements.",
    outcome: "Reduce HVAC energy cost & CO₂ impact",
  },

  {
    icon: Waves,
    title: "Chiller Plant Optimisation",
    text:
      "Improve chiller sequencing, chilled-water temperatures, condenser performance and part-load efficiency.",
    outcome: "Reduce central-plant energy use",
  },

  {
    icon: Refrigerator,
    title: "Medical Refrigeration Risk",
    text:
      "Detect temperature drift, excessive compressor cycling and abnormal power behaviour before clinical refrigeration requirements are affected.",
    outcome: "Protect clinical refrigeration",
  },

  {
    icon: Power,
    title: "Critical Power Intelligence",
    text:
      "Monitor UPS loading, battery condition, generators and essential circuits while identifying efficiency opportunities within resilience constraints.",
    outcome: "Protect resilience & efficiency",
  },

  {
    icon: Thermometer,
    title: "Steam & Hot Water Optimisation",
    text:
      "Identify thermal losses, poor schedules, excessive storage temperatures and avoidable boiler operation.",
    outcome: "Reduce thermal energy costs",
  },

  {
    icon: Zap,
    title: "Peak Demand Reduction",
    text:
      "Forecast demand peaks and coordinate suitable flexible loads, batteries, chillers and non-critical schedules.",
    outcome: "Reduce peak-demand charges",
  },
];


/* =========================================================
   END-TO-END WORKFLOW
========================================================= */

const workflowSteps = [
  {
    number: "01",
    title: "Connect",
    text:
      "Connect BMS, meters, chillers, boilers, HVAC, refrigeration, critical power and available IoT telemetry through the AI Energy Gateway.",
  },

  {
    number: "02",
    title: "Detect",
    text:
      "Identify energy waste, inefficient equipment behaviour, peak-demand events and abnormal operating conditions.",
  },

  {
    number: "03",
    title: "Analyse",
    text:
      "Use AI Decision Agents and Digital Twin context to investigate root causes and quantify potential energy, financial and emissions impact within clinical constraints.",
  },

  {
    number: "04",
    title: "Simulate",
    text:
      "Evaluate optimisation actions against patient care, comfort, air quality, infection control, safety, compliance and critical-service requirements.",
  },

  {
    number: "05",
    title: "Approve",
    text:
      "Route explainable recommendations through facilities, engineering and hospital-specific human-in-the-loop approval workflows.",
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

const pilotItems = [
  "Hospital energy baseline and priority-system assessment",
  "BMS, smart-meter, sub-meter and available telemetry integration",
  "HVAC, chiller, refrigeration, steam and hot-water energy analysis",
  "Peak-demand and central-plant optimisation scenarios",
  "Clinical and critical-power safeguard assessment",
  "Digital Twin investigation and AI-recommended actions",
  "Human-in-the-loop facilities and clinical approval workflow",
  "Energy cost, associated CO₂, resilience and ROI measurement",
];


export default function HealthcareAI({ openPilotModal }) {
  const handlePilotClick = () => {
    if (typeof openPilotModal === "function") {
      openPilotModal();
      return;
    }

    document
      .getElementById("healthcare-pilot")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };


  return (
    <main className="healthcarePage">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="healthcareHero">

        <div className="healthcareHeroContent">

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
          >

            <motion.div
              className="healthcareBadge"
              variants={fadeUp}
            >
              <Hospital size={17} />
              EnerG IQ Tech Healthcare AI
            </motion.div>


            <motion.h1 variants={fadeUp}>
              Reduce Hospital Energy Costs & CO₂ Emissions Without
              Compromising Patient Care.
            </motion.h1>


            <motion.p
              className="healthcareLead"
              variants={fadeUp}
            >
              EnerG IQ Tech Healthcare AI helps hospitals identify and reduce
              energy waste, peak demand and associated CO₂ emissions across
              clinical, building and central energy infrastructure - while
              protecting patient care, clinical safety, compliance and 24/7
              operational resilience.
            </motion.p>


            <motion.p
              className="healthcareDescription"
              variants={fadeUp}
            >
              Edge AI analyses HVAC, chillers, steam, hot water, medical
              refrigeration, laboratories, imaging, critical power and other
              hospital systems in real time. The AI Energy Gateway connects
              BMS, meters and operational telemetry so EnerG IQ Tech can
              identify inefficiencies, recommend governed optimisation
              actions and measure resulting energy, financial and carbon
              outcomes.
            </motion.p>


            <motion.div
              className="healthcareHeroButtons"
              variants={fadeUp}
            >

              
              <Link to="/book-pilot" className="healthcarePrimaryBtn">
                Book a Discussion
                <ChevronRight size={19} />
              </Link>


              <a
                href="#healthcare-workflow"
                className="healthcareSecondaryBtn"
              >
                View AI Workflow
              </a>

            </motion.div>


            <motion.div
              className="healthcareHeroTags"
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
                <ShieldCheck size={15} />
                Clinical Safeguards
              </span>

            </motion.div>

          </motion.div>

        </div>


        {/* =====================================================
            HERO DASHBOARD
        ===================================================== */}

        <motion.div
          className="healthcareHeroVisual"
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

          <div className="healthcareDashboard">

            <div className="healthcareDashboardTop">

              <div>
                <strong>
                  Hospital Energy Optimisation
                </strong>

                <span>
                  Energy, operations and clinical safeguards
                </span>
              </div>


              <b>
                <Activity size={14} />
                Live
              </b>

            </div>


            <div className="healthcareKpis">

              <div>

                <small>
                  Healthcare Sites
                </small>

                <strong>
                  4
                </strong>

                <span>
                  Connected hospitals
                </span>

              </div>


              <div>

                <small>
                  Asset Classes
                </small>

                <strong>
                  18
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
                  54
                </strong>

                <span>
                  Energy optimisation items
                </span>

              </div>


              <div>

                <small>
                  Critical Systems
                </small>

                <strong>
                  Protected
                </strong>

                <span>
                  Human approval enabled
                </span>

              </div>

            </div>


            <div className="healthcareInsightCard">

              <div className="healthcareInsightIcon">
                <Brain size={22} />
              </div>


              <div>

                <strong>
                  AI Energy Recommendation
                </strong>

                <p>
                  Hospital HVAC is maintaining full ventilation in an
                  unoccupied outpatient zone after 9:00 PM. Review an approved
                  setback schedule to reduce unnecessary energy consumption
                  while preserving pressure, air-quality and clinical
                  requirements.
                </p>

              </div>

            </div>


            <div className="healthcareApproval">

              <span>
                <ShieldCheck size={18} />
                Clinical and facilities approval required
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

      <section className="healthcareStrip">

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
          HEALTHCARE ENERGY CHALLENGE
      ========================================================= */}

      <section className="healthcareSection healthcareChallengeSection">

        <div className="healthcareSectionHeader">

          <p>
            Healthcare Energy Challenge
          </p>

          <h2>
            High Hospital Energy Costs & CO₂ Emissions - With Patient
            Care Always First.
          </h2>

          <span>
            Hospitals operate continuously across energy-intensive HVAC,
            chillers, steam, hot water, medical equipment, refrigeration and
            critical-power infrastructure. The challenge is reducing energy
            consumption, peak demand and associated emissions without
            compromising patient care, clinical safety, compliance or
            resilience.
          </span>

        </div>


        <div className="healthcareChallengeGrid">

          <article>

            <div className="healthcareIcon">
              <Zap size={24} />
            </div>

            <h3>
              High Energy Costs
            </h3>

            <p>
              HVAC, chillers, steam, hot water, imaging and continuous
              clinical operations create significant ongoing energy demand.
            </p>

          </article>


          <article>

            <div className="healthcareIcon">
              <Leaf size={24} />
            </div>

            <h3>
              CO₂ Reduction Requirements
            </h3>

            <p>
              Reducing unnecessary hospital energy consumption can lower
              associated CO₂ emissions and support healthcare sustainability
              and decarbonisation objectives.
            </p>

          </article>


          <article>

            <div className="healthcareIcon">
              <ShieldCheck size={24} />
            </div>

            <h3>
              Clinical Safety Constraints
            </h3>

            <p>
              Optimisation must preserve air quality, pressure relationships,
              temperature, infection-control requirements and patient care.
            </p>

          </article>


          <article>

            <div className="healthcareIcon">
              <Power size={24} />
            </div>

            <h3>
              24/7 Critical Infrastructure
            </h3>

            <p>
              UPS systems, generators, essential circuits and critical
              clinical infrastructure require resilience and governed
              operational decisions.
            </p>

          </article>

        </div>

      </section>


      {/* =========================================================
          CONNECTED HEALTHCARE ASSETS
      ========================================================= */}

      <section className="healthcareSection healthcareAssetsSection">

        <div className="healthcareSectionHeader">

          <p>
            Connected Healthcare Assets
          </p>

          <h2>
            Optimise the Systems Driving Hospital Energy Costs.
          </h2>

          <span>
            The AI Energy Gateway connects existing healthcare infrastructure,
            BMS, meters and available telemetry so EnerG IQ Tech can identify
            energy waste and optimisation opportunities without requiring
            wholesale replacement of hospital systems.
          </span>

        </div>


        <motion.div
          className="healthcareAssetsGrid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.08,
          }}
        >

          {healthcareAssets.map((asset) => {
            const Icon = asset.icon;

            return (
              <motion.article
                className="healthcareAssetCard"
                variants={fadeUp}
                key={asset.title}
              >

                <div className="healthcareIcon">
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

      <section className="healthcareSection healthcareScenarioSection">

        <div className="healthcareSectionHeader">

          <p>
            AI Optimisation Scenarios
          </p>

          <h2>
            Turn Hospital Energy Waste Into Measurable Cost & Carbon
            Reduction Opportunities.
          </h2>

          <span>
            EnerG IQ Tech combines the AI Energy Gateway, Digital Twin,
            Decision Agents and human-in-the-loop governance to identify
            practical energy optimisation opportunities while maintaining
            clinical and operational safeguards.
          </span>

        </div>


        <div className="healthcareScenarioGrid">

          {scenarios.map((scenario) => {
            const Icon = scenario.icon;

            return (
              <article
                className="healthcareScenarioCard"
                key={scenario.title}
              >

                <div className="healthcareScenarioTop">

                  <div className="healthcareIcon">
                    <Icon size={23} />
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


                <div className="healthcareOutcome">
                  <CheckCircle2 size={17} />
                  {scenario.outcome}
                </div>

              </article>
            );
          })}

        </div>

      </section>


      {/* =========================================================
          AI WORKFLOW
      ========================================================= */}

      <section
        className="healthcareSection healthcareWorkflowSection"
        id="healthcare-workflow"
      >

        <div className="healthcareSectionHeader healthcareSectionHeaderLight">

          <p>
            End-to-End AI Workflow
          </p>

          <h2>
            From Hospital Energy Data to Measurable Savings.
          </h2>

          <span>
            EnerG IQ Tech transforms operational telemetry into explainable,
            governed optimisation recommendations and measures resulting
            energy, financial and associated CO₂ outcomes while preserving
            clinical controls and human oversight.
          </span>

        </div>


        <div className="healthcareWorkflow">

          {workflowSteps.map((step) => (

            <div
              className="healthcareWorkflowStep"
              key={step.number}
            >

              <b>
                {step.number}
              </b>


              <div>

                <h3>
                  {step.title}
                </h3>

                <p>
                  {step.text}
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* =========================================================
          SHARED PLATFORM
      ========================================================= */}

      <section className="healthcareSection healthcarePlatformSection">

        <div className="healthcarePlatformPanel">

          <div className="healthcarePlatformCopy">

            <p>
              Shared EnerG IQ Tech Platform
            </p>

            <h2>
              Healthcare-Specific Optimisation Built on One Energy
              Intelligence Architecture.
            </h2>

            <span>
              Healthcare AI uses the shared EnerG IQ Tech architecture to
              connect hospital systems, identify energy waste, recommend
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
                Human-in-the-loop clinical governance
              </li>

              <li>
                <CheckCircle2 size={18} />
                Energy, cost, CO₂ and ROI intelligence
              </li>

            </ul>

          </div>


          <div className="healthcarePlatformFlow">

            <div className="healthcarePlatformNode">

              <Hospital size={27} />

              <span>
                Healthcare Assets
              </span>

            </div>


            <ChevronRight size={22} />


            <div className="healthcarePlatformNode featured">

              <Cpu size={27} />

              <span>
                AI Energy Gateway
              </span>

            </div>


            <ChevronRight size={22} />


            <div className="healthcarePlatformNode">

              <Layers3 size={27} />

              <span>
                Digital Twin
              </span>

            </div>


            <ChevronRight size={22} />


            <div className="healthcarePlatformNode">

              <Brain size={27} />

              <span>
                AI Optimisation
              </span>

            </div>


            <ChevronRight size={22} />


            <div className="healthcarePlatformNode">

              <ShieldCheck size={27} />

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
        className="healthcareSection healthcarePilotSection"
        id="healthcare-pilot"
      >

        <div className="healthcarePilotBox">

          <div className="healthcarePilotCopy">

            <p>
              Healthcare Pilot Program
            </p>

            <h2>
              Start With One Hospital Energy Problem. Prove the Savings
              Before Scaling.
            </h2>

            <span>
              Establish an energy baseline for one hospital or high-value
              system, identify optimisation opportunities and quantify
              potential energy-cost, peak-demand and associated CO₂ outcomes
              while validating clinical, safety and resilience safeguards
              before broader deployment.
            </span>


            <button
              type="button"
              className="healthcarePrimaryBtn"
              onClick={handlePilotClick}
            >
              Discuss a Healthcare Pilot
              <ChevronRight size={18} />
            </button>

          </div>


          <div className="healthcarePilotList">

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

      <section className="healthcareCta">

        <div>

          <p>
            Now Onboarding Healthcare Pilot Partners
          </p>

          <h2>
            Reduce Hospital Energy Costs & CO₂ Emissions Without
            Compromising Patient Care.
          </h2>

          <span>
            Start with one measurable hospital energy challenge. Establish
            the baseline, identify energy waste and determine whether the
            potential financial and carbon outcomes justify broader
            deployment - while keeping clinical safety, compliance and
            operational resilience protected.
          </span>

        </div>


        <div className="healthcareCtaActions">

       
          

          <Link to="/book-pilot" className="healthcarePrimaryBtn">
            Book a Discussion
            <ChevronRight size={19} />
          </Link>

        </div>

      </section>

    </main>
  );
}