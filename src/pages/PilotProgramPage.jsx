import "../styles/PilotProgramPage.css";
import { Link } from "react-router-dom";
import {
  BatteryCharging,
  Building2,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Gauge,
  Handshake,
  LineChart,
  PlugZap,
  Search,
  ShieldCheck,
  Sun,
  Target,
  Zap,
} from "lucide-react";

export default function PilotProgramPage() {
  return (
    <main className="pilotPage">
      <section className="pilotHero">
        <div className="pilotHeroContent">
          <p className="pilotEyebrow">Pilot Program</p>

          <h1>
            A low-risk pilot pathway to validate connected energy optimisation.
          </h1>

          <p>
            EnerG IQ Tech helps councils, universities and commercial organisations
            start with a focused pilot, connect building and energy assets,
            identify optimisation opportunities, measure impact and build
            confidence before broader rollout.
          </p>

          <div className="pilotHeroActions">
            <a href="#pilot-pathway" className="pilotPrimary">
              View Pilot Pathway <ChevronRight size={18} />
            </a>

            <Link to="/savings-intelligence" className="pilotSecondary">
              Savings Intelligence
            </Link>
          </div>
        </div>
      </section>

      <section className="pilotSection">
        <div className="pilotSectionHeader">
          <p>Why pilot first</p>

          <h2>
            Prove value in a controlled environment before committing to scale.
          </h2>

          <span>
            The pilot model reduces commercial and operational risk by validating
            the opportunity across a focused building, site, asset type or
            connected energy workflow using measurable outcomes.
          </span>
        </div>

        <div className="pilotValueGrid">
          <div className="pilotValueCard">
            <Target />
            <h3>Focused scope</h3>
            <p>
              Start with one building, site, connected asset or operational use
              case before expanding across a wider portfolio.
            </p>
          </div>

          <div className="pilotValueCard">
            <Gauge />
            <h3>Measurable baseline</h3>
            <p>
              Compare energy behaviour, asset performance and operational
              patterns against a baseline to identify optimisation opportunities.
            </p>
          </div>

          <div className="pilotValueCard">
            <LineChart />
            <h3>Savings evidence</h3>
            <p>
              Build a practical savings, carbon and ROI view to support internal
              decision-making and future investment.
            </p>
          </div>

          <div className="pilotValueCard">
            <ShieldCheck />
            <h3>Governed adoption</h3>
            <p>
              Keep operational teams in control through review, approval,
              human-in-the-loop workflows and staged rollout.
            </p>
          </div>
        </div>
      </section>

      <section className="pilotPathwaySection" id="pilot-pathway">
        <div className="pilotPathwayHeader">
          <p>Pilot pathway</p>

          <h2>
            From discovery to scale in a structured, low-risk process.
          </h2>
        </div>

        <div className="pilotTimeline">
          {[
            {
              icon: Search,
              title: "Discovery",
              text: "Review facilities, BMS, meters, Solar PV, Battery Storage, EV Charging, IoT devices, available data and operational pain points.",
            },
            {
              icon: ClipboardCheck,
              title: "Pilot Scope",
              text: "Select a focused building, site, connected asset group or optimisation scenario for validation.",
            },
            {
              icon: Zap,
              title: "Optimisation Review",
              text: "Identify priority inefficiencies such as demand spikes, after-hours load, HVAC issues, solar underperformance, battery usage or EV charging impact.",
            },
            {
              icon: LineChart,
              title: "Measure Impact",
              text: "Estimate operational, cost, carbon and asset performance impact using pilot evidence.",
            },
            {
              icon: Handshake,
              title: "Commercial Decision",
              text: "Use the pilot outcome to decide whether to scale, refine, expand or integrate additional connected energy assets.",
            },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <div className="pilotTimelineItem" key={item.title}>
                <div className="pilotTimelineNumber">{index + 1}</div>

                <div className="pilotTimelineIcon">
                  <Icon />
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="pilotDarkSection">
        <div className="pilotDarkContent">
          <div>
            <p>What the pilot validates</p>

            <h2>
              Clear evidence for operational, financial, carbon and asset value.
            </h2>

            <span>
              The pilot is not intended to replace existing systems. It is
              designed to show where the AI Energy Gateway, Digital Twin and AI
              Decision Agents can create measurable value across buildings and
              connected energy infrastructure.
            </span>
          </div>

          <div className="pilotValidationList">
            <div>
              <CheckCircle2 />
              <span>Operational visibility gaps</span>
            </div>

            <div>
              <CheckCircle2 />
              <span>Energy waste and abnormal usage patterns</span>
            </div>

            <div>
              <CheckCircle2 />
              <span>Peak demand, HVAC and building optimisation opportunities</span>
            </div>

            <div>
              <CheckCircle2 />
              <span>Solar PV, Battery Storage, EV Charging and Smart Meter readiness</span>
            </div>

            <div>
              <CheckCircle2 />
              <span>Estimated savings, ROI and emissions impact</span>
            </div>

            <div>
              <CheckCircle2 />
              <span>Readiness for broader rollout across connected assets</span>
            </div>
          </div>
        </div>
      </section>

      <section className="pilotSection">
        <div className="pilotSectionHeader">
          <p>Suitable pilot environments</p>

          <h2>
            Designed for organisations managing buildings, campuses and connected energy assets.
          </h2>
        </div>

        <div className="pilotAudienceGrid">
          <div>
            <Building2 />
            <strong>Local Government</strong>
            <span>
              Civic centres, libraries, depots, community facilities and
              multi-building council portfolios.
            </span>
          </div>

          <div>
            <Building2 />
            <strong>Universities & Campuses</strong>
            <span>
              Learning spaces, administration buildings, research facilities and
              campuses seeking operational energy intelligence.
            </span>
          </div>

          <div>
            <Building2 />
            <strong>Commercial Buildings</strong>
            <span>
              Offices, mixed-use assets and managed buildings where efficiency,
              cost control and carbon visibility matter.
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
            <strong>EV Charging Infrastructure</strong>
            <span>
              EV charging sites where load impact, scheduling and demand
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
            <strong>Property & Energy Portfolios</strong>
            <span>
              Multi-site owners or operators seeking scalable visibility,
              optimisation and savings evidence.
            </span>
          </div>
        </div>
      </section>

      <section className="pilotDeliverables">
        <div>
          <p>Pilot deliverables</p>

          <h2>
            What stakeholders should expect at the end of the pilot.
          </h2>

          <span>
            The pilot is designed to create useful decision evidence, not just
            another dashboard demonstration.
          </span>
        </div>

        <ul>
          <li>
            <CheckCircle2 /> Connected energy asset opportunity summary
          </li>

          <li>
            <CheckCircle2 /> Priority optimisation scenarios
          </li>

          <li>
            <CheckCircle2 /> Estimated cost, carbon and asset impact
          </li>

          <li>
            <CheckCircle2 /> AI Energy Gateway integration assessment
          </li>

          <li>
            <CheckCircle2 /> Pilot outcome and scale recommendation
          </li>
        </ul>
      </section>

      <section className="pilotCTA">
        <h2>
          Ready to assess whether EnerG IQ Tech is suitable for your site?
        </h2>

        <p>
          Start with a discovery discussion to understand your buildings,
          connected energy assets, operational challenges and potential pilot scope.
        </p>

        <Link to="/" className="pilotPrimary">
          Back to Home <ChevronRight size={18} />
        </Link>
      </section>
    </main>
  );
}