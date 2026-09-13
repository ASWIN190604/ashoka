import React, { useState } from "react";
import { 
  Calculator, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  Clock, 
  Receipt,
  FileText
} from "lucide-react";
import { buildWhatsAppLink } from "../utils/whatsapp";

export default function QuickOrderCalculator() {
  const [product, setProduct] = useState("Waterproof Stickers");
  const [quantity, setQuantity] = useState("500");
  const [size, setSize] = useState("3 x 3 inch");
  const [paper, setPaper] = useState("180 Micron Vinyl (Gloss)");
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [notes, setNotes] = useState("");

  const whatsappUrl = buildWhatsAppLink({
    type: "instant_calculator_quote",
    productName: product,
    quantity: `${quantity} Pcs / Units`,
    size: size,
    paper: paper,
    customerName: customerName,
    customerPhone: customerPhone,
    notes: notes || "Direct WhatsApp inquiry from website calculator"
  });

  return (
    <section id="quick-quote" className="py-16 bg-[#070e1c] relative px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono-tech uppercase tracking-widest mb-2">
            <Calculator className="w-3.5 h-3.5" />
            <span>FAST WHATSAPP INQUIRY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            QUICK PRINT CALCULATOR
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            Select your product and quantity to generate an instant WhatsApp inquiry directly to our Rohtak press desk.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="bg-gradient-to-br from-[#0c1830] to-[#070e1c] border border-white/10 rounded-3xl p-6 sm:p-9 shadow-2xl space-y-6">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Product Selector */}
            <div>
              <label className="text-xs font-mono-tech text-slate-300 font-bold block mb-1.5">
                SELECT PRODUCT:
              </label>
              <select
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                className="w-full bg-[#060c18] border border-white/15 rounded-xl p-3 text-xs text-white focus:border-emerald-400 focus:outline-none font-medium"
              >
                <option value="Waterproof Stickers & Labels">Waterproof Stickers &amp; Die-Cut Labels</option>
                <option value="College Project Report / Thesis">College Project Report / Thesis (Hardbound)</option>
                <option value="Visiting Cards (350 GSM)">Executive Visiting Cards (350 GSM Velvet)</option>
                <option value="Outdoor Star Flex Banner">Outdoor Star Flex Banner</option>
                <option value="Bulk Photostat / Duplication">Bulk Photostat / Commercial Xerox</option>
                <option value="Food Menus & Booklets">Food Menus, Booklets &amp; Catalogues</option>
                <option value="Document Lamination / Binding">Lamination &amp; Spiral Binding</option>
                <option value="Custom Print Job">Other Custom Printing Job</option>
              </select>
            </div>

            {/* Quantity */}
            <div>
              <label className="text-xs font-mono-tech text-slate-300 font-bold block mb-1.5">
                QUANTITY (PCS / SETS):
              </label>
              <input
                type="text"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="e.g. 100, 500, 1000, 3 Sets"
                className="w-full bg-[#060c18] border border-white/15 rounded-xl p-3 text-xs text-white font-mono-tech focus:border-emerald-400 focus:outline-none"
              />
            </div>

            {/* Size */}
            <div>
              <label className="text-xs font-mono-tech text-slate-300 font-bold block mb-1.5">
                SIZE / FORMAT:
              </label>
              <input
                type="text"
                value={size}
                onChange={(e) => setSize(e.target.value)}
                placeholder="e.g. 3 x 3 inch, A4, 89 x 54 mm, 6 x 3 ft"
                className="w-full bg-[#060c18] border border-white/15 rounded-xl p-3 text-xs text-white focus:border-emerald-400 focus:outline-none"
              />
            </div>

            {/* Paper / Material */}
            <div>
              <label className="text-xs font-mono-tech text-slate-300 font-bold block mb-1.5">
                PAPER / FINISH PREFERENCE:
              </label>
              <input
                type="text"
                value={paper}
                onChange={(e) => setPaper(e.target.value)}
                placeholder="e.g. 180 Micron Vinyl, 350 GSM Card, 85 GSM Bond"
                className="w-full bg-[#060c18] border border-white/15 rounded-xl p-3 text-xs text-white focus:border-emerald-400 focus:outline-none"
              />
            </div>

          </div>

          {/* Customer info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-white/5">
            <div>
              <label className="text-xs font-mono-tech text-slate-400 block mb-1">
                YOUR NAME (OPTIONAL):
              </label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="e.g. Rahul Verma"
                className="w-full bg-[#060c18] border border-white/10 rounded-xl p-2.5 text-xs text-white focus:border-emerald-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-mono-tech text-slate-400 block mb-1">
                PHONE NUMBER:
              </label>
              <input
                type="tel"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                placeholder="e.g. 98120XXXXX"
                className="w-full bg-[#060c18] border border-white/10 rounded-xl p-2.5 text-xs text-white font-mono-tech focus:border-emerald-400 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-mono-tech text-slate-400 block mb-1">
              ADDITIONAL INSTRUCTIONS / DEADLINE:
            </label>
            <input
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. Urgent same-day pickup required in Rohtak..."
              className="w-full bg-[#060c18] border border-white/10 rounded-xl p-2.5 text-xs text-white focus:border-emerald-400 focus:outline-none"
            />
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-xl shadow-emerald-600/30 transition-all hover:scale-102"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Send Order Inquiry to WhatsApp (+91 9812039707)</span>
            </a>
            <p className="text-[11px] text-center text-slate-400 font-mono-tech mt-2">
              Opens WhatsApp with pre-filled specifications for instant operator response.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
