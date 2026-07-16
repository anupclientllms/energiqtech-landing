import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Activity, ArrowRight, BatteryCharging, BookOpen, Brain, Building2,
  CheckCircle2, ChevronRight, Cpu, Droplets, Dumbbell, FlaskConical,
  GraduationCap, Hotel, Layers3, Lightbulb, Moon, Network, Server,
  ShieldCheck, SunMedium, Utensils, Waves, Zap
} from "lucide-react";
import "../styles/UniversityAI.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const assets = [
  [Building2, "Teaching Space HVAC", "Optimise lecture theatres, classrooms and teaching spaces using timetable, occupancy and environmental data."],
  [FlaskConical, "Laboratories & Fume Extraction", "Monitor ventilation, fume cupboards, extraction systems, laboratory schedules and high-intensity research loads."],
  [Waves, "Campus Central Plant", "Analyse chillers, boilers, pumps, thermal storage and central energy systems across the campus."],
  [Server, "Research Computing & Server Rooms", "Track cooling demand, UPS loads, server-room energy use and research-computing operating patterns."],
  [BookOpen, "Libraries & Study Spaces", "Optimise HVAC, lighting and after-hours schedules across libraries, study zones and shared learning areas."],
  [Hotel, "Student Accommodation", "Improve energy performance across residences, common areas, hot water, HVAC and occupancy-driven loads."],
  [Lightbulb, "Campus Lighting", "Optimise internal, external and common-area lighting using occupancy, daylight and timetable intelligence."],
  [Dumbbell, "Sports & Aquatic Facilities", "Analyse pool heating, ventilation, pumps, lighting and high-load recreation facilities."],
  [Utensils, "Food Services & Refrigeration", "Monitor kitchens, cool rooms, refrigeration, hot water and food-service schedules."],
  [Activity, "Lifts & Escalators", "Track operating patterns, standby loads and abnormal energy behaviour across vertical transport systems."],
  [Droplets, "Water, Irrigation & Pumps", "Identify excessive runtime, pressure loss, inefficient pumping and irrigation scheduling opportunities."],
  [BatteryCharging, "Fleet, Staff & Student EV Charging", "Coordinate campus EV charging to reduce peaks, manage capacity and use lower-cost energy periods."],
  [SunMedium, "Solar & Battery", "Optimise solar self-consumption, battery dispatch, peak shaving, resilience and carbon reduction."],
  [Moon, "After-Hours Base Load", "Detect buildings, laboratories, equipment and common-area loads operating unnecessarily outside normal hours."],
  [Network, "Campus Energy Coordination", "Coordinate campus buildings, central plant, DER, charging and flexible loads through one operational AI layer."],
];

const scenarios = [
  [Building2, "Timetable-Driven HVAC Optimisation", "Align HVAC schedules with room bookings, occupancy and teaching timetables while maintaining comfort.", "Reduce unnecessary HVAC runtime"],
  [FlaskConical, "Laboratory Ventilation Intelligence", "Detect excessive air changes, poor extraction schedules and unused laboratory ventilation loads.", "Reduce laboratory energy intensity"],
  [Moon, "After-Hours Load Reduction", "Identify buildings, lighting, equipment and systems operating outside teaching, research or accommodation needs.", "Reduce campus base load"],
  [Waves, "Central Plant Optimisation", "Improve chiller, boiler and pump sequencing using campus demand, weather and occupancy forecasts.", "Improve central plant efficiency"],
  [BatteryCharging, "EV Charging Coordination", "Schedule fleet, staff and student charging around campus demand, tariffs and renewable generation.", "Reduce charging-driven peaks"],
  [SunMedium, "Solar & Battery Dispatch", "Coordinate solar generation, battery storage and flexible campus demand to improve renewable utilisation.", "Increase solar self-consumption"],
];

const workflow = [
  ["01", "Connect", "Connect BMS, meters, central plant, laboratories, accommodation, lighting, EV charging and DER telemetry."],
  ["02", "Detect", "Identify energy waste, abnormal equipment behaviour, peak-demand events and after-hours loads."],
  ["03", "Analyse", "Use AI Decision Agents and Digital Twin context to investigate causes across campus assets and buildings."],
  ["04", "Simulate", "Evaluate actions against timetables, research needs, comfort, safety and operational constraints."],
  ["05", "Approve", "Route recommendations through facilities, sustainability and operational approval workflows."],
  ["06", "Measure", "Validate energy, cost, carbon and operational outcomes before scaling across the campus portfolio."],
];

const pilotItems = [
  "Priority campus, building or central-plant assessment",
  "BMS, smart-meter, sub-meter or available telemetry integration",
  "Teaching-space, laboratory, central-plant and after-hours analysis",
  "EV charging, solar and battery optimisation scenarios",
  "Digital Twin investigation and AI recommendations",
  "Human-approved optimisation workflow",
  "Energy savings, carbon and ROI measurement",
];

