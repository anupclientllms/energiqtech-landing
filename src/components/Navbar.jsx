import { useState } from "react";
import { Link } from "react-router-dom";
import {
  BarChart3,
  Brain,
  Building2,
  Cpu,
  Database,
  Factory,
  Gauge,
  GraduationCap,
  Hospital,
  Hotel,
  Landmark,
  Layers3,
  Menu,
  Network,
  Plane,
  ShoppingCart,
  Snowflake,
  SunMedium,
  Warehouse,
  X,
  Zap,
} from "lucide-react";
import "../styles/Navbar.css";

const solutions = {
  platform: [
    {
      icon: Zap,
      label: "Operational Energy Optimisation",
      path: "/operational-energy-optimisation",
    },
    {
      icon: Cpu,
      label: "AI Energy Gateway",
      path: "/ai-energy-gateway",
    },
    {
      icon: Network,
      label: "Connected Energy Assets",
      path: "/connected-energy-assets",
    },
  ],

  intelligence: [
    {
      icon: Layers3,
      label: "Digital Twin",
      path: "/digital-twin",
    },
    {
      icon: BarChart3,
      label: "Savings Intelligence",
      path: "/savings-intelligence",
    },
    //{
      //icon: Brain,
      //label: "AI Decision Agents",
      //path: "/decision-agents",
    //},
  ],
};

const industries = {
  builtEnvironment: [
    {
      icon: Building2,
      label: "Commercial Building AI",
      path: "/building-ai",
    },
    {
      icon: Hospital,
      label: "Healthcare AI",
      path: "/healthcare-ai",
    },
    {
      icon: GraduationCap,
      label: "University AI",
      path: "/university-ai",
    },
    {
      icon: Hotel,
      label: "Hotel AI",
      path: "/hotel-ai",
    },
    {
      icon: ShoppingCart,
      label: "Shopping Centre AI",
      path: "/shopping-centre-ai",
    },
    {
      icon: Plane,
      label: "Airport AI",
      path: "/airport-ai",
    },
  ],

  industrialEnergy: [
    {
      icon: Snowflake,
      label: "Cold Storage AI",
      path: "/cold-storage-ai",
    },
    {
      icon: Factory,
      label: "Manufacturing AI",
      path: "/manufacturing-ai",
    },
    {
      icon: Warehouse,
      label: "Warehouse & Logistics AI",
      path: "/warehouse-logistics-ai",
    },
    {
      icon: Database,
      label: "Data Centre AI",
      path: "/data-centre-ai",
    },
    {
      icon: Landmark,
      label: "Local Government AI",
      path: "/local-government-ai",
    },
    {
      icon: SunMedium,
      label: "DER Portfolio AI",
      path: "/connected-energy-assets",
    },
  ],
};

