// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import FooterSection from "./components/Footer";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import FaqSection from "./components/Faqsection";
import SocialSliderSection from "./components/SocialSliderSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import AboutUsHero from "./components/AboutUsHero";
import EcommerceHero from "./components/EcommerceHero";
import WholeSalesolutions from "./components/WholeSalesolutions";
import DigitalMarketing from "./components/DigitalMarketing";
import Operations from "./components/Operations";
import PrivateLabel from "./components/PrivateLabel";
import Contactus from "./components/Contactus";
import AdvancePaymentPolicy from "./components/AdvancePaymentPolicy";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndConditions from "./components/Termsandcondition";

const App = () => {
  return (
    <Router>
      <div className="App bg-gray-100 text-gray-800">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <AboutSection />
                <ServicesSection />
                <FaqSection />

                <SocialSliderSection />
                <WhyChooseUsSection />
              </>
            }
          />
          <Route path="/about" element={<AboutUsHero />} />
          <Route path="/services-eCommerce" element={<EcommerceHero />} />
          <Route path="/service-Wholesale" element={<WholeSalesolutions />} />
          <Route
            path="/service-digitalMarketing"
            element={<DigitalMarketing />}
          />
          <Route path="/service-PrivateLabel" element={<PrivateLabel />} />
          <Route path="/service-operations" element={<Operations />} />

          <Route path="/contact" element={<Contactus />} />
          <Route
            path="/advance-payment-policy"
            element={<AdvancePaymentPolicy />}
          />
          <Route path="/terms-and-condition" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>

        <FooterSection />
      </div>
    </Router>
  );
};

export default App;
