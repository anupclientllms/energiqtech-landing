import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Activity, ArrowRight, BatteryCharging, Brain, CheckCircle2, ChevronRight,
  Cpu, Database, Droplets, Gauge, Layers3, Network, PlugZap, Server,
  ShieldCheck, Snowflake, SunMedium, Thermometer, UtilityPole, Waves, Zap
} from "lucide-react";
import "../styles/DataCentreAI.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const dataCentreAssets = [
  [Snowflake, "Cooling Systems", "Optimise cooling demand, airflow, setpoints, sequencing and thermal performance across white-space environments."],
  [Server, "CRAC / CRAH Units", "Monitor unit loading, fan speeds, supply and return temperatures, runtime and equipment efficiency."],
  [Waves, "Chiller Plant", "Improve chiller sequencing, chilled-water temperatures, condenser performance and central-plant efficiency."],
  [Database, "Server Racks", "Track rack-level power, thermal conditions, utilisation and abnormal energy behaviour across IT loads."],
  [PlugZap, "UPS Systems", "Monitor UPS loading, conversion losses, battery condition, efficiency and critical-power performance."],
  [Network, "Power Distribution", "Analyse switchboards, PDUs, distribution paths, losses, loading and electrical capacity constraints."],
  [BatteryCharging, "Battery Systems", "Track battery state, health, charge cycles, reserve capacity and integration with UPS and grid services."],
  [UtilityPole, "Backup Generators", "Monitor readiness, test cycles, runtime, fuel use and integration with critical-power infrastructure."],
  [Thermometer, "Thermal Zones", "Detect hot spots, overcooling, recirculation and abnormal temperature patterns across data halls."],
  [Droplets, "Cooling Water & Pumps", "Identify inefficient pumping, excessive flow, pressure loss and cooling-water performance issues."],
  [SunMedium, "Solar & Grid Supply", "Coordinate renewable generation, grid supply, demand response and resilient power procurement."],
  [Gauge, "PUE Intelligence", "Measure and improve Power Usage Effectiveness across cooling, power and IT infrastructure."],
  [Brain, "Workload & Capacity", "Correlate compute demand, rack utilisation, power capacity and thermal constraints for smarter operations."],
];

const scenarios = [
  [Snowflake, "Cooling Optimisation", "Identify overcooling, poor setpoints, inefficient sequencing and avoidable cooling demand.", "Reduce cooling energy use"],
  [Server, "CRAC / CRAH Efficiency", "Detect inefficient fan speeds, poor loading, airflow imbalance and abnormal runtime.", "Improve cooling-unit efficiency"],
  [Thermometer, "Hot Spot & Thermal Risk", "Detect thermal anomalies, recirculation and rack-level hot spots before they affect reliability.", "Reduce thermal risk"],
  [PlugZap, "UPS & Power Loss Intelligence", "Identify conversion losses, low-load inefficiency and abnormal UPS or distribution behaviour.", "Improve critical-power efficiency"],
  [Gauge, "PUE Optimisation", "Track non-IT energy overhead and prioritise the highest-value efficiency opportunities.", "Improve Power Usage Effectiveness"],
  [Brain, "Workload & Capacity Coordination", "Align compute demand, rack capacity, cooling and power availability to improve utilisation.", "Increase infrastructure efficiency"],
];

const workflowSteps = [
  ["01", "Connect", "Connect DCIM, BMS, meters, cooling, UPS, rack, thermal, generator and grid telemetry."],
  ["02", "Detect", "Identify energy waste, abnormal equipment behaviour, thermal risk and capacity constraints."],
  ["03", "Analyse", "Use AI Decision Agents and Digital Twin context to investigate causes across IT, cooling and power systems."],
  ["04", "Simulate", "Evaluate actions against uptime, redundancy, thermal, capacity and resilience constraints."],
  ["05", "Approve", "Route recommendations through engineering, operations and change-control workflows."],
  ["06", "Measure", "Validate energy, PUE, carbon, resilience and operational outcomes before scaling."],
];

const pilotItems = [
  "Priority data centre site and infrastructure assessment",
  "DCIM, BMS, smart-meter or available telemetry integration",
  "Cooling, CRAC/CRAH, chiller and thermal-zone analysis",
  "UPS, power distribution and generator intelligence",
  "PUE, workload and capacity optimisation scenarios",
  "Digital Twin investigation and human-approved recommendations",
  "Energy savings, carbon and ROI measurement",
];

