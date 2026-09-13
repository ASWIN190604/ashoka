import React, { useState } from "react";
import { 
  RotateCcw, 
  Search, 
  Send, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Printer
} from "lucide-react";
import { buildWhatsAppLink } from "../utils/whatsapp";

export default function ReorderSection() {
  const [orderNumber, setOrderNumber] = useState("");
  const [searched, setSearched] = useState(false);
  const [simulatedOrder, setSimulatedOrder] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!orderNumber.trim()) return;

    // Simulate lookup
    setSearched(true);
    setSimulatedOrder({
      ref: orderNumber.toUpperCase(),
      product: "Waterproof Vinyl Die-Cut Labels (3x3 inch)",
      previousQty: "500 Pcs",
      substrate: "180 Micron White Vinyl + Gloss UV Laminate",
      date: "Previous Production Run",
      status: "ARCHIVED IN PRINT RIP"
    });
  };

  const reorderWhatsAppUrl = simulatedOrder ? buildWhatsAppLink({
    type: "repeat_reorder",
    productName: `REPEAT ORDER: ${simulatedOrder.product}`,
    quantity: simulatedOrder.previousQty,
    paper: simulatedOrder.substrate,
    notes: `Reordering Previous Job Ref #${simulatedOrder.ref}`
  }) : "#";

  return (
    <section id="reorder" className="py-16 bg-[#070e1c] relative overflow-hidden border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="bg-gradient-to-br from-[#0c1933] to-[#060b17] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
          
          <div className="text-center max-w-xl mx-auto mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-500/30 text-blue-400 text-xs font-mono-tech uppercase tracking-widest mb-2">
              <RotateCcw className="w-3.5 h-3.5" />
              <span>RETURNING CLIENT EXPRESS DESK</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              PRINT IT AGAIN (1-CLICK REORDER)
            </h2>
            <p className="text-slate-400 text-xs font-mono-tech mt-1">
              Have an existing order number or phone number? Retrieve your archived pre-flight RIP files and reprint immediately.
            </p>
          </div>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto mb-6">
            <input
              type="text"
              placeholder="Enter Previous Order # (e.g. ASH-582914 or Phone)"
              value={orderNumber}
              onChange={(e) => setOrderNumber(e.target.value)}
              className="flex-1 bg-[#060c18] border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-red-500 font-mono-tech"
            />
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Search className="w-4 h-4" />
              <span>Lookup File</span>
            </button>
          </form>

          {/* Simulated Result */}
          {searched && simulatedOrder && (
            <div className="bg-[#050a14] border border-emerald-500/30 rounded-2xl p-5 text-xs font-mono-tech max-w-md mx-auto space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-white/10 text-emerald-400 font-bold">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  ARCHIVE FILE LOCATED
                </span>
                <span>#{simulatedOrder.ref}</span>
              </div>

              <div className="space-y-1 text-slate-300">
                <div>Job: <strong className="text-white">{simulatedOrder.product}</strong></div>
                <div>Substrate: {simulatedOrder.substrate}</div>
                <div>Last Run Volume: {simulatedOrder.previousQty}</div>
              </div>

              <a
                href={reorderWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Trigger Instant Reorder on WhatsApp</span>
              </a>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
