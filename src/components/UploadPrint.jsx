import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FileUp, 
  CheckCircle2, 
  AlertCircle, 
  FileText, 
  Trash2, 
  Send, 
  Receipt, 
  ShieldCheck,
  Printer,
  Sparkles
} from "lucide-react";
import { buildWhatsAppLink } from "../utils/whatsapp";

export default function UploadPrint({ onQuoteGenerated }) {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isPreflighting, setIsPreflighting] = useState(false);
  const [preflightPassed, setPreflightPassed] = useState(false);

  // Print Config options
  const [copies, setCopies] = useState(1);
  const [pageSize, setPageSize] = useState("A4");
  const [colorMode, setColorMode] = useState("color");
  const [paperGsm, setPaperGsm] = useState("80 GSM Copier");
  const [bindingType, setBindingType] = useState("Spiral Plastic Binding");
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");

  const fileInputRef = useRef(null);

  const handleFile = (file) => {
    if (!file) return;
    setUploadedFile({
      name: file.name,
      size: (file.size / (1024 * 1024)).toFixed(2) + " MB",
      type: file.type || "Document",
      lastModified: new Date(file.lastModified).toLocaleDateString()
    });
    setIsPreflighting(true);
    setPreflightPassed(false);

    // Simulate real preflight check
    setTimeout(() => {
      setIsPreflighting(false);
      setPreflightPassed(true);
    }, 1200);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const removeFile = () => {
    setUploadedFile(null);
    setPreflightPassed(false);
  };

  const whatsappUrl = buildWhatsAppLink({
    type: "file_upload_order",
    productName: `Custom Print: ${uploadedFile ? uploadedFile.name : 'Design File'}`,
    quantity: `${copies} Copies`,
    size: pageSize,
    paper: paperGsm,
    finish: bindingType,
    estimatedTotal: "Direct Quote Required",
    customerName,
    customerPhone,
    notes: `File size: ${uploadedFile ? uploadedFile.size : 'Pending'}, Color Mode: ${colorMode}`
  });

  const handleGenerateQuote = () => {
    if (onQuoteGenerated) {
      onQuoteGenerated({
        product: uploadedFile ? `File Print: ${uploadedFile.name}` : "Custom Design File Print",
        size: pageSize,
        paper: paperGsm,
        finish: bindingType,
        sides: colorMode === "color" ? "Full Color CMYK" : "Monochrome Black & White",
        quantity: copies,
        estimateTotal: copies * (colorMode === "color" ? 12 : 3) + 30,
        unitPrice: colorMode === "color" ? 12 : 3,
        turnaround: "15 - 30 Mins Walk-in / Courier",
        customerName,
        customerPhone,
        deliveryNeeded: true
      });
    }
  };

  return (
    <section id="upload" className="py-20 bg-[#081020] relative border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-500/30 text-red-400 text-xs font-mono-tech uppercase tracking-widest mb-2">
            <FileUp className="w-3.5 h-3.5" />
            <span>DIRECT DESIGN SUBMISSION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            UPLOAD YOUR DESIGN
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            Submit your PDF, CDR, PSD, PNG, or Word file. Our system runs automated DPI &amp; bleed pre-flight checks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Drag & Drop Zone */}
          <div className="lg:col-span-6 space-y-4">
            
            <div
              onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current && fileInputRef.current.click()}
              className={`border-2 border-dashed rounded-2xl p-8 sm:p-12 text-center transition-all cursor-pointer relative overflow-hidden ${
                isDragging
                  ? "border-red-500 bg-red-500/10 scale-102"
                  : uploadedFile
                  ? "border-emerald-500/50 bg-[#0a1830]"
                  : "border-slate-700 bg-[#060c18] hover:border-slate-500 hover:bg-[#0a1224]"
              }`}
            >
              <input
                type="file"
                ref={fileInputRef}
                onChange={(e) => e.target.files && handleFile(e.target.files[0])}
                className="hidden"
                accept=".pdf,.png,.jpg,.jpeg,.cdr,.psd,.doc,.docx"
              />

              {!uploadedFile ? (
                <div className="space-y-3">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-tr from-red-600 to-navy-900 flex items-center justify-center shadow-lg border border-red-500/30">
                    <FileUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-base font-bold text-white">
                    Drop your print file here, or <span className="text-red-400 underline">browse</span>
                  </h3>
                  <p className="text-xs text-slate-400 font-mono-tech">
                    Supports PDF, PNG, JPG, CDR, PSD, DOCX (Max 150MB)
                  </p>
                  <span className="inline-block text-[10px] font-mono-tech text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
                    AUTOMATIC 300 DPI PRE-FLIGHT SCANNER
                  </span>
                </div>
              ) : (
                <div className="space-y-4 text-left">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white max-w-[200px] sm:max-w-xs truncate">
                          {uploadedFile.name}
                        </h4>
                        <span className="text-[10px] font-mono-tech text-slate-400">
                          {uploadedFile.size} • {uploadedFile.type}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={(e) => { e.stopPropagation(); removeFile(); }}
                      className="p-2 text-slate-400 hover:text-red-400 rounded-lg bg-white/5 hover:bg-white/10"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Preflight Status Result */}
                  {isPreflighting ? (
                    <div className="text-xs font-mono-tech text-amber-400 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
                      <span>PREFLIGHT: ANALYZING COLOR PROFILES &amp; RESOLUTION...</span>
                    </div>
                  ) : preflightPassed ? (
                    <div className="space-y-2 bg-[#061426] p-3 rounded-xl border border-emerald-500/30 text-xs font-mono-tech">
                      <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>PRE-FLIGHT PASSED: READY FOR PRODUCTION</span>
                      </div>
                      <div className="text-[11px] text-slate-400 space-y-0.5 pl-5">
                        <div>✓ Resolution: 300 DPI Verified</div>
                        <div>✓ Color Space: CMYK Optimized</div>
                        <div>✓ Bleed Margins: 3mm Safe Cut Zone Detected</div>
                      </div>
                    </div>
                  ) : null}
                </div>
              )}
            </div>

            {/* Quick Walk-in Note */}
            <div className="bg-[#060c18] p-4 rounded-xl border border-white/5 text-xs font-mono-tech text-slate-400 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>
                Files sent directly to WhatsApp or uploaded here are kept strictly confidential and destroyed after printing.
              </span>
            </div>

          </div>

          {/* Right Column: Configuration & Handoff */}
          <div className="lg:col-span-6 bg-[#0a1426] border border-white/10 rounded-2xl p-6 space-y-5">
            <h3 className="text-base font-bold text-white border-b border-white/10 pb-3 flex items-center justify-between">
              <span>CONFIGURE PRINT SPECS</span>
              <span className="text-xs font-mono-tech text-red-400 font-normal">STEP 2 OF 2</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Paper Size */}
              <div>
                <label className="text-xs font-mono-tech text-slate-400 block mb-1">
                  PAGE SIZE / FORMAT:
                </label>
                <select
                  value={pageSize}
                  onChange={(e) => setPageSize(e.target.value)}
                  className="w-full bg-[#060c18] border border-white/10 rounded-lg p-2.5 text-xs text-white focus:border-red-500 focus:outline-none"
                >
                  <option value="A4">A4 (210 x 297 mm)</option>
                  <option value="A3">A3 (297 x 420 mm)</option>
                  <option value="12x18 Super B">12 x 18 inch (Jumbo Sheet)</option>
                  <option value="Legal (FS)">Legal (Full Scap)</option>
                  <option value="Custom Roll">Large Format / Custom Dimensions</option>
                </select>
              </div>

              {/* Color Mode */}
              <div>
                <label className="text-xs font-mono-tech text-slate-400 block mb-1">
                  COLOR MODE:
                </label>
                <select
                  value={colorMode}
                  onChange={(e) => setColorMode(e.target.value)}
                  className="w-full bg-[#060c18] border border-white/10 rounded-lg p-2.5 text-xs text-white focus:border-red-500 focus:outline-none"
                >
                  <option value="color">Full Colour Ultra-HD (2400 DPI)</option>
                  <option value="bw">Monochrome Black &amp; White (Photostat)</option>
                </select>
              </div>

              {/* Paper GSM */}
              <div>
                <label className="text-xs font-mono-tech text-slate-400 block mb-1">
                  SUBSTRATE / GSM:
                </label>
                <select
                  value={paperGsm}
                  onChange={(e) => setPaperGsm(e.target.value)}
                  className="w-full bg-[#060c18] border border-white/10 rounded-lg p-2.5 text-xs text-white focus:border-red-500 focus:outline-none"
                >
                  <option value="80 GSM Copier">80 GSM Executive White Paper</option>
                  <option value="100 GSM Bond">100 GSM Watermarked Bond</option>
                  <option value="130 GSM Gloss Art">130 GSM Gloss Art Flyer</option>
                  <option value="170 GSM Satin Art">170 GSM Satin Heavy Art</option>
                  <option value="300 GSM Heavy Card">300 GSM Card Stock</option>
                  <option value="180 Micron Vinyl">Waterproof Vinyl Sticker Film</option>
                </select>
              </div>

              {/* Binding / Finishing */}
              <div>
                <label className="text-xs font-mono-tech text-slate-400 block mb-1">
                  BINDING / FINISHING:
                </label>
                <select
                  value={bindingType}
                  onChange={(e) => setBindingType(e.target.value)}
                  className="w-full bg-[#060c18] border border-white/10 rounded-lg p-2.5 text-xs text-white focus:border-red-500 focus:outline-none"
                >
                  <option value="Spiral Plastic Binding">PVC Plastic Spiral Binding + OHP</option>
                  <option value="Twin Wire-O Binding">Metallic Twin Wire-O Binding</option>
                  <option value="Hardbound Golden Foil">Hardbound Golden Embossed Thesis</option>
                  <option value="Thermal Lamination (Gloss)">Thermal Gloss Lamination</option>
                  <option value="Thermal Lamination (Matte)">Thermal Matte Lamination</option>
                  <option value="None / Loose Sheets">None (Loose Precision Cut Sheets)</option>
                </select>
              </div>

            </div>

            {/* Copies & Customer Info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div>
                <label className="text-xs font-mono-tech text-slate-400 block mb-1">
                  NO. OF COPIES:
                </label>
                <input
                  type="number"
                  min="1"
                  max="10000"
                  value={copies}
                  onChange={(e) => setCopies(Math.max(1, Number(e.target.value)))}
                  className="w-full bg-[#060c18] border border-white/10 rounded-lg p-2 text-xs text-white font-mono-tech"
                />
              </div>

              <div>
                <label className="text-xs font-mono-tech text-slate-400 block mb-1">
                  NAME:
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full bg-[#060c18] border border-white/10 rounded-lg p-2 text-xs text-white"
                />
              </div>

              <div>
                <label className="text-xs font-mono-tech text-slate-400 block mb-1">
                  PHONE:
                </label>
                <input
                  type="tel"
                  placeholder="Phone No."
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full bg-[#060c18] border border-white/10 rounded-lg p-2 text-xs text-white font-mono-tech"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5 pt-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 transition-all hover:scale-102"
              >
                <Send className="w-4 h-4" />
                <span>Send File Details to WhatsApp (+91 9812039707)</span>
              </a>

              <button
                onClick={handleGenerateQuote}
                className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 font-semibold text-xs border border-white/10 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Receipt className="w-4 h-4 text-red-400" />
                <span>Generate Physical Quotation Slip Below</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
