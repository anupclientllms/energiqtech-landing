import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Activity, ArrowRight, Brain, Building2, CheckCircle2, ChevronRight,
  Cpu, Droplets, Fan, Layers3, Lightbulb, Monitor, Printer,
  Refrigerator, ShieldCheck, Utensils, Waves, Zap
} from "lucide-react";
import "../styles/BuildingAI.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const assets = [
  [Fan, "HVAC", "Optimise heating, cooling, ventilation, air handling, zoning and schedules using occupancy, weather and building conditions."],
  [Lightbulb, "Lighting", "Reduce unnecessary lighting through occupancy, daylight, zoning, schedules and after-hours intelligence."],
  [Monitor, "Workstations", "Identify computers and workstation loads operating unnecessarily outside occupied hours."],
  [Printer, "Printers", "Monitor printer fleets, standby demand and after-hours operation across office and shared workspaces."],
  [Utensils, "Kitchen", "Analyse kitchen appliances, hot water, ventilation, refrigeration and operating schedules."],
  [Refrigerator, "Refrigeration", "Track cool rooms, fridges, freezers, compressor cycling, temperature and abnormal energy use."],
  [Building2, "Lifts", "Monitor lift demand, standby loads, operating patterns and abnormal power behaviour."],
  [Droplets, "Pumps", "Identify excessive runtime, pressure loss, inefficient speed control and abnormal pumping conditions."],
  [Waves, "Motors", "Monitor motor loading, runtime, abnormal power draw and equipment-efficiency opportunities."],
];

const scenarios = [
  [Fan, "After-Hours HVAC", "Detect HVAC operating outside occupancy or approved schedules and recommend safe setback actions.", "Reduce unnecessary HVAC runtime"],
  [Zap, "Peak Demand Reduction", "Forecast building demand spikes and coordinate flexible loads and schedules.", "Reduce peak-demand charges"],
  [Lightbulb, "Lighting Optimisation", "Identify lighting operating in unoccupied areas or outside approved schedules.", "Reduce lighting energy use"],
  [Monitor, "Workstation & Plug Load Reduction", "Detect workstations, printers and office equipment operating unnecessarily after hours.", "Reduce office base load"],
  [Refrigerator, "Refrigeration Intelligence", "Detect abnormal cycling, temperature drift and inefficient refrigeration operation.", "Reduce refrigeration energy waste"],
  [Droplets, "Pumps & Motors Optimisation", "Identify excessive runtime, poor control and abnormal power behaviour.", "Improve equipment efficiency"],
];

const workflow = [
  ["01", "Connect", "Connect BMS, meters, HVAC, lighting, plug loads, refrigeration, lifts, pumps and motors."],
  ["02", "Detect", "Identify energy waste, abnormal equipment behaviour, peak-demand events and after-hours loads."],
  ["03", "Analyse", "Use AI Decision Agents and Digital Twin context to investigate causes across buildings, floors and assets."],
  ["04", "Simulate", "Evaluate actions against comfort, occupancy, safety and operational constraints."],
  ["05", "Approve", "Route recommendations through facilities and human-in-the-loop approval workflows."],
  ["06", "Measure", "Validate energy, cost, carbon and operational outcomes before portfolio scale-up."],
];

const pilotItems = [
  "Priority building and energy-system assessment",
  "BMS, smart-meter, sub-meter or available telemetry integration",
  "HVAC, lighting, workstation and after-hours analysis",
  "Peak-demand, refrigeration, pumps and motors scenarios",
  "Digital Twin investigation and AI recommendations",
  "Human-approved optimisation workflow",
  "Energy savings, carbon and ROI measurement",
];

