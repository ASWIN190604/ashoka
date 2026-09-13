import React from "react";
import { Sparkles, MessageCircle, ArrowRight } from "lucide-react";
import { BUSINESS_CONFIG } from "../data/business";
import { InstagramIcon } from "./SocialIcons";
import { buildQuickWhatsAppMessage } from "../utils/whatsapp";

export const RECENT_WORK = [
  {
    title: "Waterproof Jar & Bottle Stickers",
    tag: "180 Micron Vinyl",
    desc: "Laser contour die-cut labels with oil and moisture-proof gloss UV coating.",
    gradient: "from-red-600 to-amber-600"
  },
  {
    title: "MDU B.Tech Hardbound Project Thesis",
    tag: "Golden Foil Embossed",
    desc: "Maroon rexine hardcover book with 85 GSM executive bond paper innards.",
    gradient: "from-blue-900 to-indigo-900"
  },
  {
    title: "350 GSM Velvet Soft-Touch Visiting Cards",
    tag: "Velvet Matte Finish",
    desc: "Tactile soft-touch velvet lamination with sharp double-sided colour.",
    gradient: "from-slate-900 to-slate-800"
  },
  {
    title: "Star Flex Outdoor Shop Front Banner",
    tag: "340 GSM Star Flex",
    desc: "High-glow weatherproof banner with reinforced corner brass eyelets.",
    gradient: "from-emerald-800 to-teal-900"
  }
];

export default function WorkShowcaseSimple() {
  return (
    <section id="work" className="py-16 bg-[#070e1c] relative px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-500/30 text-red-400 text-xs font-mono-tech uppercase tracking-widest mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>FRESH FROM ROHTAK PRESS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              RECENT WORK OUTPUT
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Actual products printed and delivered from our Rohtak facility.
            </p>
          </div>

          <a
            href={BUSINESS_CONFIG.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-pink-600/10 hover:bg-pink-600/20 text-pink-400 border border-pink-500/30 text-xs font-mono-tech transition-all w-fit"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>Follow @ashokaphotostat</span>
          </a>
        </div>

        {/* 4 Clean Gallery Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {RECENT_WORK.map((item, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-b from-[#0c1830] to-[#070e1c] rounded-2xl border border-white/10 p-5 flex flex-col justify-between hover:border-red-500/50 hover:shadow-2xl transition-all"
            >
              <div>
                <div className={`h-28 rounded-xl bg-gradient-to-br ${item.gradient} p-3 text-white flex flex-col justify-between mb-4 border border-white/10 shadow-inner`}>
                  <span className="text-[10px] font-mono-tech bg-black/40 px-2 py-0.5 rounded backdrop-blur-sm self-start font-bold">
                    {item.tag}
                  </span>
                  <h4 className="text-sm font-extrabold text-white leading-tight">
                    {item.title}
                  </h4>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-mono-tech mb-4">
                  {item.desc}
                </p>
              </div>

              <a
                href={buildQuickWhatsAppMessage(`Hello, I would like to order "${item.title}".`)}
                target="_blank"
                rel="noopener noreferrer"
                className="pt-2 border-t border-white/10 inline-flex items-center justify-between text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <span>Order on WhatsApp</span>
                <MessageCircle className="w-4 h-4 fill-current" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
