import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Printer, 
  Layers, 
  BookOpen, 
  CreditCard, 
  Maximize, 
  Book, 
  ShieldCheck, 
  Copy, 
  ArrowRight,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { SERVICES } from "../data/services";
import { buildQuickWhatsAppMessage } from "../utils/whatsapp";

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case "Layers": return Layers;
      case "Printer": return Printer;
      case "BookOpen": return BookOpen;
      case "CreditCard": return CreditCard;
      case "Maximize": return Maximize;
      case "Book": return Book;
      case "ShieldCheck": return ShieldCheck;
      case "Copy": return Copy;
      default: return Printer;
    }
  };

  return (
    <div className="py-16 bg-[#070e1c] min-h-screen text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-500/30 text-red-400 text-xs font-mono-tech uppercase tracking-widest mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>FULL PRODUCTION CATALOG</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            PRINTING &amp; PHOTOSTAT SERVICES
          </h1>
          <p className="text-slate-400 text-base mt-2">
            Every service executed on dedicated production machinery in Rohtak, Haryana. Direct counter pickup and all-India courier dispatch.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((srv) => {
            const Icon = getServiceIcon(srv.icon);
            return (
              <div
                key={srv.id}
                className="bg-gradient-to-b from-[#0c1830] to-[#070e1c] border border-white/10 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-red-500/50 hover:shadow-2xl hover:shadow-red-500/10 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-red-600/10 text-red-500 border border-red-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono-tech bg-white/5 text-slate-300 px-2.5 py-1 rounded-full border border-white/10 font-bold uppercase">
                      {srv.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-xs text-slate-400 font-mono-tech leading-relaxed mb-4">
                    {srv.shortDesc}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-white/5 mb-5 text-xs text-slate-300">
                    {srv.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="text-[11px] font-mono-tech text-slate-400 bg-[#060c18] p-2.5 rounded-lg border border-white/5 mb-6">
                    <span className="text-slate-500 block">Turnaround:</span>
                    <span className="text-emerald-400 font-bold">{srv.turnaround}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-3">
                  <Link
                    to={`/services/${srv.slug}`}
                    className="text-xs font-bold text-slate-200 hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <span>Full Specs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    to={`/build?product=${srv.id === 'sticker-printing' ? 'stickers' : srv.id === 'business-cards' ? 'business-cards' : srv.id === 'student-projects' ? 'project-reports' : 'stickers'}`}
                    className="px-3.5 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold text-xs transition-all shadow-md shadow-red-600/20"
                  >
                    Configure
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
