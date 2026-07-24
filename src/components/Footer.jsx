import { Link } from "react-router-dom";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footerLeft">
        <strong>Energ IQ Tech</strong>

        <span>
          Edge AI for Connected Energy Systems
        </span>
      </div>

      <div className="footerRight">
        <span>
          © {new Date().getFullYear()} Energ IQ Tech
        </span>

        <span>
          Developed by Automation Spectrum Pty Ltd
        </span>

        <div className="footerLinks">
          <Link to="/privacy-policy">
            Privacy Policy
          </Link>

          <Link to="/terms-of-use">
            Terms of Use
          </Link>

          <Link to="/intellectual-property">
            Intellectual Property
          </Link>
        </div>

      </div>

    </footer>
  );
}