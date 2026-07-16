import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Activity, ArrowRight, BatteryCharging, Brain, Building2, CheckCircle2,
  ChevronRight, Cpu, Droplets, Fan, Landmark, Layers3, Lightbulb, Monitor,
  Printer, Refrigerator, ShieldCheck, SunMedium, Utensils, Waves, Zap
} from "lucide-react";
import "../styles/LocalGovernmentAI.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const assets = [
  [Fan, "Council Building HVAC", "Optimise HVAC across civic centres, administration buildings, libraries, community facilities and depots using occupancy, weather and schedules."],
  [Lightbulb, "Building & Public-Area Lighting", "Reduce unnecessary lighting across offices, libraries, community spaces, car parks and shared public areas."],
  [Monitor, "Workstations", "Detect council workstations and office equipment operating unnecessarily outside approved occupancy hours."],
  [Printer, "Printers", "Monitor printer fleets, standby demand and after-hours operation across council offices and public facilities."],
  [Utensils, "Kitchen & Community Facilities", "Analyse staff kitchens, community kitchens, hot water, ventilation and operational schedules."],
  [Refrigerator, "Refrigeration", "Track refrigeration across community facilities, aquatic centres, kitchens, cool rooms and public venues."],
  [Building2, "Lifts & Vertical Transport", "Monitor lift demand, standby loads, operating patterns and abnormal power behaviour across civic buildings."],
  [Droplets, "Water & Pumps", "Identify excessive runtime, pressure loss and inefficient pumping across aquatic centres, irrigation and facilities."],
  [Waves, "Motors & Plant", "Monitor motor loading, runtime and abnormal power draw across depots, plant rooms and council facilities."],
  [SunMedium, "Solar & Battery", "Optimise solar self-consumption, battery dispatch, peak shaving and resilience across council sites."],
  [BatteryCharging, "Fleet & EV Charging", "Coordinate council fleet charging around tariffs, site demand, renewable generation and operational schedules."],
  [Landmark, "Council Energy Coordination", "Coordinate council buildings, community facilities, depots, charging and DER through one operational AI layer."],
];

const scenarios = [
  [Fan, "After-Hours HVAC", "Detect HVAC operating after approved occupancy schedules across civic buildings, libraries and community facilities.", "Reduce unnecessary HVAC runtime"],
  [Monitor, "Workstation Control", "Identify council workstations and office equipment left running after occupancy falls.", "Reduce after-hours plug load"],
  [Lightbulb, "Lighting Optimisation", "Reduce lighting in unoccupied council areas while preserving safety and community access requirements.", "Reduce lighting energy use"],
  [Zap, "Peak Demand Reduction", "Forecast demand peaks and coordinate HVAC, pumps, charging and flexible council loads.", "Reduce demand charges"],
  [Droplets, "Aquatic & Pump Intelligence", "Optimise pumps, filtration, water circulation and associated plant in aquatic and recreation facilities.", "Improve plant efficiency"],
  [BatteryCharging, "Fleet EV Charging", "Schedule council fleet charging around site demand, off-peak tariffs and available solar generation.", "Reduce charging-driven peaks"],
];

const workflow = [
  ["01", "Connect", "Connect BMS, meters, HVAC, lighting, workstations, pumps, fleet charging and available council telemetry."],
  ["02", "Detect", "Identify after-hours consumption, peak-demand events, abnormal equipment behaviour and energy waste."],
  ["03", "Analyse", "Use AI Decision Agents and Digital Twin context to investigate causes across buildings, facilities and assets."],
  ["04", "Simulate", "Evaluate actions against comfort, safety, community access, operational schedules and service requirements."],
  ["05", "Approve", "Route recommendations through facilities, sustainability and council approval workflows."],
  ["06", "Measure", "Validate energy, cost, carbon and operational outcomes before scaling across the council portfolio."],
];

const pilotItems = [
  "Priority council building or facility assessment",
  "BMS, smart-meter, sub-meter or available telemetry integration",
  "HVAC, lighting, workstation and after-hours analysis",
  "Pumps, aquatic systems and refrigeration scenarios",
  "Fleet EV charging, solar and battery optimisation",
  "Digital Twin investigation and human-approved recommendations",
  "Energy savings, carbon and ROI measurement",
];

