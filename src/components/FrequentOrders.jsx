import React from "react";
import { 
  MessageCircle, 
  CheckCircle2, 
  Sparkles, 
  Zap, 
  Clock, 
  ArrowRight,
  ShieldCheck
} from "lucide-react";
import { buildWhatsAppLink } from "../utils/whatsapp";

export const FREQUENT_PACKAGES = [
  {
    id: "thesis-package",
    title: "MDU Project Report / Thesis Set",
    badge: "Most Ordered by Students",
    badgeColor: "bg-amber-600",
    summary: "Complete university submission bundle with golden embossed hardcover.",
    included: [
      "A4 85 GSM Bright Watermarked Bond Paper",
      "Full Colour High-Resolution Graph Prints",
      "Maroon / Navy Hardcover with Golden Foil Text",
      "Complimentary Soft-Bound Viva Draft"
    ],
    readyIn: "20 - 30 Mins (Walk-in Ready)",
    whatsappDetails: {
      product: "College Project / Thesis Complete Hardbound Set",
      quantity: "3 Sets",
      paper: "85 GSM Bond + Golden Embossed Cover",
      notes: "Frequent Student Package from website"
    }
  },
  {
    id: "sticker-pack",
    title: "500 Waterproof Vinyl Stickers",
    badge: "Top Business Choice",
    badgeColor: "bg-red-600",
    summary: "100% moisture-proof die-cut stickers for jars, bottles, cartons, or laptops.",
    included: [
      "500 Pcs (3 x 3 inch or Custom Shape)",
      "180 Micron Tearproof White Vinyl",
      "High Gloss Protective UV Lamination",
      "Easy-Peel Adhesive Backing"
    ],
    readyIn: "Same Day / 24 Hours",
    whatsappDetails: {
      product: "500 Pcs Waterproof Vinyl Stickers (3x3 inch)",
      quantity: "500 Pcs",
      paper: "180 Micron Vinyl + Gloss Laminate",
      notes: "500 Pcs Sticker Package from website"
    }
  },
  {
    id: "visiting-cards-box",
    title: "500 Velvet Visiting Cards",
    badge: "Executive Standard",
    badgeColor: "bg-blue-600",
    summary: "Heavyweight 350 GSM corporate cards with luxury velvet touch.",
    included: [
      "500 Cards (Standard 89 x 54 mm)",
      "350 GSM Premium Heavy Art Card",
      "Double-Sided Full Colour Print",
      "Velvet Soft-Touch / Matte Barrier"
    ],
    readyIn: "24 - 48 Hours",
    whatsappDetails: {
      product: "500 Pcs Velvet Soft-Touch Visiting Cards (350 GSM)",
      quantity: "500 Cards",
      paper: "350 GSM Heavy Board",
      notes: "500 Cards Executive Package from website"
    }
  },
  {
    id: "shop-flex-banner",
    title: "Outdoor Star Flex Banner",
    badge: "High Glow Outdoor",
    badgeColor: "bg-emerald-600",
    summary: "Heavy 340 GSM weatherproof outdoor advertising banner with metal eyelets.",
    included: [
      "6 x 3 Feet (or Custom Dimensions)",
      "340 GSM Heavy Star Flex Substrate",
      "UV-Resistant Vibrant Inks",
      "Reinforced Brass Hanging Rings"
    ],
    readyIn: "Same Day Dispatch",
    whatsappDetails: {
      product: "Outdoor Star Flex Banner (6x3 ft)",
      quantity: "1 Banner",
      paper: "340 GSM Star Flex",
      notes: "Star Flex Banner Package from website"
    }
  }
];

export default function FrequentOrders() {
  return (
    <section id="frequent-orders" className="py-16 bg-[#081022] border-t border-b border-white/5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-500/30 text-red-400 text-xs font-mono-tech uppercase tracking-widest mb-2">
            <Zap className="w-3.5 h-3.5" />
            <span>FREQUENT &amp; POPULAR PACKAGES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            1-CLICK POPULAR ORDERS
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            The most frequently requested print packages by students and business owners in Rohtak.
          </p>
        </div>

        {/* 4 Clean Quick Packages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FREQUENT_PACKAGES.map((pkg) => {
            const whatsappUrl = buildWhatsAppLink({
              type: "frequent_package",
              productName: pkg.whatsappDetails.product,
              quantity: pkg.whatsappDetails.quantity,
              paper: pkg.whatsappDetails.paper,
              notes: pkg.whatsappDetails.notes
            });

            return (
              <div
                key={pkg.id}
                className="bg-gradient-to-b from-[#0c1830] to-[#070e1c] rounded-2xl border border-white/10 p-6 flex flex-col justify-between hover:border-red-500/50 hover:shadow-2xl transition-all"
              >
                <div>
                  <span className={`inline-block text-[10px] font-mono-tech ${pkg.badgeColor} text-white px-2.5 py-0.5 rounded font-bold uppercase tracking-wider mb-3`}>
                    {pkg.badge}
                  </span>

                  <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                    {pkg.title}
                  </h3>

                  <p className="text-xs text-slate-300 mb-4">
                    {pkg.summary}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-white/5 mb-5 text-xs text-slate-300 font-mono-tech">
                    {pkg.included.map((inc, iIdx) => (
                      <div key={iIdx} className="flex items-start gap-2 text-[11px]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>

                  <div className="text-[11px] font-mono-tech text-emerald-400 bg-[#050a14] p-2 rounded-lg border border-white/5 mb-5 flex items-center gap-1.5 font-bold">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{pkg.readyIn}</span>
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
