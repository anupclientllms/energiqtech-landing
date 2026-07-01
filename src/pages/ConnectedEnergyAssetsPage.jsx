import "../styles/ConnectedEnergyAssetsPage.css";
import { Link } from "react-router-dom";
import {
  BatteryCharging,
  Building2,
  CheckCircle2,
  ChevronRight,
  Gauge,
  PlugZap,
  RadioTower,
  ShieldCheck,
  Sun,
  Zap,
  Activity,
  Network,
  LineChart,
  Brain,
  ArrowDown,
} from "lucide-react";

export default function ConnectedEnergyAssetsPage() {
  return (
    <main className="ceaPage">
      <section className="ceaHero">
        <div className="ceaHeroContent">
          <p className="ceaEyebrow">Connected Energy Assets</p>

          <h1>AI platform for buildings, DER and grid-aware energy operations.</h1>

          <p>
            EnergIQ Tech provides a common AI architecture for Building Management
            Systems, Solar PV, Battery Energy Storage, EV Charging, Smart Meters,
            IoT devices and utility interfaces — enabling intelligent operational
            optimisation today and supporting future demand response and grid participation.
          </p>

          <div className="ceaHeroActions">
            <Link to="/pilot-program" className="ceaPrimary">
              Explore Pilot Program <ChevronRight size={18} />
            </Link>

            <Link to="/ai-energy-gateway" className="ceaSecondary">
              AI Energy Gateway
            </Link>
          </div>
        </div>
      </section>

      <section className="ceaSection">
        <div className="ceaSectionHeader">
          <p>Why connected assets matter</p>
          <h2>Energy systems are becoming distributed, dynamic and data-rich.</h2>
          <span>
            Buildings, solar, batteries, EV charging and meters often operate as
            separate systems. EnergIQ Tech uses the AI Energy Gateway and AI Decision
            Agents to bring these assets into a common operational intelligence layer.
          </span>
        </div>

        <div className="ceaAssetGrid">
          <div>
            <Building2 />
            <strong>Building Management Systems</strong>
            <span>HVAC, lighting, controls, occupancy and building operations.</span>
          </div>

          <div>
            <Sun />
            <strong>Solar PV</strong>
            <span>Generation, inverter performance, forecast and utilisation.</span>
          </div>

          <div>
            <BatteryCharging />
            <strong>Battery Storage</strong>
            <span>State of charge, charge/discharge, health and peak shaving.</span>
          </div>

          <div>
            <PlugZap />
            <strong>EV Charging</strong>
            <span>Charging status, power demand, scheduling and utilisation.</span>
          </div>

          <div>
            <Gauge />
            <strong>Smart Meters</strong>
            <span>Import, export, tariffs, demand and energy variance.</span>
          </div>

          <div>
            <Activity />
            <strong>IoT Devices</strong>
            <span>Environmental, equipment and operational sensor data.</span>
          </div>

          <div>
            <RadioTower />
            <strong>Utility Interfaces</strong>
            <span>Tariffs, signals, demand-response events and grid conditions.</span>
          </div>

          <div>
            <Network />
            <strong>DER Coordination</strong>
            <span>Connected energy assets coordinated through one AI platform.</span>
          </div>
        </div>
      </section>

      <section className="ceaDarkSection">
        <div className="ceaDarkHeader">
          <p>DER Intelligence</p>
          <h2>From telemetry to grid-aware optimisation.</h2>
          <span>
            The platform architecture is designed to combine site telemetry,
            renewable forecasts, battery state, tariffs and future demand-response
            signals into governed AI decision workflows.
          </span>
        </div>

        <div className="ceaFlow">
          {[
            "Telemetry",
            "Solar Forecast",
            "Battery State of Charge",
            "Electricity Prices",
            "DNSP / Demand Response Signals",
            "AEMO / Market Forecasts",
            "AI Decision Agents",
            "Human Approval",
            "Optimised Actions",
            "Savings + Grid Support",
          ].map((item, index) => (
            <div className="ceaFlowItem" key={item}>
              <b>{index + 1}</b>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="ceaSection">
        <div className="ceaSectionHeader">
          <p>Intelligent actions</p>
          <h2>Coordinated decisions across buildings and distributed energy assets.</h2>
        </div>

        <div className="ceaActionGrid">
          <div>
            <Zap />
            <strong>Shift HVAC Loads</strong>
            <span>Reduce peak demand through AI-assisted scheduling and control recommendations.</span>
          </div>

          <div>
            <BatteryCharging />
            <strong>Charge / Discharge Battery</strong>
            <span>Optimise battery use based on demand, tariff, forecast and site conditions.</span>
          </div>

          <div>
            <PlugZap />
            <strong>Delay EV Charging</strong>
            <span>Reduce load impact by scheduling EV charging around demand and cost signals.</span>
          </div>

          <div>
            <Sun />
            <strong>Improve Solar Utilisation</strong>
            <span>Increase self-consumption and reduce waste through operational coordination.</span>
          </div>

          <div>
            <ShieldCheck />
            <strong>Human-in-the-Loop Approval</strong>
            <span>Keep operators in control before actions are executed or scaled.</span>
          </div>

          <div>
            <LineChart />
            <strong>Measure ROI & Grid Impact</strong>
            <span>Track cost savings, carbon reduction, load shifting and flexibility value.</span>
          </div>
        </div>
      </section>

      <section className="ceaEvolution">
        <div className="ceaEvolutionText">
          <p>Platform evolution</p>
          <h2>Commercial buildings are the first deployment pathway.</h2>
          <span>
            EnergIQ Tech starts with practical commercial building pilots while
            the same AI Energy Gateway architecture supports expansion into
            connected DER optimisation and future grid participation.
          </span>
        </div>

        <div className="ceaPhases">
          <div>
            <b>1</b>
            <strong>Commercial Buildings</strong>
            <span>BMS, HVAC, peak demand, Digital Twin and AI Gateway pilots.</span>
          </div>

          <div>
            <b>2</b>
            <strong>Connected Energy Assets</strong>
            <span>Solar PV, BESS, EV Charging, Smart Meters and IoT integration.</span>
          </div>

          <div>
            <b>3</b>
            <strong>DER Optimisation</strong>
            <span>Tariffs, forecasts, battery optimisation and scheduled loads.</span>
          </div>

          <div>
            <b>4</b>
            <strong>Grid Participation</strong>
            <span>Retailer, aggregator, DNSP and AEMO-related market pathways.</span>
          </div>
        </div>
      </section>

      <section className="ceaRoadmap">
        <div className="ceaSectionHeader">
            <p>Platform Architecture</p>

            <h2>
            A unified AI architecture for buildings, distributed energy resources and
            grid-connected energy systems.
            </h2>

            <span>
            EnergIQ Tech provides a common AI platform that connects operational
            building systems, Distributed Energy Resources (DER), AI decision
            intelligence and future grid integration through a shared AI Energy
            Gateway architecture.
            </span>
        </div>

        <div className="ceaRoadmapGrid">
            <div>
            <b>Commercial Building Systems</b>

            <ul>
                <li><CheckCircle2 /> Building Management Systems (BMS)</li>
                <li><CheckCircle2 /> HVAC</li>
                <li><CheckCircle2 /> Lighting</li>
                <li><CheckCircle2 /> Digital Twin</li>
                <li><CheckCircle2 /> Peak Demand Management</li>
            </ul>
            </div>

            <div>
            <b>Connected DER Assets</b>

            <ul>
                <li><CheckCircle2 /> Solar PV</li>
                <li><CheckCircle2 /> Battery Energy Storage (BESS)</li>
                <li><CheckCircle2 /> EV Charging</li>
                <li><CheckCircle2 /> Smart Meters</li>
                <li><CheckCircle2 /> IoT Devices</li>
            </ul>
            </div>

            <div>
            <b>AI Intelligence Layer</b>

            <ul>
                <li><CheckCircle2 /> AI Energy Gateway</li>
                <li><CheckCircle2 /> AI Decision Agents</li>
                <li><CheckCircle2 /> Forecasting</li>
                <li><CheckCircle2 /> Human-in-the-Loop Governance</li>
                <li><CheckCircle2 /> Operational Optimisation</li>
            </ul>
            </div>

            <div>
            <b>Grid Integration Pathways</b>

            <ul>
                <li><CheckCircle2 /> Tariff Optimisation</li>
                <li><CheckCircle2 /> Demand Response</li>
                <li><CheckCircle2 /> DNSP Signals</li>
                <li><CheckCircle2 /> AEMO Forecasts</li>
                <li><CheckCircle2 /> Aggregator Integration</li>
                <li><CheckCircle2 /> Virtual Power Plant Readiness</li>
            </ul>
            </div>
        </div>
        </section>

        <section className="ceaArenaAlignment">
        <div className="ceaSectionHeader">
            <p>Grid-Ready AI Architecture</p>

            <h2>
            Designed to support modern DER ecosystems and intelligent energy
            coordination.
            </h2>

            <span>
            EnergIQ Tech combines AI Energy Gateway technology, Digital Twins and AI
            Decision Agents into a unified architecture designed to support
            coordinated energy asset operation, forecasting, tariff-aware
            optimisation, interoperable DER communication and future grid
            participation pathways.
            </span>
        </div>

        <div className="ceaChecklistGrid">

            <div>
            <CheckCircle2 />
            <span>
                Coordinated operation across commercial buildings and connected DER
                assets
            </span>
            </div>

            <div>
            <CheckCircle2 />
            <span>
                AI-assisted optimisation using operational context, forecasts and
                tariffs
            </span>
            </div>

            <div>
            <CheckCircle2 />
            <span>
                Human-in-the-loop governance before operational actions are executed
            </span>
            </div>

            <div>
            <CheckCircle2 />
            <span>
                Forecast-driven optimisation for demand, solar generation and battery
                utilisation
            </span>
            </div>

            <div>
            <CheckCircle2 />
            <span>
                Real-time operational telemetry and connected asset visibility
            </span>
            </div>

            <div>
            <CheckCircle2 />
            <span>
                Interoperable communication across BMS, DER assets and IoT devices
            </span>
            </div>

            <div>
            <CheckCircle2 />
            <span>
                Secure data exchange supporting enterprise, utility and DER
                environments
            </span>
            </div>

            <div>
            <CheckCircle2 />
            <span>
                Architecture designed to support future demand response, DNSP,
                aggregator and AEMO integration pathways
            </span>
            </div>

        </div>
        </section>

        <section className="ceaProof">
            <div>
            <p>Grid-aware architecture</p>
            <h2>Designed to support future demand response and market participation.</h2>
            <span>
                EnergIQ Tech does not replace existing systems. It creates an AI
                coordination layer that can connect assets, recommend actions and support
                governed participation in future grid and demand-response programs.
            </span>
            </div>

            <ul>
            <li><CheckCircle2 /> Demand response readiness</li>
            <li><CheckCircle2 /> Scheduled load optimisation</li>
            <li><CheckCircle2 /> Battery and EV charging coordination</li>
            <li><CheckCircle2 /> Solar self-consumption and grid import optimisation</li>
            <li><CheckCircle2 /> DNSP, retailer and aggregator integration pathways</li>
            </ul>
        </section>

        <section className="ceaCTA">
            <h2>Explore how EnergIQ Tech can support connected energy assets.</h2>
            <p>
            Start with a pilot discussion to review your buildings, energy assets,
            operational data and potential DER optimisation pathways.
            </p>

            <Link to="/pilot-program" className="ceaPrimary">
            Explore Pilot Program <ChevronRight size={18} />
            </Link>
        </section>
    </main>
  );
}