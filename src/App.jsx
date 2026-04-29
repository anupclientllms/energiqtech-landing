import "./App.css";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
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
    title: "Governed control",
    text: "Enable approval-based recommendations and future assisted control via the gateway.",
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
    title: "Traditional dashboards",
    points: ["Mostly reporting-focused", "Manual root-cause analysis", "Limited action pathway"],
  },
  {
    title: "Large building automation vendors",
    points: ["Strong infrastructure layer", "Often vendor-specific", "Large implementation footprint"],
  },
  {
    title: "EnergIQ Tech",
    points: ["Device-led AI gateway", "AI insights + action pathway", "Outcome-focused pilot model"],
    featured: true,
  },
];

export default function App() {
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
      <nav className="nav">
        <a className="brand" href="#top">
          <div className="logo">⚡</div>
          <div>
            <strong>EnergIQ Tech</strong>
            <span>AI-Powered Energy Optimisation</span>
          </div>
        </a>

        <div className="navActions">
          <a href="#features">Features</a>
          <a href="#gateway">Gateway</a>
          <a href="#digital-twin">Digital Twin</a>
          <a href="#comparison">Why Us</a>
          <button type="button" onClick={openPilotModal} className="navBtn">
            Contact
          </button>
        </div>
      </nav>

      <section className="hero" id="top">
        <motion.div className="heroText" variants={stagger} initial="hidden" animate="show">
          <motion.div className="badge" variants={fadeUp}>
            <Sparkles size={16} /> Device-Led • SaaS-Based • Outcome-Focused
          </motion.div>

          <motion.h1 variants={fadeUp}>
            AI energy optimisation for buildings, councils and portfolios.
          </motion.h1>

          <motion.p variants={fadeUp}>
            EnergIQ Tech combines an AI Energy Gateway, real-time analytics and guided control workflows
            to reduce energy cost, optimise demand and prove measurable ROI.
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
            <div><strong>30 days</strong><span>pilot validation</span></div>
            <div><strong>10–20%</strong><span>target savings</span></div>
            <div><strong>Edge + AI</strong><span>device-led architecture</span></div>
          </motion.div>
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

      <motion.section className="section" id="features" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <motion.div className="sectionHeader" variants={fadeUp}>
          <p>Core Platform Capabilities</p>
          <h2>From passive reporting to AI-driven operational control.</h2>
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

      <motion.section className="section dark" id="gateway" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
        <motion.div className="sectionHeader" variants={fadeUp}>
          <p>AI Energy Gateway</p>
          <h2>Edge intelligence deployed inside the building.</h2>
        </motion.div>

        <motion.div className="gatewayLayout" variants={fadeUp}>
          <div className="deviceBox">
            <Cpu size={38} />
            <strong>AI Energy Gateway</strong>
            <span>On-site data processing • Secure integration • Edge AI</span>
          </div>

          <div className="flow">
            <span><Building2 size={20} /> BMS / IoT / Meters</span>
            <b>→</b>
            <span><Cpu size={20} /> AI Energy Gateway</span>
            <b>→</b>
            <span><LineChart size={20} /> EnergIQ Platform</span>
          </div>
        </motion.div>
      </motion.section>

      <motion.section className="section twinSection" id="digital-twin" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
        <motion.div className="sectionHeader" variants={fadeUp}>
          <p>Digital Twin Intelligence</p>
          <h2>See where energy issues happen - not just that they happened.</h2>
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
            <h3>Spatial intelligence for facility teams.</h3>
            <p>
              EnergIQ maps anomalies to buildings, levels, zones and rooms so operators can prioritise action quickly.
            </p>
            <ul>
              <li><CheckCircle2 size={18} /> Building, zone and room-level context</li>
              <li><CheckCircle2 size={18} /> Peak demand, after-hours and low occupancy scenarios</li>
              <li><CheckCircle2 size={18} /> Future-ready for assisted control workflows</li>
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
          <h2>Built to complement existing infrastructure - not replace it.</h2>
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

      <section className="pilot" id="pilot">
        <div>
          <p>Pilot Model</p>
          <h2>Device-led pilot designed to prove measurable value quickly.</h2>
          <p>
            Start with a structured gateway pilot, validate savings opportunities, then scale into SaaS-based portfolio optimisation.
          </p>
        </div>

        <div className="pilotCard">
          <h3>Phase 1: Pilot</h3>
          <ul>
            <li>Gateway deployed at 1–2 sites</li>
            <li>Time-bound validation period</li>
            <li>AI insights and recommendations</li>
            <li>ROI and cost-saving evidence</li>
          </ul>
        </div>

        <div className="pilotCard green">
          <h3>Phase 2: Scale</h3>
          <ul>
            <li>SaaS subscription model</li>
            <li>Expanded gateway deployment</li>
            <li>Alerts, governance and reporting</li>
            <li>Portfolio-wide optimisation</li>
          </ul>
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

      <footer>
        <strong>EnergIQ Tech</strong>
        <span>Powered by Automation Spectrum Pty Ltd</span>
      </footer>

      {pilotModalOpen && (
        <div className="modalOverlay" onClick={closePilotModal}>
          <div className="pilotModal" onClick={(e) => e.stopPropagation()}>
            <button className="modalClose" onClick={closePilotModal} type="button">
              ×
            </button>

            {!submitted ? (
              <>
                <div className="modalBadge">Pilot Program Active</div>

                <h2>Start a pilot discussion</h2>

                <p>
                  We’re onboarding early partners to validate measurable energy savings,
                  demand optimisation and ROI using the AI Energy Gateway.
                </p>

                <form onSubmit={handlePilotSubmit} className="pilotForm">
                  <input type="hidden" name="to_email" value="anup.clientllms@gmail.com" />

                  <input name="name" placeholder="Name" required />
                  <input name="email" type="email" placeholder="Work Email" required />
                  <input name="organisation" placeholder="Organisation" required />
                  <textarea name="message" placeholder="Use case / building type / pilot interest" />

                  <button type="submit" className="primary modalSubmit" disabled={sending}>
                    {sending ? "Sending..." : "Request Pilot Discussion"}
                  </button>
                </form>

                <span className="modalNote">
                  Limited pilot slots available for councils, facilities and building portfolios.
                </span>
              </>
            ) : (
              <div className="successBox">
                <div className="modalBadge">Request Received</div>
                <h2>Thanks - we’ll get back within 24 hours.</h2>
                <p>
                  Your pilot discussion request has been sent to EnergIQ Tech.
                </p>
                <button className="primary modalSubmit" onClick={closePilotModal}>
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}