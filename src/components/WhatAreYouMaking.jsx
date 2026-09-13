import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  GraduationCap, 
  Rocket, 
  Package, 
  HeartHandshake, 
  Megaphone, 
  BookOpen, 
  Tag, 
  FileText, 
  CreditCard, 
  Image, 
  Sparkles, 
  Camera,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

export const PROJECT_INTENTS = [
  {
    id: "college-project",
    title: "College Project & Thesis",
    tagline: "Academic Submission Ready",
    icon: GraduationCap,
    badge: "Student Essential",
    accent: "from-amber-500/20 to-orange-500/20 border-amber-500/30",
    badgeColor: "bg-amber-600",
    bundle: [
      "Project Report (A4 JK Bond Paper)",
      "Vibrant High-Resolution Colour Graphs",
      "Gloss Front Cover Page",
      "Spiral Binding or Golden Embossed Hardcover",
      "Department Synopsis Booklet"
    ],
    recommendedGSM: "75 GSM / 85 GSM Bond",
    estimatedTurnaround: "15 - 30 Minutes",
    cta: "BUILD MY PROJECT REPORT",
    link: "/students"
  },
  {
    id: "business-launch",
    title: "New Business Brand Kit",
    tagline: "Complete Identity Package",
    icon: Rocket,
    badge: "Brand Starter",
    accent: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
    badgeColor: "bg-blue-600",
    bundle: [
      "350 GSM Velvet Matte Business Cards (500 Pcs)",
      "Official Letterheads (100 GSM Bond)",
      "Branded Waterproof Product Stickers",
      "Tri-Fold Company Profile Brochures",
      "QR Code Counter Standee"
    ],
    recommendedGSM: "100 GSM + 350 GSM Art Card",
    estimatedTurnaround: "24 - 48 Hours",
    cta: "BUILD MY BUSINESS KIT",
    link: "/business"
  },
  {
    id: "product-packaging",
    title: "Product Packaging & Labels",
    tagline: "Retail Ready Waterproofing",
    icon: Package,
    badge: "E-Commerce / Food",
    accent: "from-red-500/20 to-rose-500/20 border-red-500/30",
    badgeColor: "bg-red-600",
    bundle: [
      "Waterproof Vinyl Jar / Bottle Labels",
      "Custom CNC Die-Cut Shaped Stickers",
      "Thank You Packaging Cards (300 GSM)",
      "Fragile / Shipping Box Badges",
      "Barcode & Nutrition Facts Labels"
    ],
    recommendedGSM: "180 Micron Waterproof Vinyl",
    estimatedTurnaround: "Same Day / Next Day",
    cta: "CONFIGURE PACKAGING LABELS",
    link: "/build?product=stickers"
  },
  {
    id: "event-wedding",
    title: "Wedding & Event Cards",
    tagline: "Luxury Metallic & Texture",
    icon: HeartHandshake,
    badge: "Celebrations",
    accent: "from-pink-500/20 to-rose-500/20 border-pink-500/30",
    badgeColor: "bg-pink-600",
    bundle: [
      "Metallic Ice Pearl Invitation Inserts",
      "Custom Die-Cut Envelope Jackets",
      "Entry Passes & VIP Badges with Lanyards",
      "Welcome Signage Standee Banner"
    ],
    recommendedGSM: "300 - 350 GSM Luxury Shimmer",
    estimatedTurnaround: "2 - 3 Days",
    cta: "REQUEST INVITATION QUOTE",
    link: "/quote?service=invitations"
  },
  {
    id: "advertisement-flex",
    title: "Outdoor Signs & Hoardings",
    tagline: "High-Visibility Marketing",
    icon: Megaphone,
    badge: "High Impact",
    accent: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30",
    badgeColor: "bg-emerald-600",
    bundle: [
      "Star Flex Weatherproof Banner (340 GSM)",
      "Roll-Up Exhibition Standee (6x3 ft)",
      "One-Way Vision Glass Vinyl",
      "Promotional Handout Flyers (130 GSM)"
    ],
    recommendedGSM: "340 GSM Star Backlit Flex",
    estimatedTurnaround: "Same Day Dispatch",
    cta: "ORDER BANNER & SIGNAGE",
    link: "/build?product=flex-banners"
  },
  {
    id: "book-manual",
    title: "Books, Manuals & Catalogues",
    tagline: "Bound Commercial Publications",
    icon: BookOpen,
    badge: "Publishing",
    accent: "from-purple-500/20 to-indigo-500/20 border-purple-500/30",
    badgeColor: "bg-purple-600",
    bundle: [
      "High-Volume Duplex Monochrome/Colour Innards",
      "300 GSM Heavy Gloss Laminated Cover",
      "Perfect Hot Glue Spine or Saddle Stitch",
      "Creased Spine & Flush Edge Trimming"
    ],
    recommendedGSM: "80 GSM Innards + 300 GSM Cover",
    estimatedTurnaround: "2 - 3 Working Days",
    cta: "CALCULATE BOOK PRINT",
    link: "/build?product=project-reports"
  }
];

