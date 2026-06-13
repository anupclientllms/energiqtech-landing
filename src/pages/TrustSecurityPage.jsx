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
} from "lucide-react";

export default function TrustSecurityPage() {
  return (
    <main className="trustPage">
      <section className="trustHero">
        <div className="trustHeroContent">
          <p className="trustEyebrow">Trust, Security & Data Governance</p>

          <h1>
            Responsible energy intelligence for pilot and scaled deployments.
          </h1>

          <p>
            EnergIQ Tech is designed to support secure, governed adoption across
            pilot programs and longer-term deployments, with clear data
            boundaries, controlled access expectations and deployment models that
            can align with client-controlled environments.
          </p>

          <div className="trustHeroActions">
            <Link to="/pilot-program" className="trustPrimary">
              Explore Pilot Program <ChevronRight size={18} />
            </Link>

            <Link to="/about" className="trustSecondary">
              About EnergIQ Tech
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
            EnergIQ Tech is designed for environments where facility managers,
            sustainability teams, IT stakeholders and decision-makers need
            confidence before introducing new optimisation technology.
          </span>
        </div>

        <div className="trustGrid">
          <div>
            <Database />
            <strong>Controlled data scope</strong>
            <span>
              Data requirements are discussed upfront so deployments focus only
              on information needed to assess operational energy opportunities.
            </span>
          </div>

          <div>
            <Lock />
            <strong>Access expectations</strong>
            <span>
              Access, review processes and stakeholder responsibilities can be
              agreed before pilot or scaled deployment.
            </span>
          </div>

          <div>
            <ShieldCheck />
            <strong>Governance-first approach</strong>
            <span>
              EnergIQ Tech supports reviewed, staged and accountable adoption
              rather than uncontrolled automation.
            </span>
          </div>

          <div>
            <UserCheck />
            <strong>Human oversight</strong>
            <span>
              AI-assisted recommendations are positioned to support decision
              making, not replace responsible operational review.
            </span>
          </div>
        </div>
      </section>

      <section className="trustDark">
        <div className="trustDarkContent">
          <div>
            <p>Deployment models</p>

            <h2>
              Flexible adoption from pilot validation to enterprise-scale rollout.
            </h2>

            <span>
              EnergIQ Tech can support staged deployment pathways, from limited
              pilots through to longer-term arrangements where operational data
              can remain within client-controlled environments or approved
              storage locations.
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
              <span>Client-controlled data environment options for enterprise use</span>
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
            Designed so clients can retain control over operational data.
          </h2>

          <span>
            For enterprise, council and university environments, deployment can
            be structured so operational datasets remain within client-approved
            infrastructure, while EnergIQ Tech provides the application,
            intelligence and optimisation layer.
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
            <h3>Client-Controlled Environment</h3>
            <p>
              Deployment can be aligned to client-approved cloud, data and access
              governance expectations.
            </p>
          </div>

          <div>
            <b>3</b>
            <h3>Governed Scale-Up</h3>
            <p>
              Broader rollout can be staged across buildings, campuses or
              portfolios after review of pilot outcomes.
            </p>
          </div>

          <div>
            <b>4</b>
            <h3>Enterprise Readiness</h3>
            <p>
              Long-term deployments can be reviewed against client security,
              governance and operational requirements.
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
              Facility and operational stakeholders remain central to how
              findings are reviewed and acted on.
            </span>
          </div>

          <div>
            <Server />
            <strong>Client-controlled data options</strong>
            <span>
              Deployment can be structured around client-approved infrastructure
              and storage expectations.
            </span>
          </div>

          <div>
            <ClipboardCheck />
            <strong>Review before action</strong>
            <span>
              Recommendations are reviewed before operational action or rollout
              decisions are made.
            </span>
          </div>
        </div>
      </section>

      <section className="trustSection">
        <div className="trustSectionHeader">
          <p>What EnergIQ avoids</p>

          <h2>
            Responsible adoption means avoiding unnecessary risk.
          </h2>
        </div>

        <div className="trustAvoidGrid">
          <div>
            <Eye />
            <strong>No unnecessary data collection</strong>
            <span>
              Engagements should focus only on information needed to assess the
              operational energy opportunity.
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
              Pilot expectations, stakeholder roles, data scope and success
              measures should be agreed upfront.
            </span>
          </div>
        </div>
      </section>

      <section className="trustCTA">
        <h2>
          Want to understand how EnergIQ Tech could be scoped safely?
        </h2>

        <p>
          Start with a discovery discussion to review facilities, data
          availability, deployment preferences, stakeholder requirements and
          governance expectations.
        </p>

        <Link to="/pilot-program" className="trustPrimary">
          Explore Pilot Program <ChevronRight size={18} />
        </Link>
      </section>
    </main>
  );
}