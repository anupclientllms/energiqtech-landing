import "../styles/DigitalTwinPage.css";
import { Link } from "react-router-dom";
import {
  Building2,
  CheckCircle2,
  ChevronRight,
  Eye,
  Layers3,
  MapPinned,
  Search,
  Zap,
  Gauge,
  ShieldCheck,
} from "lucide-react";

export default function DigitalTwinPage() {
  return (
    <main className="dtPage">
      <section className="dtHero">
        <div className="dtHeroContent">
          <p className="dtEyebrow">Digital Twin Intelligence</p>

          <h1>
            See where energy issues occur across buildings, zones and assets.
          </h1>

          <p>
            EnergIQ Tech uses digital twin workflows to help facility teams
            visualise operational energy events, investigate root causes and
            simulate optimisation pathways before action is taken.
          </p>

          <div className="dtHeroActions">
            <Link to="/pilot-program" className="dtPrimary">
              Explore Pilot Program <ChevronRight size={18} />
            </Link>

            <Link to="/operational-energy-optimisation" className="dtSecondary">
              Operational Optimisation
            </Link>
          </div>
        </div>
      </section>

      <section className="dtSection">
        <div className="dtSectionHeader">
          <p>Why digital twin</p>
          <h2>
            Energy data becomes more useful when teams can see where the issue is happening.
          </h2>
        </div>

        <div className="dtGrid">
          <div className="dtCard">
            <Eye />
            <h3>Visual operational context</h3>
            <p>
              Move from spreadsheet-style energy reporting to building, zone and
              asset-level investigation.
            </p>
          </div>

          <div className="dtCard">
            <MapPinned />
            <h3>Locate anomalies faster</h3>
            <p>
              Map peak demand, after-hours usage and HVAC inefficiencies to the
              relevant building or zone.
            </p>
          </div>

          <div className="dtCard">
            <Search />
            <h3>Investigate root causes</h3>
            <p>
              Combine energy patterns with occupancy, operating schedules and
              asset behaviour.
            </p>
          </div>

          <div className="dtCard">
            <ShieldCheck />
            <h3>Support governed action</h3>
            <p>
              Use the twin as a decision layer before approving operational
              changes.
            </p>
          </div>
        </div>
      </section>

      <section className="dtTwinShowcase">
        <div className="dtTwinVisual">
          <div className="dtBuilding">
            <div className="dtTower dtTowerA">
              {Array.from({ length: 15 }).map((_, i) => (
                <span key={i} className={i === 8 ? "hot" : ""} />
              ))}
            </div>

            <div className="dtTower dtTowerB">
              {Array.from({ length: 15 }).map((_, i) => (
                <span key={i} className={i === 5 ? "warn" : ""} />
              ))}
            </div>

            <div className="dtBase" />

            <div className="dtCallout">
              <strong>Peak demand event</strong>
              <span>Level 2 • HVAC load anomaly</span>
              <small>AI recommends schedule and setpoint review</small>
            </div>
          </div>
        </div>

        <div className="dtTwinText">
          <p>Building intelligence layer</p>

          <h2>
            Connect energy events to physical spaces and operational workflows.
          </h2>

          <span>
            Digital twin workflows help facility teams understand whether energy
            waste is coming from scheduling, occupancy mismatch, equipment
            behaviour, after-hours activity or demand pressure.
          </span>

          <ul>
            <li>
              <CheckCircle2 /> Building, floor, zone and asset context
            </li>
            <li>
              <CheckCircle2 /> Operational event mapping
            </li>
            <li>
              <CheckCircle2 /> AI-assisted investigation workflow
            </li>
            <li>
              <CheckCircle2 /> Human-in-the-loop action approval
            </li>
          </ul>
        </div>
      </section>

      <section className="dtDarkSection">
        <div className="dtWorkflowHeader">
          <p>Digital twin workflow</p>
          <h2>
            From anomaly detection to operational decision support.
          </h2>
        </div>

        <div className="dtSteps">
          {[
            "Detect abnormal energy event",
            "Locate building, zone or asset",
            "Analyse operational context",
            "Simulate optimisation pathway",
            "Approve recommended action",
            "Measure operational impact",
          ].map((item, index) => (
            <div className="dtStep" key={item}>
              <b>{index + 1}</b>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="dtSection">
        <div className="dtSectionHeader">
          <p>Use cases</p>
          <h2>
            Designed for councils, universities, campuses and building portfolios.
          </h2>
        </div>

        <div className="dtUseCaseGrid">
          <div>
            <Building2 />
            <strong>Council buildings</strong>
            <span>
              Identify operational waste across civic centres, libraries,
              depots and community facilities.
            </span>
          </div>

          <div>
            <Layers3 />
            <strong>University campuses</strong>
            <span>
              Map energy events across buildings, zones, teaching spaces and
              operational areas.
            </span>
          </div>

          <div>
            <Gauge />
            <strong>HVAC optimisation</strong>
            <span>
              Investigate comfort, scheduling, occupancy and control issues.
            </span>
          </div>

          <div>
            <Zap />
            <strong>Peak demand events</strong>
            <span>
              Locate and explain peak load events before recommending action.
            </span>
          </div>
        </div>
      </section>

      <section className="dtProof">
        <div>
          <p>Pilot-ready capability</p>
          <h2>
            Demonstrate digital twin value before portfolio-wide rollout.
          </h2>
          <span>
            EnergIQ Tech can be piloted with a focused building or site-level
            workflow before scaling across multiple facilities or campuses.
          </span>
        </div>

        <ul>
          <li><CheckCircle2 /> Digital twin investigation workflow</li>
          <li><CheckCircle2 /> Peak demand and after-hours scenarios</li>
          <li><CheckCircle2 /> AI-generated optimisation recommendations</li>
          <li><CheckCircle2 /> Operational impact and ROI review</li>
        </ul>
      </section>
    </main>
  );
}