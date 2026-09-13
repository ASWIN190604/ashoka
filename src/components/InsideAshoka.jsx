import React from "react";
import { 
  Building2, 
  Cpu, 
  Users, 
  Layers, 
  MapPin, 
  Phone, 
  Clock, 
  CheckCircle2,
  ShieldCheck
} from "lucide-react";
import { BUSINESS_CONFIG } from "../data/business";

export default function InsideAshoka() {
  return (
    <section id="about" className="py-20 bg-[#070e1c] relative overflow-hidden border-t border-b border-white/5">
      
      {/* Background Registration Crosshairs */}
      <div className="absolute inset-0 bg-press-grid opacity-15 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-500/30 text-red-400 text-xs font-mono-tech uppercase tracking-widest mb-2">
            <Building2 className="w-3.5 h-3.5" />
            <span>ESTABLISHED COMMERCIAL PRODUCTION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            INSIDE ASHOKA PRINTING PRESS
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            Rooted in Rohtak, Haryana. Combining industrial-scale digital engines with artisanal finishing and binding mastery.
          </p>
        </div>

        {/* 3 Editorial Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Pillar 1: Precision Machinery */}
          <div className="bg-gradient-to-b from-[#0c1830] to-[#070e1c] p-7 rounded-2xl border border-white/10 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-red-600/10 text-red-500 border border-red-500/20 flex items-center justify-center">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">
              Industrial Digital Presses
            </h3>
            <p className="text-xs text-slate-400 font-mono-tech leading-relaxed">
              Equipped with high-volume digital production engines capable of 2400 DPI micro-toner resolution and sub-millimeter front-to-back registration.
            </p>
          </div>

          {/* Pillar 2: Material Craft */}
          <div className="bg-gradient-to-b from-[#0c1830] to-[#070e1c] p-7 rounded-2xl border border-white/10 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-600/10 text-blue-400 border border-blue-500/20 flex items-center justify-center">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">
              Substrates &amp; Finishing Mastery
            </h3>
            <p className="text-xs text-slate-400 font-mono-tech leading-relaxed">
              Stocking 30+ specialty substrates from 80 GSM bond to 350 GSM heavy board, waterproof vinyl, golden foil stamping, and hydraulic lamination.
            </p>
          </div>

          {/* Pillar 3: Fast Regional & National Dispatch */}
          <div className="bg-gradient-to-b from-[#0c1830] to-[#070e1c] p-7 rounded-2xl border border-white/10 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-600/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">
              Verified Rohtak Facility
            </h3>
            <p className="text-xs text-slate-400 font-mono-tech leading-relaxed">
              Serving universities, hospitals, corporate enterprises, and local shops with express walk-in pickup and nationwide express courier dispatch.
            </p>
          </div>

        </div>

        {/* Facility Facts & Stats Strip */}
        <div className="bg-[#09152b] rounded-2xl p-6 sm:p-8 border border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {BUSINESS_CONFIG.statsPlaceholders.map((stat, sIdx) => (
            <div key={sIdx} className="space-y-1">
              <span className="text-2xl sm:text-3xl font-extrabold text-white block">
                {stat.value}
              </span>
              <span className="text-xs font-bold text-red-400 uppercase tracking-wider block">
                {stat.label}
              </span>
              <span className="text-[10px] font-mono-tech text-slate-400 block">
                {stat.subtext}
              </span>
            </div>
          ))}
        </div>

        {/* Verified Location Card */}
        <div className="mt-8 bg-[#060c18] rounded-2xl p-6 border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-tech text-slate-300">
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-red-500 shrink-0" />
            <div>
              <span className="text-white font-bold block">{BUSINESS_CONFIG.name}</span>
              <span className="text-slate-400">{BUSINESS_CONFIG.address.fullAddress}</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span>{BUSINESS_CONFIG.operatingHours.weekdays}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-400" />
              <span>+91 {BUSINESS_CONFIG.phone}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
