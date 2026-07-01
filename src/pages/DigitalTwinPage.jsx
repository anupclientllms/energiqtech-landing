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
  BatteryCharging,
  Sun,
  PlugZap,
  Activity,
} from "lucide-react";

export default function DigitalTwinPage() {
  return (
    <main className="dtPage">
      <section className="dtHero">
        <div className="dtHeroContent">
          <p className="dtEyebrow">Digital Twin Intelligence</p>

          <h1>See operational energy events across connected assets.</h1>

          <p>
            EnergIQ Tech uses Digital Twins to visualise operational energy events
            across Building Management Systems, Solar PV, Battery Storage, EV
            Charging, Smart Meters and other connected assets, helping teams
            investigate root causes, simulate optimisation pathways and make
            confident operational decisions before action is taken.
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
          <p>Digital Twin Intelligence</p>
          <h2>Energy data becomes actionable when teams can see operational context.</h2>
        </div>

        <div className="dtGrid">
          <div className="dtCard">
            <Eye />
            <h3>Visual operational context</h3>
            <p>
              Move beyond dashboards to visualise operational events across
              buildings, zones and connected energy assets.
            </p>
          </div>

          <div className="dtCard">
            <MapPinned />
            <h3>Locate operational events faster</h3>
            <p>
              Map peak demand, DER performance, after-hours usage and equipment
              anomalies to the relevant building, zone or connected asset.
            </p>
          </div>

          <div className="dtCard">
            <Search />
            <h3>Investigate root causes</h3>
            <p>
              Correlate energy patterns with occupancy, operating schedules,
              equipment behaviour and connected energy asset performance.
            </p>
          </div>

          <div className="dtCard">
            <ShieldCheck />
            <h3>Support AI-assisted decisions</h3>
            <p>
              Use the Digital Twin as the operational context for governed AI
              recommendations and approval-based operational actions.
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
          <p>Connected asset intelligence</p>

          <h2>Connect energy events to physical assets and operational workflows.</h2>

          <span>
            Digital Twin workflows help teams understand whether energy waste,
            peak demand or asset inefficiency is caused by scheduling, occupancy
            mismatch, equipment behaviour, after-hours activity, demand pressure
            or connected energy asset performance.
          </span>

          <ul>
            <li>
              <CheckCircle2 /> Building, floor, zone and asset context
            </li>
            <li>
              <CheckCircle2 /> Operational event and anomaly mapping
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
          <p>Digital Twin Workflow</p>
          <h2>From anomaly detection to operational decision support.</h2>
        </div>

        <div className="dtSteps">
          {[
            "Connect buildings and energy assets",
            "Detect abnormal energy events",
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
          <p>Use Cases</p>
          <h2>Designed for commercial buildings and connected energy assets.</h2>
        </div>

        <div className="dtUseCaseGrid">
          <div>
            <Building2 />
            <strong>Commercial buildings</strong>
            <span>
              Identify operational waste across civic centres, libraries,
              depots, campuses and community facilities.
            </span>
          </div>

          <div>
            <Layers3 />
            <strong>Campuses and portfolios</strong>
            <span>
              Map energy events across buildings, zones, teaching spaces,
              operational areas and multi-site portfolios.
            </span>
          </div>

          <div>
            <Sun />
            <strong>Solar PV performance</strong>
            <span>
              Visualise generation behaviour, inverter performance and
              renewable utilisation within the operational context.
            </span>
          </div>

          <div>
            <BatteryCharging />
            <strong>Battery storage intelligence</strong>
            <span>
              Track charge, discharge, state of charge and optimisation
              opportunities for peak demand and energy cost reduction.
            </span>
          </div>

          <div>
            <PlugZap />
            <strong>EV charging optimisation</strong>
            <span>
              Understand charging demand, scheduling opportunities and load
              impact across connected sites.
            </span>
          </div>

          <div>
            <Activity />
            <strong>Smart meter intelligence</strong>
            <span>
              Analyse import, export, demand, tariffs and operational energy
              patterns across connected assets.
            </span>
          </div>

          <div>
            <Gauge />
            <strong>HVAC optimisation</strong>
            <span>
              Investigate comfort, scheduling, occupancy and control issues
              across connected building systems.
            </span>
          </div>

          <div>
            <Zap />
            <strong>Peak demand events</strong>
            <span>
              Locate and explain peak load events before recommending
              AI-assisted optimisation actions.
            </span>
          </div>
        </div>
      </section>

      <section className="dtProof">
        <div>
          <p>Pilot-ready capability</p>
          <h2>Demonstrate digital twin value before broader rollout.</h2>
          <span>
            EnergIQ Tech can be piloted with a focused building or site-level
            workflow before scaling across commercial buildings, campuses and
            connected energy infrastructure.
          </span>
        </div>

        <ul>
          <li>
            <CheckCircle2 /> Digital Twin investigation workflow
          </li>
          <li>
            <CheckCircle2 /> Peak demand, HVAC and after-hours scenarios
          </li>
          <li>
            <CheckCircle2 /> AI-generated optimisation recommendations
          </li>
          <li>
            <CheckCircle2 /> Operational impact, carbon and ROI review
          </li>
        </ul>
      </section>
    </main>
  );
}