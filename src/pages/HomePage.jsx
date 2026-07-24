import "../styles/HomePage.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Activity,
  BarChart3,
  Brain,
  Building2,
  CheckCircle2,
  ChevronRight,
  Cpu,
  Gauge,
  Layers3,
  Leaf,
  LineChart,
  Lock,
  Network,
  ShieldCheck,
  Sparkles,
  Zap,
  X,
  Search,
  Target,
  ClipboardCheck,
  Handshake,
  Eye,
  MapPinned,
  Power,
  Factory,
  Snowflake,
  Warehouse,
  Hospital,
  GraduationCap,
  Hotel,
  ShoppingCart,
  Plane,
  Database,
  Landmark,
  SunMedium,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const features = [
  {
    icon: Activity,
    title: "Multi-Asset Anomaly Detection",
    text: "Detect abnormal behaviour across Building Management Systems, Solar PV, Battery Storage, EV Charging, Smart Meters and IoT devices.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Energy Intelligence",
    text: "Continuously compare generation, consumption, storage and demand against adaptive operating baselines.",
  },
  {
    icon: Brain,
    title: "AI Root Cause Analysis",
    text: "Explain why anomalies occur across buildings, batteries, solar, EV charging and connected assets.",
  },
  {
    icon: Gauge,
    title: "DER Optimisation",
    text: "Optimise energy demand, solar self-consumption, battery dispatch and EV charging schedules.",
  },
  {
    icon: Leaf,
    title: "Carbon & Grid Intelligence",
    text: "Track emissions, renewable utilisation, grid imports/exports and ESG performance.",
  },
  {
    icon: ShieldCheck,
    title: "AI Decision Workflows",
    text: "Human-in-the-loop recommendations and governed actions across BMS, DER assets and grid-connected infrastructure.",
  },
  
];

const advanced = [
  "AI Forecasting & Prediction",
  "Digital Twin Simulation",
  "AI Decision Agents",
  "Carbon, ESG & ROI Intelligence",
  "Human-in-the-Loop Governance",
  "Portfolio Intelligence",
  "DER Connectivity",
  "AI Energy Assistant",
];

const comparison = [
  {
    title: "Reporting-only platforms",
    points: ["Mostly reporting-focused", "Manual root-cause analysis", "Limited operational control"],
  },
  {
    title: "Traditional automation ecosystems",
    points: ["Excellent control", "Limited intelligence", "Often vendor-specific", "Large implementation footprint"],
  },
  {
    title: "Energ IQ Tech",
    points: ["Device-led AI Gateway", "Connected Energy Assets","Operational Intelligence","Governed action", "Vendor-neutral integration"],
    featured: true,
  },
];

const councilChallenges = [
  {
    icon: Eye,
    title: "Connected Assets",
    text: "Connect BMS, Solar PV, Battery Storage, EV Chargers, Smart Meters and IoT devices.",
  },
  {
    icon: Zap,
    title: "Detect Anomalies",
    text: "Identify, Peak demand, Solar underperformance, Battery degradation, Abnormal energy usage, Equipment faults",
  },
  {
    icon: Gauge,
    title: "AI Decision Intelligence",
    text: "Explain, Forecast, Recommend, Simulate, Prioritise actions, Estimate savings",
  },
  {
    icon: Leaf,
    title: "Operational Outcomes",
    text: "Reduce energy costs, Lower emissions, Improve asset utilisation, Support demand response, Prepare for grid participation",
  },
];

const discoverySteps = [
  "Review connected energy assets, including BMS, Solar PV, Battery Storage, EV Charging, Smart Meters and available operational data.",
  "Identify operational inefficiencies, asset performance gaps and the highest-value optimisation opportunities.",
  "Map AI optimisation opportunities across HVAC, Solar PV, Battery Storage, EV Charging, demand response and energy consumption.",
  "Define a staged pilot roadmap with measurable ROI before enterprise-scale deployment.",
];

const operationalOutcomes = [
  "Connected Energy Assets",
  "AI Decision Intelligence",
  "Operational Optimisation",
  "Demand Response Ready",
  "Carbon & ESG Reporting",
  "Grid-Ready Platform",
];

