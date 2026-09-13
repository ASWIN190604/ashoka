import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  Scissors, 
  PackageCheck, 
  Layers, 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  ArrowRight,
  Droplet,
  Send
} from "lucide-react";
import { buildWhatsAppLink } from "../utils/whatsapp";

export default function StickerSimulator() {
  const [selectedShape, setSelectedShape] = useState("circle");
  const [simulationStage, setSimulationStage] = useState("idle"); // idle | printing | cutting | peeling | packed
  const [isSimulating, setIsSimulating] = useState(false);
  const [finishType, setFinishType] = useState("waterproof-gloss");

  const stickerShapes = [
    { id: "circle", name: "Die-Cut Circle", icon: "●", desc: "Perfect for bottle caps, jar lids, and round logos" },
    { id: "square", name: "Square / Box Badge", icon: "■", desc: "Clean 90° straight corners for cartons and boxes" },
    { id: "contour", name: "Custom Organic Contour", icon: "✦", desc: "Laser blade cuts exactly along your artwork shape" },
    { id: "label", name: "Commercial Jar Label", icon: "▰", desc: "Wrap-around product label for bottles & tins" }
  ];

  const startSimulation = () => {
    setIsSimulating(true);
    setSimulationStage("printing");

    // Stage 1: PRINT (0 - 1.2s)
    setTimeout(() => {
      setSimulationStage("cutting");
    }, 1200);

    // Stage 2: CUT (1.2s - 2.6s)
    setTimeout(() => {
      setSimulationStage("peeling");
    }, 2600);

    // Stage 3: PEEL (2.6s - 4.0s)
    setTimeout(() => {
      setSimulationStage("packed");
      setIsSimulating(false);
    }, 4000);
  };

  useEffect(() => {
    // Start gentle initial demonstration on mount
    startSimulation();
  }, []);

  const whatsappLink = buildWhatsAppLink({
    type: "sticker_order",
    productName: `Waterproof Custom Stickers (${selectedShape.toUpperCase()})`,
    quantity: "500 Pcs",
    size: "3 x 3 inch",
    paper: "180 Micron Waterproof White Vinyl",
    finish: finishType === "waterproof-gloss" ? "High Gloss UV Laminate" : "Velvet Matte Barrier",
    notes: `Simulated ${selectedShape} shape on Ashoka portal`
  });

  return (
    <section id="sticker-lab" className="py-20 bg-[#081122] relative overflow-hidden border-t border-b border-white/5">
      
      {/* Background Registration Crosshairs */}
      <div className="absolute inset-0 bg-press-grid opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-500/30 text-red-400 text-xs font-mono-tech uppercase tracking-widest mb-2">
            <Scissors className="w-3.5 h-3.5" />
            <span>CNC LASER SIMULATOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            STICKER &amp; DIE-CUT SIMULATOR
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            Experience our 4-stage precision production: CMYK Ink Laydown → Optical CNC Blade Cut → Peel Test → Moisture-Proof Packing.
          </p>
        </div>

        {/* Shape & Material Selector Controls */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto mb-8">
          {stickerShapes.map((shape) => {
            const isSelected = selectedShape === shape.id;
            return (
              <button
                key={shape.id}
                onClick={() => {
                  setSelectedShape(shape.id);
                  startSimulation();
                }}
                disabled={isSimulating}
                className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? "bg-red-600 text-white border-red-500 shadow-xl shadow-red-600/20 scale-102"
                    : "bg-[#0c1830] border-white/10 text-slate-300 hover:bg-[#12244a]"
                } ${isSimulating ? "opacity-70 cursor-not-allowed" : ""}`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg">{shape.icon}</span>
                  <h4 className="text-xs font-bold leading-tight">{shape.name}</h4>
                </div>
                <p className={`text-[10px] ${isSelected ? "text-red-100" : "text-slate-400"}`}>
                  {shape.desc}
                </p>
              </button>
            );
          })}
        </div>

        {/* Production Stage Breadcrumb Tracker */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 max-w-2xl mx-auto mb-8 text-xs font-mono-tech">
          {["printing", "cutting", "peeling", "packed"].map((stage, idx) => {
            const stageNames = ["1. PRINT INK", "2. CNC BLADE CUT", "3. PEEL TEST", "4. PACKED"];
            const isCurrent = simulationStage === stage;
            const isDone = 
              (stage === "printing" && simulationStage !== "idle") ||
              (stage === "cutting" && (simulationStage === "peeling" || simulationStage === "packed")) ||
              (stage === "peeling" && simulationStage === "packed") ||
              (stage === "packed" && simulationStage === "packed");

            return (
              <div 
                key={stage} 
                className={`px-3 py-1.5 rounded-lg border flex items-center gap-1.5 transition-all ${
                  isCurrent
                    ? "bg-amber-500/20 border-amber-500 text-amber-300 font-bold scale-105"
                    : isDone
                    ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                    : "bg-white/5 border-white/5 text-slate-500"
                }`}
              >
                {isDone && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
                <span>{stageNames[idx]}</span>
              </div>
            );
          })}
        </div>

        {/* The Visual Simulation Workspace Chamber */}
        <div className="max-w-3xl mx-auto bg-gradient-to-b from-[#0e1b38] to-[#081022] rounded-2xl p-6 sm:p-10 border-2 border-slate-700 shadow-2xl relative">
          
          {/* Subtle Halftone Pattern */}
          <div className="absolute inset-0 bg-halftone opacity-30 pointer-events-none"></div>

          {/* Real Vinyl Sheet Simulation Surface */}
          <div className="relative min-h-[300px] flex items-center justify-center">
            
            <div className="w-72 sm:w-80 h-72 sm:h-80 paper-texture rounded-2xl p-6 relative flex items-center justify-center shadow-2xl border border-slate-300">
              
              {/* Corner Crop Marks */}
              <div className="absolute top-2 left-2 w-3 h-3 crop-mark-tl"></div>
              <div className="absolute top-2 right-2 w-3 h-3 crop-mark-tr"></div>
              <div className="absolute bottom-2 left-2 w-3 h-3 crop-mark-bl"></div>
              <div className="absolute bottom-2 right-2 w-3 h-3 crop-mark-br"></div>

              {/* Optical Registration Dots for CNC Plotter */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-black"></div>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-black"></div>
              <div className="absolute left-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-black"></div>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-black"></div>

              {/* STAGE 1: PRINTING INK PASS */}
              {simulationStage === "printing" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center"
                >
                  <div className="w-44 h-44 rounded-full bg-gradient-to-tr from-red-600 via-rose-500 to-amber-500 flex flex-col items-center justify-center text-white p-4 shadow-xl border-2 border-dashed border-white animate-pulse">
                    <Droplet className="w-8 h-8 mb-1" />
                    <span className="text-xs font-bold uppercase tracking-wider">ASHOKA PRESS</span>
                    <span className="text-[10px] font-mono-tech">100% WATERPROOF</span>
                  </div>
                  <span className="text-xs font-mono-tech text-slate-600 mt-3 block">
                    LAYING DOWN 4-COLOR CMYK PIGMENT...
                  </span>
                </motion.div>
              )}

              {/* STAGE 2: CNC LASER BLADE CUTTING PATH */}
              {simulationStage === "cutting" && (
                <div className="relative flex flex-col items-center justify-center">
                  <div className={`w-44 h-44 flex flex-col items-center justify-center text-white p-4 shadow-xl relative ${
                    selectedShape === "circle" ? "rounded-full bg-[#0c2364]" : 
                    selectedShape === "square" ? "rounded-xl bg-[#0c2364]" :
                    selectedShape === "contour" ? "rounded-[38%_62%_63%_37%/41%_44%_56%_59%] bg-[#9e1f24]" :
                    "rounded-2xl bg-[#0c2364]"
                  }`}>
                    {/* Active Dashed Cutting Line */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
                      <rect x="2" y="2" width="96" height="96" rx={selectedShape === "circle" ? "50" : "12"} fill="none" stroke="#ef4444" strokeWidth="3" className="cut-path-anim" />
                    </svg>

                    <Scissors className="w-8 h-8 mb-1 text-amber-300 animate-bounce" />
                    <span className="text-xs font-bold uppercase tracking-wider">ASHOKA PROOF</span>
                    <span className="text-[9px] font-mono-tech text-amber-200">CNC CUTTING...</span>
                  </div>
                  <span className="text-xs font-mono-tech text-red-600 font-bold mt-3 block">
                    OPTICAL EYE TRACKING 0.01MM CONTOUR
                  </span>
                </div>
              )}

              {/* STAGE 3: PEELING ADHESIVE SIMULATION */}
              {simulationStage === "peeling" && (
                <motion.div
                  initial={{ rotateX: 0, rotateY: 0 }}
                  animate={{ rotateX: -15, rotateY: 20 }}
                  transition={{ duration: 0.8 }}
                  className="relative flex flex-col items-center justify-center cursor-pointer"
                >
                  <div className={`w-44 h-44 shadow-2xl flex flex-col items-center justify-center text-white p-4 relative transform transition-transform ${
                    selectedShape === "circle" ? "rounded-full bg-gradient-to-tr from-red-600 to-rose-700" :
                    selectedShape === "square" ? "rounded-xl bg-gradient-to-tr from-blue-900 to-indigo-800" :
                    "rounded-3xl bg-gradient-to-tr from-red-700 to-amber-700"
                  }`}>
                    {/* Peeling Corner Visual Effect */}
                    <div className="absolute top-0 right-0 w-12 h-12 bg-slate-200 rounded-bl-3xl shadow-md border-l border-b border-slate-400"></div>
                    
                    <Sparkles className="w-8 h-8 mb-1 text-yellow-300" />
                    <span className="text-xs font-extrabold uppercase tracking-wider">EASY-PEEL VINYL</span>
                    <span className="text-[10px] font-mono-tech text-slate-200">NO RESIDUE GLUE</span>
                  </div>
                  <span className="text-xs font-mono-tech text-emerald-700 font-bold mt-3 block">
                    PEELING ADHESIVE BACKING...
                  </span>
                </motion.div>
              )}

              {/* STAGE 4: PACKED & READY FOR DISPATCH */}
              {simulationStage === "packed" && (
                <motion.div
                  initial={{ scale: 0.85, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center"
                >
                  <div className="w-44 h-44 rounded-2xl bg-emerald-700 text-white flex flex-col items-center justify-center p-4 shadow-2xl border-4 border-emerald-400">
                    <PackageCheck className="w-12 h-12 mb-2 text-white" />
                    <span className="text-xs font-extrabold uppercase tracking-wider">YOUR STICKERS</span>
                    <span className="text-sm font-bold text-amber-300">ARE READY!</span>
                    <span className="text-[9px] font-mono-tech mt-1 text-emerald-100">PACKED &amp; SEALED</span>
                  </div>
                  <span className="text-xs font-mono-tech text-emerald-700 font-bold mt-3 block">
                    READY FOR ROHTAK PICKUP / COURIER
                  </span>
                </motion.div>
              )}

            </div>

          </div>

          {/* Machine Controls & WhatsApp Action */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <button
              onClick={startSimulation}
              disabled={isSimulating}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 text-xs font-mono-tech cursor-pointer disabled:opacity-50"
            >
              <RotateCcw className={`w-4 h-4 ${isSimulating ? "animate-spin" : ""}`} />
              <span>RE-RUN CUT SIMULATION</span>
            </button>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-red-600/30 transition-all hover:scale-105"
            >
              <Send className="w-4 h-4" />
              <span>GET A STICKER QUOTE ON WHATSAPP</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
