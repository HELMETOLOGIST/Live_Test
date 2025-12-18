import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, Smartphone, RefreshCw, Lock, 
  ChevronLeft, Activity, ArrowRight, Fingerprint,
  Loader2
} from "lucide-react";

// Animation Variants matching Vesto Theme
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.1 } 
  }
};

export default function OTPVerificationPage() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(59);
  const [isVerifying, setIsVerifying] = useState(false);
  const inputRefs = useRef([]);

  // Timer logic
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (value, index) => {
    if (isNaN(value)) return;
    
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // Move to next input
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleVerify = (e) => {
    e.preventDefault();
    setIsVerifying(true);
    // Simulate verification
    setTimeout(() => setIsVerifying(false), 2000);
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="bg-white min-h-screen flex items-center justify-center p-4 md:p-6 font-sans relative overflow-hidden"
    >
      {/* Vesto Background Accents */}
      <div className="absolute top-[-15%] left-[-10%] w-[50%] h-[50%] bg-red-50 rounded-full blur-[120px] opacity-40" />
      <div className="absolute bottom-[-5%] right-[-5%] w-[35%] h-[35%] bg-gray-50 rounded-full blur-[100px]" />

      <div className="w-full max-w-xl relative z-10">
        
        {/* BRAND HEADER */}
        <motion.div variants={fadeInUp} className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-black text-white rounded-2xl mb-6 shadow-2xl shadow-gray-200">
            <Smartphone size={28} className="text-red-600" />
          </div>
          <h1 className="text-5xl font-black tracking-tighter uppercase italic text-gray-900 leading-none">
            SENSE<span className="text-red-600">.</span>Verify
          </h1>
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em] mt-4">
            Security Multi-Factor Auth
          </p>
        </motion.div>

        {/* VERIFICATION CARD */}
        <motion.div 
          variants={fadeInUp}
          className="bg-gray-50 rounded-[48px] border border-gray-100 p-8 md:p-14 shadow-2xl shadow-gray-200/50 relative overflow-hidden"
        >
          <div className="mb-10 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
                <Activity size={16} className="text-red-600" />
                <span className="text-[10px] font-black text-red-600 uppercase tracking-widest">Awaiting Token</span>
            </div>
            <p className="text-sm font-medium text-gray-500 leading-relaxed max-w-xs mx-auto">
                A verification signal has been sent to the terminal linked to <span className="text-black font-black">**8812</span>.
            </p>
          </div>

          <form onSubmit={handleVerify} className="space-y-10">
            {/* OTP INPUT NODES */}
            <div className="flex justify-between gap-2 sm:gap-4">
              {otp.map((data, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  maxLength="1"
                  inputMode="numeric"
                  value={data}
                  onChange={(e) => handleChange(e.target.value, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="w-full h-14 sm:h-20 text-center text-2xl font-black bg-white border border-gray-200 rounded-2xl sm:rounded-3xl focus:outline-none focus:ring-4 focus:ring-red-50 focus:border-red-600 transition-all shadow-sm"
                />
              ))}
            </div>

            {/* ACTION BUTTON */}
            <motion.button
              disabled={isVerifying || otp.some(v => v === "")}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-black text-white py-6 rounded-[28px] flex items-center justify-center gap-3 relative overflow-hidden group shadow-xl shadow-gray-300 disabled:opacity-30 transition-all"
            >
              {isVerifying ? (
                <Loader2 size={22} className="animate-spin text-red-600" />
              ) : (
                <>
                  <span className="font-black uppercase text-xs tracking-[0.2em]">Validate Identity</span>
                  <ShieldCheck size={18} className="group-hover:scale-110 transition-transform" />
                </>
              )}
            </motion.button>
          </form>

          {/* RESEND SECTION */}
          <div className="mt-10 pt-8 border-t border-gray-200 flex flex-col items-center gap-4">
            <div className="flex items-center gap-3">
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Signal Timeout:</span>
                <span className="text-sm font-black text-red-600 tabular-nums">{timer}s</span>
            </div>
            <button 
                disabled={timer > 0}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                    timer > 0 
                    ? 'text-gray-300 bg-gray-100 cursor-not-allowed' 
                    : 'text-black bg-white border border-gray-200 hover:border-red-600 hover:text-red-600'
                }`}
            >
                <RefreshCw size={14} className={timer === 0 ? "animate-spin-slow" : ""} /> Resend Signal
            </button>
          </div>
        </motion.div>

        {/* FOOTER ACTIONS */}
        <motion.div variants={fadeInUp} className="mt-10 flex flex-col sm:flex-row justify-between items-center gap-6 px-4">
            <a href="/login" className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest hover:text-red-600 transition-colors">
                <ChevronLeft size={16} /> Abort Access
            </a>
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 opacity-40">
                    <Fingerprint size={14} className="text-gray-900" />
                    <span className="text-[8px] font-black text-gray-900 uppercase tracking-widest">Biometric Encrypted</span>
                </div>
            </div>
        </motion.div>
      </div>

      {/* TACTICAL OVERLAY ICON */}
      <div className="absolute -bottom-20 -right-20 text-gray-50 pointer-events-none opacity-50">
        <Lock size={400} strokeWidth={1} />
      </div>
    </motion.div>
  );
}