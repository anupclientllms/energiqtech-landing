import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Activity,
  ArrowRight,
  BatteryCharging,
  Brain,
  CheckCircle2,
  ChevronRight,
  Cpu,
  Droplets,
  Fan,
  Forklift,
  Gauge,
  Layers3,
  Leaf,
  Lightbulb,
  Moon,
  PackageSearch,
  Refrigerator,
  ShieldCheck,
  Sparkles,
  SunMedium,
  Truck,
  Warehouse,
  Waves,
  Zap,
} from "lucide-react";

import "../styles/WarehouseLogisticsAI.css";


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
   CONNECTED WAREHOUSE & LOGISTICS ASSETS
========================================================= */

const warehouseAssets = [
  {
    icon: PackageSearch,
    title: "Conveyors & Sortation",
    text:
      "Reduce unnecessary conveyor and sortation energy consumption by analysing runtime, idle operation, throughput, sequencing and abnormal power behaviour.",
  },

  {
    icon: Warehouse,
    title: "Warehouse HVAC",
    text:
      "Reduce heating, cooling and ventilation energy waste using occupancy, shift schedules, weather and operational-zone requirements.",
  },

  {
    icon: Refrigerator,
    title: "Cold Storage & Refrigeration",
    text:
      "Analyse compressors, cold rooms, freezers, defrost cycles and temperature performance to reduce refrigeration energy costs while protecting product conditions.",
  },

  {
    icon: Fan,
    title: "Dock Doors & Air Curtains",
    text:
      "Detect door-open losses, inefficient air-curtain operation and avoidable heating or cooling demand around loading docks.",
  },

  {
    icon: Lightbulb,
    title: "Warehouse Lighting",
    text:
      "Reduce aisle, picking, packing and common-area lighting energy consumption using occupancy, zoning and shift schedules.",
  },

  {
    icon: Sparkles,
    title: "Automation, AS/RS & Robotics",
    text:
      "Identify unnecessary runtime and standby energy across automated storage, retrieval systems, robotics and warehouse automation.",
  },

  {
    icon: Forklift,
    title: "Forklift & AGV Charging",
    text:
      "Coordinate forklift and AGV charging around shift requirements, battery state, tariffs and facility demand to reduce charging costs and peak demand.",
  },

  {
    icon: Truck,
    title: "Fleet EV Charging",
    text:
      "Schedule delivery-fleet charging around dispatch windows, tariffs, site demand and renewable generation to reduce demand peaks and charging costs.",
  },

  {
    icon: Gauge,
    title: "Compressed Air",
    text:
      "Identify leakage, excessive pressure, unloaded runtime and inefficient compressor sequencing that contribute to avoidable energy expenditure.",
  },

  {
    icon: Lightbulb,
    title: "Yard & External Lighting",
    text:
      "Reduce yard, perimeter, dock and external lighting energy use through schedules, occupancy and daylight conditions.",
  },

  {
    icon: Droplets,
    title: "Water, Washdown & Pumps",
    text:
      "Identify excessive runtime, pressure loss and inefficient pumping that increase energy consumption across logistics facilities.",
  },

  {
    icon: ShieldCheck,
    title: "Fire & Life Safety Support",
    text:
      "Analyse supporting energy systems while preserving fire, smoke-control, emergency and life-safety requirements.",
  },

  {
    icon: SunMedium,
    title: "Solar & Battery",
    text:
      "Coordinate solar generation and battery dispatch to improve onsite renewable utilisation, reduce peak demand and lower associated carbon impact.",
  },

  {
    icon: Moon,
    title: "After-Hours Base Load",
    text:
      "Detect conveyors, lighting, HVAC, charging and auxiliary systems operating unnecessarily outside active shifts.",
  },

  {
    icon: Waves,
    title: "Warehouse Energy Coordination",
    text:
      "Coordinate warehouse demand, refrigeration, automation, charging, Solar PV and battery assets through one AI energy optimisation layer.",
  },
];


/* =========================================================
   AI OPTIMISATION SCENARIOS
========================================================= */

