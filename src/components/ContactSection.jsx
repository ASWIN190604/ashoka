import React from "react";
import { 
  MapPin, 
  Phone, 
  Clock, 
  MessageCircle, 
  ExternalLink,
  ShieldCheck
} from "lucide-react";
import { BUSINESS_CONFIG } from "../data/business";
import { InstagramIcon } from "./SocialIcons";
import { buildQuickWhatsAppMessage } from "../utils/whatsapp";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-[#081022] border-t border-white/5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-500/30 text-red-400 text-xs font-mono-tech uppercase tracking-widest mb-2">
            <MapPin className="w-3.5 h-3.5" />
            <span>FACILITY &amp; COUNTER PICKUP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            VISIT OR CONTACT US
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            Walk-in counter for immediate print pickup in Rohtak, or message our team directly on WhatsApp for pan-India delivery.
          </p>
        </div>

        {/* 3 Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          
          {/* Address */}
          <div className="bg-gradient-to-b from-[#0c1830] to-[#070e1c] p-6 rounded-2xl border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-red-600/10 text-red-500 border border-red-500/20 flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">
              Rohtak Facility Location
            </h3>
            <p className="text-xs text-slate-300 font-mono-tech leading-relaxed">
              {BUSINESS_CONFIG.address.fullAddress}
            </p>
            <div className="text-[11px] text-slate-500 font-mono-tech pt-1">
              Near Subhash Chowk &amp; Delhi Road, Rohtak
            </div>
          </div>

          {/* Direct Phone & WhatsApp */}
          <div className="bg-gradient-to-b from-[#0c1830] to-[#070e1c] p-6 rounded-2xl border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">
              Phone &amp; WhatsApp
            </h3>
            <div className="space-y-1">
              <a 
                href={`tel:${BUSINESS_CONFIG.phone}`} 
                className="text-sm font-bold text-white hover:text-red-400 block transition-colors"
              >
                +91 {BUSINESS_CONFIG.phone}
              </a>
              <span className="text-xs text-slate-400 block font-mono-tech">
                Direct operator line for instant proofing
              </span>
            </div>
            <a
              href={buildQuickWhatsAppMessage()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:underline pt-1"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Working Hours */}
          <div className="bg-gradient-to-b from-[#0c1830] to-[#070e1c] p-6 rounded-2xl border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-400 border border-blue-500/20 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">
              Working Hours
            </h3>
            <div className="space-y-1 text-xs font-mono-tech text-slate-300">
              <div>Mon - Sat: <strong className="text-white">{BUSINESS_CONFIG.operatingHours.weekdays}</strong></div>
              <div>Sunday: <strong className="text-white">{BUSINESS_CONFIG.operatingHours.sunday}</strong></div>
            </div>
            <div className="text-[11px] font-mono-tech text-emerald-400 pt-1">
              ✓ Express same-day delivery active
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
