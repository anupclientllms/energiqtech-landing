import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "../styles/Navbar.css";

export default function Navbar({ openPilotModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  return (
    <nav className="nav">

      <Link to="/" className="brand">
        <img
          src="/energiq-logo.png"
          alt="EnergIQ Tech logo"
          className="logoImage"
        />

        <div className="brandText">
          <strong>EnergIQ Tech</strong>

          <span>
            AI-Driven Energy Optimisation & Control
          </span>
        </div>
      </Link>

      {/* Mobile Hamburger */}
      <button
        className="mobileMenuBtn"
        onClick={() =>
          setMobileMenuOpen(!mobileMenuOpen)
        }
      >
        {mobileMenuOpen ? (
          <X size={28} />
        ) : (
          <Menu size={28} />
        )}
      </button>

      <div
        className={`navActions ${
          mobileMenuOpen ? "open" : ""
        }`}
      >
        <div className="dropdown">
          <button className="navLink">
            Solutions ▾
          </button>

          <div className="dropdownMenu">
            <Link
              to="/operational-energy-optimisation"
              onClick={() =>
                setMobileMenuOpen(false)
              }
            >
              Operational Energy Optimisation
            </Link>

            <Link
              to="/digital-twin"
              onClick={() =>
                setMobileMenuOpen(false)
              }
            >
              Digital Twin
            </Link>

            <Link
              to="/savings-intelligence"
              onClick={() =>
                setMobileMenuOpen(false)
              }
            >
              Savings Intelligence
            </Link>
          </div>
        </div>

        <Link
          to="/pilot-program"
          onClick={() =>
            setMobileMenuOpen(false)
          }
        >
          Pilot Program
        </Link>

        <Link
          to="/trust-security"
          onClick={() =>
            setMobileMenuOpen(false)
          }
        >
          Trust & Security
        </Link>

        <Link
          to="/about"
          onClick={() =>
            setMobileMenuOpen(false)
          }
        >
          About
        </Link>

        <button
          type="button"
          onClick={() => {
            openPilotModal();
            setMobileMenuOpen(false);
          }}
          className="navBtn"
        >
          Contact
        </button>
      </div>
    </nav>
  );
}