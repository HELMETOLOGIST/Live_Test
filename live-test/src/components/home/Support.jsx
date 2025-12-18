import React from "react";
import { motion } from "framer-motion";
import { Send, ShieldCheck, Mail, User, ChevronDown } from "lucide-react";

export default function Support() {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 260, damping: 20 },
    },
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="bg-white min-h-screen flex flex-col items-center px-6 py-16 md:py-24 overflow-hidden"
    >
      
      {/* ================= SENSE BRANDING ================= */}
      <motion.div variants={itemVariants} className="flex flex-col items-center text-center mb-12 space-y-2">
        <span className="text-red-600 font-black text-xs uppercase tracking-[0.4em]">
          Support Center
        </span>
        <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter uppercase">
          SENSE
        </h1>
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="h-1.5 bg-red-600 mt-4 rounded-full" 
        />
      </motion.div>

      {/* ================= MAIN FORM BOX ================= */}
      <motion.div 
        variants={itemVariants}
        className="w-full max-w-3xl bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-[32px] p-8 md:p-12 border border-gray-100 relative z-10"
      >
        
        <div className="mb-10 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase tracking-tight">
            How can we <span className="text-red-600">help?</span>
          </h2>
          <p className="text-gray-400 font-medium text-sm mt-2 uppercase tracking-widest">
            Expert assistance for industrial solutions.
          </p>
        </div>

        {/* FORM */}
        <form className="w-full space-y-6" onSubmit={(e) => e.preventDefault()}>
          
          {/* Full Name */}
          <motion.div variants={itemVariants} className="relative group">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-red-600 transition-colors" size={20} />
            <input
              type="text"
              placeholder="NAME - SURNAME"
              className="w-full h-16 bg-gray-50 border-2 border-transparent px-12 rounded-2xl font-black text-xs tracking-widest uppercase focus:outline-none focus:border-red-600 focus:bg-white transition-all placeholder:text-gray-400"
            />
          </motion.div>

          {/* EMAIL + SUBJECT GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Email */}
            <motion.div variants={itemVariants} className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-red-600 transition-colors" size={20} />
              <input
                type="email"
                placeholder="E-MAIL ADDRESS"
                className="w-full h-16 bg-gray-50 border-2 border-transparent px-12 rounded-2xl font-black text-xs tracking-widest uppercase focus:outline-none focus:border-red-600 focus:bg-white transition-all placeholder:text-gray-400"
              />
            </motion.div>

            {/* Subject Dropdown */}
            <motion.div variants={itemVariants} className="relative group">
              <select
                className="w-full h-16 bg-gray-50 border-2 border-transparent px-5 rounded-2xl font-black text-xs tracking-widest uppercase appearance-none focus:outline-none focus:border-red-600 focus:bg-white transition-all text-gray-900 cursor-pointer"
              >
                <option value="" disabled selected>SELECT SUBJECT</option>
                <option>Support & Spare Parts</option>
                <option>Sales Inquiry</option>
                <option>Technical Issue</option>
                <option>Bulk Ordering</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none group-focus-within:text-red-600" size={20} />
            </motion.div>
          </div>

          {/* MESSAGE */}
          <motion.div variants={itemVariants} className="relative">
            <textarea
              rows="5"
              placeholder="DESCRIBE YOUR REQUEST..."
              className="w-full bg-gray-50 border-2 border-transparent px-5 py-4 rounded-2xl font-black text-xs tracking-widest uppercase focus:outline-none focus:border-red-600 focus:bg-white transition-all placeholder:text-gray-400 resize-none"
            ></textarea>
          </motion.div>

          {/* PRIVACY POLICY */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ backgroundColor: "#fff" }}
            className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl border border-gray-100 transition-colors"
          >
            <input 
              type="checkbox" 
              className="w-5 h-5 accent-red-600 cursor-pointer rounded-md border-none" 
              id="privacy"
            />
            <label htmlFor="privacy" className="text-[10px] md:text-xs font-black text-gray-500 uppercase tracking-widest cursor-pointer select-none">
              I accept the <a href="#" className="text-red-600 hover:underline">Privacy Policy</a> and data processing terms.
            </label>
          </motion.div>

          {/* SUBMIT BUTTON */}
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.02, backgroundColor: "#dc2626" }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="group w-full bg-black text-white py-5 px-8 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 shadow-xl shadow-gray-200"
          >
            <span className="text-xs font-black uppercase tracking-[0.3em]">Send Request</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <Send className="w-4 h-4" />
            </motion.div>
          </motion.button>

        </form>

        {/* Footer Trust Badge */}
        <motion.div 
          variants={itemVariants}
          className="mt-10 pt-8 border-t border-gray-100 flex items-center justify-center gap-2"
        >
            <ShieldCheck className="text-green-500" size={18} />
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
              Secured industrial-grade encryption
            </span>
        </motion.div>
      </motion.div>

      {/* Decorative Brand Text */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.05, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-12 hidden md:block"
      >
         <p className="text-[100px] font-black text-gray-900 select-none pointer-events-none uppercase">
           SENSE PARTS
         </p>
      </motion.div>
    </motion.div>
  );
}