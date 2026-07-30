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

const healthcareAssets = [
  {
    icon: Stethoscope,
    title: "Operating Theatres",
    text: "Monitor HVAC, pressure, temperature, ventilation, lighting and critical theatre energy loads.",
  },
  {
    icon: HeartPulse,
    title: "ICU & Critical Care",
    text: "Track critical environmental conditions, essential power, equipment demand and operational resilience.",
  },
  {
    icon: Hospital,
    title: "Hospital HVAC",
    text: "Optimise air handling, ventilation, zoning, schedules and comfort across clinical and non-clinical areas.",
  },
  {
    icon: Waves,
    title: "Chiller Plant",
    text: "Analyse chilled-water demand, sequencing, efficiency, condenser performance and plant operating conditions.",
  },
  {
    icon: Image,
    title: "MRI / CT Imaging",
    text: "Monitor imaging-suite loads, cooling demand, standby consumption and critical operating conditions.",
  },
  {
    icon: Refrigerator,
    title: "Medical Refrigeration",
    text: "Track temperature, compressor performance, energy use and compliance risk across clinical refrigeration assets.",
  },
  {
    icon: Sparkles,
    title: "CSSD & Sterilisation",
    text: "Analyse steam, hot water, electrical loads, cycle timing and equipment performance in sterilisation services.",
  },
  {
    icon: FlaskConical,
    title: "Laboratories",
    text: "Monitor ventilation, fume extraction, refrigeration, equipment schedules and laboratory energy intensity.",
  },
  {
    icon: Lightbulb,
    title: "Lighting & Wards",
    text: "Optimise ward lighting, occupancy-driven schedules, common areas and after-hours consumption.",
  },
  {
    icon: Activity,
    title: "Lifts & Vertical Transport",
    text: "Track lift demand, standby loads, operating patterns and abnormal power behaviour across hospital buildings.",
  },
  {
    icon: Droplets,
    title: "Water & Pumps",
    text: "Identify excessive runtime, pressure loss, inefficient pumping and abnormal water-system behaviour.",
  },
  {
    icon: Thermometer,
    title: "Hot Water & Steam",
    text: "Optimise hot-water generation, steam demand, schedules, storage and thermal distribution losses.",
  },
  {
    icon: Network,
    title: "Medical Gas Systems",
    text: "Monitor compressed-air, vacuum and medical-gas infrastructure while preserving clinical safeguards.",
  },
  {
    icon: Power,
    title: "UPS & Critical Power",
    text: "Track essential power systems, UPS loading, battery health and critical electrical resilience.",
  },
  {
    icon: UtilityPole,
    title: "Backup Generators",
    text: "Monitor readiness, test cycles, fuel use, runtime and integration with critical-power systems.",
  },
  {
    icon: Leaf,
    title: "Solar & Battery",
    text: "Optimise renewable generation, battery dispatch, resilience, peak shaving and carbon reduction.",
  },
  {
    icon: BatteryCharging,
    title: "Kitchen & Laundry",
    text: "Analyse thermal loads, hot water, steam, refrigeration, equipment schedules and after-hours operation.",
  },
  {
    icon: Gauge,
    title: "Hospital Energy Centre",
    text: "Coordinate chillers, boilers, steam, hot water, electricity and central energy infrastructure.",
  },
];

const scenarios = [
  {
    icon: Hospital,
    title: "HVAC & Ventilation Optimisation",
    text: "Detect excessive air changes, poor scheduling, simultaneous heating and cooling, and inefficient zoning.",
    outcome: "Reduce HVAC energy waste",
  },
  {
    icon: Waves,
    title: "Chiller Plant Optimisation",
    text: "Improve chiller sequencing, chilled-water temperatures, condenser performance and part-load efficiency.",
    outcome: "Improve central plant efficiency",
  },
  {
    icon: Refrigerator,
    title: "Medical Refrigeration Risk",
    text: "Detect temperature drift, excessive cycling and abnormal power behaviour before compliance is affected.",
    outcome: "Protect clinical refrigeration",
  },
  {
    icon: Power,
    title: "Critical Power Intelligence",
    text: "Monitor UPS loading, battery condition, generators and essential circuits for resilience and efficiency.",
    outcome: "Strengthen operational resilience",
  },
  {
    icon: Thermometer,
    title: "Steam & Hot Water Optimisation",
    text: "Identify thermal losses, poor schedules, excessive storage temperatures and avoidable boiler operation.",
    outcome: "Reduce thermal energy costs",
  },
  {
    icon: Zap,
    title: "Peak Demand Reduction",
    text: "Forecast demand peaks and coordinate flexible loads, batteries, chillers and non-critical schedules.",
    outcome: "Reduce demand charges",
  },
];

