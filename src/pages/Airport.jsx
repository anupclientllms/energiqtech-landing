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
  Fan,
  Gauge,
  Layers3,
  Leaf,
  Lightbulb,
  Plane,
  PlugZap,
  Refrigerator,
  ShieldCheck,
  SunMedium,
  Users,
  Waves,
  Zap,
} from "lucide-react";

import "../styles/AirportAI.css";


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
   CONNECTED AIRPORT ASSETS
========================================================= */

const airportAssets = [
  {
    icon: Fan,
    title: "Terminal HVAC",
    text:
      "Reduce HVAC energy waste by optimising terminal heating, cooling, ventilation and zoning using passenger flow, schedules and weather conditions.",
  },
  {
    icon: Plane,
    title: "Gates & Jet Bridges",
    text:
      "Identify unnecessary gate, jet-bridge, local HVAC and standby loads while maintaining turnaround and operational requirements.",
  },
  {
    icon: Gauge,
    title: "Baggage Systems",
    text:
      "Reduce avoidable conveyor and baggage-handling energy consumption by analysing runtime, standby operation and abnormal power behaviour.",
  },
  {
    icon: Lightbulb,
    title: "Airside Lighting",
    text:
      "Reduce lighting energy consumption through intelligent scheduling and dimming while maintaining aviation safety and operational requirements.",
  },
  {
    icon: Activity,
    title: "Escalators & Travelators",
    text:
      "Reduce unnecessary operating hours using passenger flow, occupancy patterns and time-of-day intelligence.",
  },
  {
    icon: Users,
    title: "Passenger Flow",
    text:
      "Use passenger movement and occupancy patterns to coordinate HVAC, lighting and other terminal loads more efficiently.",
  },
  {
    icon: Waves,
    title: "Chiller Plant",
    text:
      "Reduce central-plant energy consumption through improved chiller sequencing, chilled-water temperatures, pumping and condenser performance.",
  },
  {
    icon: BatteryCharging,
    title: "GSE & EV Charging",
    text:
      "Coordinate ground-support equipment and EV charging to reduce peak demand, manage tariff exposure and improve renewable-energy utilisation.",
  },
  {
    icon: ShieldCheck,
    title: "Security Screening",
    text:
      "Analyse screening-area HVAC, lighting, equipment loads and occupancy-driven patterns without compromising security operations.",
  },
  {
    icon: Refrigerator,
    title: "Retail Refrigeration",
    text:
      "Identify refrigeration energy waste across cold rooms, display cases and compressor systems while maintaining required temperatures.",
  },
  {
    icon: Droplets,
    title: "Water & Pumps",
    text:
      "Identify excessive runtime, inefficient pumping, pressure losses and operational waste across airport water systems.",
  },
  {
    icon: PlugZap,
    title: "Backup Power",
    text:
      "Monitor generators, UPS systems, essential circuits and testing schedules while protecting critical-power readiness and resilience.",
  },
  {
    icon: SunMedium,
    title: "Solar & Battery",
    text:
      "Coordinate solar generation and battery dispatch to improve onsite energy utilisation, reduce peak demand and lower associated carbon impact.",
  },
];


/* =========================================================
   OPTIMISATION SCENARIOS
========================================================= */

