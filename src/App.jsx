import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import HomePage from "./pages/HomePage";
import OperationalEnergyPage from "./pages/OperationalEnergyPage";
import DigitalTwinPage from "./pages/DigitalTwinPage";
import SavingsIntelligencePage from "./pages/SavingsIntelligencePage";
import PilotProgramPage from "./pages/PilotProgramPage";
import AboutPage from "./pages/AboutPage";
import TrustSecurityPage from "./pages/TrustSecurityPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";



function App() {
  const [contactOpen, setContactOpen] = useState(false);
  return (
    <>
      <Navbar openPilotModal={() => setContactOpen(true)} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/operational-energy-optimisation"
          element={<OperationalEnergyPage />}
        />
        <Route path="/digital-twin" element={<DigitalTwinPage />} />
        <Route path="/savings-intelligence" element={<SavingsIntelligencePage />} />
        <Route path="/pilot-program" element={<PilotProgramPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/trust-security" element={<TrustSecurityPage />} />
        
      
      </Routes>
    
      <Footer />
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </>
    
  );
}

export default App;