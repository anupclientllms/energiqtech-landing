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

const warehouseAssets = [
  {
    icon: PackageSearch,
    title: "Conveyors & Sortation",
    text: "Monitor conveyor runtime, sortation demand, idle operation, throughput and abnormal power behaviour across fulfilment systems.",
  },
  {
    icon: Warehouse,
    title: "Warehouse HVAC",
    text: "Optimise heating, cooling and ventilation using occupancy, shift schedules, weather and operational-zone requirements.",
  },
  {
    icon: Refrigerator,
    title: "Cold Storage & Refrigeration",
    text: "Track compressors, cold rooms, freezers, defrost cycles, temperature performance and refrigeration energy use.",
  },
  {
    icon: Fan,
    title: "Dock Doors & Air Curtains",
    text: "Detect door-open losses, inefficient air-curtain operation and avoidable heating or cooling demand at loading docks.",
  },
  {
    icon: Lightbulb,
    title: "Warehouse Lighting",
    text: "Optimise aisle, picking, packing and common-area lighting using occupancy, zoning and shift schedules.",
  },
  {
    icon: Sparkles,
    title: "Automation, AS/RS & Robotics",
    text: "Monitor automated storage, retrieval systems, robotics, controls and standby loads across warehouse operations.",
  },
  {
    icon: Forklift,
    title: "Forklift & AGV Charging",
    text: "Coordinate forklift and AGV charging to reduce peaks, avoid charging conflicts and use lower-cost energy periods.",
  },
  {
    icon: Truck,
    title: "Fleet EV Charging",
    text: "Schedule delivery-fleet charging around dispatch windows, tariffs, site demand and renewable generation.",
  },
  {
    icon: Gauge,
    title: "Compressed Air",
    text: "Identify leakage, excessive pressure, unloaded runtime and inefficient compressor sequencing.",
  },
  {
    icon: Lightbulb,
    title: "Yard & External Lighting",
    text: "Optimise yard, perimeter, dock and external lighting using schedules, occupancy and daylight conditions.",
  },
  {
    icon: Droplets,
    title: "Water, Washdown & Pumps",
    text: "Identify excessive runtime, pressure loss, washdown waste and inefficient pumping across logistics facilities.",
  },
  {
    icon: ShieldCheck,
    title: "Fire & Life Safety Support",
    text: "Monitor supporting energy systems while preserving fire, smoke-control, emergency and life-safety requirements.",
  },
  {
    icon: SunMedium,
    title: "Solar & Battery",
    text: "Optimise solar self-consumption, battery dispatch, peak shaving, resilience and carbon reduction.",
  },
  {
    icon: Moon,
    title: "After-Hours Base Load",
    text: "Detect conveyors, lighting, HVAC, charging and auxiliary systems operating unnecessarily outside active shifts.",
  },
  {
    icon: Waves,
    title: "Warehouse Energy Coordination",
    text: "Coordinate warehouse loads, charging, refrigeration, solar and battery through one operational AI layer.",
  },
];

const scenarios = [
  {
    icon: PackageSearch,
    title: "Conveyor & Sortation Optimisation",
    text: "Detect idle running, poor sequencing and unnecessary operation outside active fulfilment windows.",
    outcome: "Reduce material-handling energy waste",
  },
  {
    icon: Warehouse,
    title: "Warehouse HVAC Optimisation",
    text: "Align ventilation and temperature control with occupancy, shifts, loading activity and weather.",
    outcome: "Reduce HVAC energy use",
  },
  {
    icon: Refrigerator,
    title: "Cold Storage Intelligence",
    text: "Identify compressor cycling, temperature drift, defrost inefficiencies and refrigeration-driven demand peaks.",
    outcome: "Reduce refrigeration energy costs",
  },
  {
    icon: Forklift,
    title: "Forklift & AGV Charging",
    text: "Coordinate charging around shift changes, battery state, tariffs and warehouse demand.",
    outcome: "Reduce charging-driven peaks",
  },
  {
    icon: Moon,
    title: "After-Hours Load Reduction",
    text: "Identify lighting, HVAC, conveyors and support systems operating unnecessarily outside active shifts.",
    outcome: "Reduce warehouse base load",
  },
  {
    icon: SunMedium,
    title: "Solar & Battery Coordination",
    text: "Coordinate renewable generation, battery dispatch and flexible warehouse demand.",
    outcome: "Improve renewable utilisation",
  },
];