const workflowSteps = [
  {
    number: "01",
    title: "Connect",
    text: "Connect BMS, meters, chillers, boilers, HVAC, critical power, refrigeration and IoT telemetry.",
  },
  {
    number: "02",
    title: "Detect",
    text: "Identify energy waste, abnormal equipment behaviour, resilience risks and operating inefficiencies.",
  },
  {
    number: "03",
    title: "Analyse",
    text: "Use AI Decision Agents and Digital Twin context to investigate causes and clinical constraints.",
  },
  {
    number: "04",
    title: "Simulate",
    text: "Evaluate optimisation actions against comfort, compliance, safety and critical-service requirements.",
  },
  {
    number: "05",
    title: "Approve",
    text: "Route recommendations through human approval and hospital-specific operational safeguards.",
  },
  {
    number: "06",
    title: "Measure",
    text: "Validate energy, cost, carbon, resilience and operational outcomes after implementation.",
  },
];

const pilotItems = [
  "Priority hospital site and energy-system assessment",
  "BMS, smart-meter, sub-meter or available telemetry integration",
  "HVAC, chiller, refrigeration, steam, hot-water and critical-power analysis",
  "Digital Twin investigation and AI recommendations",
  "Human-approved optimisation workflow",
  "Energy savings, carbon and resilience measurement",
  "Pilot report with scale-up roadmap and ROI",
];

