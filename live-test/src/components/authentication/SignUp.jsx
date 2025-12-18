import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Lock, Mail, ArrowRight, ShieldCheck, 
  CheckCircle2, Github, Chrome, Loader2, Fingerprint
} from "lucide-react";
import { useToast } from "../../context/ToastContext"; // 1. Import the hook

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
    transition: { staggerChildren: 0.08, delayChildren: 0.1 } 
  }
};

export default function SignupPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showToast } = useToast(); // 2. Initialize toast
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    
    // 3. Validation Logic for Toast
    if (formData.password !== formData.confirmPassword) {
      showToast("error", "Cipher Mismatch: Security keys do not align.");
      return;
    }

    setIsSubmitting(true);

    // Simulate Auth Protocol
    setTimeout(() => {
      setIsSubmitting(false);
      showToast("success", "Operator Registry Complete. Welcome to SENSE.");
    }, 2000);
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="bg-white min-h-screen flex items-center justify-center p-4 md:p-10 font-sans relative overflow-hidden"
    >
      {/* VESTO GRADIENT ACCENTS */}
      <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-red-50 rounded-full blur-[120px] opacity-60" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-gray-50 rounded-full blur-[100px]" />

      <div className="w-full max-w-2xl relative z-10">
        {/* BRAND LOGO */}
        <motion.div variants={fadeInUp} className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-black text-white rounded-2xl mb-6 shadow-2xl shadow-gray-200">
            <Fingerprint size={28} className="text-red-600" />
          </div>
          <h1 className="text-5xl font-black tracking-tighter uppercase italic text-gray-900 leading-none">
            SENSE<span className="text-red-600">.</span>REGISTRY
          </h1>
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em] mt-4">
            Authorized Personnel Onboarding
          </p>
        </motion.div>

        {/* SIGNUP FORM CARD */}
        <motion.div 
          variants={fadeInUp}
          className="bg-gray-50 rounded-[48px] border border-gray-100 shadow-2xl shadow-gray-200/50 overflow-hidden relative"
        >
          {/* TOP ACCENT LINE */}
          <div className="h-1.5 w-full bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-20" />

          <div className="p-8 md:p-14">
            {/* SOCIAL AUTH SECTION */}
            <div className="mb-12">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest text-center mb-6">
                Direct Satellite Connection
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button 
                  onClick={() => showToast("success", "Establishing Google ID Handshake...")}
                  className="flex items-center justify-center gap-3 bg-white border border-gray-200 py-4 px-6 rounded-2xl hover:border-red-600 hover:shadow-lg hover:shadow-red-50 transition-all group"
                >
                  <Chrome size={18} className="text-gray-400 group-hover:text-red-600 transition-colors" />
                  <span className="text-xs font-black uppercase tracking-wider">Google ID</span>
                </button>
                <button 
                  onClick={() => showToast("success", "Syncing with GitHub Repositories...")}
                  className="flex items-center justify-center gap-3 bg-white border border-gray-200 py-4 px-6 rounded-2xl hover:border-black hover:shadow-lg hover:shadow-gray-100 transition-all group"
                >
                  <Github size={18} className="text-gray-400 group-hover:text-black transition-colors" />
                  <span className="text-xs font-black uppercase tracking-wider">GitHub ID</span>
                </button>
              </div>
              
              <div className="relative flex py-10 items-center">
                <div className="flex-grow border-t border-gray-200"></div>
                <span className="flex-shrink mx-6 text-[10px] font-black text-gray-300 uppercase tracking-widest">Manual Protocol</span>
                <div className="flex-grow border-t border-gray-200"></div>
              </div>
            </div>

            <form className="space-y-8" onSubmit={handleRegister}>
              {/* SECTION: NAMES */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">First Name</label>
                  <input 
                    type="text" name="firstName" placeholder="JOHN" required
                    className="w-full bg-white border border-gray-200 rounded-[22px] p-4 text-sm font-bold focus:outline-none focus:ring-4 focus:ring-red-50 focus:border-red-600 transition-all placeholder:text-gray-200 uppercase"
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">Last Name</label>
                  <input 
                    type="text" name="lastName" placeholder="DOE" required
                    className="w-full bg-white border border-gray-200 rounded-[22px] p-4 text-sm font-bold focus:outline-none focus:ring-4 focus:ring-red-50 focus:border-red-600 transition-all placeholder:text-gray-200 uppercase"
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* EMAIL */}
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">Communication Channel</label>
                <div className="relative group">
                  <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-red-600 transition-colors" size={18} />
                  <input 
                    type="email" name="email" placeholder="OPERATOR@SENSE.IO" required
                    className="w-full bg-white border border-gray-200 rounded-[22px] py-4 pl-14 pr-6 text-sm font-bold focus:outline-none focus:ring-4 focus:ring-red-50 focus:border-red-600 transition-all placeholder:text-gray-200"
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* SECURITY CIPHERS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">Security Cipher</label>
                  <input 
                    type="password" name="password" placeholder="••••••••" required
                    className="w-full bg-white border border-gray-200 rounded-[22px] p-4 text-sm font-bold focus:outline-none focus:ring-4 focus:ring-red-50 focus:border-red-600 transition-all"
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">Verify Cipher</label>
                  <input 
                    type="password" name="confirmPassword" placeholder="••••••••" required
                    className="w-full bg-white border border-gray-200 rounded-[22px] p-4 text-sm font-bold focus:outline-none focus:ring-4 focus:ring-red-50 focus:border-red-600 transition-all"
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* ACTION BUTTON */}
              <div className="pt-6">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-black text-white py-6 rounded-[28px] flex items-center justify-center gap-3 relative overflow-hidden group shadow-xl shadow-gray-300 transition-all"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <Loader2 size={20} className="animate-spin text-red-600" />
                      <span className="font-black uppercase text-xs tracking-[0.2em]">Enlisting...</span>
                    </div>
                  ) : (
                    <>
                      <span className="font-black uppercase text-xs tracking-[0.2em]">Authorize & Enlist</span>
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </motion.button>
              </div>

              <div className="text-center">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                  Existing Operator? <a href="/login" className="text-red-600 hover:underline ml-1">Re-Authenticate</a>
                </p>
              </div>
            </form>
          </div>
        </motion.div>

        {/* SECURITY FOOTER */}
        <motion.div 
          variants={fadeInUp}
          className="mt-12 flex flex-wrap justify-center gap-x-10 gap-y-4 text-[9px] font-black text-gray-400 uppercase tracking-[0.2em]"
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-100">
            <CheckCircle2 size={14} className="text-green-500" /> 
            Privacy Protocol Verified
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck size={14} className="text-red-600" /> 
            2FA-Ready Node
          </div>
        </motion.div>
      </div>

      {/* FIXED BRANDING FOOTER */}
      <div className="absolute bottom-8 right-12 hidden lg:flex items-center gap-4">
        <p className="text-[10px] font-black text-gray-300 uppercase tracking-[0.5em]">Sense Infrastructure © 2025</p>
        <div className="w-10 h-[1px] bg-gray-200" />
      </div>
    </motion.div>
  );
}