import React from "react";
import BusinessHubSection from "../components/BusinessHubSection";
import PrintingWorkshop from "../components/PrintingWorkshop";
import WorkShowcase from "../components/WorkShowcase";

export default function BusinessHub() {
  return (
    <div className="py-8 bg-[#070e1c] min-h-screen text-slate-100">
      <BusinessHubSection />
      <PrintingWorkshop />
      <WorkShowcase />
    </div>
  );
}