export default function UniversityAI({ openPilotModal }) {
  const handlePilotClick = () => {
    if (typeof openPilotModal === "function") return openPilotModal();
    document.getElementById("university-pilot")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="universityPage">
      <section className="universityHero">
        <motion.div className="universityHeroContent" variants={stagger} initial="hidden" animate="show">
          <motion.div className="universityBadge" variants={fadeUp}>
            <GraduationCap size={17} /> EnergIQ University AI
          </motion.div>

          <motion.h1 variants={fadeUp}>
            Reduce Campus Energy Costs Across Teaching, Research, Accommodation and Connected Energy Systems.
          </motion.h1>

          <motion.p className="universityLead" variants={fadeUp}>
            EnergIQ University AI connects teaching-space HVAC, laboratories, central plant, research computing,
            libraries, student accommodation, lighting, sports facilities, food services, lifts, water systems,
            EV charging, solar and battery assets through the AI Energy Gateway.
          </motion.p>

          <motion.p className="universityDescription" variants={fadeUp}>
            Edge AI analyses campus operational data in real time, detects energy waste, after-hours loads,
            equipment inefficiencies and peak-demand events, then recommends governed optimisation actions.
          </motion.p>

          <motion.div className="universityHeroButtons" variants={fadeUp}>
            <button type="button" className="universityPrimaryBtn" onClick={handlePilotClick}>
              Request University Pilot <ChevronRight size={18} />
            </button>
            <a href="#university-workflow" className="universitySecondaryBtn">View AI Workflow</a>
          </motion.div>

          <motion.div className="universityHeroTags" variants={fadeUp}>
            <span><Building2 size={15} /> Teaching Spaces</span>
            <span><FlaskConical size={15} /> Laboratories</span>
            <span><Waves size={15} /> Central Plant</span>
            <span><SunMedium size={15} /> Solar & Battery</span>
          </motion.div>
        </motion.div>

        <motion.div className="universityHeroVisual" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}>
          <div className="universityDashboard">
            <div className="universityDashboardTop">
              <div><strong>University AI Portfolio</strong><span>Campus operations overview</span></div>
              <b><Activity size={14} /> Live</b>
            </div>

            <div className="universityKpis">
              <div><small>University Campuses</small><strong>4</strong><span>Connected campus sites</span></div>
              <div><small>Asset Classes</small><strong>15</strong><span>Operational systems</span></div>
              <div><small>Opportunities</small><strong>47</strong><span>Current optimisation items</span></div>
              <div><small>After-Hours Load</small><strong>18%</strong><span>Portfolio opportunity</span></div>
            </div>

            <div className="universityInsightCard">
              <div className="universityInsightIcon"><Brain size={22} /></div>
              <div>
                <strong>AI Recommendation</strong>
                <p>Teaching Building B is maintaining full HVAC operation after classes. Apply an approved setback from 8:30 PM while retaining ventilation in occupied study areas.</p>
              </div>
            </div>

            <div className="universityApproval">
              <span><ShieldCheck size={18} /> Facilities approval required before execution</span>
              <button type="button">Review Action</button>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="universityStrip">
        <span>Connect</span><ArrowRight size={15} /><span>Detect</span><ArrowRight size={15} />
        <span>Analyse</span><ArrowRight size={15} /><span>Simulate</span><ArrowRight size={15} />
        <span>Approve</span><ArrowRight size={15} /><span>Measure</span>
      </section>

      <section className="universitySection universityChallengeSection">
        <div className="universitySectionHeader">
          <p>University Energy Challenge</p>
          <h2>Campuses Combine Diverse Buildings, Research Loads and Operational Schedules.</h2>
          <span>Universities must reduce costs and emissions while supporting teaching, research, accommodation, laboratories, recreation and 24/7 campus services.</span>
        </div>

        <div className="universityChallengeGrid">
          {[
            [Zap, "Complex Campus Demand", "Teaching, research, accommodation, sports and central plant create highly variable energy profiles."],
            [FlaskConical, "Research-Driven Loads", "Laboratories, fume extraction, server rooms and specialist equipment can operate continuously."],
            [Moon, "After-Hours Consumption", "Buildings and systems often continue operating after classes, events and normal campus activity have ended."],
            [Network, "Fragmented Campus Data", "BMS, meters, room bookings, timetables, DER and maintenance data often remain disconnected."],
          ].map(([Icon, title, text]) => (
            <article key={title}>
              <div className="universityIcon"><Icon size={24} /></div>
              <h3>{title}</h3><p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="universitySection universityAssetsSection">
        <div className="universitySectionHeader">
          <p>Connected University Assets</p>
          <h2>One AI Operating Layer Across Buildings, Research, Campus Services and DER.</h2>
          <span>The AI Energy Gateway connects existing university systems and available telemetry without requiring wholesale replacement of campus infrastructure.</span>
        </div>

        <motion.div className="universityAssetsGrid" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.08 }}>
          {assets.map(([Icon, title, text]) => (
            <motion.article className="universityAssetCard" variants={fadeUp} key={title}>
              <div className="universityIcon"><Icon size={23} /></div>
              <h3>{title}</h3><p>{text}</p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="universitySection universityScenarioSection">
        <div className="universitySectionHeader">
          <p>AI Optimisation Scenarios</p>
          <h2>Reduce Waste, Improve Campus Performance and Support Net-Zero Targets.</h2>
          <span>Each scenario uses the same AI Energy Gateway, Digital Twin, Decision Agents and human-in-the-loop approval workflow.</span>
        </div>

        <div className="universityScenarioGrid">
          {scenarios.map(([Icon, title, text, outcome]) => (
            <article className="universityScenarioCard" key={title}>
              <div className="universityScenarioTop">
                <div className="universityIcon"><Icon size={23} /></div>
                <span>AI Scenario</span>
              </div>
              <h3>{title}</h3><p>{text}</p>
              <div className="universityOutcome"><CheckCircle2 size={17} />{outcome}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="universitySection universityWorkflowSection" id="university-workflow">
        <div className="universitySectionHeader universitySectionHeaderLight">
          <p>End-to-End AI Workflow</p>
          <h2>From Campus Telemetry to Governed Operational Action.</h2>
          <span>EnergIQ converts operational data into explainable recommendations while keeping facilities, sustainability and campus teams in control.</span>
        </div>

        <div className="universityWorkflow">
          {workflow.map(([number, title, text]) => (
            <div className="universityWorkflowStep" key={number}>
              <b>{number}</b>
              <div><h3>{title}</h3><p>{text}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="universitySection universityPlatformSection">
        <div className="universityPlatformPanel">
          <div className="universityPlatformCopy">
            <p>Shared EnergIQ Platform</p>
            <h2>University AI Is an Industry Pack Built on the Shared EnergIQ Architecture.</h2>
            <span>The same AI Energy Gateway, Digital Twin, Decision Agents, human-in-the-loop governance and Savings Intelligence support all EnergIQ industry environments.</span>
            <ul>
              <li><CheckCircle2 size={18} /> Reusable AI Energy Gateway</li>
              <li><CheckCircle2 size={18} /> Shared Digital Twin architecture</li>
              <li><CheckCircle2 size={18} /> Configurable AI Decision Agents</li>
              <li><CheckCircle2 size={18} /> Human-in-the-loop governance</li>
              <li><CheckCircle2 size={18} /> Savings and ROI intelligence</li>
            </ul>
          </div>

          <div className="universityPlatformFlow">
            <div className="universityPlatformNode"><GraduationCap size={25} /><span>University Assets</span></div>
            <ChevronRight size={20} />
            <div className="universityPlatformNode featured"><Cpu size={25} /><span>AI Energy Gateway</span></div>
            <ChevronRight size={20} />
            <div className="universityPlatformNode"><Layers3 size={25} /><span>Digital Twin</span></div>
            <ChevronRight size={20} />
            <div className="universityPlatformNode"><Brain size={25} /><span>Decision Agents</span></div>
            <ChevronRight size={20} />
            <div className="universityPlatformNode"><ShieldCheck size={25} /><span>Approved Actions</span></div>
          </div>
        </div>
      </section>

      <section className="universitySection universityPilotSection" id="university-pilot">
        <div className="universityPilotBox">
          <div className="universityPilotCopy">
            <p>University Pilot Program</p>
            <h2>Start With One Campus, Building or High-Value Energy Problem.</h2>
            <span>A staged pilot validates data, optimisation scenarios, operational safeguards and measurable value before campus-wide deployment.</span>
            <button type="button" className="universityPrimaryBtn" onClick={handlePilotClick}>
              Discuss a University Pilot <ChevronRight size={18} />
            </button>
          </div>

          <div className="universityPilotList">
            <h3>Indicative Pilot Scope</h3>
            <ul>
              {pilotItems.map((item) => (
                <li key={item}><CheckCircle2 size={18} /><span>{item}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="universityCta">
        <div>
          <p>Now Onboarding Pilot Partners</p>
          <h2>Reduce Campus Energy Costs and Accelerate University Sustainability Outcomes.</h2>
          <span>EnergIQ is seeking universities, campus facility teams, sustainability leaders and technology partners for pilot collaboration.</span>
        </div>

        <div className="universityCtaActions">
          <button type="button" className="universityPrimaryBtn" onClick={handlePilotClick}>
            Request Pilot <ChevronRight size={18} />
          </button>
          
        </div>
      </section>
    </main>
  );
}
