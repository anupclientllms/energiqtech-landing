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
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const manufacturingAssets = [
  { icon: Factory, title: "Production Lines", text: "Monitor line-level energy use, runtime, throughput, idle conditions, bottlenecks and avoidable operating loads across production stages." },
  { icon: Settings, title: "CNC Machines", text: "Detect excessive standby consumption, inefficient machining cycles, abnormal spindle loads and avoidable after-hours operation." },
  { icon: Gauge, title: "Air Compressors", text: "Identify leakage, excessive pressure, unloaded runtime, inefficient sequencing and abnormal compressor energy behaviour." },
  { icon: Flame, title: "Boilers & Steam", text: "Analyse boiler loading, steam demand, cycling, temperature, pressure, scheduling and thermal-efficiency opportunities." },
  { icon: Snowflake, title: "Refrigeration Systems", text: "Optimise industrial refrigeration plants, compressors, evaporators, condensers, defrost cycles and temperature-controlled production loads." },
  { icon: PackageCheck, title: "Cold Rooms", text: "Monitor temperature stability, refrigeration demand, door events, product-protection conditions and abnormal cooling behaviour." },
  { icon: Waves, title: "Cooling Towers", text: "Analyse fan operation, condenser-water temperature, approach performance, ambient conditions and heat-rejection efficiency." },
  { icon: CircleGauge, title: "Water & Process Pumps", text: "Detect excessive runtime, throttling losses, inefficient speed control, abnormal flow conditions and emerging pump faults." },
  { icon: Fan, title: "Process Fans", text: "Identify inefficient airflow, unnecessary operation, poor speed control and abnormal fan power across industrial processes." },
  { icon: Power, title: "Motors & Drives", text: "Monitor motor loading, variable-speed-drive performance, abnormal power draw, runtime and equipment degradation." },
  { icon: Truck, title: "Conveyor Systems", text: "Detect idle running, poor production coordination, excessive standby operation and conveyor energy waste." },
  { icon: Cog, title: "Robotics", text: "Track robotic-cell energy use, operating schedules, standby loads, cycle efficiency and abnormal equipment behaviour." },
  { icon: Zap, title: "Factory Lighting", text: "Optimise lighting schedules, occupancy-based control, zoning, daylight response and after-hours energy use." },
  { icon: BatteryCharging, title: "Forklift / EV Charging", text: "Coordinate forklift and EV charging schedules to reduce peak demand, avoid charging conflicts and use lower-cost periods." },
  { icon: Leaf, title: "Solar & Battery", text: "Optimise solar self-consumption, battery dispatch, peak shaving, renewable utilisation and site energy resilience." },
  { icon: Thermometer, title: "Factory HVAC", text: "Improve factory ventilation, heating, cooling, extraction and occupancy or production-driven HVAC operation." },
  { icon: Network, title: "Utilities & Energy Centre", text: "Coordinate electricity, gas, steam, compressed air, chilled water, process cooling and central utility infrastructure." },
];

const optimisationScenarios = [
  { icon: Gauge, title: "Compressed Air Optimisation", text: "Identify leakage, excess pressure, poor compressor sequencing and extended unloaded operation.", outcome: "Reduce compressed-air energy waste" },
  { icon: Flame, title: "Boiler & Steam Efficiency", text: "Detect inefficient boiler operation, excessive cycling, steam losses and poor operating schedules.", outcome: "Improve thermal and fuel efficiency" },
  { icon: Power, title: "Motor & Drive Efficiency", text: "Detect abnormal power behaviour, inefficient loading and degrading equipment performance.", outcome: "Improve equipment efficiency" },
  { icon: TimerReset, title: "Idle & Standby Load Reduction", text: "Identify production equipment, CNC machines, robotics and conveyors running during breaks, changeovers or shutdown periods.", outcome: "Reduce non-production energy use" },
  { icon: Snowflake, title: "Refrigeration & Cold Room Optimisation", text: "Identify poor compressor sequencing, temperature drift, excessive cycling and inefficient defrost or cooling schedules.", outcome: "Reduce refrigeration energy use" },
  { icon: Zap, title: "Peak Demand Management", text: "Forecast production-driven demand spikes and coordinate flexible loads, charging, batteries and operating schedules.", outcome: "Reduce peak-demand charges" },
  { icon: Activity, title: "Equipment Fault Detection", text: "Identify abnormal relationships between power, pressure, temperature, flow, runtime and production output.", outcome: "Reduce unplanned downtime" },
  { icon: Leaf, title: "Solar, Battery & Carbon Optimisation", text: "Coordinate renewable generation, storage and flexible industrial demand while measuring emissions and savings.", outcome: "Improve renewable utilisation" },
];