export default function BuildingAI({ openPilotModal }) {
  const handlePilotClick = () => {
    if (typeof openPilotModal === "function") return openPilotModal();
    document.getElementById("building-pilot")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="buildingAIPage">
      <section className="buildingAIHero">
        <motion.div className="buildingAIHeroContent" variants={stagger} initial="hidden" animate="show">
          <motion.div className="buildingAIBadge" variants={fadeUp}>
            <Building2 size={17} /> EnergIQ Commercial Building AI
          </motion.div>

          <motion.h1 variants={fadeUp}>
            Reduce Commercial Building Energy Costs While Protecting Comfort, Operations and Asset Performance.
          </motion.h1>

          <motion.p className="buildingAILead" variants={fadeUp}>
            EnergIQ Building AI connects HVAC, lighting, workstations, printers, kitchens,
            refrigeration, lifts, pumps and motors through the AI Energy Gateway.
          </motion.p>

          <motion.p className="buildingAIDescription" variants={fadeUp}>
            Edge AI analyses operational data in real time, detects energy waste, after-hours
            loads, peak-demand events and equipment inefficiencies, then recommends governed actions.
          </motion.p>

          <motion.div className="buildingAIHeroButtons" variants={fadeUp}>
            <button type="button" className="buildingAIPrimaryBtn" onClick={handlePilotClick}>
              Request Building Pilot <ChevronRight size={18} />
            </button>
            <a href="#building-workflow" className="buildingAISecondaryBtn">View AI Workflow</a>
          </motion.div>

          <motion.div className="buildingAIHeroTags" variants={fadeUp}>
            <span><Fan size={15} /> HVAC</span>
            <span><Lightbulb size={15} /> Lighting</span>
            <span><Monitor size={15} /> Workstations</span>
            <span><Zap size={15} /> Peak Demand</span>
          </motion.div>
        </motion.div>

        <motion.div className="buildingAIHeroVisual" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}>
          <div className="buildingAIDashboard">
            <div className="buildingAIDashboardTop">
              <div><strong>Building AI Portfolio</strong><span>Commercial building operations overview</span></div>
              <b><Activity size={14} /> Live</b>
            </div>

            <div className="buildingAIKpis">
              <div><small>Buildings</small><strong>4</strong><span>Connected facilities</span></div>
              <div><small>Asset Classes</small><strong>9</strong><span>Operational systems</span></div>
              <div><small>Opportunities</small><strong>38</strong><span>Current optimisation items</span></div>
              <div><small>Monthly Potential</small><strong>$2,840</strong><span>Indicative portfolio value</span></div>
            </div>

            <div className="buildingAIInsightCard">
              <div className="buildingAIInsightIcon"><Brain size={22} /></div>
              <div>
                <strong>AI Recommendation</strong>
                <p>Level 2 HVAC and workstations remain active after occupancy has fallen below 8%. Apply an approved HVAC setback and workstation shutdown sequence.</p>
              </div>
            </div>

            <div className="buildingAIApproval">
              <span><ShieldCheck size={18} /> Facilities approval required before execution</span>
              <button type="button">Review Action</button>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="buildingAIStrip">
        <span>Connect</span><ArrowRight size={15} />
        <span>Detect</span><ArrowRight size={15} />
        <span>Analyse</span><ArrowRight size={15} />
        <span>Simulate</span><ArrowRight size={15} />
        <span>Approve</span><ArrowRight size={15} />
        <span>Measure</span>
      </section>

      <section className="buildingAISection buildingAIChallengeSection">
        <div className="buildingAISectionHeader">
          <p>Commercial Building Energy Challenge</p>
          <h2>Buildings Must Reduce Energy Costs While Maintaining Comfort and Operational Reliability.</h2>
          <span>HVAC, lighting, plug loads, refrigeration and central equipment often operate across fragmented systems and fixed schedules.</span>
        </div>

        <div className="buildingAIChallengeGrid">
          {[
            [Fan, "HVAC-Driven Demand", "Heating, cooling and ventilation commonly represent the largest controllable building loads."],
            [Monitor, "After-Hours Consumption", "HVAC, lighting, workstations and printers often continue operating after occupancy falls."],
            [Zap, "Peak Demand Exposure", "Simultaneous HVAC, lighting and equipment loads can create expensive demand peaks."],
            [Waves, "Fragmented Building Data", "BMS, meters, occupancy and equipment data often remain disconnected across portfolios."],
          ].map(([Icon, title, text]) => (
            <article key={title}>
              <div className="buildingAIIcon"><Icon size={24} /></div>
              <h3>{title}</h3><p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="buildingAISection buildingAIAssetsSection">
        <div className="buildingAISectionHeader">
          <p>Connected Building Assets</p>
          <h2>One AI Operating Layer Across Building Systems and Energy Assets.</h2>
          <span>The AI Energy Gateway connects existing BMS, meters and operational telemetry without requiring wholesale replacement.</span>
        </div>

        <motion.div className="buildingAIAssetsGrid" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.08 }}>
          {assets.map(([Icon, title, text]) => (
            <motion.article className="buildingAIAssetCard" variants={fadeUp} key={title}>
              <div className="buildingAIIcon"><Icon size={23} /></div>
              <h3>{title}</h3><p>{text}</p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="buildingAISection buildingAIScenarioSection">
        <div className="buildingAISectionHeader">
          <p>AI Optimisation Scenarios</p>
          <h2>Reduce Waste, Improve Asset Performance and Support Occupant Comfort.</h2>
          <span>Each scenario uses the same AI Energy Gateway, Digital Twin, Decision Agents and human-in-the-loop approval workflow.</span>
        </div>

        <div className="buildingAIScenarioGrid">
          {scenarios.map(([Icon, title, text, outcome]) => (
            <article className="buildingAIScenarioCard" key={title}>
              <div className="buildingAIScenarioTop">
                <div className="buildingAIIcon"><Icon size={23} /></div>
                <span>AI Scenario</span>
              </div>
              <h3>{title}</h3><p>{text}</p>
              <div className="buildingAIOutcome"><CheckCircle2 size={17} />{outcome}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="buildingAISection buildingAIWorkflowSection" id="building-workflow">
        <div className="buildingAISectionHeader buildingAISectionHeaderLight">
          <p>End-to-End AI Workflow</p>
          <h2>From Building Telemetry to Governed Operational Action.</h2>
          <span>EnergIQ converts operational data into explainable recommendations while keeping facilities and building teams in control.</span>
        </div>

        <div className="buildingAIWorkflow">
          {workflow.map(([number, title, text]) => (
            <div className="buildingAIWorkflowStep" key={number}>
              <b>{number}</b>
              <div><h3>{title}</h3><p>{text}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="buildingAISection buildingAIPlatformSection">
        <div className="buildingAIPlatformPanel">
          <div className="buildingAIPlatformCopy">
            <p>Shared EnergIQ Platform</p>
            <h2>Building AI Is an Industry Pack Built on the Shared EnergIQ Architecture.</h2>
            <span>The same AI Energy Gateway, Digital Twin, Decision Agents, human-in-the-loop governance and Savings Intelligence support all EnergIQ industry environments.</span>
            <ul>
              <li><CheckCircle2 size={18} /> Reusable AI Energy Gateway</li>
              <li><CheckCircle2 size={18} /> Shared Digital Twin architecture</li>
              <li><CheckCircle2 size={18} /> Configurable AI Decision Agents</li>
              <li><CheckCircle2 size={18} /> Human-in-the-loop governance</li>
              <li><CheckCircle2 size={18} /> Savings and ROI intelligence</li>
            </ul>
          </div>

          <div className="buildingAIPlatformFlow">
            <div className="buildingAIPlatformNode"><Building2 size={25} /><span>Building Assets</span></div>
            <ChevronRight size={20} />
            <div className="buildingAIPlatformNode featured"><Cpu size={25} /><span>AI Energy Gateway</span></div>
            <ChevronRight size={20} />
            <div className="buildingAIPlatformNode"><Layers3 size={25} /><span>Digital Twin</span></div>
            <ChevronRight size={20} />
            <div className="buildingAIPlatformNode"><Brain size={25} /><span>Decision Agents</span></div>
            <ChevronRight size={20} />
            <div className="buildingAIPlatformNode"><ShieldCheck size={25} /><span>Approved Actions</span></div>
          </div>
        </div>
      </section>

      <section className="buildingAISection buildingAIPilotSection" id="building-pilot">
        <div className="buildingAIPilotBox">
          <div className="buildingAIPilotCopy">
            <p>Building Pilot Program</p>
            <h2>Start With One Building, One High-Value Use Case and Measurable ROI.</h2>
            <span>A staged pilot validates data, comfort safeguards, optimisation scenarios and measurable value before portfolio-wide deployment.</span>
            <button type="button" className="buildingAIPrimaryBtn" onClick={handlePilotClick}>
              Discuss a Building Pilot <ChevronRight size={18} />
            </button>
          </div>

          <div className="buildingAIPilotList">
            <h3>Indicative Pilot Scope</h3>
            <ul>
              {pilotItems.map((item) => (
                <li key={item}><CheckCircle2 size={18} /><span>{item}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="buildingAICta">
        <div>
          <p>Now Onboarding Pilot Partners</p>
          <h2>Reduce Commercial Building Energy Costs While Protecting Comfort and Operational Performance.</h2>
          <span>EnergIQ is seeking commercial building owners, councils, facility managers and technology partners for pilot collaboration.</span>
        </div>

        <div className="buildingAICtaActions">
          <button type="button" className="buildingAIPrimaryBtn" onClick={handlePilotClick}>
            Request Pilot <ChevronRight size={18} />
          </button>
          
        </div>
      </section>
    </main>
  );
}
