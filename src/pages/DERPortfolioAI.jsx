import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  Activity,
  ArrowRight,
  BatteryCharging,
  Brain,
  Building2,
  CheckCircle2,
  ChevronRight,
  Cpu,
  Gauge,
  Layers3,
  Leaf,
  LineChart,
  Network,
  PlugZap,
  RadioTower,
  ShieldCheck,
  SunMedium,
  TrendingDown,
  Zap,
} from "lucide-react";

import "../styles/DERPortfolioAI.css";


const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};


const stagger = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};


/* =========================================================
   CONNECTED DER ASSETS
========================================================= */

const derAssets = [
  [
    SunMedium,
    "Solar PV",
    "Analyse generation, inverter performance, export and onsite utilisation to improve the value of renewable generation across connected sites.",
  ],

  [
    BatteryCharging,
    "Battery Energy Storage",
    "Coordinate battery charge and discharge around facility demand, tariffs, solar generation and peak-demand events.",
  ],

  [
    PlugZap,
    "EV Charging",
    "Schedule fleet, staff and customer charging around tariffs, site demand, renewable availability and required charging windows.",
  ],

  [
    Building2,
    "Building & Facility Loads",
    "Connect BMS, HVAC and flexible facility loads so electricity demand can be coordinated with distributed energy resources.",
  ],

  [
    Gauge,
    "Smart Meters",
    "Measure import, export, demand, consumption and tariff exposure to establish reliable portfolio energy baselines.",
  ],

  [
    Activity,
    "IoT & Operational Sensors",
    "Use equipment, environmental and operational telemetry to provide context for AI-assisted energy optimisation decisions.",
  ],

  [
    Zap,
    "Flexible Loads",
    "Identify loads that can be shifted, sequenced or temporarily reduced to minimise expensive demand peaks.",
  ],

  [
    RadioTower,
    "Utility & Grid Interfaces",
    "Incorporate tariffs, grid signals and future demand-response information into governed optimisation workflows.",
  ],

  [
    LineChart,
    "Tariff & Demand Intelligence",
    "Analyse electricity pricing, demand patterns and operating schedules to identify financial optimisation opportunities.",
  ],

  [
    Network,
    "Multi-Site DER Coordination",
    "Coordinate distributed energy assets across multiple facilities through a common AI energy intelligence layer.",
  ],

  [
    Leaf,
    "Carbon Intelligence",
    "Measure associated CO₂ outcomes from lower grid consumption, improved renewable utilisation and optimised energy behaviour.",
  ],

  [
    ShieldCheck,
    "Governed Energy Control",
    "Keep authorised operators involved through human-in-the-loop review before AI-recommended operational actions are applied.",
  ],
];


/* =========================================================
   AI OPTIMISATION SCENARIOS
========================================================= */

const scenarios = [
  [
    SunMedium,
    "Solar Self-Consumption Optimisation",
    "Coordinate facility demand, batteries and flexible loads around forecast solar generation.",
    "Increase renewable utilisation",
  ],

  [
    BatteryCharging,
    "Battery Dispatch Optimisation",
    "Charge and discharge batteries around demand peaks, tariffs, solar availability and operational constraints.",
    "Reduce grid costs & peak demand",
  ],

  [
    PlugZap,
    "EV Charging Coordination",
    "Schedule charging around site demand, tariffs, renewable generation and vehicle availability requirements.",
    "Reduce charging cost & demand peaks",
  ],

  [
    Zap,
    "Peak Demand Management",
    "Forecast peak-demand events and coordinate batteries, charging and suitable flexible loads before demand rises.",
    "Reduce demand charges",
  ],

  [
    TrendingDown,
    "Tariff-Aware Energy Optimisation",
    "Shift appropriate energy consumption around electricity price periods while maintaining operational requirements.",
    "Reduce electricity expenditure",
  ],

  [
    Leaf,
    "Energy & Carbon Optimisation",
    "Combine lower grid consumption with increased renewable utilisation and measure resulting financial and associated CO₂ outcomes.",
    "Reduce energy cost & CO₂ impact",
  ],
];


/* =========================================================
   END-TO-END WORKFLOW
========================================================= */

