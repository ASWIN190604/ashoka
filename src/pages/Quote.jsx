import React, { useState } from "react";
import { 
  Receipt, 
  Send, 
  FileText, 
  Calculator, 
  CheckCircle2, 
  Clock, 
  Printer 
} from "lucide-react";
import QuotationSlip from "../components/QuotationSlip";
import { buildWhatsAppLink } from "../utils/whatsapp";

export default function Quote() {
  const [productType, setProductType] = useState("Custom Print Job");
  const [quantity, setQuantity] = useState("500");
  const [size, setSize] = useState("Standard");
  const [paper, setPaper] = useState("300 GSM Art Card");
  const [finish, setFinish] = useState("Thermal Matte Lamination");
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [instructions, setInstructions] = useState("");
  const [activeQuote, setActiveQuote] = useState(null);

  const handleGenerateQuote = (e) => {
    e.preventDefault();
    setActiveQuote({
      product: productType,
      size,
      paper,
      finish,
      sides: "Custom Specification",
      quantity: Number(quantity) || 100,
      estimateTotal: Math.round((Number(quantity) || 100) * 2.5 + 150),
      unitPrice: 2.5,
      turnaround: "24 - 48 Hours",
      customerName,
      customerPhone,
      deliveryNeeded: true
    });

    const el = document.getElementById("quotation-chamber");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="py-16 bg-[#070e1c] min-h-screen text-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-500/30 text-red-400 text-xs font-mono-tech uppercase tracking-widest mb-2">
            <Calculator className="w-3.5 h-3.5" />
            <span>ESTIMATE GENERATOR</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            REQUEST A PRINT ESTIMATE
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Specify your dimensions, paper substrate, and required quantity. Generate a printable estimate receipt or send directly to our Rohtak press operator.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleGenerateQuote} className="bg-gradient-to-br from-[#0c1830] to-[#070e1c] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-mono-tech text-slate-400 block mb-1">
                PRODUCT TYPE:
              </label>
              <input
                type="text"
                value={productType}
                onChange={(e) => setProductType(e.target.value)}
                placeholder="e.g. Waterproof Stickers, Project Reports, Business Cards"
                className="w-full bg-[#060c18] border border-white/10 rounded-lg p-2.5 text-xs text-white focus:border-red-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="text-xs font-mono-tech text-slate-400 block mb-1">
                QUANTITY (PCS / SETS):
              </label>
              <input
                type="text"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="e.g. 500"
                className="w-full bg-[#060c18] border border-white/10 rounded-lg p-2.5 text-xs text-white font-mono-tech focus:border-red-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="text-xs font-mono-tech text-slate-400 block mb-1">
                DIMENSIONS / SIZE:
              </label>
              <input
                type="text"
                value={size}
                onChange={(e) => setSize(e.target.value)}
                placeholder="e.g. 3 x 3 inch, A4, 89 x 54 mm"
                className="w-full bg-[#060c18] border border-white/10 rounded-lg p-2.5 text-xs text-white focus:border-red-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-mono-tech text-slate-400 block mb-1">
                SUBSTRATE / PAPER GSM:
              </label>
              <input
                type="text"
                value={paper}
                onChange={(e) => setPaper(e.target.value)}
                placeholder="e.g. 300 GSM Art Card, 180 Micron Vinyl"
                className="w-full bg-[#060c18] border border-white/10 rounded-lg p-2.5 text-xs text-white focus:border-red-500 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-mono-tech text-slate-400 block mb-1">
              SURFACE FINISH / BINDING:
            </label>
            <input
              type="text"
              value={finish}
              onChange={(e) => setFinish(e.target.value)}
              placeholder="e.g. Velvet Soft-Touch, Golden Foil, Spiral Binding, Gloss Lamination"
              className="w-full bg-[#060c18] border border-white/10 rounded-lg p-2.5 text-xs text-white focus:border-red-500 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-mono-tech text-slate-400 block mb-1">
                YOUR NAME (OPTIONAL):
              </label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Your Name"
                className="w-full bg-[#060c18] border border-white/10 rounded-lg p-2.5 text-xs text-white focus:border-red-500 focus:outline-none"
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
                className="w-full bg-[#060c18] border border-white/10 rounded-lg p-2.5 text-xs text-white font-mono-tech focus:border-red-500 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-mono-tech text-slate-400 block mb-1">
              SPECIAL REQUIREMENTS / ARTWORK NOTES:
            </label>
            <textarea
              rows={2}
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              placeholder="e.g. Urgent same-day pickup required by 4 PM..."
              className="w-full bg-[#060c18] border border-white/10 rounded-lg p-2.5 text-xs text-white focus:border-red-500 focus:outline-none"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-red-600/30 transition-all hover:scale-102 cursor-pointer"
            >
              <Receipt className="w-4 h-4" />
              <span>GENERATE PHYSICAL QUOTATION SLIP</span>
            </button>
          </div>
        </form>

        {/* Ejected Slip */}
        <QuotationSlip quoteData={activeQuote} />

      </div>
    </div>
  );
}
