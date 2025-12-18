import React from "react";
import { motion } from "framer-motion";
import { 
  CheckCircle2, Package, Calendar, MapPin, 
  ArrowRight, Download, Share2, Rocket, ExternalLink 
} from "lucide-react";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.1, delayChildren: 0.3 } 
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

// Fire Spark Component
const FireSpark = ({ delay }) => (
  <motion.div
    initial={{ y: 0, x: 0, opacity: 1, scale: 1 }}
    animate={{ 
      y: -150 - Math.random() * 100, 
      x: (Math.random() - 0.5) * 100,
      opacity: 0,
      scale: 0
    }}
    transition={{ 
      duration: 1.5 + Math.random(), 
      repeat: Infinity, 
      delay: delay,
      ease: "easeOut" 
    }}
    className="absolute w-1 h-1 bg-orange-500 rounded-full shadow-[0_0_8px_#f97316]"
    style={{ left: "50%", top: "50%" }}
  />
);

export default function SuccessPage() {
  const orderId = "VST-9920-X102";
  const deliveryDate = "24 DEC, 2025";

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="bg-white min-h-screen pt-20 md:pt-32 pb-24 px-4 md:px-6 font-sans relative overflow-hidden"
    >
      {/* BACKGROUND GRID DECORATION */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, backgroundSize: '32px 32px' }} />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* SUCCESS HERO SECTION */}
        <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
          <div className="relative inline-block">
            {/* FIRE SPARK PARTICLES */}
            {[...Array(12)].map((_, i) => (
              <FireSpark key={i} delay={i * 0.2} />
            ))}
            
            <motion.div 
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", damping: 12, stiffness: 100 }}
              className="w-20 h-20 md:w-24 md:h-24 bg-green-500 text-white rounded-[28px] md:rounded-[32px] flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-green-200 relative z-10"
            >
              <CheckCircle2 size={40} className="md:w-12 md:h-12" strokeWidth={2.5} />
            </motion.div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 uppercase tracking-tighter leading-none mb-4 px-2">
            Deployment <span className="text-red-600">Active</span>
          </h1>
          <p className="text-[10px] md:text-[12px] font-black text-gray-400 uppercase tracking-[0.2em] md:tracking-[0.4em]">Transaction Authenticated & Logged</p>
        </motion.div>

        {/* ORDER SPECS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          
          {/* IDENTIFICATION BOX */}
          <motion.div variants={itemVariants} className="bg-black text-white p-8 md:p-10 rounded-[40px] md:rounded-[48px] shadow-2xl relative overflow-hidden">
            <div className="relative z-10 space-y-8">
              <div>
                <p className="text-[10px] font-black text-red-500 uppercase tracking-widest mb-1">Log ID</p>
                <h2 className="text-2xl md:text-3xl font-black tracking-tighter">{orderId}</h2>
              </div>
              
              <div className="flex gap-8">
                <div>
                  <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Status</p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs md:text-sm font-bold uppercase tracking-tight">Preparing</span>
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Priority</p>
                  <span className="text-xs md:text-sm font-bold uppercase tracking-tight">Express Ground</span>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex gap-3 md:gap-4">
                <button className="flex-1 bg-white/10 hover:bg-white/20 transition-colors py-3 rounded-xl flex items-center justify-center gap-2 text-[9px] md:text-[10px] font-black uppercase tracking-widest">
                  <Download size={14} /> Blueprint
                </button>
                <button className="flex-1 bg-white/10 hover:bg-white/20 transition-colors py-3 rounded-xl flex items-center justify-center gap-2 text-[9px] md:text-[10px] font-black uppercase tracking-widest">
                  <Share2 size={14} /> Manifest
                </button>
              </div>
            </div>
            {/* Background Text */}
            <div className="absolute -right-4 -bottom-4 text-[80px] md:text-[120px] font-black text-white/[0.03] select-none uppercase tracking-tighter italic pointer-events-none">
              VESTO
            </div>
          </motion.div>

          {/* LOGISTICS SUMMARY */}
          <motion.div variants={itemVariants} className="bg-gray-50 border border-gray-100 p-8 md:p-10 rounded-[40px] md:rounded-[48px] space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-2xl border border-gray-100 flex items-center justify-center text-red-600 shadow-sm flex-shrink-0">
                <Calendar size={18} />
              </div>
              <div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Arrival</p>
                <p className="text-lg md:text-xl font-black uppercase tracking-tighter text-gray-900">{deliveryDate}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-2xl border border-gray-100 flex items-center justify-center text-red-600 shadow-sm flex-shrink-0">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Target Destination</p>
                <p className="text-xs md:text-sm font-bold text-gray-600 leading-snug">
                  Sector 7, Tech Enclave, Phase 2<br/>
                  Bangalore, KA 560001
                </p>
              </div>
            </div>

            <div className="pt-4">
                <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "25%" }}
                        transition={{ duration: 1.5, delay: 1 }}
                        className="h-full bg-red-600 shadow-[0_0_8px_#dc2626]"
                    />
                </div>
                <div className="flex justify-between mt-2 text-[7px] md:text-[8px] font-black uppercase tracking-[0.2em] text-gray-400">
                    <span>Processed</span>
                    <span>Transit</span>
                    <span>Deployment</span>
                </div>
            </div>
          </motion.div>
        </div>

        {/* ITEM MINI-MANIFEST */}
        <motion.section variants={itemVariants} className="border border-gray-100 rounded-[32px] md:rounded-[40px] p-6 md:p-12 mb-12">
           <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-8 border-b border-gray-100 pb-4">Hardware Contents</h3>
           <div className="space-y-6">
              <SuccessItem name="High-Performance Brake Disc" qty="01" price="₹4,250" />
              <SuccessItem name="Ceramic Brake Pads (Set)" qty="02" price="₹3,600" />
              <div className="pt-6 border-t border-gray-100 flex justify-between items-end">
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Total Asset Valuation</span>
                  <span className="text-xl md:text-2xl font-black tracking-tighter">₹9,263.00</span>
              </div>
           </div>
        </motion.section>

        {/* ACTIONS */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
          <motion.button 
            whileHover={{ scale: 1.02, backgroundColor: "#dc2626" }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 bg-black text-white py-5 md:py-6 rounded-2xl md:rounded-3xl font-black uppercase text-[11px] md:text-[12px] tracking-[0.2em] flex items-center justify-center gap-3 shadow-xl transition-colors"
          >
            Track Deployment <Rocket size={18} />
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.02, backgroundColor: "#f9fafb" }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 border-2 border-gray-100 text-black py-5 md:py-6 rounded-2xl md:rounded-3xl font-black uppercase text-[11px] md:text-[12px] tracking-[0.2em] flex items-center justify-center gap-3"
          >
            Continue Sourcing <ArrowRight size={18} />
          </motion.button>
        </motion.div>

        {/* SUPPORT FOOTER */}
        <motion.p variants={itemVariants} className="text-center mt-12 text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-widest flex flex-wrap items-center justify-center gap-2 px-4">
           Need Technical Assistance? <span className="text-red-600 hover:underline cursor-pointer flex items-center gap-1">Open Comms <ExternalLink size={10}/></span>
        </motion.p>
      </div>
    </motion.div>
  );
}

function SuccessItem({ name, qty, price }) {
    return (
        <div className="flex justify-between items-center group">
            <div className="flex items-center gap-4 md:gap-6">
                <span className="text-[9px] md:text-[10px] font-black text-red-600 bg-red-50 px-2 py-1 rounded-md">{qty}</span>
                <span className="text-xs md:text-sm font-black uppercase tracking-tight text-gray-800">{name}</span>
            </div>
            <span className="text-xs md:text-sm font-bold text-gray-500">{price}</span>
        </div>
    );
}