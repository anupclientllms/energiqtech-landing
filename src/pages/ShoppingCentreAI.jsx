import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Activity, ArrowRight, BatteryCharging, Brain, Building2, CheckCircle2,
  ChevronRight, Cpu, Droplets, Gauge, Layers3, Lightbulb, ParkingCircle,
  Refrigerator, ShieldCheck, ShoppingCart, Sparkles, SunMedium, Truck, Tv,
  Users, Utensils, Waves, Zap
} from "lucide-react";
import "../styles/ShoppingCentreAI.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const shoppingCentreAssets = [
  [Building2, "Common Area HVAC", "Optimise mall, corridor, atrium and common-area heating, cooling and ventilation using occupancy and trading-hour intelligence."],
  [Waves, "Central Chiller Plant", "Improve chiller sequencing, chilled-water temperatures, pumping and condenser performance across centre loads."],
  [Utensils, "Food Court Systems", "Monitor kitchen exhaust, ventilation, refrigeration, hot water, lighting and food-court operating schedules."],
  [Refrigerator, "Retail Refrigeration", "Track tenant refrigeration, display cases, cold rooms, compressor cycling and temperature performance."],
  [Lightbulb, "Mall & Common Lighting", "Optimise mall, atrium, corridor and shared-area lighting using schedules, occupancy and daylight conditions."],
  [ParkingCircle, "Car Park Lighting", "Reduce car-park lighting energy through occupancy, daylight, zoning and after-hours control."],
  [Activity, "Escalators & Travelators", "Track operating patterns, standby loads and passenger-driven schedules across vertical transport systems."],
  [Users, "Passenger & Service Lifts", "Monitor demand, standby consumption, service patterns and abnormal lift energy behaviour."],
  [Gauge, "Tenant Energy & Metering", "Measure tenant consumption, common-area loads, abnormal usage and portfolio-level performance."],
  [Tv, "Digital Signage & Façade", "Optimise signage, façade lighting and display schedules while preserving centre presentation and trading needs."],
  [BatteryCharging, "EV Charging", "Coordinate customer, staff and fleet charging to reduce peaks and use lower-cost or renewable energy periods."],
  [SunMedium, "Solar & Battery", "Optimise solar self-consumption, battery dispatch, peak shaving, resilience and carbon reduction."],
  [Droplets, "Water & Pumps", "Identify excessive runtime, pressure loss, irrigation waste and inefficient pumping across centre facilities."],
  [Truck, "Loading Dock & Back of House", "Monitor loading areas, dock equipment, service corridors, waste systems and back-of-house operating loads."],
  [Sparkles, "Centre Energy Coordination", "Coordinate HVAC, lighting, tenant loads, EV charging, solar and battery through one operational AI layer."],
];

const scenarios = [
  [Building2, "Common Area HVAC Optimisation", "Align HVAC operation with trading hours, occupancy, weather and mall-zone demand.", "Reduce common-area HVAC waste"],
  [Waves, "Chiller Plant Optimisation", "Improve chiller and pump sequencing using centre demand, weather and occupancy forecasts.", "Improve central plant efficiency"],
  [Lightbulb, "Lighting Schedule Intelligence", "Optimise mall, façade and car-park lighting using occupancy, daylight and operating schedules.", "Reduce lighting energy use"],
  [Refrigerator, "Retail Refrigeration Monitoring", "Detect abnormal compressor cycling, temperature drift and inefficient refrigeration operation.", "Reduce refrigeration energy waste"],
  [BatteryCharging, "EV Charging Coordination", "Schedule charging around centre demand, tariffs and available solar or battery capacity.", "Reduce charging-driven peaks"],
  [Gauge, "Tenant Energy Intelligence", "Identify abnormal tenant demand, benchmark performance and prioritise high-value engagement opportunities.", "Improve tenant energy performance"],
];

