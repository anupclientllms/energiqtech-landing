
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  ChevronRight,
  Handshake,
  Factory,
  Network,
  Settings2,
  Target,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Users,
  BarChart3,
  Lightbulb,
  Zap,
  Leaf,
  BriefcaseBusiness,
} from "lucide-react";

import "../styles/PartnersPage.css";
import SEO from "./SEO";
/* =========================================================
   MOTION
========================================================= */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const reveal = {
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, amount: 0.12 },
};

/* =========================================================
   THREE STRATEGIC OBJECTIVES
========================================================= */

const objectives = [
  {
    number: "01",
    icon: Target,
    title: "Business Development",
    description:
      "Acquire industrial customers and identify practical validation opportunities where EnerG IQ Tech can address measurable energy and operational challenges.",
    points: [
      "Qualified industrial introductions",
      "Pilot and validation opportunities",
      "Long-term customer relationships",
    ],
  },
  {
    number: "02",
    icon: Network,
    title: "Partner Ecosystem",
    description:
      "Build relationships with industry associations, engineering consultants, technology integrators and manufacturers to support industrial deployment.",
    points: [
      "Industry and manufacturing networks",
      "Engineering and integration expertise",
      "Collaborative market engagement",
    ],
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Commercialisation & Scale",
    description:
      "Establish repeatable pathways for taking EnerG IQ Tech from industrial validation into wider commercial deployment across energy-intensive sectors.",
    points: [
      "Repeatable commercial pathways",
      "Documented industrial outcomes",
      "Expansion across sites and industries",
    ],
  },
];

/* =========================================================
   PARTNER CATEGORIES
========================================================= */

const partnerTypes = [
  {
    icon: Handshake,
    title: "Referral & Business Development Partners",
    label: "Customer Introductions",
    description:
      "For consultants, advisers and business development organisations that can connect EnerG IQ Tech with qualified industrial customers.",
    points: [
      "Introduce relevant decision-makers",
      "Identify energy-intensive opportunities",
      "Explore outcome-based referral arrangements",
    ],
  },
  {
    icon: Building2,
    title: "Industry Associations & Networks",
    label: "Industry Engagement",
    description:
      "For manufacturing associations, industry groups and business networks seeking to connect members with industrial energy optimisation solutions.",
    points: [
      "Facilitate industry introductions",
      "Explore member briefings and workshops",
      "Support targeted sector engagement",
    ],
  },
  {
    icon: Settings2,
    title: "Technology & Integration Partners",
    label: "Technical Collaboration",
    description:
      "For industrial automation specialists, electrical engineers, controls providers and technology suppliers supporting deployment and integration.",
    points: [
      "Industrial gateway and telemetry integration",
      "Metering, BMS, PLC and controls expertise",
      "Project-specific delivery collaboration",
    ],
  },
  {
    icon: Factory,
    title: "Industrial Validation Partners",
    label: "Real-World Application",
    description:
      "For manufacturers and industrial operators interested in exploring measurable energy efficiency, peak demand and operational optimisation opportunities.",
    points: [
      "Identify suitable industrial use cases",
      "Explore site-specific validation",
      "Assess energy, cost and CO₂ outcomes",
    ],
  },
];

/* =========================================================
   COLLABORATION APPROACH
========================================================= */

const collaborationModels = [
  {
    icon: Handshake,
    title: "Outcome-Based Referrals",
    description:
      "Explore commercial arrangements linked to qualified introductions and successful customer outcomes.",
  },
  {
    icon: Users,
    title: "Strategic Industry Collaboration",
    description:
      "Work together on industry engagement, technical briefings, manufacturer introductions and sector-specific opportunities.",
  },
  {
    icon: Settings2,
    title: "Project-Based Delivery",
    description:
      "Define technical responsibilities, project scope and commercial terms for industrial integration and deployment.",
  },
  {
    icon: BarChart3,
    title: "Validation & Demonstration",
    description:
      "Collaborate on industrial demonstrations with defined objectives, practical constraints and measurable outcomes.",
  },
];

const steps = [
  {
    number: "01",
    title: "Connect",
    description: "Discuss the proposed partnership.",
  },
  {
    number: "02",
    title: "Align",
    description: "Identify mutual objectives and opportunities.",
  },
  {
    number: "03",
    title: "Collaborate",
    description: "Agree on activities and commercial terms.",
  },
  {
    number: "04",
    title: "Measure",
    description: "Review engagement and business outcomes.",
  },
];

/* =========================================================
   PAGE
========================================================= */

