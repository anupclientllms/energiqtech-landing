import "../styles/TrustSecurityPage.css";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Eye,
  Lock,
  ShieldCheck,
  UserCheck,
  Database,
  Building2,
  Server,
  BatteryCharging,
  Sun,
  PlugZap,
  Gauge,
} from "lucide-react";

export default function TrustSecurityPage() {
  return (
    <main className="trustPage">
      <section className="trustHero">
        <div className="trustHeroContent">
          <p className="trustEyebrow">Trust, Security & Data Governance</p>

          <h1>
            Responsible AI energy intelligence for connected asset deployments.
          </h1>

          <p>
            Energ IQ Tech is designed to support secure, governed adoption across
            commercial buildings, campuses and connected energy assets including
            BMS, Solar PV, Battery Storage, EV Charging, Smart Meters and IoT
            infrastructure, with clear data boundaries, controlled access and
            client-aligned deployment models.
          </p>

          <div className="trustHeroActions">
            <Link to="/pilot-program" className="trustPrimary">
              Explore Pilot Program <ChevronRight size={18} />
            </Link>

            <Link to="/about" className="trustSecondary">
              About Energ IQ Tech
            </Link>
          </div>
        </div>
      </section>

      <section className="trustSection">
        <div className="trustSectionHeader">
          <p>Client confidence</p>

          <h2>
            Built around trust, governance and responsible operational data handling.
          </h2>

          <span>
            Energ IQ Tech is designed for environments where facility managers,
            sustainability teams, energy teams, IT stakeholders and asset owners
            need confidence before introducing AI-enabled optimisation across
            buildings and connected energy infrastructure.
          </span>
        </div>

        <div className="trustGrid">
          <div>
            <Database />
            <strong>Controlled data scope</strong>
            <span>
              Data requirements are agreed upfront so deployments focus only on
              information required to assess operational, energy and asset
              optimisation opportunities.
            </span>
          </div>

          <div>
            <Lock />
            <strong>Access expectations</strong>
            <span>
              Access, review processes and stakeholder responsibilities can be
              defined before connecting BMS, meters, Solar PV, Battery Storage,
              EV Charging or IoT data.
            </span>
          </div>

          <div>
            <ShieldCheck />
            <strong>Governance-first approach</strong>
            <span>
              Energ IQ Tech supports reviewed, staged and accountable adoption
              rather than uncontrolled automation across connected assets.
            </span>
          </div>

          <div>
            <UserCheck />
            <strong>Human oversight</strong>
            <span>
              AI-assisted recommendations support decision-making and operational
              review before actions are approved or implemented.
            </span>
          </div>
        </div>
      </section>

      <section className="trustDark">
        <div className="trustDarkContent">
          <div>
            <p>Deployment models</p>

            <h2>
              Flexible adoption from pilot validation to connected asset rollout.
            </h2>

            <span>
              Energ IQ Tech can support staged deployment pathways, from focused
              pilots through to longer-term arrangements where operational,
              meter and connected asset data can remain within client-controlled
              environments or approved storage locations.
            </span>
          </div>

          <div className="trustPrinciples">
            <div>
              <CheckCircle2 />
              <span>Pilot deployments with defined data and success boundaries</span>
            </div>

            <div>
              <CheckCircle2 />
              <span>Scaled deployments aligned with client governance requirements</span>
            </div>

            <div>
              <CheckCircle2 />
              <span>Client-controlled data options for enterprise and DER use</span>
            </div>

            <div>
              <CheckCircle2 />
              <span>Stakeholder review before broader rollout or operational adoption</span>
            </div>
          </div>
        </div>
      </section>

      <section className="trustSection">
        <div className="trustSectionHeader">
          <p>Data environment options</p>

          <h2>
            Designed so clients can retain control over operational and energy asset data.
          </h2>

          <span>
            For councils, universities, commercial buildings and connected energy
            infrastructure, deployment can be structured so operational datasets
            remain within client-approved infrastructure while Energ IQ Tech
            provides the application, intelligence and optimisation layer.
          </span>
        </div>

        <div className="trustProcessGrid">
          <div>
            <b>1</b>
            <h3>Pilot Deployment</h3>
            <p>
              A focused, limited-scope deployment to validate operational
              visibility, savings opportunities and stakeholder value.
            </p>
          </div>

          <div>
            <b>2</b>
            <h3>Connected Asset Data</h3>
            <p>
              BMS, Smart Meter, Solar PV, Battery Storage, EV Charging and IoT
              data can be scoped based on client-approved access boundaries.
            </p>
          </div>

          <div>
            <b>3</b>
            <h3>Client-Controlled Environment</h3>
            <p>
              Deployment can be aligned to client-approved cloud, data and access
              governance expectations.
            </p>
          </div>

          <div>
            <b>4</b>
            <h3>Governed Scale-Up</h3>
            <p>
              Broader rollout can be staged across buildings, campuses, portfolios
              and connected energy assets after pilot review.
            </p>
          </div>
        </div>
      </section>

      <section className="trustSection trustLight">
        <div className="trustSectionHeader">
          <p>Governance and access</p>

          <h2>
            Responsible adoption means clear roles, boundaries and approvals.
          </h2>
        </div>

        <div className="trustAvoidGrid">
          <div>
            <Building2 />
            <strong>Client-owned operational context</strong>
            <span>
              Facility, energy and operational stakeholders remain central to how
              findings are reviewed, prioritised and acted on.
            </span>
          </div>

          <div>
            <Server />
            <strong>Client-controlled data options</strong>
            <span>
              Deployment can be structured around client-approved infrastructure,
              storage and access expectations.
            </span>
          </div>

          <div>
            <ClipboardCheck />
            <strong>Review before action</strong>
            <span>
              Recommendations are reviewed before operational action, connected
              asset changes or rollout decisions are made.
            </span>
          </div>
        </div>
      </section>

      <section className="trustSection">
        <div className="trustSectionHeader">
          <p>Connected asset coverage</p>

          <h2>
            One governance model for buildings and distributed energy assets.
          </h2>

          <span>
            The same governance-first approach can support operational data from
            commercial buildings, renewable energy assets, storage systems,
            charging infrastructure and smart meters.
          </span>
        </div>

        <div className="trustAvoidGrid">
          <div>
            <Building2 />
            <strong>Building systems</strong>
            <span>
              BMS, HVAC, lighting, occupancy, operational schedules and facility
              energy data.
            </span>
          </div>

          <div>
            <Sun />
            <strong>Solar PV</strong>
            <span>
              Generation, inverter performance, utilisation and renewable energy
              visibility.
            </span>
          </div>

          <div>
            <BatteryCharging />
            <strong>Battery Storage</strong>
            <span>
              State of charge, charge/discharge behaviour, availability and
              operational optimisation opportunities.
            </span>
          </div>

          <div>
            <PlugZap />
            <strong>EV Charging</strong>
            <span>
              Charging demand, load impact, scheduling opportunities and site
              energy behaviour.
            </span>
          </div>

          <div>
            <Gauge />
            <strong>Smart Meters & IoT</strong>
            <span>
              Import, export, demand, tariffs, environmental sensors and
              operational telemetry.
            </span>
          </div>

          <div>
            <ShieldCheck />
            <strong>Utility & grid interfaces</strong>
            <span>
              Grid signals, demand response readiness and governed operational
              decision support.
            </span>
          </div>
        </div>
      </section>

      <section className="trustSection">
        <div className="trustSectionHeader">
          <p>What Energ IQ Tech avoids</p>

          <h2>
            Responsible adoption means avoiding unnecessary risk.
          </h2>
        </div>

        <div className="trustAvoidGrid">
          <div>
            <Eye />
            <strong>No unnecessary data collection</strong>
            <span>
              Engagements focus only on information needed to assess operational,
              energy and connected asset optimisation opportunities.
            </span>
          </div>

          <div>
            <ClipboardCheck />
            <strong>No unapproved operational change</strong>
            <span>
              AI-assisted recommendations support review and decision-making;
              they are not positioned as uncontrolled autonomous action.
            </span>
          </div>

          <div>
            <ShieldCheck />
            <strong>No hidden deployment assumptions</strong>
            <span>
              Pilot expectations, stakeholder roles, data scope, asset access and
              success measures should be agreed upfront.
            </span>
          </div>
        </div>
      </section>

      <section className="trustCTA">
        <h2>
          Want to understand how Energ IQ Tech could be scoped safely?
        </h2>

        <p>
          Start with a discovery discussion to review facilities, connected energy
          assets, data availability, deployment preferences, stakeholder
          requirements and governance expectations.
        </p>

        <Link to="/pilot-program" className="trustPrimary">
          Explore Pilot Program <ChevronRight size={18} />
        </Link>
      </section>
    </main>
  );
}