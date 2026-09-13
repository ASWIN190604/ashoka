import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Cpu, 
  Layers, 
  Maximize, 
  ShieldCheck, 
  BookOpen, 
  Camera, 
  CheckCircle2, 
  Zap, 
  ArrowRight,
  Sparkles
} from "lucide-react";
import { PRINTING_MACHINES } from "../data/machines";

export default function PrintingWorkshop() {
  const [selectedMachineId, setSelectedMachineId] = useState(PRINTING_MACHINES[0].id);

  const selectedMachine = PRINTING_MACHINES.find(m => m.id === selectedMachineId) || PRINTING_MACHINES[0];

  const getMachineIcon = (id) => {
    switch (id) {
      case "digital-press": return Cpu;
      case "sticker-plotter": return Layers;
      case "wide-format-plotter": return Maximize;
      case "hydraulic-laminator": return ShieldCheck;
      case "auto-binding-press": return BookOpen;
      case "photo-lab-printer": return Camera;
      default: return Cpu;
    }
  };

  return (
    <section id="workshop" className="py-20 bg-[#070e1c] relative overflow-hidden border-b border-white/5">
      
      {/* Background Registration Crosshairs */}
      <div className="absolute inset-0 bg-press-grid opacity-15 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-500/30 text-blue-400 text-xs font-mono-tech uppercase tracking-widest mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 status-indicator-live"></span>
              <span>INSIDE OUR ROHTAK PRESS FACILITY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              INTERACTIVE PRINTING WORKSHOP
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mt-1">
              Explore the heavy-duty industrial machinery powering Ashoka's daily production line. Hover and inspect technical capabilities.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono-tech text-slate-400 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 w-fit">
            <Zap className="w-4 h-4 text-amber-400" />
            <span>6 HEAVY PRODUCTION UNITS ONLINE</span>
          </div>
        </div>

        {/* Machine Cards Selection Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {PRINTING_MACHINES.map((machine, index) => {
            const Icon = getMachineIcon(machine.id);
            const isSelected = selectedMachineId === machine.id;
            return (
              <div
                key={machine.id}
                onClick={() => setSelectedMachineId(machine.id)}
                className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer relative group ${
                  isSelected
                    ? "bg-gradient-to-b from-[#132342] to-[#0a1224] border-red-500 shadow-xl shadow-red-500/10 scale-[1.02]"
                    : "bg-[#091326] border-white/10 hover:border-white/20 hover:bg-[#0d1c38]"
                }`}
              >
                {/* Status Indicator */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono-tech text-slate-500">
                    UNIT #0{index + 1}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono-tech text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 status-indicator-live"></span>
                    {machine.status}
                  </span>
                </div>

                {/* Machine Name & Category */}
                <div className="flex items-start gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                    isSelected ? "bg-red-600 text-white shadow-lg" : "bg-white/5 text-slate-300"
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white group-hover:text-red-400 transition-colors leading-snug">
                      {machine.name}
                    </h3>
                    <p className="text-[11px] font-mono-tech text-slate-400 mt-0.5">
                      {machine.brandModel}
                    </p>
                  </div>
                </div>

                {/* Micro Specs */}
                <div className="space-y-1 text-[11px] font-mono-tech text-slate-400 pt-2 border-t border-white/5">
                  <div className="flex justify-between">
                    <span>Speed:</span>
                    <span className="text-slate-200 font-medium">{machine.speed}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Resolution:</span>
                    <span className="text-slate-200 font-medium">{machine.maxResolution}</span>
                  </div>
                </div>

                <div className="mt-4 pt-2 flex items-center justify-between text-xs font-bold text-red-400 group-hover:text-red-300">
                  <span>{isSelected ? "Currently Inspecting" : "Click to Inspect Engine"}</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Deep Dive Modal / Technical Inspection Chamber */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedMachine.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-[#0c1830] via-[#070e1c] to-[#040812] border-2 border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden"
          >
            {/* Background Machine Blueprint Grid */}
            <div className="absolute inset-0 bg-press-grid opacity-20 pointer-events-none"></div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Machine Specs & Capabilities */}
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-red-600/20 border border-red-500/30 text-red-400 text-xs font-mono-tech font-bold uppercase">
                    {selectedMachine.category}
                  </span>
                  <span className="text-xs font-mono-tech text-slate-400">
                    {selectedMachine.brandModel}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {selectedMachine.name}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedMachine.description}
                </p>

                {/* Key Technical Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                  <div className="bg-[#060b17] p-3 rounded-xl border border-white/5">
                    <span className="text-[10px] font-mono-tech text-slate-500 uppercase block">BEST SUITED FOR:</span>
                    <span className="text-xs text-slate-200 font-medium">{selectedMachine.bestFor}</span>
                  </div>
                  <div className="bg-[#060b17] p-3 rounded-xl border border-white/5">
                    <span className="text-[10px] font-mono-tech text-slate-500 uppercase block">MEDIA COMPATIBILITY:</span>
                    <span className="text-xs text-slate-200 font-medium">{selectedMachine.mediaCapability}</span>
                  </div>
                  <div className="bg-[#060b17] p-3 rounded-xl border border-white/5">
                    <span className="text-[10px] font-mono-tech text-slate-500 uppercase block">MAX SHEET / ROLL SIZE:</span>
                    <span className="text-xs text-slate-200 font-medium">{selectedMachine.maxSheetSize}</span>
                  </div>
                  <div className="bg-[#060b17] p-3 rounded-xl border border-white/5">
                    <span className="text-[10px] font-mono-tech text-slate-500 uppercase block">COLOR / GAMUT PROFILE:</span>
                    <span className="text-xs text-slate-200 font-medium">{selectedMachine.colorGamut}</span>
                  </div>
                </div>

                {/* Supported Finishes Pills */}
                <div className="pt-2">
                  <span className="text-xs font-mono-tech text-slate-400 block mb-2">INLINE FINISHES SUPPORTED:</span>
                  <div className="flex flex-wrap gap-2">
                    {selectedMachine.finishesSupported.map((finish, fIdx) => (
                      <span
                        key={fIdx}
                        className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-slate-300 font-mono-tech flex items-center gap-1.5"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        {finish}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Machine Action Panel */}
              <div className="lg:col-span-4 bg-[#050a14] rounded-xl p-6 border border-slate-800 space-y-5 text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-tr from-red-600 to-navy-900 flex items-center justify-center shadow-lg border border-red-500/30">
                  <Cpu className="w-8 h-8 text-white" />
                </div>

                <div>
                  <h4 className="text-base font-bold text-white">
                    Produce on This Machine
                  </h4>
                  <p className="text-xs text-slate-400 font-mono-tech mt-1">
                    Route your custom print job directly to the {selectedMachine.brandModel}.
                  </p>
                </div>

                <div className="space-y-2">
                  <Link
                    to="/build"
                    className="w-full py-3 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-red-600/30 transition-all hover:scale-102"
                  >
                    <span>Configure Job for This Press</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    to="/upload"
                    className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 font-semibold text-xs border border-white/10 flex items-center justify-center gap-2 transition-all"
                  >
                    <span>Upload Design File Directly</span>
                  </Link>
                </div>

                <div className="text-[10px] font-mono-tech text-slate-500">
                  Daily calibration conducted at 08:30 IST • ISO CMYK Standard
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