export default function PartnersPage() {
  return (
    <>
      
      <SEO
        title="Technology & Industry Partnerships | EnerG IQ Tech"
        description="Explore partnership opportunities with EnerG IQ Tech across industrial energy optimisation, Edge AI, digital twins and clean energy innovation. We collaborate with technology providers, manufacturers, research institutions and industry organisations."
        path="/partners"
      />

      <main className="partnersPage">
        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="partnersHero">
          <motion.div
            className="partnersHeroContent"
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            <motion.div className="partnersBadge" variants={fadeUp}>
              <Handshake size={17} />
              EnerG IQ Tech Partner Programme
            </motion.div>

            <motion.h1 variants={fadeUp}>
              Partnering to Build a{" "}
              <span>Smarter Energy Future.</span>
            </motion.h1>

            <motion.p className="partnersLead" variants={fadeUp}>
              Collaborate with EnerG IQ Tech to help industrial
              organisations reduce energy costs, improve operational
              efficiency and advance their clean-energy transition.
            </motion.p>

            <motion.p
              className="partnersDescription"
              variants={fadeUp}
            >
              We are developing a network of industry associations,
              referral partners, engineering specialists, technology
              integrators and industrial operators to accelerate
              real-world adoption of intelligent energy optimisation.
            </motion.p>

            <motion.div
              className="partnersHeroButtons"
              variants={fadeUp}
            >
              <Link
                to="/book-discussion"
                className="partnersPrimaryBtn"
              >
                Book a Discussion
                <ChevronRight size={18} />
              </Link>

              <a
                href="#partnership-opportunities"
                className="partnersSecondaryBtn"
              >
                Explore Partnerships
                <ArrowRight size={17} />
              </a>
            </motion.div>

            <motion.div
              className="partnersHeroTags"
              variants={fadeUp}
            >
              <span>
                <Factory size={15} />
                Industrial Energy
              </span>
              <span>
                <Network size={15} />
                Industry Networks
              </span>
              <span>
                <Zap size={15} />
                Energy Optimisation
              </span>
              <span>
                <Leaf size={15} />
                Cleaner Operations
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            className="partnersHeroVisual"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="partnersHeroPanel">
              <div className="partnersHeroPanelTop">
                <div className="partnersHeroPanelIcon">
                  <Network size={29} />
                </div>
                <span>PARTNERSHIP ECOSYSTEM</span>
              </div>

              <h2>
                Connecting Technology, Industry and Opportunity
              </h2>

              <p>
                Bringing together complementary capabilities to
                identify industrial energy challenges and develop
                commercially relevant solutions.
              </p>

              <div className="partnersNetwork">
                <div className="partnersNetworkCenter">
                  <Zap size={29} />
                  <strong>EnerG IQ Tech</strong>
                  <small>Industrial Energy Intelligence</small>
                </div>

                <div className="partnersNetworkGrid">
                  <div>
                    <Building2 size={23} />
                    <span>Industry Networks</span>
                  </div>
                  <div>
                    <Handshake size={23} />
                    <span>Referral Partners</span>
                  </div>
                  <div>
                    <Settings2 size={23} />
                    <span>Integrators</span>
                  </div>
                  <div>
                    <Factory size={23} />
                    <span>Manufacturers</span>
                  </div>
                </div>
              </div>

              <div className="partnersHeroPanelBottom">
                <CheckCircle2 size={18} />
                Flexible collaboration. Shared objectives.
                Measurable outcomes.
              </div>
            </div>
          </motion.div>
        </section>

        {/* =====================================================
            PARTNERSHIP STRIP
        ===================================================== */}

        <section className="partnersStrip">
          <span>Connect</span>
          <ArrowRight size={15} />
          <span>Collaborate</span>
          <ArrowRight size={15} />
          <span>Validate</span>
          <ArrowRight size={15} />
          <span>Commercialise</span>
        </section>

        {/* =====================================================
            THREE STRATEGIC OBJECTIVES
        ===================================================== */}

        <section className="partnersSection partnersObjectivesSection">
          <div className="partnersSectionHeader">
            <p>Our Partnership Strategy</p>
            <h2>Three Objectives. One Connected Ecosystem.</h2>
            <span>
              The EnerG IQ Tech Partner Programme is designed to
              support business development, build complementary
              industry relationships and create credible pathways
              from industrial validation to commercial adoption.
            </span>
          </div>

          <motion.div
            className="partnersObjectivesGrid"
            variants={stagger}
            {...reveal}
          >
            {objectives.map((objective) => {
              const Icon = objective.icon;

              return (
                <motion.article
                  className="partnersObjectiveCard"
                  variants={fadeUp}
                  key={objective.number}
                >
                  <div className="partnersCardTop">
                    <div className="partnersIcon">
                      <Icon size={25} />
                    </div>
                    <span>{objective.number}</span>
                  </div>

                  <h3>{objective.title}</h3>
                  <p>{objective.description}</p>

                  <ul>
                    {objective.points.map((point) => (
                      <li key={point}>
                        <CheckCircle2 size={16} />
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              );
            })}
          </motion.div>
        </section>

        {/* =====================================================
            PARTNERSHIP OPPORTUNITIES
        ===================================================== */}

        <section
          className="partnersSection partnersTypesSection"
          id="partnership-opportunities"
        >
          <div className="partnersSectionHeader">
            <p>Who We Collaborate With</p>
            <h2>Explore Partnership Opportunities.</h2>
            <span>
              Different organisations contribute different
              capabilities. Our programme is designed to support
              collaboration across commercial, technical and
              industrial validation activities.
            </span>
          </div>

          <motion.div
            className="partnersTypesGrid"
            variants={stagger}
            {...reveal}
          >
            {partnerTypes.map((partner) => {
              const Icon = partner.icon;

              return (
                <motion.article
                  className="partnersTypeCard"
                  variants={fadeUp}
                  key={partner.title}
                >
                  <div className="partnersTypeCardHeader">
                    <div className="partnersIcon">
                      <Icon size={25} />
                    </div>
                    <span>{partner.label}</span>
                  </div>

                  <h3>{partner.title}</h3>
                  <p>{partner.description}</p>

                  <ul>
                    {partner.points.map((point) => (
                      <li key={point}>
                        <CheckCircle2 size={16} />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/book-discussion"
                    className="partnersTextLink"
                  >
                    Discuss Collaboration
                    <ArrowRight size={16} />
                  </Link>
                </motion.article>
              );
            })}
          </motion.div>
        </section>

        {/* =====================================================
            COMMERCIAL COLLABORATION
        ===================================================== */}

        <section className="partnersSection partnersModelsSection">
          <div className="partnersSectionHeader">
            <p>Flexible Commercial Arrangements</p>
            <h2>Partnerships Built Around Mutual Value.</h2>
            <span>
              We recognise that effective partnerships can take
              different forms. Commercial arrangements are explored
              individually, based on each partner&apos;s contribution,
              agreed responsibilities and expected outcomes.
            </span>
          </div>

          <div className="partnersModelsGrid">
            {collaborationModels.map((model) => {
              const Icon = model.icon;

              return (
                <article
                  className="partnersModelCard"
                  key={model.title}
                >
                  <div className="partnersIcon">
                    <Icon size={23} />
                  </div>
                  <h3>{model.title}</h3>
                  <p>{model.description}</p>
                </article>
              );
            })}
          </div>

          <div className="partnersCommercialNote">
            <ShieldCheck size={22} />
            <p>
              Partnership structures, referral arrangements and
              project-specific commercial terms are discussed and
              agreed individually. Participation in an initial
              discussion does not create a commercial commitment.
            </p>
          </div>
        </section>

        {/* =====================================================
            HOW IT WORKS
        ===================================================== */}

        <section className="partnersSection partnersProcessSection">
          <div className="partnersProcessPanel">
            <div className="partnersProcessIntro">
              <p>How Collaboration Begins</p>
              <h2>From First Conversation to Measurable Outcomes.</h2>
              <span>
                We take a practical, opportunity-led approach to
                collaboration, starting with an understanding of
                what each organisation can contribute.
              </span>
            </div>

            <div className="partnersProcessFlow">
              {steps.map((step, index) => (
                <div
                  className="partnersProcessStepWrap"
                  key={step.number}
                >
                  <div className="partnersProcessStep">
                    <span>{step.number}</span>
                    <strong>{step.title}</strong>
                    <small>{step.description}</small>
                  </div>

                  {index < steps.length - 1 && (
                    <ChevronRight
                      className="partnersProcessArrow"
                      size={21}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            INDUSTRIAL APPLICATION
        ===================================================== */}

        <section className="partnersSection partnersImpactSection">
          <div className="partnersImpactPanel">
            <div className="partnersImpactIcon">
              <Lightbulb size={30} />
            </div>

            <div>
              <p>Industrial Impact</p>
              <h2>
                Turning Industry Relationships Into Practical
                Energy Outcomes.
              </h2>

              <span>
                EnerG IQ Tech combines industrial energy gateways,
                physics-based engineering models, edge AI,
                Digital Twins and AI Decision Agents to support
                energy efficiency, peak-demand optimisation and
                measurable energy, cost and emissions outcomes.
              </span>

              <div className="partnersImpactTags">
                <span>
                  <Zap size={15} />
                  Energy Efficiency
                </span>
                <span>
                  <BarChart3 size={15} />
                  Peak Demand
                </span>
                <span>
                  <Factory size={15} />
                  Industrial Validation
                </span>
                <span>
                  <Leaf size={15} />
                  CO₂ Reduction
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <section className="partnersCta">
          <div>
            <p>Partner With EnerG IQ Tech</p>

            <h2>
              Let&apos;s Explore What We Can Achieve Together.
            </h2>

            <span>
              Whether you represent an industry association,
              business development network, technology provider
              or industrial organisation, we welcome discussions
              about practical collaboration opportunities.
            </span>
          </div>

          <div className="partnersCtaActions">
            <Link
              to="/book-discussion"
              className="partnersPrimaryBtn"
            >
              <BriefcaseBusiness size={18} />
              Book a Discussion
              <ChevronRight size={18} />
            </Link>
          </div>
        </section>
      </main>
    
    
    
    
    </>
    
  );
}
