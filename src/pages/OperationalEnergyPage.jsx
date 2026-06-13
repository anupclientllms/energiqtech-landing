import "../styles/OperationalEnergyPage.css";
import { Link } from "react-router-dom";
import {
  Activity,
  Gauge,
  Brain,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  Building2,
  Zap,
  Leaf,
} from "lucide-react";

export default function OperationalEnergyPage() {
  return (
    <main className="oePage">
      <section className="oeHero">
        <div className="oeHeroContent">
          <p className="oeEyebrow">Operational Energy Optimisation</p>

          <h1>
            Move from energy monitoring to measurable operational optimisation.
          </h1>

          <p>
            EnergIQ Tech helps councils, universities and facility teams detect
            energy waste, understand operational causes, simulate optimisation
            pathways and validate measurable impact before scaling across
            buildings and portfolios.
          </p>

          <div className="oeHeroActions">
            <Link to="/pilot-program" className="oePrimary">
              Explore Pilot Program <ChevronRight size={18} />
            </Link>

            <Link to="/" className="oeSecondary">
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <section className="oeSection">
        <div className="oeSectionHeader">
          <p>Why it matters</p>
          <h2>Most buildings do not have an energy problem. They have an operational visibility problem.</h2>
        </div>

        <div className="oeGrid">
          <div className="oeCard">
            <Activity />
            <h3>Detect abnormal usage</h3>
            <p>Identify after-hours load, HVAC inefficiency, demand spikes and unusual energy behaviour.</p>
          </div>

          <div className="oeCard">
            <Brain />
            <h3>Understand root causes</h3>
            <p>Move beyond charts by linking energy events to operational context, occupancy and building behaviour.</p>
          </div>

          <div className="oeCard">
            <Gauge />
            <h3>Simulate optimisation</h3>
            <p>Model practical changes such as scheduling, setpoint adjustments and peak-demand response.</p>
          </div>

          <div className="oeCard">
            <ShieldCheck />
            <h3>Approve before action</h3>
            <p>Support human-in-the-loop governance before operational changes are applied.</p>
          </div>
        </div>
      </section>

      <section className="oeDarkSection">
        <div className="oeWorkflow">
          <div>
            <p>Operational Workflow</p>
            <h2>Detect. Analyse. Recommend. Approve. Measure.</h2>
          </div>

          <div className="oeSteps">
            {[
              "Connect energy and building data",
              "Detect operational anomalies",
              "Analyse root causes",
              "Generate AI recommendations",
              "Approve optimisation actions",
              "Measure impact and ROI",
            ].map((item, index) => (
              <div className="oeStep" key={item}>
                <b>{index + 1}</b>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="oeSection">
        <div className="oeSectionHeader">
          <p>Use Cases</p>
          <h2>Designed for real facility and portfolio energy challenges.</h2>
        </div>

        <div className="oeUseCaseGrid">
          <div>
            <Zap />
            <strong>Peak demand optimisation</strong>
            <span>Identify avoidable peak events and model demand reduction actions.</span>
          </div>

          <div>
            <Building2 />
            <strong>After-hours energy waste</strong>
            <span>Detect buildings, zones or assets consuming energy outside operating hours.</span>
          </div>

          <div>
            <Gauge />
            <strong>HVAC operational efficiency</strong>
            <span>Find scheduling, setpoint, occupancy and equipment behaviour issues.</span>
          </div>

          <div>
            <Leaf />
            <strong>Carbon and ESG evidence</strong>
            <span>Translate optimisation opportunities into energy, cost and emissions impact.</span>
          </div>
        </div>
      </section>

      <section className="oeProof">
        <div>
          <p>Built for pilot validation</p>
          <h2>Start small, prove value, then scale.</h2>
          <span>
            EnergIQ Tech is designed for low-risk operational pilots across council
            buildings, universities, commercial facilities and portfolios.
          </span>
        </div>

        <ul>
          <li><CheckCircle2 /> Discovery and site review</li>
          <li><CheckCircle2 /> AI Energy Gateway deployment pathway</li>
          <li><CheckCircle2 /> Operational anomaly detection</li>
          <li><CheckCircle2 /> Savings and ROI validation</li>
        </ul>
      </section>
    </main>
  );
}