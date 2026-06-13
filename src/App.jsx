import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import OperationalEnergyPage from "./pages/OperationalEnergyPage";
import DigitalTwinPage from "./pages/DigitalTwinPage";
import SavingsIntelligencePage from "./pages/SavingsIntelligencePage";
import PilotProgramPage from "./pages/PilotProgramPage";
import AboutPage from "./pages/AboutPage";
import TrustSecurityPage from "./pages/TrustSecurityPage";



function App() {
  return (
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
  );
}

export default App;