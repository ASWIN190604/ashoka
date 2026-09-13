import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Phone, 
  Menu, 
  X, 
  Layers, 
  Calculator, 
  Image, 
  MapPin, 
  MessageCircle
} from "lucide-react";
import { BUSINESS_CONFIG } from "../data/business";
import { buildQuickWhatsAppMessage } from "../utils/whatsapp";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "What We Print", path: "/#services" },
    { name: "Popular Packages", path: "/#frequent-orders" },
    { name: "Quick Quote", path: "/#quick-quote" },
    { name: "Recent Work", path: "/#work" },
    { name: "Contact & Location", path: "/#contact" }
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#070d18] border-b border-white/5 text-[11px] font-mono-tech text-slate-400 py-1.5 px-4 sm:px-8 hidden sm:flex items-center justify-between z-50">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 status-indicator-live"></span>
            OPEN TODAY • ROHTAK, HARYANA
          </span>
          <span className="text-slate-600">|</span>
          <span>SAME-DAY DISPATCH &amp; COUNTER PICKUP</span>
        </div>
        <a 
          href={`tel:${BUSINESS_CONFIG.phone}`} 
          className="flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors font-bold"
        >
          <Phone className="w-3.5 h-3.5 text-red-500" />
          <span>Call: +91 {BUSINESS_CONFIG.phone}</span>
        </a>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled 
          ? "bg-[#070e1c]/95 backdrop-blur-md shadow-2xl border-b border-white/10 py-3" 
          : "bg-[#091224] border-b border-white/5 py-4"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="bg-white p-1 rounded-md border border-slate-700 shadow-md">
              <img 
                src="/logo.svg" 
                alt="Ashoka Photostat & Printing Press Logo" 
                className="h-10 sm:h-12 object-contain"
              />
            </div>
            <div className="hidden lg:block text-left">
              <div className="text-[10px] uppercase font-mono-tech tracking-widest text-red-500 font-bold">
                Commercial Digital Press
              </div>
              <div className="text-xs text-slate-400">Rohtak, Haryana • Delivery Across India</div>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-semibold text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Direct WhatsApp CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={buildQuickWhatsAppMessage()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-emerald-600/20 transition-all hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Order on WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={buildQuickWhatsAppMessage()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-emerald-600 text-white text-xs font-bold flex items-center gap-1"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp</span>
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-white/5 text-slate-300 border border-white/10"
              aria-label="Toggle Navigation"
            >
              {isOpen ? <X className="w-6 h-6 text-red-400" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden border-t border-white/10 bg-[#070e1c] px-4 pt-3 pb-6 space-y-3">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-2 rounded-lg bg-white/5 text-slate-200 text-xs font-semibold"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <a
              href={`tel:${BUSINESS_CONFIG.phone}`}
              className="w-full py-2.5 rounded-lg bg-white/10 text-white text-xs font-bold flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-red-400" />
              <span>Call +91 {BUSINESS_CONFIG.phone}</span>
            </a>
          </div>
        )}
      </header>
    </>
  );
}
