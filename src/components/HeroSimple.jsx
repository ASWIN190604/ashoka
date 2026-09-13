import React from "react";
import { 
  MessageCircle, 
  Phone, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  MapPin, 
  Calculator,
  ShieldCheck
} from "lucide-react";
import { BUSINESS_CONFIG } from "../data/business";
import { buildQuickWhatsAppMessage } from "../utils/whatsapp";

export default function HeroSimple() {
  return (
    <section className="relative bg-gradient-to-b from-[#091224] via-[#070e1c] to-[#070e1c] pt-10 pb-16 px-4 sm:px-6 lg:px-8 border-b border-white/5 overflow-hidden">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-press-grid opacity-15 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10 space-y-6">
        
        {/* Top Verified Location Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/10 border border-red-500/30 text-red-400 text-xs font-mono-tech font-bold uppercase tracking-wider">
          <MapPin className="w-3.5 h-3.5" />
          <span>ROHTAK, HARYANA • PIN 124001</span>
        </div>

        {/* Brand Display Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
          ASHOKA PHOTOSTAT &amp; <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-400">
            PRINTING PRESS
          </span>
        </h1>

        {/* Clean, Simple Summary */}
        <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
          High-speed digital printing, 100% waterproof stickers, academic project thesis binding, visiting cards, flex banners, and bulk photostat. <strong>Direct WhatsApp ordering with instant proofing.</strong>
        </p>

        {/* Primary High-Converting CTAs */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
          <a
            href={buildQuickWhatsAppMessage("Hello Ashoka Printing Press, I would like to inquire about a printing order.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-xl shadow-emerald-600/30 transition-all hover:scale-105"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>Order on WhatsApp</span>
          </a>

          <a
            href="#quick-quote"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#0c1933] hover:bg-[#12254a] text-slate-200 hover:text-white font-bold text-sm border border-slate-700 flex items-center justify-center gap-2 transition-all"
          >
            <Calculator className="w-4 h-4 text-red-400" />
            <span>Quick Quote</span>
          </a>
        </div>

        {/* Direct Call & Timings Strip */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-mono-tech text-slate-400">
          <span className="flex items-center gap-1.5 text-slate-200">
            <Phone className="w-3.5 h-3.5 text-red-500" />
            Direct Call: <a href={`tel:${BUSINESS_CONFIG.phone}`} className="hover:underline font-bold text-white">+91 {BUSINESS_CONFIG.phone}</a>
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            Open Mon-Sat: 9:00 AM - 9:00 PM
          </span>
          <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
            <ShieldCheck className="w-3.5 h-3.5" />
            Same-Day Dispatch &amp; Counter Pickup
          </span>
        </div>

      </div>
    </section>
  );
}
