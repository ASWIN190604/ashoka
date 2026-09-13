import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Printer, 
  FileUp, 
  CheckCircle2, 
  MapPin, 
  Layers, 
  ShieldCheck,
  RotateCw
} from "lucide-react";
import PrinterMachine from "./PrinterMachine";
import { BUSINESS_CONFIG } from "../data/business";

export default function PrinterHero() {
  const [headlineIndex, setHeadlineIndex] = useState(0);

  const heroHeadlines = [
    {
      badge: "DIGITAL PRODUCTION PRESS • ROHTAK",
      line1: "ASHOKA PHOTOSTAT &",
      line2: "PRINTING PRESS",
      sub: "Enter the digital printing workshop. Precision waterproof stickers, executive thesis binding, heavy cardstock & nationwide courier dispatch.",
      ctaPrimary: "START PRINTING",
      ctaSecondary: "EXPLORE THE PRESS"
    },
    {
      badge: "YOU DESIGN. WE PRINT.",
      line1: "WHAT DO YOU WANT",
      line2: "TO PRINT TODAY?",
      sub: "From single academic project reports to 10,000 custom die-cut product labels. Upload your design or build your print in real-time.",
      ctaPrimary: "BUILD YOUR PRINT",
      ctaSecondary: "UPLOAD YOUR FILE"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % heroHeadlines.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const current = heroHeadlines[headlineIndex];

  return (
    <section className="relative min-h-[92vh] bg-gradient-to-b from-[#070e1c] via-[#09152b] to-[#070e1c] overflow-hidden pt-6 pb-16">
      
      {/* Background Registration Crosshairs & Mechanical Grid */}
      <div className="absolute inset-0 bg-press-grid opacity-25 pointer-events-none"></div>
      
      {/* Subtle Halftone Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Industrial Registration Crosshairs in Corners */}
      <div className="absolute top-6 left-6 hidden md:block text-slate-600 text-[10px] font-mono-tech">
        <div className="registration-mark mb-1"></div>
        <span>REG_ALIGN_TL [00.00]</span>
      </div>
      <div className="absolute top-6 right-6 hidden md:block text-slate-600 text-[10px] font-mono-tech text-right">
        <div className="registration-mark ml-auto mb-1"></div>
        <span>CMYK_PROFILE_V4 [9812039707]</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Editorial Headline Section */}
        <div className="text-center max-w-3xl mx-auto mb-8 pt-4">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={headlineIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="space-y-4"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-red-500/30 text-red-400 text-xs font-mono-tech uppercase tracking-widest shadow-inner">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                <span>{current.badge}</span>
              </div>

              {/* Display Heading */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                <span className="block text-slate-200">{current.line1}</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-400">
                  {current.line2}
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
                {current.sub}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Action CTAs */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/build"
              className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-xl shadow-red-600/30 flex items-center gap-2 transition-all hover:scale-105"
            >
              <Printer className="w-4 h-4" />
              <span>START PRINTING</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/upload"
              className="px-6 py-3 rounded-xl bg-[#0e1e38] hover:bg-[#132747] text-slate-200 hover:text-white font-bold text-sm border border-slate-700 flex items-center gap-2 transition-all"
            >
              <FileUp className="w-4 h-4 text-slate-400" />
              <span>UPLOAD YOUR DESIGN</span>
            </Link>
          </div>

          {/* Quick Production Highlights Strip */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-[11px] font-mono-tech text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              100% Waterproof Vinyl Stickers
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              80 GSM to 350 GSM Heavy Board
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Same-Day Dispatch &amp; Rohtak Counter Pickup
            </span>
          </div>

        </div>

        {/* The Live Interactive Machine Simulator */}
        <div className="mt-4">
          <PrinterMachine defaultJob="stickers" />
        </div>

      </div>

      {/* Bottom Technical Grid Indicator */}
      <div className="mt-12 text-center text-[10px] font-mono-tech text-slate-500 uppercase tracking-widest flex items-center justify-center gap-3">
        <span>[ASHOKA PRODUCTION LINE • ROHTAK FACILITY • DIRECT DISPATCH]</span>
      </div>
    </section>
  );
}