const scenarios = [
  {
    icon: PackageSearch,
    title: "Conveyor & Sortation Optimisation",
    text:
      "Detect idle running, poor sequencing and unnecessary operation outside active fulfilment windows.",
    outcome: "Reduce material-handling energy cost",
  },

  {
    icon: Warehouse,
    title: "Warehouse HVAC Optimisation",
    text:
      "Align ventilation and temperature control with occupancy, shifts, loading activity and weather.",
    outcome: "Reduce HVAC energy cost & CO₂ impact",
  },

  {
    icon: Refrigerator,
    title: "Cold Storage Intelligence",
    text:
      "Identify compressor cycling, temperature drift, defrost inefficiencies and refrigeration-driven demand peaks.",
    outcome: "Reduce refrigeration energy costs",
  },

  {
    icon: Forklift,
    title: "Forklift & AGV Charging",
    text:
      "Coordinate charging around shift changes, battery state, electricity tariffs and warehouse demand.",
    outcome: "Reduce charging cost & peak demand",
  },

  {
    icon: Moon,
    title: "After-Hours Load Reduction",
    text:
      "Identify lighting, HVAC, conveyors and support systems operating unnecessarily outside active shifts.",
    outcome: "Reduce warehouse base-load cost",
  },

  {
    icon: SunMedium,
    title: "Solar & Battery Coordination",
    text:
      "Coordinate renewable generation, battery dispatch and flexible warehouse demand.",
    outcome: "Reduce grid cost & carbon impact",
  },
];


/* =========================================================
   END-TO-END WORKFLOW
========================================================= */

const workflowSteps = [
  {
    number: "01",
    title: "Connect",
    text:
      "Connect BMS, meters, conveyors, refrigeration, automation, charging, lighting and DER telemetry through the AI Energy Gateway.",
  },

  {
    number: "02",
    title: "Detect",
    text:
      "Identify energy waste, idle equipment, abnormal asset behaviour, charging peaks, refrigeration inefficiencies and unnecessary after-hours loads.",
  },

  {
    number: "03",
    title: "Analyse",
    text:
      "Use AI Decision Agents and Digital Twin context to investigate root causes and quantify potential energy, financial and emissions impact across warehouse zones and systems.",
  },

  {
    number: "04",
    title: "Simulate",
    text:
      "Evaluate optimisation actions against throughput, dispatch windows, temperature requirements, worker safety and operational constraints.",
  },

  {
    number: "05",
    title: "Approve",
    text:
      "Route explainable recommendations through warehouse, facilities and operational human-in-the-loop approval workflows.",
  },

  {
    number: "06",
    title: "Measure",
    text:
      "Compare results against established baselines to quantify energy reduction, peak-demand reduction, financial savings, associated CO₂ outcomes and operational performance.",
  },
];


/* =========================================================
   PILOT SCOPE
========================================================= */

const pilotItems = [
  "Warehouse energy baseline and priority-system assessment",
  "BMS, smart-meter, sub-meter and available telemetry integration",
  "Conveyor, HVAC, refrigeration and after-hours energy analysis",
  "Forklift, AGV and fleet-EV charging coordination",
  "Peak-demand, Solar PV and battery optimisation scenarios",
  "Digital Twin investigation and AI-recommended actions",
  "Human-in-the-loop warehouse and operations approval workflow",
  "Energy cost, peak demand, associated CO₂ and ROI measurement",
];


