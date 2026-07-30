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
  Lightbulb,
  Plane,
  PlugZap,
  Refrigerator,
  ShieldCheck,
  ShoppingBag,
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
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const airportAssets = [
  {
    icon: Fan,
    title: "Terminal HVAC",
    text: "Optimise terminal heating, cooling, ventilation and zoning using passenger flow, schedules and weather conditions.",
  },
  {
    icon: Plane,
    title: "Gates & Jet Bridges",
    text: "Monitor gate equipment, jet bridges, local HVAC, standby loads and turnaround-related energy use.",
  },
  {
    icon: Gauge,
    title: "Baggage Systems",
    text: "Track conveyor demand, standby operation, equipment runtime and abnormal power behaviour across baggage handling.",
  },
  {
    icon: Lightbulb,
    title: "Airside Lighting",
    text: "Optimise apron, runway, taxiway and operational lighting schedules while maintaining safety requirements.",
  },
  {
    icon: Activity,
    title: "Escalators & Travelators",
    text: "Reduce unnecessary operation using passenger flow, occupancy and time-of-day intelligence.",
  },
  {
    icon: Users,
    title: "Passenger Flow",
    text: "Use passenger movement and occupancy patterns to coordinate terminal HVAC, lighting and operational schedules.",
  },
  {
    icon: Waves,
    title: "Chiller Plant",
    text: "Improve chiller sequencing, chilled-water temperatures, pumping and condenser performance across terminal loads.",
  },
  {
    icon: BatteryCharging,
    title: "GSE & EV Charging",
    text: "Coordinate ground-support equipment and EV charging to reduce peaks and improve renewable utilisation.",
  },
  {
    icon: ShieldCheck,
    title: "Security Screening",
    text: "Monitor screening-area HVAC, lighting, equipment loads and occupancy-driven operating patterns.",
  },
  {
    icon: Refrigerator,
    title: "Retail Refrigeration",
    text: "Track food retail refrigeration, cold rooms, display cases, compressor cycling and temperature performance.",
  },
  {
    icon: Droplets,
    title: "Water & Pumps",
    text: "Identify excessive runtime, pressure loss, irrigation waste and inefficient pumping across airport facilities.",
  },
  {
    icon: PlugZap,
    title: "Backup Power",
    text: "Monitor generators, UPS systems, essential circuits, testing schedules and critical-power readiness.",
  },
  {
    icon: SunMedium,
    title: "Solar & Battery",
    text: "Optimise solar generation, battery dispatch, peak shaving, resilience and airport carbon reduction.",
  },
];

const scenarios = [
  {
    icon: Fan,
    title: "Terminal HVAC Optimisation",
    text: "Align ventilation and conditioning with passenger flow, flight schedules and terminal occupancy.",
    outcome: "Reduce terminal HVAC waste",
  },
  {
    icon: Gauge,
    title: "Baggage System Standby Reduction",
    text: "Detect conveyors and handling equipment operating outside active baggage-processing windows.",
    outcome: "Reduce idle equipment loads",
  },
  {
    icon: Lightbulb,
    title: "Airside Lighting Intelligence",
    text: "Optimise lighting schedules and dimming while maintaining aviation safety and operational requirements.",
    outcome: "Reduce lighting energy use",
  },
  {
    icon: BatteryCharging,
    title: "GSE & EV Charging Coordination",
    text: "Schedule charging around flight activity, airport demand, tariffs and available renewable generation.",
    outcome: "Reduce charging-driven peaks",
  },
  {
    icon: Waves,
    title: "Chiller Plant Optimisation",
    text: "Improve chiller and pump sequencing using terminal demand, weather and occupancy forecasts.",
    outcome: "Improve central plant efficiency",
  },
  {
    icon: ShieldCheck,
    title: "Critical Power & Resilience",
    text: "Monitor backup power, UPS and essential systems for abnormal conditions, readiness and operational risk.",
    outcome: "Strengthen operational resilience",
  },
];

const workflowSteps = [
  {
    number: "01",
    title: "Connect",
    text: "Connect terminal BMS, meters, chillers, baggage systems, lighting, gates, charging, security and DER telemetry.",
  },
  {
    number: "02",
    title: "Detect",
    text: "Identify energy waste, abnormal equipment behaviour, peak-demand events and idle operating loads.",
  },
  {
    number: "03",
    title: "Analyse",
    text: "Use AI Decision Agents and Digital Twin context to investigate causes across terminal and airside systems.",
  },
  {
    number: "04",
    title: "Simulate",
    text: "Evaluate actions against passenger comfort, security, safety, flight schedules and operational constraints.",
  },
  {
    number: "05",
    title: "Approve",
    text: "Route recommendations through airport engineering and operational approval workflows.",
  },
  {
    number: "06",
    title: "Measure",
    text: "Validate energy, cost, carbon, resilience and operational outcomes before scaling across the airport portfolio.",
  },
];

