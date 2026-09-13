import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import { BUSINESS_CONFIG } from "../data/business";
import { buildQuickWhatsAppMessage } from "../utils/whatsapp";

export default function WhatsAppFloating() {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    const url = buildQuickWhatsAppMessage(customMsg);
    window.open(url, "_blank");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      
      {/* Popover Bubble */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="mb-3 bg-gradient-to-br from-[#0c1830] to-[#060b17] border-2 border-emerald-500/40 rounded-2xl p-4 shadow-2xl w-80 text-slate-100 relative"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 status-indicator-live"></div>
                <div>
                  <h4 className="text-xs font-bold text-white leading-tight">
                    Ashoka Production Desk
                  </h4>
                  <span className="text-[10px] font-mono-tech text-emerald-400">
                    Online in Rohtak HQ
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-white/10"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content */}
            <p className="text-xs text-slate-300 font-mono-tech my-3 leading-relaxed">
              Have a custom print specification, college thesis, or urgent sticker requirement? Chat directly with our press operator.
            </p>

            {/* Quick message form */}
            <form onSubmit={handleSend} className="space-y-2">
              <input
                type="text"
                placeholder="What would you like to print?..."
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                className="w-full bg-[#040812] border border-white/10 rounded-lg p-2 text-xs text-white placeholder-slate-500 focus:border-emerald-400 focus:outline-none"
              />
              <button
                type="submit"
                className="w-full py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-md"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Open Chat in WhatsApp</span>
              </button>
            </form>

            <div className="mt-2 pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono-tech text-slate-400">
              <span>+91 {BUSINESS_CONFIG.phone}</span>
              <span className="text-emerald-400">Model Town • Rohtak</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-2xl shadow-emerald-500/30 border-2 border-emerald-400 cursor-pointer relative group"
        aria-label="Contact on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-600 border-2 border-[#070e1c] flex items-center justify-center text-[9px] font-bold text-white">
          1
        </span>
        <MessageCircle className="w-7 h-7 fill-white" />
      </motion.button>

    </div>
  );
}
