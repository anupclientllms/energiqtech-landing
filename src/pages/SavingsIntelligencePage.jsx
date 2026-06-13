import "../styles/SavingsIntelligencePage.css";
import { Link } from "react-router-dom";
import {
  BarChart3,
  CheckCircle2,
  ChevronRight,
  Gauge,
  Leaf,
  LineChart,
  TrendingDown,
  Wallet,
  Zap,
} from "lucide-react";

export default function SavingsIntelligencePage() {
  return (
    <main className="savingsPage">
      <section className="savingsHero">
        <div className="savingsHeroContent">
          <p className="savingsEyebrow">Savings Intelligence</p>

          <h1>
            Turn operational energy insights into measurable savings evidence.
          </h1>

          <p>
            EnergIQ Tech helps organisations identify savings opportunities,
            estimate operational impact, track optimisation outcomes and build
            evidence for pilots, business cases and portfolio-wide rollout.
          </p>

          <div className="savingsHeroActions">
            <Link to="/pilot-program" className="savingsPrimary">
              Explore Pilot Program <ChevronRight size={18} />
            </Link>

            <Link to="/operational-energy-optimisation" className="savingsSecondary">
              Operational Optimisation
            </Link>
          </div>
        </div>
      </section>

      <section className="savingsSection">
        <div className="savingsSectionHeader">
          <p>Why savings intelligence</p>
          <h2>
            Energy optimisation only matters when the value can be measured, explained and trusted.
          </h2>
        </div>

        <div className="savingsGrid">
          <div className="savingsCard">
            <Wallet />
            <h3>Cost impact visibility</h3>
            <p>
              Estimate the financial impact of abnormal usage, inefficient schedules
              and avoidable peak demand events.
            </p>
          </div>

          <div className="savingsCard">
            <TrendingDown />
            <h3>Savings opportunity tracking</h3>
            <p>
              Track potential optimisation opportunities across buildings, sites
              and operational scenarios.
            </p>
          </div>

          <div className="savingsCard">
            <Leaf />
            <h3>Carbon impact evidence</h3>
            <p>
              Translate operational improvements into estimated emissions reduction
              and sustainability reporting evidence.
            </p>
          </div>

          <div className="savingsCard">
            <BarChart3 />
            <h3>Portfolio reporting</h3>
            <p>
              Support executive-level reporting across buildings, campuses and
              multi-site portfolios.
            </p>
          </div>
        </div>
      </section>

      <section className="savingsDashboardSection">
        <div className="savingsDashboardCard">
          <div className="savingsDashTop">
            <span>Portfolio Savings Intelligence</span>
            <b>Pilot View</b>
          </div>

          <div className="savingsKpis">
            <div>
              <small>Estimated Monthly Savings</small>
              <strong>$8,400</strong>
              <span>Across priority actions</span>
            </div>

            <div>
              <small>Peak Demand Opportunity</small>
              <strong>14%</strong>
              <span>Reduction potential</span>
            </div>

            <div>
              <small>Energy Variance</small>
              <strong>22%</strong>
              <span>Above baseline</span>
            </div>

            <div>
              <small>Carbon Impact</small>
              <strong>3.2t</strong>
              <span>CO₂e opportunity</span>
            </div>
          </div>

          <div className="savingsInsight">
            <LineChart />
            <div>
              <strong>AI Savings Insight</strong>
              <p>
                Peak demand and after-hours HVAC load are the highest-value
                optimisation opportunities for this pilot scenario.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="savingsDarkSection">
        <div className="savingsWorkflowHeader">
          <p>Savings validation workflow</p>
          <h2>
            From detected inefficiency to business-case evidence.
          </h2>
        </div>

        <div className="savingsSteps">
          {[
            "Detect operational energy variance",
            "Estimate cost and emissions impact",
            "Prioritise optimisation opportunities",
            "Simulate operational improvement",
            "Track approved actions",
            "Report savings and ROI evidence",
          ].map((item, index) => (
            <div className="savingsStep" key={item}>
              <b>{index + 1}</b>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="savingsSection">
        <div className="savingsSectionHeader">
          <p>Use cases</p>
          <h2>
            Built for pilots, business cases and portfolio-scale decision making.
          </h2>
        </div>

        <div className="savingsUseCaseGrid">
          <div>
            <Gauge />
            <strong>Pilot ROI validation</strong>
            <span>
              Help stakeholders understand whether an optimisation pilot is worth scaling.
            </span>
          </div>

          <div>
            <Zap />
            <strong>Peak-demand business case</strong>
            <span>
              Quantify the impact of avoidable peak demand and prioritise action.
            </span>
          </div>

          <div>
            <Leaf />
            <strong>Sustainability evidence</strong>
            <span>
              Support carbon reporting with operational improvement data.
            </span>
          </div>

          <div>
            <BarChart3 />
            <strong>Executive reporting</strong>
            <span>
              Present energy, cost and emissions improvement opportunities clearly.
            </span>
          </div>
        </div>
      </section>

      <section className="savingsProof">
        <div>
          <p>Commercial credibility</p>
          <h2>
            Designed to help stakeholders justify the next step.
          </h2>
          <span>
            Savings Intelligence helps turn technical optimisation into a clear
            commercial story for councils, universities, property portfolios,
            grant programs and investors.
          </span>
        </div>

        <ul>
          <li><CheckCircle2 /> Pilot savings opportunity report</li>
          <li><CheckCircle2 /> Estimated ROI and payback view</li>
          <li><CheckCircle2 /> Energy and emissions impact summary</li>
          <li><CheckCircle2 /> Portfolio-scale business case support</li>
        </ul>
      </section>
    </main>
  );
}