import "../styles/HomePage.css";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import {
  Activity,
  BarChart3,
  Brain,
  Building2,
  CheckCircle2,
  ChevronRight,
  Cpu,
  Gauge,
  Layers3,
  Leaf,
  LineChart,
  Lock,
  Network,
  ShieldCheck,
  Sparkles,
  Zap,
  X,
  Search,
  Target,
  ClipboardCheck,
  Handshake,
  Eye,
  MapPinned,
  Power,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const features = [
  {
    icon: Activity,
    title: "AI anomaly detection",
    text: "Detect abnormal energy usage across HVAC, lighting, meters and connected building systems.",
  },
  {
    icon: BarChart3,
    title: "Dynamic baselines",
    text: "Compare actual performance against adaptive operating baselines to identify waste.",
  },
  {
    icon: Brain,
    title: "Root cause intelligence",
    text: "Explain why spikes happen instead of only showing charts and dashboards.",
  },
  {
    icon: Gauge,
    title: "Demand optimisation",
    text: "Identify peak-demand events, inefficient schedules and cost-saving actions.",
  },
  {
    icon: Leaf,
    title: "Carbon visibility",
    text: "Convert energy variance into CO₂ impact and ESG reporting evidence.",
  },
  {
    icon: ShieldCheck,
    title: "AI-assisted operational actions",
    text: "Approve and trigger governed operational actions across HVAC, demand-response and connected building infrastructure through AI-assisted workflows.",
  },
  
];

const advanced = [
  "Predictive insights",
  "Simulation / what-if scenarios",
  "Alerts and prioritisation",
  "Automated ESG / ROI reports",
  "Governance and approval workflows",
  "Portfolio-wide intelligence",
  "BMS / IoT / meter integration",
  "AI assistant interface",
];

const comparison = [
  {
    title: "Reporting-only platforms",
    points: ["Mostly reporting-focused", "Manual root-cause analysis", "Limited action pathway"],
  },
  {
    title: "Traditional automation ecosystems",
    points: ["Strong infrastructure layer", "Often vendor-specific", "Large implementation footprint"],
  },
  {
    title: "EnergIQ Tech",
    points: ["Device-led AI gateway", "Operational intelligence","Governed action", "Outcome-focused pilot model", "Vendor-neutral integration"],
    featured: true,
  },
];

const councilChallenges = [
  {
    icon: Eye,
    title: "Visibility gaps",
    text: "See where energy waste, abnormal usage and after-hours activity are occurring.",
  },
  {
    icon: Zap,
    title: "Peak demand pressure",
    text: "Identify demand spikes early and understand the operational cause.",
  },
  {
    icon: Gauge,
    title: "HVAC optimisation",
    text: "Find schedule, occupancy and control issues across HVAC operations.",
  },
  {
    icon: Leaf,
    title: "Energy & emissions evidence",
    text: "Support sustainability reporting with clearer operational impact data.",
  },
];

const discoverySteps = [
  "Review current facilities, meters, BMS capability and available data.",
  "Identify visibility gaps, inefficiencies and high-priority buildings.",
  "Map AI optimisation opportunities across HVAC, demand and after-hours usage.",
  "Define a low-risk pilot scope before broader rollout.",
];

const operationalOutcomes = [
  "Facility visibility",
  "Energy waste detection",
  "Peak demand reduction",
  "HVAC optimisation",
  "Portfolio intelligence",
  "Cost and emissions insight",
];

const validationPoints = [
  "Demonstrated to Victorian local government stakeholders",
  "Operational energy optimisation workflows reviewed with facilities and sustainability teams",
  "Pilot discussions underway across councils, universities and commercial facilities",
  "AI Energy Gateway and Digital Twin concepts validated through stakeholder feedback",
];

export default function HomePage() {
  const [pilotModalOpen, setPilotModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const openPilotModal = () => setPilotModalOpen(true);
  const closePilotModal = () => setPilotModalOpen(false);

  const handlePilotSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    const form = e.currentTarget;

    try {
      await emailjs.sendForm(
        "service_vb1aryn",
        "template_c9ag4vd",
        form,
        "qCBx0dmPttChUW8LU",
      );

      setSubmitted(true);
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("Something went wrong. Please email anup.clientllms@gmail.com directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="page">
      

      <section className="hero" id="top">
        <motion.div className="heroText" variants={stagger} initial="hidden" animate="show">
          <motion.div className="badge" variants={fadeUp}>
            <Sparkles size={16} /> Device-Led • SaaS-Based • Outcome-Focused
          </motion.div>

          <motion.h1 variants={fadeUp}>
            AI-powered energy optimisation for buildings, councils and portfolios.
          </motion.h1>

          <motion.p variants={fadeUp}>
            EnergIQ Tech helps facility teams identify operational inefficiencies, simulate optimisation pathways and 
            execute AI-assisted operational actions across buildings, HVAC systems and energy infrastructure through governed workflows and connected building systems.
            Validate measurable optimisation opportunities within 30 days before scaling.
          </motion.p>

          <motion.div className="heroButtons" variants={fadeUp}>
            <button type="button" onClick={openPilotModal} className="primary">
              Request Pilot <ChevronRight size={18} />
            </button>

            <a href="#platform-preview" className="secondary">
              View Platform
            </a>
          </motion.div>

          <motion.div className="metrics" variants={fadeUp}>
            <div><strong>30 day</strong><span>ROI Validation Pilot</span></div>
            <div><strong>10–20%</strong><span>proven savings</span></div>
            <div><strong>Edge + AI</strong><span>device-led architecture</span></div>
          </motion.div>

          <motion.p variants={fadeUp}>
            No long-term commitment - scale only after measurable savings are proven.
          </motion.p>
        </motion.div>

        <motion.div
          className="heroVisual"
          id="platform-preview"
          initial={{ opacity: 0, y: 42, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
        >
          <div className="dashboardCard">
            <div className="cardTop">
              <span>Live AI Energy Overview</span>
              <b>High Priority</b>
            </div>

            <div className="kpiGrid">
              <div><small>Cost Impact</small><strong>$2,840</strong><span>+18.6% vs baseline</span></div>
              <div><small>Energy Use</small><strong>9,620 kWh</strong><span>+56.3% vs baseline</span></div>
              <div><small>Peak Demand</small><strong>246 kW</strong><span>+32.1% vs baseline</span></div>
              <div><small>Carbon</small><strong>1,120 kg</strong><span>CO₂e variance</span></div>
            </div>

            <div className="miniChart">
              <span style={{ height: "46%" }}></span>
              <span style={{ height: "62%" }}></span>
              <span style={{ height: "40%" }}></span>
              <span style={{ height: "86%" }}></span>
              <span style={{ height: "72%" }}></span>
              <span style={{ height: "54%" }}></span>
            </div>

            <div className="insight">
              <b>AI Insight</b>
              <p>HVAC demand spike detected. Recommend setpoint review, scheduling optimisation and peak-load simulation.</p>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="strip">
        <span>Detect</span><span>Explain</span><span>Recommend</span><span>Simulate</span><span>Control</span><span>Prove ROI</span>
      </section>

      <motion.section
        className="section problemFirstSection"
        id="problem-first"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="sectionHeader compactHeader" variants={fadeUp}>
          <p>Problem-First Approach</p>
          <h2>Understand the operational problem before applying AI.</h2>
          <span>
            EnergIQ Tech works with councils, facility teams and building operators to identify
            real operational pain points before defining the right optimisation pathway.
          </span>
        </motion.div>

        <div className="problemGrid">
          {councilChallenges.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div className="problemCard" variants={fadeUp} key={item.title}>
                <div className="problemIcon"><Icon size={22} /></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      <section className="section discoveryOptimised">
        <div className="discoveryPanel">
          <div className="discoveryLeft">
            <p>Operational Discovery & Pilot Workshops</p>
            <h2>From uncertainty to clear optimisation priorities.</h2>
            <span>
              We help teams identify visibility gaps, inefficient operations and practical
              AI-led optimisation opportunities before a pilot is scoped.
            </span>
            <button type="button" onClick={openPilotModal} className="primary">
              Discuss Operational Discovery <ChevronRight size={18} />
            </button>
          </div>

          <div className="discoveryRight">
            {discoverySteps.map((step, index) => (
              <div className="stepCard" key={step}>
                <b>{index + 1}</b>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section outcomeFlowSection">
        <div className="flowCard">
          <Target size={34} />
          <p>AI as the Enabler</p>
          <h2>Problem → Insight → Optimisation → Measurable Impact</h2>
          <span>
            EnergIQ Tech applies AI to help teams detect anomalies, understand root causes,
            simulate actions and estimate operational impact.
          </span>
        </div>

        <div className="outcomeGrid">
          {operationalOutcomes.map((item) => (
            <div className="outcomePill" key={item}>
              <CheckCircle2 size={17} />
              {item}
            </div>
          ))}
        </div>
      </section>
      
      <motion.section className="section" id="features" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <motion.div className="sectionHeader" variants={fadeUp}>
          <p>Core Platform Capabilities</p>
          <h2>From passive monitoring to AI-assisted operational control.</h2>
        </motion.div>

        <div className="featureGrid">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div className="featureCard" variants={fadeUp} key={item.title}>
                <div className="icon"><Icon size={24} /></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      <section className="section actionLayerSection">
        <div className="actionLayerHeader">
          <p>AI-assisted operational action layer</p>

          <h2>
            Move from operational insight to AI-assisted action.
          </h2>

          <span>
            EnergIQ Tech enables facility teams to move beyond dashboards and
            recommendations by supporting AI-assisted operational actions across
            connected building systems, HVAC infrastructure and energy workflows
            through approval-based execution pathways.
          </span>
        </div>

        <div className="actionExecutionGrid">

          <div className="executionCard">
            <div className="executionIcon">
              <ShieldCheck size={26} />
            </div>

            <h3>Approve HVAC optimisation actions</h3>

            <p>
              Review and approve AI-assisted HVAC optimisation pathways before
              operational execution.
            </p>
          </div>

          <div className="executionCard">
            <div className="executionIcon">
              <Zap size={26} />
            </div>

            <h3>Execute peak-demand response workflows</h3>

            <p>
              Trigger operational demand-response workflows during peak demand
              periods to reduce load and operating costs.
            </p>
          </div>

          <div className="executionCard">
            <div className="executionIcon">
              <Power size={26} />
            </div>

            <h3>Trigger after-hours operational controls</h3>

            <p>
              Execute governed operational actions across lighting, HVAC and
              connected infrastructure during abnormal after-hours usage.
            </p>
          </div>

          <div className="executionCard">
            <div className="executionIcon">
              <CheckCircle2 size={26} />
            </div>

            <h3>Validate operational impact and savings</h3>

            <p>
              Measure operational outcomes, estimated savings, carbon reduction
              and optimisation effectiveness after execution.
            </p>
          </div>

        </div>
      </section>

      <motion.section className="section dark" id="gateway" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
        <motion.div className="sectionHeader" variants={fadeUp}>
          <p>AI Energy Gateway</p>
          <h2>Real-time operational intelligence at the edge.</h2>
        </motion.div>

        <motion.div className="gatewayLayout" variants={fadeUp}>
          <div className="deviceBox">
            <Cpu size={38} />
            <strong>AI Energy Gateway</strong>
            <span>On-site data processing • Secure integration • Edge AI • Governed operational execution</span>
          </div>

          <div className="flow">
            <span><Building2 size={20} /> BMS / IoT / Meters</span>
            <b>→</b>
            <span><Cpu size={20} /> AI Energy Gateway</span>
            <b>→</b>
            <span><LineChart size={20} /> EnergIQ Platform</span>
            <b>→</b>
            <span><ShieldCheck size={20} /> AI-assisted Operational Actions</span>
          </div>
        </motion.div>
      </motion.section>
      <section className="section pathwaySection">

        <div className="sectionHeader">
          <p>Deployment Pathway</p>

          <h2>
            A low-risk pathway from pilot to portfolio-wide deployment.
          </h2>
        </div>

        <div className="pathwayFlow">

          <div>
            <b>1</b>
            <h3>Discovery</h3>
            <p>Review facilities, systems and operational challenges.</p>
          </div>

          <div>
            <b>2</b>
            <h3>Pilot</h3>
            <p>Deploy AI Gateway and validate optimisation opportunities.</p>
          </div>

          <div>
            <b>3</b>
            <h3>Measure</h3>
            <p>Assess operational impact, ROI and savings potential.</p>
          </div>

          <div>
            <b>4</b>
            <h3>Scale</h3>
            <p>Expand across buildings, campuses and portfolios.</p>
          </div>

        </div>

      </section>
      <section className="section proofSection">

        <div className="sectionHeader">
          <p>Pilot Proof Points</p>

          <h2>
            Demonstrating operational energy optimisation workflows.
          </h2>

          <span>
            EnergIQ Tech has developed and demonstrated core operational
            optimisation workflows across AI Energy Gateway,
            Digital Twin and governed AI-assisted operational actions.
          </span>

        </div>

        <div className="proofGrid">

          <div className="proofCard">
            <strong>AI Energy Gateway Prototype</strong>
            <span>
              Prototype architecture completed and operational workflows demonstrated.
            </span>
          </div>

          <div className="proofCard">
            <strong>Digital Twin Workflow</strong>
            <span>
              Building-level anomaly investigation and optimisation simulations demonstrated.
            </span>
          </div>

          <div className="proofCard">
            <strong>Human-in-the-loop Governance</strong>
            <span>
              Approval-based operational actions integrated into optimisation workflows.
            </span>
          </div>

          <div className="proofCard">
            <strong>Energy Optimisation Use Cases</strong>
            <span>
              Peak demand, HVAC optimisation and after-hours energy scenarios validated.
            </span>
          </div>

        </div>

      </section>

      <section id="case-studies" className="section">

        <div className="sectionHeader">
          <p>Pilot Demonstration</p>

          <h2>
            Example operational energy optimisation workflow.
          </h2>

          <span>
            Illustrative example showing how EnergIQ Tech identifies,
            investigates and optimises operational energy events.
          </span>
        </div>

        <div className="caseStudyCard">

          <h3>
            Representative Council Energy Optimisation Scenario
          </h3>

          <div className="caseStudyPoints">

            <div>Operational energy review</div>

            <div>Peak demand anomaly detection</div>

            <div>Digital twin investigation workflow</div>

            <div>AI-generated optimisation recommendations</div>

            <div>Human-in-the-loop approval process</div>

            <div>Estimated operational impact assessment</div>

          </div>

        </div>

      </section>

      <motion.section className="section twinSection" id="digital-twin" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
        <motion.div className="sectionHeader" variants={fadeUp}>
          <p>Digital Twin Intelligence</p>
          <h2>See where operational issues occur in real time.</h2>
        </motion.div>

        <motion.div className="twinGrid" variants={fadeUp}>
          <div className="buildingTwin">
            <div className="tower towerA">{Array.from({ length: 12 }).map((_, i) => <span key={i} className={i === 7 ? "hot" : ""} />)}</div>
            <div className="tower towerB">{Array.from({ length: 12 }).map((_, i) => <span key={i} className={i === 4 ? "warn" : ""} />)}</div>
            <div className="podium" />
            <div className="callout">
              <b>After-hours inefficiency</b>
              <span>Tower A • Level 2 • Meeting Room 3</span>
              <small>Lighting + HVAC still active</small>
            </div>
          </div>

          <div className="twinText">
            <h3>Spatial visibility across buildings, zones and assets.</h3>
            <p>
              EnergIQ maps anomalies, inefficiencies and operational events to buildings, zones and assets for faster operational visibility and investigation.
            </p>
            <ul>
              <li><CheckCircle2 size={18} /> Building, zone and room-level context</li>
              <li><CheckCircle2 size={18} /> Peak demand, after-hours and low occupancy scenarios</li>
              <li><CheckCircle2 size={18} /> Connected digital context across facilities and assets</li>
            </ul>
          </div>
        </motion.div>
      </motion.section>

      <section className="section advancedSection">
        <div className="sectionHeader">
          <p>Advanced Capabilities</p>
          <h2>Designed to scale from pilot to portfolio-wide optimisation.</h2>
        </div>

        <div className="advancedGrid">
          {advanced.map((item) => <div key={item}>{item}</div>)}
        </div>
      </section>

      <motion.section className="section comparisonSection" id="comparison" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
        <motion.div className="sectionHeader" variants={fadeUp}>
          <p>Why EnergIQ Tech</p>
          <h2>Built around existing infrastructure, workflows and operational teams.</h2>
        </motion.div>

        <div className="comparisonGrid">
          {comparison.map((item) => (
            <motion.div className={`comparisonCard ${item.featured ? "featured" : ""}`} variants={fadeUp} key={item.title}>
              <h3>{item.title}</h3>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>
                    {item.featured ? <CheckCircle2 size={18} /> : <ChevronRight size={18} />}
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <div className="futureVisionPanel">
        <div className="futureVisionContent">

          <p className="visionLabel">
            LOOKING AHEAD
          </p>

          <h3>
            Building the Future of AI-Powered Energy Operations
          </h3>

          <p>
            EnergIQ Tech combines operational intelligence, digital twins,
            AI agents, human-in-the-loop governance and edge computing to help
            organisations move beyond monitoring and reporting toward intelligent,
            measurable and continuously optimised energy operations.
          </p>

          <p className="visionStatement">
            Our long-term vision is to evolve EnergIQ Tech into an
            <strong> AI-driven Energy Operating System </strong>
            capable of continuously monitoring, analysing, optimising and coordinating energy operations across 
            facilities, campuses, portfolios and critical infrastructure at scale.
          </p>

        </div>
      </div>
      <section className="section validationSection">

        <div className="sectionHeader">
          <p>Customer Validation</p>

          <h2>
            Built through direct engagement with facility and sustainability stakeholders.
          </h2>

          <span>
            EnergIQ Tech has been developed through discussions,
            demonstrations and feedback from councils,
            universities and commercial property stakeholders.
          </span>
        </div>

        <div className="validationGrid">
          {validationPoints.map((item) => (
            <div className="validationCard" key={item}>
              <CheckCircle2 size={20}/>
              <span>{item}</span>
            </div>
          ))}
        </div>

      </section>
      <section className="pilot" id="pilot">
        <div>
          <p>Pilot Model</p>
          <h2>Low-risk pilot model designed to validate operational value quickly.</h2>
          <p>
            Start with a structured operational pilot, validate optimisation opportunities and measurable outcomes, then scale progressively across facilities and portfolios.
          </p>
        </div>

        <div className="pilotCard">
          <h3>Phase 1: Operational Pilot</h3>
          <ul>
            <li>Gateway deployed at 1–2 sites</li>
            <li>Time-bound validation period</li>
            <li>Operational visibility and optimisation insights</li>
            <li>ROI and cost-saving evidence</li>
          </ul>
        </div>

        <div className="pilotCard green">
          <h3>Phase 2: Portfolio Scale</h3>
          <ul>
            <li>SaaS subscription model</li>
            <li>Expanded gateway deployment</li>
            <li>Governance workflows and operational reporting</li>
            <li>Portfolio-wide operational intelligence</li>
          </ul>
        </div>
      </section>

      <section className="section tractionSection">

        <div className="sectionHeader">
          <p>Market Engagement</p>

          <h2>
            Building momentum through pilot discussions and industry engagement.
          </h2>
        </div>

        <div className="tractionGrid">

          <div>
            <strong>Local Government</strong>
            <span>
              Demonstrations and discussions with Victorian councils.
            </span>
          </div>

          <div>
            <strong>Universities</strong>
            <span>
              Engagement with sustainability and facilities teams.
            </span>
          </div>

          <div>
            <strong>Commercialisation</strong>
            <span>
              Advisor-supported commercialisation and market validation activities.
            </span>
          </div>

          <div>
            <strong>Pilot Expansion</strong>
            <span>
              Building pilot opportunities across public and commercial sectors.
            </span>
          </div>

        </div>

      </section>

      <section className="cta">
        <h2>Now onboarding pilot customers.</h2>
        <p>
          Built for councils, commercial facilities and building portfolios seeking measurable energy savings and carbon visibility.
        </p>

        <button type="button" onClick={openPilotModal} className="primary">
          Discuss Pilot <ChevronRight size={18} />
        </button>
      </section>

      

      
    </main>
  );
}