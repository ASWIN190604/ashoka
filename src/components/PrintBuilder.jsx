import React, { useState, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Printer, 
  Layers, 
  Sparkles, 
  CreditCard, 
  GraduationCap, 
  FileText, 
  Maximize, 
  Check, 
  Receipt, 
  ArrowRight, 
  Clock, 
  Calculator,
  ShieldCheck,
  Send
} from "lucide-react";
import { PRINT_PRODUCTS, calculateEstimate } from "../data/products";
import { buildWhatsAppLink } from "../utils/whatsapp";

export default function PrintBuilder({ onQuoteGenerated, initialProduct = "stickers" }) {
  const [selectedProductId, setSelectedProductId] = useState(initialProduct);
  const currentProduct = PRINT_PRODUCTS.find(p => p.id === selectedProductId) || PRINT_PRODUCTS[0];

  const [selectedSizeId, setSelectedSizeId] = useState(currentProduct.sizes[0].id);
  const [selectedPaperId, setSelectedPaperId] = useState(currentProduct.papers[0].id);
  const [selectedFinishId, setSelectedFinishId] = useState(currentProduct.finishes[0].id);
  const [sides, setSides] = useState("single");
  const [quantity, setQuantity] = useState(currentProduct.defaultQty);
  const [pageCount, setPageCount] = useState(60); // For academic reports
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [deliveryNeeded, setDeliveryNeeded] = useState(true);

  // When switching product, reset sub-options to valid defaults
  const handleProductChange = (productId) => {
    const prod = PRINT_PRODUCTS.find(p => p.id === productId) || PRINT_PRODUCTS[0];
    setSelectedProductId(productId);
    setSelectedSizeId(prod.sizes[0].id);
    setSelectedPaperId(prod.papers[0].id);
    setSelectedFinishId(prod.finishes[0].id);
    setQuantity(prod.defaultQty);
  };

  const selectedSize = currentProduct.sizes.find(s => s.id === selectedSizeId) || currentProduct.sizes[0];
  const selectedPaper = currentProduct.papers.find(p => p.id === selectedPaperId) || currentProduct.papers[0];
  const selectedFinish = currentProduct.finishes.find(f => f.id === selectedFinishId) || currentProduct.finishes[0];

  const estimate = calculateEstimate({
    product: selectedProductId,
    sizeId: selectedSizeId,
    paperId: selectedPaperId,
    finishId: selectedFinishId,
    sides,
    quantity,
    pageCount
  });

  const whatsappUrl = buildWhatsAppLink({
    type: "custom_order",
    productName: currentProduct.name,
    quantity: `${quantity} ${selectedProductId === 'project-reports' ? 'Sets' : 'Pcs'}`,
    size: selectedSize.name,
    paper: `${selectedPaper.name} (${selectedPaper.gsm})`,
    finish: selectedFinish.name,
    estimatedTotal: `₹${estimate.totalPrice.toLocaleString('en-IN')} (Estimated)`,
    customerName,
    customerPhone,
    deliveryRequired: deliveryNeeded,
    notes: selectedProductId === 'project-reports' ? `${pageCount} Pages per report` : ''
  });

  const handleGenerateSlip = () => {
    if (onQuoteGenerated) {
      onQuoteGenerated({
        product: currentProduct.name,
        size: selectedSize.name,
        paper: selectedPaper.name,
        gsm: selectedPaper.gsm,
        finish: selectedFinish.name,
        sides: sides === "double" ? "Double Sided" : "Single Sided",
        quantity,
        pageCount: selectedProductId === 'project-reports' ? pageCount : null,
        estimateTotal: estimate.totalPrice,
        unitPrice: estimate.unitPrice,
        turnaround: estimate.turnaround,
        customerName,
        customerPhone,
        deliveryNeeded
      });
    }
  };

  return (
    <section id="builder" className="py-16 bg-[#070e1c] text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-500/30 text-red-400 text-xs font-mono-tech uppercase tracking-widest mb-2">
            <Calculator className="w-3.5 h-3.5" />
            <span>REAL-TIME CONFIGURATOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            BUILD YOUR PRINT JOB
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            Customize substrate weights, dimensions, surface coatings, and volume. Get an instant online estimate and physical quote slip.
          </p>
        </div>

        {/* Product Selection Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {PRINT_PRODUCTS.map((prod) => {
            const isSelected = selectedProductId === prod.id;
            return (
              <button
                key={prod.id}
                onClick={() => handleProductChange(prod.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? "bg-red-600 text-white shadow-lg shadow-red-600/30 scale-102"
                    : "bg-[#0c172e] text-slate-300 hover:bg-[#122244] border border-white/5"
                }`}
              >
                <span>{prod.name}</span>
                {prod.popular && (
                  <span className="text-[9px] bg-white/20 px-1.5 py-0.5 rounded font-mono-tech">
                    POPULAR
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Configurator Layout: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Options Controller */}
          <div className="lg:col-span-7 bg-[#0a1426] border border-white/10 rounded-2xl p-5 sm:p-7 space-y-6 shadow-xl">
            
            {/* 1. Size Selection */}
            <div>
              <label className="text-xs font-mono-tech text-slate-400 uppercase tracking-wider block mb-2.5">
                1. SELECT DIMENSIONS / SIZE:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {currentProduct.sizes.map((size) => {
                  const isSelected = selectedSizeId === size.id;
                  return (
                    <button
                      key={size.id}
                      onClick={() => setSelectedSizeId(size.id)}
                      className={`p-3 rounded-xl border text-left text-xs transition-all cursor-pointer ${
                        isSelected
                          ? "bg-red-600/20 border-red-500 text-white font-bold"
                          : "bg-[#060c18] border-white/5 text-slate-300 hover:border-white/20"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{size.name}</span>
                        {isSelected && <Check className="w-4 h-4 text-red-400" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Paper & Substrate Weight */}
            <div>
              <label className="text-xs font-mono-tech text-slate-400 uppercase tracking-wider block mb-2.5">
                2. PAPER SUBSTRATE &amp; GSM WEIGHT:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {currentProduct.papers.map((paper) => {
                  const isSelected = selectedPaperId === paper.id;
                  return (
                    <button
                      key={paper.id}
                      onClick={() => setSelectedPaperId(paper.id)}
                      className={`p-3 rounded-xl border text-left text-xs transition-all cursor-pointer ${
                        isSelected
                          ? "bg-red-600/20 border-red-500 text-white font-bold"
                          : "bg-[#060c18] border-white/5 text-slate-300 hover:border-white/20"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="block">{paper.name}</span>
                          <span className="text-[10px] font-mono-tech text-slate-400">{paper.gsm}</span>
                        </div>
                        {isSelected && <Check className="w-4 h-4 text-red-400" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Surface Finish / Binding */}
            <div>
              <label className="text-xs font-mono-tech text-slate-400 uppercase tracking-wider block mb-2.5">
                3. PROTECTIVE FINISH &amp; TREATMENT:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {currentProduct.finishes.map((fin) => {
                  const isSelected = selectedFinishId === fin.id;
                  return (
                    <button
                      key={fin.id}
                      onClick={() => setSelectedFinishId(fin.id)}
                      className={`p-3 rounded-xl border text-left text-xs transition-all cursor-pointer ${
                        isSelected
                          ? "bg-red-600/20 border-red-500 text-white font-bold"
                          : "bg-[#060c18] border-white/5 text-slate-300 hover:border-white/20"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{fin.name}</span>
                        {isSelected && <Check className="w-4 h-4 text-red-400" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. Sides (Single vs Double) */}
            {selectedProductId !== "stickers" && selectedProductId !== "flex-banners" && (
              <div>
                <label className="text-xs font-mono-tech text-slate-400 uppercase tracking-wider block mb-2.5">
                  4. PRINT SIDES:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setSides("single")}
                    className={`py-2.5 px-4 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                      sides === "single"
                        ? "bg-red-600/20 border-red-500 text-white"
                        : "bg-[#060c18] border-white/5 text-slate-300"
                    }`}
                  >
                    Single-Sided Print
                  </button>
                  <button
                    onClick={() => setSides("double")}
                    className={`py-2.5 px-4 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                      sides === "double"
                        ? "bg-red-600/20 border-red-500 text-white"
                        : "bg-[#060c18] border-white/5 text-slate-300"
                    }`}
                  >
                    Double-Sided (Duplex)
                  </button>
                </div>
              </div>
            )}

            {/* If Project Report: Page Count Slider */}
            {selectedProductId === "project-reports" && (
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-mono-tech text-slate-400 uppercase tracking-wider">
                    PAGES PER REPORT SET:
                  </label>
                  <span className="text-xs font-bold text-amber-400 font-mono-tech">{pageCount} Pages</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="300"
                  step="5"
                  value={pageCount}
                  onChange={(e) => setPageCount(Number(e.target.value))}
                  className="w-full accent-red-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
                />
              </div>
            )}

            {/* 5. Quantity Selection */}
            <div>
              <label className="text-xs font-mono-tech text-slate-400 uppercase tracking-wider block mb-2.5">
                5. QUANTITY (BATCH VOLUME):
              </label>
              <div className="flex flex-wrap gap-2">
                {currentProduct.quantities.map((qty) => (
                  <button
                    key={qty}
                    onClick={() => setQuantity(qty)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono-tech font-bold transition-all cursor-pointer ${
                      quantity === qty
                        ? "bg-red-600 text-white shadow-md"
                        : "bg-[#060c18] text-slate-300 border border-white/10 hover:border-white/30"
                    }`}
                  >
                    {qty} {selectedProductId === 'project-reports' ? 'Sets' : 'Pcs'}
                  </button>
                ))}
              </div>
            </div>

            {/* Optional Customer Contact for WhatsApp generation */}
            <div className="pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-mono-tech text-slate-400 block mb-1">
                  YOUR NAME (OPTIONAL):
                </label>
                <input
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full bg-[#060c18] border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-red-500 font-sans"
                />
              </div>
              <div>
                <label className="text-[11px] font-mono-tech text-slate-400 block mb-1">
                  PHONE NUMBER:
                </label>
                <input
                  type="tel"
                  placeholder="e.g. 98120XXXXX"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full bg-[#060c18] border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-red-500 font-mono-tech"
                />
              </div>
            </div>

          </div>

          {/* Right Column: Live Tactile Preview & Estimated Quote Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Tactile Material Simulation Preview Card */}
            <div className="paper-texture rounded-2xl p-6 text-slate-900 border border-slate-300 shadow-2xl relative overflow-hidden">
              
              {/* Real Industrial Crop Marks */}
              <div className="absolute top-2 left-2 w-3 h-3 crop-mark-tl"></div>
              <div className="absolute top-2 right-2 w-3 h-3 crop-mark-tr"></div>
              <div className="absolute bottom-2 left-2 w-3 h-3 crop-mark-bl"></div>
              <div className="absolute bottom-2 right-2 w-3 h-3 crop-mark-br"></div>

              {/* Top Proof Tag */}
              <div className="flex items-center justify-between text-[10px] font-mono-tech text-slate-500 border-b border-slate-300 pb-2 mb-4">
                <span className="font-bold text-red-700">ASHOKA LIVE SPECIFICATION PROOF</span>
                <span>ISO CMYK 2400DPI</span>
              </div>

              {/* Dynamic Visual Mockup */}
              <div className="bg-slate-100 rounded-xl p-6 border border-slate-200 text-center shadow-inner my-2 min-h-[160px] flex flex-col items-center justify-center relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-red-600 to-navy-900 text-white flex items-center justify-center shadow-lg mb-3">
                  <Printer className="w-8 h-8" />
                </div>
                <h4 className="text-base font-extrabold text-slate-900 leading-tight">
                  {currentProduct.name}
                </h4>
                <p className="text-xs text-slate-600 font-mono-tech mt-1">
                  {selectedSize.name} • {selectedPaper.gsm} • {selectedFinish.name}
                </p>
                <div className="mt-2 inline-flex items-center gap-1 text-[10px] font-mono-tech text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  <span>QC Inspected &amp; Precision Cut</span>
                </div>
              </div>

              {/* Live Estimate Breakdown */}
              <div className="mt-4 pt-3 border-t border-slate-300 space-y-2 text-xs font-mono-tech text-slate-700">
                <div className="flex justify-between">
                  <span>Configuration:</span>
                  <span className="font-bold text-slate-900">{selectedPaper.name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Quantity Ordered:</span>
                  <span className="font-bold text-slate-900">{quantity} units</span>
                </div>
                <div className="flex justify-between">
                  <span>Est. Turnaround:</span>
                  <span className="font-bold text-emerald-700">{estimate.turnaround}</span>
                </div>

                {/* Prominent Estimated Pricing Box */}
                <div className="mt-4 p-4 rounded-xl bg-slate-900 text-white flex items-center justify-between shadow-lg">
                  <div>
                    <span className="text-[10px] font-mono-tech text-amber-400 block uppercase tracking-widest font-bold">
                      ESTIMATED TOTAL (ONLINE QUOTE)
                    </span>
                    <span className="text-2xl sm:text-3xl font-extrabold text-white">
                      ₹{estimate.totalPrice.toLocaleString("en-IN")}
                    </span>
                    <span className="text-[10px] font-mono-tech text-slate-400 block mt-0.5">
                      (~₹{estimate.unitPrice} per unit estimate)
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] bg-red-600 px-2 py-1 rounded text-white font-bold font-mono-tech uppercase">
                      REQUEST QUOTE
                    </span>
                  </div>
                </div>

                <p className="text-[10px] text-slate-500 text-center font-mono-tech mt-2">
                  *Online estimate calculated from standard parameters. Final quote confirmed upon design pre-flight.
                </p>
              </div>

            </div>

            {/* Action Buttons: WhatsApp and Print Receipt */}
            <div className="space-y-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-xl shadow-emerald-600/20 transition-all hover:scale-102"
              >
                <Send className="w-4 h-4" />
                <span>Send Estimate to WhatsApp (+91 9812039707)</span>
              </a>

              <button
                onClick={handleGenerateSlip}
                className="w-full py-3 px-6 rounded-xl bg-[#0c1830] hover:bg-[#12244a] text-slate-200 hover:text-white font-bold text-xs uppercase tracking-wider border border-white/10 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Receipt className="w-4 h-4 text-red-400" />
                <span>Print Physical Quotation Slip Below</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
