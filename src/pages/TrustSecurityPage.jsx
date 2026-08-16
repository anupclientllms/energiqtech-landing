import "../styles/TrustSecurityPage.css";
import { Link } from "react-router-dom";

import {
  BatteryCharging,
  Building2,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Database,
  Eye,
  Gauge,
  Leaf,
  Lock,
  PlugZap,
  Server,
  ShieldCheck,
  Sun,
  TrendingDown,
  UserCheck,
  Zap,
} from "lucide-react";


export default function TrustSecurityPage() {
  return (
    <main className="trustPage">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="trustHero">

        <div className="trustHeroContent">

          <p className="trustEyebrow">
            Trust, Security & Data Governance
          </p>


          <h1>
            Secure, Governed AI for Reducing Energy Costs & CO₂ Emissions.
          </h1>


          <p>
            EnerG IQ Tech is designed to help energy-intensive organisations
            reduce energy waste, operating costs, peak demand and associated
            CO₂ emissions without giving up control of operational systems,
            data or decision-making.
            {" "}
            Secure integration, defined data boundaries and human-in-the-loop
            governance support responsible AI optimisation across buildings,
            industrial equipment, refrigeration and connected energy assets.
          </p>


          <div className="trustHeroActions">

            <Link
              to="/pilot-program"
              className="trustPrimary"
            >
              Explore Pilot Program
              <ChevronRight size={18} />
            </Link>


            <Link
              to="/about"
              className="trustSecondary"
            >
              About EnerG IQ Tech
            </Link>

          </div>

        </div>

      </section>


      {/* =========================================================
          CLIENT CONFIDENCE
      ========================================================= */}

      <section className="trustSection">

        <div className="trustSectionHeader">

          <p>
            Client Confidence
          </p>


          <h2>
            Energy Savings Should Not Require Giving Up Operational Control.
          </h2>


          <span>
            EnerG IQ Tech is designed for facilities, engineering,
            sustainability, energy, IT and operational teams that need to
            pursue measurable energy-cost and CO₂ reduction while maintaining
            clear control over data access, AI recommendations and operational
            actions.
          </span>

        </div>


        <div className="trustGrid">

          <div>

            <Database />

            <strong>
              Controlled Data Scope
            </strong>

            <span>
              Data requirements are agreed upfront so deployments focus on
              information required to establish energy baselines, identify
              waste and evaluate optimisation opportunities.
            </span>

          </div>


          <div>

            <Lock />

            <strong>
              Controlled System Access
            </strong>

            <span>
              Access boundaries, stakeholder responsibilities and integration
              requirements can be defined before connecting BMS, meters,
              industrial systems, Solar PV, batteries, EV charging or IoT
              telemetry.
            </span>

          </div>


          <div>

            <ShieldCheck />

            <strong>
              Governance-First Optimisation
            </strong>

            <span>
              Energy-cost and carbon optimisation can be introduced through
              staged, reviewable workflows rather than uncontrolled
              automation across operational assets.
            </span>

          </div>


          <div>

            <UserCheck />

            <strong>
              Human-in-the-Loop Control
            </strong>

            <span>
              AI-assisted optimisation recommendations remain subject to
              authorised review and approval before operational changes are
              applied.
            </span>

          </div>

        </div>

      </section>


      {/* =========================================================
          DEPLOYMENT MODELS
      ========================================================= */}

      <section className="trustDark">

        <div className="trustDarkContent">

          <div>

            <p>
              Deployment Models
            </p>


            <h2>
              Prove Energy & Carbon Value Through a Controlled Deployment
              Pathway.
            </h2>


            <span>
              EnerG IQ Tech supports staged deployment from a focused pilot
              through to broader operational optimisation. Data scope,
              system access, governance boundaries and success criteria can
              be agreed before deployment, allowing organisations to prove
              savings before expanding.
            </span>

          </div>


          <div className="trustPrinciples">

            <div>

              <CheckCircle2 />

              <span>
                Pilot deployments with defined data, operational and success
                boundaries
              </span>

            </div>


            <div>

              <CheckCircle2 />

              <span>
                Energy, cost and associated CO₂ baselines agreed before
                optimisation
              </span>

            </div>


            <div>

              <CheckCircle2 />

              <span>
                Scaled deployments aligned with client security and governance
                requirements
              </span>

            </div>


            <div>

              <CheckCircle2 />

              <span>
                Client-controlled data options for enterprise and connected
                energy environments
              </span>

            </div>


            <div>

              <CheckCircle2 />

              <span>
                Human review before broader rollout or operational adoption
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          DATA ENVIRONMENT
      ========================================================= */}

      <section className="trustSection">

        <div className="trustSectionHeader">

          <p>
            Data Environment Options
          </p>


          <h2>
            Keep Control of the Operational Data Used to Identify Energy
            Savings.
          </h2>


          <span>
            EnerG IQ Tech can be structured around client-approved
            infrastructure, data-access and governance requirements while
            providing the AI application and optimisation layer needed to
            identify energy waste and measure financial and associated CO₂
            outcomes.
          </span>

        </div>


        <div className="trustProcessGrid">

          <div>

            <b>
              1
            </b>

            <h3>
              Pilot Deployment
            </h3>

            <p>
              Begin with a focused deployment to establish the energy
              baseline, identify optimisation opportunities and validate
              measurable financial and carbon value.
            </p>

          </div>


          <div>

            <b>
              2
            </b>

            <h3>
              Approved Operational Data
            </h3>

            <p>
              BMS, meters, equipment, Solar PV, Battery Storage, EV charging
              and IoT telemetry can be scoped according to agreed access
              boundaries.
            </p>

          </div>


          <div>

            <b>
              3
            </b>

            <h3>
              Client-Aligned Environment
            </h3>

            <p>
              Deployment can be aligned with client-approved cloud, storage,
              network, identity and data-governance expectations.
            </p>

          </div>


          <div>

            <b>
              4
            </b>

            <h3>
              Governed Scale-Up
            </h3>

            <p>
              Broader deployment can follow once energy, financial,
              associated CO₂ and operational outcomes have been reviewed.
            </p>

          </div>

        </div>

      </section>


      {/* =========================================================
          GOVERNANCE AND ACCESS
      ========================================================= */}

      <section className="trustSection trustLight">

        <div className="trustSectionHeader">

          <p>
            Governance & Access
          </p>


          <h2>
            AI Recommends. Authorised People Remain in Control.
          </h2>


          <span>
            EnerG IQ Tech is designed to support operational decision-making,
            not remove accountability from the people responsible for
            facilities, equipment, safety and service delivery.
          </span>

        </div>


        <div className="trustAvoidGrid">

          <div>

            <Building2 />

            <strong>
              Client-Owned Operational Context
            </strong>

            <span>
              Facilities, engineering, sustainability and operational teams
              determine how energy findings are interpreted, prioritised and
              acted upon.
            </span>

          </div>


          <div>

            <Server />

            <strong>
              Client-Controlled Data Options
            </strong>

            <span>
              Deployments can be structured around client-approved
              infrastructure, storage, identity and access requirements.
            </span>

          </div>


          <div>

            <ClipboardCheck />

            <strong>
              Review Before Action
            </strong>

            <span>
              AI recommendations can be reviewed against operational,
              comfort, production, safety or service requirements before
              connected-asset changes are approved.
            </span>

          </div>

        </div>

      </section>


      {/* =========================================================
          WHY GOVERNANCE MATTERS TO OUTCOMES
      ========================================================= */}

      <section className="trustSection">

        <div className="trustSectionHeader">

          <p>
            Governed Energy Optimisation
          </p>


          <h2>
            Reduce Cost & CO₂ Without Creating New Operational Risk.
          </h2>


          <span>
            The objective is not autonomous control for its own sake.
            EnerG IQ Tech uses governed AI to help organisations identify
            and implement appropriate optimisation opportunities while
            protecting the operational conditions that matter to each site.
          </span>

        </div>


        <div className="trustGrid">

          <div>

            <TrendingDown />

            <strong>
              Lower Energy Costs
            </strong>

            <span>
              Identify avoidable consumption, inefficient equipment
              behaviour and costly demand events using approved operational
              data.
            </span>

          </div>


          <div>

            <Leaf />

            <strong>
              Lower Associated CO₂
            </strong>

            <span>
              Quantify associated CO₂ outcomes from reduced energy
              consumption and improved use of renewable-energy resources.
            </span>

          </div>


          <div>

            <Zap />

            <strong>
              Lower Peak Demand
            </strong>

            <span>
              Evaluate demand-reduction strategies within agreed site,
              service and equipment constraints before implementation.
            </span>

          </div>


          <div>

            <ShieldCheck />

            <strong>
              Protected Operations
            </strong>

            <span>
              Keep comfort, temperature, production, safety, resilience and
              service requirements within the optimisation decision process.
            </span>

          </div>

        </div>

      </section>


      {/* =========================================================
          CONNECTED ASSET COVERAGE
      ========================================================= */}

      <section className="trustSection">

        <div className="trustSectionHeader">

          <p>
            Connected Asset Coverage
          </p>


          <h2>
            One Governance Model Across Energy-Consuming & Energy-Producing
            Assets.
          </h2>


          <span>
            The same security and governance principles can apply across
            buildings, refrigeration, industrial equipment, distributed
            energy resources and other infrastructure used in EnerG IQ Tech
            optimisation workflows.
          </span>

        </div>


        <div className="trustAvoidGrid">

          <div>

            <Building2 />

            <strong>
              Buildings & Operational Systems
            </strong>

            <span>
              BMS, HVAC, refrigeration, industrial equipment, lighting,
              occupancy, schedules and facility energy data.
            </span>

          </div>


          <div>

            <Sun />

            <strong>
              Solar PV
            </strong>

            <span>
              Generation, inverter performance, onsite utilisation and
              interaction with facility demand.
            </span>

          </div>


          <div>

            <BatteryCharging />

            <strong>
              Battery Storage
            </strong>

            <span>
              State of charge, charge and discharge behaviour, availability
              and optimisation opportunities.
            </span>

          </div>


          <div>

            <PlugZap />

            <strong>
              EV Charging
            </strong>

            <span>
              Charging demand, scheduling opportunities, tariff exposure and
              site load impact.
            </span>

          </div>


          <div>

            <Gauge />

            <strong>
              Smart Meters & IoT
            </strong>

            <span>
              Consumption, import, export, peak demand, tariffs,
              environmental sensors and operational telemetry.
            </span>

          </div>


          <div>

            <ShieldCheck />

            <strong>
              Utility & Grid Interfaces
            </strong>

            <span>
              Tariffs, demand-response signals and future grid information
              used within governed decision-support workflows.
            </span>

          </div>

        </div>

      </section>


      {/* =========================================================
          WHAT ENERG IQ TECH AVOIDS
      ========================================================= */}

      <section className="trustSection">

        <div className="trustSectionHeader">

          <p>
            What EnerG IQ Tech Avoids
          </p>


          <h2>
            Responsible AI Means Avoiding Unnecessary Operational & Data Risk.
          </h2>

        </div>


        <div className="trustAvoidGrid">

          <div>

            <Eye />

            <strong>
              No Unnecessary Data Collection
            </strong>

            <span>
              Engagements focus on information required to establish
              baselines, identify energy waste and evaluate agreed
              optimisation opportunities.
            </span>

          </div>


          <div>

            <ClipboardCheck />

            <strong>
              No Unapproved Operational Change
            </strong>

            <span>
              AI-assisted recommendations support investigation and
              decision-making; operational actions remain subject to the
              agreed approval and governance model.
            </span>

          </div>


          <div>

            <ShieldCheck />

            <strong>
              No Hidden Deployment Assumptions
            </strong>

            <span>
              Pilot objectives, data scope, system access, stakeholder roles,
              operational safeguards and success measures should be agreed
              before deployment.
            </span>

          </div>

        </div>

      </section>


      {/* =========================================================
          CTA
      ========================================================= */}

      <section className="trustCTA">

        <h2>
          Prove Energy & CO₂ Savings Without Giving Up Operational Control.
        </h2>


        <p>
          Start with a focused pilot to review the energy problem, available
          data, security requirements, operational safeguards and measurable
          financial and associated CO₂ outcomes before broader deployment.
        </p>


        <Link
          to="/pilot-program"
          className="trustPrimary"
        >
          Explore Pilot Program
          <ChevronRight size={18} />
        </Link>

      </section>

    </main>
  );
}