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
  Lamp,
  Layers3,
  Lightbulb,
  Microwave,
  PackageOpen,
  Refrigerator,
  ShieldCheck,
  Sparkles,
  SunMedium,
  Thermometer,
  Users,
  Waves,
  Zap,
} from "lucide-react";
import "../styles/HotelAI.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const hotelAssets = [
  {
    icon: Hotel,
    title: "Guest Room HVAC",
    text: "Optimise room heating and cooling using occupancy, booking status, temperature and guest-comfort requirements.",
  },
  {
    icon: Building2,
    title: "Lobby & Common Area HVAC",
    text: "Manage air conditioning, ventilation and schedules across lobbies, corridors, lounges and shared spaces.",
  },
  {
    icon: Waves,
    title: "Chiller & Boiler Plant",
    text: "Analyse chiller, boiler, pump and central-plant sequencing, efficiency and operating conditions.",
  },
  {
    icon: Thermometer,
    title: "Domestic Hot Water",
    text: "Optimise hot-water generation, storage, recirculation, setpoints and guest-demand patterns.",
  },
  {
    icon: ChefHat,
    title: "Kitchen & Restaurant",
    text: "Monitor cooking equipment, ventilation, refrigeration, hot water and service schedules.",
  },
  {
    icon: PackageOpen,
    title: "Laundry Operations",
    text: "Analyse washers, dryers, steam, hot water, operating schedules and avoidable standby loads.",
  },
  {
    icon: Refrigerator,
    title: "Food Refrigeration",
    text: "Track cold rooms, freezers, display refrigeration, compressor cycling and temperature compliance.",
  },
  {
    icon: Lightbulb,
    title: "Rooms & Common Lighting",
    text: "Optimise guest-room, corridor, lobby and back-of-house lighting using occupancy and schedules.",
  },
  {
    icon: Activity,
    title: "Guest & Service Lifts",
    text: "Track lift demand, standby loads, service schedules and abnormal power behaviour.",
  },
  {
    icon: Dumbbell,
    title: "Pool, Spa & Wellness",
    text: "Analyse pool heating, filtration, pumps, ventilation and wellness-facility energy demand.",
  },
  {
    icon: Users,
    title: "Conference & Events",
    text: "Coordinate HVAC, lighting and equipment around event bookings, setup windows and occupancy.",
  },
  {
    icon: BatteryCharging,
    title: "Guest & Fleet EV Charging",
    text: "Schedule guest and fleet charging to reduce peaks and use lower-cost or renewable energy periods.",
  },
  {
    icon: SunMedium,
    title: "Solar & Battery",
    text: "Optimise solar self-consumption, battery dispatch, peak shaving and hotel energy resilience.",
  },
  {
    icon: Droplets,
    title: "Water & Pumps",
    text: "Identify excessive runtime, pressure loss, irrigation waste and inefficient pumping.",
  },
  {
    icon: Gauge,
    title: "Hotel Energy Centre",
    text: "Coordinate electricity, gas, hot water, chillers, boilers, solar, battery and central utilities.",
  },
];

const scenarios = [
  {
    icon: Hotel,
    title: "Guest Room HVAC Optimisation",
    text: "Align room HVAC with occupancy, check-in status, comfort bands and housekeeping activity.",
    outcome: "Reduce unoccupied-room energy use",
  },
  {
    icon: Thermometer,
    title: "Hot Water Optimisation",
    text: "Improve storage temperatures, recirculation, boiler schedules and demand forecasting.",
    outcome: "Reduce hot-water energy costs",
  },
  {
    icon: Waves,
    title: "Chiller & Boiler Sequencing",
    text: "Improve central-plant performance using occupancy, weather and hotel-load forecasts.",
    outcome: "Improve plant efficiency",
  },
  {
    icon: ChefHat,
    title: "Kitchen & Laundry Load Management",
    text: "Coordinate high-load equipment schedules and identify avoidable standby consumption.",
    outcome: "Reduce back-of-house demand",
  },
  {
    icon: Users,
    title: "Event-Driven Energy Scheduling",
    text: "Prepare HVAC and lighting around event bookings without running spaces unnecessarily.",
    outcome: "Reduce event-space waste",
  },
  {
    icon: BatteryCharging,
    title: "EV, Solar & Battery Coordination",
    text: "Coordinate charging and battery dispatch around hotel demand and renewable generation.",
    outcome: "Reduce peak-demand exposure",
  },
];

