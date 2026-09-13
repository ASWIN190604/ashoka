import React, { useState } from "react";
import { 
  MapPin, 
  Phone, 
  Clock, 
  Send, 
  Building2, 
  CheckCircle2,
  ExternalLink,
  MessageCircle
} from "lucide-react";
import { InstagramIcon } from "../components/SocialIcons";
import { BUSINESS_CONFIG } from "../data/business";
import { buildWhatsAppLink, buildQuickWhatsAppMessage } from "../utils/whatsapp";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("Custom Printing Order");
  const [message, setMessage] = useState("");

  const whatsappUrl = buildWhatsAppLink({
    type: "contact_inquiry",
    productName: subject,
    customerName: name,
    customerPhone: phone,
    notes: message
  });

  return (
    <div className="py-16 bg-[#070e1c] min-h-screen text-slate-100 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-500/30 text-red-400 text-xs font-mono-tech uppercase tracking-widest mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>ROHTAK FACILITY &amp; COUNTER</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            CONTACT THE PRINTING PRESS
          </h1>
          <p className="text-slate-400 text-base mt-2">
            Visit our facility in Rohtak or chat with our production operators via WhatsApp for instant digital proofing and orders.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Verified Location & Facility Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-gradient-to-br from-[#0c1830] to-[#070e1c] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
              <h2 className="text-xl font-bold text-white border-b border-white/10 pb-4">
                Facility Coordinates
              </h2>

              <div className="space-y-4 text-xs font-mono-tech text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-red-600/10 text-red-500 border border-red-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-white font-bold text-sm block">{BUSINESS_CONFIG.name}</span>
                    <span className="text-slate-400 block mt-0.5">{BUSINESS_CONFIG.address.fullAddress}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-600/10 text-blue-400 border border-blue-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-white font-bold text-sm block">Direct Phone &amp; Orders</span>
                    <a href={`tel:${BUSINESS_CONFIG.phone}`} className="text-blue-400 hover:underline block mt-0.5">
                      +91 {BUSINESS_CONFIG.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-600/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-white font-bold text-sm block">Press Operating Hours</span>
                    <span className="text-slate-400 block mt-0.5">Mon - Sat: {BUSINESS_CONFIG.operatingHours.weekdays}</span>
                    <span className="text-slate-400 block">Sunday: {BUSINESS_CONFIG.operatingHours.sunday}</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 space-y-2">
                <a
                  href={buildQuickWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 transition-all hover:scale-102"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Start WhatsApp Chat (+91 {BUSINESS_CONFIG.phone})</span>
                </a>

                <a
                  href={BUSINESS_CONFIG.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 font-semibold text-xs border border-white/10 flex items-center justify-center gap-2 transition-all"
                >
                  <InstagramIcon className="w-4 h-4 text-pink-400" />
                  <span>Instagram: {BUSINESS_CONFIG.social.instagramHandle}</span>
                </a>
              </div>
            </div>

            {/* Quick Map Directions Card */}
            <div className="bg-[#050a14] p-5 rounded-2xl border border-white/5 text-xs font-mono-tech text-slate-400 space-y-2">
              <span className="text-white font-bold uppercase block">LANDMARKS IN ROHTAK:</span>
              <p className="leading-relaxed">
                Centrally located near Subhash Chowk / Delhi Road with convenient parking and instant counter pickup.
              </p>
            </div>

          </div>

          {/* Right Column: Instant Message / Direct WhatsApp Ingestion Form */}
          <div className="lg:col-span-7 bg-gradient-to-br from-[#0c1830] to-[#070e1c] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-5 shadow-xl">
            <h2 className="text-xl font-bold text-white border-b border-white/10 pb-4">
              Send Direct Production Inquiry
            </h2>

            <form onSubmit={(e) => { e.preventDefault(); window.open(whatsappUrl, "_blank"); }} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono-tech text-slate-400 block mb-1">
                    YOUR FULL NAME:
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Amit Kumar"
                    className="w-full bg-[#060c18] border border-white/10 rounded-lg p-2.5 text-xs text-white focus:border-red-500 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="text-xs font-mono-tech text-slate-400 block mb-1">
                    PHONE NUMBER:
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 98120XXXXX"
                    className="w-full bg-[#060c18] border border-white/10 rounded-lg p-2.5 text-xs text-white font-mono-tech focus:border-red-500 focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-mono-tech text-slate-400 block mb-1">
                  JOB / INQUIRY CATEGORY:
                </label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full bg-[#060c18] border border-white/10 rounded-lg p-2.5 text-xs text-white focus:border-red-500 focus:outline-none"
                >
                  <option value="Waterproof Stickers & Labels">Waterproof Stickers &amp; Die-Cut Labels</option>
                  <option value="Academic Project Report / Thesis">Academic Project Report / Thesis</option>
                  <option value="Business Cards & Stationery">Business Cards &amp; Stationery</option>
                  <option value="Flex Banner & Signage">Flex Banner &amp; Outdoor Signage</option>
                  <option value="Bulk Photostat / Printing">Bulk Commercial Photostat / Xerox</option>
                  <option value="General Print Inquiry">General Print Inquiry</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-mono-tech text-slate-400 block mb-1">
                  ORDER SPECIFICATIONS / QUANTITY / DETAILS:
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your dimensions, quantity, paper requirements, or deadline..."
                  className="w-full bg-[#060c18] border border-white/10 rounded-lg p-2.5 text-xs text-white focus:border-red-500 focus:outline-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-red-600/30 transition-all hover:scale-102 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>SEND INQUIRY TO PRESS OPERATOR</span>
              </button>
            </form>

            <p className="text-[10px] text-slate-500 text-center font-mono-tech">
              Direct connection opens WhatsApp with pre-formatted job ticket.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
