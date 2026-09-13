import React from "react";
import StudentHubSection from "../components/StudentHubSection";
import WhatAreYouMaking from "../components/WhatAreYouMaking";
import PaperLab from "../components/PaperLab";

export default function StudentHub() {
  return (
    <div className="py-8 bg-[#070e1c] min-h-screen text-slate-100">
      <StudentHubSection />
      <PaperLab />
    </div>
  );
}
