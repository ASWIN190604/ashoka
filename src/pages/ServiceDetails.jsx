import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { 
  ArrowLeft, 
  Printer, 
  CheckCircle2, 
  Clock, 
  Cpu, 
  Layers, 
  Send, 
  Sparkles,
  ArrowRight
} from "lucide-react";
import { SERVICES } from "../data/services";
import { buildWhatsAppLink } from "../utils/whatsapp";

export default function ServiceDetails() {
  const { slug } = useParams();
  const service = SERVICES.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const whatsappUrl = buildWhatsAppLink({
    type: "service_inquiry",
    productName: service.title,
    quantity: "Standard Batch",
    paper: service.materials[0] || "Standard",
    notes: `Inquiry from Ashoka Service Specs Page for ${service.title}`
  });

  return (
    <div className="py-16 bg-[#070e1c] min-h-screen text-slate-100 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-xs font-mono-tech text-slate-400 hover:text-white mb-8 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>BACK TO ALL SERVICES</span>
        </Link>

        {/* Service Hero Card */}
        <div className="bg-gradient-to-br from-[#0c1830] via-[#070e1c] to-[#050914] border-2 border-slate-700 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden mb-10">
          
          {/* Real Industrial Crop Marks */}
          <div className="absolute top-2 left-2 w-3 h-3 crop-mark-tl"></div>
          <div className="absolute top-2 right-2 w-3 h-3 crop-mark-tr"></div>

          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <span className="px-3 py-1 rounded-full bg-red-600/20 border border-red-500/30 text-red-400 text-xs font-mono-tech font-bold uppercase mb-2 inline-block">
                {service.tag}
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
                {service.title}
              </h1>
            </div>

            <div className="text-left sm:text-right">
              <span className="text-[10px] font-mono-tech text-slate-500 block">STANDARD TURNAROUND</span>
              <span className="text-sm font-bold text-emerald-400 font-mono-tech">{service.turnaround}</span>
            </div>
          </div>

          <p className="text-base text-slate-300 my-6 leading-relaxed">
            {service.shortDesc}
          </p>

          {/* Key Specs Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            
            {/* Features */}
            <div className="bg-[#050a14] p-5 rounded-2xl border border-white/5 space-y-3">
              <h3 className="text-xs font-mono-tech uppercase tracking-wider text-red-400 font-bold">
                KEY SPECIFICATIONS &amp; CAPABILITIES
              </h3>
              <div className="space-y-2">
                {service.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Materials & Substrates */}
            <div className="bg-[#050a14] p-5 rounded-2xl border border-white/5 space-y-3">
              <h3 className="text-xs font-mono-tech uppercase tracking-wider text-blue-400 font-bold">
                AVAILABLE SUBSTRATES &amp; PAPERS
              </h3>
              <div className="space-y-2">
                {service.materials.map((mat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                    <Layers className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>{mat}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Machine & Sizing Details */}
          <div className="bg-[#050a14] p-5 rounded-2xl border border-white/5 space-y-3 mb-8 text-xs font-mono-tech text-slate-300">
            <div className="flex flex-col sm:flex-row sm:justify-between py-1.5 border-b border-white/5 gap-1">
              <span className="text-slate-500">Production Engine:</span>
              <span className="text-white font-bold">{service.machinesUsed}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between py-1.5 border-b border-white/5 gap-1">
              <span className="text-slate-500">Popular Sizes:</span>
              <span className="text-slate-200 font-medium">{service.popularSizes.join(" • ")}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between py-1.5 gap-1">
              <span className="text-slate-500">Best Application:</span>
              <span className="text-slate-200 font-medium">{service.bestFor}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-white/10">
            <Link
              to="/build"
              className="flex-1 py-3 px-6 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-red-600/30 transition-all hover:scale-102"
            >
              <Printer className="w-4 h-4" />
              <span>Configure in Live Print Builder</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 transition-all hover:scale-102"
            >
              <Send className="w-4 h-4" />
              <span>Inquire on WhatsApp (+91 9812039707)</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
