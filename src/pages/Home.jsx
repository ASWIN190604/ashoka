import React from "react";
import HeroSimple from "../components/HeroSimple";
import WhatWePrint from "../components/WhatWePrint";
import FrequentOrders from "../components/FrequentOrders";
import QuickOrderCalculator from "../components/QuickOrderCalculator";
import WorkShowcaseSimple from "../components/WorkShowcaseSimple";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <div className="space-y-0">
      {/* 1. Clean Direct Hero */}
      <HeroSimple />

      {/* 2. What Ashoka Makes (All Services) */}
      <WhatWePrint />

      {/* 3. Frequent & Popular Orders */}
      <FrequentOrders />

      {/* 4. Quick WhatsApp Order Calculator */}
      <QuickOrderCalculator />

      {/* 5. Recent Work Output */}
      <WorkShowcaseSimple />

      {/* 6. Facility & Contact Details */}
      <ContactSection />
    </div>
  );
}