export default function DataCentreAI({ openPilotModal }) {
  const handlePilotClick = () => {
    if (typeof openPilotModal === "function") return openPilotModal();
    document.getElementById("data-centre-pilot")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="dataCentrePage">
      <section className="dataCentreHero">
        <motion.div className="dataCentreHeroContent" variants={stagger} initial="hidden" animate="show">
          <motion.div className="dataCentreBadge" variants={fadeUp}>
            <Database size={17} /> EnerG IQ Tech Data Centre AI
          </motion.div>

          <motion.h1 variants={fadeUp}>
            Reduce Data Centre Energy Costs While Protecting Uptime, Capacity and Thermal Reliability.
          </motion.h1>

          <motion.p className="dataCentreLead" variants={fadeUp}>
            EnerG IQ Tech Data Centre AI connects cooling systems, CRAC and CRAH units, chiller plants,
            server racks, UPS systems, power distribution, batteries, generators, thermal zones,
            cooling water, grid supply and workload data through the AI Energy Gateway.
          </motion.p>

          <motion.p className="dataCentreDescription" variants={fadeUp}>
            Edge AI analyses infrastructure data in real time, detects overcooling, thermal risk,
            electrical losses, capacity constraints and PUE inefficiencies, then recommends governed
            optimisation actions.
          </motion.p>

          <motion.div className="dataCentreHeroButtons" variants={fadeUp}>
            <button type="button" className="dataCentrePrimaryBtn" onClick={handlePilotClick}>
              Request Data Centre Pilot <ChevronRight size={18} />
            </button>
            <a href="#data-centre-workflow" className="dataCentreSecondaryBtn">View AI Workflow</a>
          </motion.div>

          <motion.div className="dataCentreHeroTags" variants={fadeUp}>
            <span><Snowflake size={15} /> Cooling Systems</span>
            <span><PlugZap size={15} /> UPS & Power</span>
            <span><Gauge size={15} /> PUE Intelligence</span>
            <span><Brain size={15} /> Workload & Capacity</span>
          </motion.div>
        </motion.div>

        <motion.div className="dataCentreHeroVisual" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}>
          <div className="dataCentreDashboard">
            <div className="dataCentreDashboardTop">
              <div><strong>Data Centre AI Portfolio</strong><span>Critical infrastructure overview</span></div>
              <b><Activity size={14} /> Live</b>
            </div>

            <div className="dataCentreKpis">
              <div><small>Data Centre Sites</small><strong>4</strong><span>Connected facilities</span></div>
              <div><small>Asset Classes</small><strong>13</strong><span>Operational systems</span></div>
              <div><small>Current PUE</small><strong>1.48</strong><span>Portfolio average</span></div>
              <div><small>Opportunities</small><strong>36</strong><span>Current optimisation items</span></div>
            </div>

            <div className="dataCentreInsightCard">
              <div className="dataCentreInsightIcon"><Brain size={22} /></div>
              <div>
                <strong>AI Recommendation</strong>
                <p>Data Hall B is operating 2.1°C below its approved thermal range. Increase CRAC supply setpoint by 0.8°C and reduce fan speed while monitoring rack inlet temperatures.</p>
              </div>
            </div>

            <div className="dataCentreApproval">
              <span><ShieldCheck size={18} /> Change approval required before execution</span>
              <button type="button">Review Action</button>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="dataCentreStrip">
        <span>Connect</span><ArrowRight size={15} />
        <span>Detect</span><ArrowRight size={15} />
        <span>Analyse</span><ArrowRight size={15} />
        <span>Simulate</span><ArrowRight size={15} />
        <span>Approve</span><ArrowRight size={15} />
        <span>Measure</span>
      </section>

      <section className="dataCentreSection dataCentreChallengeSection">
        <div className="dataCentreSectionHeader">
          <p>Data Centre Energy Challenge</p>
          <h2>Data Centres Must Improve Efficiency Without Compromising Uptime, Resilience or Capacity.</h2>
          <span>Cooling, power conversion, rack density and workload growth create complex operational trade-offs across critical infrastructure.</span>
        </div>

        <div className="dataCentreChallengeGrid">
          {[
            [Zap, "High Energy Intensity", "Cooling and power infrastructure add significant overhead beyond IT load."],
            [ShieldCheck, "Uptime & Resilience", "Optimisation must preserve redundancy, reliability and critical service availability."],
            [Thermometer, "Thermal Complexity", "Rack density, airflow and cooling behaviour can create hidden hot spots and overcooling."],
            [Gauge, "PUE & Capacity Pressure", "Operators must improve PUE while supporting compute growth and limited power capacity."],
          ].map(([Icon, title, text]) => (
            <article key={title}>
              <div className="dataCentreIcon"><Icon size={24} /></div>
              <h3>{title}</h3><p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="dataCentreSection dataCentreAssetsSection">
        <div className="dataCentreSectionHeader">
          <p>Connected Data Centre Assets</p>
          <h2>One AI Operating Layer Across Cooling, Power, IT Capacity and Grid Infrastructure.</h2>
          <span>The AI Energy Gateway connects existing DCIM, BMS, electrical, thermal and infrastructure telemetry without wholesale replacement.</span>
        </div>

        <motion.div className="dataCentreAssetsGrid" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.08 }}>
          {dataCentreAssets.map(([Icon, title, text]) => (
            <motion.article className="dataCentreAssetCard" variants={fadeUp} key={title}>
              <div className="dataCentreIcon"><Icon size={23} /></div>
              <h3>{title}</h3><p>{text}</p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="dataCentreSection dataCentreScenarioSection">
        <div className="dataCentreSectionHeader">
          <p>AI Optimisation Scenarios</p>
          <h2>Improve PUE, Reduce Thermal Risk and Protect Critical Infrastructure.</h2>
          <span>Each scenario uses the same AI Energy Gateway, Digital Twin, Decision Agents and human-in-the-loop approval workflow.</span>
        </div>

        <div className="dataCentreScenarioGrid">
          {scenarios.map(([Icon, title, text, outcome]) => (
            <article className="dataCentreScenarioCard" key={title}>
              <div className="dataCentreScenarioTop">
                <div className="dataCentreIcon"><Icon size={23} /></div>
                <span>AI Scenario</span>
              </div>
              <h3>{title}</h3><p>{text}</p>
              <div className="dataCentreOutcome"><CheckCircle2 size={17} />{outcome}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="dataCentreSection dataCentreWorkflowSection" id="data-centre-workflow">
        <div className="dataCentreSectionHeader dataCentreSectionHeaderLight">
          <p>End-to-End AI Workflow</p>
          <h2>From Data Centre Telemetry to Governed Operational Action.</h2>
          <span>EnerG IQ Tech converts infrastructure data into explainable recommendations while keeping engineering and operations teams in control.</span>
        </div>

        <div className="dataCentreWorkflow">
          {workflowSteps.map(([number, title, text]) => (
            <div className="dataCentreWorkflowStep" key={number}>
              <b>{number}</b>
              <div><h3>{title}</h3><p>{text}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="dataCentreSection dataCentrePlatformSection">
        <div className="dataCentrePlatformPanel">
          <div className="dataCentrePlatformCopy">
            <p>Shared EnerG IQ Tech Platform</p>
            <h2>Data Centre AI Is an Industry Pack Built on the Shared EnerG IQ Tech Architecture.</h2>
            <span>The same AI Energy Gateway, Digital Twin, Decision Agents, human-in-the-loop governance and Savings Intelligence support all EnerG IQ Tech industry environments.</span>
            <ul>
              <li><CheckCircle2 size={18} /> Reusable AI Energy Gateway</li>
              <li><CheckCircle2 size={18} /> Shared Digital Twin architecture</li>
              <li><CheckCircle2 size={18} /> Configurable AI Decision Agents</li>
              <li><CheckCircle2 size={18} /> Human-in-the-loop governance</li>
              <li><CheckCircle2 size={18} /> Savings and ROI intelligence</li>
            </ul>
          </div>

          <div className="dataCentrePlatformFlow">
            <div className="dataCentrePlatformNode"><Database size={25} /><span>Data Centre Assets</span></div>
            <ChevronRight size={20} />
            <div className="dataCentrePlatformNode featured"><Cpu size={25} /><span>AI Energy Gateway</span></div>
            <ChevronRight size={20} />
            <div className="dataCentrePlatformNode"><Layers3 size={25} /><span>Digital Twin</span></div>
            <ChevronRight size={20} />
            <div className="dataCentrePlatformNode"><Brain size={25} /><span>Decision Agents</span></div>
            <ChevronRight size={20} />
            <div className="dataCentrePlatformNode"><ShieldCheck size={25} /><span>Approved Actions</span></div>
          </div>
        </div>
      </section>

      <section className="dataCentreSection dataCentrePilotSection" id="data-centre-pilot">
        <div className="dataCentrePilotBox">
          <div className="dataCentrePilotCopy">
            <p>Data Centre Pilot Program</p>
            <h2>Start With One Site, One High-Value Use Case and Measurable ROI.</h2>
            <span>A staged pilot validates telemetry, resilience safeguards, optimisation scenarios and measurable value before portfolio-wide deployment.</span>
            <button type="button" className="dataCentrePrimaryBtn" onClick={handlePilotClick}>
              Discuss a Data Centre Pilot <ChevronRight size={18} />
            </button>
          </div>

          <div className="dataCentrePilotList">
            <h3>Indicative Pilot Scope</h3>
            <ul>
              {pilotItems.map((item) => (
                <li key={item}><CheckCircle2 size={18} /><span>{item}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="dataCentreCta">
        <div>
          <p>Now Onboarding Pilot Partners</p>
          <h2>Reduce Data Centre Energy Costs While Protecting Uptime, Capacity and Thermal Reliability.</h2>
          <span>EnerG IQ Tech is seeking data centre operators, colocation providers, infrastructure teams and technology partners for pilot collaboration.</span>
        </div>

        <div className="dataCentreCtaActions">
          <button type="button" className="dataCentrePrimaryBtn" onClick={handlePilotClick}>
            Request Pilot <ChevronRight size={18} />
          </button>
          
        </div>
      </section>
    </main>
  );
}
