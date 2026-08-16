import "../styles/AIEnergyGatewayPage.css";
import { Link } from "react-router-dom";
import {
  Activity,
  BatteryCharging,
  Brain,
  Building2,
  CheckCircle2,
  ChevronRight,
  Cpu,
  Gauge,
  GitBranch,
  Leaf,
  LineChart,
  PlugZap,
  RadioTower,
  Server,
  ShieldCheck,
  Sun,
  Zap,
} from "lucide-react";

export default function AIEnergyGatewayPage() {
  return (
    <main className="gatewayPage">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="gatewayHero">
        <div className="gatewayHeroText">
          <p className="gatewayEyebrow">AI Energy Gateway</p>

          <h1>
            Connect Energy Assets to Reduce Costs & CO₂ Emissions.
          </h1>

          <p>
            The AI Energy Gateway connects operational equipment and energy
            infrastructure into a common Edge AI layer so EnerG IQ Tech can
            identify energy waste, analyse peak demand and equipment
            inefficiencies, and support optimisation actions that lower
            operating costs and associated CO₂ emissions.
            {" "}
            It securely connects Building Management Systems, refrigeration
            and industrial equipment, Solar PV, Battery Energy Storage Systems,
            EV charging, smart meters, IoT sensors and utility interfaces.
          </p>

          <div className="gatewayHeroActions">
            <Link to="/pilot-program" className="gatewayPrimary">
              Explore Pilot Program <ChevronRight size={18} />
            </Link>

            <Link
              to="/connected-energy-assets"
              className="gatewaySecondary"
            >
              Connected Energy Assets
            </Link>
          </div>
        </div>

        <div className="gatewayHeroVisual">
          <div className="gatewayCore">
            <Cpu />

            <strong>AI Energy Gateway</strong>

            <span>
              Edge AI • Secure Integration • Energy Optimisation
            </span>
          </div>

          <div className="gatewayNode node1">
            <Sun />
            Solar PV
          </div>

          <div className="gatewayNode node2">
            <BatteryCharging />
            Battery Storage
          </div>

          <div className="gatewayNode node3">
            <PlugZap />
            EV Charging
          </div>

          <div className="gatewayNode node4">
            <Building2 />
            BMS
          </div>

          <div className="gatewayNode node5">
            <Gauge />
            Smart Meters
          </div>

          <div className="gatewayNode node6">
            <Activity />
            IoT Sensors
          </div>
        </div>
      </section>


      {/* =========================================================
          WHY THE GATEWAY MATTERS
      ========================================================= */}
      <section className="gatewaySection">
        <div className="gatewaySectionHeader">
          <p>Why the gateway matters</p>

          <h2>
            You cannot optimise energy you cannot see, connect or understand.
          </h2>

          <span>
            Energy-intensive facilities often operate buildings,
            refrigeration, industrial equipment, solar, batteries, EV
            charging and metering as separate systems.
            {" "}
            The AI Energy Gateway brings this fragmented operational data
            together so EnerG IQ Tech can detect waste, understand demand,
            identify optimisation opportunities and quantify potential
            energy, financial and carbon outcomes.
          </span>
        </div>

        <div className="gatewayGrid">

          <div>
            <Zap />

            <strong>Identify Energy Waste</strong>

            <span>
              Bring equipment, meter and operational data together to detect
              abnormal consumption, inefficient operation and avoidable
              peak-demand events.
            </span>
          </div>

          <div>
            <Leaf />

            <strong>Support Cost & CO₂ Reduction</strong>

            <span>
              Provide the real-time operational data required to identify
              actions that can reduce energy consumption, energy costs and
              associated CO₂ emissions.
            </span>
          </div>

          <div>
            <Brain />

            <strong>AI-Ready Operational Data</strong>

            <span>
              Normalise fragmented telemetry for AI Decision Agents,
              Digital Twins, forecasting and Savings Intelligence.
            </span>
          </div>

          <div>
            <ShieldCheck />

            <strong>Secure Edge Connectivity</strong>

            <span>
              Connect operational systems through a controlled edge layer
              while supporting governed AI and human-in-the-loop workflows.
            </span>
          </div>

        </div>
      </section>


      {/* =========================================================
          HOW IT WORKS
      ========================================================= */}
      <section className="gatewayDark">
        <div className="gatewaySectionHeader dark">
          <p>How it works</p>

          <h2>
            Connect. Analyse. Optimise. Measure.
          </h2>

          <span>
            The AI Energy Gateway provides the operational connection between
            physical energy assets and EnerG IQ Tech's optimisation
            intelligence.
          </span>
        </div>

        <div className="gatewaySteps">
          {[
            [
              "1",
              "Connect assets",
              "Connect BMS, refrigeration, industrial equipment, Solar PV, BESS, EV charging, meters, IoT and utility data.",
            ],
            [
              "2",
              "Normalise telemetry",
              "Convert fragmented operational data into a consistent model for energy and asset analysis.",
            ],
            [
              "3",
              "Detect & analyse",
              "Edge AI and Decision Agents identify energy waste, demand events, anomalies and equipment inefficiencies.",
            ],
            [
              "4",
              "Recommend optimisation",
              "Generate explainable actions based on potential energy savings, cost reduction, carbon impact and operational constraints.",
            ],
            [
              "5",
              "Human approval",
              "Authorised operators review recommended actions before changes are applied to operational systems.",
            ],
            [
              "6",
              "Measure outcomes",
              "Compare results against established baselines to quantify energy reduction, peak-demand reduction, financial savings and associated CO₂ outcomes.",
            ],
          ].map(([num, title, text]) => (
            <div className="gatewayStep" key={title}>
              <b>{num}</b>
              <strong>{title}</strong>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </section>


      {/* =========================================================
          UNIVERSAL ASSET CONNECTIVITY
      ========================================================= */}
      <section className="gatewaySection">
        <div className="gatewaySectionHeader">
          <p>Universal asset connectivity</p>

          <h2>
            Connect the systems driving your energy costs.
          </h2>

          <span>
            The AI Energy Gateway acts as the integration point between
            energy-consuming assets, distributed energy resources and
            EnerG IQ Tech's AI optimisation platform.
            {" "}
            This allows energy behaviour to be analysed across the facility
            rather than treating each asset as an isolated system.
          </span>
        </div>

        <div className="gatewayAssetMap">

          <div>
            <Building2 />
            <span>Building Management Systems</span>
          </div>

          <div>
            <Sun />
            <span>Solar PV</span>
          </div>

          <div>
            <BatteryCharging />
            <span>Battery Storage</span>
          </div>

          <div>
            <PlugZap />
            <span>EV Charging</span>
          </div>

          <div>
            <Gauge />
            <span>Smart Meters</span>
          </div>

          <div>
            <Activity />
            <span>IoT Sensors</span>
          </div>

          <div>
            <RadioTower />
            <span>Utility Interfaces</span>
          </div>

        </div>

        <div className="gatewayPipeline">
          <span>Connected Assets</span>

          <ChevronRight />

          <span>AI Energy Gateway</span>

          <ChevronRight />

          <span>AI Intelligence</span>

          <ChevronRight />

          <span>Optimisation Action</span>

          <ChevronRight />

          <span>Measured Savings</span>
        </div>
      </section>


      {/* =========================================================
          OPEN INTEGRATION ARCHITECTURE
      ========================================================= */}
      <section className="gatewayInteroperability">
        <div className="gatewaySectionHeader">
          <p>Open Integration Architecture</p>

          <h2>
            Work with existing energy infrastructure - not around it.
          </h2>

          <span>
            The AI Energy Gateway is designed to connect operational building
            systems, Distributed Energy Resources and enterprise platforms
            through open and vendor-neutral integration pathways.
            {" "}
            This allows organisations to pursue energy optimisation without
            requiring wholesale replacement of existing infrastructure.
          </span>
        </div>

        <div className="protocolGroupGrid">

          <div>
            <h3>Building & Industrial Systems</h3>

            <span>BACnet</span>
            <span>Modbus</span>
            <span>OPC-UA</span>
            <span>MQTT</span>
          </div>

          <div>
            <h3>Enterprise APIs</h3>

            <span>REST APIs</span>
            <span>HTTPS</span>
            <span>WebSockets</span>
            <span>OAuth 2.0</span>
          </div>

          <div>
            <h3>DER & Energy</h3>

            <span>IEC 61850</span>
            <span>IEEE 2030.5</span>
            <span>OpenADR</span>
            <span>OCPP</span>
            <span>SunSpec</span>
            <span>DER APIs</span>
          </div>

        </div>
      </section>


      {/* =========================================================
          DER & GRID OPTIMISATION
      ========================================================= */}
      <section className="gatewaySection">
        <div className="gatewaySectionHeader">
          <p>Connected Energy Optimisation</p>

          <h2>
            Coordinate demand, solar, batteries and flexible loads.
          </h2>

          <span>
            As deployments evolve, the AI Energy Gateway can support
            coordination between facility demand, Solar PV, battery storage,
            EV charging, tariffs and other flexible loads.
            {" "}
            This creates a pathway toward lower peak-demand costs, improved
            onsite energy utilisation and future demand-response and grid
            participation opportunities.
          </span>
        </div>

        <div className="gatewayFutureGrid">

          <div>
            <Server />
            <strong>Retailers</strong>
          </div>

          <div>
            <GitBranch />
            <strong>Aggregators</strong>
          </div>

          <div className="active">
            <Zap />
            <strong>AI Energy Gateway</strong>
          </div>

          <div>
            <RadioTower />
            <strong>DNSPs</strong>
          </div>

          <div>
            <LineChart />
            <strong>AEMO Forecasts</strong>
          </div>

        </div>
      </section>


      {/* =========================================================
          WHAT THIS ENABLES
      ========================================================= */}
      <section className="gatewayProof">
        <div>
          <p>What this enables</p>

          <h2>
            From connected energy data to measurable savings.
          </h2>

          <span>
            The AI Energy Gateway provides the operational foundation for
            EnerG IQ Tech to identify energy waste, recommend governed
            optimisation actions and measure the resulting energy, financial
            and carbon outcomes.
            {" "}
            Organisations can begin with a focused building or operational
            system and progressively expand toward connected DER coordination,
            flexible load management and portfolio-wide optimisation.
          </span>
        </div>

        <ul>
          <li>
            <CheckCircle2 />
            Real-time energy and equipment visibility
          </li>

          <li>
            <CheckCircle2 />
            Energy waste and peak-demand detection
          </li>

          <li>
            <CheckCircle2 />
            AI-recommended optimisation actions
          </li>

          <li>
            <CheckCircle2 />
            Human-in-the-loop operational control
          </li>

          <li>
            <CheckCircle2 />
            Energy cost and associated CO₂ measurement
          </li>

          <li>
            <CheckCircle2 />
            DER and flexible-load coordination
          </li>

          <li>
            <CheckCircle2 />
            Future demand-response and grid integration pathways
          </li>
        </ul>
      </section>


      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="gatewayCTA">
        <h2>
          Connect Your Energy Assets. Find the Waste. Prove the Savings.
        </h2>

        <p>
          Start with a focused site or energy-intensive system.
          EnerG IQ Tech can review your connected assets, establish an energy
          baseline and identify opportunities to reduce energy costs,
          peak demand and associated CO₂ emissions before broader deployment.
        </p>

        <Link to="/pilot-program" className="gatewayPrimary">
          Explore Pilot Program <ChevronRight size={18} />
        </Link>
      </section>

    </main>
  );
}