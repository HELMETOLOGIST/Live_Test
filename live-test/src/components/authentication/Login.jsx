import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Lock, Mail, ArrowRight, ShieldCheck, 
  HardDrive, Cpu, AlertCircle, Fingerprint,
  Loader2
} from "lucide-react";
import { useToast } from "../../../src/context/ToastContext"; // 1. Import the hook

// Animation Variants
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
    transition: { staggerChildren: 0.1, delayChildren: 0.1 } 
  }
};

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const { showToast } = useToast(); // 2. Initialize toast

  const handleLogin = (e) => {
    e.preventDefault();
    setIsAuthenticating(true);

    // Simulate Auth Logic
    setTimeout(() => {
      setIsAuthenticating(false);
      
      // 3. Logic for Success / Error Toasts
      if (email === "admin@sense.com" && password === "1234") {
        showToast("success", "Biometric Identity Confirmed. Welcome back, Operator.");
        // navigate("/dashboard"); // Uncomment if using router
      } else {
        showToast("error", "Security Breach: Invalid Cipher or Identifier.");
      }
    }, 2000);
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="bg-white min-h-screen flex items-center justify-center p-6 font-sans relative overflow-hidden"
    >
      {/* VESTO THEME DECORATION */}
      <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-red-50 rounded-full blur-[120px] opacity-50" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-gray-50 rounded-full blur-[100px]" />
      
      <div className="w-full max-w-lg relative z-10">
        {/* BRAND LOGO SECTION */}
        <motion.div variants={fadeInUp} className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-black text-white rounded-2xl mb-6 shadow-2xl shadow-gray-300">
            <Fingerprint size={28} className="text-red-600" />
          </div>
          <h1 className="text-5xl font-black tracking-tighter uppercase italic text-gray-900 leading-none">
            SENSE<span className="text-red-600">.</span>
          </h1>
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em] mt-4">
            Authorized Personnel Terminal
          </p>
        </motion.div>

        {/* LOGIN FORM CARD */}
        <motion.div 
          variants={fadeInUp}
          className="bg-gray-50 rounded-[48px] border border-gray-100 shadow-2xl shadow-gray-200/50 overflow-hidden relative"
        >
          {/* TOP ACCENT LINE */}
          <div className="h-2 w-full bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-20" />

          <form className="p-10 md:p-14 space-y-8" onSubmit={handleLogin}>
            <div className="space-y-6">
              {/* EMAIL INPUT */}
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">Identifier</label>
                <div className="relative group">
                  <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-red-600 transition-colors" size={18} />
                  <input 
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white border border-gray-200 rounded-[24px] py-5 pl-14 pr-6 text-sm font-bold focus:outline-none focus:ring-4 focus:ring-red-50 focus:border-red-600 transition-all placeholder:text-gray-300 uppercase"
                    placeholder="OPERATOR@SENSE.IO"
                  />
                </div>
              </div>

              {/* PASSWORD INPUT */}
              <div className="space-y-2">
                <div className="flex justify-between px-1">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Security Cipher</label>
                    <button type="button" className="text-[9px] font-black text-red-600 uppercase hover:underline">Forgot?</button>
                </div>
                <div className="relative group">
                  <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-red-600 transition-colors" size={18} />
                  <input 
                    type="password" 
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-white border border-gray-200 rounded-[24px] py-5 pl-14 pr-6 text-sm font-bold focus:outline-none focus:ring-4 focus:ring-red-50 focus:border-red-600 transition-all placeholder:text-gray-300"
                    placeholder="••••••••••••"
                  />
                </div>
              </div>
            </div>

            {/* ACTION BUTTON */}
            <motion.button
              type="submit"
              disabled={isAuthenticating}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-black text-white py-6 rounded-[28px] flex items-center justify-center gap-3 relative overflow-hidden group shadow-xl shadow-gray-300 transition-all"
            >
              {isAuthenticating ? (
                <div className="flex items-center gap-3">
                   <Loader2 size={20} className="animate-spin text-red-600" />
                   <span className="font-black uppercase text-xs tracking-[0.2em]">Verifying Identity...</span>
                </div>
              ) : (
                <>
                  <span className="font-black uppercase text-xs tracking-[0.2em]">Initiate Session</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </motion.button>

            {/* SECONDARY ACTION */}
            <div className="pt-4 text-center">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                    New Operator? <button type="button" className="text-red-600 hover:underline ml-1">Request Enrollment</button>
                </p>
            </div>
          </form>

          {/* DECORATIVE BACKGROUND ICON */}
          <div className="absolute -bottom-10 -right-10 text-gray-200/20 opacity-30 pointer-events-none">
            <Cpu size={200} strokeWidth={1} />
          </div>
        </motion.div>

        {/* SECURITY FOOTER */}
        <motion.div 
          variants={fadeInUp}
          className="mt-12 flex flex-wrap items-center justify-center gap-8 text-[9px] font-black text-gray-400 uppercase tracking-widest"
        >
          <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-100">
            <ShieldCheck size={14} className="text-green-500" /> 
            AES-256 Encrypted
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            Global Ops Active
          </div>
        </motion.div>
      </div>

      {/* FIXED BRANDING FOOTER */}
      <div className="absolute bottom-8 left-12 hidden lg:flex items-center gap-4">
        <div className="w-10 h-[1px] bg-gray-200" />
        <p className="text-[10px] font-black text-gray-300 uppercase tracking-[0.5em]">Vesto System Node</p>
      </div>
    </motion.div>
  );
}