const workflowSteps = [
  {
    number: "01",
    title: "Connect",
    text: "Connect BMS, meters, conveyors, refrigeration, automation, charging, lighting and DER telemetry.",
  },
  {
    number: "02",
    title: "Detect",
    text: "Identify energy waste, abnormal equipment behaviour, charging peaks and after-hours loads.",
  },
  {
    number: "03",
    title: "Analyse",
    text: "Use AI Decision Agents and Digital Twin context to investigate causes across warehouse zones and systems.",
  },
  {
    number: "04",
    title: "Simulate",
    text: "Evaluate actions against throughput, dispatch windows, temperature, safety and operational constraints.",
  },
  {
    number: "05",
    title: "Approve",
    text: "Route recommendations through warehouse, facilities and operational approval workflows.",
  },
  {
    number: "06",
    title: "Measure",
    text: "Validate energy, cost, carbon and operational outcomes before scaling across the logistics portfolio.",
  },
];

const pilotItems = [
  "Priority warehouse or logistics-site assessment",
  "BMS, smart-meter, sub-meter or available telemetry integration",
  "Conveyor, HVAC, refrigeration and after-hours analysis",
  "Forklift, AGV and fleet-EV charging coordination",
  "Solar, battery and peak-demand optimisation",
  "Digital Twin investigation and human-approved recommendations",
  "Energy savings, carbon and ROI measurement",
];

