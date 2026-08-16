import "../styles/PilotProgramPage.css";
import { Link } from "react-router-dom";

import {
  BatteryCharging,
  Building2,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Factory,
  Gauge,
  Handshake,
  Leaf,
  LineChart,
  PlugZap,
  Search,
  ShieldCheck,
  Snowflake,
  Sun,
  Target,
  TrendingDown,
  Zap,
} from "lucide-react";


export default function PilotProgramPage() {
  return (
    <main className="pilotPage">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="pilotHero">

        <div className="pilotHeroContent">

          <p className="pilotEyebrow">
            EnerG IQ Tech Pilot Program
          </p>


          <h1>
            Start With One Energy Problem. Prove the Cost & CO₂ Savings
            Before You Scale.
          </h1>


          <p>
            EnerG IQ Tech gives energy-intensive organisations a focused,
            low-risk way to establish an energy baseline, identify operational
            energy waste and peak-demand opportunities, evaluate AI-driven
            optimisation actions and quantify potential energy-cost and
            associated CO₂ outcomes before committing to broader deployment.
          </p>


          <div className="pilotHeroActions">

            <a
              href="#pilot-pathway"
              className="pilotPrimary"
            >
              View Pilot Pathway
              <ChevronRight size={18} />
            </a>


            <Link
              to="/savings-intelligence"
              className="pilotSecondary"
            >
              Savings Intelligence
            </Link>

          </div>

        </div>

      </section>


      {/* =========================================================
          WHY PILOT FIRST
      ========================================================= */}

      <section className="pilotSection">

        <div className="pilotSectionHeader">

          <p>
            Why Pilot First
          </p>


          <h2>
            Prove the Energy, Financial & Carbon Business Case Before
            Committing to Scale.
          </h2>


          <span>
            Rather than beginning with a large technology rollout, the
            EnerG IQ Tech pilot focuses on one site, facility, operational
            system or high-value energy problem. The objective is to establish
            evidence that supports a clear decision about whether broader
            deployment makes operational and financial sense.
          </span>

        </div>


        <div className="pilotValueGrid">

          <div className="pilotValueCard">

            <Target />

            <h3>
              Focused Energy Problem
            </h3>

            <p>
              Start with one site, operational system or measurable use case
              where energy consumption, peak demand or equipment inefficiency
              creates a meaningful business problem.
            </p>

          </div>


          <div className="pilotValueCard">

            <Gauge />

            <h3>
              Measurable Energy Baseline
            </h3>

            <p>
              Establish current energy consumption, demand and operating
              behaviour so optimisation opportunities and resulting outcomes
              can be measured against evidence.
            </p>

          </div>


          <div className="pilotValueCard">

            <TrendingDown />

            <h3>
              Cost & CO₂ Evidence
            </h3>

            <p>
              Quantify potential or realised energy reduction, peak-demand
              reduction, financial savings and associated CO₂ outcomes to
              support the business case.
            </p>

          </div>


          <div className="pilotValueCard">

            <ShieldCheck />

            <h3>
              Governed Operational Validation
            </h3>

            <p>
              Keep facilities, engineering and operational teams in control
              through review, approval, human-in-the-loop workflows and
              agreed operating safeguards.
            </p>

          </div>

        </div>

      </section>


      {/* =========================================================
          PILOT PATHWAY
      ========================================================= */}

      <section
        className="pilotPathwaySection"
        id="pilot-pathway"
      >

        <div className="pilotPathwayHeader">

          <p>
            Pilot Pathway
          </p>


          <h2>
            Baseline. Identify Waste. Optimise. Measure. Decide.
          </h2>


          <span>
            Each stage is designed to move from an identified energy problem
            toward measurable evidence of financial and sustainability value.
          </span>

        </div>


        <div className="pilotTimeline">

          {[
            {
              icon: Search,

              title: "1. Discovery & Baseline",

              text:
                "Review the site, operational systems, energy bills, BMS, meters, equipment and available telemetry to understand current energy consumption, demand and operating conditions.",
            },

            {
              icon: ClipboardCheck,

              title: "2. Define Pilot Scope",

              text:
                "Select one site, facility, asset group or high-value energy problem and define measurable success criteria for energy, cost, CO₂ and operational performance.",
            },

            {
              icon: Zap,

              title: "3. Identify & Optimise",

              text:
                "Detect energy waste, peak-demand events and equipment inefficiencies, then evaluate AI-recommended optimisation actions against operational constraints.",
            },

            {
              icon: LineChart,

              title: "4. Measure Outcomes",

              text:
                "Compare pilot performance against the established baseline to quantify energy reduction, peak-demand reduction, financial savings and associated CO₂ outcomes.",
            },

            {
              icon: Handshake,

              title: "5. Business Case & Scale Decision",

              text:
                "Use the measured pilot evidence, ROI and operational results to decide whether to scale, refine or expand EnerG IQ Tech across additional sites and systems.",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                className="pilotTimelineItem"
                key={item.title}
              >

                <div className="pilotTimelineIcon">
                  <Icon />
                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>

              </div>
            );
          })}

        </div>

      </section>


      {/* =========================================================
          WHAT THE PILOT VALIDATES
      ========================================================= */}

      <section className="pilotDarkSection">

        <div className="pilotDarkContent">

          <div>

            <p>
              What the Pilot Validates
            </p>


            <h2>
              Evidence of Energy Savings, Financial Value & CO₂ Impact.
            </h2>


            <span>
              The pilot is not simply a demonstration of the EnerG IQ Tech
              platform. Its purpose is to establish whether a defined
              operational energy problem can be addressed with measurable
              technical, financial and sustainability outcomes.
            </span>

          </div>


          <div className="pilotValidationList">

            <div>
              <CheckCircle2 />

              <span>
                Current energy-consumption and peak-demand baseline
              </span>
            </div>


            <div>
              <CheckCircle2 />

              <span>
                Energy waste and abnormal operating patterns
              </span>
            </div>


            <div>
              <CheckCircle2 />

              <span>
                Highest-value cost-reduction opportunities
              </span>
            </div>


            <div>
              <CheckCircle2 />

              <span>
                Equipment, operational and optimisation constraints
              </span>
            </div>


            <div>
              <CheckCircle2 />

              <span>
                Potential or measured energy and peak-demand reduction
              </span>
            </div>


            <div>
              <CheckCircle2 />

              <span>
                Financial savings, ROI and associated CO₂ impact
              </span>
            </div>


            <div>
              <CheckCircle2 />

              <span>
                Business case for broader deployment
              </span>
            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          PILOT ENVIRONMENTS
      ========================================================= */}

      <section className="pilotSection">

        <div className="pilotSectionHeader">

          <p>
            Suitable Pilot Environments
          </p>


          <h2>
            Built for Energy-Intensive Organisations Across Multiple
            Industries.
          </h2>


          <span>
            A pilot can begin wherever energy consumption, peak demand,
            equipment operation or connected energy assets create a
            measurable opportunity to reduce operating costs and associated
            CO₂ emissions.
          </span>

        </div>


        <div className="pilotAudienceGrid">

          <div>

            <Snowflake />

            <strong>
              Cold Storage & Refrigeration
            </strong>

            <span>
              Compressors, evaporators, condensers, cold rooms and defrost
              systems where refrigeration energy is a major operating cost.
            </span>

          </div>


          <div>

            <Factory />

            <strong>
              Manufacturing & Industrial
            </strong>

            <span>
              Production equipment, compressed air, boilers, motors,
              refrigeration and utilities with high energy intensity.
            </span>

          </div>


          <div>

            <Building2 />

            <strong>
              Commercial Buildings
            </strong>

            <span>
              HVAC, lighting, BMS and after-hours loads where energy costs
              and building emissions can be reduced.
            </span>

          </div>


          <div>

            <Building2 />

            <strong>
              Local Government & Campuses
            </strong>

            <span>
              Civic buildings, libraries, depots, universities and
              multi-building portfolios with energy and sustainability
              targets.
            </span>

          </div>


          <div>

            <Sun />

            <strong>
              Solar PV
            </strong>

            <span>
              Sites seeking to improve onsite renewable utilisation and
              understand generation performance against facility demand.
            </span>

          </div>


          <div>

            <BatteryCharging />

            <strong>
              Battery Storage
            </strong>

            <span>
              Battery Energy Storage Systems where dispatch can support
              peak-demand reduction, tariff optimisation and renewable
              utilisation.
            </span>

          </div>


          <div>

            <PlugZap />

            <strong>
              EV & Fleet Charging
            </strong>

            <span>
              Charging infrastructure where scheduling can reduce demand
              peaks and electricity costs.
            </span>

          </div>


          <div>

            <Gauge />

            <strong>
              Multi-Site Energy Portfolios
            </strong>

            <span>
              Organisations seeking to prove the value at one site before
              scaling optimisation across a broader portfolio.
            </span>

          </div>

        </div>

      </section>


      {/* =========================================================
          PILOT DELIVERABLES
      ========================================================= */}

      <section className="pilotDeliverables">

        <div>

          <p>
            Pilot Deliverables
          </p>


          <h2>
            A Business Case — Not Just Another Dashboard.
          </h2>


          <span>
            At the end of the pilot, stakeholders should have evidence showing
            where energy is being wasted, what optimisation opportunities
            exist and whether the expected or measured financial and carbon
            outcomes justify broader deployment.
          </span>

        </div>


        <ul>

          <li>
            <CheckCircle2 />
            Energy baseline and operational asset assessment
          </li>


          <li>
            <CheckCircle2 />
            Prioritised energy-waste and optimisation opportunities
          </li>


          <li>
            <CheckCircle2 />
            Peak-demand reduction opportunities
          </li>


          <li>
            <CheckCircle2 />
            Estimated or measured energy-cost savings
          </li>


          <li>
            <CheckCircle2 />
            Associated CO₂ emissions impact
          </li>


          <li>
            <CheckCircle2 />
            AI Energy Gateway integration assessment
          </li>


          <li>
            <CheckCircle2 />
            ROI and broader deployment recommendation
          </li>

        </ul>

      </section>


      {/* =========================================================
          CTA
      ========================================================= */}

      <section className="pilotCTA">

        <h2>
          Start With One Site. Prove the Energy & Carbon Savings.
        </h2>


        <p>
          Identify one measurable energy problem, establish the baseline and
          determine whether EnerG IQ Tech can deliver a compelling financial
          and sustainability business case before you scale.
        </p>


        <Link
          to="/"
          className="pilotPrimary"
        >
          Back to Home
          <ChevronRight size={18} />
        </Link>

      </section>

    </main>
  );
}