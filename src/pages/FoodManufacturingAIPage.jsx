import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  CheckCircle2,
  ChevronRight,
  CircleGauge,
  CloudCog,
  Cpu,
  Factory,
  Fan,
  Gauge,
  Leaf,
  Network,
  ShieldCheck,
  Snowflake,
  ThermometerSnowflake,
  UtensilsCrossed,
  Waves,
  Zap,
} from "lucide-react";

import "../styles/FoodManufacturingAIPage.css";

export default function FoodManufacturingAIPage() {
  /* =====================================================
     FOOD & BEVERAGE ENERGY LOADS
  ===================================================== */

  const energyLoads = [
    {
      icon: Snowflake,
      title: "Refrigeration & Freezing",
      text: "Analyse compressors, condensers, evaporators, cold rooms, blast freezers and temperature-controlled production loads.",
    },
    {
      icon: ThermometerSnowflake,
      title: "Process Cooling",
      text: "Identify excessive cooling demand, unstable operating patterns and opportunities to optimise process temperatures and schedules.",
    },
    {
      icon: Waves,
      title: "Boilers, Steam & Hot Water",
      text: "Analyse thermal energy demand across cleaning, sanitation, cooking, heating and production processes.",
    },
    {
      icon: Fan,
      title: "Compressed Air",
      text: "Detect abnormal compressed-air consumption, inefficient operating schedules and avoidable base-load energy use.",
    },
    {
      icon: Gauge,
      title: "Pumps & Motors",
      text: "Identify inefficient motor loads, pumps, variable-speed systems and production equipment operating outside expected conditions.",
    },
    {
      icon: Factory,
      title: "Production Equipment",
      text: "Connect energy consumption with production operations to identify energy waste without disrupting throughput or product quality.",
    },
  ];

  /* =====================================================
     FOOD SECTORS
  ===================================================== */

  const sectors = [
    "Dairy Processing",
    "Meat Processing",
    "Poultry Processing",
    "Seafood Processing",
    "Frozen & Chilled Foods",
    "Beverage Manufacturing",
    "Bakery & Prepared Foods",
    "Food Ingredient Processing",
  ];

  /* =====================================================
     AI OPTIMISATION WORKFLOW
  ===================================================== */

  const workflow = [
    {
      step: "01",
      title: "Detect",
      text: "Identify unusual energy consumption, demand spikes and inefficient operating behaviour.",
    },
    {
      step: "02",
      title: "Analyse",
      text: "Correlate energy use with refrigeration, production, utilities and operating conditions.",
    },
    {
      step: "03",
      title: "Simulate",
      text: "Evaluate optimisation scenarios through Digital Twin and operational intelligence.",
    },
    {
      step: "04",
      title: "Recommend",
      text: "Prioritise AI-driven actions based on energy, financial, carbon and operational impact.",
    },
    {
      step: "05",
      title: "Approve",
      text: "Keep operational teams in control through human-in-the-loop approval workflows.",
    },
    {
      step: "06",
      title: "Measure",
      text: "Compare results against established baselines and quantify measurable outcomes.",
    },
  ];

  /* =====================================================
     CORE CAPABILITIES
  ===================================================== */

  const capabilities = [
    {
      icon: BrainCircuit,
      title: "AI Energy Waste Detection",
      text: "Detect abnormal consumption, inefficient operating patterns and avoidable energy waste across food-processing assets.",
    },
    {
      icon: CloudCog,
      title: "Digital Twin Intelligence",
      text: "Investigate where energy waste occurs, understand operational context and evaluate optimisation pathways before action.",
    },
    {
      icon: CircleGauge,
      title: "Peak Demand Optimisation",
      text: "Identify and manage coincident refrigeration, process and utility loads that contribute to costly demand peaks.",
    },
    {
      icon: Leaf,
      title: "CO₂ & Sustainability Intelligence",
      text: "Measure energy-related CO₂ outcomes alongside consumption, cost, operational efficiency and renewable-energy utilisation.",
    },
    {
      icon: ShieldCheck,
      title: "Human-in-the-Loop Governance",
      text: "Present AI recommendations for review and approval before changes are applied to operational systems.",
    },
    {
      icon: BarChart3,
      title: "Savings Intelligence",
      text: "Establish baselines and track energy reduction, peak-demand reduction, financial savings and associated CO₂ outcomes.",
    },
  ];

  return (
    <main className="foodManufacturingPage">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="foodManufacturingHero">
        <div className="foodManufacturingHeroGlow foodGlowOne" />
        <div className="foodManufacturingHeroGlow foodGlowTwo" />

        <div className="foodManufacturingHeroContent">
          <div className="foodManufacturingEyebrow">
            <UtensilsCrossed size={17} />
            <span>Food & Beverage Manufacturing AI</span>
          </div>

          <h1>
            Reduce Energy Costs & CO₂ Emissions Across
            <span> Food & Beverage Manufacturing.</span>
          </h1>

          <p className="foodManufacturingHeroText">
            EnerG IQ Tech helps food and beverage manufacturers identify
            avoidable energy waste across refrigeration, freezing, process
            cooling, boilers, compressed air, pumps, motors, HVAC and
            energy-intensive production systems while maintaining operational,
            product-quality and process requirements.
          </p>

          <div className="foodManufacturingHeroActions">
            <Link
              to="/book-discussion"
              className="foodPrimaryButton"
            >
              Book a Discussion
              <ChevronRight size={18} />
            </Link>

            <a
              href="#food-pilot"
              className="foodSecondaryButton"
            >
              Explore 30-Day Pilot
            </a>
          </div>

          <div className="foodManufacturingHeroPoints">
            <span>
              <CheckCircle2 size={17} />
              Lower Energy Consumption
            </span>

            <span>
              <CheckCircle2 size={17} />
              Reduce Peak Demand
            </span>

            <span>
              <CheckCircle2 size={17} />
              Lower Energy-Related CO₂
            </span>
          </div>
        </div>

        {/* HERO INTELLIGENCE PANEL */}

        <div className="foodManufacturingHeroPanel">
          <div className="foodHeroPanelHeader">
            <span>Food Production Energy Intelligence</span>
            <span className="foodLiveBadge">AI ACTIVE</span>
          </div>

          <div className="foodHeroMetricGrid">
            <div className="foodHeroMetric">
              <span>ENERGY USE</span>
              <strong>18,420</strong>
              <small>kWh</small>
            </div>

            <div className="foodHeroMetric">
              <span>PEAK DEMAND</span>
              <strong>428</strong>
              <small>kW</small>
            </div>

            <div className="foodHeroMetric">
              <span>CO₂</span>
              <strong>2.14</strong>
              <small>tCO₂e</small>
            </div>

            <div className="foodHeroMetric">
              <span>SAVINGS OPPORTUNITY</span>
              <strong>$4,860</strong>
              <small>estimated</small>
            </div>
          </div>

          <div className="foodHeroInsight">
            <div className="foodHeroInsightIcon">
              <BrainCircuit size={21} />
            </div>

            <div>
              <span>AI INSIGHT</span>

              <p>
                Refrigeration compressor demand remains elevated during
                reduced-production periods. Review staging, suction pressure
                and operating schedule.
              </p>
            </div>
          </div>

          <div className="foodHeroFlow">
            <span>Detect</span>
            <ArrowRight size={15} />

            <span>Analyse</span>
            <ArrowRight size={15} />

            <span>Recommend</span>
            <ArrowRight size={15} />

            <span>Measure</span>
          </div>
        </div>
      </section>

      {/* =====================================================
          ENERGY CHALLENGE
      ===================================================== */}

      <section className="foodSection foodChallengeSection">
        <div className="foodSectionHeading">
          <span>Food Manufacturing Energy Challenge</span>

          <h2>
            Find Energy Waste Across Production & Utilities.
          </h2>

          <p>
            Analyse energy-intensive systems together rather than viewing
            individual assets in isolation.
          </p>
        </div>

        <div className="foodEnergyGrid">
          {energyLoads.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="foodEnergyCard"
              >
                <div className="foodCardIcon">
                  <Icon size={23} />
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* =====================================================
          WORKFLOW
      ===================================================== */}

      <section className="foodSection foodWorkflowSection">
        <div className="foodSectionHeading">
          <span>AI-Driven Optimisation Workflow</span>

          <h2>
            From Energy Waste to Governed Optimisation.
          </h2>

          <p>
            EnerG IQ Tech combines operational data, AI intelligence,
            Digital Twin investigation and human approval into a
            measurable optimisation workflow.
          </p>
        </div>

        <div className="foodWorkflowGrid">
          {workflow.map((item) => (
            <div
              className="foodWorkflowCard"
              key={item.step}
            >
              <span className="foodWorkflowNumber">
                {item.step}
              </span>

              <h3>{item.title}</h3>

              <p>{item.text}</p>
            </div>
          ))}
        </div>

        <div className="foodWorkflowLine">
          <span>Detect</span>
          <ChevronRight />

          <span>Analyse</span>
          <ChevronRight />

          <span>Simulate</span>
          <ChevronRight />

          <span>Recommend</span>
          <ChevronRight />

          <span>Human Approves</span>
          <ChevronRight />

          <span>Measure</span>
        </div>
      </section>

      {/* =====================================================
          BUSINESS + ENVIRONMENTAL OUTCOMES
      ===================================================== */}

      <section className="foodOutcomeSection">
        <div className="foodOutcomeContent">
          <span className="foodOutcomeEyebrow">
            Energy + Financial + Environmental Outcomes
          </span>

          <h2>
            Reduce Cost. Reduce Energy. Reduce Associated CO₂.
          </h2>

          <p>
            Turn food-production energy data into measurable operational,
            financial and sustainability outcomes.
          </p>
        </div>

        <div className="foodOutcomeMetrics">
          <div>
            <Zap size={25} />
            <span>Energy Consumption</span>
            <strong>↓</strong>
          </div>

          <div>
            <Gauge size={25} />
            <span>Peak Demand</span>
            <strong>↓</strong>
          </div>

          <div>
            <BarChart3 size={25} />
            <span>Operating Cost</span>
            <strong>↓</strong>
          </div>

          <div>
            <Leaf size={25} />
            <span>Energy-Related CO₂</span>
            <strong>↓</strong>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOD SECTORS
      ===================================================== */}

      <section className="foodSection foodSectorSection">
        <div className="foodSectionHeading">
          <span>Food-Sector Applications</span>

          <h2>
            One AI Energy Architecture Across Food & Beverage Operations.
          </h2>

          <p>
            Apply the same EnerG IQ platform to different food-processing
            environments while adapting optimisation models to each
            facility's operational requirements.
          </p>
        </div>

        <div className="foodSectorGrid">
          {sectors.map((sector) => (
            <div
              className="foodSectorItem"
              key={sector}
            >
              <CheckCircle2 size={19} />
              <span>{sector}</span>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          EXISTING INFRASTRUCTURE
      ===================================================== */}

      <section className="foodInfrastructureSection">
        <div className="foodInfrastructureContent">
          <span>Existing Infrastructure</span>

          <h2>
            Work With the Systems You Already Have.
          </h2>

          <p>
            EnerG IQ Tech can complement existing smart meters, BMS,
            IoT devices, PLC/SCADA systems and operational data sources
            rather than requiring organisations to replace their existing
            control and automation infrastructure.
          </p>

          <div className="foodInfrastructureTags">
            <span>Smart Meters</span>
            <span>BMS</span>
            <span>PLC / SCADA</span>
            <span>IoT Sensors</span>
            <span>Refrigeration Controls</span>
            <span>Production Data</span>
            <span>Solar PV</span>
            <span>BESS</span>
          </div>
        </div>

        <div className="foodArchitecturePanel">
          <div className="foodArchitectureNode">
            <Network size={23} />
            <span>Operational & Energy Assets</span>
          </div>

          <ChevronRight />

          <div className="foodArchitectureNode foodArchitectureActive">
            <Cpu size={23} />
            <span>AI Energy Gateway</span>
          </div>

          <ChevronRight />

          <div className="foodArchitectureNode">
            <BrainCircuit size={23} />
            <span>EnerG IQ Intelligence</span>
          </div>

          <ChevronRight />

          <div className="foodArchitectureNode">
            <ShieldCheck size={23} />
            <span>Human-Approved Actions</span>
          </div>
        </div>
      </section>

      {/* =====================================================
          CORE AI CAPABILITIES
      ===================================================== */}

      <section className="foodSection foodCapabilitiesSection">
        <div className="foodSectionHeading">
          <span>Core AI Capabilities</span>

          <h2>
            Intelligence Built Around Energy-Intensive Food Operations.
          </h2>

          <p>
            Combine energy monitoring, AI analysis, Digital Twin intelligence
            and governed optimisation to identify and validate opportunities
            across food and beverage operations.
          </p>
        </div>

        <div className="foodCapabilityGrid">
          {capabilities.map((capability) => {
            const Icon = capability.icon;

            return (
              <article
                className="foodCapabilityCard"
                key={capability.title}
              >
                <div className="foodCardIcon">
                  <Icon size={23} />
                </div>

                <h3>{capability.title}</h3>

                <p>{capability.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* =====================================================
          30-DAY PILOT
      ===================================================== */}

      <section
        className="foodPilotSection"
        id="food-pilot"
      >
        <div className="foodPilotContent">
          <span>30-Day Pilot</span>

          <h2>
            Start With One Food Manufacturing Energy Problem.
          </h2>

          <p>
            Begin with available operational and energy data, identify
            optimisation opportunities and quantify potential energy,
            financial and associated CO₂ outcomes before broader
            deployment.
          </p>

          <div className="foodPilotChecks">
            <span>
              <CheckCircle2 size={18} />
              Establish an energy baseline
            </span>

            <span>
              <CheckCircle2 size={18} />
              Identify avoidable energy consumption
            </span>

            <span>
              <CheckCircle2 size={18} />
              Evaluate AI optimisation opportunities
            </span>

            <span>
              <CheckCircle2 size={18} />
              Quantify cost & CO₂ outcomes
            </span>
          </div>
        </div>

        <div className="foodPilotAction">
          <span>Start small. Prove the value.</span>

          <strong>
            30-Day AI Energy & Environmental Sustainability
            Optimisation Pilot
          </strong>

          <Link
            to="/book-discussion"
            className="foodPilotButton"
          >
            Book a 20-Minute Discussion
            <ChevronRight size={19} />
          </Link>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="foodFinalCta">
        <span>Food & Beverage Manufacturing AI</span>

        <h2>
          Find the Energy Waste. Quantify the Savings.
          Prove the CO₂ Impact.
        </h2>

        <p>
          Start with one facility, one high-value use case and measurable
          outcomes before scaling across production sites.
        </p>

        <div>
          <Link
            to="/book-discussion"
            className="foodPrimaryButton"
          >
            Book a Discussion
            <ChevronRight size={18} />
          </Link>

          <Link
            to="/pilot-program"
            className="foodSecondaryButton"
          >
            Explore Pilot Program
          </Link>
        </div>
      </section>
    </main>
  );
}