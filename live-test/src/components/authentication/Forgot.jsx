import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldAlert, Mail, ChevronLeft, RefreshCw, 
  HardDrive, Radio, Zap, CheckCircle2,
  ArrowRight, Lock
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
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function ForgotPasswordPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    // Simulate network delay
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="bg-white min-h-screen flex items-center justify-center p-6 font-sans relative overflow-hidden"
    >
      {/* Vesto Soft Background Elements */}
      <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-red-50 rounded-full blur-[120px] opacity-60" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[30%] h-[30%] bg-gray-50 rounded-full blur-[100px]" />

      <div className="w-full max-w-xl relative z-10">
        
        {/* TOP BRANDING */}
        <motion.div variants={fadeInUp} className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-black text-white rounded-2xl mb-6 shadow-2xl">
            <Lock size={24} className="text-red-600" />
          </div>
          <h1 className="text-5xl font-black text-gray-900 uppercase tracking-tighter leading-none italic">
            Access <span className="text-red-600">Recovery</span>
          </h1>
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mt-4">
            Vesto Security Protocol 2.4
          </p>
        </motion.div>

        {/* MAIN INTERFACE CARD */}
        <motion.div 
          variants={fadeInUp}
          className="bg-gray-50 rounded-[48px] border border-gray-100 p-8 md:p-14 shadow-2xl shadow-gray-200/50 relative overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div 
                key="recovery-form"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="mb-10 space-y-4">
                    <div className="flex items-center gap-3 border-l-4 border-red-600 pl-4">
                        <h2 className="text-xl font-black uppercase tracking-tight">Identify Account</h2>
                    </div>
                    <p className="text-sm font-medium text-gray-500 leading-relaxed">
                        Enter your registered operator email. A unique hardware bypass link will be transmitted to your terminal.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">Operator Email Address</label>
                    <div className="relative">
                        <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input 
                            type="email" 
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="operator@vesto.io"
                            className="w-full bg-white border border-gray-100 rounded-[24px] py-5 pl-14 pr-6 text-sm font-bold focus:outline-none focus:ring-4 focus:ring-red-50 focus:border-red-600 transition-all"
                        />
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02, backgroundColor: "#000" }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isLoading}
                    className="w-full bg-red-600 text-white py-6 rounded-[24px] font-black uppercase text-xs tracking-[0.2em] flex items-center justify-center gap-3 shadow-xl shadow-red-200 disabled:opacity-50 transition-colors"
                  >
                    {isLoading ? (
                        <RefreshCw size={20} className="animate-spin" />
                    ) : (
                        <>Transmit Recovery Signal <ArrowRight size={18} /></>
                    )}
                  </motion.button>
                </form>

                <div className="mt-10 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <a href="/login" className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest hover:text-red-600 transition-colors">
                        <ChevronLeft size={14} /> Back to Terminal
                    </a>
                    <div className="flex items-center gap-2">
                        <ShieldAlert size={12} className="text-red-600" />
                        <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Encrypted Session</span>
                    </div>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="success-state"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6"
              >
                <div className="w-24 h-24 bg-green-50 text-green-600 rounded-[32px] flex items-center justify-center mx-auto mb-8 shadow-inner">
                    <CheckCircle2 size={40} />
                </div>
                <h2 className="text-3xl font-black uppercase tracking-tighter mb-4 italic text-gray-900">Signal <span className="text-green-600">Locked</span></h2>
                <div className="bg-white p-6 rounded-3xl border border-gray-100 mb-8 inline-block w-full">
                    <p className="text-sm font-bold text-gray-500 mb-1 uppercase tracking-tight">Transmission sent to:</p>
                    <p className="text-lg font-black text-black">{email}</p>
                </div>
                
                <div className="space-y-4">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest leading-relaxed">
                        Access link expires in <span className="text-red-600 italic font-black">60 minutes</span>
                    </p>
                    <button 
                        onClick={() => setIsSubmitted(false)}
                        className="flex items-center gap-2 mx-auto text-[10px] font-black text-black uppercase tracking-widest hover:text-red-600 transition-all bg-gray-100 px-6 py-3 rounded-full"
                    >
                        <RefreshCw size={14} /> Re-transmit Signal
                    </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Background Decorative Gear */}
          <div className="absolute -bottom-16 -left-16 text-gray-200/20 pointer-events-none">
            <Radio size={240} strokeWidth={1} />
          </div>
        </motion.div>

        {/* RESPONSIVE FOOTER NOTES */}
        <motion.div 
            variants={fadeInUp}
            className="mt-8 flex flex-col md:flex-row gap-4 justify-center items-center"
        >
            <div className="px-6 py-3 bg-gray-50 rounded-full border border-gray-100 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest">Server Status: Online</span>
            </div>
            <div className="px-6 py-3 bg-gray-50 rounded-full border border-gray-100 flex items-center gap-3">
                <HardDrive size={14} className="text-gray-400" />
                <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest">Node ID: VS-PORTAL-09</span>
            </div>
        </motion.div>
      </div>
    </motion.div>
  );
}