const pilotItems = [
  "Priority terminal, precinct or operational-area assessment",
  "BMS, smart-meter, sub-meter or available telemetry integration",
  "Terminal HVAC, chiller, lighting and baggage-system analysis",
  "GSE and EV charging coordination scenarios",
  "Backup-power, refrigeration and water-system intelligence",
  "Digital Twin investigation and human-approved recommendations",
  "Energy savings, carbon and ROI measurement",
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
      <section className="airportHero">
        <motion.div
          className="airportHeroContent"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.div className="airportBadge" variants={fadeUp}>
            <Plane size={17} />
            EnerG IQ Tech Airport AI
          </motion.div>

          <motion.h1 variants={fadeUp}>
            Reduce Airport Energy Costs Across Terminals, Airside Systems and
            Connected Energy Infrastructure.
          </motion.h1>

          <motion.p className="airportLead" variants={fadeUp}>
            EnerG IQ Tech Airport AI connects terminal HVAC, gates and jet bridges,
            baggage systems, airside lighting, passenger flow, chiller plants,
            GSE and EV charging, security screening, retail refrigeration,
            water systems, backup power, solar and battery assets through the AI
            Energy Gateway.
          </motion.p>

          <motion.p className="airportDescription" variants={fadeUp}>
            Edge AI analyses airport operational data in real time, detects
            energy waste, idle equipment, equipment inefficiencies and
            peak-demand events, then recommends governed optimisation actions.
          </motion.p>

          <motion.div className="airportHeroButtons" variants={fadeUp}>
            <button
              type="button"
              className="airportPrimaryBtn"
              onClick={handlePilotClick}
            >
              Request Airport Pilot
              <ChevronRight size={18} />
            </button>

            <a href="#airport-workflow" className="airportSecondaryBtn">
              View AI Workflow
            </a>
          </motion.div>

          <motion.div className="airportHeroTags" variants={fadeUp}>
            <span><Fan size={15} /> Terminal HVAC</span>
            <span><Gauge size={15} /> Baggage Systems</span>
            <span><BatteryCharging size={15} /> GSE & EV Charging</span>
            <span><SunMedium size={15} /> Solar & Battery</span>
          </motion.div>
        </motion.div>

        <motion.div
          className="airportHeroVisual"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="airportDashboard">
            <div className="airportDashboardTop">
              <div>
                <strong>Airport AI Portfolio</strong>
                <span>Terminal and airside operations overview</span>
              </div>

              <b><Activity size={14} /> Live</b>
            </div>

            <div className="airportKpis">
              <div>
                <small>Airport Areas</small>
                <strong>3</strong>
                <span>Connected operational zones</span>
              </div>

              <div>
                <small>Asset Classes</small>
                <strong>13</strong>
                <span>Operational systems</span>
              </div>

              <div>
                <small>Opportunities</small>
                <strong>31</strong>
                <span>Current optimisation items</span>
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
                <strong>AI Recommendation</strong>
                <p>
                  Terminal Zone C is maintaining full cooling despite a
                  three-hour reduction in passenger flow. Apply an approved
                  airflow and setpoint adjustment while maintaining comfort and
                  security requirements.
                </p>
              </div>
            </div>

            <div className="airportApproval">
              <span>
                <ShieldCheck size={18} />
                Engineering approval required before execution
              </span>

              <button type="button">Review Action</button>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="airportStrip">
        <span>Connect</span>
        <ArrowRight size={15} />
        <span>Detect</span>
        <ArrowRight size={15} />
        <span>Analyse</span>
        <ArrowRight size={15} />
        <span>Simulate</span>
        <ArrowRight size={15} />
        <span>Approve</span>
        <ArrowRight size={15} />
        <span>Measure</span>
      </section>

      <section className="airportSection airportChallengeSection">
        <div className="airportSectionHeader">
          <p>Airport Energy Challenge</p>
          <h2>
            Airports Combine 24/7 Operations, Passenger Comfort, Safety and
            Critical Infrastructure.
          </h2>
          <span>
            Terminals, baggage systems, airside equipment, retail,
            refrigeration, charging and central plant create complex and highly
            variable demand.
          </span>
        </div>

        <div className="airportChallengeGrid">
          <article>
            <div className="airportIcon"><Zap size={24} /></div>
            <h3>High & Variable Demand</h3>
            <p>
              Flight schedules, passenger peaks, baggage operations and
              charging create rapidly changing energy profiles.
            </p>
          </article>

          <article>
            <div className="airportIcon"><ShieldCheck size={24} /></div>
            <h3>Safety & Security Constraints</h3>
            <p>
              Optimisation must preserve passenger safety, security screening,
              airside operations and essential services.
            </p>
          </article>

          <article>
            <div className="airportIcon"><Activity size={24} /></div>
            <h3>Operational Complexity</h3>
            <p>
              Terminal, gate, baggage, airside and retail systems operate on
              different schedules and control platforms.
            </p>
          </article>

          <article>
            <div className="airportIcon"><Gauge size={24} /></div>
            <h3>Fragmented Infrastructure Data</h3>
            <p>
              BMS, meters, flight schedules, passenger flow and equipment data
              often remain disconnected.
            </p>
          </article>
        </div>
      </section>

      <section className="airportSection airportAssetsSection">
        <div className="airportSectionHeader">
          <p>Connected Airport Assets</p>
          <h2>
            One AI Operating Layer Across Terminal, Airside and Connected
            Energy Systems.
          </h2>
          <span>
            The AI Energy Gateway connects existing airport infrastructure and
            available telemetry without requiring wholesale replacement.
          </span>
        </div>

        <motion.div
          className="airportAssetsGrid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.08 }}
        >
          {airportAssets.map((asset) => {
            const Icon = asset.icon;

            return (
              <motion.article
                className="airportAssetCard"
                variants={fadeUp}
                key={asset.title}
              >
                <div className="airportIcon"><Icon size={23} /></div>
                <h3>{asset.title}</h3>
                <p>{asset.text}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </section>

      <section className="airportSection airportScenarioSection">
        <div className="airportSectionHeader">
          <p>AI Optimisation Scenarios</p>
          <h2>
            Reduce Waste, Improve Asset Performance and Protect Airport
            Operations.
          </h2>
          <span>
            Each scenario uses the same AI Energy Gateway, Digital Twin,
            Decision Agents and human-in-the-loop approval workflow.
          </span>
        </div>

        <div className="airportScenarioGrid">
          {scenarios.map((scenario) => {
            const Icon = scenario.icon;

            return (
              <article className="airportScenarioCard" key={scenario.title}>
                <div className="airportScenarioTop">
                  <div className="airportIcon"><Icon size={23} /></div>
                  <span>AI Scenario</span>
                </div>

                <h3>{scenario.title}</h3>
                <p>{scenario.text}</p>

                <div className="airportOutcome">
                  <CheckCircle2 size={17} />
                  {scenario.outcome}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section
        className="airportSection airportWorkflowSection"
        id="airport-workflow"
      >
        <div className="airportSectionHeader airportSectionHeaderLight">
          <p>End-to-End AI Workflow</p>
          <h2>
            From Airport Telemetry to Governed Operational Action.
          </h2>
          <span>
            EnerG IQ Tech converts operational data into explainable recommendations
            while keeping engineering and airport operations teams in control.
          </span>
        </div>

        <div className="airportWorkflow">
          {workflowSteps.map((step) => (
            <div className="airportWorkflowStep" key={step.number}>
              <b>{step.number}</b>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="airportSection airportPlatformSection">
        <div className="airportPlatformPanel">
          <div className="airportPlatformCopy">
            <p>Shared EnerG IQ Tech Platform</p>

            <h2>
              Airport AI Is an Industry Pack Built on the Shared EnerG IQ Tech
              Architecture.
            </h2>

            <span>
              The same AI Energy Gateway, Digital Twin, Decision Agents,
              human-in-the-loop governance and Savings Intelligence support all
              EnerG IQ Tech industry environments.
            </span>

            <ul>
              <li><CheckCircle2 size={18} /> Reusable AI Energy Gateway</li>
              <li><CheckCircle2 size={18} /> Shared Digital Twin architecture</li>
              <li><CheckCircle2 size={18} /> Configurable AI Decision Agents</li>
              <li><CheckCircle2 size={18} /> Human-in-the-loop governance</li>
              <li><CheckCircle2 size={18} /> Savings and ROI intelligence</li>
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
              <span>Decision Agents</span>
            </div>

            <ChevronRight size={20} />

            <div className="airportPlatformNode">
              <ShieldCheck size={25} />
              <span>Approved Actions</span>
            </div>
          </div>
        </div>
      </section>

      <section className="airportSection airportPilotSection" id="airport-pilot">
        <div className="airportPilotBox">
          <div className="airportPilotCopy">
            <p>Airport Pilot Program</p>
            <h2>
              Start With One Terminal, Precinct or High-Value Energy Problem.
            </h2>
            <span>
              A staged pilot validates data, operational safeguards,
              optimisation scenarios and measurable value before
              airport-wide deployment.
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
            <h3>Indicative Pilot Scope</h3>

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

      <section className="airportCta">
        <div>
          <p>Now Onboarding Pilot Partners</p>
          <h2>
            Reduce Airport Energy Costs While Protecting Safety, Passenger
            Experience and Operational Resilience.
          </h2>
          <span>
            EnerG IQ Tech is seeking airports, terminal operators, facility teams and
            technology partners for pilot collaboration.
          </span>
        </div>

        <div className="airportCtaActions">
          <button
            type="button"
            className="airportPrimaryBtn"
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
