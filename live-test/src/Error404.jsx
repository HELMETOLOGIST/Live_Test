import React from "react";
import { motion } from "framer-motion";
import { 
  AlertCircle, 
  ArrowLeft, 
  Home, 
  Search, 
  WifiOff, 
  Terminal 
} from "lucide-react";

// Animation for the "404" Glitch
const glitchVariants = {
  animate: {
    x: [0, -2, 2, -2, 2, 0],
    skewX: [0, -10, 10, -10, 10, 0],
    transition: {
      duration: 0.4,
      repeat: Infinity,
      repeatType: "mirror",
      repeatDelay: 2
    }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

export default function Error404Page() {
  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="bg-white min-h-screen flex items-center justify-center p-6 md:p-10 overflow-hidden font-sans text-gray-900"
    >
      {/* Decorative Background Element */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] flex items-center justify-center">
        <h1 className="text-[40vw] font-black italic select-none">LOST</h1>
      </div>

      <div className="relative z-10 max-w-4xl w-full text-center space-y-8">
        
        {/* TOP STATUS BAR */}
        <motion.div variants={itemVariants} className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 bg-red-50 px-4 py-2 rounded-full">
            <AlertCircle size={16} className="text-red-600 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest text-red-600">
              Error Code: 0x404 // Signal Interrupted
            </span>
          </div>
        </motion.div>

        {/* MAIN 404 DISPLAY */}
        <motion.div variants={itemVariants} className="relative inline-block">
          <motion.h1 
            variants={glitchVariants}
            animate="animate"
            className="text-[10rem] md:text-[18rem] font-black leading-none italic tracking-tighter uppercase"
          >
            4<span className="text-red-600">0</span>4
          </motion.h1>
          
          {/* Scanline Effect */}
          <motion.div 
            animate={{ y: [-100, 400] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 w-full h-1 bg-red-600/10 blur-sm pointer-events-none" 
          />
        </motion.div>

        {/* TEXT CONTENT */}
        <div className="space-y-4">
          <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter">
            Pathing <span className="text-red-600">Error.</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-400 text-sm md:text-lg font-medium max-w-md mx-auto uppercase tracking-wide">
            The asset you are looking for has been moved, decommissioned, or never existed in the SENSE database.
          </motion.p>
        </div>

        {/* ACTION BUTTONS */}
        <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center justify-center gap-4 pt-8">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.history.back()}
            className="w-full md:w-auto flex items-center justify-center gap-3 px-10 py-5 border-2 border-black rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all"
          >
            <ArrowLeft size={16} /> Previous Node
          </motion.button>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full md:w-auto flex items-center justify-center gap-3 px-10 py-5 bg-red-600 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-red-100 hover:bg-black transition-all"
          >
            <Home size={16} /> Terminal Home
          </motion.button>
        </motion.div>

        {/* FOOTER TERMINAL LOG */}
        <motion.div 
          variants={itemVariants} 
          className="mt-12 p-6 bg-gray-50 rounded-[32px] border border-gray-100 max-w-lg mx-auto text-left"
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-red-600" />
            <div className="w-2 h-2 rounded-full bg-gray-200" />
            <div className="w-2 h-2 rounded-full bg-gray-200" />
            <span className="text-[9px] font-black uppercase tracking-widest text-gray-400 ml-2">Console Output</span>
          </div>
          <p className="font-mono text-[10px] text-gray-500 leading-relaxed">
            &gt; GET /requested_resource HTTP/1.1 <br />
            &gt; Host: sense.systems <br />
            &gt; Status: <span className="text-red-600 font-bold">404 NOT_FOUND</span> <br />
            &gt; Redirecting to secure fallback...
          </p>
        </motion.div>

      </div>
    </motion.div>
  );
}