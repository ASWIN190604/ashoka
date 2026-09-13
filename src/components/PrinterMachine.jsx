import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Play, 
  RotateCcw, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  Cpu, 
  Flame, 
  Droplet,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

export default function PrinterMachine({ defaultJob = "stickers", compact = false }) {
  const [activeJob, setActiveJob] = useState(defaultJob);
  const [isPrinting, setIsPrinting] = useState(false);
  const [printStage, setPrintStage] = useState("idle"); // idle | feeding | printing | emerging | done
  const [cmykLevels, setCmykLevels] = useState({ c: 96, m: 92, y: 98, k: 95 });

  const printJobs = {
    stickers: {
      title: "Waterproof Vinyl Die-Cut Stickers",
      type: "Packaging & Branding",
      specs: "180 Micron Vinyl • Gloss UV Laminated • CNC Contour Cut",
      badgeColor: "bg-red-600",
      accentBorder: "border-red-500",
      previewItems: [
        { name: "Coffee Roasters", shape: "circle", color: "#b21f2d", label: "BATCH 01" },
        { name: "Ashoka Premium", shape: "badge", color: "#0c2364", label: "WATERPROOF" },
        { name: "Organic Honey", shape: "hexagon", color: "#d97706", label: "100% PURE" }
      ],
      link: "/build?product=stickers",
      turnaround: "Same Day Dispatch"
    },
    cards: {
      title: "350 GSM Velvet Soft-Touch Visiting Cards",
      type: "Corporate Identity",
      specs: "350 GSM Art Card • Thermal Matte + Spot UV • Double Sided",
      badgeColor: "bg-blue-600",
      accentBorder: "border-blue-500",
      previewItems: [
        { name: "Executive Card", shape: "rect", color: "#0b1f3a", label: "CHIEF EXECUTIVE" },
        { name: "Studio Minimal", shape: "rect", color: "#1e293b", label: "CREATIVE DIRECTOR" }
      ],
      link: "/build?product=business-cards",
      turnaround: "24-Hour Express"
    },
    thesis: {
      title: "Academic Project & Thesis Hardbound",
      type: "Rohtak University Standard",
      specs: "85 GSM Bond Paper • Golden Embossed Cover • Spiral/Hardbound",
      badgeColor: "bg-amber-600",
      accentBorder: "border-amber-500",
      previewItems: [
        { name: "B.Tech Final Thesis", shape: "book", color: "#78350f", label: "PROJECT REPORT" },
        { name: "Medical Research", shape: "book", color: "#064e3b", label: "DEPARTMENT SYNOPSIS" }
      ],
      link: "/students",
      turnaround: "20 Mins Walk-in Ready"
    },
    banner: {
      title: "High-Glow Star Flex Outdoor Banner",
      type: "Commercial Signage",
      specs: "340 GSM Star Flex • Eco-Solvent UV Inks • Metal Eyelets",
      badgeColor: "bg-emerald-600",
      accentBorder: "border-emerald-500",
      previewItems: [
        { name: "Grand Opening Flex", shape: "banner", color: "#047857", label: "OUTDOOR DURABLE" }
      ],
      link: "/build?product=flex-banners",
      turnaround: "Same Day Print"
    }
  };

  const handleTriggerPrint = (jobKey) => {
    setActiveJob(jobKey);
    setIsPrinting(true);
    setPrintStage("feeding");

    setTimeout(() => setPrintStage("printing"), 600);
    setTimeout(() => setPrintStage("emerging"), 1400);
    setTimeout(() => {
      setPrintStage("done");
      setIsPrinting(false);
    }, 2800);
  };

  useEffect(() => {
    // Initial gentle animation on mount
    handleTriggerPrint(defaultJob);
  }, []);

  const job = printJobs[activeJob] || printJobs.stickers;

  return (
    <div className={`w-full ${compact ? "max-w-xl" : "max-w-4xl"} mx-auto font-sans`}>
      
      {/* Top Machine Selector Buttons */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4 bg-[#091224]/90 p-2 rounded-xl border border-white/10">
        <div className="flex items-center gap-2 text-xs font-mono-tech text-slate-400 pl-2">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
          <span>SELECT TEST MATERIAL:</span>
        </div>
        <div className="flex items-center gap-1.5 flex-wrap">
          {Object.keys(printJobs).map((key) => {
            const isSelected = activeJob === key;
            return (
              <button
                key={key}
                onClick={() => handleTriggerPrint(key)}
                disabled={isPrinting}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  isSelected
                    ? "bg-red-600 text-white shadow-lg shadow-red-600/30 scale-105"
                    : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white"
                } ${isPrinting ? "opacity-60 cursor-not-allowed" : ""}`}
              >
                {key}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Digital Press Enclosure */}
      <div className="relative rounded-2xl bg-gradient-to-b from-[#111c33] to-[#080e1c] border-2 border-slate-700/80 shadow-2xl p-4 sm:p-6 overflow-hidden">
        
        {/* Subtle Registration Grid Background */}
        <div className="absolute inset-0 bg-press-grid opacity-30 pointer-events-none"></div>

        {/* Industrial Machine Header & Gauges */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-navy-900 flex items-center justify-center border border-red-400/40 shadow-inner">
              <Cpu className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-widest text-white">
                  ASHOKA DIGITAL PRESS PRO-8000
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono-tech bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  ONLINE
                </span>
              </div>
              <p className="text-[11px] font-mono-tech text-slate-400">
                2400 DPI High-Definition Multi-Pass Micro-Ink Engine
              </p>
            </div>
          </div>

          {/* Real-Time CMYK Tank Levels */}
          <div className="flex items-center gap-2 bg-[#050914] px-3 py-1.5 rounded-lg border border-white/10 text-[10px] font-mono-tech">
            <span className="text-slate-500 mr-1">INK SYSTEM:</span>
            <div className="flex items-center gap-1.5">
              <span className="flex items-center gap-0.5 text-cyan-400 font-bold">
                <span className="w-2.5 h-2.5 rounded-sm bg-cyan-400 inline-block"></span> C {cmykLevels.c}%
              </span>
              <span className="flex items-center gap-0.5 text-pink-500 font-bold">
                <span className="w-2.5 h-2.5 rounded-sm bg-pink-500 inline-block"></span> M {cmykLevels.m}%
              </span>
              <span className="flex items-center gap-0.5 text-yellow-400 font-bold">
                <span className="w-2.5 h-2.5 rounded-sm bg-yellow-400 inline-block"></span> Y {cmykLevels.y}%
              </span>
              <span className="flex items-center gap-0.5 text-slate-300 font-bold">
                <span className="w-2.5 h-2.5 rounded-sm bg-slate-800 border border-slate-600 inline-block"></span> K {cmykLevels.k}%
              </span>
            </div>
          </div>
        </div>

        {/* Machine Chassis / Production Chamber */}
        <div className="relative mt-5 p-4 sm:p-6 bg-[#060a14] rounded-xl border border-slate-800">
          
          {/* Top Roller Assembly */}
          <div className="relative h-12 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-lg border border-slate-700 flex items-center justify-around px-4 overflow-hidden">
            {/* Spinning Roller Visuals */}
            {[1, 2, 3, 4, 5, 6].map((roller) => (
              <div key={roller} className="flex flex-col items-center">
                <div 
                  className={`w-7 h-7 rounded-full border-2 border-slate-500 bg-gradient-to-tr from-slate-700 via-slate-600 to-slate-800 flex items-center justify-center ${
                    isPrinting ? "animate-roller" : ""
                  }`}
                >
                  <div className="w-1 h-5 bg-red-400/80 rounded-full transform rotate-45"></div>
                </div>
                <span className="text-[8px] font-mono-tech text-slate-500 mt-0.5">R0{roller}</span>
              </div>
            ))}

            {/* Printhead Laser Beam during printing */}
            {isPrinting && (
              <motion.div
                initial={{ left: "5%" }}
                animate={{ left: ["5%", "95%", "15%", "85%", "5%"] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 bottom-0 w-8 bg-gradient-to-r from-transparent via-red-500/50 to-transparent pointer-events-none"
              >
                <div className="w-full h-full border-b-2 border-red-400 shadow-[0_0_15px_#ef4444]"></div>
              </motion.div>
            )}
          </div>

          {/* Paper Output Slot & Emerging Ejection Plate */}
          <div className="relative min-h-[290px] mt-4 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-[#0a1122] to-slate-950 rounded-xl p-4 border border-dashed border-slate-800">
            
            {/* Upper Feed Slot */}
            <div className="w-3/4 h-2.5 bg-black rounded-full shadow-inner border border-slate-800 mb-2"></div>

            {/* The Ejected Printed Physical Sheet */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeJob + printStage}
                initial={{ y: -60, opacity: 0, scale: 0.95 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 40, opacity: 0 }}
                transition={{ type: "spring", stiffness: 140, damping: 18 }}
                className="w-full max-w-lg paper-texture rounded-xl text-slate-900 p-5 sm:p-6 relative shadow-2xl border border-slate-300"
              >
                {/* Real Crop Marks at Corners */}
                <div className="absolute top-2 left-2 w-3 h-3 crop-mark-tl"></div>
                <div className="absolute top-2 right-2 w-3 h-3 crop-mark-tr"></div>
                <div className="absolute bottom-2 left-2 w-3 h-3 crop-mark-bl"></div>
                <div className="absolute bottom-2 right-2 w-3 h-3 crop-mark-br"></div>

                {/* Sheet Top Technical Strip */}
                <div className="flex items-center justify-between text-[10px] font-mono-tech text-slate-500 pb-2 border-b border-slate-300/80">
                  <span className="flex items-center gap-1 font-bold text-red-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                    PASS #01 • CMYK 300DPI
                  </span>
                  <span>REGISTRATION: 0.02MM OK</span>
                  <span>JOB: #{activeJob.toUpperCase()}</span>
                </div>

                {/* Sheet Content Body */}
                <div className="my-4">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className={`inline-block text-[10px] font-bold text-white px-2 py-0.5 rounded ${job.badgeColor} uppercase tracking-wider mb-1`}>
                        {job.type}
                      </span>
                      <h3 className="text-base sm:text-lg font-extrabold text-slate-900 leading-tight">
                        {job.title}
                      </h3>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-mono-tech text-slate-500 block">EST. TURNAROUND</span>
                      <span className="text-xs font-bold text-emerald-700">{job.turnaround}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 font-mono-tech mt-2 bg-slate-100 p-2 rounded border border-slate-200">
                    {job.specs}
                  </p>

                  {/* Simulated Product Visuals */}
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    {job.previewItems.map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-white rounded-lg p-2.5 border border-slate-200 shadow-sm flex flex-col items-center text-center group hover:border-red-400 transition-colors"
                      >
                        <div 
                          className="w-10 h-10 rounded-full flex items-center justify-center text-white text-[9px] font-bold shadow-md mb-1.5"
                          style={{ backgroundColor: item.color }}
                        >
                          {item.shape === "circle" ? "●" : item.shape === "book" ? "📖" : "✦"}
                        </div>
                        <span className="text-[11px] font-bold text-slate-800 leading-tight">
                          {item.name}
                        </span>
                        <span className="text-[9px] font-mono-tech text-slate-500 mt-0.5">
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sheet Bottom Footer & Action */}
                <div className="pt-2 border-t border-slate-300/80 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono-tech text-slate-500">
                    <span className="w-2 h-2 bg-red-600 rounded-sm"></span>
                    <span className="w-2 h-2 bg-blue-900 rounded-sm"></span>
                    <span className="w-2 h-2 bg-amber-500 rounded-sm"></span>
                    <span>ASHOKA VERIFIED PROOF</span>
                  </div>

                  <Link
                    to={job.link}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded text-xs font-bold transition-all hover:gap-1.5"
                  >
                    <span>Configure This Print</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>
        </div>

        {/* Machine Control Tray Footer */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs font-mono-tech text-slate-400 pt-3 border-t border-white/5">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className={`w-2 h-2 rounded-full ${isPrinting ? "bg-amber-400 animate-ping" : "bg-emerald-400"}`}></span>
              STATUS: {isPrinting ? "PROCESSING RASTER..." : "PRESS IDLE / READY"}
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="hidden sm:inline">OUTPUT: ROHTAK HQ WORKSHOP</span>
          </div>

          <button
            onClick={() => handleTriggerPrint(activeJob)}
            disabled={isPrinting}
            className="flex items-center gap-1.5 px-3 py-1 rounded bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 cursor-pointer disabled:opacity-50"
          >
            <RotateCcw className={`w-3.5 h-3.5 ${isPrinting ? "animate-spin" : ""}`} />
            <span>RE-FEED TEST SHEET</span>
          </button>
        </div>

      </div>
    </div>
  );
}
