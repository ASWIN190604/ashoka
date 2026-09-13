import React from "react";
import { motion } from "framer-motion";
import { 
  FileCheck, 
  Search, 
  Printer, 
  Scissors, 
  Layers, 
  ShieldCheck, 
  Package, 
  Truck,
  ArrowRight
} from "lucide-react";

export const PRODUCTION_STAGES = [
  { step: "01", name: "FILE RECEIVED", icon: FileCheck, desc: "Artwork / PDF ingested into raster image processor." },
  { step: "02", name: "DESIGN CHECK", icon: Search, desc: "300 DPI resolution, bleed & CMYK profile audit." },
  { step: "03", name: "PRINTING", icon: Printer, desc: "High-speed multi-pass digital press laydown." },
  { step: "04", name: "CNC CUTTING", icon: Scissors, desc: "Laser optical eye contour blade slicing." },
  { step: "05", name: "LAMINATION", icon: Layers, desc: "Thermal hydraulic barrier bonding & binding." },
  { step: "06", name: "QUALITY CHECK", icon: ShieldCheck, desc: "Manual color balance & edge trim inspection." },
  { step: "07", name: "PACKED", icon: Package, desc: "Moisture-sealed protective dispatch wrap." },
  { step: "08", name: "DISPATCHED", icon: Truck, desc: "Counter pickup in Rohtak or express courier." }
];

export default function OrderJourney() {
  return (
    <section id="journey" className="py-20 bg-[#070e1c] relative overflow-hidden border-t border-b border-white/5">
      
      {/* Background Registration Crosshairs */}
      <div className="absolute inset-0 bg-press-grid opacity-15 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-500/30 text-red-400 text-xs font-mono-tech uppercase tracking-widest mb-2">
            <span>DIGITAL CONVEYOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            YOUR PRINT JOURNEY
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            How your job moves across our synchronized 8-stage production floor in Rohtak.
          </p>
        </div>

        {/* 8-Stage Production Flow Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
          {PRODUCTION_STAGES.map((stage, idx) => {
            const Icon = stage.icon;
            return (
              <motion.div
                key={stage.step}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="bg-gradient-to-b from-[#0c1830] to-[#070e1c] p-5 rounded-2xl border border-white/10 relative group hover:border-red-500/50 hover:shadow-xl hover:shadow-red-500/5 transition-all"
              >
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono-tech font-bold text-red-500 bg-red-500/10 px-2.5 py-1 rounded-md border border-red-500/20">
                    STAGE {stage.step}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-emerald-400 status-indicator-live"></div>
                </div>

                {/* Icon */}
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-200 mb-3 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </div>

                {/* Name & Desc */}
                <h3 className="text-sm font-extrabold text-white mb-1 tracking-tight">
                  {stage.name}
                </h3>
                <p className="text-xs text-slate-400 font-mono-tech leading-relaxed">
                  {stage.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-12 bg-gradient-to-r from-[#09152b] via-[#102347] to-[#09152b] p-6 rounded-2xl border border-white/10 text-center max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <span className="text-xs font-mono-tech text-amber-400 font-bold uppercase block">
              ASHOKA ZERO-DEFECT QUALITY PROMISE
            </span>
            <p className="text-xs text-slate-300 mt-0.5">
              If your print has registration misalignment, banding, or trimming errors, we reprint immediately at zero cost.
            </p>
          </div>
          <div className="text-xs font-mono-tech text-emerald-400 bg-emerald-500/10 px-4 py-2 rounded-xl border border-emerald-500/20 shrink-0">
            100% REPRINT GUARANTEE
          </div>
        </div>

      </div>
    </section>
  );
}
