import { Routes, Route } from "react-router-dom";
import { useCallback, useState } from "react";

import HomePage from "./pages/HomePage";
import OperationalEnergyPage from "./pages/OperationalEnergyPage";
import DigitalTwinPage from "./pages/DigitalTwinPage";
import SavingsIntelligencePage from "./pages/SavingsIntelligencePage";
import PilotProgramPage from "./pages/PilotProgramPage";
import AboutPage from "./pages/AboutPage";
import TrustSecurityPage from "./pages/TrustSecurityPage";

import PrivacyPolicy from "./pages/PrivacyPolicyPage";
import TermsOfUse from "./pages/TermsOfUse";
import IntellectualProperty from "./pages/IntellectualPropertyPage";

import ConnectedEnergyAssetsPage from "./pages/ConnectedEnergyAssetsPage";
import AIEnergyGatewayPage from "./pages/AIEnergyGatewayPage";

import ColdStorageAI from "./pages/ColdStorageAI";
import ManufacturingAI from "./pages/ManufacturingAI";
import HealthcareAI from "./pages/HealthCareAI";
import UniversityAI from "./pages/UniversityAI";
import HotelAI from "./pages/HotelAI";
import AirportAI from "./pages/Airport";
import ShoppingCentreAI from "./pages/ShoppingCentreAI";
import WarehouseLogisticsAI from "./pages/WarehouseLogisticsAI";
import DataCentreAI from "./pages/DataCentreAI";
import BuildingAI from "./pages/BuildingAI";
import LocalGovernmentAI from "./pages/LocalGovernmentAI";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";
import ScrollToTop from "./components/ScrollToTop";
import BookPilotPage from "./pages/BookPilotPage";
import BookPilotDetailsPage from "./pages/BookPilotDetailsPage";
import DERPortfolioAI from "./pages/DERPortfolioAI";

function App() {
  const [contactOpen, setContactOpen] = useState(false);

  const openPilotModal = useCallback(() => {
    setContactOpen(true);
  }, []);

  const closePilotModal = useCallback(() => {
    setContactOpen(false);
  }, []);

  return (
    <>
      <ScrollToTop />
      <Navbar openPilotModal={openPilotModal} />

      <Routes>
        <Route
          path="/"
          element={<HomePage openPilotModal={openPilotModal} />}
        />

        <Route
          path="/operational-energy-optimisation"
          element={
            <OperationalEnergyPage openPilotModal={openPilotModal} />
          }
        />

        <Route
          path="/digital-twin"
          element={<DigitalTwinPage openPilotModal={openPilotModal} />}
        />

        <Route
          path="/savings-intelligence"
          element={
            <SavingsIntelligencePage openPilotModal={openPilotModal} />
          }
        />

        <Route
          path="/pilot-program"
          element={<PilotProgramPage openPilotModal={openPilotModal} />}
        />

        <Route
          path="/about"
          element={<AboutPage openPilotModal={openPilotModal} />}
        />

        <Route
          path="/trust-security"
          element={<TrustSecurityPage openPilotModal={openPilotModal} />}
        />

        <Route
          path="/privacy-policy"
          element={<PrivacyPolicy />}
        />

        <Route
          path="/terms-of-use"
          element={<TermsOfUse />}
        />

        <Route
          path="/intellectual-property"
          element={<IntellectualProperty />}
        />

        <Route
          path="/connected-energy-assets"
          element={
            <DERPortfolioAI
              openPilotModal={openPilotModal}
            />
          }
        />

        <Route
          path="/ai-energy-gateway"
          element={
            <AIEnergyGatewayPage openPilotModal={openPilotModal} />
          }
        />

        <Route
          path="/cold-storage-ai"
          element={
            <ColdStorageAI openPilotModal={openPilotModal} />
          }
        />

        <Route
          path="/manufacturing-ai"
          element={
            <ManufacturingAI openPilotModal={openPilotModal} />
          }
        />

        <Route
          path="/healthcare-ai"
          element={
            <HealthcareAI openPilotModal={openPilotModal} />
          }
        />

        <Route
          path="/university-ai"
          element={
            <UniversityAI openPilotModal={openPilotModal} />
          }
        />

        <Route
          path="/hotel-ai"
          element={
            <HotelAI openPilotModal={openPilotModal} />
          }
        />

        <Route
          path="/airport-ai"
          element={
            <AirportAI openPilotModal={openPilotModal} />
          }
        />

        <Route
          path="/shopping-centre-ai"
          element={
            <ShoppingCentreAI openPilotModal={openPilotModal} />
          }
        />

        <Route
          path="/warehouse-logistics-ai"
          element={
            <WarehouseLogisticsAI
              openPilotModal={openPilotModal}
            />
          }
        />

        <Route
          path="/data-centre-ai"
          element={
            <DataCentreAI openPilotModal={openPilotModal} />
          }
        />

        <Route
          path="/building-ai"
          element={
            <BuildingAI openPilotModal={openPilotModal} />
          }
        />

        <Route
          path="/local-government-ai"
          element={
            <LocalGovernmentAI
              openPilotModal={openPilotModal}
            />
          }
        />
        
        <Route
          path="/book-discussion"
          element={<BookPilotPage />}
        />

        <Route
          path="/book-discussion/details"
          element={<BookPilotDetailsPage />}
        />
      </Routes>

      <Footer />

      <ContactModal
        isOpen={contactOpen}
        onClose={closePilotModal}
      />
    </>
  );
}

export default App;