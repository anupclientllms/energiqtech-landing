import "../styles/ConnectedEnergyAssetsPage.css";
import { Link } from "react-router-dom";

import {
  Activity,
  BatteryCharging,
  Brain,
  Building2,
  CheckCircle2,
  ChevronRight,
  Gauge,
  Leaf,
  LineChart,
  Network,
  PlugZap,
  RadioTower,
  ShieldCheck,
  Sun,
  Zap,
} from "lucide-react";


export default function ConnectedEnergyAssetsPage() {
  return (
    <main className="ceaPage">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="ceaHero">
        <div className="ceaHeroContent">

          <p className="ceaEyebrow">
            Connected Energy Assets
          </p>

          <h1>
            Connect Energy Assets to Reduce Energy Costs & CO₂ Emissions.
          </h1>

          <p>
            EnerG IQ Tech connects buildings, Solar PV, Battery Energy Storage
            Systems, EV charging, smart meters, IoT devices and utility
            interfaces through a common AI energy optimisation layer.
            {" "}
            By coordinating how energy is consumed, generated, stored and
            shifted, organisations can identify energy waste, reduce peak
            demand, improve renewable-energy utilisation, lower operating
            costs and reduce associated CO₂ emissions.
          </p>


          <div className="ceaHeroActions">

            <Link
              to="/pilot-program"
              className="ceaPrimary"
            >
              Explore Pilot Program
              <ChevronRight size={18} />
            </Link>


            <Link
              to="/ai-energy-gateway"
              className="ceaSecondary"
            >
              AI Energy Gateway
            </Link>

          </div>

        </div>
      </section>


      {/* =========================================================
          WHY CONNECTED ASSETS MATTER
      ========================================================= */}

      <section className="ceaSection">

        <div className="ceaSectionHeader">

          <p>
            Why connected assets matter
          </p>

          <h2>
            Energy Costs Rise When Buildings and Energy Assets Operate
            Independently.
          </h2>

          <span>
            Buildings, solar generation, battery storage, EV charging and
            metering often operate as separate systems.
            {" "}
            EnerG IQ Tech brings these assets into a common intelligence layer
            so organisations can understand where energy is being consumed,
            identify avoidable demand, coordinate available energy resources
            and measure the resulting financial and carbon outcomes.
          </span>

        </div>


        <div className="ceaAssetGrid">

          <div>
            <Building2 />

            <strong>
              Building Management Systems
            </strong>

            <span>
              Optimise HVAC, lighting, controls and building operations to
              reduce avoidable energy consumption and peak demand.
            </span>
          </div>


          <div>
            <Sun />

            <strong>
              Solar PV
            </strong>

            <span>
              Improve onsite renewable-energy utilisation using generation,
              inverter performance, forecasts and facility demand.
            </span>
          </div>


          <div>
            <BatteryCharging />

            <strong>
              Battery Storage
            </strong>

            <span>
              Coordinate battery charge and discharge around facility demand,
              tariffs, solar generation and peak-demand events.
            </span>
          </div>


          <div>
            <PlugZap />

            <strong>
              EV Charging
            </strong>

            <span>
              Schedule charging around operational requirements, electricity
              costs and site demand to reduce unnecessary peaks.
            </span>
          </div>


          <div>
            <Gauge />

            <strong>
              Smart Meters
            </strong>

            <span>
              Measure energy consumption, demand, import, export and tariff
              exposure to establish measurable energy baselines.
            </span>
          </div>


          <div>
            <Activity />

            <strong>
              IoT Devices
            </strong>

            <span>
              Use environmental, equipment and operational sensor data to
              provide context for energy optimisation decisions.
            </span>
          </div>


          <div>
            <RadioTower />

            <strong>
              Utility Interfaces
            </strong>

            <span>
              Incorporate tariffs, grid conditions and future demand-response
              signals into governed energy optimisation workflows.
            </span>
          </div>


          <div>
            <Network />

            <strong>
              DER Coordination
            </strong>

            <span>
              Coordinate distributed energy assets through a common AI layer
              to reduce costs, improve flexibility and optimise energy use.
            </span>
          </div>

        </div>

      </section>


      {/* =========================================================
          VALUE / DER INTELLIGENCE
      ========================================================= */}

      <section className="ceaDarkSection">

        <div className="ceaDarkHeader">

          <p>
            Connected Energy Intelligence
          </p>

          <h2>
            Coordinate Energy Consumption, Generation & Storage for
            Measurable Savings.
          </h2>

          <span>
            EnerG IQ Tech combines site telemetry, electricity demand,
            renewable generation, battery state, tariffs and operational
            conditions to identify opportunities that can lower energy costs,
            reduce peak demand and associated CO₂ emissions while maintaining
            operational requirements.
          </span>

        </div>


        <div className="ceaFlow">

          {[
            "Energy & Asset Telemetry",
            "Solar Forecast",
            "Battery State of Charge",
            "Electricity Demand & Tariffs",
            "Operational Constraints",
            "AI Analysis",
            "Optimisation Recommendation",
            "Human Approval",
            "Optimised Action",
            "Energy + Cost + CO₂ Measurement",
          ].map((item, index) => (

            <div
              className="ceaFlowItem"
              key={item}
            >
              <b>
                {index + 1}
              </b>

              <span>
                {item}
              </span>
            </div>

          ))}

        </div>

      </section>


      {/* =========================================================
          INTELLIGENT ACTIONS
      ========================================================= */}

      <section className="ceaSection">

        <div className="ceaSectionHeader">

          <p>
            Intelligent energy actions
          </p>

          <h2>
            Turn Connected Energy Data Into Cost & Carbon Reduction Actions.
          </h2>

          <span>
            EnerG IQ Tech evaluates how buildings and distributed energy assets
            can work together to reduce unnecessary consumption, shift demand,
            increase onsite renewable utilisation and improve overall energy
            performance.
          </span>

        </div>


        <div className="ceaActionGrid">

          <div>
            <Zap />

            <strong>
              Shift HVAC & Flexible Loads
            </strong>

            <span>
              Reduce peak-demand exposure through AI-assisted scheduling,
              forecasting and governed load optimisation.
            </span>
          </div>


          <div>
            <BatteryCharging />

            <strong>
              Optimise Battery Dispatch
            </strong>

            <span>
              Charge and discharge batteries based on facility demand,
              electricity tariffs, solar generation and operational
              constraints.
            </span>
          </div>


          <div>
            <PlugZap />

            <strong>
              Coordinate EV Charging
            </strong>

            <span>
              Schedule EV charging around site demand and electricity costs
              while maintaining required charging availability.
            </span>
          </div>


          <div>
            <Sun />

            <strong>
              Increase Solar Utilisation
            </strong>

            <span>
              Improve onsite renewable-energy use by coordinating solar
              generation with building loads, batteries and flexible demand.
            </span>
          </div>


          <div>
            <ShieldCheck />

            <strong>
              Human-in-the-Loop Control
            </strong>

            <span>
              Keep authorised operators involved in reviewing and approving
              AI-recommended optimisation actions before operational changes
              are applied.
            </span>
          </div>


          <div>
            <LineChart />

            <strong>
              Measure Energy, Cost & CO₂ Outcomes
            </strong>

            <span>
              Compare performance against established baselines to quantify
              energy savings, peak-demand reduction, financial value,
              associated CO₂ outcomes and flexibility benefits.
            </span>
          </div>

        </div>

      </section>


      {/* =========================================================
          CONNECTED ENERGY PLATFORM
      ========================================================= */}

      <section className="ceaEvolution">

        <div className="ceaEvolutionText">

          <p>
            CONNECTED ENERGY PLATFORM
          </p>

          <h2>
            Start With Energy Savings Today. Build Toward Intelligent DER
            Coordination Tomorrow.
          </h2>

          <span>
            EnerG IQ Tech connects Building Management Systems, Distributed
            Energy Resources and AI decision intelligence through a common AI
            Energy Gateway.
            {" "}
            The immediate objective is to reduce energy waste, operating costs,
            peak demand and associated CO₂ emissions. The same architecture
            creates a pathway toward flexible-load coordination, demand
            response and future grid participation as deployments mature.
          </span>

        </div>


        <div className="ceaPhases">

          <div>
            <b>
              1
            </b>

            <strong>
              Reduce Building Energy Waste
            </strong>

            <span>
              Connect BMS, HVAC and meters to identify unnecessary consumption,
              peak demand and operational inefficiencies.
            </span>
          </div>


          <div>
            <b>
              2
            </b>

            <strong>
              Connect DER Assets
            </strong>

            <span>
              Integrate Solar PV, BESS, EV charging, smart meters and IoT
              telemetry into the same energy intelligence layer.
            </span>
          </div>


          <div>
            <b>
              3
            </b>

            <strong>
              Coordinate Energy Use
            </strong>

            <span>
              Use forecasts, tariffs, AI Decision Agents and Digital Twin
              context to optimise demand, storage and flexible loads.
            </span>
          </div>


          <div>
            <b>
              4
            </b>

            <strong>
              Expand Into Grid Services
            </strong>

            <span>
              Create future pathways toward demand response, aggregators,
              DNSPs and other grid participation opportunities.
            </span>
          </div>

        </div>

      </section>


      {/* =========================================================
          PLATFORM ARCHITECTURE
      ========================================================= */}

      <section className="ceaRoadmap">

        <div className="ceaSectionHeader">

          <p>
            Platform Architecture
          </p>

          <h2>
            One AI Architecture From Energy-Consuming Assets to Measurable
            Savings.
          </h2>

          <span>
            EnerG IQ Tech provides a common architecture that connects
            operational building systems, Distributed Energy Resources and
            AI decision intelligence through the AI Energy Gateway — enabling
            organisations to analyse, optimise and measure energy performance
            across their connected energy ecosystem.
          </span>

        </div>


        <div className="ceaRoadmapGrid">

          <div>

            <b>
              Energy-Consuming Systems
            </b>

            <ul>
              <li>
                <CheckCircle2 />
                Building Management Systems
              </li>

              <li>
                <CheckCircle2 />
                HVAC
              </li>

              <li>
                <CheckCircle2 />
                Lighting
              </li>

              <li>
                <CheckCircle2 />
                Refrigeration & Operational Loads
              </li>

              <li>
                <CheckCircle2 />
                Peak Demand Management
              </li>
            </ul>

          </div>


          <div>

            <b>
              Connected DER Assets
            </b>

            <ul>
              <li>
                <CheckCircle2 />
                Solar PV
              </li>

              <li>
                <CheckCircle2 />
                Battery Energy Storage
              </li>

              <li>
                <CheckCircle2 />
                EV Charging
              </li>

              <li>
                <CheckCircle2 />
                Smart Meters
              </li>

              <li>
                <CheckCircle2 />
                IoT Devices
              </li>
            </ul>

          </div>


          <div>

            <b>
              AI Optimisation Layer
            </b>

            <ul>
              <li>
                <CheckCircle2 />
                AI Energy Gateway
              </li>

              <li>
                <CheckCircle2 />
                AI Decision Agents
              </li>

              <li>
                <CheckCircle2 />
                Digital Twin Context
              </li>

              <li>
                <CheckCircle2 />
                Forecasting & Tariff Intelligence
              </li>

              <li>
                <CheckCircle2 />
                Human-in-the-Loop Governance
              </li>
            </ul>

          </div>


          <div>

            <b>
              Energy & Carbon Outcomes
            </b>

            <ul>
              <li>
                <CheckCircle2 />
                Lower Energy Consumption
              </li>

              <li>
                <CheckCircle2 />
                Lower Peak Demand
              </li>

              <li>
                <CheckCircle2 />
                Lower Energy Costs
              </li>

              <li>
                <CheckCircle2 />
                Associated CO₂ Reduction
              </li>

              <li>
                <CheckCircle2 />
                Improved Renewable Utilisation
              </li>

              <li>
                <CheckCircle2 />
                Future Grid Flexibility
              </li>
            </ul>

          </div>

        </div>

      </section>


      {/* =========================================================
          GRID-READY AI ARCHITECTURE
      ========================================================= */}

      <section className="ceaArenaAlignment">

        <div className="ceaSectionHeader">

          <p>
            Grid-Ready AI Architecture
          </p>

          <h2>
            Energy Cost & Carbon Optimisation Today — Grid Flexibility
            Pathways for the Future.
          </h2>

          <span>
            EnerG IQ Tech combines AI Energy Gateway technology, Digital
            Twins and AI Decision Agents to support coordinated energy asset
            operation, tariff-aware optimisation and renewable-energy
            utilisation today, while providing an architecture that can
            support future demand response and grid integration pathways.
          </span>

        </div>


        <div className="ceaChecklistGrid">

          <div>
            <CheckCircle2 />

            <span>
              Identify energy waste and avoidable peak demand across connected
              buildings and operational assets
            </span>
          </div>


          <div>
            <CheckCircle2 />

            <span>
              Coordinate building demand, Solar PV, BESS and EV charging using
              operational context and forecasts
            </span>
          </div>


          <div>
            <CheckCircle2 />

            <span>
              Reduce electricity costs through tariff-aware and demand-aware
              optimisation
            </span>
          </div>


          <div>
            <CheckCircle2 />

            <span>
              Reduce associated CO₂ emissions by lowering unnecessary energy
              consumption and improving renewable-energy utilisation
            </span>
          </div>


          <div>
            <CheckCircle2 />

            <span>
              Measure energy, peak-demand, financial and carbon outcomes
              against established baselines
            </span>
          </div>


          <div>
            <CheckCircle2 />

            <span>
              Maintain human-in-the-loop governance before operational actions
              are executed
            </span>
          </div>


          <div>
            <CheckCircle2 />

            <span>
              Support interoperable communication across BMS, DER assets,
              meters and IoT devices
            </span>
          </div>


          <div>
            <CheckCircle2 />

            <span>
              Provide a future pathway toward demand response, DNSP,
              aggregator and other grid integration opportunities
            </span>
          </div>

        </div>

      </section>


      {/* =========================================================
          FUTURE GRID PATHWAY
      ========================================================= */}

      <section className="ceaProof">

        <div>

          <p>
            Future grid pathway
          </p>

          <h2>
            Optimise Behind-the-Meter Energy First. Expand Into Grid
            Participation When Ready.
          </h2>

          <span>
            EnerG IQ Tech does not require organisations to begin with complex
            electricity-market participation.
            {" "}
            The platform can first address practical energy-cost, peak-demand
            and carbon-reduction opportunities within buildings and facilities.
            The same connected architecture can later support governed demand
            response, flexible loads and grid-service participation as customer
            requirements evolve.
          </span>

        </div>


        <ul>

          <li>
            <CheckCircle2 />
            Building and facility energy optimisation
          </li>

          <li>
            <CheckCircle2 />
            Scheduled flexible-load optimisation
          </li>

          <li>
            <CheckCircle2 />
            Battery and EV charging coordination
          </li>

          <li>
            <CheckCircle2 />
            Solar self-consumption optimisation
          </li>

          <li>
            <CheckCircle2 />
            Peak-demand and grid-import reduction
          </li>

          <li>
            <CheckCircle2 />
            Future demand-response readiness
          </li>

          <li>
            <CheckCircle2 />
            DNSP, retailer and aggregator integration pathways
          </li>

        </ul>

      </section>


      {/* =========================================================
          CTA
      ========================================================= */}

      <section className="ceaCTA">

        <h2>
          Connect Your Energy Assets. Reduce Costs. Reduce CO₂.
        </h2>

        <p>
          Start with one site and a measurable energy baseline. EnerG IQ Tech
          can identify how buildings and connected energy assets interact,
          uncover energy and peak-demand optimisation opportunities and
          quantify potential financial and associated CO₂ outcomes before
          broader deployment.
        </p>


        <Link
          to="/pilot-program"
          className="ceaPrimary"
        >
          Explore Pilot Program
          <ChevronRight size={18} />
        </Link>

      </section>

    </main>
  );
}