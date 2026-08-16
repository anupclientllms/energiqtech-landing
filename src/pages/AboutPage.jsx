import "../styles/AboutPage.css";
import { Link } from "react-router-dom";

import {
  Building2,
  CheckCircle2,
  ChevronRight,
  Gauge,
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

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="aboutHero">
        <div className="aboutHeroContent">
          <p className="aboutEyebrow">About EnerG IQ Tech</p>

          <h1>
            AI for Lower Energy Costs & CO₂ Emissions
          </h1>

          <p>
            EnerG IQ Tech is an AI-driven energy optimisation platform
            developed to help energy-intensive organisations reduce energy
            waste, lower operating costs and associated CO₂ emissions while
            maintaining operational reliability.
            {" "}
            Using Edge AI, Digital Twins, AI Decision Agents and governed
            human-in-the-loop workflows, EnerG IQ Tech turns operational
            energy data into measurable optimisation actions across buildings,
            refrigeration systems, industrial equipment and connected energy
            assets.
          </p>

          <div className="aboutHeroActions">
            <Link to="/pilot-program" className="aboutPrimary">
              Explore Pilot Program <ChevronRight size={18} />
            </Link>

            <Link
              to="/operational-energy-optimisation"
              className="aboutSecondary"
            >
              View Solutions
            </Link>
          </div>
        </div>
      </section>


      {/* =========================================================
          WHO WE ARE
      ========================================================= */}
      <section className="aboutSection">
        <div className="aboutSectionHeader">
          <p>Who we are</p>

          <h2>
            An AI energy technology company focused on reducing energy
            costs and CO₂ emissions.
          </h2>

          <span>
            EnerG IQ Tech helps energy-intensive organisations identify and
            reduce energy waste, lower operating costs and associated CO₂
            emissions, and improve operational efficiency through AI-driven
            energy optimisation.
          </span>
        </div>

        <div className="aboutCompanyGrid">

          <div>
            <Zap />

            <strong>Energy Cost Reduction</strong>

            <span>
              Identify energy waste, inefficient equipment operation and
              peak-demand events that contribute to avoidable operating
              costs across energy-intensive facilities.
            </span>
          </div>

          <div>
            <Leaf />

            <strong>CO₂ Emissions Reduction</strong>

            <span>
              Reduce associated CO₂ emissions by lowering unnecessary energy
              consumption and improving how energy-intensive assets operate.
            </span>
          </div>

          <div>
            <Target />

            <strong>AI-Driven Optimisation</strong>

            <span>
              Use Edge AI, Digital Twins and decision intelligence to analyse
              operations and recommend measurable optimisation actions.
            </span>
          </div>

          <div>
            <ShieldCheck />

            <strong>Governed Operational Action</strong>

            <span>
              Keep people in control through human-in-the-loop review and
              approval before optimisation actions are applied to operational
              systems.
            </span>
          </div>

        </div>
      </section>


      {/* =========================================================
          VISION
      ========================================================= */}
      <section className="aboutMission">
        <div className="aboutMissionContent">
          <p>Our Vision</p>

          <h2>
            Make energy optimisation measurable, explainable and actionable.
          </h2>

          <span>
            Our vision is to make intelligent energy optimisation accessible
            across energy-intensive operations — enabling organisations to
            continuously reduce energy waste, operating costs and associated
            CO₂ emissions while improving operational efficiency.
            {" "}
            Over time, EnerG IQ Tech aims to become an AI-driven Energy
            Operating System connecting buildings, industrial equipment,
            refrigeration, Solar PV, Battery Energy Storage Systems, EV
            charging and distributed energy resources through a common
            intelligence and optimisation layer.
          </span>
        </div>
      </section>


      {/* =========================================================
          WHY ENERG IQ TECH
      ========================================================= */}
      <section className="aboutSection">
        <div className="aboutSectionHeader">
          <p>Why EnerG IQ Tech</p>

          <h2>
            Designed to turn energy waste into measurable cost and carbon
            reduction.
          </h2>
        </div>

        <div className="aboutWhyGrid">

          <div>
            <CheckCircle2 />

            <h3>Identify Energy Waste</h3>

            <p>
              Detect inefficient equipment behaviour, abnormal energy
              consumption and peak-demand events that contribute to
              avoidable operating costs and emissions.
            </p>
          </div>

          <div>
            <CheckCircle2 />

            <h3>Prove the Business Case</h3>

            <p>
              Establish energy baselines and quantify potential energy
              savings, cost reduction and associated CO₂ outcomes before
              broader deployment.
            </p>
          </div>

          <div>
            <CheckCircle2 />

            <h3>Measure the Results</h3>

            <p>
              Track energy consumption, peak demand, financial savings and
              associated CO₂ outcomes to demonstrate measurable operational
              impact.
            </p>
          </div>

          <div>
            <CheckCircle2 />

            <h3>Work With Existing Infrastructure</h3>

            <p>
              Integrate with existing buildings, equipment, meters, BMS,
              refrigeration systems and connected energy assets without
              requiring wholesale infrastructure replacement.
            </p>
          </div>

          <div>
            <CheckCircle2 />

            <h3>Human-in-the-Loop Control</h3>

            <p>
              Keep authorised operators involved in reviewing and approving
              AI-recommended optimisation actions before operational changes
              are applied.
            </p>
          </div>

          <div>
            <CheckCircle2 />

            <h3>Start Small. Scale With Evidence.</h3>

            <p>
              Validate EnerG IQ Tech at a focused site or operational system,
              prove the energy, financial and carbon outcomes, then scale
              across facilities and portfolios.
            </p>
          </div>

        </div>
      </section>


      {/* =========================================================
          OUR APPROACH
      ========================================================= */}
      <section className="aboutApproach">
        <div className="aboutApproachText">
          <p>Our Approach</p>

          <h2>
            Turn Energy Intelligence Into Measurable Cost & Carbon Reduction.
          </h2>

          <span>
            EnerG IQ Tech identifies where energy is being wasted, determines
            why it is happening and recommends optimisation actions that can
            reduce energy consumption, peak demand, operating costs and
            associated CO₂ emissions — while maintaining operational
            requirements.
          </span>
        </div>

        <div className="aboutApproachGrid">

          <div>
            <MapPinned />

            <strong>Detect</strong>

            <span>
              Identify abnormal energy consumption, peak-demand events,
              equipment inefficiencies and operational energy waste.
            </span>
          </div>

          <div>
            <LineChart />

            <strong>Analyse</strong>

            <span>
              Understand demand patterns, asset behaviour, baselines and root
              causes to determine where optimisation opportunities exist.
            </span>
          </div>

          <div>
            <Target />

            <strong>Optimise</strong>

            <span>
              Prioritise AI-recommended actions based on potential energy
              savings, cost reduction, emissions impact and operational
              constraints.
            </span>
          </div>

          <div>
            <CheckCircle2 />

            <strong>Measure</strong>

            <span>
              Compare results against established baselines to quantify energy
              reduction, peak-demand reduction, financial savings and
              associated CO₂ outcomes.
            </span>
          </div>

        </div>
      </section>


      {/* =========================================================
          PILOT-FIRST PHILOSOPHY
      ========================================================= */}
      <section className="aboutPilotPhilosophy">
        <div className="aboutPilotContent">
          <p>Pilot-first philosophy</p>

          <h2>
            Start small, prove value, then scale with confidence.
          </h2>

          <span>
            EnerG IQ Tech is designed around a pilot-first deployment
            approach. Rather than asking organisations to commit to a large
            deployment upfront, we start with a focused site, building or
            energy-intensive system to establish a baseline, identify
            optimisation opportunities and measure potential energy, cost
            and associated CO₂ outcomes before scaling.
          </span>
        </div>

        <div className="aboutPilotList">

          <div>
            <CheckCircle2 />
            <span>
              Energy baseline and connected asset assessment
            </span>
          </div>

          <div>
            <CheckCircle2 />
            <span>
              Defined pilot scope and measurable success criteria
            </span>
          </div>

          <div>
            <CheckCircle2 />
            <span>
              Energy, cost and CO₂ optimisation opportunity assessment
            </span>
          </div>

          <div>
            <CheckCircle2 />
            <span>
              Evidence-based decision to optimise and scale
            </span>
          </div>

        </div>
      </section>


      {/* =========================================================
          INDUSTRY ENGAGEMENT
      ========================================================= */}
      <section className="aboutSection">
        <div className="aboutSectionHeader">
          <p>Industry Engagement & Commercialisation</p>

          <h2>
            Building the evidence required to deliver measurable energy,
            financial and carbon outcomes.
          </h2>

          <span>
            EnerG IQ Tech has completed a Commercialisation & Growth
            assessment through the Australian Government Industry Growth
            Program. Pilot validation, measurable customer outcomes,
            deployment scalability and commercial growth remain key
            priorities as EnerG IQ Tech progresses toward broader market
            deployment.
          </span>
        </div>

        <div className="aboutIndustryGrid">

          <div>
            <CheckCircle2 />

            <h3>Commercialisation & Growth Assessment</h3>

            <p>
              Completed a Commercialisation & Growth assessment focused on
              validating customer problems, measurable pilot outcomes,
              deployment readiness and scalable growth.
            </p>
          </div>

          <div>
            <CheckCircle2 />

            <h3>Industry Pilot Engagement</h3>

            <p>
              Engaging energy-intensive organisations around operational
              challenges where energy waste, peak demand and equipment
              inefficiencies can create measurable cost and emissions
              reduction opportunities.
            </p>
          </div>

          <div>
            <CheckCircle2 />

            <h3>Energy & Sustainability Outcomes</h3>

            <p>
              Pilot discussions focus on reducing energy consumption and
              operating costs while quantifying associated CO₂ emissions
              outcomes and maintaining operational requirements.
            </p>
          </div>

          <div>
            <CheckCircle2 />

            <h3>Pilot & Scale Strategy</h3>

            <p>
              Start with a measurable energy problem, establish the baseline,
              validate optimisation opportunities, prove the financial and
              carbon outcomes, then scale with evidence.
            </p>
          </div>

        </div>
      </section>


      {/* =========================================================
          MARKET FOCUS
      ========================================================= */}
      <section className="aboutSection">
        <div className="aboutSectionHeader">
          <p>Market Focus</p>

          <h2>
            Built for Energy-Intensive Organisations Across Multiple
            Industries.
          </h2>

          <span>
            EnerG IQ Tech is designed for organisations where energy
            consumption, peak demand and complex operational assets have a
            material impact on operating costs and associated CO₂ emissions.
          </span>
        </div>

        <div className="aboutMarketGrid">

          <div>
            <Gauge />

            <strong>Cold Storage & Refrigeration</strong>

            <span>
              Reduce refrigeration energy costs, peak demand and associated
              CO₂ emissions while protecting temperature compliance,
              equipment reliability and product integrity.
            </span>
          </div>

          <div>
            <Zap />

            <strong>Manufacturing & Industrial</strong>

            <span>
              Optimise production equipment, motors, compressors, utilities
              and process loads to reduce energy costs and associated
              emissions.
            </span>
          </div>

          <div>
            <Building2 />

            <strong>Local Government</strong>

            <span>
              Reduce energy costs and associated CO₂ emissions across civic
              buildings, libraries, depots and community facilities while
              supporting sustainability targets.
            </span>
          </div>

          <div>
            <Users />

            <strong>Universities & Campuses</strong>

            <span>
              Optimise buildings, laboratories and distributed energy assets
              to lower campus energy costs and associated CO₂ emissions while
              maintaining operational requirements.
            </span>
          </div>

          <div>
            <Building2 />

            <strong>Commercial Buildings</strong>

            <span>
              Reduce HVAC, lighting and whole-building energy costs while
              improving operational efficiency, occupant comfort and carbon
              performance.
            </span>
          </div>

          <div>
            <ShieldCheck />

            <strong>Healthcare</strong>

            <span>
              Reduce energy waste and operating costs across critical
              facilities while maintaining comfort, resilience and
              operational safeguards.
            </span>
          </div>

          <div>
            <LineChart />

            <strong>Data Centres</strong>

            <span>
              Optimise cooling and power infrastructure to reduce energy costs
              and associated emissions while protecting availability and
              operational resilience.
            </span>
          </div>

          <div>
            <MapPinned />

            <strong>Warehousing & Logistics</strong>

            <span>
              Reduce energy costs and peak demand across lighting,
              refrigeration, conveyors, charging infrastructure and
              warehouse operations.
            </span>
          </div>

        </div>
      </section>


      {/* =========================================================
          CONNECTED ENERGY ECOSYSTEM
      ========================================================= */}
      <section className="aboutSection">
        <div className="aboutSectionHeader">
          <p>Connected Energy Ecosystem</p>

          <h2>
            Designed to optimise the infrastructure already powering your
            operations.
          </h2>

          <span>
            EnerG IQ Tech brings operational equipment and distributed energy
            infrastructure into a common intelligence layer so organisations
            can understand how assets interact, identify waste and coordinate
            optimisation opportunities.
          </span>
        </div>

        <div className="aboutMarketGrid">

          <div>
            <Building2 />

            <strong>Buildings & BMS</strong>

            <span>
              Connect building management systems, HVAC, lighting, occupancy
              data and whole-building energy performance.
            </span>
          </div>

          <div>
            <Gauge />

            <strong>Smart Meters & IoT</strong>

            <span>
              Analyse import, export, demand, tariffs and operational sensor
              data to establish measurable energy baselines.
            </span>
          </div>

          <div>
            <Zap />

            <strong>Solar PV & BESS</strong>

            <span>
              Coordinate onsite generation and battery storage with facility
              demand to improve energy utilisation and reduce peak costs.
            </span>
          </div>

          <div>
            <Target />

            <strong>EV & Flexible Loads</strong>

            <span>
              Optimise charging schedules and flexible electrical loads around
              operational demand, tariffs and energy constraints.
            </span>
          </div>

        </div>
      </section>


      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="aboutCTA">
        <h2>
          Start With One Site. Prove the Energy & Carbon Savings.
        </h2>

        <p>
          Begin with one operational challenge and a measurable energy
          baseline. EnerG IQ Tech can identify where energy is being wasted,
          quantify optimisation opportunities and establish potential energy,
          financial and associated CO₂ outcomes before broader deployment.
        </p>

        <Link to="/pilot-program" className="aboutPrimary">
          Discuss a Pilot <ChevronRight size={18} />
        </Link>
      </section>

    </main>
  );
}