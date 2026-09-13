import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Layers, 
  FileText, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight,
  Flame,
  Droplet
} from "lucide-react";
import { Link } from "react-router-dom";

export const PAPER_STOCKS = [
  {
    gsm: 80,
    name: "80 GSM Executive Bond / Maplitho",
    type: "Document & Office Standard",
    thickness: "0.10 mm",
    opacity: "92%",
    texture: "Smooth Matte Uncoated",
    rigidity: "Flexible & Crisp",
    bestFor: "Photostat copying, university assignments, office invoices, letterheads, and legal briefs",
    recommendedFinishes: ["Stapling", "Plastic Spiral Binding", "2-Hole Punching"],
    colorHue: "#ffffff",
    sampleUsage: "Daily Academic & Corporate Duplication"
  },
  {
    gsm: 100,
    name: "100 GSM Royal Watermarked Bond",
    type: "Executive Stationary",
    thickness: "0.13 mm",
    opacity: "96%",
    texture: "Velvety Fine Grain Uncoated",
    rigidity: "Substantial Feel",
    bestFor: "Official corporate letterheads, high-end resumes, formal agreements, and presentation reports",
    recommendedFinishes: ["Hot Foil Stamping", "Executive Embossing", "Wiro Binding"],
    colorHue: "#fdfbf7",
    sampleUsage: "Official Corporate Identity & Resumes"
  },
  {
    gsm: 130,
    name: "130 GSM High-Gloss Art Paper",
    type: "Commercial Promotional",
    thickness: "0.14 mm",
    opacity: "98%",
    texture: "Mirror Gloss Coated",
    rigidity: "Supple Foldable",
    bestFor: "Marketing flyers, restaurant menus, product inserts, event handbill circulars, and catalogue pages",
    recommendedFinishes: ["Machine Folding", "Saddle Stitch Booklet", "Perforation"],
    colorHue: "#ffffff",
    sampleUsage: "Mass Promotional Flyers & Handouts"
  },
  {
    gsm: 170,
    name: "170 GSM Premium Satin Art Paper",
    type: "High-End Publication",
    thickness: "0.18 mm",
    opacity: "99%",
    texture: "Silk Matte Coated",
    rigidity: "Moderate Firmness",
    bestFor: "Tri-fold company profiles, art portfolios, photo brochures, and high-impact conference guides",
    recommendedFinishes: ["Creased Scoring", "Matte Lamination", "Double-Sided Duplex"],
    colorHue: "#fafaf9",
    sampleUsage: "Luxury Brochures & Presentations"
  },
  {
    gsm: 250,
    name: "250 GSM Semi-Rigid Art Board",
    type: "Durable Cover Stock",
    thickness: "0.26 mm",
    opacity: "100%",
    texture: "Ultra Smooth Heavyweight",
    rigidity: "Firm & Stand-Alone",
    bestFor: "Project report cover sheets, table tent cards, paperback book covers, greeting cards",
    recommendedFinishes: ["Thermal Gloss Lamination", "Crease Scoring", "Die-Cut Windows"],
    colorHue: "#ffffff",
    sampleUsage: "Report Covers & Desk Calendars"
  },
  {
    gsm: 300,
    name: "300 GSM Heavyweight Art Card",
    type: "Premium Business Standard",
    thickness: "0.33 mm",
    opacity: "100%",
    texture: "Dense Calendered Surface",
    rigidity: "Very Stiff & Sturdy",
    bestFor: "Visiting cards, garment hang tags, wedding invitation inserts, certificate boards",
    recommendedFinishes: ["Thermal Matte", "Velvet Touch", "Spot UV", "Corner Rounding"],
    colorHue: "#ffffff",
    sampleUsage: "Visiting Cards & Certificates"
  },
  {
    gsm: 350,
    name: "350 GSM Luxury Heavyweight Board",
    type: "Masterpiece Executive Stock",
    thickness: "0.42 mm",
    opacity: "100%",
    texture: "Ultra Dense Rigid Board",
    rigidity: "Rock Solid Board",
    bestFor: "Luxury founder business cards, high-end packaging boxes, VIP invitation suites, luxury retail tags",
    recommendedFinishes: ["Soft-Touch Velvet", "Gold / Rose Gold Foil", "Raised Spot UV"],
    colorHue: "#ffffff",
    sampleUsage: "Luxury Executive Cards & VIP Invites"
  }
];