const workflowSteps = [
  { number: "01", title: "Connect", text: "Connect PLC, SCADA, BMS, meters, production equipment, utilities, refrigeration and IoT telemetry." },
  { number: "02", title: "Detect", text: "Identify energy waste, abnormal process behaviour, peak-demand events and equipment inefficiencies." },
  { number: "03", title: "Analyse", text: "Use AI Decision Agents and the Digital Twin to investigate probable causes and production context." },
  { number: "04", title: "Simulate", text: "Evaluate optimisation actions against energy, production, quality, safety and operational constraints." },
  { number: "05", title: "Approve", text: "Route recommendations through human approval and site-specific operational safeguards." },
  { number: "06", title: "Measure", text: "Validate energy, cost, carbon, reliability and production outcomes after implementation." },
];

const pilotIncludes = [
  "Priority manufacturing site and energy-system assessment",
  "PLC, SCADA, BMS, smart-meter, sub-meter or available telemetry integration",
  "AI baseline and production-energy performance analysis",
  "Compressed air, boiler, motor, refrigeration, idle-load and peak-demand scenarios",
  "Digital Twin investigation and AI recommendations",
  "Human-approved optimisation workflow",
  "Energy savings, operational outcomes and ROI measurement",
];

const benefits = [
  { icon: TrendingDown, value: "10–20%", label: "Potential energy-cost reduction", note: "Subject to site conditions, equipment, tariffs and operating practices." },
  { icon: Zap, value: "Lower", label: "Peak-demand exposure", note: "Through forecasting, sequencing, charging and flexible-load optimisation." },
  { icon: ShieldCheck, value: "Improved", label: "Operational reliability", note: "Through earlier detection of abnormal equipment and process behaviour." },
  { icon: Factory, value: "Protected", label: "Production performance", note: "Recommendations are evaluated against production, safety and quality constraints." },
];

