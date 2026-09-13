import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFloating from "./components/WhatsAppFloating";

// Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import BuildPrint from "./pages/BuildPrint";
import Quote from "./pages/Quote";
import Upload from "./pages/Upload";
import StudentHub from "./pages/StudentHub";
import BusinessHub from "./pages/BusinessHub";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#070e1c] text-[#f1f5f9] selection:bg-[#b21f2d] selection:text-white">
        
        {/* Navigation */}
        <Navbar />

        {/* Dynamic Main Routes */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetails />} />
            <Route path="/build" element={<BuildPrint />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/students" element={<StudentHub />} />
            <Route path="/business" element={<BusinessHub />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Floating WhatsApp Quick Ordering Trigger */}
        <WhatsAppFloating />
      </div>
    </BrowserRouter>
  );
}
