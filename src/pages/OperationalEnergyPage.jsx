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
            Move beyond monitoring to AI-driven operational optimisation.
          </h1>

          <p>
            EnergIQ Tech helps councils, universities and commercial organisations detect operational inefficiencies, 
            analyse connected energy assets, simulate optimisation scenarios 
            and execute AI-assisted workflows across buildings, campuses and energy infrastructure.
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
          <h2>Move beyond monitoring. Unlock intelligent energy operations.</h2>
        </div>

        <div className="oeGrid">
          <div className="oeCard">
            <Activity />
            <h3>Detect operational anomalies</h3>
            <p>Identify abnormal energy usage across buildings, Solar PV, Battery Storage, EV Charging, Smart Meters and connected infrastructure.</p>
          </div>

          <div className="oeCard">
            <Brain />
            <h3>Understand root causes</h3>
            <p>Explain operational events by combining telemetry, occupancy, weather, equipment behaviour and connected asset intelligence.</p>
          </div>

          <div className="oeCard">
            <Gauge />
            <h3>Optimise connected assets</h3>
            <p>Simulate HVAC schedules, battery dispatch, EV charging strategies and demand-response opportunities before implementation.</p>
          </div>

          <div className="oeCard">
            <ShieldCheck />
            <h3>Approve before action</h3>
            <p>Govern AI-assisted actions across buildings and connected energy assets through approval-based operational workflows.</p>
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
              "Connect buildings and energy assets",
              "Detect operational anomalies",
              "Explain root causes",
              "Optimise with AI recommendations",
              "Approve & execute actions",
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
          <h2>Designed for commercial buildings and connected energy assets.</h2>
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
            <span>Detect buildings, zones and connected assets consuming energy outside operating hours.</span>
          </div>

          <div>
            <Gauge />
            <strong>Connected asset optimisation</strong>
            <span>Optimise HVAC, Solar PV, Battery Storage and EV Charging using AI-driven operational recommendations.</span>
          </div>

          <div>
            <Leaf />
            <strong>Energy, carbon & grid intelligence</strong>
            <span>Quantify operational cost, carbon emissions and grid impact across connected energy assets.</span>
          </div>
        </div>
      </section>

      <section className="oeProof">
        <div>
          <p>Built for pilot validation</p>
          <h2>Start small, prove value, then scale.</h2>
          <span>
            EnergIQ Tech is designed for low-risk operational pilots across commercial buildings, campuses and connected energy infrastructure, 
            enabling organisations to validate measurable operational, financial and sustainability outcomes before scaling.
          </span>
        </div>

        <ul>
          <li><CheckCircle2 /> Discovery & Connected Asset Assessment</li>
          <li><CheckCircle2 /> AI Energy Gateway & Secure Integration</li>
          <li><CheckCircle2 /> AI Operational Intelligence & Recommendations</li>
          <li><CheckCircle2 /> Measurable ROI, Carbon & Operational Outcomes</li>
        </ul>
      </section>
    </main>
  );
}