export default function WarehouseLogisticsAI({ openPilotModal }) {
  const handlePilotClick = () => {
    if (typeof openPilotModal === "function") {
      openPilotModal();
      return;
    }

    document.getElementById("warehouse-logistics-pilot")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="warehouseLogisticsPage">
      <section className="warehouseLogisticsHero">
        <motion.div
          className="warehouseLogisticsHeroContent"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.div className="warehouseLogisticsBadge" variants={fadeUp}>
            <Warehouse size={17} />
            EnergIQ Warehouse & Logistics AI
          </motion.div>

          <motion.h1 variants={fadeUp}>
            Reduce Warehouse and Logistics Energy Costs Across Operations,
            Automation and Connected Energy Systems.
          </motion.h1>

          <motion.p className="warehouseLogisticsLead" variants={fadeUp}>
            EnergIQ Warehouse & Logistics AI connects conveyors, sortation,
            warehouse HVAC, cold storage, dock systems, lighting, automation,
            robotics, forklift and AGV charging, fleet EV charging, compressed
            air, water systems, solar and battery assets through the AI Energy
            Gateway.
          </motion.p>

          <motion.p className="warehouseLogisticsDescription" variants={fadeUp}>
            Edge AI analyses logistics operational data in real time, detects
            energy waste, idle equipment, refrigeration inefficiencies,
            after-hours loads and demand peaks, then recommends governed
            optimisation actions.
          </motion.p>

          <motion.div className="warehouseLogisticsHeroButtons" variants={fadeUp}>
            <button
              type="button"
              className="warehouseLogisticsPrimaryBtn"
              onClick={handlePilotClick}
            >
              Request Warehouse Pilot
              <ChevronRight size={18} />
            </button>

            <a
              href="#warehouse-logistics-workflow"
              className="warehouseLogisticsSecondaryBtn"
            >
              View AI Workflow
            </a>
          </motion.div>

          <motion.div className="warehouseLogisticsHeroTags" variants={fadeUp}>
            <span><PackageSearch size={15} /> Conveyors & Sortation</span>
            <span><Refrigerator size={15} /> Cold Storage</span>
            <span><Forklift size={15} /> Forklift & AGV Charging</span>
            <span><SunMedium size={15} /> Solar & Battery</span>
          </motion.div>
        </motion.div>

        <motion.div
          className="warehouseLogisticsHeroVisual"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="warehouseLogisticsDashboard">
            <div className="warehouseLogisticsDashboardTop">
              <div>
                <strong>Warehouse & Logistics AI Portfolio</strong>
                <span>Operations overview</span>
              </div>

              <b><Activity size={14} /> Live</b>
            </div>

            <div className="warehouseLogisticsKpis">
              <div>
                <small>Warehouse Sites</small>
                <strong>4</strong>
                <span>Connected logistics facilities</span>
              </div>

              <div>
                <small>Asset Classes</small>
                <strong>15</strong>
                <span>Operational systems</span>
              </div>

              <div>
                <small>Opportunities</small>
                <strong>42</strong>
                <span>Current optimisation items</span>
              </div>

              <div>
                <small>After-Hours Load</small>
                <strong>17%</strong>
                <span>Portfolio opportunity</span>
              </div>
            </div>

            <div className="warehouseLogisticsInsightCard">
              <div className="warehouseLogisticsInsightIcon">
                <Brain size={22} />
              </div>

              <div>
                <strong>AI Recommendation</strong>
                <p>
                  Sortation Line 2 and aisle lighting remain active after the
                  evening dispatch window. Apply an approved shutdown sequence
                  while retaining dock and safety lighting.
                </p>
              </div>
            </div>

            <div className="warehouseLogisticsApproval">
              <span>
                <ShieldCheck size={18} />
                Operations approval required before execution
              </span>

              <button type="button">Review Action</button>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="warehouseLogisticsStrip">
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

      <section className="warehouseLogisticsSection warehouseLogisticsChallengeSection">
        <div className="warehouseLogisticsSectionHeader">
          <p>Warehouse & Logistics Energy Challenge</p>
          <h2>
            Logistics Facilities Combine Automation, Refrigeration, Charging
            and Shift-Based Demand.
          </h2>
          <span>
            Warehouses must reduce energy costs while protecting throughput,
            temperature control, dispatch schedules, safety and operational
            reliability.
          </span>
        </div>

        <div className="warehouseLogisticsChallengeGrid">
          <article>
            <div className="warehouseLogisticsIcon"><Zap size={24} /></div>
            <h3>High & Variable Demand</h3>
            <p>
              Conveyors, charging, refrigeration and HVAC create rapidly
              changing energy profiles.
            </p>
          </article>

          <article>
            <div className="warehouseLogisticsIcon"><PackageSearch size={24} /></div>
            <h3>Automation & Throughput</h3>
            <p>
              Optimisation must preserve fulfilment speed, sortation capacity
              and dispatch performance.
            </p>
          </article>

          <article>
            <div className="warehouseLogisticsIcon"><Refrigerator size={24} /></div>
            <h3>Cold-Chain Requirements</h3>
            <p>
              Refrigeration optimisation must maintain temperature compliance
              and product integrity.
            </p>
          </article>

          <article>
            <div className="warehouseLogisticsIcon"><Gauge size={24} /></div>
            <h3>Fragmented Operational Data</h3>
            <p>
              WMS, BMS, meters, automation, charging and refrigeration systems
              often remain disconnected.
            </p>
          </article>
        </div>
      </section>

      <section className="warehouseLogisticsSection warehouseLogisticsAssetsSection">
        <div className="warehouseLogisticsSectionHeader">
          <p>Connected Warehouse Assets</p>
          <h2>
            One AI Operating Layer Across Logistics Operations, Automation and
            Connected Energy Systems.
          </h2>
          <span>
            The AI Energy Gateway connects existing warehouse infrastructure
            and available telemetry without requiring wholesale replacement.
          </span>
        </div>

        <motion.div
          className="warehouseLogisticsAssetsGrid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.08 }}
        >
          {warehouseAssets.map((asset) => {
            const Icon = asset.icon;

            return (
              <motion.article
                className="warehouseLogisticsAssetCard"
                variants={fadeUp}
                key={asset.title}
              >
                <div className="warehouseLogisticsIcon"><Icon size={23} /></div>
                <h3>{asset.title}</h3>
                <p>{asset.text}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </section>

      <section className="warehouseLogisticsSection warehouseLogisticsScenarioSection">
        <div className="warehouseLogisticsSectionHeader">
          <p>AI Optimisation Scenarios</p>
          <h2>
            Reduce Waste, Improve Asset Performance and Protect Operational
            Throughput.
          </h2>
          <span>
            Each scenario uses the same AI Energy Gateway, Digital Twin,
            Decision Agents and human-in-the-loop approval workflow.
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
                  <div className="warehouseLogisticsIcon"><Icon size={23} /></div>
                  <span>AI Scenario</span>
                </div>

                <h3>{scenario.title}</h3>
                <p>{scenario.text}</p>

                <div className="warehouseLogisticsOutcome">
                  <CheckCircle2 size={17} />
                  {scenario.outcome}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section
        className="warehouseLogisticsSection warehouseLogisticsWorkflowSection"
        id="warehouse-logistics-workflow"
      >
        <div className="warehouseLogisticsSectionHeader warehouseLogisticsSectionHeaderLight">
          <p>End-to-End AI Workflow</p>
          <h2>
            From Warehouse Telemetry to Governed Operational Action.
          </h2>
          <span>
            EnergIQ converts operational data into explainable recommendations
            while keeping warehouse and facilities teams in control.
          </span>
        </div>

        <div className="warehouseLogisticsWorkflow">
          {workflowSteps.map((step) => (
            <div className="warehouseLogisticsWorkflowStep" key={step.number}>
              <b>{step.number}</b>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="warehouseLogisticsSection warehouseLogisticsPlatformSection">
        <div className="warehouseLogisticsPlatformPanel">
          <div className="warehouseLogisticsPlatformCopy">
            <p>Shared EnergIQ Platform</p>

            <h2>
              Warehouse & Logistics AI Is an Industry Pack Built on the Shared
              EnergIQ Architecture.
            </h2>

            <span>
              The same AI Energy Gateway, Digital Twin, Decision Agents,
              human-in-the-loop governance and Savings Intelligence support all
              EnergIQ industry environments.
            </span>

            <ul>
              <li><CheckCircle2 size={18} /> Reusable AI Energy Gateway</li>
              <li><CheckCircle2 size={18} /> Shared Digital Twin architecture</li>
              <li><CheckCircle2 size={18} /> Configurable AI Decision Agents</li>
              <li><CheckCircle2 size={18} /> Human-in-the-loop governance</li>
              <li><CheckCircle2 size={18} /> Savings and ROI intelligence</li>
            </ul>
          </div>

          <div className="warehouseLogisticsPlatformFlow">
            <div className="warehouseLogisticsPlatformNode">
              <Warehouse size={25} />
              <span>Warehouse Assets</span>
            </div>

            <ChevronRight size={20} />

            <div className="warehouseLogisticsPlatformNode featured">
              <Cpu size={25} />
              <span>AI Energy Gateway</span>
            </div>

            <ChevronRight size={20} />

            <div className="warehouseLogisticsPlatformNode">
              <Layers3 size={25} />
              <span>Digital Twin</span>
            </div>

            <ChevronRight size={20} />

            <div className="warehouseLogisticsPlatformNode">
              <Brain size={25} />
              <span>Decision Agents</span>
            </div>

            <ChevronRight size={20} />

            <div className="warehouseLogisticsPlatformNode">
              <ShieldCheck size={25} />
              <span>Approved Actions</span>
            </div>
          </div>
        </div>
      </section>

      <section
        className="warehouseLogisticsSection warehouseLogisticsPilotSection"
        id="warehouse-logistics-pilot"
      >
        <div className="warehouseLogisticsPilotBox">
          <div className="warehouseLogisticsPilotCopy">
            <p>Warehouse & Logistics Pilot Program</p>
            <h2>
              Start With One Site, One High-Value Use Case and Measurable ROI.
            </h2>
            <span>
              A staged pilot validates data, operational safeguards,
              optimisation scenarios and measurable value before
              portfolio-wide deployment.
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

      <section className="warehouseLogisticsCta">
        <div>
          <p>Now Onboarding Pilot Partners</p>
          <h2>
            Reduce Warehouse Energy Costs While Protecting Throughput,
            Temperature and Operational Reliability.
          </h2>
          <span>
            EnergIQ is seeking warehouse operators, logistics groups,
            distribution centres and technology partners for pilot
            collaboration.
          </span>
        </div>

        <div className="warehouseLogisticsCtaActions">
          <button
            type="button"
            className="warehouseLogisticsPrimaryBtn"
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
