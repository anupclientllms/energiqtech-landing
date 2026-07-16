import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  BarChart3,
  BatteryCharging,
  Brain,
  CheckCircle2,
  ChevronRight,
  CircleGauge,
  CloudSnow,
  Cpu,
  Database,
  Fan,
  Gauge,
  Layers3,
  Leaf,
  Network,
  Power,
  Refrigerator,
  ShieldCheck,
  Snowflake,
  Thermometer,
  TimerReset,
  TrendingDown,
  Waves,
  Zap,
} from "lucide-react";
import "../styles/ColdStorageAI.css";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.09,
    },
  },
};

const coldStorageAssets = [
  {
    icon: Gauge,
    title: "Compressors",
    text: "Monitor loading, sequencing, cycling, power demand, pressure conditions and operating efficiency.",
  },
  {
    icon: Fan,
    title: "Evaporators",
    text: "Identify airflow, icing, fan-operation and heat-transfer issues affecting cooling performance.",
  },
  {
    icon: Waves,
    title: "Condensers",
    text: "Analyse condensing pressure, ambient conditions, fan operation and heat-rejection efficiency.",
  },
  {
    icon: Refrigerator,
    title: "Cold Rooms & Freezers",
    text: "Track temperature stability, door events, refrigeration demand and abnormal operating patterns.",
  },
  {
    icon: TimerReset,
    title: "Defrost Systems",
    text: "Detect excessive, poorly timed or ineffective defrost cycles that increase energy use.",
  },
  {
    icon: Thermometer,
    title: "Temperature Sensors",
    text: "Monitor zone conditions and detect deviations that could create product or compliance risk.",
  },
  {
    icon: BarChart3,
    title: "Smart Meters",
    text: "Measure site demand, refrigeration loads, energy consumption and peak-demand events.",
  },
  {
    icon: Network,
    title: "BMS, PLC & IoT Systems",
    text: "Connect existing controls, operational systems and telemetry through the AI Energy Gateway.",
  },
];

const optimisationScenarios = [
  {
    icon: Gauge,
    title: "Compressor Optimisation",
    text: "Detect inefficient compressor loading, short cycling, poor sequencing and avoidable simultaneous operation.",
    outcome: "Lower compressor energy use",
  },
  {
    icon: TimerReset,
    title: "Defrost Intelligence",
    text: "Identify unnecessary, overlapping or poorly scheduled defrost cycles while protecting coil performance.",
    outcome: "Reduce avoidable defrost load",
  },
  {
    icon: Zap,
    title: "Peak Demand Reduction",
    text: "Forecast refrigeration-driven demand spikes and recommend load-shifting or equipment sequencing actions.",
    outcome: "Reduce demand charges",
  },
  {
    icon: Thermometer,
    title: "Temperature Risk Detection",
    text: "Detect abnormal temperatures, rapid temperature movement and persistent zone deviations.",
    outcome: "Protect product integrity",
  },
  {
    icon: Activity,
    title: "Equipment Fault Detection",
    text: "Identify abnormal pressure, power, runtime and temperature relationships before failures escalate.",
    outcome: "Reduce unplanned downtime",
  },
  {
    icon: Leaf,
    title: "Energy & Carbon Intelligence",
    text: "Measure energy savings, emissions reduction and operational performance across cold-storage sites.",
    outcome: "Prove measurable impact",
  },
];

const workflowSteps = [
  {
    number: "01",
    title: "Connect",
    text: "Connect refrigeration controls, compressors, meters, sensors, BMS, PLC and IoT telemetry.",
  },
  {
    number: "02",
    title: "Detect",
    text: "Identify energy waste, temperature anomalies, demand spikes and abnormal equipment behaviour.",
  },
  {
    number: "03",
    title: "Analyse",
    text: "Use AI Decision Agents and the Digital Twin to investigate probable causes and operational context.",
  },
  {
    number: "04",
    title: "Simulate",
    text: "Evaluate potential optimisation actions before any operational change is applied.",
  },
  {
    number: "05",
    title: "Approve",
    text: "Route recommendations through human-in-the-loop approval and operational safeguards.",
  },
  {
    number: "06",
    title: "Measure",
    text: "Validate energy, cost, carbon, reliability and operational outcomes after implementation.",
  },
];

const pilotIncludes = [
  "Priority cold-storage site and refrigeration asset assessment",
  "Smart-meter, BMS, PLC, sensor or available telemetry integration",
  "AI baseline and energy-performance analysis",
  "Compressor, defrost, temperature and peak-demand scenarios",
  "Digital Twin investigation and AI recommendations",
  "Human-approved optimisation workflow",
  "Energy savings, operational outcomes and ROI measurement",
];

