import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerLeft">
        <strong>EnergIQ Tech</strong>
        <span>
          AI-Driven Energy Optimisation & Control
        </span>
      </div>

      <div className="footerRight">
        <span>
          © {new Date().getFullYear()} EnergIQ Tech
        </span>

        <span>
          Developed by Automation Spectrum Pty Ltd
        </span>
      </div>
    </footer>
  );
}