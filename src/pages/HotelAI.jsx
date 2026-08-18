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
  ChefHat,
  Cpu,
  Droplets,
  Dumbbell,
  Gauge,
  Hotel,
  Layers3,
  Leaf,
  Lightbulb,
  PackageOpen,
  Refrigerator,
  ShieldCheck,
  SunMedium,
  Thermometer,
  Users,
  Waves,
  Zap,
} from "lucide-react";

import "../styles/HotelAI.css";


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
   CONNECTED HOTEL ASSETS
========================================================= */

const hotelAssets = [
  {
    icon: Hotel,
    title: "Guest Room HVAC",
    text:
      "Reduce unnecessary room heating and cooling by coordinating occupancy, booking status, temperature and guest-comfort requirements.",
  },

  {
    icon: Building2,
    title: "Lobby & Common Area HVAC",
    text:
      "Optimise air conditioning, ventilation and operating schedules across lobbies, corridors, lounges and shared spaces to reduce avoidable energy use.",
  },

  {
    icon: Waves,
    title: "Chiller & Boiler Plant",
    text:
      "Improve chiller, boiler, pump and central-plant sequencing to reduce energy consumption while maintaining hotel thermal requirements.",
  },

  {
    icon: Thermometer,
    title: "Domestic Hot Water",
    text:
      "Optimise hot-water generation, storage, recirculation and setpoints around guest-demand patterns to reduce thermal energy costs.",
  },

  {
    icon: ChefHat,
    title: "Kitchen & Restaurant",
    text:
      "Identify avoidable energy use across cooking equipment, ventilation, refrigeration, hot water and service schedules.",
  },

  {
    icon: PackageOpen,
    title: "Laundry Operations",
    text:
      "Analyse washers, dryers, steam, hot water and operating schedules to reduce unnecessary thermal and electrical loads.",
  },

  {
    icon: Refrigerator,
    title: "Food Refrigeration",
    text:
      "Detect inefficient refrigeration operation, compressor cycling and abnormal energy use while maintaining required temperatures.",
  },

  {
    icon: Lightbulb,
    title: "Rooms & Common Lighting",
    text:
      "Reduce lighting energy consumption across guest rooms, corridors, lobbies and back-of-house areas using occupancy and schedules.",
  },

  {
    icon: Activity,
    title: "Guest & Service Lifts",
    text:
      "Monitor lift demand, standby loads, service schedules and abnormal power behaviour to identify energy-saving opportunities.",
  },

  {
    icon: Dumbbell,
    title: "Pool, Spa & Wellness",
    text:
      "Analyse pool heating, filtration, pumps and ventilation to identify high-value thermal and electrical energy optimisation opportunities.",
  },

  {
    icon: Users,
    title: "Conference & Events",
    text:
      "Coordinate HVAC, lighting and equipment around event bookings and occupancy to avoid conditioning or powering unused spaces.",
  },

  {
    icon: BatteryCharging,
    title: "Guest & Fleet EV Charging",
    text:
      "Schedule charging around hotel demand, tariffs and renewable generation to reduce peak-demand exposure and charging costs.",
  },

  {
    icon: SunMedium,
    title: "Solar & Battery",
    text:
      "Coordinate solar generation and battery dispatch to improve onsite renewable utilisation, reduce grid demand and lower associated carbon impact.",
  },

  {
    icon: Droplets,
    title: "Water & Pumps",
    text:
      "Identify excessive runtime, pressure loss and inefficient pumping that contribute to avoidable hotel energy consumption.",
  },

  {
    icon: Gauge,
    title: "Hotel Energy Centre",
    text:
      "Coordinate electricity, gas, hot water, chillers, boilers, solar and battery systems to improve whole-property energy efficiency.",
  },
];


/* =========================================================
   AI OPTIMISATION SCENARIOS
========================================================= */