const workflowSteps = [
  ["01", "Connect", "Connect BMS, meters, chillers, lighting, vertical transport, tenant loads, EV charging and DER telemetry."],
  ["02", "Detect", "Identify energy waste, abnormal equipment behaviour, peak-demand events and after-hours loads."],
  ["03", "Analyse", "Use AI Decision Agents and Digital Twin context to investigate causes across centre assets and zones."],
  ["04", "Simulate", "Evaluate actions against trading hours, tenant needs, comfort, safety and operational constraints."],
  ["05", "Approve", "Route recommendations through centre management, facilities and operational approval workflows."],
  ["06", "Measure", "Validate energy, cost, carbon and operational outcomes before scaling across the centre portfolio."],
];

const pilotItems = [
  "Priority shopping centre and energy-system assessment",
  "BMS, smart-meter, tenant-meter or available telemetry integration",
  "Common-area HVAC, chiller and lighting analysis",
  "Retail refrigeration and food-court scenarios",
  "EV charging, solar and battery optimisation",
  "Digital Twin investigation and human-approved recommendations",
  "Energy savings, carbon and ROI measurement",
];

export default function ShoppingCentreAI({ openPilotModal }) {
  const handlePilotClick = () => {
    if (typeof openPilotModal === "function") return openPilotModal();
    document.getElementById("shopping-centre-pilot")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="shoppingCentrePage">
      <section className="shoppingCentreHero">
        <motion.div className="shoppingCentreHeroContent" variants={stagger} initial="hidden" animate="show">
          <motion.div className="shoppingCentreBadge" variants={fadeUp}>
            <ShoppingCart size={17} /> EnerG IQ Tech Shopping Centre AI
          </motion.div>

          <motion.h1 variants={fadeUp}>
            Reduce Shopping Centre Energy Costs Across Common Areas, Tenants and Connected Energy Systems.
          </motion.h1>

          <motion.p className="shoppingCentreLead" variants={fadeUp}>
            EnerG IQ Tech Shopping Centre AI connects common-area HVAC, central chillers, food-court systems,
            retail refrigeration, lighting, car parks, lifts, tenant metering, signage, EV charging,
            solar, battery, water and back-of-house systems through the AI Energy Gateway.
          </motion.p>

          <motion.p className="shoppingCentreDescription" variants={fadeUp}>
            Edge AI analyses centre operational data in real time, detects energy waste, tenant anomalies,
            equipment inefficiencies and peak-demand events, then recommends governed optimisation actions.
          </motion.p>

          <motion.div className="shoppingCentreHeroButtons" variants={fadeUp}>
            <button type="button" className="shoppingCentrePrimaryBtn" onClick={handlePilotClick}>
              Request Shopping Centre Pilot <ChevronRight size={18} />
            </button>
            <a href="#shopping-centre-workflow" className="shoppingCentreSecondaryBtn">View AI Workflow</a>
          </motion.div>

          <motion.div className="shoppingCentreHeroTags" variants={fadeUp}>
            <span><Building2 size={15} /> Common Area HVAC</span>
            <span><Waves size={15} /> Central Chiller Plant</span>
            <span><Gauge size={15} /> Tenant Energy</span>
            <span><SunMedium size={15} /> Solar & Battery</span>
          </motion.div>
        </motion.div>

        <motion.div className="shoppingCentreHeroVisual" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}>
          <div className="shoppingCentreDashboard">
            <div className="shoppingCentreDashboardTop">
              <div><strong>Shopping Centre AI Portfolio</strong><span>Retail operations overview</span></div>
              <b><Activity size={14} /> Live</b>
            </div>

            <div className="shoppingCentreKpis">
              <div><small>Shopping Centres</small><strong>4</strong><span>Connected properties</span></div>
              <div><small>Asset Classes</small><strong>15</strong><span>Operational systems</span></div>
              <div><small>Opportunities</small><strong>44</strong><span>Current optimisation items</span></div>
              <div><small>Peak Reduction</small><strong>13%</strong><span>Indicative opportunity</span></div>
            </div>

            <div className="shoppingCentreInsightCard">
              <div className="shoppingCentreInsightIcon"><Brain size={22} /></div>
              <div>
                <strong>AI Recommendation</strong>
                <p>Common-area HVAC is operating at full load before tenant trading begins. Delay Zone B start by 35 minutes and retain ventilation only in active loading and food-service areas.</p>
              </div>
            </div>

            <div className="shoppingCentreApproval">
              <span><ShieldCheck size={18} /> Facilities approval required before execution</span>
              <button type="button">Review Action</button>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="shoppingCentreStrip">
        <span>Connect</span><ArrowRight size={15} />
        <span>Detect</span><ArrowRight size={15} />
        <span>Analyse</span><ArrowRight size={15} />
        <span>Simulate</span><ArrowRight size={15} />
        <span>Approve</span><ArrowRight size={15} />
        <span>Measure</span>
      </section>

      <section className="shoppingCentreSection shoppingCentreChallengeSection">
        <div className="shoppingCentreSectionHeader">
          <p>Shopping Centre Energy Challenge</p>
          <h2>Retail Centres Combine Common Areas, Tenants, Refrigeration, Parking and Peak Demand.</h2>
          <span>Shopping centres must reduce costs and emissions while maintaining tenant operations, customer comfort, lighting quality and reliable services.</span>
        </div>

        <div className="shoppingCentreChallengeGrid">
          {[
            [Zap, "High & Variable Demand", "HVAC, chillers, tenant loads, food courts, lighting and charging create highly variable demand."],
            [Users, "Tenant Complexity", "Tenants operate different equipment, schedules and energy profiles across the same site."],
            [Refrigerator, "Refrigeration & Food Loads", "Food retail, refrigeration and kitchens can drive significant base load and operational risk."],
            [Gauge, "Fragmented Energy Data", "BMS, tenant meters, retail systems, parking and DER data often remain disconnected."],
          ].map(([Icon, title, text]) => (
            <article key={title}>
              <div className="shoppingCentreIcon"><Icon size={24} /></div>
              <h3>{title}</h3><p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="shoppingCentreSection shoppingCentreAssetsSection">
        <div className="shoppingCentreSectionHeader">
          <p>Connected Shopping Centre Assets</p>
          <h2>One AI Operating Layer Across Common Areas, Tenants and Connected Energy Systems.</h2>
          <span>The AI Energy Gateway connects existing centre infrastructure and available telemetry without requiring wholesale replacement.</span>
        </div>

        <motion.div className="shoppingCentreAssetsGrid" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.08 }}>
          {shoppingCentreAssets.map(([Icon, title, text]) => (
            <motion.article className="shoppingCentreAssetCard" variants={fadeUp} key={title}>
              <div className="shoppingCentreIcon"><Icon size={23} /></div>
              <h3>{title}</h3><p>{text}</p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="shoppingCentreSection shoppingCentreScenarioSection">
        <div className="shoppingCentreSectionHeader">
          <p>AI Optimisation Scenarios</p>
          <h2>Reduce Waste, Improve Asset Performance and Support Tenant Engagement.</h2>
          <span>Each scenario uses the same AI Energy Gateway, Digital Twin, Decision Agents and human-in-the-loop approval workflow.</span>
        </div>

        <div className="shoppingCentreScenarioGrid">
          {scenarios.map(([Icon, title, text, outcome]) => (
            <article className="shoppingCentreScenarioCard" key={title}>
              <div className="shoppingCentreScenarioTop">
                <div className="shoppingCentreIcon"><Icon size={23} /></div>
                <span>AI Scenario</span>
              </div>
              <h3>{title}</h3><p>{text}</p>
              <div className="shoppingCentreOutcome"><CheckCircle2 size={17} />{outcome}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="shoppingCentreSection shoppingCentreWorkflowSection" id="shopping-centre-workflow">
        <div className="shoppingCentreSectionHeader shoppingCentreSectionHeaderLight">
          <p>End-to-End AI Workflow</p>
          <h2>From Shopping Centre Telemetry to Governed Operational Action.</h2>
          <span>EnerG IQ Tech converts operational data into explainable recommendations while keeping centre management and facilities teams in control.</span>
        </div>

        <div className="shoppingCentreWorkflow">
          {workflowSteps.map(([number, title, text]) => (
            <div className="shoppingCentreWorkflowStep" key={number}>
              <b>{number}</b>
              <div><h3>{title}</h3><p>{text}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="shoppingCentreSection shoppingCentrePlatformSection">
        <div className="shoppingCentrePlatformPanel">
          <div className="shoppingCentrePlatformCopy">
            <p>Shared EnerG IQ Tech Platform</p>
            <h2>Shopping Centre AI Is an Industry Pack Built on the Shared EnerG IQ Tech Architecture.</h2>
            <span>The same AI Energy Gateway, Digital Twin, Decision Agents, human-in-the-loop governance and Savings Intelligence support all EnerG IQ Tech industry environments.</span>
            <ul>
              <li><CheckCircle2 size={18} /> Reusable AI Energy Gateway</li>
              <li><CheckCircle2 size={18} /> Shared Digital Twin architecture</li>
              <li><CheckCircle2 size={18} /> Configurable AI Decision Agents</li>
              <li><CheckCircle2 size={18} /> Human-in-the-loop governance</li>
              <li><CheckCircle2 size={18} /> Savings and ROI intelligence</li>
            </ul>
          </div>

          <div className="shoppingCentrePlatformFlow">
            <div className="shoppingCentrePlatformNode"><ShoppingCart size={25} /><span>Shopping Centre Assets</span></div>
            <ChevronRight size={20} />
            <div className="shoppingCentrePlatformNode featured"><Cpu size={25} /><span>AI Energy Gateway</span></div>
            <ChevronRight size={20} />
            <div className="shoppingCentrePlatformNode"><Layers3 size={25} /><span>Digital Twin</span></div>
            <ChevronRight size={20} />
            <div className="shoppingCentrePlatformNode"><Brain size={25} /><span>Decision Agents</span></div>
            <ChevronRight size={20} />
            <div className="shoppingCentrePlatformNode"><ShieldCheck size={25} /><span>Approved Actions</span></div>
          </div>
        </div>
      </section>

      <section className="shoppingCentreSection shoppingCentrePilotSection" id="shopping-centre-pilot">
        <div className="shoppingCentrePilotBox">
          <div className="shoppingCentrePilotCopy">
            <p>Shopping Centre Pilot Program</p>
            <h2>Start With One Centre, One High-Value Use Case and Measurable ROI.</h2>
            <span>A staged pilot validates data, tenant and operational safeguards, optimisation scenarios and measurable value before portfolio-wide deployment.</span>
            <button type="button" className="shoppingCentrePrimaryBtn" onClick={handlePilotClick}>
              Discuss a Shopping Centre Pilot <ChevronRight size={18} />
            </button>
          </div>

          <div className="shoppingCentrePilotList">
            <h3>Indicative Pilot Scope</h3>
            <ul>
              {pilotItems.map((item) => (
                <li key={item}><CheckCircle2 size={18} /><span>{item}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="shoppingCentreCta">
        <div>
          <p>Now Onboarding Pilot Partners</p>
          <h2>Reduce Shopping Centre Energy Costs Across Common Areas, Tenants and Connected Energy Assets.</h2>
          <span>EnerG IQ Tech is seeking shopping centre owners, retail property groups, facility teams and technology partners for pilot collaboration.</span>
        </div>

        <div className="shoppingCentreCtaActions">
          <button type="button" className="shoppingCentrePrimaryBtn" onClick={handlePilotClick}>
            Request Pilot <ChevronRight size={18} />
          </button>
          
        </div>
      </section>
    </main>
  );
}