export default function Navbar({ openPilotModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setSolutionsOpen(false);
    setIndustriesOpen(false);
  };

  const toggleSolutions = () => {
    setSolutionsOpen((current) => !current);
    setIndustriesOpen(false);
  };

  const toggleIndustries = () => {
    setIndustriesOpen((current) => !current);
    setSolutionsOpen(false);
  };

  const handleContactClick = () => {
    if (typeof openPilotModal === "function") {
      openPilotModal();
    }

    closeMenu();
  };

  return (
    <nav className="nav">
      <Link to="/" className="brand" onClick={closeMenu}>
        <img
          src="/energiq-logo.png"
          alt="EnergIQ Tech logo"
          className="logoImage"
        />

        <div className="brandText">
          <strong>EnergIQ Tech</strong>
          <span>Edge AI for Connected Energy Systems</span>
        </div>
      </Link>

      <button
        className="mobileMenuBtn"
        type="button"
        aria-label={
          mobileMenuOpen
            ? "Close navigation menu"
            : "Open navigation menu"
        }
        aria-expanded={mobileMenuOpen}
        onClick={() => setMobileMenuOpen((current) => !current)}
      >
        {mobileMenuOpen ? <X size={34} /> : <Menu size={34} />}
      </button>

      <div className={`navActions ${mobileMenuOpen ? "open" : ""}`}>
        {/* Solutions Mega Menu */}

        <div
          className={`dropdown solutionsDropdown ${
            solutionsOpen ? "mobileOpen" : ""
          }`}
        >
          <button
            type="button"
            className="navLink"
            aria-expanded={solutionsOpen}
            onClick={toggleSolutions}
          >
            Solutions <span aria-hidden="true">▾</span>
          </button>

          <div className="dropdownMenu solutionsMegaMenu">
            <div className="solutionMenuColumn">
              <span className="solutionMenuHeading">
                Platform & Connectivity
              </span>

              {solutions.platform.map((solution) => {
                const Icon = solution.icon;

                return (
                  <Link
                    key={solution.path}
                    to={solution.path}
                    onClick={closeMenu}
                    className="solutionMenuItem"
                  >
                    <span className="solutionMenuIcon">
                      <Icon size={18} />
                    </span>

                    <span>{solution.label}</span>
                  </Link>
                );
              })}
            </div>

            <div className="solutionMenuColumn">
              <span className="solutionMenuHeading">
                Intelligence & Optimisation
              </span>

              {solutions.intelligence.map((solution) => {
                const Icon = solution.icon;

                return (
                  <Link
                    key={solution.path}
                    to={solution.path}
                    onClick={closeMenu}
                    className="solutionMenuItem"
                  >
                    <span className="solutionMenuIcon">
                      <Icon size={18} />
                    </span>

                    <span>{solution.label}</span>
                  </Link>
                );
              })}
            </div>

            <div className="solutionMenuFooter">
              <div>
                <strong>Operational Energy Intelligence</strong>

                <span>
                  Connect assets, detect waste, simulate actions and measure
                  energy, cost and carbon outcomes.
                </span>
              </div>

              <Link
                to="/operational-energy-optimisation"
                onClick={closeMenu}
                className="viewSolutionsLink"
              >
                Explore the platform →
              </Link>
            </div>
          </div>
        </div>

        {/* Industries Mega Menu */}

        <div
          className={`dropdown industriesDropdown ${
            industriesOpen ? "mobileOpen" : ""
          }`}
        >
          <button
            type="button"
            className="navLink"
            aria-expanded={industriesOpen}
            onClick={toggleIndustries}
          >
            Industries <span aria-hidden="true">▾</span>
          </button>

          <div className="dropdownMenu industriesMegaMenu">
            <div className="industryMenuColumn">
              <span className="industryMenuHeading">
                Built Environment
              </span>

              {industries.builtEnvironment.map((industry) => {
                const Icon = industry.icon;

                return (
                  <Link
                    key={industry.path}
                    to={industry.path}
                    onClick={closeMenu}
                    className="industryMenuItem"
                  >
                    <span className="industryMenuIcon">
                      <Icon size={18} />
                    </span>

                    <span>{industry.label}</span>
                  </Link>
                );
              })}
            </div>

            <div className="industryMenuColumn">
              <span className="industryMenuHeading">
                Industrial & Energy
              </span>

              {industries.industrialEnergy.map((industry) => {
                const Icon = industry.icon;

                return (
                  <Link
                    key={industry.path}
                    to={industry.path}
                    onClick={closeMenu}
                    className="industryMenuItem"
                  >
                    <span className="industryMenuIcon">
                      <Icon size={18} />
                    </span>

                    <span>{industry.label}</span>
                  </Link>
                );
              })}
            </div>

            <div className="industryMenuFooter">
              <div>
                <strong>One Core AI Platform</strong>

                <span>
                  AI Energy Gateway, Digital Twin, Decision Agents and Savings
                  Intelligence across 12 industries.
                </span>
              </div>

              <Link
                to="/industries"
                onClick={closeMenu}
                className="viewIndustriesLink"
              >
                View all industries →
              </Link>
            </div>
          </div>
        </div>

        <Link to="/pilot-program" onClick={closeMenu}>
          Pilot Program
        </Link>

        <Link to="/trust-security" onClick={closeMenu}>
          Trust & Security
        </Link>

        <Link to="/about" onClick={closeMenu}>
          About
        </Link>

        <button
          type="button"
          onClick={handleContactClick}
          className="navBtn"
        >
          Contact
        </button>
      </div>
    </nav>
  );
}