const scenarios = [
  {
    icon: Hotel,
    title: "Guest Room HVAC Optimisation",
    text:
      "Align room HVAC with occupancy, check-in status, comfort bands and housekeeping activity.",
    outcome: "Reduce room energy cost & CO₂ impact",
  },

  {
    icon: Thermometer,
    title: "Hot Water Optimisation",
    text:
      "Improve storage temperatures, recirculation, boiler schedules and demand forecasting.",
    outcome: "Reduce hot-water energy costs",
  },

  {
    icon: Waves,
    title: "Chiller & Boiler Sequencing",
    text:
      "Improve central-plant performance using occupancy, weather and hotel-load forecasts.",
    outcome: "Reduce central-plant energy use",
  },

  {
    icon: ChefHat,
    title: "Kitchen & Laundry Load Management",
    text:
      "Coordinate high-load equipment schedules and identify avoidable standby consumption.",
    outcome: "Reduce back-of-house energy demand",
  },

  {
    icon: Users,
    title: "Event-Driven Energy Scheduling",
    text:
      "Prepare HVAC and lighting around event bookings without conditioning or powering spaces unnecessarily.",
    outcome: "Reduce event-space energy waste",
  },

  {
    icon: BatteryCharging,
    title: "EV, Solar & Battery Coordination",
    text:
      "Coordinate charging and battery dispatch around hotel demand, tariffs and renewable generation.",
    outcome: "Reduce peak demand & grid costs",
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
      "Connect BMS, meters, guest-room systems, central plant, hot water, kitchens, laundry, EV charging and DER telemetry through the AI Energy Gateway.",
  },

  {
    number: "02",
    title: "Detect",
    text:
      "Identify energy waste, occupancy mismatches, abnormal equipment behaviour, peak-demand events and unnecessary after-hours loads.",
  },

  {
    number: "03",
    title: "Analyse",
    text:
      "Use AI Decision Agents and Digital Twin context to investigate root causes and quantify potential energy, financial and emissions impact.",
  },

  {
    number: "04",
    title: "Simulate",
    text:
      "Evaluate optimisation actions against guest comfort, booking patterns, occupancy, event schedules and operational requirements.",
  },

  {
    number: "05",
    title: "Approve",
    text:
      "Route explainable recommendations through hotel engineering and governed human-in-the-loop approval workflows.",
  },

  {
    number: "06",
    title: "Measure",
    text:
      "Compare results against established baselines to quantify energy reduction, peak-demand reduction, financial savings, associated CO₂ outcomes and guest-service performance.",
  },
];


/* =========================================================
   PILOT
========================================================= */

const pilotItems = [
  "Hotel energy baseline and priority-system assessment",
  "BMS, smart-meter, room-control and available telemetry integration",
  "Guest-room HVAC, central-plant, hot-water and after-hours analysis",
  "Kitchen, laundry, refrigeration and event-space optimisation scenarios",
  "Peak-demand and occupancy-driven energy analysis",
  "EV charging, solar and battery coordination opportunities",
  "Digital Twin investigation and AI-recommended actions",
  "Human-in-the-loop engineering approval workflow",
  "Energy cost, peak demand, associated CO₂ and ROI measurement",
];