const scenarios = [
  {
    icon: Fan,
    title: "Terminal HVAC Optimisation",
    text:
      "Align ventilation, cooling and conditioning with passenger flow, flight schedules, weather and terminal occupancy.",
    outcome: "Lower HVAC energy cost & CO₂ impact",
  },
  {
    icon: Gauge,
    title: "Baggage System Standby Reduction",
    text:
      "Detect conveyors and handling equipment operating outside active baggage-processing windows.",
    outcome: "Reduce idle energy consumption",
  },
  {
    icon: Lightbulb,
    title: "Airside Lighting Intelligence",
    text:
      "Optimise lighting schedules and dimming while maintaining aviation safety and operational requirements.",
    outcome: "Lower lighting energy use & cost",
  },
  {
    icon: BatteryCharging,
    title: "GSE & EV Charging Coordination",
    text:
      "Schedule charging around flight activity, airport demand, tariffs and available renewable generation.",
    outcome: "Reduce peak demand & charging cost",
  },
  {
    icon: Waves,
    title: "Chiller Plant Optimisation",
    text:
      "Improve chiller and pump sequencing using terminal demand, weather and occupancy forecasts.",
    outcome: "Reduce central-plant energy consumption",
  },
  {
    icon: ShieldCheck,
    title: "Critical Power & Resilience",
    text:
      "Monitor backup power, UPS and essential systems for abnormal conditions, readiness and operational risk.",
    outcome: "Protect operational resilience",
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
      "Connect terminal BMS, meters, chillers, baggage systems, lighting, gates, charging, security, refrigeration and DER telemetry.",
  },
  {
    number: "02",
    title: "Detect",
    text:
      "Identify energy waste, abnormal equipment behaviour, avoidable operating loads and peak-demand events.",
  },
  {
    number: "03",
    title: "Analyse",
    text:
      "Use AI Decision Agents and Digital Twin context to determine root causes and quantify potential energy, cost and emissions impact.",
  },
  {
    number: "04",
    title: "Simulate",
    text:
      "Evaluate optimisation actions against passenger comfort, aviation safety, security, flight schedules and operational constraints.",
  },
  {
    number: "05",
    title: "Approve",
    text:
      "Route explainable recommendations through airport engineering and operational human-in-the-loop approval workflows.",
  },
  {
    number: "06",
    title: "Measure",
    text:
      "Compare results against established baselines to validate energy reduction, peak-demand reduction, financial savings, associated CO₂ outcomes and operational performance.",
  },
];


/* =========================================================
   PILOT
========================================================= */

const pilotItems = [
  "Energy baseline for a priority terminal, precinct or operational area",
  "BMS, smart-meter, sub-meter and available telemetry integration",
  "Terminal HVAC, chiller, lighting and baggage-system optimisation analysis",
  "Energy waste and peak-demand opportunity identification",
  "GSE and EV charging coordination scenarios",
  "Backup-power, refrigeration and water-system intelligence",
  "Digital Twin investigation and human-approved recommendations",
  "Energy cost, peak demand, associated CO₂ and ROI measurement",
];


