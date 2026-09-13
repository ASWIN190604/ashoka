import React from "react";
import { Link } from "react-router-dom";
import { 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  Printer, 
  Layers, 
  ShieldCheck, 
  Receipt,
  ArrowRight
} from "lucide-react";
import { InstagramIcon } from "./SocialIcons";
import { BUSINESS_CONFIG } from "../data/business";
import { SERVICES } from "../data/services";
import { buildQuickWhatsAppMessage } from "../utils/whatsapp";

export default function Footer() {
  return (
    <footer className="bg-[#050914] text-slate-400 text-xs font-sans relative border-t border-white/10 pt-16 pb-12 overflow-hidden">
      
      {/* Background Registration Grid */}
      <div className="absolute inset-0 bg-press-grid opacity-10 pointer-events-none"></div>

      {/* Industrial Crop Marks in Footer Corners */}
      <div className="absolute top-4 left-4 text-slate-700 text-[9px] font-mono-tech hidden sm:block">
        <span>CROP_BL_001 [ASHOKA PRESS ROHTAK]</span>
      </div>
      <div className="absolute top-4 right-4 text-slate-700 text-[9px] font-mono-tech hidden sm:block text-right">
        <span>CYAN_MAGENTA_YELLOW_BLACK_VERIFIED</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Column 1: Brand & Identity (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block bg-white p-1.5 rounded-lg border border-slate-700 shadow-md">
              <img 
                src="/logo.svg" 
                alt="Ashoka Photostat & Printing Press" 
                className="h-10 object-contain"
              />
            </Link>

            <p className="text-xs text-slate-300 font-mono-tech leading-relaxed">
              {BUSINESS_CONFIG.name} — Modern industrial digital printing, precision waterproof sticker cutting, academic thesis binding, and nationwide express courier dispatch.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={BUSINESS_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-pink-600/20 text-slate-300 hover:text-pink-400 border border-white/10 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={buildQuickWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600 text-emerald-400 hover:text-white border border-emerald-500/30 transition-colors"
                aria-label="WhatsApp"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href={`tel:${BUSINESS_CONFIG.phone}`}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-blue-600/20 text-slate-300 hover:text-blue-400 border border-white/10 transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Key Printing Services (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono-tech uppercase tracking-widest text-red-400 font-bold">
              PRINT SERVICES
            </h4>
            <ul className="space-y-2">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Portals & Hubs (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono-tech uppercase tracking-widest text-blue-400 font-bold">
              PORTALS
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/build" className="hover:text-white transition-colors">
                  Print Builder
                </Link>
              </li>
              <li>
                <Link to="/upload" className="hover:text-white transition-colors">
                  Upload Design
                </Link>
              </li>
              <li>
                <Link to="/students" className="hover:text-white transition-colors">
                  Student Print Hub
                </Link>
              </li>
              <li>
                <Link to="/business" className="hover:text-white transition-colors">
                  Business Print Kits
                </Link>
              </li>
              <li>
                <Link to="/quote" className="hover:text-white transition-colors">
                  Get a Quotation
                </Link>
              </li>
              <li>
                <Link to="/#workshop" className="hover:text-white transition-colors">
                  Our Machinery
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Rohtak HQ Facility Contact (3 Cols) */}
          <div className="lg:col-span-3 space-y-3 bg-[#081022] p-4 rounded-xl border border-white/5">
            <h4 className="text-xs font-mono-tech uppercase tracking-widest text-emerald-400 font-bold">
              ROHTAK FACILITY
            </h4>

            <div className="space-y-2 text-[11px] font-mono-tech text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>{BUSINESS_CONFIG.address.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`tel:${BUSINESS_CONFIG.phone}`} className="hover:text-white">
                  +91 {BUSINESS_CONFIG.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{BUSINESS_CONFIG.operatingHours.weekdays}</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={buildQuickWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-md"
              >
                <span>Direct WhatsApp Order</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Technical Strip & CMYK Color Calibration Swatch */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono-tech text-slate-500">
          <div>
            © {new Date().getFullYear()} {BUSINESS_CONFIG.name}. All rights reserved. Rohtak, Haryana.
          </div>

          {/* CMYK Calibration Swatches */}
          <div className="flex items-center gap-2">
            <span className="text-slate-600">CMYK CALIBRATION:</span>
            <span className="w-3.5 h-3.5 rounded-sm bg-cyan-400 inline-block" title="Cyan"></span>
            <span className="w-3.5 h-3.5 rounded-sm bg-pink-500 inline-block" title="Magenta"></span>
            <span className="w-3.5 h-3.5 rounded-sm bg-yellow-400 inline-block" title="Yellow"></span>
            <span className="w-3.5 h-3.5 rounded-sm bg-slate-900 border border-slate-700 inline-block" title="Black"></span>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/contact" className="hover:text-slate-300">Contact</Link>
            <Link to="/services" className="hover:text-slate-300">Services</Link>
            <Link to="/quote" className="hover:text-slate-300">Estimate</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