const validationPoints = [
  "Platform demonstrated to Victorian local government stakeholders",
  "Operational AI workflows reviewed with facilities and sustainability teams",
  "Pilot engagement across councils, universities and commercial facilities",
  "AI Energy Gateway, Digital Twin and AI Platform concepts refined through stakeholder feedback",
];

const heroIndustries = [
  "Commercial Buildings",
  "Cold Storage",
  "Manufacturing",
  "Warehousing",
  "Healthcare",
  "Universities",
  "Hotels",
  "Shopping Centres",
  "Airports",
  "Data Centres",
  "Local Government",
  "DER",
];

const industrySolutions = [
  {
    icon: Building2,
    title: "Building AI",
    path: "/building-ai",
    text: "Optimise HVAC, lighting, BMS operations, occupancy-driven loads and whole-building energy performance.",
    assets: "HVAC • Lighting • BMS • Smart Meters",
  },
  {
    icon: Snowflake,
    title: "Cold Storage AI",
    path: "/cold-storage-ai",
    text: "Reduce refrigeration energy costs while protecting temperature compliance, equipment reliability and product integrity.",
    assets: "Compressors • Evaporators • Condensers • Freezers",
  },
  {
    icon: Factory,
    title: "Manufacturing AI",
    path: "/manufacturing-ai",
    text: "Improve energy performance across production systems, process loads, utilities and refrigeration-intensive operations.",
    assets: "Boilers • Compressors • Motors • Production Lines",
  },
  {
    icon: Warehouse,
    title: "Warehouse & Logistics AI",
    path: "/warehouse-logistics-ai",
    text: "Optimise warehouse lighting, refrigeration, conveyors, charging infrastructure and peak operational demand.",
    assets: "Lighting • Conveyors • Refrigeration • EV Charging",
  },
  {
    icon: Hospital,
    title: "Healthcare AI",
    path: "/healthcare-ai",
    text: "Reduce energy waste across critical facilities while maintaining comfort, resilience and operational safeguards.",
    assets: "HVAC • Chillers • Medical Loads • Backup Power",
  },
  {
    icon: GraduationCap,
    title: "University AI",
    path: "/university-ai",
    text: "Coordinate campus buildings, laboratories, teaching spaces and distributed energy assets through one AI platform.",
    assets: "Campus BMS • Labs • Solar • Battery",
  },
  {
    icon: Hotel,
    title: "Hotel AI",
    path: "/hotel-ai",
    text: "Optimise guest-room HVAC, hot water, central plant and occupancy-driven loads without compromising guest comfort.",
    assets: "HVAC • Hot Water • Chillers • Guest Rooms",
  },
  {
    icon: ShoppingCart,
    title: "Shopping Centre AI",
    path: "/shopping-centre-ai",
    text: "Improve energy performance across retail HVAC, common areas, refrigeration, lighting and vertical transport.",
    assets: "HVAC • Lighting • Refrigeration • Escalators",
  },
  {
    icon: Plane,
    title: "Airport AI",
    path: "/airport-ai",
    text: "Coordinate terminal systems, baggage operations, passenger-flow loads and airside energy infrastructure.",
    assets: "Terminal HVAC • Baggage • Airside Lighting • GSE",
  },
  {
    icon: Database,
    title: "Data Centre AI",
    path: "/data-centre-ai",
    text: "Optimise cooling, UPS systems, power distribution and compute-support infrastructure using governed AI workflows.",
    assets: "Cooling • UPS • Power Distribution • Backup Power",
  },
  {
    icon: Landmark,
    title: "Local Government AI",
    path: "/local-government-ai",
    text: "Manage energy performance across civic buildings, libraries, depots, community facilities and council portfolios.",
    assets: "Civic Buildings • Libraries • Depots • Solar",
  },
  {
    icon: SunMedium,
    title: "DER Portfolio AI",
    path: "/connected-energy-assets",
    text: "Coordinate solar, batteries, EV charging, flexible demand and grid-connected assets across distributed portfolios.",
    assets: "Solar PV • BESS • EV • Grid Interfaces",
  },
];