export default function PaperLab() {
  const [selectedGsm, setSelectedGsm] = useState(300);

  const activeStock = PAPER_STOCKS.find((p) => p.gsm === selectedGsm) || PAPER_STOCKS[0];

  return (
    <section id="paper-lab" className="py-20 bg-[#070e1c] relative overflow-hidden">
      
      {/* Background Registration Crosshairs */}
      <div className="absolute inset-0 bg-press-grid opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-500/30 text-blue-400 text-xs font-mono-tech uppercase tracking-widest mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>SUBSTRATE &amp; MATERIAL SCIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            THE PAPER LAB
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            Touch and test material weights. From lightweight 80 GSM bond to rock-solid 350 GSM luxury board.
          </p>
        </div>

        {/* Tactile GSM Step Selector */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {PAPER_STOCKS.map((stock) => {
            const isSelected = selectedGsm === stock.gsm;
            return (
              <button
                key={stock.gsm}
                onClick={() => setSelectedGsm(stock.gsm)}
                className={`px-4 py-3 rounded-xl border text-center transition-all duration-200 cursor-pointer min-w-[100px] ${
                  isSelected
                    ? "bg-red-600 text-white border-red-500 shadow-xl shadow-red-600/20 scale-105"
                    : "bg-[#0a1326] border-white/10 text-slate-300 hover:bg-[#0f1d3a]"
                }`}
              >
                <span className="text-base sm:text-lg font-extrabold block">{stock.gsm}</span>
                <span className="text-[10px] font-mono-tech uppercase tracking-widest block opacity-80">GSM</span>
              </button>
            );
          })}
        </div>

        {/* Physical Paper Inspection Bench */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStock.gsm}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-5xl mx-auto bg-gradient-to-br from-[#0c1830] to-[#060b17] border-2 border-slate-700 rounded-3xl p-6 sm:p-10 shadow-2xl relative"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Physical 3D Paper Sheet Preview */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center">
                
                {/* Visual Sheet Physical Simulation */}
                <motion.div
                  animate={{ 
                    rotateY: [-4, 4, -4],
                    rotateX: [2, -2, 2]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  style={{
                    backgroundColor: activeStock.colorHue,
                    boxShadow: `0 ${activeStock.gsm / 10}px ${activeStock.gsm / 6}px rgba(0,0,0,0.5)`
                  }}
                  className="w-56 sm:w-64 h-72 sm:h-80 rounded-xl p-5 text-slate-900 border border-slate-300 relative flex flex-col justify-between"
                >
                  {/* Real Industrial Crop Marks */}
                  <div className="absolute top-2 left-2 w-3 h-3 crop-mark-tl"></div>
                  <div className="absolute top-2 right-2 w-3 h-3 crop-mark-tr"></div>
                  <div className="absolute bottom-2 left-2 w-3 h-3 crop-mark-bl"></div>
                  <div className="absolute bottom-2 right-2 w-3 h-3 crop-mark-br"></div>

                  <div className="text-[10px] font-mono-tech text-slate-500 border-b border-slate-300 pb-2">
                    <span className="font-bold text-red-700">MATERIAL SPEC SHEET</span>
                  </div>

                  <div className="text-center my-auto">
                    <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 block">
                      {activeStock.gsm} <span className="text-base text-red-600">GSM</span>
                    </span>
                    <span className="text-xs font-bold text-slate-700 block mt-1">
                      {activeStock.type}
                    </span>
                    <span className="text-[10px] font-mono-tech text-slate-500 block mt-0.5">
                      Thickness: {activeStock.thickness}
                    </span>
                  </div>

                  <div className="text-[9px] font-mono-tech text-slate-500 pt-2 border-t border-slate-300 flex justify-between">
                    <span>ASHOKA VERIFIED SUBSTRATE</span>
                    <span>100% VIRGIN FIBER</span>
                  </div>
                </motion.div>

                <span className="text-[11px] font-mono-tech text-slate-400 mt-4 text-center">
                  Rigidity Index: <strong className="text-white">{activeStock.rigidity}</strong>
                </span>
              </div>

              {/* Right Column: Material Science Profile */}
              <div className="lg:col-span-7 space-y-4">
                
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-red-600/20 border border-red-500/30 text-red-400 text-xs font-mono-tech font-bold uppercase">
                    {activeStock.gsm} GSM MATERIAL PROFILE
                  </span>
                  <span className="text-xs font-mono-tech text-slate-400">
                    {activeStock.type}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {activeStock.name}
                </h3>

                {/* Substrate Attributes Table */}
                <div className="grid grid-cols-2 gap-3 bg-[#070e1c] p-4 rounded-xl border border-white/5 text-xs font-mono-tech">
                  <div>
                    <span className="text-slate-500 block">Calibrated Thickness:</span>
                    <span className="text-white font-bold">{activeStock.thickness}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Optical Opacity:</span>
                    <span className="text-white font-bold">{activeStock.opacity} (Zero Bleed-Through)</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Surface Texture:</span>
                    <span className="text-slate-200 font-medium">{activeStock.texture}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Typical Volume:</span>
                    <span className="text-slate-200 font-medium">{activeStock.sampleUsage}</span>
                  </div>
                </div>

                {/* Best For */}
                <div>
                  <span className="text-xs font-mono-tech text-slate-400 uppercase tracking-wider block mb-1">
                    BEST SUITED FOR:
                  </span>
                  <p className="text-sm text-slate-200 leading-relaxed bg-white/5 p-3 rounded-lg border border-white/5">
                    {activeStock.bestFor}
                  </p>
                </div>

                {/* Recommended Inline Treatments */}
                <div>
                  <span className="text-xs font-mono-tech text-slate-400 uppercase tracking-wider block mb-2">
                    RECOMMENDED FINISHING TREATMENTS:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeStock.recommendedFinishes.map((fin, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-blue-600/10 border border-blue-500/30 text-xs text-blue-300 font-mono-tech flex items-center gap-1.5"
                      >
                        <CheckCircle2 className="w-3 h-3 text-blue-400" />
                        {fin}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA to Build with this paper */}
                <div className="pt-2">
                  <Link
                    to={`/build?paper=${activeStock.gsm}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-red-600/30 transition-all hover:scale-105"
                  >
                    <span>Configure Job with {activeStock.gsm} GSM Paper</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
