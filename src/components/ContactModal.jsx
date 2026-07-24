import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ChevronRight } from "lucide-react";
import "../styles/ContactModal.css";

export default function ContactModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  if (!isOpen) return null;

  const handlePilotSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      await emailjs.sendForm(
        "service_vb1aryn",
        "template_c9ag4vd",
        e.currentTarget,
        "qCBx0dmPttChUW8LU"
      );

      setSubmitted(true);
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("Something went wrong. Please email anup.clientllms@gmail.com directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="pilotModal" onClick={(e) => e.stopPropagation()}>
        <button className="modalClose" onClick={onClose} type="button">
          ×
        </button>

        {!submitted ? (
          <>
            <div className="modalBadge">Pilot Program Open</div>

            <h2>Start a pilot discussion</h2>

            <p>
              We’re onboarding early pilot partners to validate measurable energy
              savings, demand optimisation, carbon impact and ROI across buildings
              and connected energy assets.
            </p>

            <form onSubmit={handlePilotSubmit} className="pilotForm">
              <input type="hidden" name="to_email" value="anup.clientllms@gmail.com" />

              <input name="name" placeholder="Name" required />
              <input name="email" type="email" placeholder="Work Email" required />
              <input name="organisation" placeholder="Organisation" required />
              <textarea
                name="message"
                placeholder="Use case / site type / connected assets e.g. BMS, Solar PV, Battery, EV Charging, Smart Meters"
              />

              <button type="submit" className="primary modalSubmit" disabled={sending}>
                {sending ? "Sending..." : "Request Pilot Discussion"}
                {!sending && <ChevronRight size={18} />}
              </button>
            </form>
          </>
        ) : (
          <div className="successBox">
            <div className="modalBadge">Request Received</div>
            <h2>Thanks — we’ll get back within 24 hours.</h2>
            <p>Your pilot discussion request has been sent to Energ IQ Tech.</p>
            <button className="primary modalSubmit" onClick={onClose}>
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}