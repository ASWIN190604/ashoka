import React from "react";
import { 
  Layers, 
  BookOpen, 
  CreditCard, 
  Maximize, 
  Copy, 
  Book, 
  ShieldCheck, 
  MessageCircle, 
  CheckCircle2, 
  Clock 
} from "lucide-react";
import { buildWhatsAppLink } from "../utils/whatsapp";

export const PRINT_SERVICES_SIMPLE = [
  {
    id: "stickers",
    name: "Waterproof Stickers & Labels",
    tagline: "Die-Cut & Roll Labels",
    desc: "100% waterproof vinyl stickers for bottles, glass jars, packaging boxes, laptops, and custom shapes.",
    specs: ["180 Micron White Vinyl", "Precision Laser CNC Cut", "Gloss / Matte Laminate", "No Minimum Limit"],
    turnaround: "Same Day / 24 Hours",
    icon: Layers,
    badge: "Bestseller",
    badgeColor: "bg-red-600"
  },
  {
    id: "thesis",
    name: "College Projects & Thesis",
    tagline: "Academic Submission Ready",
    desc: "MDU Rohtak university standard project reports with golden embossed hardbound covers or PVC spiral.",
    specs: ["75/85 GSM Bond Paper", "Vibrant HD Colour Graphs", "Golden Foil Lettering", "Clear PVC Cover"],
    turnaround: "20 - 30 Minutes",
    icon: BookOpen,
    badge: "Student Favorite",
    badgeColor: "bg-amber-600"
  },
  {
    id: "cards",
    name: "Premium Visiting Cards",
    tagline: "350 GSM Heavy Board",
    desc: "Luxury business cards with velvet soft-touch, thermal matte lamination, and rounded corner options.",
    specs: ["350 GSM Heavy Card Stock", "Velvet Touch / Matte / Gloss", "Double-Sided Full Colour", "Sharp Edge Trimming"],
    turnaround: "24 - 48 Hours",
    icon: CreditCard,
    badge: "Executive",
    badgeColor: "bg-blue-600"
  },
  {
    id: "flex",
    name: "Flex Banners & Standees",
    tagline: "Outdoor & Storefront Signs",
    desc: "Heavy-duty outdoor star flex banners, roll-up aluminium standees, and promotional event backdrops.",
    specs: ["340 GSM Star Backlit/Frontlit", "Eco-Solvent Weatherproof Inks", "Reinforced Brass Eyelets", "Custom Size Dimensions"],
    turnaround: "Same Day Print",
    icon: Maximize,
    badge: "Outdoor Durable",
    badgeColor: "bg-emerald-600"
  },
  {
    id: "photostat",
    name: "Bulk Photostat / Xerox",
    tagline: "High-Speed Duplication",
    desc: "Fast black & white duplication for coaching notes, question papers, legal documents, and college files.",
    specs: ["120 Pages Per Minute Engine", "Automatic Double-Sided Duplex", "High-Contrast Deep Black", "Free Stapling / Binding"],
    turnaround: "Immediate Run",
    icon: Copy,
    badge: "High Speed",
    badgeColor: "bg-slate-700"
  },
  {
    id: "books",
    name: "Booklets, Manuals & Menus",
    tagline: "Bound Publications",
    desc: "Restaurant food menus, company catalogues, training manuals, and short-run paperback books.",
    specs: ["Saddle Stitch / Glue Spine", "Gloss Laminated Covers", "Clean Edge Trimming", "A4 / A5 / Custom Formats"],
    turnaround: "1 - 2 Days",
    icon: Book,
    badge: "Commercial",
    badgeColor: "bg-indigo-600"
  }
];

export default function WhatWePrint() {
  return (
    <section id="services" className="py-16 bg-[#070e1c] relative px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-500/30 text-blue-400 text-xs font-mono-tech uppercase tracking-widest mb-2">
            <span>WHAT ASHOKA MAKES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            OUR PRINTING SERVICES
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            Manufactured directly on production machinery in Rohtak. Pick any service to order immediately on WhatsApp.
          </p>
        </div>

        {/* 6 Clean Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRINT_SERVICES_SIMPLE.map((item) => {
            const Icon = item.icon;
            const whatsappUrl = buildWhatsAppLink({
              type: "service_inquiry",
              productName: item.name,
              quantity: "Standard Order",
              notes: `Inquiring about ${item.name} from Ashoka website`
            });

            return (
              <div
                key={item.id}
                className="bg-gradient-to-b from-[#0c1830] to-[#070e1c] rounded-2xl border border-white/10 p-6 flex flex-col justify-between hover:border-red-500/50 hover:shadow-2xl hover:shadow-red-500/10 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-red-400 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[10px] font-mono-tech ${item.badgeColor} text-white px-2.5 py-0.5 rounded font-bold uppercase tracking-wider`}>
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-red-400 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono-tech mb-3">
                    {item.tagline}
                  </p>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {item.desc}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-white/5 mb-5 text-xs text-slate-300">
                    {item.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-mono-tech bg-[#050a14] p-2.5 rounded-lg border border-white/5 mb-5">
                    <span className="text-slate-400">Turnaround:</span>
                    <span className="text-emerald-400 font-bold flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {item.turnaround}
                    </span>
                  </div>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 transition-all hover:scale-102"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Order on WhatsApp</span>
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
