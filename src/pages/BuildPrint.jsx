import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import PrintBuilder from "../components/PrintBuilder";
import QuotationSlip from "../components/QuotationSlip";

export default function BuildPrint() {
  const [searchParams] = useSearchParams();
  const initialProduct = searchParams.get("product") || "stickers";
  const [activeQuote, setActiveQuote] = useState(null);

  const handleQuoteGenerated = (data) => {
    setActiveQuote(data);
    const el = document.getElementById("quotation-chamber");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="py-8 bg-[#070e1c] min-h-screen text-slate-100">
      <PrintBuilder initialProduct={initialProduct} onQuoteGenerated={handleQuoteGenerated} />
      <QuotationSlip quoteData={activeQuote} />
    </div>
  );
}
