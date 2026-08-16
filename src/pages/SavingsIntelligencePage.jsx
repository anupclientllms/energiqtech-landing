import "../styles/SavingsIntelligencePage.css";
import { Link } from "react-router-dom";

import {
  BarChart3,
  BatteryCharging,
  CheckCircle2,
  ChevronRight,
  Gauge,
  Leaf,
  LineChart,
  PlugZap,
  Sun,
  TrendingDown,
  Wallet,
  Zap,
} from "lucide-react";


export default function SavingsIntelligencePage() {
  return (
    <main className="savingsPage">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="savingsHero">

        <div className="savingsHeroContent">

          <p className="savingsEyebrow">
            Savings Intelligence
          </p>


          <h1>
            Prove Energy Cost & CO₂ Savings With Measurable Evidence.
          </h1>


          <p>
            EnerG IQ Tech Savings Intelligence converts operational energy
            optimisation into measurable financial and sustainability
            outcomes.
            {" "}
            Establish energy baselines, quantify energy and peak-demand
            reduction, calculate operating-cost savings and measure
            associated CO₂ outcomes across buildings, refrigeration,
            industrial equipment and connected energy assets.
          </p>


          <div className="savingsHeroActions">

            <Link
              to="/pilot-program"
              className="savingsPrimary"
            >
              Explore Pilot Program
              <ChevronRight size={18} />
            </Link>


            <Link
              to="/operational-energy-optimisation"
              className="savingsSecondary"
            >
              Operational Optimisation
            </Link>

          </div>

        </div>

      </section>


      {/* =========================================================
          WHY SAVINGS INTELLIGENCE
      ========================================================= */}

      <section className="savingsSection">

        <div className="savingsSectionHeader">

          <p>
            Why Savings Intelligence
          </p>


          <h2>
            Energy Optimisation Only Matters When the Savings Can Be
            Measured, Explained & Trusted.
          </h2>


          <span>
            EnerG IQ Tech connects operational energy performance to
            financial and environmental outcomes, helping organisations
            understand what changed, how much energy was saved, what the
            financial impact was and how associated CO₂ emissions were
            affected.
          </span>

        </div>


        <div className="savingsGrid">

          <div className="savingsCard">

            <Wallet />

            <h3>
              Energy Cost Savings
            </h3>

            <p>
              Quantify the financial impact of reducing abnormal consumption,
              inefficient operating schedules, unnecessary runtime and other
              sources of energy waste.
            </p>

          </div>


          <div className="savingsCard">

            <TrendingDown />

            <h3>
              Peak Demand Reduction
            </h3>

            <p>
              Measure demand-reduction opportunities and resulting savings
              from equipment sequencing, load shifting, batteries and other
              flexible-load strategies.
            </p>

          </div>


          <div className="savingsCard">

            <Leaf />

            <h3>
              CO₂ Emissions Outcomes
            </h3>

            <p>
              Quantify associated CO₂ outcomes from reduced energy
              consumption, improved operational efficiency and better
              renewable-energy utilisation.
            </p>

          </div>


          <div className="savingsCard">

            <BarChart3 />

            <h3>
              ROI & Business-Case Evidence
            </h3>

            <p>
              Combine energy, cost, carbon and operational results into
              evidence that supports pilot, investment and scale decisions.
            </p>

          </div>

        </div>

      </section>


      {/* =========================================================
          SAVINGS DASHBOARD
      ========================================================= */}

      <section className="savingsDashboardSection">

        <div className="savingsDashboardCard">

          <div className="savingsDashTop">

            <span>
              Energy, Cost & CO₂ Savings Intelligence
            </span>

            <b>
              Pilot View
            </b>

          </div>


          <div className="savingsKpis">

            <div>

              <small>
                Estimated Monthly Savings
              </small>

              <strong>
                $8,400
              </strong>

              <span>
                Across priority energy actions
              </span>

            </div>


            <div>

              <small>
                Peak Demand Opportunity
              </small>

              <strong>
                14%
              </strong>

              <span>
                Indicative reduction potential
              </span>

            </div>


            <div>

              <small>
                Energy Variance
              </small>

              <strong>
                22%
              </strong>

              <span>
                Above expected baseline
              </span>

            </div>


            <div>

              <small>
                Associated CO₂ Opportunity
              </small>

              <strong>
                3.2 tCO₂e
              </strong>

              <span>
                Indicative emissions impact
              </span>

            </div>

          </div>


          <div className="savingsInsight">

            <LineChart />


            <div>

              <strong>
                AI Savings Insight
              </strong>

              <p>
                Peak demand, after-hours consumption and inefficient asset
                operation represent the highest-value energy-cost and
                associated CO₂ reduction opportunities within this
                illustrative pilot scenario.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          SAVINGS VALIDATION WORKFLOW
      ========================================================= */}

      <section className="savingsDarkSection">

        <div className="savingsWorkflowHeader">

          <p>
            Savings Validation Workflow
          </p>


          <h2>
            From Energy Baseline to Verified Financial & Carbon Outcomes.
          </h2>


          <span>
            Savings Intelligence creates a measurable link between an
            identified energy problem, the optimisation action taken and the
            resulting energy, financial and associated CO₂ outcome.
          </span>

        </div>


        <div className="savingsSteps">

          {[
            "Establish energy and demand baseline",
            "Detect energy waste and operational variance",
            "Quantify cost and associated CO₂ opportunity",
            "Prioritise highest-value optimisation actions",
            "Simulate expected energy and financial impact",
            "Track approved optimisation actions",
            "Measure energy, cost, CO₂ and ROI outcomes",
          ].map((item, index) => (

            <div
              className="savingsStep"
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

      <section className="savingsSection">

        <div className="savingsSectionHeader">

          <p>
            Savings Intelligence Use Cases
          </p>


          <h2>
            Build the Business Case for Energy Cost & CO₂ Reduction.
          </h2>


          <span>
            Savings Intelligence helps facilities, operations,
            sustainability and executive teams understand where measurable
            energy value exists and whether broader optimisation investment
            is justified.
          </span>

        </div>


        <div className="savingsUseCaseGrid">

          <div>

            <Gauge />

            <strong>
              Pilot ROI Validation
            </strong>

            <span>
              Establish whether measured or potential energy savings justify
              scaling EnerG IQ Tech across additional systems or sites.
            </span>

          </div>


          <div>

            <Zap />

            <strong>
              Peak-Demand Business Case
            </strong>

            <span>
              Quantify the financial impact of avoidable demand peaks and
              prioritise AI-assisted demand-reduction actions.
            </span>

          </div>


          <div>

            <Sun />

            <strong>
              Solar PV Utilisation
            </strong>

            <span>
              Quantify the value of improved solar self-consumption, reduced
              grid imports and better coordination with facility demand.
            </span>

          </div>


          <div>

            <BatteryCharging />

            <strong>
              Battery Storage Optimisation
            </strong>

            <span>
              Estimate financial value from battery charging, discharge,
              peak shaving and improved renewable-energy utilisation.
            </span>

          </div>


          <div>

            <PlugZap />

            <strong>
              EV Charging Impact
            </strong>

            <span>
              Model charging demand, tariff exposure, scheduling
              opportunities and peak-demand impact.
            </span>

          </div>


          <div>

            <Leaf />

            <strong>
              CO₂ Reduction Evidence
            </strong>

            <span>
              Measure associated CO₂ outcomes from energy-efficiency actions,
              demand optimisation and improved renewable utilisation.
            </span>

          </div>


          <div>

            <BarChart3 />

            <strong>
              Executive Reporting
            </strong>

            <span>
              Present energy consumption, financial savings, associated CO₂,
              ROI and operational outcomes in a clear decision-making view.
            </span>

          </div>


          <div>

            <LineChart />

            <strong>
              Portfolio Intelligence
            </strong>

            <span>
              Compare energy-cost and carbon-reduction opportunities across
              sites, buildings, operational systems and connected assets.
            </span>

          </div>

        </div>

      </section>


      {/* =========================================================
          BUSINESS CASE
      ========================================================= */}

      <section className="savingsProof">

        <div>

          <p>
            Business-Case Evidence
          </p>


          <h2>
            Turn Energy Optimisation Into a Decision to Scale.
          </h2>


          <span>
            Savings Intelligence gives stakeholders evidence to determine
            whether an optimisation opportunity has sufficient financial,
            operational and sustainability value to justify wider
            deployment.
          </span>

        </div>


        <ul>

          <li>
            <CheckCircle2 />
            Energy baseline and consumption comparison
          </li>


          <li>
            <CheckCircle2 />
            Measured or estimated energy savings
          </li>


          <li>
            <CheckCircle2 />
            Peak-demand reduction and cost impact
          </li>


          <li>
            <CheckCircle2 />
            Associated CO₂ emissions impact
          </li>


          <li>
            <CheckCircle2 />
            ROI and indicative payback assessment
          </li>


          <li>
            <CheckCircle2 />
            Operational performance and safeguard review
          </li>


          <li>
            <CheckCircle2 />
            Portfolio-scale business-case support
          </li>

        </ul>

      </section>

    </main>
  );
}