const benefits = [
  {
    icon: TrendingDown,
    value: "10–20%",
    label: "Potential energy-cost reduction",
    note: "Subject to site conditions, equipment and operating practices.",
  },
  {
    icon: Zap,
    value: "Lower",
    label: "Peak-demand exposure",
    note: "Through forecasting, sequencing and flexible-load optimisation.",
  },
  {
    icon: ShieldCheck,
    value: "Improved",
    label: "Operational reliability",
    note: "Through earlier detection of abnormal equipment behaviour.",
  },
  {
    icon: Thermometer,
    value: "Protected",
    label: "Temperature compliance",
    note: "Optimisation recommendations remain within operational safeguards.",
  },
];

export default function ColdStorageAI({ openPilotModal }) {
  const handlePilotClick = () => {
    if (typeof openPilotModal === "function") {
      openPilotModal();
      return;
    }

    const pilotSection = document.getElementById("cold-storage-pilot");
    pilotSection?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="coldStoragePage">
      <section className="coldStorageHero">
        <div className="coldStorageHeroGlow coldStorageHeroGlowOne" />
        <div className="coldStorageHeroGlow coldStorageHeroGlowTwo" />

        <motion.div
          className="coldStorageHeroContent"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.div className="coldStorageEyebrow" variants={fadeUp}>
            <Snowflake size={17} />
            EnergIQ Cold Storage AI
          </motion.div>

          <motion.h1 variants={fadeUp}>
            Reduce Refrigeration Energy Costs Without Compromising
            Temperature Compliance.
          </motion.h1>

          <motion.p className="coldStorageHeroLead" variants={fadeUp}>
            EnergIQ Cold Storage AI connects refrigeration systems,
            compressors, evaporators, condensers, cold rooms, freezers, smart
            meters, BMS, PLC and IoT sensors through the AI Energy Gateway.
          </motion.p>

          <motion.p className="coldStorageHeroDescription" variants={fadeUp}>
            Edge AI analyses operational data in real time, detects energy
            waste, peak-demand events, temperature anomalies and equipment
            inefficiencies, then recommends governed optimisation actions that
            help reduce costs, improve reliability and protect product
            integrity.
          </motion.p>

          <motion.div className="coldStorageHeroActions" variants={fadeUp}>
            <button
              type="button"
              className="coldStoragePrimaryButton"
              onClick={handlePilotClick}
            >
              Request Cold Storage Pilot
              <ChevronRight size={19} />
            </button>

            <a
              href="#cold-storage-workflow"
              className="coldStorageSecondaryButton"
            >
              View AI Workflow
            </a>
          </motion.div>

          <motion.div className="coldStorageHeroPills" variants={fadeUp}>
            <span>
              <Gauge size={15} />
              Compressor Optimisation
            </span>

            <span>
              <TimerReset size={15} />
              Defrost Intelligence
            </span>

            <span>
              <Zap size={15} />
              Peak Demand Reduction
            </span>

            <span>
              <Thermometer size={15} />
              Temperature Risk Detection
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          className="coldStorageHeroVisual"
          initial={{
            opacity: 0,
            y: 38,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.16,
          }}
        >
          <div className="coldStorageDashboard">
            <div className="coldStorageDashboardTop">
              <div>
                <span>Cold Storage AI Overview</span>
                <small>Distribution Centre 01</small>
              </div>

              <b>
                <Activity size={15} />
                Live
              </b>
            </div>

            <div className="coldStorageKpiGrid">
              <div>
                <small>Site Load</small>
                <strong>812 kW</strong>
                <span>Current demand</span>
              </div>

              <div>
                <small>Refrigeration Load</small>
                <strong>586 kW</strong>
                <span>72% of site demand</span>
              </div>

              <div>
                <small>Cold Room</small>
                <strong>-18.4°C</strong>
                <span>Within operating range</span>
              </div>

              <div>
                <small>Savings Opportunity</small>
                <strong>$7,850</strong>
                <span>Estimated monthly</span>
              </div>
            </div>

            <div className="coldStorageChartCard">
              <div className="coldStorageChartHeader">
                <div>
                  <strong>Refrigeration Demand</strong>
                  <span>AI baseline versus actual load</span>
                </div>

                <span className="coldStoragePriorityBadge">
                  High Priority
                </span>
              </div>

              <div className="coldStorageChart">
                <div className="coldStorageBaseline" />

                <span style={{ height: "38%" }} />
                <span style={{ height: "46%" }} />
                <span style={{ height: "52%" }} />
                <span style={{ height: "69%" }} />
                <span className="alertBar" style={{ height: "91%" }} />
                <span className="alertBar" style={{ height: "84%" }} />
                <span style={{ height: "62%" }} />
                <span style={{ height: "50%" }} />
                <span style={{ height: "43%" }} />
              </div>
            </div>

            <div className="coldStorageInsight">
              <div className="coldStorageInsightIcon">
                <Brain size={22} />
              </div>

              <div>
                <strong>AI Recommendation</strong>
                <p>
                  Compressor 3 is operating during a simultaneous defrost event,
                  creating a projected 116 kW demand spike. Review compressor
                  sequencing and defer Defrost Zone B by 20 minutes.
                </p>
              </div>
            </div>

            <div className="coldStorageApproval">
              <div>
                <ShieldCheck size={19} />
                <span>Human approval required before execution</span>
              </div>

              <button type="button">Review Action</button>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="coldStorageValueStrip">
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

      <section className="coldStorageSection coldStorageIntroSection">
        <motion.div
          className="coldStorageSectionHeader"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >
          <motion.p variants={fadeUp}>Cold Storage Energy Challenge</motion.p>

          <motion.h2 variants={fadeUp}>
            Refrigeration Is Mission-Critical, Energy-Intensive and
            Operationally Complex.
          </motion.h2>

          <motion.span variants={fadeUp}>
            Cold-storage operators must reduce electricity costs and peak
            demand while maintaining strict temperature conditions, equipment
            reliability and product integrity. EnergIQ provides one AI
            operating layer across these competing priorities.
          </motion.span>
        </motion.div>

        <div className="coldStorageChallengeGrid">
          <motion.article
            className="coldStorageChallengeCard"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="coldStorageChallengeIcon">
              <Zap size={25} />
            </div>

            <h3>High Energy Demand</h3>

            <p>
              Refrigeration plants can represent the largest electrical load
              across cold-storage and food-distribution facilities.
            </p>
          </motion.article>

          <motion.article
            className="coldStorageChallengeCard"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="coldStorageChallengeIcon">
              <AlertTriangle size={25} />
            </div>

            <h3>Product & Compliance Risk</h3>

            <p>
              Optimisation must never compromise temperature requirements,
              product integrity or operational safeguards.
            </p>
          </motion.article>

          <motion.article
            className="coldStorageChallengeCard"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="coldStorageChallengeIcon">
              <Activity size={25} />
            </div>

            <h3>Complex Equipment Behaviour</h3>

            <p>
              Compressors, defrost systems, evaporators and condensers interact
              dynamically with ambient and operational conditions.
            </p>
          </motion.article>

          <motion.article
            className="coldStorageChallengeCard"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="coldStorageChallengeIcon">
              <Database size={25} />
            </div>

            <h3>Fragmented Operational Data</h3>

            <p>
              Energy meters, controllers, temperature sensors, PLCs and
              maintenance records often remain disconnected.
            </p>
          </motion.article>
        </div>
      </section>

      <section className="coldStorageSection coldStorageAssetsSection">
        <div className="coldStorageSectionHeader">
          <p>Connected Cold Storage Assets</p>

          <h2>
            Connect Existing Refrigeration and Energy Infrastructure.
          </h2>

          <span>
            The AI Energy Gateway integrates available equipment, control
            systems and telemetry without requiring a complete replacement of
            existing refrigeration infrastructure.
          </span>
        </div>

        <motion.div
          className="coldStorageAssetsGrid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.12,
          }}
        >
          {coldStorageAssets.map((asset) => {
            const Icon = asset.icon;

            return (
              <motion.article
                className="coldStorageAssetCard"
                variants={fadeUp}
                key={asset.title}
              >
                <div className="coldStorageAssetIcon">
                  <Icon size={23} />
                </div>

                <h3>{asset.title}</h3>
                <p>{asset.text}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </section>

      <section className="coldStorageSection coldStorageScenariosSection">
        <div className="coldStorageSectionHeader">
          <p>AI Optimisation Scenarios</p>

          <h2>
            Identify Waste, Reduce Risk and Improve Refrigeration Performance.
          </h2>

          <span>
            Each scenario uses the same EnergIQ AI Energy Gateway, Digital Twin,
            Decision Agents and governed approval workflow.
          </span>
        </div>

        <motion.div
          className="coldStorageScenarioGrid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.12,
          }}
        >
          {optimisationScenarios.map((scenario) => {
            const Icon = scenario.icon;

            return (
              <motion.article
                className="coldStorageScenarioCard"
                variants={fadeUp}
                key={scenario.title}
              >
                <div className="coldStorageScenarioTop">
                  <div className="coldStorageScenarioIcon">
                    <Icon size={24} />
                  </div>

                  <span>AI Scenario</span>
                </div>

                <h3>{scenario.title}</h3>
                <p>{scenario.text}</p>

                <div className="coldStorageScenarioOutcome">
                  <CheckCircle2 size={17} />
                  {scenario.outcome}
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </section>

      <section
        className="coldStorageSection coldStorageWorkflowSection"
        id="cold-storage-workflow"
      >
        <div className="coldStorageSectionHeader coldStorageLightHeader">
          <p>End-to-End AI Workflow</p>

          <h2>
            From Refrigeration Telemetry to Governed Operational Action.
          </h2>

          <span>
            EnergIQ transforms operational data into explainable and measurable
            energy optimisation decisions while keeping people in control.
          </span>
        </div>

        <div className="coldStorageWorkflow">
          {workflowSteps.map((step, index) => (
            <div className="coldStorageWorkflowStep" key={step.number}>
              <div className="coldStorageWorkflowNumber">{step.number}</div>

              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>

              {index < workflowSteps.length - 1 && (
                <ChevronRight
                  className="coldStorageWorkflowArrow"
                  size={21}
                />
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="coldStorageSection coldStoragePlatformSection">
        <div className="coldStoragePlatformPanel">
          <div className="coldStoragePlatformCopy">
            <p>Shared EnergIQ Platform</p>

            <h2>
              Cold Storage AI Is an Industry Pack, Not a Separate Technology
              Stack.
            </h2>

            <span>
              The same EnergIQ architecture supports commercial buildings,
              manufacturing, warehouses, healthcare, universities, hotels,
              airports, data centres and distributed energy assets.
            </span>

            <ul>
              <li>
                <CheckCircle2 size={18} />
                Reusable AI Energy Gateway
              </li>

              <li>
                <CheckCircle2 size={18} />
                Shared Digital Twin architecture
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
                Savings and ROI intelligence
              </li>
            </ul>
          </div>

          <div className="coldStoragePlatformFlow">
            <div className="coldStoragePlatformNode">
              <Snowflake size={27} />
              <span>Cold Storage Assets</span>
            </div>

            <ChevronRight size={22} />

            <div className="coldStoragePlatformNode featured">
              <Cpu size={27} />
              <span>AI Energy Gateway</span>
            </div>

            <ChevronRight size={22} />

            <div className="coldStoragePlatformNode">
              <Layers3 size={27} />
              <span>Digital Twin</span>
            </div>

            <ChevronRight size={22} />

            <div className="coldStoragePlatformNode">
              <Brain size={27} />
              <span>Decision Agents</span>
            </div>

            <ChevronRight size={22} />

            <div className="coldStoragePlatformNode">
              <ShieldCheck size={27} />
              <span>Approved Actions</span>
            </div>
          </div>
        </div>
      </section>

      <section className="coldStorageSection coldStorageBenefitsSection">
        <div className="coldStorageSectionHeader">
          <p>Potential Operational Outcomes</p>

          <h2>
            Convert Refrigeration Intelligence Into Measurable Business Value.
          </h2>

          <span>
            Actual outcomes depend on existing plant condition, control
            strategy, tariffs, operating patterns and the optimisation measures
            approved by the customer.
          </span>
        </div>

        <div className="coldStorageBenefitsGrid">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article className="coldStorageBenefitCard" key={benefit.label}>
                <div className="coldStorageBenefitIcon">
                  <Icon size={24} />
                </div>

                <strong>{benefit.value}</strong>
                <h3>{benefit.label}</h3>
                <p>{benefit.note}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section
        className="coldStorageSection coldStoragePilotSection"
        id="cold-storage-pilot"
      >
        <div className="coldStoragePilotPanel">
          <div className="coldStoragePilotCopy">
            <p>Cold Storage Pilot Program</p>

            <h2>
              Start With One Site, One Operational Problem and Measurable ROI.
            </h2>

            <span>
              A staged pilot allows the customer and EnergIQ to validate
              available data, AI optimisation scenarios, operational safeguards
              and commercial value before portfolio-scale deployment.
            </span>

            <button
              type="button"
              className="coldStoragePrimaryButton"
              onClick={handlePilotClick}
            >
              Discuss a Cold Storage Pilot
              <ChevronRight size={19} />
            </button>
          </div>

          <div className="coldStoragePilotChecklist">
            <h3>Indicative Pilot Scope</h3>

            <ul>
              {pilotIncludes.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="coldStorageFinalCta">
        <div>
          <p>Now Onboarding Pilot Partners</p>

          <h2>
            Reduce Refrigeration Costs While Protecting Operational
            Reliability.
          </h2>

          <span>
            EnergIQ is seeking cold-storage operators, food distributors,
            refrigerated warehouses and industrial refrigeration partners for
            pilot collaboration.
          </span>
        </div>

        <div className="coldStorageFinalActions">
          <button
            type="button"
            className="coldStoragePrimaryButton"
            onClick={handlePilotClick}
          >
            Request Pilot
            <ChevronRight size={19} />
          </button>

          
        </div>
      </section>
    </main>
  );
}