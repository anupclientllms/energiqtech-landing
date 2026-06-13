import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar({ openPilotModal }) {
  return (
    <nav className="nav">

      <Link to="/" className="brand">
        <img
          src="/energiq-logo.png"
          alt="EnergIQ Tech logo"
          className="logoImage"
        />

        <div className="brandText">
          <strong>EnergIQ</strong>
          <span>
            AI-Driven Energy Optimisation & Control
          </span>
        </div>
      </Link>

      <div className="navActions">

        <div className="dropdown">
          <button className="navLink">
            Solutions ▾
          </button>

          <div className="dropdownMenu">

            <Link to="/operational-energy-optimisation">
              Operational Energy Optimisation
            </Link>

            <Link to="/digital-twin">
              Digital Twin
            </Link>

            <Link to="/savings-intelligence">
              Savings Intelligence
            </Link>

          </div>
        </div>

        <Link to="/pilot-program">
          Pilot Program
        </Link>

        <Link to="/trust-security">
          Trust & Security
        </Link>

        <Link to="/about">
          About
        </Link>

        <button
          type="button"
          onClick={openPilotModal}
          className="navBtn"
        >
          Contact
        </button>

      </div>

    </nav>
  );
}