export default function HomePage({ openPilotModal }) {
  return (
    <main className="page">
      

      <section className="hero" id="top">
        <motion.div className="heroText" variants={stagger} initial="hidden" animate="show">
          <motion.div className="badge" variants={fadeUp}>
            <Sparkles size={16} /> Edge AI • Digital Twins • Decision Intelligence • Connected Energy Systems
          </motion.div>

          <motion.h1 variants={fadeUp}>
            One AI Platform for Energy-Intensive Operations & Connected Energy Systems.
          </motion.h1>

          <motion.p variants={fadeUp}>
            Energ IQ Tech connects building systems, refrigeration equipment, industrial assets, Solar PV, Battery Energy Storage Systems (BESS), EV charging infrastructure, smart meters, IoT sensors and utility interfaces through the AI Energy Gateway.
            Edge AI analyses operational data in real time, detects energy waste, peak-demand events and equipment inefficiencies, recommends optimisation actions and enables organisations to reduce energy costs, lower emissions and improve operational reliability.
          </motion.p>

          <motion.div className="heroIndustryLine" variants={fadeUp} aria-label="Supported industries">
            {heroIndustries.map((industry) => (
              <span className="heroIndustryChip" key={industry}>
                {industry}
              </span>
            ))}
          </motion.div>

          <motion.div className="heroButtons" variants={fadeUp}>
            <button type="button" onClick={openPilotModal} className="primary">
              Request Pilot <ChevronRight size={18} />
            </button>

            <a href="#platform-preview" className="secondary">
              View Platform
            </a>
          </motion.div>

          <motion.div className="metrics" variants={fadeUp}>
            <div><strong>30-Day Pilot</strong><span>Commercial Validation</span></div>
            <div><strong>12 Industry Packs</strong><span>One Shared AI Platform</span></div>
            <div><strong>Edge + AI</strong><span>Real-Time Decision Intelligence</span></div>
          </motion.div>

          <motion.p variants={fadeUp}>
            Start with one site and one high-value use case. Scale across facilities, industry portfolios and Distributed Energy Resources.
          </motion.p>
        </motion.div>

        <motion.div
          className="heroVisual"
          id="platform-preview"
          initial={{ opacity: 0, y: 42, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
        >
          <div className="dashboardCard">
            <div className="cardTop">
              <span>Live AI Energy Overview</span>
              <b>High Priority</b>
            </div>

            <div className="kpiGrid">
              <div><small>Asset Type</small><strong>Building Management System</strong></div>
              <div><small>Site</small><strong>Clocktower Centre</strong></div>
              <div><small>Energy Use</small><strong>9,620 kWh</strong></div>
              <div><small>Peak Demand</small><strong>246 kW</strong></div>
              <div><small>Carbon</small><strong>1.12 tCO₂e</strong></div>
              <div><small>Savings Opportunity</small><strong>$2,840</strong></div>
            </div>

            <div className="miniChart">
              <span style={{ height: "46%" }}></span>
              <span style={{ height: "62%" }}></span>
              <span style={{ height: "40%" }}></span>
              <span style={{ height: "86%" }}></span>
              <span style={{ height: "72%" }}></span>
              <span style={{ height: "54%" }}></span>
            </div>

            <div className="connectedAssets">
              <small>Supported Energy Assets</small>


              <div className="assetBadges">
                <span className="asset active">🏢 BMS</span>
                <span className="asset">☀️ Solar PV</span>
                <span className="asset">🔋 BESS</span>
                <span className="asset">⚡ EV Charging</span>
                <span className="asset">📊 Smart Meters</span>
                <span className="asset">📡 IoT Sensors</span>
                <span className="asset">⚡ Grid Interfaces</span>
              </div>
            </div>

            <div className="insight">
              <b>AI Insight</b>
              <p>HVAC demand spike detected. Recommend setpoint review, scheduling optimisation and peak-load simulation.</p>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="strip">
        <span>Detect</span><span>Explain</span><span>Recommend</span><span>Simulate</span><span>Control</span><span>Prove ROI</span>
      </section>

      <motion.section
        className="section industriesSection"
        id="industries"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.12 }}
      >
        <motion.div className="sectionHeader industriesHeader" variants={fadeUp}>
          <p>Industry Solutions</p>
          <h2>One Core AI Platform. Twelve Industry-Specific Operating Environments.</h2>
          <span>
            Energ IQ Tech applies the same AI Energy Gateway, Digital Twin, Decision Agents,
            human-in-the-loop governance and Savings Intelligence across energy-intensive
            industries. Each Industry Pack adapts the shared platform to the assets,
            operational risks and optimisation opportunities of that environment.
          </span>
        </motion.div>

        <motion.div className="industryGrid" variants={stagger}>
          {industrySolutions.map((industry) => {
            const Icon = industry.icon;

            return (
              <motion.article className="industryCard" variants={fadeUp} key={industry.title}>
                <div className="industryCardTop">
                  <div className="industryIcon">
                    <Icon size={24} />
                  </div>
                  <span>Industry Pack</span>
                </div>

                <h3>{industry.title}</h3>
                <p>{industry.text}</p>
                <small>{industry.assets}</small>

                <Link className="industryLink" to={industry.path}>
                  Explore {industry.title} <ChevronRight size={17} />
                </Link>
              </motion.article>
            );
          })}
        </motion.div>

        <motion.div className="industriesFooter" variants={fadeUp}>
          <div>
            <strong>Core Platform</strong>
            <span>
              AI Energy Gateway → Digital Twin → AI Decision Agents → Human Approval → Measurable Savings
            </span>
          </div>

          
        </motion.div>
      </motion.section>

      <motion.section
        className="section problemFirstSection"
        id="problem-first"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="sectionHeader compactHeader" variants={fadeUp}>
          <p>Problem-First Approach</p>
          <h2>One AI Workflow Across Every Industry and Connected Energy Asset.</h2>
          <span>
            Energ IQ Tech analyses operational data from building systems, refrigeration plants, industrial equipment, Solar PV, Battery Energy Storage, EV charging, smart meters
            and IoT devices to identify inefficiencies before recommending AI-driven optimisation actions.
          </span>
        </motion.div>

        <div className="problemGrid">
          {councilChallenges.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div className="problemCard" variants={fadeUp} key={item.title}>
                <div className="problemIcon"><Icon size={22} /></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      <section className="section discoveryOptimised">
        <div className="discoveryPanel">
          <div className="discoveryLeft">
            <p>Operational Discovery & Pilot Workshops</p>
            <h2>From Connected Energy Assets to Intelligent Optimisation</h2>
            <span>
              We work with organisations across energy-intensive industries to assess operational systems, refrigeration and process equipment, Building Management Systems, Solar PV, Battery Storage, EV charging, smart meters
              and IoT infrastructure, identifying high-value AI optimisation opportunities before defining a pilot.
            </span>
            <button type="button" onClick={openPilotModal} className="primary">
              Book Discovery Workshop <ChevronRight size={18} />
            </button>
          </div>

          <div className="discoveryRight">
            {discoverySteps.map((step, index) => (
              <div className="stepCard" key={step}>
                <b>{index + 1}</b>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section outcomeFlowSection">
        <div className="flowCard">
          <Target size={34} />
          <p>AI as the Enabler</p>
          <h2>Connected Energy Assets → AI Intelligence → Intelligent Actions → Measurable Impact</h2>
          <span>
            Energ IQ Tech transforms operational data from buildings, refrigeration systems, industrial equipment, Solar PV, Battery Storage, EV charging, smart meters
            and IoT devices into AI-driven insights, optimisation recommendations and measurable operational outcomes.
          </span>
        </div>

        <div className="outcomeGrid">
          {operationalOutcomes.map((item) => (
            <div className="outcomePill" key={item}>
              <CheckCircle2 size={17} />
              {item}
            </div>
          ))}
        </div>
      </section>
      
      <motion.section className="section" id="features" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <motion.div className="sectionHeader" variants={fadeUp}>
          <p>Core Platform Capabilities</p>
          <h2>From Connected Energy Assets to AI-Driven Operational Intelligence.</h2>
        </motion.div>

        <div className="featureGrid">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div className="featureCard" variants={fadeUp} key={item.title}>
                <div className="icon"><Icon size={24} /></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      <section className="section actionLayerSection">
        <div className="actionLayerHeader">
          <p>AI-assisted operational action layer</p>

          <h2>
            AI-Assisted Control Across Connected Energy Assets.
          </h2>

          <span>
           Energ IQ Tech transforms AI insights into governed operational actions across Building Management Systems, Solar PV, Battery Energy Storage, EV Charging, Smart Meters and 
           other Distributed Energy Resources through approval-based workflows.
          </span>
        </div>

        <div className="actionExecutionGrid">

          <div className="executionCard">
            <div className="executionIcon">
              <ShieldCheck size={26} />
            </div>

            <h3>Approve AI Recommendations</h3>

            <p>
              Review and approve AI-generated optimisation actions before execution.
            </p>
          </div>

          <div className="executionCard">
            <div className="executionIcon">
              <Zap size={26} />
            </div>

            <h3>Optimise Demand Response</h3>

            <p>
              Coordinate peak demand reduction, battery dispatch and flexible load management.
            </p>
          </div>

          <div className="executionCard">
            <div className="executionIcon">
              <Power size={26} />
            </div>

            <h3>Coordinate Connected Assets</h3>

            <p>
              Execute approved actions across BMS, Solar PV, Battery Storage, EV Charging and IoT devices.
            </p>
          </div>

          <div className="executionCard">
            <div className="executionIcon">
              <CheckCircle2 size={26} />
            </div>

            <h3>Measure Operational Outcomes</h3>

            <p>
              Validate energy savings, carbon reduction, renewable utilisation
              and operational performance after execution.
            </p>
          </div>

        </div>
      </section>

      <motion.section className="section dark" id="gateway" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
        <motion.div className="sectionHeader" variants={fadeUp}>
          <p>AI Energy Gateway</p>
          <h2>Real-Time AI Across Connected Energy Assets.</h2>
        </motion.div>

        <motion.div className="gatewayLayout" variants={fadeUp}>
          <div className="deviceBox">
            <Cpu size={38} />
            <strong>AI Energy Gateway</strong>
            <span>Industrial Edge AI
                  Secure integration • Local intelligence • Protocol translation • Resilient operation</span>
          </div>

          <div className="flow">
            <span><Building2 size={20} /> Connected Energy Assets</span>
            <b>→</b>
            <span><Cpu size={20} /> AI Energy Gateway</span>
            <b>→</b>
            <span><LineChart size={20} /> Energ IQ Tech Platform</span>
            <b>→</b>
            <span><ShieldCheck size={20} /> Human-approved Actions</span>
          </div>
        </motion.div>
      </motion.section>
      <section className="section pathwaySection">

        <div className="sectionHeader">
          <p>Deployment Pathway</p>

          <h2>
            A low-risk pathway from pilot to enterprise-scale deployment.
          </h2>
        </div>

        <div className="pathwayFlow">

          <div>
            <b>1</b>
            <h3>Discovery</h3>
            <p>Assess connected energy assets, operational systems and optimisation opportunities.</p>
          </div>

          <div>
            <b>2</b>
            <h3>Pilot</h3>
            <p>Deploy the AI Energy Gateway and connect BMS, Solar PV, Battery Storage, EV Charging, Smart Meters and IoT devices.</p>
          </div>

          <div>
            <b>3</b>
            <h3>Measure</h3>
            <p>Validate energy savings, renewable utilisation, operational performance and ROI.</p>
          </div>

          <div>
            <b>4</b>
            <h3>Scale</h3>
            <p>Expand across sites, facilities, industry portfolios and distributed energy assets.</p>
          </div>

        </div>

      </section>
      <section className="section proofSection">

        <div className="sectionHeader">
          <p>Pilot Proof Points</p>

          <h2>
            Demonstrating the AI Platform across connected energy assets.
          </h2>

          <span>
            Energ IQ Tech has developed a unified AI Energy Platform comprising the AI Energy Gateway, Digital Twin, AI Decision Agents and governed operational workflows.
            The platform is designed to connect, analyse and optimise energy-intensive operations and distributed energy assets, including Building Management Systems (BMS), refrigeration systems, industrial equipment, Solar PV, Battery Energy Storage Systems (BESS), EV charging, smart meters and IoT infrastructure.
          </span>

        </div>

        <div className="proofGrid">

          <div className="proofCard">
            <strong>AI Energy Gateway </strong>
            <span>
              Industrial Edge AI platform with secure integration, local intelligence and multi-protocol connectivity.
            </span>
          </div>

          <div className="proofCard">
            <strong>Digital Twin & Asset Intelligence</strong>
            <span>
              Building-level operational visibility with an architecture extendable to batteries, EV chargers and renewable energy assets.
            </span>
          </div>

          <div className="proofCard">
            <strong>Human-in-the-loop Governance</strong>
            <span>
              Governed AI recommendations with approval-based operational workflows.
            </span>
          </div>

          <div className="proofCard">
            <strong>Energy Optimisation Workflows</strong>
            <span>
              Demonstrated workflows include peak demand optimisation, HVAC efficiency and after-hours energy management, 
              with an architecture designed to support Solar PV, Battery Storage, EV Charging and demand-response.
            </span>
          </div>

        </div>

      </section>

      <section id="case-studies" className="section">

        <div className="sectionHeader">
          <p>Pilot Demonstration</p>

          <h2>
            Example AI Energy Optimisation Workflow.
          </h2>

          <span>
            Illustrative Phase 1 workflow demonstrating how the Energ IQ Tech Platform connects energy assets, detects anomalies, recommends actions 
            and validates operational outcomes.
          </span>
        </div>

        <div className="caseStudyCard">

          <h3>
            Phase 1 Demonstration – Energy-Intensive Operations & Connected Energy Assets
          </h3>

          <div className="caseStudyPoints">

            <div>Connected Asset Review</div>

            <div>AI Anomaly Detection</div>

            <div>Digital Twin Investigation workflow</div>

            <div>AI Decision Recommendations</div>

            <div>Human-in-the-Loop Actions</div>

            <div>Operational Impact & ROI</div>

          </div>

        </div>

      </section>

      <motion.section className="section twinSection" id="digital-twin" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
        <motion.div className="sectionHeader" variants={fadeUp}>
          <p>Digital Twin Intelligence</p>
          <h2>See where operational issues occur across connected energy assets.</h2>
        </motion.div>

        <motion.div className="twinGrid" variants={fadeUp}>
          <div className="buildingTwin">
            <div className="tower towerA">{Array.from({ length: 12 }).map((_, i) => <span key={i} className={i === 7 ? "hot" : ""} />)}</div>
            <div className="tower towerB">{Array.from({ length: 12 }).map((_, i) => <span key={i} className={i === 4 ? "warn" : ""} />)}</div>
            <div className="podium" />
            <div className="callout">
              <b>After-hours inefficiency</b>
              <span>Tower A • Level 2 • Meeting Room 3</span>
              <small>Lighting + HVAC still active</small>
            </div>
          </div>

          <div className="twinText">
            <h3>Spatial visibility across buildings and connected energy assets.</h3>
            <p>
              Energ IQ Tech maps anomalies, inefficiencies and operational events to buildings, zones, equipment and connected energy assets, enabling faster investigation and AI-assisted operational decisions.
            </p>
            <ul>
              <li><CheckCircle2 size={18} /> Building, zone, room and equipment-level context</li>
              <li><CheckCircle2 size={18} /> AI investigation of operational and energy events</li>
              <li><CheckCircle2 size={18} /> Extendable Digital Twin architecture for Solar PV, Battery Storage and EV infrastructure</li>
            </ul>
          </div>
        </motion.div>
      </motion.section>

      <section className="section advancedSection">
        <div className="sectionHeader">
          <p>A unified Edge AI platform connecting building systems, refrigeration equipment, industrial assets, Solar PV, Battery Energy Storage, EV charging, smart meters, IoT devices and utility interfaces into a single operational intelligence platform.</p>
          <h2>One Platform. Every Industry. Every Connected Energy Asset.</h2>
        </div>

        <div className="advancedGrid">
          {advanced.map((item) => <div key={item}>{item}</div>)}
        </div>
      </section>

      <motion.section className="section comparisonSection" id="comparison" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
        <motion.div className="sectionHeader" variants={fadeUp}>
          <p>Why Energ IQ Tech</p>
          <h2>Built around existing energy infrastructure, operational workflows and asset owners.</h2>
        </motion.div>

        <div className="comparisonGrid">
          {comparison.map((item) => (
            <motion.div className={`comparisonCard ${item.featured ? "featured" : ""}`} variants={fadeUp} key={item.title}>
              <h3>{item.title}</h3>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>
                    {item.featured ? <CheckCircle2 size={18} /> : <ChevronRight size={18} />}
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <div className="futureVisionPanel">
        <div className="futureVisionContent">

          <p className="visionLabel">
            LOOKING AHEAD
          </p>

          <h3>
            The AI Platform for Energy-Intensive Operations
          </h3>

          <p>
            Energ IQ Tech combines the AI Energy Gateway, Digital Twins, AI Decision Agents 
            and governed operational workflows into a unified AI platform for connected energy infrastructure. 
            The platform enables organisations to move beyond monitoring toward intelligent optimisation, 
            operational automation and measurable business outcomes.
          </p>

          <p className="visionStatement">
            Our long-term vision is to establish Energ IQ Tech as the <strong>AI-driven Energy Operating System</strong> for energy-intensive operations and connected energy infrastructure, providing
            a common AI architecture across commercial buildings, cold storage, manufacturing, warehouses, healthcare, universities, hotels, shopping centres, airports, data centres, local government portfolios and Distributed Energy Resources (DER).
          </p>

        </div>
      </div>
      <section className="section validationSection">

        <div className="sectionHeader">
          <p>Customer Validation</p>

          <h2>
            Validated through engagement with facility and sustainability stakeholders.
          </h2>

          <span>
            Energ IQ Tech has been shaped through stakeholder discussions, platform demonstrations and operational feedback from local government, universities and commercial property organisations,
            helping prioritise practical energy optimisation use cases and deployment pathways.
          </span>
        </div>

        <div className="validationGrid">
          {validationPoints.map((item) => (
            <div className="validationCard" key={item}>
              <CheckCircle2 size={20}/>
              <span>{item}</span>
            </div>
          ))}
        </div>

      </section>
      <section className="pilot" id="pilot">
        <div>
          <p>Pilot Model</p>
          <h2>Pilot-first deployment model designed to prove measurable operational value.</h2>
          <p>
            Start with one priority site, operational problem or connected asset group. Validate optimisation opportunities, operational outcomes and measurable ROI before scaling across facilities, industry portfolios and connected energy assets.
          </p>
        </div>

        <div className="pilotCard">
          <h3>Phase 1: Pilot Deployment</h3>
          <ul>
            <li>AI Energy Gateway deployed at pilot site(s)</li>
            <li>Connect priority operational systems and available energy assets</li>
            <li>Validate AI optimisation workflows</li>
            <li>Measure operational, financial and carbon outcomes</li>
          </ul>
        </div>

        <div className="pilotCard green">
          <h3>Phase 2: Enterprise Scale</h3>
          <ul>
            <li>AI Gateway deployment across additional sites</li>
            <li>SaaS platform & AI Decision Agents</li>
            <li>Portfolio-wide operational intelligence</li>
            <li>Industry and asset optimisation across BMS, refrigeration, process loads, Solar PV, BESS and EV charging</li>
          </ul>
        </div>
      </section>

      <section className="section tractionSection">

        <div className="sectionHeader">
          <p>Market Engagement</p>

          <h2>
            Validating pilot demand across multiple energy-intensive industries.
          </h2>
        </div>

        <div className="tractionGrid">

          <div>
            <strong>Local Government</strong>
            <span>
              Platform demonstrations and pilot discussions with Victorian local government organisations.
            </span>
          </div>

          <div>
            <strong>Universities</strong>
            <span>
              Engagement with sustainability, facilities and research teams exploring AI-driven energy optimisation.
            </span>
          </div>

          <div>
            <strong>Commercialisation</strong>
            <span>
              Commercialisation planning supported through industry advisory, market validation and investor engagement.
            </span>
          </div>

          <div>
            <strong>Multi-Industry Pilot Search</strong>
            <span>
              Expanding pilot outreach across cold storage, manufacturing, warehousing, healthcare, hospitality, airports, data centres and DER portfolios.
            </span>
          </div>

        </div>

      </section>

      <section className="cta">
        <h2>Now onboarding pilot partners.</h2>
        <p>
          Built for energy-intensive organisations seeking measurable cost savings, carbon visibility, operational reliability and governed AI decision intelligence.
        </p>

        <button type="button" onClick={openPilotModal} className="primary">
          Discuss Pilot <ChevronRight size={18} />
        </button>
      </section>

      

      
    </main>
  );
}