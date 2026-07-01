import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "../styles/Navbar.css";

export default function Navbar({ openPilotModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setSolutionsOpen(false);
  };

  return (
    <nav className="nav">
      <Link to="/" className="brand" onClick={closeMenu}>
        <img src="/energiq-logo.png" alt="EnergIQ Tech logo" className="logoImage" />

        <div className="brandText">
          <strong>EnergIQ Tech</strong>
          <span>Edge AI for Connected Energy Systems</span>
        </div>
      </Link>

      <button
        className="mobileMenuBtn"
        type="button"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X size={34} /> : <Menu size={34} />}
      </button>

      <div className={`navActions ${mobileMenuOpen ? "open" : ""}`}>
        <div className={`dropdown ${solutionsOpen ? "mobileOpen" : ""}`}>
          <button
            type="button"
            className="navLink"
            onClick={() => setSolutionsOpen(!solutionsOpen)}
          >
            Solutions ▾
          </button>

          <div className="dropdownMenu">
            <Link to="/operational-energy-optimisation" onClick={closeMenu}>
              Operational Energy Optimisation
            </Link>

            <Link to="/digital-twin" onClick={closeMenu}>
              Digital Twin
            </Link>

            <Link to="/savings-intelligence" onClick={closeMenu}>
              Savings Intelligence
            </Link>
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
          onClick={() => {
            openPilotModal();
            closeMenu();
          }}
          className="navBtn"
        >
          Contact
        </button>
      </div>
    </nav>
  );
}