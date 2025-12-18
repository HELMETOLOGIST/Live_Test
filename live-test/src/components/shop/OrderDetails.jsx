import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Package, Truck, CheckCircle2, MapPin, 
  Calendar, CreditCard, ChevronLeft, ArrowRight,
  AlertCircle, RotateCcw, XCircle, Info,
  Fingerprint, Box
} from "lucide-react";

// Enhanced Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: [0.16, 1, 0.3, 1] // Custom quintic ease-out for a premium feel
    } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.15,
      delayChildren: 0.1
    } 
  }
};

// New variant for the tracking line expansion
const lineDraw = {
  hidden: { width: 0 },
  visible: { 
    width: "100%", 
    transition: { duration: 1.5, delay: 0.5, ease: "easeInOut" } 
  }
};

export default function OrderDetailsPage() {
  const [showCancelModal, setShowCancelModal] = useState(false);

  const trackingSteps = [
    { status: "Order Placed", date: "Dec 12, 10:30 AM", completed: true, icon: <Box size={16}/> },
    { status: "Processing", date: "Dec 12, 02:45 PM", completed: true, icon: <Fingerprint size={16}/> },
    { status: "In Transit", date: "Dec 14, 08:00 AM", completed: true, icon: <Truck size={16}/> },
    { status: "Out for Delivery", date: "Expected Today", completed: false, icon: <MapPin size={16}/> },
  ];

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="bg-white min-h-screen p-4 md:p-10 font-sans text-gray-900"
    >
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* TOP NAVIGATION & HEADER */}
        <motion.div variants={fadeInUp} className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2">
            <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-red-600 transition-colors mb-4">
              <ChevronLeft size={16} /> Back to Dashboard
            </button>
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter italic uppercase">
              Order <span className="text-red-600">#SN-881290</span>
            </h1>
            <div className="flex items-center gap-4">
              <span className="bg-black text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest">In-Transit</span>
              <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                <Calendar size={12} /> Dec 12, 2025
              </span>
            </div>
          </div>

          <div className="flex gap-3 w-full md:w-auto">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 md:flex-none bg-gray-50 border border-gray-100 px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white hover:border-red-600 transition-all"
            >
              Download Invoice
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.02, backgroundColor: "#000" }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 md:flex-none bg-red-600 text-white px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-red-100 transition-all"
            >
              Live Support
            </motion.button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT COLUMN: TRACKING & ITEMS */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* TRACKING TIMELINE CARD */}
            <motion.div variants={fadeInUp} className="bg-gray-50 rounded-[48px] p-8 md:p-12 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-10 h-10 bg-black text-white rounded-xl flex items-center justify-center">
                  <Truck size={20} />
                </div>
                <h3 className="text-lg font-black uppercase italic tracking-tight">Logistic Pathway</h3>
              </div>

              <div className="relative flex flex-col md:flex-row justify-between gap-8">
                {/* Animated Horizontal Line (Desktop) */}
                <motion.div 
                  variants={lineDraw}
                  className="hidden md:block absolute top-6 left-0 h-[2px] bg-red-600/20 z-0 origin-left" 
                />
                
                {trackingSteps.map((step, idx) => (
                  <motion.div 
                    key={idx} 
                    className="relative z-10 flex flex-row md:flex-col items-start md:items-center gap-4 md:gap-0 md:text-center flex-1"
                  >
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3 + (idx * 0.1), type: "spring", stiffness: 200 }}
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-lg ${
                        step.completed ? "bg-red-600 text-white shadow-red-100" : "bg-white border-2 border-gray-100 text-gray-300"
                      }`}
                    >
                      {step.completed ? <CheckCircle2 size={20} /> : step.icon}
                    </motion.div>
                    <div className="md:mt-4">
                      <p className={`text-[11px] font-black uppercase tracking-widest ${step.completed ? "text-black" : "text-gray-400"}`}>
                        {step.status}
                      </p>
                      <p className="text-[10px] font-bold text-gray-400 uppercase mt-1">{step.date}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ORDER INVENTORY */}
            <motion.div variants={fadeInUp} className="bg-white rounded-[48px] p-8 md:p-12 border border-gray-100 shadow-xl shadow-gray-100/50">
              <h3 className="text-lg font-black uppercase italic tracking-tight mb-8">Order Inventory</h3>
              <div className="space-y-6">
                {[1, 2].map((item) => (
                  <motion.div 
                    key={item} 
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-3xl border border-gray-50 hover:border-red-100 transition-all group"
                  >
                    <div className="w-24 h-24 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-red-50 transition-colors">
                      <Package size={40} className="text-gray-200 group-hover:text-red-600 transition-colors" />
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <p className="text-[10px] font-black text-red-600 uppercase tracking-widest mb-1">SKU: SN-MECH-00{item}</p>
                      <h4 className="text-xl font-black tracking-tight uppercase">High-Precision Valve Module</h4>
                      <p className="text-sm font-medium text-gray-400">Industrial Series • Grade A Titanium</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-black">$450.00</p>
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Qty: 01</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: SUMMARY & ACTIONS */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* PAYMENT SUMMARY */}
            <motion.div variants={fadeInUp} className="bg-black text-white rounded-[40px] p-8 md:p-10 shadow-2xl shadow-gray-200">
              <h3 className="text-sm font-black uppercase tracking-[0.3em] text-red-600 mb-8">Cost Analysis</h3>
              <div className="space-y-4 border-b border-white/10 pb-6 mb-6">
                <div className="flex justify-between text-xs font-bold text-gray-400 uppercase tracking-widest">
                  <span>Subtotal</span>
                  <span className="text-white">$900.00</span>
                </div>
                <div className="flex justify-between text-xs font-bold text-gray-400 uppercase tracking-widest">
                  <span>Shipping</span>
                  <span className="text-white">$45.00</span>
                </div>
                <div className="flex justify-between text-xs font-bold text-gray-400 uppercase tracking-widest">
                  <span>Tax (EST)</span>
                  <span className="text-white">$12.50</span>
                </div>
              </div>
              <div className="flex justify-between items-end">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-red-600">Total Charged</span>
                <span className="text-4xl font-black italic">$957.50</span>
              </div>
            </motion.div>

            {/* SHIPPING INFO */}
            <motion.div variants={fadeInUp} className="bg-gray-50 rounded-[40px] p-8 border border-gray-100">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-6 flex items-center gap-2">
                <MapPin size={14} className="text-red-600" /> Delivery Terminal
              </h3>
              <p className="text-sm font-black uppercase leading-relaxed">
                Terminal 07-B<br />
                1200 Industrial Way, Nadakkavu<br />
                Kozhikode, Kerala 673006
              </p>
            </motion.div>

            {/* ACTION NODE: RETURN/CANCEL */}
            <motion.div variants={fadeInUp} className="bg-white rounded-[40px] p-8 border-2 border-dashed border-gray-100 space-y-4">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-4 flex items-center gap-2">
                <AlertCircle size={14} className="text-red-600" /> Resolution Center
              </h3>
              
              <motion.button 
                whileHover={{ x: 5 }}
                className="w-full flex items-center justify-between p-4 rounded-2xl border border-gray-100 hover:bg-red-50 hover:border-red-200 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <RotateCcw size={18} className="text-gray-400 group-hover:text-red-600" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Initiate Return</span>
                </div>
                <ArrowRight size={14} className="text-gray-300 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button 
                whileHover={{ x: 5 }}
                onClick={() => setShowCancelModal(true)}
                className="w-full flex items-center justify-between p-4 rounded-2xl border border-gray-100 hover:bg-gray-900 hover:text-white transition-all group"
              >
                <div className="flex items-center gap-3">
                  <XCircle size={18} className="text-gray-400 group-hover:text-red-600" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Abort Order</span>
                </div>
                <ArrowRight size={14} className="text-gray-300" />
              </motion.button>
            </motion.div>

          </div>
        </div>
      </div>

      {/* CANCELLATION MODAL */}
      <AnimatePresence>
        {showCancelModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 40, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-[48px] max-w-md w-full p-10 md:p-14 relative overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-red-600" />
              <div className="text-center space-y-6">
                <motion.div 
                  initial={{ rotate: -10, scale: 0.5 }}
                  animate={{ rotate: 0, scale: 1 }}
                  className="inline-flex items-center justify-center w-20 h-20 bg-red-50 rounded-3xl text-red-600 mb-4"
                >
                  <AlertCircle size={40} />
                </motion.div>
                <h2 className="text-3xl font-black tracking-tighter uppercase italic">Abort Order?</h2>
                <p className="text-sm font-medium text-gray-500 leading-relaxed">
                  Cancelling this order will stop the logistical sequence. This action is irreversible once the status hits "Out for Delivery."
                </p>
                <div className="flex flex-col gap-3 pt-6">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-black text-white py-5 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-red-600 transition-colors"
                  >
                    Confirm Abort
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setShowCancelModal(false)}
                    className="w-full bg-gray-100 text-gray-900 py-5 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-gray-200 transition-colors"
                  >
                    Return to Order
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}