export default function HotelAI({ openPilotModal }) {
  const handlePilotClick = () => {
    if (typeof openPilotModal === "function") {
      openPilotModal();
      return;
    }

    document
      .getElementById("hotel-pilot")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };


  return (
    <main className="hotelPage">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="hotelHero">

        <motion.div
          className="hotelHeroContent"
          variants={stagger}
          initial="hidden"
          animate="show"
        >

          <motion.div
            className="hotelBadge"
            variants={fadeUp}
          >
            <Hotel size={17} />
            EnerG IQ Tech Hotel AI
          </motion.div>


          <motion.h1 variants={fadeUp}>
            Reduce Hotel Energy Costs & CO₂ Emissions Without
            Compromising Guest Comfort.
          </motion.h1>


          <motion.p
            className="hotelLead"
            variants={fadeUp}
          >
            EnerG IQ Tech Hotel AI helps hotels reduce energy waste,
            peak demand and associated CO₂ emissions across guest rooms,
            central plant and hotel services - while protecting guest
            comfort, service quality and operational reliability.
          </motion.p>


          <motion.p
            className="hotelDescription"
            variants={fadeUp}
          >
            Edge AI analyses guest-room HVAC, chillers, boilers, hot water,
            kitchens, laundry, refrigeration, event spaces and other hotel
            systems in real time. The AI Energy Gateway connects BMS, meters,
            room controls and connected energy assets so EnerG IQ Tech can
            identify inefficiencies, recommend governed optimisation actions
            and measure resulting energy, financial and carbon outcomes.
          </motion.p>


          <motion.div
            className="hotelHeroButtons"
            variants={fadeUp}
          >

           
            <Link to="/book-pilot" className="hotelPrimaryBtn">
              Request Hotel Pilot
              <ChevronRight size={19} />
            </Link>

            <a
              href="#hotel-workflow"
              className="hotelSecondaryBtn"
            >
              View AI Workflow
            </a>

          </motion.div>


          <motion.div
            className="hotelHeroTags"
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
              <Hotel size={15} />
              Guest Comfort
            </span>

          </motion.div>

        </motion.div>


        {/* =====================================================
            HERO DASHBOARD
        ===================================================== */}

        <motion.div
          className="hotelHeroVisual"
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

          <div className="hotelDashboard">

            <div className="hotelDashboardTop">

              <div>
                <strong>
                  Hotel Energy Optimisation
                </strong>

                <span>
                  Energy, demand and guest-comfort overview
                </span>
              </div>


              <b>
                <Activity size={14} />
                Live
              </b>

            </div>


            <div className="hotelKpis">

              <div>
                <small>Hotels</small>
                <strong>4</strong>
                <span>Connected properties</span>
              </div>


              <div>
                <small>Asset Classes</small>
                <strong>15</strong>
                <span>Energy-intensive systems</span>
              </div>


              <div>
                <small>Opportunities</small>
                <strong>39</strong>
                <span>Energy optimisation items</span>
              </div>


              <div>
                <small>Room HVAC Waste</small>
                <strong>16%</strong>
                <span>Indicative opportunity</span>
              </div>

            </div>


            <div className="hotelInsightCard">

              <div className="hotelInsightIcon">
                <Brain size={22} />
              </div>


              <div>

                <strong>
                  AI Energy Recommendation
                </strong>

                <p>
                  Twelve unoccupied rooms are maintaining full cooling after
                  checkout. Review approved setback temperatures until the
                  next confirmed check-in window to reduce unnecessary energy
                  consumption while preserving guest-comfort requirements.
                </p>

              </div>

            </div>


            <div className="hotelApproval">

              <span>
                <ShieldCheck size={18} />
                Engineering approval required before execution
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

      <section className="hotelStrip">

        <span>Connect</span>
        <ArrowRight size={15} />

        <span>Detect Waste</span>
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
          HOTEL ENERGY CHALLENGE
      ========================================================= */}

      <section className="hotelSection hotelChallengeSection">

        <div className="hotelSectionHeader">

          <p>
            Hotel Energy Challenge
          </p>

          <h2>
            High Hotel Energy Costs & CO₂ Emissions - With Guest
            Comfort Always Protected.
          </h2>

          <span>
            Hotels operate energy-intensive HVAC, hot water, central plant,
            kitchens, laundry, refrigeration and event facilities against
            highly variable occupancy. The challenge is reducing energy
            consumption, peak demand and associated emissions without
            affecting guest comfort or service quality.
          </span>

        </div>


        <div className="hotelChallengeGrid">

          <article>

            <div className="hotelIcon">
              <Zap size={24} />
            </div>

            <h3>
              High Energy Costs
            </h3>

            <p>
              HVAC, hot water, chillers, boilers, kitchens and laundry create
              significant electricity and thermal energy expenditure.
            </p>

          </article>


          <article>

            <div className="hotelIcon">
              <Leaf size={24} />
            </div>

            <h3>
              CO₂ Reduction Requirements
            </h3>

            <p>
              Reducing unnecessary energy consumption can lower associated
              CO₂ emissions and support hotel sustainability and
              decarbonisation objectives.
            </p>

          </article>


          <article>

            <div className="hotelIcon">
              <Hotel size={24} />
            </div>

            <h3>
              Guest Comfort Constraints
            </h3>

            <p>
              Optimisation must protect room comfort, hot-water availability,
              indoor environmental conditions and service expectations.
            </p>

          </article>


          <article>

            <div className="hotelIcon">
              <Gauge size={24} />
            </div>

            <h3>
              Occupancy & Peak Demand
            </h3>

            <p>
              Guest activity, check-in patterns, events, kitchens and
              back-of-house operations can create rapidly changing loads and
              expensive demand peaks.
            </p>

          </article>

        </div>

      </section>


      {/* =========================================================
          CONNECTED HOTEL ASSETS
      ========================================================= */}

      <section className="hotelSection hotelAssetsSection">

        <div className="hotelSectionHeader">

          <p>
            Connected Hotel Assets
          </p>

          <h2>
            Optimise the Systems Driving Hotel Energy Costs.
          </h2>

          <span>
            The AI Energy Gateway connects existing BMS, room controls,
            meters, hotel services and energy assets so EnerG IQ Tech can
            identify energy waste and optimisation opportunities without
            requiring wholesale replacement of hotel infrastructure.
          </span>

        </div>


        <motion.div
          className="hotelAssetsGrid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.08,
          }}
        >

          {hotelAssets.map((asset) => {
            const Icon = asset.icon;

            return (
              <motion.article
                className="hotelAssetCard"
                variants={fadeUp}
                key={asset.title}
              >

                <div className="hotelIcon">
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

      <section className="hotelSection hotelScenarioSection">

        <div className="hotelSectionHeader">

          <p>
            AI Optimisation Scenarios
          </p>

          <h2>
            Turn Hotel Energy Waste Into Measurable Cost & Carbon
            Reduction Opportunities.
          </h2>

          <span>
            EnerG IQ Tech combines the AI Energy Gateway, Digital Twin,
            Decision Agents and human-in-the-loop governance to identify
            practical optimisation opportunities while protecting guest
            comfort and hotel operations.
          </span>

        </div>


        <div className="hotelScenarioGrid">

          {scenarios.map((scenario) => {
            const Icon = scenario.icon;

            return (
              <article
                className="hotelScenarioCard"
                key={scenario.title}
              >

                <div className="hotelScenarioTop">

                  <div className="hotelIcon">
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


                <div className="hotelOutcome">
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
        className="hotelSection hotelWorkflowSection"
        id="hotel-workflow"
      >

        <div className="hotelSectionHeader hotelSectionHeaderLight">

          <p>
            End-to-End AI Workflow
          </p>

          <h2>
            From Hotel Energy Data to Measurable Savings.
          </h2>

          <span>
            EnerG IQ Tech transforms hotel telemetry into explainable,
            governed optimisation recommendations and measures resulting
            energy, financial and associated CO₂ outcomes while keeping
            engineering and hotel operations teams in control.
          </span>

        </div>


        <div className="hotelWorkflow">

          {workflowSteps.map((step) => (

            <div
              className="hotelWorkflowStep"
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

      <section className="hotelSection hotelPlatformSection">

        <div className="hotelPlatformPanel">

          <div className="hotelPlatformCopy">

            <p>
              Shared EnerG IQ Tech Platform
            </p>

            <h2>
              Hotel-Specific Optimisation Built on One Energy Intelligence
              Architecture.
            </h2>

            <span>
              Hotel AI uses the shared EnerG IQ Tech architecture to connect
              hotel systems, identify energy waste, recommend governed
              optimisation actions and quantify energy, financial and
              associated carbon outcomes.
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


          <div className="hotelPlatformFlow">

            <div className="hotelPlatformNode">

              <Hotel size={25} />

              <span>
                Hotel Assets
              </span>

            </div>


            <ChevronRight size={20} />


            <div className="hotelPlatformNode featured">

              <Cpu size={25} />

              <span>
                AI Energy Gateway
              </span>

            </div>


            <ChevronRight size={20} />


            <div className="hotelPlatformNode">

              <Layers3 size={25} />

              <span>
                Digital Twin
              </span>

            </div>


            <ChevronRight size={20} />


            <div className="hotelPlatformNode">

              <Brain size={25} />

              <span>
                AI Optimisation
              </span>

            </div>


            <ChevronRight size={20} />


            <div className="hotelPlatformNode">

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
        className="hotelSection hotelPilotSection"
        id="hotel-pilot"
      >

        <div className="hotelPilotBox">

          <div className="hotelPilotCopy">

            <p>
              Hotel Pilot Program
            </p>

            <h2>
              Start With One Hotel Energy Problem. Prove the Savings
              Before Scaling.
            </h2>

            <span>
              Establish an energy baseline for one property or high-value
              hotel system, identify optimisation opportunities and quantify
              potential energy-cost, peak-demand and associated CO₂ outcomes
              while validating guest-comfort and operational safeguards before
              portfolio-wide deployment.
            </span>


            <button
              type="button"
              className="hotelPrimaryBtn"
              onClick={handlePilotClick}
            >
              Discuss a Hotel Pilot
              <ChevronRight size={18} />
            </button>

          </div>


          <div className="hotelPilotList">

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

      <section className="hotelCta">

        <div>

          <p>
            Now Onboarding Hotel Pilot Partners
          </p>

          <h2>
            Reduce Hotel Energy Costs & CO₂ Emissions Without
            Compromising Guest Comfort.
          </h2>

          <span>
            Start with one measurable hotel energy challenge. Establish the
            baseline, identify energy waste and determine whether the
            potential financial and carbon outcomes justify broader
            deployment - while protecting guest comfort, service quality and
            operational reliability.
          </span>

        </div>


        <div className="hotelCtaActions">

        
          <Link to="/book-pilot" className="hotelPrimaryBtn">
            Request Pilot
            <ChevronRight size={19} />
          </Link>

        </div>

      </section>

    </main>
  );
}