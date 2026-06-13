import "../styles/PilotProgramPage.css";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Gauge,
  Handshake,
  LineChart,
  Search,
  ShieldCheck,
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
            A low-risk pilot pathway to validate operational energy savings.
          </h1>

          <p>
            EnergIQ Tech helps councils, universities and facility teams start
            with a focused pilot, identify optimisation opportunities, measure
            operational impact and build confidence before broader rollout.
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
            The pilot model is designed to reduce commercial and operational
            risk by validating the opportunity using a focused site, clear
            scope and measurable outcomes.
          </span>
        </div>

        <div className="pilotValueGrid">
          <div className="pilotValueCard">
            <Target />
            <h3>Focused scope</h3>
            <p>
              Start with one building, site or operational use case before
              expanding across a wider portfolio.
            </p>
          </div>

          <div className="pilotValueCard">
            <Gauge />
            <h3>Measurable baseline</h3>
            <p>
              Compare operational energy behaviour against a baseline to
              identify variance and optimisation opportunity.
            </p>
          </div>

          <div className="pilotValueCard">
            <LineChart />
            <h3>Savings evidence</h3>
            <p>
              Build a practical savings and ROI view to support internal
              decision-making.
            </p>
          </div>

          <div className="pilotValueCard">
            <ShieldCheck />
            <h3>Governed adoption</h3>
            <p>
              Keep facility teams in control through review, approval and
              staged rollout.
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
              text: "Review facilities, systems, energy data availability and operational pain points.",
            },
            {
              icon: ClipboardCheck,
              title: "Pilot Scope",
              text: "Select a focused building, scenario or portfolio segment for validation.",
            },
            {
              icon: Zap,
              title: "Optimisation Review",
              text: "Identify priority inefficiencies such as demand spikes, after-hours load or HVAC issues.",
            },
            {
              icon: LineChart,
              title: "Measure Impact",
              text: "Estimate operational, cost and emissions impact using pilot evidence.",
            },
            {
              icon: Handshake,
              title: "Commercial Decision",
              text: "Use the pilot outcome to decide whether to scale, refine or expand.",
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
              Clear evidence for operational, financial and sustainability value.
            </h2>

            <span>
              The pilot is not intended to replace existing systems. It is
              designed to identify where intelligence, visibility and
              optimisation can create measurable value using a controlled
              deployment model.
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
              <span>Peak demand and HVAC optimisation opportunities</span>
            </div>

            <div>
              <CheckCircle2 />
              <span>Estimated savings, ROI and emissions impact</span>
            </div>

            <div>
              <CheckCircle2 />
              <span>Readiness for broader rollout</span>
            </div>
          </div>
        </div>
      </section>

      <section className="pilotSection">
        <div className="pilotSectionHeader">
          <p>Suitable pilot environments</p>

          <h2>
            Designed for organisations managing buildings, campuses and portfolios.
          </h2>
        </div>

        <div className="pilotAudienceGrid">
          <div>
            <strong>Local Government</strong>
            <span>
              Civic centres, libraries, depots, community facilities and
              multi-building council portfolios.
            </span>
          </div>

          <div>
            <strong>Universities</strong>
            <span>
              Campuses, learning spaces, administration buildings and facilities
              teams seeking operational energy insight.
            </span>
          </div>

          <div>
            <strong>Commercial Buildings</strong>
            <span>
              Offices, mixed-use assets and managed buildings where operational
              efficiency and cost control matter.
            </span>
          </div>

          <div>
            <strong>Property Portfolios</strong>
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
            <CheckCircle2 /> Operational energy opportunity summary
          </li>

          <li>
            <CheckCircle2 /> Priority optimisation scenarios
          </li>

          <li>
            <CheckCircle2 /> Estimated cost and emissions impact
          </li>

          <li>
            <CheckCircle2 /> Pilot outcome and scale recommendation
          </li>
        </ul>
      </section>

      <section className="pilotCTA">
        <h2>
          Ready to assess whether EnergIQ Tech is suitable for your site?
        </h2>

        <p>
          Start with a discovery discussion to understand your facilities,
          operational challenges and potential pilot scope.
        </p>

        <Link to="/" className="pilotPrimary">
          Back to Home <ChevronRight size={18} />
        </Link>
      </section>
    </main>
  );
}