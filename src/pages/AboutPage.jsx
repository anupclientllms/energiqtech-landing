import "../styles/AboutPage.css";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  ChevronRight,
  Building2,
  Leaf,
  LineChart,
  MapPinned,
  ShieldCheck,
  Target,
  Users,
  Zap,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="aboutPage">
      <section className="aboutHero">
        <div className="aboutHeroContent">
          <p className="aboutEyebrow">About EnergIQ Tech</p>

          <h1>
            Helping organisations move from energy monitoring to intelligent optimisation.
          </h1>

          <p>
            EnergIQ Tech is developing AI-powered operational energy optimisation
            capabilities for councils, universities, facilities and building
            portfolios seeking measurable savings, emissions visibility and
            safer operational decision-making.
          </p>

          <div className="aboutHeroActions">
            <Link to="/pilot-program" className="aboutPrimary">
              Explore Pilot Program <ChevronRight size={18} />
            </Link>

            <Link to="/operational-energy-optimisation" className="aboutSecondary">
              View Solutions
            </Link>
          </div>
        </div>
      </section>

      <section className="aboutSection">
        <div className="aboutSectionHeader">
          <p>Who we are</p>

          <h2>
            A practical energy technology company focused on operational outcomes.
          </h2>

          <span>
            EnergIQ Tech is being built to help facility, sustainability and
            asset teams identify operational inefficiencies, understand savings
            opportunities and validate energy optimisation pathways before scaling.
          </span>
        </div>

        <div className="aboutCompanyGrid">
          <div>
            <Zap />
            <strong>Operational energy focus</strong>
            <span>
              Designed around real building operations, demand patterns, HVAC
              behaviour and energy waste scenarios.
            </span>
          </div>

          <div>
            <Target />
            <strong>Outcome-led approach</strong>
            <span>
              Focused on measurable opportunities, pilot evidence and practical
              decision support.
            </span>
          </div>

          <div>
            <Leaf />
            <strong>Savings and emissions visibility</strong>
            <span>
              Supports cost, energy and emissions impact assessment for
              operational decision-making.
            </span>
          </div>

          <div>
            <ShieldCheck />
            <strong>Governed AI adoption</strong>
            <span>
              Keeps people involved in review, approval and rollout decisions.
            </span>
          </div>
        </div>
      </section>

      <section className="aboutMission">
        <div className="aboutMissionContent">
          <p>Mission</p>

          <h2>
            Make energy optimisation measurable, explainable and operationally useful.
          </h2>

          <span>
            Many organisations already collect energy data, but still struggle to
            translate that information into confident operational action. EnergIQ
            Tech is being developed to bridge that gap through operational
            visibility, digital twin context, savings evidence and governed
            AI-assisted workflows.
          </span>
        </div>
      </section>

      <section className="aboutSection">
        <div className="aboutSectionHeader">
          <p>Why EnergIQ Tech</p>

          <h2>
            Designed for organisations that need confidence before scale.
          </h2>
        </div>

        <div className="aboutWhyGrid">
          <div>
            <CheckCircle2 />
            <h3>Problem-first approach</h3>
            <p>
              Start with operational pain points, not technology assumptions.
            </p>
          </div>

          <div>
            <CheckCircle2 />
            <h3>Low-risk validation</h3>
            <p>
              Validate outcomes through a focused pilot before broader rollout.
            </p>
          </div>

          <div>
            <CheckCircle2 />
            <h3>Clear savings narrative</h3>
            <p>
              Translate operational findings into business-case evidence.
            </p>
          </div>

          <div>
            <CheckCircle2 />
            <h3>Designed for existing environments</h3>
            <p>
              Works around current buildings, systems, teams and operational constraints.
            </p>
          </div>

          <div>
            <CheckCircle2 />
            <h3>Human-in-the-loop governance</h3>
            <p>
              Supports safer adoption through review, approval and staged rollout.
            </p>
          </div>

          <div>
            <CheckCircle2 />
            <h3>Commercialisation-ready pathway</h3>
            <p>
              Supports pilot evidence, stakeholder confidence and future scale.
            </p>
          </div>
        </div>
      </section>

      <section className="aboutApproach">
        <div className="aboutApproachText">
          <p>Our Approach</p>

          <h2>
            Connect operational insight to practical optimisation decisions.
          </h2>

          <span>
            EnergIQ Tech is focused on helping teams understand where energy is
            being wasted, why it is happening, what actions may reduce the
            impact and whether the opportunity is strong enough to justify scale.
          </span>
        </div>

        <div className="aboutApproachGrid">
          <div>
            <MapPinned />
            <strong>Locate</strong>
            <span>
              Identify where abnormal usage or operational inefficiency is occurring.
            </span>
          </div>

          <div>
            <LineChart />
            <strong>Analyse</strong>
            <span>
              Understand demand patterns, baselines, variance and likely impact.
            </span>
          </div>

          <div>
            <Target />
            <strong>Prioritise</strong>
            <span>
              Focus teams on the highest-value optimisation opportunities.
            </span>
          </div>

          <div>
            <CheckCircle2 />
            <strong>Validate</strong>
            <span>
              Build evidence for savings, emissions impact and pilot outcomes.
            </span>
          </div>
        </div>
      </section>

      <section className="aboutPilotPhilosophy">
        <div className="aboutPilotContent">
          <p>Pilot-first philosophy</p>

          <h2>
            Start small, prove value, then scale with confidence.
          </h2>

          <span>
            EnergIQ Tech is designed around a pilot-first commercialisation
            pathway. Rather than asking organisations to commit to a large
            deployment upfront, the focus is on validating measurable value in a
            controlled environment first.
          </span>
        </div>

        <div className="aboutPilotList">
          <div>
            <CheckCircle2 />
            <span>Focused discovery and site review</span>
          </div>

          <div>
            <CheckCircle2 />
            <span>Defined pilot scope and success measures</span>
          </div>

          <div>
            <CheckCircle2 />
            <span>Operational optimisation opportunity summary</span>
          </div>

          <div>
            <CheckCircle2 />
            <span>Evidence-led decision on whether to scale</span>
          </div>
        </div>
      </section>

      <section className="aboutSection">
        <div className="aboutSectionHeader">
          <p>Market focus</p>

          <h2>
            Built for organisations managing energy across buildings and portfolios.
          </h2>
        </div>

        <div className="aboutMarketGrid">
          <div>
            <Building2 />
            <strong>Local Government</strong>
            <span>
              Civic centres, libraries, depots, community facilities and
              multi-building council portfolios.
            </span>
          </div>

          <div>
            <Users />
            <strong>Universities</strong>
            <span>
              Campuses, facilities teams, sustainability teams and operational
              environments with complex building usage.
            </span>
          </div>

          <div>
            <Building2 />
            <strong>Commercial facilities</strong>
            <span>
              Buildings and managed assets where energy performance, comfort and
              cost control matter.
            </span>
          </div>

          <div>
            <LineChart />
            <strong>Portfolio operators</strong>
            <span>
              Multi-site organisations seeking scalable visibility, savings
              evidence and operational intelligence.
            </span>
          </div>
        </div>
      </section>

      <section className="aboutCTA">
        <h2>
          Interested in exploring whether EnergIQ Tech is suitable for your organisation?
        </h2>

        <p>
          Start with a pilot discussion to review your facilities, operational
          challenges and potential optimisation opportunities.
        </p>

        <Link to="/pilot-program" className="aboutPrimary">
          Explore Pilot Program <ChevronRight size={18} />
        </Link>
      </section>
    </main>
  );
}