export default function ManufacturingAI({ openPilotModal }) {
  const handlePilotClick = () => {
    if (typeof openPilotModal === "function") {
      openPilotModal();
      return;
    }

    document.getElementById("manufacturing-pilot")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="manufacturingPage">
      <section className="manufacturingHero">
        <div className="manufacturingHeroGlow manufacturingHeroGlowOne" />
        <div className="manufacturingHeroGlow manufacturingHeroGlowTwo" />

        <motion.div className="manufacturingHeroContent" variants={stagger} initial="hidden" animate="show">
          <motion.div className="manufacturingEyebrow" variants={fadeUp}>
            <Factory size={17} />
            EnerG IQ Tech Manufacturing AI
          </motion.div>

          <motion.h1 variants={fadeUp}>
            Reduce Industrial Energy Costs While Protecting Production, Reliability and Quality.
          </motion.h1>

          <motion.p className="manufacturingHeroLead" variants={fadeUp}>
            EnerG IQ Tech Manufacturing AI connects production lines, CNC machines, air compressors, boilers, refrigeration systems, cold rooms, cooling towers, pumps, process fans, motors, conveyors, robotics, factory HVAC, lighting, charging infrastructure, solar and battery systems through the AI Energy Gateway.
          </motion.p>

          <motion.p className="manufacturingHeroDescription" variants={fadeUp}>
            Edge AI analyses operational and energy data in real time, detects idle loads, inefficient equipment operation, refrigeration waste, peak-demand events and emerging faults, then recommends governed optimisation actions that help manufacturers reduce costs, improve reliability and protect production performance.
          </motion.p>

          <motion.div className="manufacturingHeroActions" variants={fadeUp}>
            <button type="button" className="manufacturingPrimaryButton" onClick={handlePilotClick}>
              Request Manufacturing Pilot <ChevronRight size={19} />
            </button>
            <a href="#manufacturing-workflow" className="manufacturingSecondaryButton">View AI Workflow</a>
          </motion.div>

          <motion.div className="manufacturingHeroPills" variants={fadeUp}>
            <span><Gauge size={15} /> Compressed Air</span>
            <span><Flame size={15} /> Boilers & Steam</span>
            <span><Snowflake size={15} /> Refrigeration</span>
            <span><Zap size={15} /> Peak Demand</span>
          </motion.div>
        </motion.div>

        <motion.div className="manufacturingHeroVisual" initial={{ opacity: 0, y: 38, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.16 }}>
          <div className="manufacturingDashboard">
            <div className="manufacturingDashboardTop">
              <div><span>Manufacturing AI Portfolio</span><small>Production and cold-storage operations</small></div>
              <b><Activity size={15} /> Live</b>
            </div>

            <div className="manufacturingKpiGrid">
              <div><small>Manufacturing Sites</small><strong>4</strong><span>Production and cold-storage locations</span></div>
              <div><small>Asset Classes</small><strong>17</strong><span>Operational asset families</span></div>
              <div><small>Opportunities</small><strong>68</strong><span>Current optimisation items</span></div>
              <div><small>Connected Gateways</small><strong>3</strong><span>Operational sites connected</span></div>
            </div>

            <div className="manufacturingChartCard">
              <div className="manufacturingChartHeader">
                <div><strong>Portfolio Energy Demand</strong><span>AI baseline versus actual load</span></div>
                <span className="manufacturingPriorityBadge">High Priority</span>
              </div>
              <div className="manufacturingChart">
                <div className="manufacturingBaseline" />
                <span style={{ height: "40%" }} /><span style={{ height: "47%" }} /><span style={{ height: "55%" }} /><span style={{ height: "66%" }} /><span className="alertBar" style={{ height: "92%" }} /><span className="alertBar" style={{ height: "85%" }} /><span style={{ height: "63%" }} /><span style={{ height: "52%" }} /><span style={{ height: "45%" }} />
              </div>
            </div>

            <div className="manufacturingInsight">
              <div className="manufacturingInsightIcon"><Brain size={22} /></div>
              <div><strong>AI Recommendation</strong><p>Air Compressors 2 and 3 are operating unloaded while Production Line 4 is in changeover. Reduce network pressure by 0.4 bar and stop Compressor 3 for an estimated 94 kW reduction.</p></div>
            </div>

            <div className="manufacturingApproval">
              <div><ShieldCheck size={19} /><span>Human approval required before execution</span></div>
              <button type="button">Review Action</button>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="manufacturingValueStrip">
        <span>Connect</span><ArrowRight size={15} /><span>Detect</span><ArrowRight size={15} /><span>Analyse</span><ArrowRight size={15} /><span>Simulate</span><ArrowRight size={15} /><span>Approve</span><ArrowRight size={15} /><span>Measure</span>
      </section>

      <section className="manufacturingSection manufacturingIntroSection">
        <div className="manufacturingSectionHeader">
          <p>Manufacturing Energy Challenge</p>
          <h2>Industrial Energy Performance Depends on Production, Utilities and Equipment Working Together.</h2>
          <span>Manufacturers must reduce electricity, gas and peak-demand costs without disrupting production, quality, safety or delivery schedules. EnerG IQ Tech provides one AI operating layer across production assets, industrial utilities and connected energy systems.</span>
        </div>

        <div className="manufacturingChallengeGrid">
          {[
            { icon: Zap, title: "High & Variable Demand", text: "Production starts, compressors, boilers, refrigeration and charging can combine to create expensive site peaks." },
            { icon: AlertTriangle, title: "Production & Quality Risk", text: "Energy optimisation must remain within production, product-quality, safety and equipment constraints." },
            { icon: Activity, title: "Complex Equipment Behaviour", text: "Industrial assets interact dynamically with production schedules, process conditions and central utilities." },
            { icon: BarChart3, title: "Fragmented Operational Data", text: "PLC, SCADA, BMS, meters, maintenance records and production systems often remain disconnected." },
          ].map((item) => {
            const Icon = item.icon;
            return <article className="manufacturingChallengeCard" key={item.title}><div className="manufacturingChallengeIcon"><Icon size={25} /></div><h3>{item.title}</h3><p>{item.text}</p></article>;
          })}
        </div>
      </section>

      <section className="manufacturingSection manufacturingAssetsSection">
        <div className="manufacturingSectionHeader">
          <p>Connected Manufacturing Assets</p>
          <h2>One AI Operating Layer Across Production, Refrigeration, Utilities and Connected Energy Systems.</h2>
          <span>The AI Energy Gateway integrates production equipment, CNC machines, compressors, boilers, refrigeration systems, cold rooms, pumps, motors, robotics, HVAC, lighting, EV charging, solar, battery and central utility systems without requiring replacement of existing industrial infrastructure.</span>
        </div>

        <motion.div className="manufacturingAssetsGrid" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.08 }}>
          {manufacturingAssets.map((asset) => {
            const Icon = asset.icon;
            return <motion.article className="manufacturingAssetCard" variants={fadeUp} key={asset.title}><div className="manufacturingAssetIcon"><Icon size={23} /></div><h3>{asset.title}</h3><p>{asset.text}</p></motion.article>;
          })}
        </motion.div>
      </section>

      <section className="manufacturingSection manufacturingScenariosSection">
        <div className="manufacturingSectionHeader">
          <p>AI Optimisation Scenarios</p>
          <h2>Identify Waste, Improve Reliability and Protect Production Performance.</h2>
          <span>Each scenario uses the same EnerG IQ Tech AI Energy Gateway, Digital Twin, Decision Agents and governed approval workflow.</span>
        </div>

        <motion.div className="manufacturingScenarioGrid" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.08 }}>
          {optimisationScenarios.map((scenario) => {
            const Icon = scenario.icon;
            return <motion.article className="manufacturingScenarioCard" variants={fadeUp} key={scenario.title}><div className="manufacturingScenarioTop"><div className="manufacturingScenarioIcon"><Icon size={24} /></div><span>AI Scenario</span></div><h3>{scenario.title}</h3><p>{scenario.text}</p><div className="manufacturingScenarioOutcome"><CheckCircle2 size={17} />{scenario.outcome}</div></motion.article>;
          })}
        </motion.div>
      </section>

      <section className="manufacturingSection manufacturingWorkflowSection" id="manufacturing-workflow">
        <div className="manufacturingSectionHeader manufacturingLightHeader">
          <p>End-to-End AI Workflow</p>
          <h2>From Industrial Telemetry to Governed Operational Action.</h2>
          <span>EnerG IQ Tech transforms operational and energy data into explainable, measurable decisions while keeping production teams in control.</span>
        </div>

        <div className="manufacturingWorkflow">
          {workflowSteps.map((step, index) => <div className="manufacturingWorkflowStep" key={step.number}><div className="manufacturingWorkflowNumber">{step.number}</div><div><h3>{step.title}</h3><p>{step.text}</p></div>{index < workflowSteps.length - 1 && <ChevronRight className="manufacturingWorkflowArrow" size={21} />}</div>)}
        </div>
      </section>

      <section className="manufacturingSection manufacturingPlatformSection">
        <div className="manufacturingPlatformPanel">
          <div className="manufacturingPlatformCopy">
            <p>Shared EnerG IQ Tech Platform</p>
            <h2>Manufacturing AI Is an Industry Pack Built on the Shared EnerG IQ Tech Architecture.</h2>
            <span>The same EnerG IQ Tech architecture supports commercial buildings, cold storage, warehouses, healthcare, universities, hotels, airports, data centres and distributed energy assets.</span>
            <ul><li><CheckCircle2 size={18} /> Reusable AI Energy Gateway</li><li><CheckCircle2 size={18} /> Shared Digital Twin architecture</li><li><CheckCircle2 size={18} /> Configurable AI Decision Agents</li><li><CheckCircle2 size={18} /> Human-in-the-loop governance</li><li><CheckCircle2 size={18} /> Savings and ROI intelligence</li></ul>
          </div>

          <div className="manufacturingPlatformFlow">
            <div className="manufacturingPlatformNode"><Factory size={27} /><span>Industrial Assets</span></div><ChevronRight size={22} /><div className="manufacturingPlatformNode featured"><Cpu size={27} /><span>AI Energy Gateway</span></div><ChevronRight size={22} /><div className="manufacturingPlatformNode"><Layers3 size={27} /><span>Digital Twin</span></div><ChevronRight size={22} /><div className="manufacturingPlatformNode"><Brain size={27} /><span>Decision Agents</span></div><ChevronRight size={22} /><div className="manufacturingPlatformNode"><ShieldCheck size={27} /><span>Approved Actions</span></div>
          </div>
        </div>
      </section>

      <section className="manufacturingSection manufacturingBenefitsSection">
        <div className="manufacturingSectionHeader"><p>Potential Operational Outcomes</p><h2>Convert Industrial Energy Intelligence Into Measurable Business Value.</h2><span>Actual outcomes depend on asset condition, process design, tariffs, production schedules and the optimisation measures approved by the customer.</span></div>
        <div className="manufacturingBenefitsGrid">{benefits.map((benefit) => { const Icon = benefit.icon; return <article className="manufacturingBenefitCard" key={benefit.label}><div className="manufacturingBenefitIcon"><Icon size={24} /></div><strong>{benefit.value}</strong><h3>{benefit.label}</h3><p>{benefit.note}</p></article>; })}</div>
      </section>

      <section className="manufacturingSection manufacturingPilotSection" id="manufacturing-pilot">
        <div className="manufacturingPilotPanel">
          <div className="manufacturingPilotCopy"><p>Manufacturing Pilot Program</p><h2>Start With One Site, One Operational Problem and Measurable ROI.</h2><span>A staged pilot allows the customer and EnerG IQ Tech to validate available data, AI optimisation scenarios, production safeguards and commercial value before portfolio-scale deployment.</span><button type="button" className="manufacturingPrimaryButton" onClick={handlePilotClick}>Discuss a Manufacturing Pilot <ChevronRight size={19} /></button></div>
          <div className="manufacturingPilotChecklist"><h3>Indicative Pilot Scope</h3><ul>{pilotIncludes.map((item) => <li key={item}><CheckCircle2 size={18} /><span>{item}</span></li>)}</ul></div>
        </div>
      </section>

      <section className="manufacturingFinalCta">
        <div><p>Now Onboarding Pilot Partners</p><h2>Reduce Industrial Energy Costs While Protecting Production Reliability.</h2><span>Energ IQ Tech is seeking manufacturers, industrial operators, refrigeration-intensive production sites and technology partners for pilot collaboration.</span></div>
        <div className="manufacturingFinalActions"><button type="button" className="manufacturingPrimaryButton" onClick={handlePilotClick}>Request Pilot <ChevronRight size={19} /></button></div>
      </section>
    </main>
  );
}
