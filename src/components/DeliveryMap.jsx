import React from "react";
import { 
  Truck, 
  MapPin, 
  Navigation, 
  CheckCircle2, 
  ShieldCheck, 
  Clock 
} from "lucide-react";
import { BUSINESS_CONFIG } from "../data/business";

export default function DeliveryMap() {
  const deliveryTiers = [
    {
      region: "Rohtak Local & Counter",
      timeline: "Same-Day (15 - 45 Mins)",
      mode: "Store Counter Pickup / Local Express Courier",
      coverage: "Model Town, MDU Campus, Medical Mor, Delhi Road, Subhash Chowk"
    },
    {
      region: "Delhi-NCR & Haryana",
      timeline: "Next-Day Delivery",
      mode: "Express Surface Logistics",
      coverage: "Gurugram, Delhi, Faridabad, Sonipat, Panipat, Hisar, Karnal, Jhajjar"
    },
    {
      region: "All-India Pan-National",
      timeline: "2 - 4 Working Days",
      mode: "Air Express Dispatch (DTDC / BlueDart / SpeedPost)",
      coverage: "All major metros, Tier-1 & Tier-2 cities across 28 states"
    }
  ];

  return (
    <section id="delivery" className="py-20 bg-[#081020] relative overflow-hidden">
      
      {/* Background Registration Crosshairs */}
      <div className="absolute inset-0 bg-press-grid opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono-tech uppercase tracking-widest mb-2">
            <Truck className="w-3.5 h-3.5" />
            <span>SPEED LOGISTICS NETWORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            FROM OUR PRESS TO YOUR DOOR
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            Carefully packed in moisture-resistant bubble poly-packs and dispatched directly from our Rohtak production hub.
          </p>
        </div>

        {/* 3 Delivery Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {deliveryTiers.map((tier, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-b from-[#0c1830] to-[#070e1c] p-6 rounded-2xl border border-white/10 space-y-4 hover:border-emerald-500/40 transition-all"
            >
              <div className="flex items-center justify-between pb-3 border-b border-white/5">
                <span className="text-xs font-mono-tech font-bold text-slate-400">
                  TIER 0{idx + 1}
                </span>
                <span className="text-xs font-mono-tech text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  {tier.timeline}
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-white mb-1">
                  {tier.region}
                </h3>
                <p className="text-xs font-mono-tech text-slate-400">
                  {tier.mode}
                </p>
              </div>

              <div className="pt-2 border-t border-white/5">
                <span className="text-[10px] font-mono-tech text-slate-500 uppercase block mb-1">
                  KEY COVERAGE:
                </span>
                <p className="text-xs text-slate-300 font-mono-tech">
                  {tier.coverage}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Live Route Graphic Simulator Banner */}
        <div className="bg-[#050a14] rounded-2xl p-6 border border-white/10 text-xs font-mono-tech text-slate-400 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-red-500 animate-ping shrink-0"></div>
            <span>
              ORIGIN: <strong className="text-white">ASHOKA PRINTING PRESS (ROHTAK, HARYANA)</strong>
            </span>
          </div>

          <div className="flex items-center gap-2 text-emerald-400 font-bold">
            <Navigation className="w-4 h-4" />
            <span>DISPATCHING DAILY ACROSS ALL 28 INDIAN STATES</span>
          </div>

          <div className="text-slate-500">
            TRACKING ID SMS PROVIDED AT DISPATCH
          </div>
        </div>

      </div>
    </section>
  );
}
