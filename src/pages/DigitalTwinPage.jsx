import "../styles/DigitalTwinPage.css";
import { Link } from "react-router-dom";

import {
  Activity,
  BatteryCharging,
  Building2,
  CheckCircle2,
  ChevronRight,
  Eye,
  Gauge,
  Layers3,
  Leaf,
  MapPinned,
  PlugZap,
  Search,
  ShieldCheck,
  Sun,
  Zap,
} from "lucide-react";


export default function DigitalTwinPage() {
  return (
    <main className="dtPage">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="dtHero">
        <div className="dtHeroContent">

          <p className="dtEyebrow">
            Digital Twin Intelligence
          </p>

          <h1>
            Visualise Energy Waste. Reduce Costs & CO₂ Emissions.
          </h1>

          <p>
            EnerG IQ Tech uses Digital Twins to help organisations see where
            energy is being consumed, locate energy waste and peak-demand
            events, understand why they are occurring and evaluate optimisation
            actions before operational changes are applied.
            {" "}
            By connecting operational context across buildings, equipment and
            distributed energy assets, Digital Twin intelligence supports
            measurable reductions in energy consumption, operating costs and
            associated CO₂ emissions.
          </p>


          <div className="dtHeroActions">

            <Link
              to="/pilot-program"
              className="dtPrimary"
            >
              Explore Pilot Program
              <ChevronRight size={18} />
            </Link>


            <Link
              to="/operational-energy-optimisation"
              className="dtSecondary"
            >
              Operational Optimisation
            </Link>

          </div>

        </div>
      </section>


      {/* =========================================================
          WHY DIGITAL TWIN INTELLIGENCE MATTERS
      ========================================================= */}

      <section className="dtSection">

        <div className="dtSectionHeader">

          <p>
            Why Digital Twin Intelligence Matters
          </p>

          <h2>
            Energy Data Becomes More Valuable When Teams Can See Where
            Waste Occurs and Why.
          </h2>

          <span>
            Digital Twin intelligence adds physical and operational context
            to energy data, helping teams move from identifying an abnormal
            energy event to understanding its cause, evaluating the safest
            response and measuring the resulting financial and carbon impact.
          </span>

        </div>


        <div className="dtGrid">

          <div className="dtCard">

            <Eye />

            <h3>
              Visualise Energy Waste
            </h3>

            <p>
              Move beyond dashboards by mapping abnormal consumption,
              after-hours loads and inefficient operation to buildings,
              floors, zones and connected assets.
            </p>

          </div>


          <div className="dtCard">

            <MapPinned />

            <h3>
              Locate Costly Energy Events
            </h3>

            <p>
              Identify where peak demand, excessive HVAC operation,
              refrigeration waste or other high-energy events are occurring
              across the physical environment.
            </p>

          </div>


          <div className="dtCard">

            <Search />

            <h3>
              Understand Root Causes
            </h3>

            <p>
              Correlate energy behaviour with occupancy, operating schedules,
              weather, equipment performance and connected energy assets to
              understand why waste is occurring.
            </p>

          </div>


          <div className="dtCard">

            <ShieldCheck />

            <h3>
              Optimise With Operational Safeguards
            </h3>

            <p>
              Evaluate AI-recommended optimisation actions within Digital Twin
              context before changes are reviewed and approved through
              human-in-the-loop workflows.
            </p>

          </div>

        </div>

      </section>


      {/* =========================================================
          DIGITAL TWIN SHOWCASE
      ========================================================= */}

      <section className="dtTwinShowcase">

        <div className="dtTwinVisual">

          <div className="dtBuilding">

            <div className="dtTower dtTowerA">
              {Array.from({ length: 15 }).map((_, i) => (
                <span
                  key={i}
                  className={i === 8 ? "hot" : ""}
                />
              ))}
            </div>


            <div className="dtTower dtTowerB">
              {Array.from({ length: 15 }).map((_, i) => (
                <span
                  key={i}
                  className={i === 5 ? "warn" : ""}
                />
              ))}
            </div>


            <div className="dtBase" />


            <div className="dtCallout">

              <strong>
                Peak demand event
              </strong>

              <span>
                Level 2 • HVAC load anomaly
              </span>

              <small>
                Potential cost-saving opportunity identified
              </small>

            </div>

          </div>

        </div>


        <div className="dtTwinText">

          <p>
            From Energy Event to Measurable Outcome
          </p>

          <h2>
            Connect Energy Waste to the Physical Asset Causing It.
          </h2>

          <span>
            When energy consumption rises unexpectedly, teams need more than
            an alert. Digital Twin intelligence helps identify the building,
            zone or equipment involved, investigate the operational cause and
            evaluate potential optimisation actions before implementation.
          </span>


          <ul>

            <li>
              <CheckCircle2 />
              Building, floor, zone and equipment context
            </li>

            <li>
              <CheckCircle2 />
              Energy waste and peak-demand event mapping
            </li>

            <li>
              <CheckCircle2 />
              AI-assisted root-cause investigation
            </li>

            <li>
              <CheckCircle2 />
              Optimisation scenario evaluation
            </li>

            <li>
              <CheckCircle2 />
              Human-in-the-loop action approval
            </li>

            <li>
              <CheckCircle2 />
              Energy, cost and CO₂ outcome measurement
            </li>

          </ul>

        </div>

      </section>


      {/* =========================================================
          DIGITAL TWIN WORKFLOW
      ========================================================= */}

      <section className="dtDarkSection">

        <div className="dtWorkflowHeader">

          <p>
            Digital Twin Workflow
          </p>

          <h2>
            From Energy Waste Detection to Measurable Savings.
          </h2>

          <span>
            Digital Twin intelligence provides the operational context
            required to understand energy events, evaluate optimisation
            pathways and verify outcomes against established baselines.
          </span>

        </div>


        <div className="dtSteps">

          {[
            "Connect buildings and energy assets",
            "Detect energy waste and peak-demand events",
            "Locate the building, zone or asset",
            "Analyse operational root cause",
            "Simulate optimisation pathway",
            "Approve recommended action",
            "Measure energy, cost and CO₂ outcomes",
          ].map((item, index) => (

            <div
              className="dtStep"
              key={item}
            >

              <b>
                {index + 1}
              </b>

              <span>
                {item}
              </span>

            </div>

          ))}

        </div>

      </section>


      {/* =========================================================
          USE CASES
      ========================================================= */}

      <section className="dtSection">

        <div className="dtSectionHeader">

          <p>
            Energy Optimisation Use Cases
          </p>

          <h2>
            Visual Intelligence Across Energy-Consuming and
            Energy-Producing Assets.
          </h2>

          <span>
            Digital Twin workflows help organisations identify where energy
            costs originate, understand interactions between operational
            systems and evaluate opportunities to reduce consumption, peak
            demand and associated CO₂ emissions.
          </span>

        </div>


        <div className="dtUseCaseGrid">

          <div>

            <Building2 />

            <strong>
              Buildings & Facilities
            </strong>

            <span>
              Identify energy waste across HVAC, lighting, operational
              equipment and building systems while maintaining comfort and
              operational requirements.
            </span>

          </div>


          <div>

            <Layers3 />

            <strong>
              Campuses & Portfolios
            </strong>

            <span>
              Compare energy behaviour across buildings, zones and sites to
              identify high-value cost and carbon optimisation opportunities.
            </span>

          </div>


          <div>

            <Sun />

            <strong>
              Solar PV Performance
            </strong>

            <span>
              Visualise generation, inverter performance and facility demand
              to improve onsite renewable-energy utilisation.
            </span>

          </div>


          <div>

            <BatteryCharging />

            <strong>
              Battery Storage Intelligence
            </strong>

            <span>
              Evaluate battery charge and discharge behaviour against demand,
              tariffs and solar generation to identify peak-demand and
              energy-cost reduction opportunities.
            </span>

          </div>


          <div>

            <PlugZap />

            <strong>
              EV Charging Optimisation
            </strong>

            <span>
              Visualise charging demand and scheduling opportunities to reduce
              avoidable peaks while maintaining required charging
              availability.
            </span>

          </div>


          <div>

            <Activity />

            <strong>
              Smart Meter Intelligence
            </strong>

            <span>
              Analyse import, export, demand, tariffs and operational patterns
              to establish baselines and identify abnormal consumption.
            </span>

          </div>


          <div>

            <Gauge />

            <strong>
              HVAC Optimisation
            </strong>

            <span>
              Investigate occupancy, schedules, setpoints and control
              behaviour to identify HVAC energy waste and cost-reduction
              opportunities.
            </span>

          </div>


          <div>

            <Zap />

            <strong>
              Peak Demand Events
            </strong>

            <span>
              Locate and explain simultaneous high-load events before
              evaluating AI-assisted demand-reduction actions.
            </span>

          </div>

        </div>

      </section>


      {/* =========================================================
          OUTCOME SECTION
      ========================================================= */}

      <section className="dtSection">

        <div className="dtSectionHeader">

          <p>
            Measurable Energy Outcomes
          </p>

          <h2>
            Digital Twin Intelligence Connects Operational Decisions to
            Financial & Carbon Outcomes.
          </h2>

          <span>
            The purpose of the Digital Twin is not simply to visualise
            infrastructure. It provides the operational context required to
            identify, evaluate and measure energy optimisation opportunities.
          </span>

        </div>


        <div className="dtGrid">

          <div className="dtCard">

            <Zap />

            <h3>
              Lower Energy Consumption
            </h3>

            <p>
              Identify unnecessary runtime, inefficient operating conditions
              and abnormal energy behaviour across connected assets.
            </p>

          </div>


          <div className="dtCard">

            <Gauge />

            <h3>
              Lower Peak Demand
            </h3>

            <p>
              Understand which assets and operating conditions contribute to
              peak-demand events and evaluate load-shifting opportunities.
            </p>

          </div>


          <div className="dtCard">

            <Leaf />

            <h3>
              Lower Associated CO₂ Emissions
            </h3>

            <p>
              Reduce associated CO₂ emissions by identifying opportunities
              to lower unnecessary energy consumption and improve renewable
              utilisation.
            </p>

          </div>


          <div className="dtCard">

            <ShieldCheck />

            <h3>
              Governed Operational Change
            </h3>

            <p>
              Evaluate recommendations within operational context and retain
              human approval before changes are applied to connected systems.
            </p>

          </div>

        </div>

      </section>


      {/* =========================================================
          PILOT
      ========================================================= */}

      <section className="dtProof">

        <div>

          <p>
            Pilot-Ready Capability
          </p>

          <h2>
            Start With One Energy Problem. Prove the Savings Before Scaling.
          </h2>

          <span>
            EnerG IQ Tech can deploy a focused Digital Twin workflow around a
            building, site or high-value energy problem to establish the
            operational context, investigate energy waste and quantify
            potential financial and associated CO₂ outcomes before broader
            rollout.
          </span>

        </div>


        <ul>

          <li>
            <CheckCircle2 />
            Energy baseline and Digital Twin investigation
          </li>

          <li>
            <CheckCircle2 />
            Peak demand, HVAC and after-hours scenarios
          </li>

          <li>
            <CheckCircle2 />
            AI-generated optimisation recommendations
          </li>

          <li>
            <CheckCircle2 />
            Human-in-the-loop review and approval
          </li>

          <li>
            <CheckCircle2 />
            Energy, financial, CO₂ and ROI measurement
          </li>

        </ul>

      </section>

    </main>
  );
}