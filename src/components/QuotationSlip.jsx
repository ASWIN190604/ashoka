import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Receipt, 
  Send, 
  Printer, 
  RotateCcw, 
  CheckCircle2, 
  Sparkles,
  Barcode
} from "lucide-react";
import { BUSINESS_CONFIG } from "../data/business";
import { buildWhatsAppLink } from "../utils/whatsapp";

export default function QuotationSlip({ quoteData, onClear }) {
  const [isEjecting, setIsEjecting] = useState(false);
  const [orderRef, setOrderRef] = useState("ASH-" + Math.floor(100000 + Math.random() * 900000));
  const [generatedDate, setGeneratedDate] = useState(new Date().toLocaleString());

  const data = quoteData || {
    product: "Custom Die-Cut Waterproof Stickers",
    size: "3 x 3 inch",
    paper: "180 Micron Waterproof White Vinyl",
    gsm: "180 Micron",
    finish: "High Gloss UV Laminate",
    sides: "Single Sided",
    quantity: 500,
    estimateTotal: 1250,
    unitPrice: 2.5,
    turnaround: "Same Day Dispatch",
    customerName: "",
    customerPhone: "",
    deliveryNeeded: true
  };

  useEffect(() => {
    setIsEjecting(true);
    setOrderRef("ASH-" + Math.floor(100000 + Math.random() * 900000));
    setGeneratedDate(new Date().toLocaleString());
    const timer = setTimeout(() => setIsEjecting(false), 800);
    return () => clearTimeout(timer);
  }, [quoteData]);

  const whatsappUrl = buildWhatsAppLink({
    type: "formal_quote_order",
    productName: data.product,
    quantity: `${data.quantity} units`,
    size: data.size,
    paper: `${data.paper} (${data.gsm || ''})`,
    finish: data.finish,
    estimatedTotal: `₹${Number(data.estimateTotal).toLocaleString('en-IN')} (Estimated Quote #${orderRef})`,
    customerName: data.customerName,
    customerPhone: data.customerPhone,
    deliveryRequired: data.deliveryNeeded,
    notes: `Generated on Ashoka Printing Press Portal`
  });

  const handlePrintSlip = () => {
    window.print();
  };

  return (
    <section id="quotation-chamber" className="py-16 bg-[#060c18] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-500/30 text-red-400 text-xs font-mono-tech uppercase tracking-widest mb-2">
            <Receipt className="w-3.5 h-3.5" />
            <span>DISPENSER OUTPUT</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            OFFICIAL PRINT ESTIMATE SLIP
          </h2>
          <p className="text-slate-400 text-xs font-mono-tech mt-1">
            Physical receipt generated from the Ashoka digital production press.
          </p>
        </div>

        {/* The Receipt Dispenser Enclosure */}
        <div className="bg-[#091428] rounded-3xl p-6 sm:p-10 border-2 border-slate-700 shadow-2xl relative">
          
          {/* Top Dispenser Slot Bevel */}
          <div className="w-2/3 mx-auto h-3 bg-black rounded-full shadow-inner border border-slate-800 mb-4"></div>

          {/* Physical Ejected Quotation Receipt */}
          <AnimatePresence mode="wait">
            <motion.div
              key={orderRef}
              initial={{ y: -80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 120, damping: 14 }}
              className="max-w-md mx-auto paper-texture rounded-xl p-6 text-slate-900 shadow-2xl border border-slate-300 relative font-mono-tech text-xs"
            >
              {/* Corner Crop Marks */}
              <div className="absolute top-2 left-2 w-2.5 h-2.5 crop-mark-tl"></div>
              <div className="absolute top-2 right-2 w-2.5 h-2.5 crop-mark-tr"></div>
              <div className="absolute bottom-2 left-2 w-2.5 h-2.5 crop-mark-bl"></div>
              <div className="absolute bottom-2 right-2 w-2.5 h-2.5 crop-mark-br"></div>

              {/* Receipt Header */}
              <div className="text-center pb-3 border-b-2 border-dashed border-slate-400 space-y-1">
                <img 
                  src="/logo.svg" 
                  alt="Ashoka Printing Logo" 
                  className="h-8 mx-auto object-contain mb-1"
                />
                <h3 className="font-extrabold text-sm text-slate-950 uppercase tracking-tight">
                  ASHOKA PHOTOSTAT &amp; PRINTING PRESS
                </h3>
                <p className="text-[10px] text-slate-600">
                  Model Town / Delhi Road, Rohtak, Haryana 124001
                </p>
                <p className="text-[10px] text-slate-600">
                  Tel / WhatsApp: +91 {BUSINESS_CONFIG.phone}
                </p>
                <div className="pt-1 flex justify-between text-[10px] text-slate-500">
                  <span>REF: <strong>{orderRef}</strong></span>
                  <span>{generatedDate}</span>
                </div>
              </div>

              {/* Receipt Body Breakdown */}
              <div className="py-4 space-y-2 border-b-2 border-dashed border-slate-400 text-slate-800">
                <div className="flex justify-between">
                  <span className="text-slate-500">JOB PRODUCT:</span>
                  <span className="font-bold text-right text-slate-950 max-w-[200px] truncate">{data.product}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">SIZE / FORMAT:</span>
                  <span className="font-semibold">{data.size}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">SUBSTRATE / GSM:</span>
                  <span className="font-semibold">{data.paper} {data.gsm ? `(${data.gsm})` : ''}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">SURFACE FINISH:</span>
                  <span className="font-semibold">{data.finish}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">SIDES / MODE:</span>
                  <span className="font-semibold">{data.sides}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">TOTAL QUANTITY:</span>
                  <span className="font-extrabold text-slate-950">{data.quantity} Units</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">EST. TURNAROUND:</span>
                  <span className="font-bold text-emerald-800">{data.turnaround}</span>
                </div>
              </div>

              {/* Receipt Total */}
              <div className="py-3 border-b-2 border-dashed border-slate-400">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-[10px] uppercase text-slate-500 block">ESTIMATED TOTAL</span>
                    <span className="text-xl font-extrabold text-slate-950">
                      ₹{Number(data.estimateTotal).toLocaleString('en-IN')}
                    </span>
                  </div>
                  <span className="text-[10px] bg-red-100 text-red-800 px-2 py-1 rounded font-bold">
                    ONLINE ESTIMATE
                  </span>
                </div>
              </div>

              {/* Barcode & Verification */}
              <div className="pt-3 text-center space-y-1">
                <div className="font-mono text-xs tracking-widest text-slate-700 bg-slate-100 py-1.5 px-2 rounded border border-slate-300">
                  ||||| | |||| ||| ||||||| | ||||| {orderRef}
                </div>
                <p className="text-[9px] text-slate-500">
                  Present this slip at the Rohtak counter or send via WhatsApp for instant processing.
                </p>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Action CTAs Below Receipt */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 max-w-md mx-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-emerald-600/30 transition-all hover:scale-102"
            >
              <Send className="w-4 h-4" />
              <span>Confirm &amp; Order on WhatsApp</span>
            </a>

            <button
              onClick={handlePrintSlip}
              className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 font-semibold text-xs border border-white/10 flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Print Slip / Save as PDF</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