export default function HealthcareAI({ openPilotModal }) {
  const handlePilotClick = () => {
    if (typeof openPilotModal === "function") {
      openPilotModal();
      return;
    }

    document.getElementById("healthcare-pilot")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="healthcarePage">
      <section className="healthcareHero">
        <div className="healthcareHeroContent">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            <motion.div className="healthcareBadge" variants={fadeUp}>
              <Hospital size={17} />
              EnerG IQ Tech Healthcare AI
            </motion.div>

            <motion.h1 variants={fadeUp}>
              Reduce Hospital Energy Costs Without Compromising Patient Care,
              Safety or Resilience.
            </motion.h1>

            <motion.p className="healthcareLead" variants={fadeUp}>
              EnerG IQ Tech Healthcare AI connects hospital HVAC, chiller plants,
              operating theatres, ICU, imaging, medical refrigeration,
              sterilisation, laboratories, critical power, water, steam, hot
              water, solar and battery systems through the AI Energy Gateway.
            </motion.p>

            <motion.p className="healthcareDescription" variants={fadeUp}>
              Edge AI analyses operational data in real time, detects energy
              waste, equipment inefficiencies and resilience risks, then
              recommends governed optimisation actions that preserve clinical
              requirements and keep hospital teams in control.
            </motion.p>

            <motion.div className="healthcareHeroButtons" variants={fadeUp}>
              <button
                type="button"
                className="healthcarePrimaryBtn"
                onClick={handlePilotClick}
              >
                Request Healthcare Pilot
                <ChevronRight size={18} />
              </button>

              <a href="#healthcare-workflow" className="healthcareSecondaryBtn">
                View AI Workflow
              </a>
            </motion.div>

            <motion.div className="healthcareHeroTags" variants={fadeUp}>
              <span><Hospital size={15} /> HVAC & Ventilation</span>
              <span><Waves size={15} /> Chiller Plant</span>
              <span><Power size={15} /> Critical Power</span>
              <span><Refrigerator size={15} /> Medical Refrigeration</span>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="healthcareHeroVisual"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="healthcareDashboard">
            <div className="healthcareDashboardTop">
              <div>
                <strong>Healthcare AI Portfolio</strong>
                <span>Hospital operations overview</span>
              </div>

              <b><Activity size={14} /> Live</b>
            </div>

            <div className="healthcareKpis">
              <div>
                <small>Healthcare Sites</small>
                <strong>4</strong>
                <span>Connected hospitals</span>
              </div>

              <div>
                <small>Asset Classes</small>
                <strong>18</strong>
                <span>Operational systems</span>
              </div>

              <div>
                <small>Opportunities</small>
                <strong>54</strong>
                <span>Current items</span>
              </div>

              <div>
                <small>Critical Systems</small>
                <strong>Protected</strong>
                <span>Human approval enabled</span>
              </div>
            </div>

            <div className="healthcareInsightCard">
              <div className="healthcareInsightIcon">
                <Brain size={22} />
              </div>

              <div>
                <strong>AI Recommendation</strong>
                <p>
                  Hospital HVAC is maintaining full ventilation in an
                  unoccupied outpatient zone after 9:00 PM. Apply approved
                  setback schedules while preserving pressure and air-quality
                  requirements.
                </p>
              </div>
            </div>

            <div className="healthcareApproval">
              <span>
                <ShieldCheck size={18} />
                Clinical and facilities approval required
              </span>

              <button type="button">Review Action</button>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="healthcareStrip">
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

      <section className="healthcareSection healthcareChallengeSection">
        <div className="healthcareSectionHeader">
          <p>Healthcare Energy Challenge</p>
          <h2>
            Hospitals Must Reduce Energy Costs While Maintaining Clinical
            Safety and 24/7 Reliability.
          </h2>
          <span>
            Healthcare facilities combine critical power, strict environmental
            requirements, intensive HVAC, medical equipment and continuous
            operations. EnerG IQ Tech provides one governed AI layer across these
            systems.
          </span>
        </div>

        <div className="healthcareChallengeGrid">
          <article>
            <div className="healthcareIcon"><Zap size={24} /></div>
            <h3>High Energy Intensity</h3>
            <p>
              HVAC, chillers, imaging, sterilisation, hot water and critical
              services create continuous energy demand.
            </p>
          </article>

          <article>
            <div className="healthcareIcon"><ShieldCheck size={24} /></div>
            <h3>Clinical Safety Constraints</h3>
            <p>
              Optimisation must protect air quality, pressure relationships,
              temperature, infection control and patient care.
            </p>
          </article>

          <article>
            <div className="healthcareIcon"><Power size={24} /></div>
            <h3>Critical Infrastructure</h3>
            <p>
              UPS, generators, essential circuits and medical systems require
              high resilience and governed operational decisions.
            </p>
          </article>

          <article>
            <div className="healthcareIcon"><Network size={24} /></div>
            <h3>Fragmented Data</h3>
            <p>
              BMS, meters, clinical infrastructure, plant systems and
              maintenance data often remain disconnected.
            </p>
          </article>
        </div>
      </section>

      <section className="healthcareSection healthcareAssetsSection">
        <div className="healthcareSectionHeader">
          <p>Connected Healthcare Assets</p>
          <h2>
            One AI Operating Layer Across Clinical, Building and Energy
            Infrastructure.
          </h2>
          <span>
            The AI Energy Gateway connects existing healthcare systems and
            available telemetry without requiring wholesale replacement of
            hospital infrastructure.
          </span>
        </div>

        <motion.div
          className="healthcareAssetsGrid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.08 }}
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
                <h3>{asset.title}</h3>
                <p>{asset.text}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </section>

      <section className="healthcareSection healthcareScenarioSection">
        <div className="healthcareSectionHeader">
          <p>AI Optimisation Scenarios</p>
          <h2>
            Reduce Waste, Improve Resilience and Protect Clinical Operations.
          </h2>
          <span>
            Each scenario uses the same EnerG IQ Tech AI Energy Gateway, Digital Twin,
            Decision Agents and human-in-the-loop approval workflow.
          </span>
        </div>

        <div className="healthcareScenarioGrid">
          {scenarios.map((scenario) => {
            const Icon = scenario.icon;

            return (
              <article className="healthcareScenarioCard" key={scenario.title}>
                <div className="healthcareScenarioTop">
                  <div className="healthcareIcon">
                    <Icon size={23} />
                  </div>
                  <span>AI Scenario</span>
                </div>

                <h3>{scenario.title}</h3>
                <p>{scenario.text}</p>

                <div className="healthcareOutcome">
                  <CheckCircle2 size={17} />
                  {scenario.outcome}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section
        className="healthcareSection healthcareWorkflowSection"
        id="healthcare-workflow"
      >
        <div className="healthcareSectionHeader healthcareSectionHeaderLight">
          <p>End-to-End AI Workflow</p>
          <h2>
            From Hospital Telemetry to Governed Operational Action.
          </h2>
          <span>
            EnerG IQ Tech converts operational data into explainable recommendations
            while preserving clinical controls and human oversight.
          </span>
        </div>

        <div className="healthcareWorkflow">
          {workflowSteps.map((step) => (
            <div className="healthcareWorkflowStep" key={step.number}>
              <b>{step.number}</b>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

        <section className="healthcareSection healthcarePlatformSection">
            <div className="healthcarePlatformPanel">
                <div className="healthcarePlatformCopy">
                <p>Shared EnerG IQ Tech Platform</p>

                <h2>
                    Healthcare AI Is an Industry Pack Built on the Shared EnerG IQ Tech
                    Architecture.
                </h2>

                <span>
                    The same EnerG IQ Tech architecture supports commercial buildings, cold
                    storage, manufacturing, warehouses, universities, hotels, shopping
                    centres, airports, data centres, local government and Distributed
                    Energy Resources.
                </span>

                <ul>
                    <li>
                    <CheckCircle2 size={18} />
                    Reusable AI Energy Gateway
                    </li>

                    <li>
                    <CheckCircle2 size={18} />
                    Shared Digital Twin architecture
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
                    Savings and ROI intelligence
                    </li>
                </ul>
                </div>

                <div className="healthcarePlatformFlow">
                <div className="healthcarePlatformNode">
                    <Hospital size={27} />
                    <span>Healthcare Assets</span>
                </div>

                <ChevronRight size={22} />

                <div className="healthcarePlatformNode featured">
                    <Cpu size={27} />
                    <span>AI Energy Gateway</span>
                </div>

                <ChevronRight size={22} />

                <div className="healthcarePlatformNode">
                    <Layers3 size={27} />
                    <span>Digital Twin</span>
                </div>

                <ChevronRight size={22} />

                <div className="healthcarePlatformNode">
                    <Brain size={27} />
                    <span>Decision Agents</span>
                </div>

                <ChevronRight size={22} />

                <div className="healthcarePlatformNode">
                    <ShieldCheck size={27} />
                    <span>Approved Actions</span>
                </div>
                </div>
            </div>
        </section>

      <section
        className="healthcareSection healthcarePilotSection"
        id="healthcare-pilot"
      >
        <div className="healthcarePilotBox">
          <div className="healthcarePilotCopy">
            <p>Healthcare Pilot Program</p>
            <h2>
              Start With One Hospital, One Operational Problem and Measurable
              ROI.
            </h2>
            <span>
              A staged pilot validates available data, clinical safeguards,
              optimisation scenarios and measurable business value before
              portfolio-scale deployment.
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

      <section className="healthcareCta">
        <div>
          <p>Now Onboarding Pilot Partners</p>
          <h2>
            Reduce Hospital Energy Costs While Protecting Patient Care and
            Operational Resilience.
          </h2>
          <span>
            EnerG IQ Tech is seeking hospitals, healthcare networks, facility
            operators and technology partners for pilot collaboration.
          </span>
        </div>

        <div className="healthcareCtaActions">
          <button
            type="button"
            className="healthcarePrimaryBtn"
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
