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
  TrendingDown,
} from "lucide-react";


export default function OperationalEnergyPage() {
  return (
    <main className="oePage">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="oeHero">

        <div className="oeHeroContent">

          <p className="oeEyebrow">
            Operational Energy Optimisation
          </p>


          <h1>
            Reduce Energy Costs & CO₂ Emissions Through AI-Driven
            Operational Optimisation.
          </h1>


          <p>
            EnerG IQ Tech helps energy-intensive organisations identify where
            energy is being wasted, understand why it is happening and
            determine which operational actions can reduce energy consumption,
            peak demand, operating costs and associated CO₂ emissions.
            {" "}
            Edge AI, Digital Twins and AI Decision Agents analyse buildings,
            refrigeration, industrial equipment and connected energy assets
            while governed human-in-the-loop workflows keep operational teams
            in control.
          </p>


          <div className="oeHeroActions">

            <Link
              to="/pilot-program"
              className="oePrimary"
            >
              Explore Pilot Program
              <ChevronRight size={18} />
            </Link>


            <Link
              to="/"
              className="oeSecondary"
            >
              Back to Home
            </Link>

          </div>

        </div>

      </section>


      {/* =========================================================
          WHY IT MATTERS
      ========================================================= */}

      <section className="oeSection">

        <div className="oeSectionHeader">

          <p>
            Why Operational Energy Optimisation Matters
          </p>


          <h2>
            Turn Energy Waste Into Measurable Cost & Carbon Reduction.
          </h2>


          <span>
            Monitoring tells organisations how much energy they are using.
            EnerG IQ Tech goes further by identifying where avoidable
            consumption occurs, determining its operational cause, evaluating
            optimisation actions and measuring the resulting financial and
            associated CO₂ outcomes.
          </span>

        </div>


        <div className="oeGrid">

          <div className="oeCard">

            <Activity />

            <h3>
              Detect Energy Waste
            </h3>

            <p>
              Identify abnormal consumption, unnecessary runtime,
              inefficient equipment behaviour and other sources of avoidable
              energy use across operational assets.
            </p>

          </div>


          <div className="oeCard">

            <Brain />

            <h3>
              Understand Root Causes
            </h3>

            <p>
              Explain why energy waste and demand events occur by combining
              telemetry with occupancy, schedules, weather, asset behaviour
              and Digital Twin context.
            </p>

          </div>


          <div className="oeCard">

            <Gauge />

            <h3>
              Reduce Energy Cost & Peak Demand
            </h3>

            <p>
              Evaluate HVAC schedules, equipment sequencing, flexible loads,
              battery dispatch, EV charging and other optimisation actions
              before implementation.
            </p>

          </div>


          <div className="oeCard">

            <Leaf />

            <h3>
              Reduce Associated CO₂ Emissions
            </h3>

            <p>
              Lower associated CO₂ emissions by reducing unnecessary energy
              consumption and improving how renewable generation, storage
              and flexible demand are utilised.
            </p>

          </div>

        </div>

      </section>


      {/* =========================================================
          WORKFLOW
      ========================================================= */}

      <section className="oeDarkSection">

        <div className="oeWorkflow">

          <div>

            <p>
              Operational Energy Workflow
            </p>


            <h2>
              Detect. Analyse. Optimise. Approve. Measure.
            </h2>


            <span>
              EnerG IQ Tech turns operational energy data into explainable
              optimisation decisions and measurable energy, financial and
              carbon outcomes.
            </span>

          </div>


          <div className="oeSteps">

            {[
              "Connect operational systems and energy assets",
              "Detect energy waste and peak-demand events",
              "Analyse root causes and operational context",
              "Simulate and recommend optimisation actions",
              "Approve and apply governed actions",
              "Measure energy, cost and CO₂ outcomes",
            ].map((item, index) => (

              <div
                className="oeStep"
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

        </div>

      </section>


      {/* =========================================================
          USE CASES
      ========================================================= */}

      <section className="oeSection">

        <div className="oeSectionHeader">

          <p>
            Operational Optimisation Use Cases
          </p>


          <h2>
            Target the Energy Problems Driving Cost & CO₂ Emissions.
          </h2>


          <span>
            EnerG IQ Tech applies the same operational optimisation
            architecture across buildings, refrigeration systems,
            manufacturing equipment and distributed energy assets.
          </span>

        </div>


        <div className="oeUseCaseGrid">

          <div>

            <Zap />

            <strong>
              Peak Demand Reduction
            </strong>

            <span>
              Identify avoidable peak-demand events and evaluate equipment
              sequencing, flexible-load and demand-shifting actions that can
              reduce demand charges.
            </span>

          </div>


          <div>

            <Building2 />

            <strong>
              After-Hours Energy Waste
            </strong>

            <span>
              Detect HVAC, lighting, refrigeration, workstations and other
              operational assets consuming energy outside required operating
              periods.
            </span>

          </div>


          <div>

            <Gauge />

            <strong>
              Equipment & Asset Optimisation
            </strong>

            <span>
              Identify inefficient HVAC, refrigeration, motors, pumps,
              compressors, boilers and other energy-intensive equipment and
              evaluate optimisation actions.
            </span>

          </div>


          <div>

            <Leaf />

            <strong>
              Energy & CO₂ Intelligence
            </strong>

            <span>
              Measure energy reduction, operating-cost savings and associated
              CO₂ outcomes against established operational baselines.
            </span>

          </div>

        </div>

      </section>


      {/* =========================================================
          CONNECTED ENERGY OPTIMISATION
      ========================================================= */}

      <section className="oeSection">

        <div className="oeSectionHeader">

          <p>
            Connected Energy Optimisation
          </p>


          <h2>
            Coordinate Buildings, Solar, Batteries & Flexible Loads.
          </h2>


          <span>
            EnerG IQ Tech can combine facility demand with Solar PV,
            Battery Energy Storage Systems, EV charging and other flexible
            loads to improve onsite renewable utilisation, reduce costly
            demand peaks and lower associated carbon impact.
          </span>

        </div>


        <div className="oeGrid">

          <div className="oeCard">

            <Building2 />

            <h3>
              Reduce Facility Demand
            </h3>

            <p>
              Optimise building and operational loads around occupancy,
              production requirements, schedules and tariff conditions.
            </p>

          </div>


          <div className="oeCard">

            <Zap />

            <h3>
              Reduce Peak Costs
            </h3>

            <p>
              Coordinate high-load equipment and flexible demand to minimise
              avoidable demand peaks.
            </p>

          </div>


          <div className="oeCard">

            <TrendingDown />

            <h3>
              Improve Energy Economics
            </h3>

            <p>
              Combine energy efficiency, demand reduction and asset
              coordination to reduce operating expenditure.
            </p>

          </div>


          <div className="oeCard">

            <ShieldCheck />

            <h3>
              Keep Operations in Control
            </h3>

            <p>
              Use human-in-the-loop review and approval before
              AI-recommended operational changes are applied.
            </p>

          </div>

        </div>

      </section>


      {/* =========================================================
          PILOT
      ========================================================= */}

      <section className="oeProof">

        <div>

          <p>
            Pilot-First Validation
          </p>


          <h2>
            Start With One Energy Problem. Prove the Savings Before Scaling.
          </h2>


          <span>
            EnerG IQ Tech can begin with one site, building or
            energy-intensive operational system. Establish the baseline,
            identify optimisation opportunities and quantify potential
            energy-cost, peak-demand and associated CO₂ outcomes before
            broader deployment.
          </span>

        </div>


        <ul>

          <li>
            <CheckCircle2 />
            Energy baseline and connected asset assessment
          </li>

          <li>
            <CheckCircle2 />
            AI Energy Gateway and available telemetry integration
          </li>

          <li>
            <CheckCircle2 />
            Energy waste, peak-demand and equipment-efficiency analysis
          </li>

          <li>
            <CheckCircle2 />
            AI-recommended optimisation scenarios
          </li>

          <li>
            <CheckCircle2 />
            Human-in-the-loop review and approval
          </li>

          <li>
            <CheckCircle2 />
            Energy, financial, associated CO₂ and ROI measurement
          </li>

        </ul>

      </section>

    </main>
  );
}