const workflowSteps = [
  [
    "01",
    "Connect",
    "Connect Solar PV, BESS, EV charging, smart meters, facility loads and available utility or IoT telemetry through the AI Energy Gateway.",
  ],

  [
    "02",
    "Detect",
    "Identify energy waste, export losses, inefficient battery behaviour, charging peaks and avoidable grid demand.",
  ],

  [
    "03",
    "Analyse",
    "Use AI Decision Agents and Digital Twin context to understand tariffs, forecasts, facility demand, asset state and operational constraints.",
  ],

  [
    "04",
    "Simulate",
    "Evaluate battery dispatch, charging schedules, flexible-load shifts and renewable-utilisation strategies before operational implementation.",
  ],

  [
    "05",
    "Approve",
    "Route explainable optimisation recommendations through authorised human-in-the-loop review and approval workflows.",
  ],

  [
    "06",
    "Measure",
    "Compare outcomes against established baselines to quantify energy reduction, peak-demand reduction, financial savings, renewable utilisation and associated CO₂ impact.",
  ],
];


/* =========================================================
   PILOT
========================================================= */

const pilotItems = [
  "DER portfolio energy baseline and connected-asset assessment",
  "Solar PV, BESS, EV charging and smart-meter integration",
  "Facility-demand and tariff analysis",
  "Solar self-consumption optimisation scenarios",
  "Battery dispatch and peak-demand optimisation",
  "EV charging and flexible-load coordination",
  "Digital Twin investigation and AI-recommended actions",
  "Human-in-the-loop operational approval workflow",
  "Energy cost, peak demand, renewable utilisation, CO₂ and ROI measurement",
];