export default function AirportAI({ openPilotModal }) {
  const handlePilotClick = () => {
    if (typeof openPilotModal === "function") {
      openPilotModal();
      return;
    }

    document.getElementById("airport-pilot")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };


  return (
    <main className="airportPage">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="airportHero">
        <motion.div
          className="airportHeroContent"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.div
            className="airportBadge"
            variants={fadeUp}
          >
            <Plane size={17} />
            EnerG IQ Tech Airport AI
          </motion.div>


          <motion.h1 variants={fadeUp}>
            Reduce Airport Energy Costs & CO₂ Emissions While Protecting
            Critical Operations.
          </motion.h1>


          <motion.p
            className="airportLead"
            variants={fadeUp}
          >
            EnerG IQ Tech Airport AI helps airports identify and reduce energy
            waste, peak demand and associated CO₂ emissions across terminals,
            airside systems and connected energy infrastructure - while
            protecting passenger comfort, safety, security and operational
            resilience.
          </motion.p>


          <motion.p
            className="airportDescription"
            variants={fadeUp}
          >
            Edge AI analyses HVAC, chillers, baggage systems, gates, lighting,
            charging infrastructure, refrigeration and other airport assets in
            real time. The platform detects inefficient operation and recommends
            governed optimisation actions through the AI Energy Gateway,
            Digital Twin and human-in-the-loop workflows.
          </motion.p>


          <motion.div
            className="airportHeroButtons"
            variants={fadeUp}
          >
            <button
              type="button"
              className="airportPrimaryBtn"
              onClick={handlePilotClick}
            >
              Request Airport Pilot
              <ChevronRight size={18} />
            </button>

            <a
              href="#airport-workflow"
              className="airportSecondaryBtn"
            >
              View AI Workflow
            </a>
          </motion.div>


          <motion.div
            className="airportHeroTags"
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
              Operational Resilience
            </span>
          </motion.div>
        </motion.div>


        {/* =====================================================
            HERO VISUAL
        ===================================================== */}

        <motion.div
          className="airportHeroVisual"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="airportDashboard">

            <div className="airportDashboardTop">
              <div>
                <strong>Airport Energy Optimisation</strong>
                <span>
                  Energy, demand and operational overview
                </span>
              </div>

              <b>
                <Activity size={14} />
                Live
              </b>
            </div>


            <div className="airportKpis">

              <div>
                <small>Energy Areas</small>
                <strong>3</strong>
                <span>Connected operational zones</span>
              </div>

              <div>
                <small>Asset Classes</small>
                <strong>13</strong>
                <span>Energy-intensive systems</span>
              </div>

              <div>
                <small>Optimisation Opportunities</small>
                <strong>31</strong>
                <span>Energy-saving opportunities</span>
              </div>

              <div>
                <small>Peak Reduction</small>
                <strong>11%</strong>
                <span>Indicative opportunity</span>
              </div>

            </div>


            <div className="airportInsightCard">
              <div className="airportInsightIcon">
                <Brain size={22} />
              </div>

              <div>
                <strong>AI Energy Recommendation</strong>

                <p>
                  Terminal Zone C is maintaining full cooling despite a
                  three-hour reduction in passenger flow. Review an airflow
                  and setpoint adjustment to reduce unnecessary energy
                  consumption while maintaining comfort, safety and security
                  requirements.
                </p>
              </div>
            </div>


            <div className="airportApproval">
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
          PROCESS STRIP
      ========================================================= */}

      <section className="airportStrip">
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
          AIRPORT ENERGY CHALLENGE
      ========================================================= */}

      <section className="airportSection airportChallengeSection">
        <div className="airportSectionHeader">
          <p>Airport Energy Challenge</p>

          <h2>
            Complex Airport Operations Create Significant Energy Cost,
            Demand and Carbon Challenges.
          </h2>

          <span>
            Airports operate continuously across terminals, central plant,
            baggage handling, airside systems, retail, refrigeration and
            charging infrastructure. Variable passenger demand and operational
            schedules can create avoidable energy consumption, costly demand
            peaks and associated CO₂ emissions.
          </span>
        </div>


        <div className="airportChallengeGrid">

          <article>
            <div className="airportIcon">
              <Zap size={24} />
            </div>

            <h3>High Energy Costs & Demand</h3>

            <p>
              HVAC, chillers, baggage operations, lighting and charging can
              create large energy loads and costly demand peaks.
            </p>
          </article>


          <article>
            <div className="airportIcon">
              <Leaf size={24} />
            </div>

            <h3>CO₂ Reduction Requirements</h3>

            <p>
              Reducing unnecessary energy consumption can lower associated
              emissions while supporting airport sustainability and
              decarbonisation objectives.
            </p>
          </article>


          <article>
            <div className="airportIcon">
              <ShieldCheck size={24} />
            </div>

            <h3>Safety & Operational Constraints</h3>

            <p>
              Energy optimisation must preserve passenger comfort, aviation
              safety, security screening, airside operations and essential
              services.
            </p>
          </article>


          <article>
            <div className="airportIcon">
              <Activity size={24} />
            </div>

            <h3>Fragmented Operational Data</h3>

            <p>
              BMS, meters, flight schedules, passenger flow and equipment
              telemetry often remain disconnected, making whole-airport
              optimisation difficult.
            </p>
          </article>

        </div>
      </section>


      {/* =========================================================
          CONNECTED AIRPORT ASSETS
      ========================================================= */}

      <section className="airportSection airportAssetsSection">
        <div className="airportSectionHeader">
          <p>Connected Airport Assets</p>

          <h2>
            Optimise the Systems Driving Airport Energy Costs.
          </h2>

          <span>
            The AI Energy Gateway connects existing airport infrastructure and
            available telemetry so energy behaviour can be analysed across
            terminal, airside and distributed energy systems without requiring
            wholesale infrastructure replacement.
          </span>
        </div>


        <motion.div
          className="airportAssetsGrid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.08,
          }}
        >
          {airportAssets.map((asset) => {
            const Icon = asset.icon;

            return (
              <motion.article
                className="airportAssetCard"
                variants={fadeUp}
                key={asset.title}
              >
                <div className="airportIcon">
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

      <section className="airportSection airportScenarioSection">
        <div className="airportSectionHeader">
          <p>AI Optimisation Scenarios</p>

          <h2>
            Turn Airport Energy Waste Into Measurable Cost & Carbon
            Reduction Opportunities.
          </h2>

          <span>
            EnerG IQ Tech combines Edge AI, Digital Twin context, Decision
            Agents and human-in-the-loop governance to identify practical
            optimisation opportunities while respecting airport operational
            constraints.
          </span>
        </div>


        <div className="airportScenarioGrid">
          {scenarios.map((scenario) => {
            const Icon = scenario.icon;

            return (
              <article
                className="airportScenarioCard"
                key={scenario.title}
              >
                <div className="airportScenarioTop">
                  <div className="airportIcon">
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

                <div className="airportOutcome">
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
        className="airportSection airportWorkflowSection"
        id="airport-workflow"
      >
        <div className="airportSectionHeader airportSectionHeaderLight">
          <p>End-to-End AI Workflow</p>

          <h2>
            From Airport Energy Data to Measurable Savings.
          </h2>

          <span>
            EnerG IQ Tech turns operational telemetry into explainable,
            governed optimisation recommendations and measures the resulting
            energy, financial and associated CO₂ outcomes while keeping
            engineering and airport operations teams in control.
          </span>
        </div>


        <div className="airportWorkflow">
          {workflowSteps.map((step) => (
            <div
              className="airportWorkflowStep"
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

      <section className="airportSection airportPlatformSection">
        <div className="airportPlatformPanel">

          <div className="airportPlatformCopy">
            <p>Shared EnerG IQ Tech Platform</p>

            <h2>
              Airport-Specific Optimisation Built on One Energy Intelligence
              Architecture.
            </h2>

            <span>
              Airport AI uses the shared EnerG IQ Tech architecture to connect
              operational assets, identify energy waste, recommend governed
              optimisation actions and quantify energy, financial and carbon
              outcomes.
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


          <div className="airportPlatformFlow">

            <div className="airportPlatformNode">
              <Plane size={25} />
              <span>Airport Assets</span>
            </div>

            <ChevronRight size={20} />


            <div className="airportPlatformNode featured">
              <Cpu size={25} />
              <span>AI Energy Gateway</span>
            </div>

            <ChevronRight size={20} />


            <div className="airportPlatformNode">
              <Layers3 size={25} />
              <span>Digital Twin</span>
            </div>

            <ChevronRight size={20} />


            <div className="airportPlatformNode">
              <Brain size={25} />
              <span>AI Optimisation</span>
            </div>

            <ChevronRight size={20} />


            <div className="airportPlatformNode">
              <ShieldCheck size={25} />
              <span>Measured Outcomes</span>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================
          PILOT PROGRAM
      ========================================================= */}

      <section
        className="airportSection airportPilotSection"
        id="airport-pilot"
      >
        <div className="airportPilotBox">

          <div className="airportPilotCopy">
            <p>Airport Pilot Program</p>

            <h2>
              Start With One High-Value Airport Energy Problem. Prove the
              Savings Before Scaling.
            </h2>

            <span>
              Establish an energy baseline for one terminal, precinct or
              operational system, identify optimisation opportunities and
              quantify potential energy-cost, peak-demand and associated CO₂
              outcomes before broader airport deployment.
            </span>

            <button
              type="button"
              className="airportPrimaryBtn"
              onClick={handlePilotClick}
            >
              Discuss an Airport Pilot
              <ChevronRight size={18} />
            </button>
          </div>


          <div className="airportPilotList">
            <h3>
              Indicative Pilot Scope
            </h3>

            <ul>
              {pilotItems.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>


      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="airportCta">
        <div>
          <p>Now Onboarding Airport Pilot Partners</p>

          <h2>
            Reduce Airport Energy Costs & CO₂ Emissions Without Compromising
            Safety or Operations.
          </h2>

          <span>
            Start with one measurable airport energy challenge. Establish the
            baseline, identify energy waste and determine whether the potential
            financial and carbon outcomes justify broader deployment.
          </span>
        </div>


        <div className="airportCtaActions">
          <button
            type="button"
            className="airportPrimaryBtn"
            onClick={handlePilotClick}
          >
            Request Airport Pilot
            <ChevronRight size={18} />
          </button>
        </div>
      </section>

    </main>
  );
}