export default function LocalGovernmentAI({ openPilotModal }) {
  const handlePilotClick = () => {
    if (typeof openPilotModal === "function") return openPilotModal();
    document.getElementById("local-government-pilot")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="localGovernmentPage">
      <section className="localGovernmentHero">
        <motion.div className="localGovernmentHeroContent" variants={stagger} initial="hidden" animate="show">
          <motion.div className="localGovernmentBadge" variants={fadeUp}>
            <Landmark size={17} /> EnergIQ Local Government AI
          </motion.div>

          <motion.h1 variants={fadeUp}>
            Reduce Energy Costs Across Council Buildings, Community Facilities and Connected Energy Assets.
          </motion.h1>

          <motion.p className="localGovernmentLead" variants={fadeUp}>
            EnergIQ Local Government AI applies the Building AI workspace across civic centres,
            libraries, community facilities, depots and administrative offices. It connects HVAC,
            lighting, workstations, printers, kitchens, refrigeration, lifts, pumps, motors,
            solar, battery and EV charging through the AI Energy Gateway.
          </motion.p>

          <motion.p className="localGovernmentDescription" variants={fadeUp}>
            Edge AI analyses council operational data in real time, detects after-hours consumption,
            peak-demand events and equipment inefficiencies, then recommends governed actions that
            reduce costs, lower emissions and improve asset performance.
          </motion.p>

          <motion.div className="localGovernmentHeroButtons" variants={fadeUp}>
            <button type="button" className="localGovernmentPrimaryBtn" onClick={handlePilotClick}>
              Request Council Pilot <ChevronRight size={18} />
            </button>
            <a href="#local-government-workflow" className="localGovernmentSecondaryBtn">
              View AI Workflow
            </a>
          </motion.div>

          <motion.div className="localGovernmentHeroTags" variants={fadeUp}>
            <span><Building2 size={15} /> Civic Buildings</span>
            <span><Monitor size={15} /> Workstations</span>
            <span><Droplets size={15} /> Pumps & Aquatic Systems</span>
            <span><BatteryCharging size={15} /> Fleet EV Charging</span>
          </motion.div>
        </motion.div>

        <motion.div className="localGovernmentHeroVisual" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}>
          <div className="localGovernmentDashboard">
            <div className="localGovernmentDashboardTop">
              <div><strong>Council Energy Portfolio</strong><span>Local government operations overview</span></div>
              <b><Activity size={14} /> Live</b>
            </div>

            <div className="localGovernmentKpis">
              <div><small>Council Sites</small><strong>4</strong><span>Clocktower, Civic, Library, Depot</span></div>
              <div><small>Asset Classes</small><strong>12</strong><span>Operational systems</span></div>
              <div><small>Opportunities</small><strong>41</strong><span>Current optimisation items</span></div>
              <div><small>Monthly Potential</small><strong>$2,840</strong><span>Indicative portfolio value</span></div>
            </div>

            <div className="localGovernmentInsightCard">
              <div className="localGovernmentInsightIcon"><Brain size={22} /></div>
              <div>
                <strong>AI Recommendation</strong>
                <p>Clocktower Centre HVAC and 43 workstations remain active after occupancy has fallen below 6%. Apply an approved HVAC setback and workstation shutdown sequence.</p>
              </div>
            </div>

            <div className="localGovernmentApproval">
              <span><ShieldCheck size={18} /> Council facilities approval required</span>
              <button type="button">Review Action</button>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="localGovernmentStrip">
        <span>Connect</span><ArrowRight size={15} />
        <span>Detect</span><ArrowRight size={15} />
        <span>Analyse</span><ArrowRight size={15} />
        <span>Simulate</span><ArrowRight size={15} />
        <span>Approve</span><ArrowRight size={15} />
        <span>Measure</span>
      </section>

      <section className="localGovernmentSection localGovernmentChallengeSection">
        <div className="localGovernmentSectionHeader">
          <p>Local Government Energy Challenge</p>
          <h2>Councils Manage Diverse Buildings, Community Services and Public Infrastructure.</h2>
          <span>Civic centres, libraries, community facilities, depots and aquatic assets operate across different schedules, systems and service requirements.</span>
        </div>

        <div className="localGovernmentChallengeGrid">
          {[
            [Building2, "Diverse Council Portfolio", "Councils manage offices, libraries, depots, community venues and specialist facilities across multiple sites."],
            [Monitor, "After-Hours Loads", "HVAC, lighting, workstations and printers often continue running after public and staff occupancy has reduced."],
            [Zap, "Budget & Demand Pressure", "Rising tariffs and demand charges place pressure on council operating budgets and sustainability targets."],
            [Landmark, "Governance Requirements", "Optimisation must remain explainable, auditable and subject to council approval and operational safeguards."],
          ].map(([Icon, title, text]) => (
            <article key={title}>
              <div className="localGovernmentIcon"><Icon size={24} /></div>
              <h3>{title}</h3><p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="localGovernmentSection localGovernmentAssetsSection">
        <div className="localGovernmentSectionHeader">
          <p>Connected Council Assets</p>
          <h2>One AI Operating Layer Across Council Buildings, Facilities and Connected Energy Assets.</h2>
          <span>The AI Energy Gateway connects existing council systems and available telemetry without requiring wholesale replacement.</span>
        </div>

        <motion.div className="localGovernmentAssetsGrid" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.08 }}>
          {assets.map(([Icon, title, text]) => (
            <motion.article className="localGovernmentAssetCard" variants={fadeUp} key={title}>
              <div className="localGovernmentIcon"><Icon size={23} /></div>
              <h3>{title}</h3><p>{text}</p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="localGovernmentSection localGovernmentScenarioSection">
        <div className="localGovernmentSectionHeader">
          <p>AI Optimisation Scenarios</p>
          <h2>Reduce Waste, Improve Asset Performance and Support Council Sustainability Targets.</h2>
          <span>Each scenario uses the same AI Energy Gateway, Digital Twin, Decision Agents and human-in-the-loop approval workflow.</span>
        </div>

        <div className="localGovernmentScenarioGrid">
          {scenarios.map(([Icon, title, text, outcome]) => (
            <article className="localGovernmentScenarioCard" key={title}>
              <div className="localGovernmentScenarioTop">
                <div className="localGovernmentIcon"><Icon size={23} /></div>
                <span>AI Scenario</span>
              </div>
              <h3>{title}</h3><p>{text}</p>
              <div className="localGovernmentOutcome"><CheckCircle2 size={17} />{outcome}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="localGovernmentSection localGovernmentWorkflowSection" id="local-government-workflow">
        <div className="localGovernmentSectionHeader localGovernmentSectionHeaderLight">
          <p>End-to-End AI Workflow</p>
          <h2>From Council Telemetry to Governed Operational Action.</h2>
          <span>EnergIQ converts operational data into explainable recommendations while keeping council facilities and sustainability teams in control.</span>
        </div>

        <div className="localGovernmentWorkflow">
          {workflow.map(([number, title, text]) => (
            <div className="localGovernmentWorkflowStep" key={number}>
              <b>{number}</b>
              <div><h3>{title}</h3><p>{text}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="localGovernmentSection localGovernmentPlatformSection">
        <div className="localGovernmentPlatformPanel">
          <div className="localGovernmentPlatformCopy">
            <p>Shared EnergIQ Platform</p>
            <h2>Local Government AI Uses the Shared Building AI Workspace and EnergIQ Architecture.</h2>
            <span>The same AI Energy Gateway, Digital Twin, Decision Agents, human-in-the-loop governance and Savings Intelligence support commercial buildings and council-owned facilities.</span>
            <ul>
              <li><CheckCircle2 size={18} /> Shared Building AI workspace</li>
              <li><CheckCircle2 size={18} /> Reusable AI Energy Gateway</li>
              <li><CheckCircle2 size={18} /> Shared Digital Twin architecture</li>
              <li><CheckCircle2 size={18} /> Configurable AI Decision Agents</li>
              <li><CheckCircle2 size={18} /> Human-in-the-loop governance</li>
              <li><CheckCircle2 size={18} /> Savings and ROI intelligence</li>
            </ul>
          </div>

          <div className="localGovernmentPlatformFlow">
            <div className="localGovernmentPlatformNode"><Landmark size={25} /><span>Council Assets</span></div>
            <ChevronRight size={20} />
            <div className="localGovernmentPlatformNode featured"><Cpu size={25} /><span>AI Energy Gateway</span></div>
            <ChevronRight size={20} />
            <div className="localGovernmentPlatformNode"><Layers3 size={25} /><span>Building Digital Twin</span></div>
            <ChevronRight size={20} />
            <div className="localGovernmentPlatformNode"><Brain size={25} /><span>Decision Agents</span></div>
            <ChevronRight size={20} />
            <div className="localGovernmentPlatformNode"><ShieldCheck size={25} /><span>Approved Actions</span></div>
          </div>
        </div>
      </section>

      <section className="localGovernmentSection localGovernmentPilotSection" id="local-government-pilot">
        <div className="localGovernmentPilotBox">
          <div className="localGovernmentPilotCopy">
            <p>Local Government Pilot Program</p>
            <h2>Start With One or Two Council Facilities and a Measurable Energy Problem.</h2>
            <span>A staged pilot validates available data, council safeguards, optimisation scenarios and measurable value before portfolio-wide deployment.</span>
            <button type="button" className="localGovernmentPrimaryBtn" onClick={handlePilotClick}>
              Discuss a Council Pilot <ChevronRight size={18} />
            </button>
          </div>

          <div className="localGovernmentPilotList">
            <h3>Indicative Pilot Scope</h3>
            <ul>
              {pilotItems.map((item) => (
                <li key={item}><CheckCircle2 size={18} /><span>{item}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="localGovernmentCta">
        <div>
          <p>Now Onboarding Council Pilot Partners</p>
          <h2>Reduce Council Energy Costs Across Buildings, Community Facilities and Connected Energy Assets.</h2>
          <span>EnergIQ is seeking councils, facility teams, sustainability leaders and technology partners for pilot collaboration.</span>
        </div>

        <div className="localGovernmentCtaActions">
          <button type="button" className="localGovernmentPrimaryBtn" onClick={handlePilotClick}>
            Request Council Pilot <ChevronRight size={18} />
          </button>
          <Link to="/industries" className="localGovernmentSecondaryBtn">Explore Other Industries</Link>
        </div>
      </section>
    </main>
  );
}
