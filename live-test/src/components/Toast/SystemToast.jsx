import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ShieldAlert, X, Activity } from "lucide-react";

const toastTypes = {
  success: {
    icon: <CheckCircle2 className="text-green-500" size={18} />,
    color: "bg-green-500",
    sound: "/sounds/success.mp3",
    label: "ENCRYPTION_COMPLETE"
  },
  error: {
    icon: <ShieldAlert className="text-red-600" size={18} />,
    color: "bg-red-600",
    sound: "/sounds/denied.mp3",
    label: "CRITICAL_AUTH_FAILURE"
  }
};

export default function SystemToast({ id, type, message, onClose }) {
  const config = toastTypes[type] || toastTypes.success;

  useEffect(() => {
    const audio = new Audio(config.sound);
    audio.volume = 0.2;
    audio.play().catch(() => {});

    const timer = setTimeout(() => onClose(id), 5000);
    return () => clearTimeout(timer);
  }, [id, config.sound, onClose]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: 100, filter: "blur(10px)" }}
      animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, scale: 0.9, x: 20, transition: { duration: 0.2 } }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="relative group mb-4 pointer-events-auto"
    >
      {/* GLASSMORPHIC BACKGROUND */}
      <div className="relative w-[340px] md:w-[420px] bg-white/80 backdrop-blur-xl border border-gray-200 shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-2xl overflow-hidden p-5">
        
        {/* ANIMATED SCANLINE EFFECT */}
        <motion.div 
          initial={{ left: "-100%" }}
          animate={{ left: "100%" }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
          className="absolute top-0 w-24 h-full bg-gradient-to-r from-transparent via-red-500/5 to-transparent skew-x-12"
        />

        <div className="flex items-start gap-4 relative z-10">
          {/* ICON WITH PULSE */}
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1, type: "spring" }}
            className="relative"
          >
            <div className={`absolute inset-0 blur-md opacity-20 ${config.color}`} />
            <div className="relative bg-gray-50 p-2 rounded-xl border border-gray-100">
              {config.icon}
            </div>
          </motion.div>

          {/* CONTENT SECTION */}
          <div className="flex-1 space-y-1">
            <motion.div 
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2"
            >
              <Activity size={10} className="text-red-600 animate-pulse" />
              <span className="text-[9px] font-black text-red-600 uppercase tracking-[0.3em]">
                {config.label}
              </span>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-[13px] font-bold text-gray-900 leading-snug tracking-tight"
            >
              {message}
            </motion.p>
          </div>

          {/* CLOSE BUTTON */}
          <button 
            onClick={() => onClose(id)}
            className="p-1 hover:bg-gray-100 rounded-lg transition-all text-gray-300 hover:text-black"
          >
            <X size={16} />
          </button>
        </div>

        {/* MODERN DOT MATRIX DECO */}
        <div className="absolute bottom-2 right-2 flex gap-1">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-[2px] h-[2px] bg-gray-200 rounded-full" />
          ))}
        </div>

        {/* DYNAMIC PROGRESS BAR */}
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gray-50">
          <motion.div 
            initial={{ width: "100%" }}
            animate={{ width: "0%" }}
            transition={{ duration: 5, ease: "linear" }}
            className={`h-full ${type === 'error' ? 'bg-red-600' : 'bg-black'}`}
          />
        </div>
      </div>
    </motion.div>
  );
}