const workflowSteps = [
  {
    number: "01",
    title: "Connect",
    text: "Connect BMS, meters, guest-room systems, central plant, kitchen, laundry, EV charging and DER telemetry.",
  },
  {
    number: "02",
    title: "Detect",
    text: "Identify energy waste, abnormal equipment behaviour, peak-demand events and after-hours loads.",
  },
  {
    number: "03",
    title: "Analyse",
    text: "Use AI Decision Agents and Digital Twin context to investigate causes across rooms, plant and services.",
  },
  {
    number: "04",
    title: "Simulate",
    text: "Evaluate actions against guest comfort, occupancy, event schedules and operational constraints.",
  },
  {
    number: "05",
    title: "Approve",
    text: "Route recommendations through hotel engineering and operational approval workflows.",
  },
  {
    number: "06",
    title: "Measure",
    text: "Validate energy, cost, carbon and guest-service outcomes before scaling across the portfolio.",
  },
];

const pilotItems = [
  "Priority hotel site and energy-system assessment",
  "BMS, smart-meter, room-control or available telemetry integration",
  "Guest-room HVAC, central-plant, hot-water and after-hours analysis",
  "Kitchen, laundry, refrigeration and event-space scenarios",
  "EV charging, solar and battery optimisation",
  "Digital Twin investigation and human-approved recommendations",
  "Energy savings, carbon and ROI measurement",
];

