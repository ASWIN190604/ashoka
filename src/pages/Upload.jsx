import React, { useState } from "react";
import UploadPrint from "../components/UploadPrint";
import QuotationSlip from "../components/QuotationSlip";

export default function Upload() {
  const [activeQuote, setActiveQuote] = useState(null);

  const handleQuoteGenerated = (quoteData) => {
    setActiveQuote(quoteData);
    const el = document.getElementById("quotation-chamber");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="py-8 bg-[#070e1c] min-h-screen text-slate-100">
      <UploadPrint onQuoteGenerated={handleQuoteGenerated} />
      <QuotationSlip quoteData={activeQuote} />
    </div>
  );
}