export default function WarehouseLogisticsAI({ openPilotModal }) {
  const handlePilotClick = () => {
    if (typeof openPilotModal === "function") {
      openPilotModal();
      return;
    }

    document
      .getElementById("warehouse-logistics-pilot")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };


  return (
    <main className="warehouseLogisticsPage">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="warehouseLogisticsHero">

        <motion.div
          className="warehouseLogisticsHeroContent"
          variants={stagger}
          initial="hidden"
          animate="show"
        >

          <motion.div
            className="warehouseLogisticsBadge"
            variants={fadeUp}
          >
            <Warehouse size={17} />
            EnerG IQ Tech Warehouse & Logistics AI
          </motion.div>


          <motion.h1 variants={fadeUp}>
            Reduce Warehouse & Logistics Energy Costs & CO₂ Emissions
            Without Compromising Throughput.
          </motion.h1>


          <motion.p
            className="warehouseLogisticsLead"
            variants={fadeUp}
          >
            EnerG IQ Tech Warehouse & Logistics AI helps warehouse operators,
            distribution centres and logistics facilities identify and reduce
            energy waste, peak demand and associated CO₂ emissions across
            material handling, refrigeration, HVAC, charging and automation -
            while protecting throughput, dispatch schedules, temperature
            requirements and operational reliability.
          </motion.p>


          <motion.p
            className="warehouseLogisticsDescription"
            variants={fadeUp}
          >
            Edge AI analyses conveyors, sortation, cold storage, warehouse
            HVAC, automation, charging and other operational systems in real
            time. The AI Energy Gateway connects BMS, meters, warehouse
            equipment, Solar PV, batteries and available telemetry so
            EnerG IQ Tech can identify inefficiencies, recommend governed
            optimisation actions and measure resulting energy, financial and
            carbon outcomes.
          </motion.p>


          <motion.div
            className="warehouseLogisticsHeroButtons"
            variants={fadeUp}
          >

          
             
            <Link to="/book-discussion" className="warehouseLogisticsPrimaryBtn">
              Book a Discussion
              <ChevronRight size={19} />
            </Link>


            <a
              href="#warehouse-logistics-workflow"
              className="warehouseLogisticsSecondaryBtn"
            >
              View AI Workflow
            </a>

          </motion.div>


          <motion.div
            className="warehouseLogisticsHeroTags"
            variants={fadeUp}
          >

            <span>
              <Zap size={15} />
              Energy Cost Reduction
            </span>

            <span>
              <Leaf size={15} />
              CO₂ Reduction
            </span>

            <span>
              <Gauge size={15} />
              Peak Demand
            </span>

            <span>
              <PackageSearch size={15} />
              Throughput Protected
            </span>

          </motion.div>

        </motion.div>


        {/* =====================================================
            HERO DASHBOARD
        ===================================================== */}

        <motion.div
          className="warehouseLogisticsHeroVisual"
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

          <div className="warehouseLogisticsDashboard">

            <div className="warehouseLogisticsDashboardTop">

              <div>

                <strong>
                  Warehouse Energy Optimisation
                </strong>

                <span>
                  Energy, demand and operational overview
                </span>

              </div>


              <b>
                <Activity size={14} />
                Live
              </b>

            </div>


            <div className="warehouseLogisticsKpis">

              <div>

                <small>
                  Warehouse Sites
                </small>

                <strong>
                  4
                </strong>

                <span>
                  Connected logistics facilities
                </span>

              </div>


              <div>

                <small>
                  Asset Classes
                </small>

                <strong>
                  15
                </strong>

                <span>
                  Energy-intensive systems
                </span>

              </div>


              <div>

                <small>
                  Opportunities
                </small>

                <strong>
                  42
                </strong>

                <span>
                  Energy optimisation items
                </span>

              </div>


              <div>

                <small>
                  After-Hours Load
                </small>

                <strong>
                  17%
                </strong>

                <span>
                  Indicative opportunity
                </span>

              </div>

            </div>


            <div className="warehouseLogisticsInsightCard">

              <div className="warehouseLogisticsInsightIcon">
                <Brain size={22} />
              </div>


              <div>

                <strong>
                  AI Energy Recommendation
                </strong>

                <p>
                  Sortation Line 2 and aisle lighting remain active after the
                  evening dispatch window. Review an approved shutdown
                  sequence to reduce unnecessary energy consumption while
                  retaining dock, security and safety lighting.
                </p>

              </div>

            </div>


            <div className="warehouseLogisticsApproval">

              <span>
                <ShieldCheck size={18} />
                Operations approval required before execution
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

      <section className="warehouseLogisticsStrip">

        <span>
          Connect
        </span>

        <ArrowRight size={15} />

        <span>
          Detect Waste
        </span>

        <ArrowRight size={15} />

        <span>
          Analyse
        </span>

        <ArrowRight size={15} />

        <span>
          Optimise
        </span>

        <ArrowRight size={15} />

        <span>
          Approve
        </span>

        <ArrowRight size={15} />

        <span>
          Measure Savings
        </span>

      </section>


      {/* =========================================================
          WAREHOUSE & LOGISTICS ENERGY CHALLENGE
      ========================================================= */}

      <section className="warehouseLogisticsSection warehouseLogisticsChallengeSection">

        <div className="warehouseLogisticsSectionHeader">

          <p>
            Warehouse & Logistics Energy Challenge
          </p>


          <h2>
            High Energy Costs & CO₂ Emissions Across Automation,
            Refrigeration and Shift-Based Operations.
          </h2>


          <span>
            Warehouses and logistics facilities combine conveyors,
            refrigeration, HVAC, lighting, charging and automated systems
            across changing operational schedules. The challenge is reducing
            energy consumption, peak demand and associated emissions without
            compromising fulfilment throughput, cold-chain integrity,
            dispatch schedules or safety.
          </span>

        </div>


        <div className="warehouseLogisticsChallengeGrid">

          <article>

            <div className="warehouseLogisticsIcon">
              <Zap size={24} />
            </div>

            <h3>
              High Energy Costs & Peak Demand
            </h3>

            <p>
              Conveyors, refrigeration, HVAC, automation and charging can
              create significant electricity expenditure and rapidly changing
              demand peaks.
            </p>

          </article>


          <article>

            <div className="warehouseLogisticsIcon">
              <Leaf size={24} />
            </div>

            <h3>
              CO₂ Reduction Requirements
            </h3>

            <p>
              Reducing unnecessary electricity consumption and improving
              renewable-energy utilisation can lower associated CO₂ emissions
              and support logistics sustainability objectives.
            </p>

          </article>


          <article>

            <div className="warehouseLogisticsIcon">
              <PackageSearch size={24} />
            </div>

            <h3>
              Throughput & Dispatch Constraints
            </h3>

            <p>
              Optimisation must preserve fulfilment speed, sortation capacity,
              dispatch windows and critical warehouse operating requirements.
            </p>

          </article>


          <article>

            <div className="warehouseLogisticsIcon">
              <Refrigerator size={24} />
            </div>

            <h3>
              Cold-Chain & Temperature Requirements
            </h3>

            <p>
              Refrigeration optimisation must maintain required temperatures,
              cold-chain compliance and product integrity.
            </p>

          </article>

        </div>

      </section>


      {/* =========================================================
          CONNECTED WAREHOUSE ASSETS
      ========================================================= */}

      <section className="warehouseLogisticsSection warehouseLogisticsAssetsSection">

        <div className="warehouseLogisticsSectionHeader">

          <p>
            Connected Warehouse Assets
          </p>


          <h2>
            Optimise the Systems Driving Warehouse & Logistics Energy Costs.
          </h2>


          <span>
            The AI Energy Gateway connects existing warehouse infrastructure,
            automation, refrigeration, meters and available telemetry so
            EnerG IQ Tech can identify energy waste and optimisation
            opportunities without requiring wholesale replacement of
            existing logistics systems.
          </span>

        </div>


        <motion.div
          className="warehouseLogisticsAssetsGrid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.08,
          }}
        >

          {warehouseAssets.map((asset) => {
            const Icon = asset.icon;

            return (
              <motion.article
                className="warehouseLogisticsAssetCard"
                variants={fadeUp}
                key={asset.title}
              >

                <div className="warehouseLogisticsIcon">
                  <Icon size={23} />
                </div>

                <h3>
                  {asset.title}
                </h3>

                <p>
                  {asset.text}
                </p>

              </motion.article>
            );
          })}

        </motion.div>

      </section>


      {/* =========================================================
          AI OPTIMISATION SCENARIOS
      ========================================================= */}

      <section className="warehouseLogisticsSection warehouseLogisticsScenarioSection">

        <div className="warehouseLogisticsSectionHeader">

          <p>
            AI Optimisation Scenarios
          </p>


          <h2>
            Turn Warehouse Energy Waste Into Measurable Cost & Carbon
            Reduction Opportunities.
          </h2>


          <span>
            EnerG IQ Tech combines the AI Energy Gateway, Digital Twin,
            Decision Agents and human-in-the-loop governance to identify
            practical optimisation opportunities while protecting throughput,
            temperature, dispatch schedules and operational reliability.
          </span>

        </div>


        <div className="warehouseLogisticsScenarioGrid">

          {scenarios.map((scenario) => {
            const Icon = scenario.icon;

            return (
              <article
                className="warehouseLogisticsScenarioCard"
                key={scenario.title}
              >

                <div className="warehouseLogisticsScenarioTop">

                  <div className="warehouseLogisticsIcon">
                    <Icon size={23} />
                  </div>

                  <span>
                    AI Scenario
                  </span>

                </div>


                <h3>
                  {scenario.title}
                </h3>

                <p>
                  {scenario.text}
                </p>


                <div className="warehouseLogisticsOutcome">

                  <CheckCircle2 size={17} />

                  {scenario.outcome}

                </div>

              </article>
            );
          })}

        </div>

      </section>


      {/* =========================================================
          END-TO-END WORKFLOW
      ========================================================= */}

      <section
        className="warehouseLogisticsSection warehouseLogisticsWorkflowSection"
        id="warehouse-logistics-workflow"
      >

        <div className="warehouseLogisticsSectionHeader warehouseLogisticsSectionHeaderLight">

          <p>
            End-to-End AI Workflow
          </p>


          <h2>
            From Warehouse Energy Data to Measurable Savings.
          </h2>


          <span>
            EnerG IQ Tech transforms warehouse and logistics telemetry into
            explainable, governed optimisation recommendations and measures
            resulting energy, financial and associated CO₂ outcomes while
            keeping operations and facilities teams in control.
          </span>

        </div>


        <div className="warehouseLogisticsWorkflow">

          {workflowSteps.map((step) => (

            <div
              className="warehouseLogisticsWorkflowStep"
              key={step.number}
            >

              <b>
                {step.number}
              </b>


              <div>

                <h3>
                  {step.title}
                </h3>

                <p>
                  {step.text}
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* =========================================================
          SHARED PLATFORM
      ========================================================= */}

      <section className="warehouseLogisticsSection warehouseLogisticsPlatformSection">

        <div className="warehouseLogisticsPlatformPanel">

          <div className="warehouseLogisticsPlatformCopy">

            <p>
              Shared EnerG IQ Tech Platform
            </p>


            <h2>
              Warehouse & Logistics Optimisation Built on One Energy
              Intelligence Architecture.
            </h2>


            <span>
              Warehouse & Logistics AI uses the shared EnerG IQ Tech
              architecture to connect operational assets, identify energy
              waste, recommend governed optimisation actions and quantify
              energy, financial and associated carbon outcomes.
            </span>


            <ul>

              <li>
                <CheckCircle2 size={18} />
                AI Energy Gateway connectivity
              </li>

              <li>
                <CheckCircle2 size={18} />
                Digital Twin warehouse context
              </li>

              <li>
                <CheckCircle2 size={18} />
                Configurable AI Decision Agents
              </li>

              <li>
                <CheckCircle2 size={18} />
                Human-in-the-loop operations governance
              </li>

              <li>
                <CheckCircle2 size={18} />
                Energy, cost, CO₂ and ROI intelligence
              </li>

            </ul>

          </div>


          <div className="warehouseLogisticsPlatformFlow">

            <div className="warehouseLogisticsPlatformNode">

              <Warehouse size={25} />

              <span>
                Warehouse Assets
              </span>

            </div>


            <ChevronRight size={20} />


            <div className="warehouseLogisticsPlatformNode featured">

              <Cpu size={25} />

              <span>
                AI Energy Gateway
              </span>

            </div>


            <ChevronRight size={20} />


            <div className="warehouseLogisticsPlatformNode">

              <Layers3 size={25} />

              <span>
                Digital Twin
              </span>

            </div>


            <ChevronRight size={20} />


            <div className="warehouseLogisticsPlatformNode">

              <Brain size={25} />

              <span>
                AI Optimisation
              </span>

            </div>


            <ChevronRight size={20} />


            <div className="warehouseLogisticsPlatformNode">

              <ShieldCheck size={25} />

              <span>
                Measured Outcomes
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          PILOT PROGRAM
      ========================================================= */}

      <section
        className="warehouseLogisticsSection warehouseLogisticsPilotSection"
        id="warehouse-logistics-pilot"
      >

        <div className="warehouseLogisticsPilotBox">

          <div className="warehouseLogisticsPilotCopy">

            <p>
              Warehouse & Logistics Pilot Program
            </p>


            <h2>
              Start With One Warehouse Energy Problem. Prove the Savings
              Before Scaling.
            </h2>


            <span>
              Establish an energy baseline for one warehouse, distribution
              centre or high-value operational system, identify optimisation
              opportunities and quantify potential energy-cost, peak-demand
              and associated CO₂ outcomes while validating throughput,
              temperature, safety and dispatch safeguards before broader
              deployment.
            </span>


            <button
              type="button"
              className="warehouseLogisticsPrimaryBtn"
              onClick={handlePilotClick}
            >
              Discuss a Warehouse Pilot
              <ChevronRight size={18} />
            </button>

          </div>


          <div className="warehouseLogisticsPilotList">

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

      <section className="warehouseLogisticsCta">

        <div>

          <p>
            Now Onboarding Warehouse & Logistics Pilot Partners
          </p>


          <h2>
            Reduce Warehouse Energy Costs & CO₂ Emissions Without
            Compromising Throughput or Temperature.
          </h2>


          <span>
            Start with one measurable warehouse or logistics energy
            challenge. Establish the baseline, identify energy waste and
            determine whether the potential financial and carbon outcomes
            justify broader deployment - while protecting throughput,
            cold-chain requirements, dispatch schedules and operational
            reliability.
          </span>

        </div>


        <div className="warehouseLogisticsCtaActions">

        
          <Link to="/book-discussion" className="warehouseLogisticsPrimaryBtn">
            Book a Discussion
            <ChevronRight size={19} />
          </Link>

        </div>

      </section>

    </main>
  );
}