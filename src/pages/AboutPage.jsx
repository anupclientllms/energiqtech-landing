import "../styles/AboutPage.css";
import { Link } from "react-router-dom";
import {
  BatteryCharging,
  Building2,
  CheckCircle2,
  ChevronRight,
  Leaf,
  LineChart,
  MapPinned,
  PlugZap,
  ShieldCheck,
  Sun,
  Target,
  Users,
  Zap,
  Gauge,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="aboutPage">
      <section className="aboutHero">
        <div className="aboutHeroContent">
          <p className="aboutEyebrow">About Energ IQ Tech</p>

          <h1>
            Helping organisations move from energy monitoring to intelligent energy operations.
          </h1>

          <p>
            Energ IQ Tech is developing an AI Energy Platform for commercial buildings,
            campuses and connected energy assets, including Building Management Systems,
            Solar PV, Battery Storage, EV Charging, Smart Meters and IoT infrastructure.
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
            A practical energy technology company focused on connected asset optimisation.
          </h2>

          <span>
            Energ IQ Tech is being built to help facility, sustainability, energy and
            asset teams identify inefficiencies, understand optimisation opportunities
            and validate measurable outcomes before scaling.
          </span>
        </div>

        <div className="aboutCompanyGrid">
          <div>
            <Zap />
            <strong>Connected energy focus</strong>
            <span>
              Designed around real operational environments including buildings,
              meters, Solar PV, Battery Storage, EV Charging and IoT-connected assets.
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
              Supports cost, energy, carbon and asset impact assessment for
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
            Many organisations already collect energy and asset data, but still
            struggle to translate that information into confident operational action.
            Energ IQ Tech bridges that gap through the AI Energy Gateway, Digital Twin
            context, savings intelligence and governed AI-assisted workflows.
          </span>
        </div>
      </section>

      <section className="aboutSection">
        <div className="aboutSectionHeader">
          <p>Why Energ IQ Tech</p>

          <h2>
            Designed for organisations that need confidence before scale.
          </h2>
        </div>

        <div className="aboutWhyGrid">
          <div>
            <CheckCircle2 />
            <h3>Problem-first approach</h3>
            <p>
              Start with operational pain points, asset behaviour and measurable
              energy outcomes, not technology assumptions.
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
              Translate operational findings into cost, carbon and business-case evidence.
            </p>
          </div>

          <div>
            <CheckCircle2 />
            <h3>Designed for existing environments</h3>
            <p>
              Works around current buildings, systems, meters, assets, teams and
              operational constraints.
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
            Energ IQ Tech helps teams understand where energy is being wasted,
            why it is happening, which assets are affected, what actions may
            reduce the impact and whether the opportunity is strong enough to scale.
          </span>
        </div>

        <div className="aboutApproachGrid">
          <div>
            <MapPinned />
            <strong>Locate</strong>
            <span>
              Identify where abnormal usage, asset inefficiency or operational
              variance is occurring.
            </span>
          </div>

          <div>
            <LineChart />
            <strong>Analyse</strong>
            <span>
              Understand demand patterns, asset performance, baselines, variance
              and likely impact.
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
              Build evidence for savings, emissions impact, asset outcomes and pilot value.
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
            Energ IQ Tech is designed around a pilot-first commercialisation pathway.
            Rather than asking organisations to commit to large deployment upfront,
            the focus is on validating measurable value across a controlled site,
            building or connected energy asset workflow first.
          </span>
        </div>

        <div className="aboutPilotList">
          <div>
            <CheckCircle2 />
            <span>Focused discovery and connected asset review</span>
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
          <p>Industry Engagement & Commercialisation</p>

          <h2>
            Building momentum through validation, engagement and commercial readiness.
          </h2>

          <span>
            Energ IQ Tech has completed a Commercialisation & Growth assessment through the
            Australian Government Industry Growth Program. The assessment identified pilot
            validation, customer outcomes, deployment scalability and commercial growth as
            key priorities as Energ IQ Tech progresses toward market deployment.
          </span>
        </div>

        <div className="aboutIndustryGrid">
          <div>
            <CheckCircle2 />
            <h3>Commercialisation & Growth Report Completed</h3>
            <p>
              Completed a Commercialisation & Growth assessment in June 2026,
              focused on pilot validation, customer outcomes and scalable growth.
            </p>
          </div>

          <div>
            <CheckCircle2 />
            <h3>Local Government Engagement</h3>
            <p>
              Active pilot discussions with local government stakeholders to explore
              operational energy optimisation and connected asset opportunities.
            </p>
          </div>

          <div>
            <CheckCircle2 />
            <h3>University Outreach</h3>
            <p>
              Sustainability and facilities engagement underway with universities
              seeking practical energy, emissions and operational improvement initiatives.
            </p>
          </div>

          <div>
            <CheckCircle2 />
            <h3>Pilot & Scale Strategy</h3>
            <p>
              Focused on measurable energy savings, connected asset intelligence,
              pilot validation, deployment scalability and long-term commercial growth.
            </p>
          </div>
        </div>
      </section>

      <section className="aboutSection">
        <div className="aboutSectionHeader">
          <p>Market focus</p>

          <h2>
            Built for organisations managing buildings, campuses and connected energy assets.
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
            <strong>Universities & Campuses</strong>
            <span>
              Campuses, facilities teams, sustainability teams and operational
              environments with complex energy usage.
            </span>
          </div>

          <div>
            <Building2 />
            <strong>Commercial Facilities</strong>
            <span>
              Buildings and managed assets where energy performance, comfort,
              carbon visibility and cost control matter.
            </span>
          </div>

          <div>
            <Sun />
            <strong>Solar PV Sites</strong>
            <span>
              Sites with rooftop or distributed solar seeking generation,
              utilisation and performance visibility.
            </span>
          </div>

          <div>
            <BatteryCharging />
            <strong>Battery Storage</strong>
            <span>
              Battery Energy Storage Systems requiring charge, discharge,
              health and peak-shaving optimisation insights.
            </span>
          </div>

          <div>
            <PlugZap />
            <strong>EV Charging</strong>
            <span>
              Charging infrastructure where load impact, scheduling and demand
              management are important.
            </span>
          </div>

          <div>
            <Gauge />
            <strong>Smart Meters & IoT</strong>
            <span>
              Metered environments with import, export, demand, tariff and
              operational sensor data.
            </span>
          </div>

          <div>
            <LineChart />
            <strong>Portfolio Operators</strong>
            <span>
              Multi-site organisations seeking scalable visibility, savings
              evidence and operational intelligence.
            </span>
          </div>
        </div>
      </section>

      <section className="aboutCTA">
        <h2>
          Interested in exploring whether Energ IQ Tech is suitable for your organisation?
        </h2>

        <p>
          Start with a pilot discussion to review your facilities, connected energy
          assets, operational challenges and potential optimisation opportunities.
        </p>

        <Link to="/pilot-program" className="aboutPrimary">
          Explore Pilot Program <ChevronRight size={18} />
        </Link>
      </section>
    </main>
  );
}