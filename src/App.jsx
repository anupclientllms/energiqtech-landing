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
import PrivacyPolicy from "./pages/PrivacyPolicyPage";
import TermsOfUse from "./pages/TermsOfUse";
import IntellectualProperty from "./pages/IntellectualPropertyPage";



function App() {
  const [contactOpen, setContactOpen] = useState(false);
  return (
    <>
      <Navbar openPilotModal={() => setContactOpen(true)} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/operational-energy-optimisation" element={<OperationalEnergyPage />}/>
        <Route path="/digital-twin" element={<DigitalTwinPage />} />
        <Route path="/savings-intelligence" element={<SavingsIntelligencePage />} />
        <Route path="/pilot-program" element={<PilotProgramPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/trust-security" element={<TrustSecurityPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/intellectual-property" element={<IntellectualProperty />} />
        
        
        
      
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