export default function WhatAreYouMaking() {
  const [selectedIntent, setSelectedIntent] = useState(PROJECT_INTENTS[0].id);

  const active = PROJECT_INTENTS.find((i) => i.id === selectedIntent) || PROJECT_INTENTS[0];

  return (
    <section id="what-are-you-making" className="py-16 bg-[#081020] border-t border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-500/30 text-red-400 text-xs font-mono-tech uppercase tracking-widest mb-3">
            <span>INTENT-BASED PRINT BUILDER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            WHAT ARE YOU MAKING TODAY?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Tell us your project type. We automatically assemble the exact paper stocks, binding machines, and finish profiles needed.
          </p>
        </div>

        {/* Dynamic Project Tabs Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 mb-8">
          {PROJECT_INTENTS.map((intent) => {
            const Icon = intent.icon;
            const isSelected = selectedIntent === intent.id;
            return (
              <button
                key={intent.id}
                onClick={() => setSelectedIntent(intent.id)}
                className={`p-3 sm:p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? "bg-gradient-to-b from-[#16274a] to-[#0d172e] border-red-500 shadow-xl shadow-red-500/10 scale-102"
                    : "bg-[#0a1426] border-white/5 hover:border-white/20 hover:bg-[#0e1b33]"
                }`}
              >
                <div>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2.5 ${
                    isSelected ? "bg-red-600 text-white" : "bg-white/5 text-slate-400"
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className={`text-xs font-bold leading-tight ${isSelected ? "text-white" : "text-slate-300"}`}>
                    {intent.title}
                  </h4>
                </div>
                <span className="text-[10px] font-mono-tech text-slate-500 mt-2 block">
                  {intent.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Project Interactive Specification Board */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className={`rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-[#0c1a33] to-[#070e1c] border ${active.accent} shadow-2xl relative overflow-hidden`}
          >
            {/* Corner Registration Mark */}
            <div className="absolute top-3 right-3 text-slate-600 text-[10px] font-mono-tech">
              <span>PROJECT_PROFILE: #{active.id.toUpperCase()}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Solution Details */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2">
                  <span className={`px-2.5 py-0.5 rounded text-[11px] font-bold text-white uppercase ${active.badgeColor}`}>
                    {active.badge}
                  </span>
                  <span className="text-xs font-mono-tech text-slate-400">
                    {active.tagline}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {active.title} Solution Bundle
                </h3>

                <p className="text-xs text-slate-400 font-mono-tech">
                  Engineered directly on our production press in Rohtak. Ready for instant walk-in submission or courier dispatch.
                </p>

                {/* Bundle Breakdown Items */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-mono-tech text-slate-400 uppercase tracking-wider block">
                    INCLUDED IN THIS CONFIGURATION:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {active.bundle.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 bg-[#081022] p-2.5 rounded-lg border border-white/5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-200 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Technical Specs Card & Instant CTA */}
              <div className="lg:col-span-5 bg-[#081020] rounded-xl p-5 border border-white/10 space-y-4">
                <div className="text-xs font-mono-tech text-slate-400 border-b border-white/10 pb-2 flex justify-between">
                  <span>PRODUCTION SPECIFICATIONS</span>
                  <span className="text-red-400">VERIFIED</span>
                </div>

                <div className="space-y-2.5 text-xs font-mono-tech">
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-slate-400">Recommended Substrate:</span>
                    <span className="text-white font-bold">{active.recommendedGSM}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-slate-400">Standard Turnaround:</span>
                    <span className="text-emerald-400 font-bold">{active.estimatedTurnaround}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-slate-400">Facility Location:</span>
                    <span className="text-slate-300">Rohtak Press HQ</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-slate-400">Dispatch Method:</span>
                    <span className="text-slate-300">Pickup / Pan-India Express</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    to={active.link}
                    className="w-full py-3 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-red-600/30 transition-all hover:scale-102"
                  >
                    <span>{active.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <p className="text-[10px] text-center text-slate-500 font-mono-tech">
                  Instant digital quote &amp; WhatsApp direct handoff available.
                </p>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
