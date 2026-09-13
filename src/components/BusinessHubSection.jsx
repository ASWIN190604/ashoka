import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Briefcase, 
  Utensils, 
  ShoppingBag, 
  Store, 
  Factory, 
  Rocket, 
  CheckCircle2, 
  ArrowRight,
  Send,
  Building
} from "lucide-react";
import { buildWhatsAppLink } from "../utils/whatsapp";

export const BUSINESS_SECTORS = [
  {
    id: "restaurant",
    name: "Restaurant & Cafe",
    icon: Utensils,
    tagline: "Waterproof Dine-In & Takeaway Kits",
    items: [
      { name: "Velvet Matte Food Menus (350 GSM)", qty: "20 - 50 Pcs" },
      { name: "Table Top QR Standee Cards", qty: "30 Pcs" },
      { name: "Waterproof Takeaway Packaging Stickers", qty: "1,000 Pcs" },
      { name: "Branded Tissue & Cutlery Paper Sleeves", qty: "2,000 Pcs" },
      { name: "Outdoor Promotional Star Flex Banner", qty: "1 - 2 Pcs" }
    ],
    recommendedTurnaround: "24 - 48 Hours"
  },
  {
    id: "ecommerce",
    name: "E-Commerce & D2C Brands",
    icon: ShoppingBag,
    tagline: "Unboxing & Moisture-Proof Labels",
    items: [
      { name: "Die-Cut Waterproof Vinyl Jar/Bottle Labels", qty: "1,000 Pcs" },
      { name: "Gold Foil Thank-You Inserts (300 GSM)", qty: "500 Pcs" },
      { name: "Shipping Fragile & Box Sealing Badges", qty: "2,000 Pcs" },
      { name: "Product Catalog Folders", qty: "200 Pcs" }
    ],
    recommendedTurnaround: "1 - 2 Days"
  },
  {
    id: "startup",
    name: "Corporate & Tech Startup",
    icon: Rocket,
    tagline: "Executive Brand Identity",
    items: [
      { name: "Velvet Touch 350 GSM Business Cards", qty: "500 Pcs" },
      { name: "Executive 100 GSM Bond Letterheads", qty: "1,000 Pcs" },
      { name: "Branded Presentation Folders with Pocket", qty: "100 Pcs" },
      { name: "Employee Lanyards & PVC ID Cards", qty: "25 - 100 Pcs" },
      { name: "Roll-Up Exhibition Standee", qty: "2 Pcs" }
    ],
    recommendedTurnaround: "24 - 48 Hours"
  },
  {
    id: "retail",
    name: "Retail Store & Local Shop",
    icon: Store,
    tagline: "Storefront Signage & Price Tags",
    items: [
      { name: "Frontlit Storefront Star Flex Board", qty: "Custom Dimensions" },
      { name: "Garment & Product Hang Tags (350 GSM)", qty: "1,000 Pcs" },
      { name: "Discount Offer Handout Flyers (130 GSM)", qty: "2,000 Pcs" },
      { name: "Window One-Way Vision Graphics", qty: "Per sq. ft" }
    ],
    recommendedTurnaround: "Same Day / Next Day"
  },
  {
    id: "manufacturing",
    name: "Manufacturing & Industrial",
    icon: Factory,
    tagline: "Durable Compliance & Barcode Labels",
    items: [
      { name: "Weatherproof Machine Warning & Barcode Stickers", qty: "1,000 Pcs" },
      { name: "Technical Instruction Manuals (Saddle Stitch)", qty: "200 Pcs" },
      { name: "Dispatch & Inspection Log Booklets", qty: "50 Books" },
      { name: "Corrugated Carton Identification Labels", qty: "2,500 Pcs" }
    ],
    recommendedTurnaround: "2 - 3 Days"
  }
];

export default function BusinessHubSection() {
  const [selectedSectorId, setSelectedSectorId] = useState(BUSINESS_SECTORS[0].id);

  const activeSector = BUSINESS_SECTORS.find(s => s.id === selectedSectorId) || BUSINESS_SECTORS[0];

  const whatsappUrl = buildWhatsAppLink({
    type: "business_kit_order",
    productName: `Complete ${activeSector.name} Print Kit`,
    quantity: "Complete Bundle",
    size: "Multi-Format Kit",
    paper: "Curated Substrates",
    finish: "Commercial Premium",
    estimatedTotal: "Custom Business Package Estimate",
    notes: `Selected ${activeSector.name} industry package from Ashoka website`
  });

  return (
    <section id="business-hub" className="py-20 bg-[#081020] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-500/30 text-red-400 text-xs font-mono-tech uppercase tracking-widest mb-2">
            <Building className="w-3.5 h-3.5" />
            <span>COMMERCIAL BRAND PRINT PACKS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            BUILD YOUR BUSINESS PRINT KIT
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            Pick your industry to get a curated bundle of business cards, packaging labels, marketing collateral, and storefront signage.
          </p>
        </div>

        {/* Industry Pill Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {BUSINESS_SECTORS.map((sec) => {
            const Icon = sec.icon;
            const isSelected = selectedSectorId === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => setSelectedSectorId(sec.id)}
                className={`px-4 py-2.5 rounded-xl border text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? "bg-red-600 text-white border-red-500 shadow-xl shadow-red-600/20 scale-102"
                    : "bg-[#0c1830] border-white/10 text-slate-300 hover:bg-[#12244a]"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{sec.name}</span>
              </button>
            );
          })}
        </div>

        {/* Industry Bundle Detail Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSector.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto bg-gradient-to-br from-[#0c1933] to-[#070e1c] border-2 border-slate-700 rounded-2xl p-6 sm:p-9 shadow-2xl relative"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-white/10 gap-3">
              <div>
                <span className="text-[10px] font-mono-tech text-red-400 uppercase tracking-widest font-bold block">
                  RECOMMENDED INDUSTRY KIT
                </span>
                <h3 className="text-2xl font-extrabold text-white">
                  {activeSector.name}
                </h3>
                <p className="text-xs text-slate-400 font-mono-tech mt-0.5">
                  {activeSector.tagline}
                </p>
              </div>

              <div className="text-left sm:text-right">
                <span className="text-[10px] font-mono-tech text-slate-500 block">PRODUCTION DURATION</span>
                <span className="text-xs font-bold text-emerald-400 font-mono-tech">
                  {activeSector.recommendedTurnaround}
                </span>
              </div>
            </div>

            {/* Included Items Checklist */}
            <div className="py-6 space-y-3">
              <span className="text-xs font-mono-tech text-slate-400 uppercase tracking-wider block">
                PRINT MATERIALS INCLUDED IN THIS PACKAGE:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeSector.items.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-[#060c18] border border-white/5 text-xs">
                    <span className="text-slate-200 font-medium">{item.name}</span>
                    <span className="font-mono-tech text-red-400 font-bold ml-2 shrink-0">{item.qty}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3 items-center justify-between">
              <div className="text-xs font-mono-tech text-slate-400">
                Custom quantities &amp; branding mockups available on WhatsApp.
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 transition-all hover:scale-102"
                >
                  <Send className="w-4 h-4" />
                  <span>Request Business Kit Quote</span>
                </a>

                <Link
                  to="/build"
                  className="w-full sm:w-auto px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 font-semibold text-xs border border-white/10 flex items-center justify-center gap-2 transition-all"
                >
                  <span>Customize in Builder</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
