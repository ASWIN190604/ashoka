import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  AlertTriangle, 
  RotateCcw, 
  Printer, 
  Home, 
  ArrowRight,
  Sparkles
} from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] bg-[#070e1c] flex items-center justify-center p-4 relative overflow-hidden text-slate-100">
      
      {/* Background Registration Grid */}
      <div className="absolute inset-0 bg-press-grid opacity-20 pointer-events-none"></div>

      <div className="max-w-xl w-full text-center relative z-10">
        
        {/* Animated Jammed Sheet Visual */}
        <motion.div
          animate={{ rotate: [-2, 2, -2] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-48 h-48 mx-auto mb-6 bg-gradient-to-tr from-red-600 via-amber-600 to-red-700 rounded-3xl p-6 shadow-2xl flex flex-col items-center justify-center border-4 border-amber-400 relative overflow-hidden"
        >
          {/* Crumpled Paper Visual Effect */}
          <div className="absolute inset-0 bg-halftone opacity-40"></div>
          
          <AlertTriangle className="w-16 h-16 text-white mb-2 animate-bounce" />
          <span className="text-3xl font-extrabold text-white font-mono-tech tracking-widest">
            404
          </span>
          <span className="text-[10px] font-mono-tech font-bold text-amber-200 uppercase tracking-widest">
            ERROR CODE #JAM_04
          </span>
        </motion.div>

        {/* Headline */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 border border-red-500/30 text-red-400 text-xs font-mono-tech uppercase tracking-widest mb-3">
          <span>FEED TRAY FAULT DETECTED</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
          404 — PAPER JAM IN THE PRESS!
        </h1>

        <p className="text-sm text-slate-400 font-mono-tech max-w-md mx-auto mb-8 leading-relaxed">
          The requested URL sheet got caught in the high-speed paper feed rollers. Don't worry — our optical sensors have paused the press.
        </p>

        {/* Recovery Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-red-600/30 transition-all hover:scale-105"
          >
            <Home className="w-4 h-4" />
            <span>CLEAR JAM &amp; RETURN TO PRESS</span>
          </Link>

          <Link
            to="/build"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 font-semibold text-xs border border-white/10 flex items-center justify-center gap-2 transition-all"
          >
            <Printer className="w-4 h-4 text-red-400" />
            <span>START A FRESH PRINT JOB</span>
          </Link>
        </div>

        <div className="mt-12 text-[10px] font-mono-tech text-slate-500">
          [ASHOKA PRESS ERROR RECOVERY • ROHTAK PRODUCTION SYSTEM]
        </div>

      </div>
    </div>
  );
}