export default function DERPortfolioAI() {
  return (
    <main className="derPortfolioPage">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="derPortfolioHero">

        <motion.div
          className="derPortfolioHeroContent"
          variants={stagger}
          initial="hidden"
          animate="show"
        >

          <motion.div
            className="derPortfolioBadge"
            variants={fadeUp}
          >
            <Network size={17} />
            EnerG IQ Tech DER Portfolio AI
          </motion.div>


          <motion.h1 variants={fadeUp}>
            Reduce Energy Costs & CO₂ Emissions Across Distributed
            Energy Portfolios.
          </motion.h1>


          <motion.p
            className="derPortfolioLead"
            variants={fadeUp}
          >
            EnerG IQ Tech DER Portfolio AI helps organisations coordinate
            Solar PV, Battery Energy Storage Systems, EV charging, smart
            meters and flexible facility loads to reduce electricity costs,
            peak demand and associated CO₂ emissions while improving
            renewable-energy utilisation.
          </motion.p>


          <motion.p
            className="derPortfolioDescription"
            variants={fadeUp}
          >
            Edge AI analyses facility demand, renewable generation,
            battery state, tariffs, charging requirements and operational
            constraints in real time. The AI Energy Gateway connects
            distributed energy assets into a common optimisation layer so
            EnerG IQ Tech can recommend governed actions and measure
            resulting energy, financial and carbon outcomes.
          </motion.p>


          <motion.div
            className="derPortfolioHeroButtons"
            variants={fadeUp}
          >

            <Link
              to="/book-pilot"
              className="derPortfolioPrimaryBtn"
            >
              Request DER Portfolio Pilot
              <ChevronRight size={18} />
            </Link>


            <a
              href="#der-portfolio-workflow"
              className="derPortfolioSecondaryBtn"
            >
              View AI Workflow
            </a>

          </motion.div>


          <motion.div
            className="derPortfolioHeroTags"
            variants={fadeUp}
          >

            <span>
              <TrendingDown size={15} />
              Energy Cost Reduction
            </span>

            <span>
              <Leaf size={15} />
              CO₂ Reduction
            </span>

            <span>
              <Zap size={15} />
              Peak Demand
            </span>

            <span>
              <SunMedium size={15} />
              Renewable Utilisation
            </span>

          </motion.div>

        </motion.div>


        {/* =====================================================
            HERO DASHBOARD
        ===================================================== */}

        <motion.div
          className="derPortfolioHeroVisual"
          initial={{
            opacity: 0,
            y: 28,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
        >

          <div className="derPortfolioDashboard">

            <div className="derPortfolioDashboardTop">

              <div>

                <strong>
                  DER Portfolio Optimisation
                </strong>

                <span>
                  Energy, demand & renewable overview
                </span>

              </div>


              <b>
                <Activity size={14} />
                Live
              </b>

            </div>


            <div className="derPortfolioKpis">

              <div>
                <small>
                  Connected Sites
                </small>

                <strong>
                  8
                </strong>

                <span>
                  Portfolio assets
                </span>
              </div>


              <div>
                <small>
                  Solar Capacity
                </small>

                <strong>
                  3.4 MW
                </strong>

                <span>
                  Illustrative portfolio
                </span>
              </div>


              <div>
                <small>
                  Battery Capacity
                </small>

                <strong>
                  5.2 MWh
                </strong>

                <span>
                  Connected storage
                </span>
              </div>


              <div>
                <small>
                  Peak Opportunity
                </small>

                <strong>
                  16%
                </strong>

                <span>
                  Indicative reduction
                </span>
              </div>

            </div>


            <div className="derPortfolioInsightCard">

              <div className="derPortfolioInsightIcon">
                <Brain size={22} />
              </div>


              <div>

                <strong>
                  AI Energy Recommendation
                </strong>

                <p>
                  Site demand is forecast to exceed the monthly demand
                  threshold between 4:00 PM and 5:00 PM. Review an approved
                  battery discharge and EV charging delay while maintaining
                  minimum vehicle charging requirements.
                </p>

              </div>

            </div>


            <div className="derPortfolioApproval">

              <span>
                <ShieldCheck size={18} />
                Operator approval required before execution
              </span>

              <button type="button">
                Review Action
              </button>

            </div>

          </div>

        </motion.div>

      </section>


      {/* =========================================================
          VALUE FLOW
      ========================================================= */}

      <section className="derPortfolioStrip">

        <span>Connect</span>
        <ArrowRight size={15} />

        <span>Forecast</span>
        <ArrowRight size={15} />

        <span>Analyse</span>
        <ArrowRight size={15} />

        <span>Optimise</span>
        <ArrowRight size={15} />

        <span>Approve</span>
        <ArrowRight size={15} />

        <span>Measure Savings</span>

      </section>


      {/* =========================================================
          DER ENERGY CHALLENGE
      ========================================================= */}

      <section className="derPortfolioSection derPortfolioChallengeSection">

        <div className="derPortfolioSectionHeader">

          <p>
            DER Portfolio Energy Challenge
          </p>


          <h2>
            Distributed Energy Assets Create Value Only When They Work
            Together.
          </h2>


          <span>
            Solar PV, battery storage, EV charging and flexible facility
            loads are often managed independently. This can result in
            unnecessary grid consumption, solar export, poorly timed
            charging and avoidable demand peaks even when significant
            energy infrastructure is already installed.
          </span>

        </div>


        <div className="derPortfolioChallengeGrid">

          <article>

            <div className="derPortfolioIcon">
              <TrendingDown size={24} />
            </div>

            <h3>
              Energy Cost & Tariff Exposure
            </h3>

            <p>
              Grid imports, demand charges and time-of-use tariffs can
              significantly affect the economics of distributed energy
              portfolios.
            </p>

          </article>


          <article>

            <div className="derPortfolioIcon">
              <SunMedium size={24} />
            </div>

            <h3>
              Underutilised Renewable Energy
            </h3>

            <p>
              Solar generation can be exported or curtailed while
              controllable loads and batteries remain poorly coordinated.
            </p>

          </article>


          <article>

            <div className="derPortfolioIcon">
              <Zap size={24} />
            </div>

            <h3>
              Peak Demand & Charging Loads
            </h3>

            <p>
              EV charging and facility demand can create expensive peaks
              unless batteries and flexible loads are coordinated.
            </p>

          </article>


          <article>

            <div className="derPortfolioIcon">
              <Leaf size={24} />
            </div>

            <h3>
              CO₂ & Sustainability Outcomes
            </h3>

            <p>
              Improved renewable utilisation and lower unnecessary grid
              consumption can reduce associated CO₂ emissions and support
              sustainability objectives.
            </p>

          </article>

        </div>

      </section>


      {/* =========================================================
          CONNECTED DER ASSETS
      ========================================================= */}

      <section className="derPortfolioSection derPortfolioAssetsSection">

        <div className="derPortfolioSectionHeader">

          <p>
            Connected DER Assets
          </p>


          <h2>
            Connect the Assets Driving Energy Cost, Demand & Carbon Outcomes.
          </h2>


          <span>
            The AI Energy Gateway provides a common integration layer for
            distributed energy resources, facility demand and operational
            telemetry so optimisation decisions can consider the whole
            energy ecosystem rather than individual assets in isolation.
          </span>

        </div>


        <motion.div
          className="derPortfolioAssetsGrid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.08,
          }}
        >

          {derAssets.map(([Icon, title, text]) => (

            <motion.article
              className="derPortfolioAssetCard"
              variants={fadeUp}
              key={title}
            >

              <div className="derPortfolioIcon">
                <Icon size={23} />
              </div>

              <h3>
                {title}
              </h3>

              <p>
                {text}
              </p>

            </motion.article>

          ))}

        </motion.div>

      </section>


      {/* =========================================================
          AI OPTIMISATION SCENARIOS
      ========================================================= */}

      <section className="derPortfolioSection derPortfolioScenarioSection">

        <div className="derPortfolioSectionHeader">

          <p>
            AI Optimisation Scenarios
          </p>


          <h2>
            Turn DER Flexibility Into Measurable Cost & Carbon Reduction.
          </h2>


          <span>
            EnerG IQ Tech combines forecasts, tariffs, operational context,
            Digital Twin intelligence and AI Decision Agents to identify
            practical optimisation opportunities while maintaining asset
            availability and operational requirements.
          </span>

        </div>


        <div className="derPortfolioScenarioGrid">

          {scenarios.map(([Icon, title, text, outcome]) => (

            <article
              className="derPortfolioScenarioCard"
              key={title}
            >

              <div className="derPortfolioScenarioTop">

                <div className="derPortfolioIcon">
                  <Icon size={23} />
                </div>

                <span>
                  AI Scenario
                </span>

              </div>


              <h3>
                {title}
              </h3>

              <p>
                {text}
              </p>


              <div className="derPortfolioOutcome">

                <CheckCircle2 size={17} />

                {outcome}

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* =========================================================
          END-TO-END WORKFLOW
      ========================================================= */}

      <section
        className="derPortfolioSection derPortfolioWorkflowSection"
        id="der-portfolio-workflow"
      >

        <div className="derPortfolioSectionHeader derPortfolioSectionHeaderLight">

          <p>
            End-to-End AI Workflow
          </p>


          <h2>
            From Distributed Energy Data to Measurable Savings.
          </h2>


          <span>
            EnerG IQ Tech transforms DER and facility telemetry into
            explainable, governed optimisation recommendations and measures
            resulting energy, financial, renewable-utilisation and
            associated CO₂ outcomes.
          </span>

        </div>


        <div className="derPortfolioWorkflow">

          {workflowSteps.map(([number, title, text]) => (

            <div
              className="derPortfolioWorkflowStep"
              key={number}
            >

              <b>
                {number}
              </b>


              <div>

                <h3>
                  {title}
                </h3>

                <p>
                  {text}
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* =========================================================
          SHARED PLATFORM
      ========================================================= */}

      <section className="derPortfolioSection derPortfolioPlatformSection">

        <div className="derPortfolioPlatformPanel">

          <div className="derPortfolioPlatformCopy">

            <p>
              Shared EnerG IQ Tech Platform
            </p>


            <h2>
              DER Portfolio Optimisation Built on One Energy Intelligence
              Architecture.
            </h2>


            <span>
              DER Portfolio AI uses the shared EnerG IQ Tech architecture
              to connect distributed energy assets, analyse facility demand,
              recommend governed optimisation actions and quantify energy,
              financial and associated carbon outcomes.
            </span>


            <ul>

              <li>
                <CheckCircle2 size={18} />
                AI Energy Gateway connectivity
              </li>

              <li>
                <CheckCircle2 size={18} />
                Digital Twin operational context
              </li>

              <li>
                <CheckCircle2 size={18} />
                Configurable AI Decision Agents
              </li>

              <li>
                <CheckCircle2 size={18} />
                Human-in-the-loop governance
              </li>

              <li>
                <CheckCircle2 size={18} />
                Energy, cost, CO₂ and ROI intelligence
              </li>

            </ul>

          </div>


          <div className="derPortfolioPlatformFlow">

            <div className="derPortfolioPlatformNode">

              <Network size={25} />

              <span>
                DER Assets
              </span>

            </div>


            <ChevronRight size={20} />


            <div className="derPortfolioPlatformNode featured">

              <Cpu size={25} />

              <span>
                AI Energy Gateway
              </span>

            </div>


            <ChevronRight size={20} />


            <div className="derPortfolioPlatformNode">

              <Layers3 size={25} />

              <span>
                Digital Twin
              </span>

            </div>


            <ChevronRight size={20} />


            <div className="derPortfolioPlatformNode">

              <Brain size={25} />

              <span>
                AI Optimisation
              </span>

            </div>


            <ChevronRight size={20} />


            <div className="derPortfolioPlatformNode">

              <ShieldCheck size={25} />

              <span>
                Measured Outcomes
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          FUTURE GRID PATHWAY
      ========================================================= */}

      <section className="derPortfolioSection derPortfolioFutureSection">

        <div className="derPortfolioSectionHeader">

          <p>
            Future Grid Pathway
          </p>


          <h2>
            Optimise Behind-the-Meter Energy First. Expand Into Grid
            Services When Ready.
          </h2>


          <span>
            EnerG IQ Tech does not require organisations to begin with
            complex electricity-market participation. The immediate
            objective is to reduce energy costs, peak demand and associated
            CO₂ emissions. The same connected architecture can later support
            demand response, aggregators, DNSPs and other grid-integration
            pathways as customer requirements evolve.
          </span>

        </div>


        <div className="derPortfolioFutureGrid">

          <div>
            <SunMedium />
            <strong>
              Solar Self-Consumption
            </strong>
          </div>

          <div>
            <BatteryCharging />
            <strong>
              Battery Optimisation
            </strong>
          </div>

          <div>
            <PlugZap />
            <strong>
              Smart EV Charging
            </strong>
          </div>

          <div>
            <Zap />
            <strong>
              Flexible Demand
            </strong>
          </div>

          <div>
            <RadioTower />
            <strong>
              Future Grid Services
            </strong>
          </div>

        </div>

      </section>


      {/* =========================================================
          PILOT PROGRAM
      ========================================================= */}

      <section
        className="derPortfolioSection derPortfolioPilotSection"
        id="der-portfolio-pilot"
      >

        <div className="derPortfolioPilotBox">

          <div className="derPortfolioPilotCopy">

            <p>
              DER Portfolio Pilot Program
            </p>


            <h2>
              Start With One Site or DER Portfolio. Prove the Savings
              Before Scaling.
            </h2>


            <span>
              Establish a baseline for one site or connected DER portfolio,
              identify optimisation opportunities and quantify potential
              energy-cost, peak-demand, renewable-utilisation and associated
              CO₂ outcomes before broader deployment.
            </span>


            <Link
              to="/book-pilot"
              className="derPortfolioPrimaryBtn"
            >
              Discuss a DER Portfolio Pilot
              <ChevronRight size={18} />
            </Link>

          </div>


          <div className="derPortfolioPilotList">

            <h3>
              Indicative Pilot Scope
            </h3>


            <ul>

              {pilotItems.map((item) => (

                <li key={item}>

                  <CheckCircle2 size={18} />

                  <span>
                    {item}
                  </span>

                </li>

              ))}

            </ul>

          </div>

        </div>

      </section>


      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="derPortfolioCta">

        <div>

          <p>
            Now Onboarding DER Portfolio Pilot Partners
          </p>


          <h2>
            Reduce Energy Costs & CO₂ Emissions Across Your Distributed
            Energy Portfolio.
          </h2>


          <span>
            Start with one measurable energy challenge. Establish the
            baseline, connect your distributed energy assets and determine
            whether improved coordination can reduce energy costs, peak
            demand and associated CO₂ emissions before portfolio-wide scale.
          </span>

        </div>


        <div className="derPortfolioCtaActions">

          <Link
            to="/book-pilot"
            className="derPortfolioPrimaryBtn"
          >
            Request Pilot
            <ChevronRight size={18} />
          </Link>

        </div>

      </section>

    </main>
  );
}