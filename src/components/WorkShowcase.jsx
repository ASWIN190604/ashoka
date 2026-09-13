import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  Layers, 
  Tag, 
  BookOpen, 
  Maximize, 
  CreditCard, 
  ExternalLink,
  ArrowRight
} from "lucide-react";
import { InstagramIcon } from "./SocialIcons";
import { BUSINESS_CONFIG } from "../data/business";
import { buildQuickWhatsAppMessage } from "../utils/whatsapp";

export const SHOWCASE_ITEMS = [
  {
    id: 1,
    title: "Waterproof Vinyl Jar Labels",
    category: "stickers",
    categoryLabel: "Stickers & Labels",
    tag: "180 Micron Vinyl",
    desc: "Custom contour die-cut labels with oil and moisture-proof gloss UV barrier.",
    color: "from-red-600 to-amber-600",
    clientType: "Artisan Food & Beverage"
  },
  {
    id: 2,
    title: "MDU B.Tech Hardbound Thesis",
    category: "books",
    categoryLabel: "Thesis & Books",
    tag: "Golden Foil Embossed",
    desc: "Maroon rexine hardcover book with 85 GSM executive bond paper innards.",
    color: "from-blue-900 to-indigo-900",
    clientType: "Engineering Scholar"
  },
  {
    id: 3,
    title: "Velvet Matte Business Cards",
    category: "cards",
    categoryLabel: "Corporate Cards",
    tag: "350 GSM + Spot UV",
    desc: "Tactile soft-touch velvet lamination with raised spot UV logo highlight.",
    color: "from-slate-900 to-slate-800",
    clientType: "Corporate Law Chamber"
  },
  {
    id: 4,
    title: "Holographic Kiss-Cut Sticker Sheet",
    category: "stickers",
    categoryLabel: "Stickers & Labels",
    tag: "Prismatic Foil",
    desc: "Rainbow light-refracting holographic vinyl sheets with precision CNC cuts.",
    color: "from-purple-600 to-pink-600",
    clientType: "D2C Fashion Brand"
  },
  {
    id: 5,
    title: "Star Flex Storefront Banner (10x4 ft)",
    category: "flex",
    categoryLabel: "Large Format Flex",
    tag: "340 GSM Star Flex",
    desc: "High-glow outdoor commercial banner with brass eyelets and reinforced seams.",
    color: "from-emerald-800 to-teal-900",
    clientType: "Retail Showroom"
  },
  {
    id: 6,
    title: "Gloss Laminated Product Catalogues",
    category: "books",
    categoryLabel: "Thesis & Books",
    tag: "170 GSM Satin Paper",
    desc: "Saddle-stitched corporate brochure with edge-to-edge CMYK calibration.",
    color: "from-navy-900 to-blue-950",
    clientType: "Industrial Manufacturer"
  }
];

export default function WorkShowcase() {
  const [filter, setFilter] = useState("all");

  const filteredItems = filter === "all" 
    ? SHOWCASE_ITEMS 
    : SHOWCASE_ITEMS.filter(item => item.category === filter);

  return (
    <section id="work" className="py-20 bg-[#081020] relative overflow-hidden">
      
      {/* Background Registration Crosshairs */}
      <div className="absolute inset-0 bg-press-grid opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-500/30 text-red-400 text-xs font-mono-tech uppercase tracking-widest mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>FRESH FROM THE PRESS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              PRODUCTION SHOWCASE
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mt-1">
              Real prints freshly produced in our Rohtak production shop.
            </p>
          </div>

          {/* Instagram Link Header */}
          <a
            href={BUSINESS_CONFIG.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-pink-600/10 hover:bg-pink-600/20 text-pink-400 border border-pink-500/30 text-xs font-mono-tech transition-all w-fit"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>Follow @ashokaphotostat</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 scrollbar-none">
          {[
            { id: "all", label: "All Print Output" },
            { id: "stickers", label: "Stickers & Labels" },
            { id: "books", label: "Thesis & Booklets" },
            { id: "cards", label: "Visiting Cards" },
            { id: "flex", label: "Flex & Signage" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                filter === tab.id
                  ? "bg-red-600 text-white shadow-lg shadow-red-600/20"
                  : "bg-[#0c1830] text-slate-300 hover:bg-[#12244a] border border-white/5"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Editorial Work Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="bg-gradient-to-b from-[#0c1830] to-[#070e1c] rounded-2xl border border-white/10 p-6 flex flex-col justify-between hover:border-red-500/50 hover:shadow-2xl hover:shadow-red-500/10 transition-all group relative overflow-hidden"
              >
                {/* Visual Header Representation */}
                <div className={`h-36 rounded-xl bg-gradient-to-br ${item.color} p-4 text-white flex flex-col justify-between mb-4 shadow-inner relative overflow-hidden border border-white/10`}>
                  
                  {/* Real Corner Crop Marks inside mockup */}
                  <div className="absolute top-1.5 left-1.5 w-2.5 h-2.5 crop-mark-tl opacity-60"></div>
                  <div className="absolute top-1.5 right-1.5 w-2.5 h-2.5 crop-mark-tr opacity-60"></div>

                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-mono-tech bg-black/40 px-2 py-0.5 rounded backdrop-blur-sm">
                      {item.categoryLabel}
                    </span>
                    <span className="text-[10px] font-mono-tech bg-white/20 px-2 py-0.5 rounded font-bold">
                      {item.tag}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-base font-extrabold text-white leading-tight">
                      {item.title}
                    </h4>
                    <span className="text-[10px] font-mono-tech opacity-80 mt-0.5 block">
                      Client Sector: {item.clientType}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed font-mono-tech mb-5">
                  {item.desc}
                </p>

                {/* Bottom WhatsApp Order Hook */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[10px] font-mono-tech text-slate-500">
                    ROHTAK FACILITY
                  </span>
                  
                  <a
                    href={buildQuickWhatsAppMessage(`Hello, I saw "${item.title}" on the Ashoka showcase and would like to get a quote.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-red-400 hover:text-red-300 transition-colors"
                  >
                    <span>Order Similar</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
