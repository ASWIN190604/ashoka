import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  BookOpen, 
  FileText, 
  CheckCircle2, 
  Layers, 
  Award, 
  Clock, 
  Send,
  ArrowRight
} from "lucide-react";
import { buildWhatsAppLink } from "../utils/whatsapp";

export const STUDENT_PACKAGES = [
  {
    id: "project-report",
    title: "Major / Minor Project Report",
    subtitle: "MDU / Rohtak University Guidelines Ready",
    icon: BookOpen,
    badge: "Most Popular",
    priceRange: "Special Student Rate",
    turnaround: "20 - 30 Mins",
    features: [
      "75 / 85 GSM JK Bright Bond Paper",
      "High-Contrast B/W + Razor Sharp Colour Graphs",
      "Gloss 250 GSM Front Cover Page",
      "PVC Spiral or Hardbound Golden Lettering",
      "Free PDF Pre-Flight Alignment Check"
    ],
    link: "/build?product=project-reports"
  },
  {
    id: "thesis-hardbound",
    title: "M.Tech / PhD Hardbound Thesis",
    subtitle: "Executive Golden Embossed Leatherette",
    icon: Award,
    badge: "Executive Standard",
    priceRange: "Special Student Rate",
    turnaround: "Same Day / Next Morning",
    features: [
      "Deep Maroon / Navy Blue Hardbound Book",
      "Golden / Silver Hot Foil Embossing",
      "Double Sided 85 GSM Bond Paper",
      "Section Ribbons & Certificate Inserts",
      "Complimentary Synopsis Booklet"
    ],
    link: "/build?product=project-reports"
  },
  {
    id: "resume-pack",
    title: "Placement Resume & Portfolio Pack",
    subtitle: "Interview-Winning Heavy Paper",
    icon: FileText,
    badge: "Placement Season",
    priceRange: "Pocket Friendly",
    turnaround: "10 Mins Express",
    features: [
      "100 GSM Royal Watermarked Paper",
      "Zero Smudge Laser Sharp Text",
      "10x to 50x High-End Copies Pack",
      "Protective Document Folder Included"
    ],
    link: "/upload"
  }
];

export default function StudentHubSection() {
  return (
    <section id="student-hub" className="py-20 bg-[#070e1c] relative overflow-hidden border-t border-b border-white/5">
      
      {/* Background Registration Crosshairs */}
      <div className="absolute inset-0 bg-press-grid opacity-15 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono-tech uppercase tracking-widest mb-2">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>ACADEMIC &amp; COLLEGE PRINT DESK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              STUDENT PRINT HUB
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mt-1">
              Engineered for MDU, engineering colleges, medical institutes, and polytechnics in Rohtak &amp; Haryana. Express 20-minute turnaround.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono-tech text-amber-300 bg-amber-500/10 px-3 py-1.5 rounded-lg border border-amber-500/30 w-fit">
            <Clock className="w-4 h-4 text-amber-400" />
            <span>WALK-IN READY IN 20 MINS</span>
          </div>
        </div>

        {/* 3 Student Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STUDENT_PACKAGES.map((pkg) => {
            const Icon = pkg.icon;
            return (
              <div
                key={pkg.id}
                className="bg-gradient-to-b from-[#0c1830] to-[#070e1c] border border-white/10 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-amber-500/50 hover:shadow-2xl hover:shadow-amber-500/10 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono-tech bg-amber-500/20 text-amber-300 px-2.5 py-0.5 rounded-full border border-amber-500/30 font-bold uppercase">
                      {pkg.badge}
                    </span>
                    <span className="text-xs font-mono-tech text-emerald-400 font-bold">
                      {pkg.turnaround}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/30 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1">
                    {pkg.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono-tech mb-5">
                    {pkg.subtitle}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-white/5 mb-6">
                    {pkg.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-2">
                  <Link
                    to={pkg.link}
                    className="w-full py-2.5 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-red-600/30 transition-all hover:scale-102"
                  >
                    <span>PRINT MY PROJECT NOW</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