export default function HotelAI({ openPilotModal }) {
  const handlePilotClick = () => {
    if (typeof openPilotModal === "function") {
      openPilotModal();
      return;
    }

    document.getElementById("hotel-pilot")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="hotelPage">
      <section className="hotelHero">
        <motion.div
          className="hotelHeroContent"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.div className="hotelBadge" variants={fadeUp}>
            <Hotel size={17} />
            Energ IQ Tech Hotel AI
          </motion.div>

          <motion.h1 variants={fadeUp}>
            Reduce Hotel Energy Costs Without Compromising Guest Comfort or
            Service Quality.
          </motion.h1>

          <motion.p className="hotelLead" variants={fadeUp}>
            Energ IQ Tech Hotel AI connects guest-room HVAC, common-area systems,
            central plant, hot water, kitchens, laundry, refrigeration, lifts,
            wellness facilities, event spaces, EV charging, solar and battery
            assets through the AI Energy Gateway.
          </motion.p>

          <motion.p className="hotelDescription" variants={fadeUp}>
            Edge AI analyses hotel operational data in real time, detects
            energy waste, occupancy mismatches, equipment inefficiencies and
            peak-demand events, then recommends governed optimisation actions.
          </motion.p>

          <motion.div className="hotelHeroButtons" variants={fadeUp}>
            <button
              type="button"
              className="hotelPrimaryBtn"
              onClick={handlePilotClick}
            >
              Request Hotel Pilot
              <ChevronRight size={18} />
            </button>

            <a href="#hotel-workflow" className="hotelSecondaryBtn">
              View AI Workflow
            </a>
          </motion.div>

          <motion.div className="hotelHeroTags" variants={fadeUp}>
            <span><Hotel size={15} /> Guest Room HVAC</span>
            <span><Thermometer size={15} /> Hot Water</span>
            <span><ChefHat size={15} /> Kitchen & Laundry</span>
            <span><SunMedium size={15} /> Solar & Battery</span>
          </motion.div>
        </motion.div>

        <motion.div
          className="hotelHeroVisual"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="hotelDashboard">
            <div className="hotelDashboardTop">
              <div>
                <strong>Hotel AI Portfolio</strong>
                <span>Hospitality operations overview</span>
              </div>

              <b><Activity size={14} /> Live</b>
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
                <span>Operational systems</span>
              </div>

              <div>
                <small>Opportunities</small>
                <strong>39</strong>
                <span>Current optimisation items</span>
              </div>

              <div>
                <small>Room HVAC Waste</small>
                <strong>16%</strong>
                <span>Portfolio opportunity</span>
              </div>
            </div>

            <div className="hotelInsightCard">
              <div className="hotelInsightIcon">
                <Brain size={22} />
              </div>

              <div>
                <strong>AI Recommendation</strong>
                <p>
                  Twelve unoccupied rooms are maintaining full cooling after
                  checkout. Apply approved setback temperatures until the next
                  confirmed check-in window.
                </p>
              </div>
            </div>

            <div className="hotelApproval">
              <span>
                <ShieldCheck size={18} />
                Engineering approval required before execution
              </span>

              <button type="button">Review Action</button>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="hotelStrip">
        <span>Connect</span>
        <ArrowRight size={15} />
        <span>Detect</span>
        <ArrowRight size={15} />
        <span>Analyse</span>
        <ArrowRight size={15} />
        <span>Simulate</span>
        <ArrowRight size={15} />
        <span>Approve</span>
        <ArrowRight size={15} />
        <span>Measure</span>
      </section>

      <section className="hotelSection hotelChallengeSection">
        <div className="hotelSectionHeader">
          <p>Hotel Energy Challenge</p>
          <h2>
            Hotels Must Balance Guest Comfort, Service Quality and Energy
            Performance.
          </h2>
          <span>
            Guest rooms, central plant, hot water, kitchens, laundry, events
            and wellness facilities create complex and highly variable demand.
          </span>
        </div>

        <div className="hotelChallengeGrid">
          <article>
            <div className="hotelIcon"><Hotel size={24} /></div>
            <h3>Occupancy-Driven Demand</h3>
            <p>
              Guest activity, check-in patterns and housekeeping schedules
              create rapidly changing operational loads.
            </p>
          </article>

          <article>
            <div className="hotelIcon"><Thermometer size={24} /></div>
            <h3>Comfort Constraints</h3>
            <p>
              Optimisation must preserve room comfort, water temperature and
              service expectations.
            </p>
          </article>

          <article>
            <div className="hotelIcon"><Zap size={24} /></div>
            <h3>High Back-of-House Loads</h3>
            <p>
              Kitchens, laundry, refrigeration and event operations can create
              expensive demand peaks.
            </p>
          </article>

          <article>
            <div className="hotelIcon"><Gauge size={24} /></div>
            <h3>Fragmented Systems</h3>
            <p>
              Room controls, BMS, meters, booking data and central plant often
              remain disconnected.
            </p>
          </article>
        </div>
      </section>

      <section className="hotelSection hotelAssetsSection">
        <div className="hotelSectionHeader">
          <p>Connected Hotel Assets</p>
          <h2>
            One AI Operating Layer Across Guest Rooms, Hotel Services and
            Connected Energy Systems.
          </h2>
          <span>
            The AI Energy Gateway connects existing hotel infrastructure and
            available telemetry without requiring wholesale replacement.
          </span>
        </div>

        <motion.div
          className="hotelAssetsGrid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.08 }}
        >
          {hotelAssets.map((asset) => {
            const Icon = asset.icon;

            return (
              <motion.article
                className="hotelAssetCard"
                variants={fadeUp}
                key={asset.title}
              >
                <div className="hotelIcon"><Icon size={23} /></div>
                <h3>{asset.title}</h3>
                <p>{asset.text}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </section>

      <section className="hotelSection hotelScenarioSection">
        <div className="hotelSectionHeader">
          <p>AI Optimisation Scenarios</p>
          <h2>
            Reduce Waste, Improve Asset Performance and Protect Guest
            Experience.
          </h2>
          <span>
            Each scenario uses the same AI Energy Gateway, Digital Twin,
            Decision Agents and human-in-the-loop approval workflow.
          </span>
        </div>

        <div className="hotelScenarioGrid">
          {scenarios.map((scenario) => {
            const Icon = scenario.icon;

            return (
              <article className="hotelScenarioCard" key={scenario.title}>
                <div className="hotelScenarioTop">
                  <div className="hotelIcon"><Icon size={23} /></div>
                  <span>AI Scenario</span>
                </div>

                <h3>{scenario.title}</h3>
                <p>{scenario.text}</p>

                <div className="hotelOutcome">
                  <CheckCircle2 size={17} />
                  {scenario.outcome}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section
        className="hotelSection hotelWorkflowSection"
        id="hotel-workflow"
      >
        <div className="hotelSectionHeader hotelSectionHeaderLight">
          <p>End-to-End AI Workflow</p>
          <h2>
            From Hotel Telemetry to Governed Operational Action.
          </h2>
          <span>
            Energ IQ Tech converts operational data into explainable recommendations
            while keeping engineering and hotel operations teams in control.
          </span>
        </div>

        <div className="hotelWorkflow">
          {workflowSteps.map((step) => (
            <div className="hotelWorkflowStep" key={step.number}>
              <b>{step.number}</b>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="hotelSection hotelPlatformSection">
        <div className="hotelPlatformPanel">
          <div className="hotelPlatformCopy">
            <p>Shared Energ IQ Tech Platform</p>

            <h2>
              Hotel AI Is an Industry Pack Built on the Shared Energ IQ Tech
              Architecture.
            </h2>

            <span>
              The same AI Energy Gateway, Digital Twin, Decision Agents,
              human-in-the-loop governance and Savings Intelligence support all
              Energ IQ Tech industry environments.
            </span>

            <ul>
              <li><CheckCircle2 size={18} /> Reusable AI Energy Gateway</li>
              <li><CheckCircle2 size={18} /> Shared Digital Twin architecture</li>
              <li><CheckCircle2 size={18} /> Configurable AI Decision Agents</li>
              <li><CheckCircle2 size={18} /> Human-in-the-loop governance</li>
              <li><CheckCircle2 size={18} /> Savings and ROI intelligence</li>
            </ul>
          </div>

          <div className="hotelPlatformFlow">
            <div className="hotelPlatformNode">
              <Hotel size={25} />
              <span>Hotel Assets</span>
            </div>

            <ChevronRight size={20} />

            <div className="hotelPlatformNode featured">
              <Cpu size={25} />
              <span>AI Energy Gateway</span>
            </div>

            <ChevronRight size={20} />

            <div className="hotelPlatformNode">
              <Layers3 size={25} />
              <span>Digital Twin</span>
            </div>

            <ChevronRight size={20} />

            <div className="hotelPlatformNode">
              <Brain size={25} />
              <span>Decision Agents</span>
            </div>

            <ChevronRight size={20} />

            <div className="hotelPlatformNode">
              <ShieldCheck size={25} />
              <span>Approved Actions</span>
            </div>
          </div>
        </div>
      </section>

      <section className="hotelSection hotelPilotSection" id="hotel-pilot">
        <div className="hotelPilotBox">
          <div className="hotelPilotCopy">
            <p>Hotel Pilot Program</p>
            <h2>
              Start With One Property, One High-Value Use Case and Measurable
              ROI.
            </h2>
            <span>
              A staged pilot validates data, guest-comfort safeguards,
              optimisation scenarios and measurable value before
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
            <h3>Indicative Pilot Scope</h3>

            <ul>
              {pilotItems.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="hotelCta">
        <div>
          <p>Now Onboarding Pilot Partners</p>
          <h2>
            Reduce Hotel Energy Costs While Protecting Guest Comfort and
            Service Quality.
          </h2>
          <span>
            Energ IQ Tech is seeking hotels, hospitality groups, facility teams and
            technology partners for pilot collaboration.
          </span>
        </div>

        <div className="hotelCtaActions">
          <button
            type="button"
            className="hotelPrimaryBtn"
            onClick={handlePilotClick}
          >
            Request Pilot
            <ChevronRight size={18} />
          </button>

          
        </div>
      </section>
    </main>
  );
}
