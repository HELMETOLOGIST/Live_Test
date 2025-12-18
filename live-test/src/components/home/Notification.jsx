import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Bell, CheckCircle2, AlertTriangle, Info, 
  Settings, Trash2, ArrowUpRight, Truck, 
  CreditCard, ShieldAlert, X, ChevronRight,
  Filter
} from "lucide-react";

// 1. Animation Variants for Orchestration
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.1, 
      delayChildren: 0.2 
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } 
  },
  exit: { 
    opacity: 0, 
    scale: 0.95, 
    transition: { duration: 0.2 } 
  }
};

const pulseVariants = {
  initial: { opacity: 1 },
  animate: {
    opacity: [1, 0.5, 1],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
  }
};

export default function NotificationsPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "logistics",
      title: "Consignment Dispatched",
      message: "Order #SN-881290 has left the Kozhikode Terminal. Estimated arrival: Today.",
      time: "2 mins ago",
      priority: "high",
      icon: <Truck size={18} />
    },
    {
      id: 2,
      type: "security",
      title: "New Login Detected",
      message: "A new login was recorded from an unrecognized device in Bangalore, India.",
      time: "45 mins ago",
      priority: "critical",
      icon: <ShieldAlert size={18} />
    },
    {
      id: 3,
      type: "payment",
      title: "Invoice Generated",
      message: "The billing for your 'High-Precision Valve Module' has been processed successfully.",
      time: "3 hours ago",
      priority: "low",
      icon: <CreditCard size={18} />
    },
    {
      id: 4,
      type: "system",
      title: "Firmware Update",
      message: "SENSE OS v4.2 is now available for your connected hardware modules.",
      time: "1 day ago",
      priority: "medium",
      icon: <Info size={18} />
    }
  ]);

  const removeNotification = (id) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const filteredNotifications = activeFilter === "all" 
    ? notifications 
    : notifications.filter(n => n.type === activeFilter);

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="bg-white min-h-screen p-4 md:p-10 font-sans text-gray-900"
    >
      <div className="max-w-4xl mx-auto">
        
        {/* TOP NAVIGATION & HEADER */}
        <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter italic uppercase leading-none">
              System <span className="text-red-600">Feed</span>
            </h1>
            <div className="flex items-center gap-3">
              <span className="flex h-2 w-2 rounded-full bg-red-600 animate-pulse" />
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em]">Active Monitoring • Link Stable</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <motion.button 
              whileHover={{ rotate: 90 }}
              className="p-4 rounded-2xl bg-gray-50 text-gray-400 hover:text-black transition-all"
            >
              <Settings size={20} />
            </motion.button>
            <motion.button 
              whileTap={{ scale: 0.95 }}
              onClick={() => setNotifications([])}
              className="text-[10px] font-black uppercase tracking-widest px-6 py-4 bg-black text-white rounded-2xl hover:bg-red-600 transition-colors shadow-xl shadow-gray-200"
            >
              Purge All Logs
            </motion.button>
          </div>
        </motion.div>

        {/* FILTER BAR - Animated Buttons */}
        <motion.div variants={itemVariants} className="flex gap-2 overflow-x-auto pb-6 mb-8 no-scrollbar">
          {["all", "logistics", "security", "payment", "system"].map((filter) => (
            <motion.button
              key={filter}
              layoutId={filter === activeFilter ? "activeTab" : undefined}
              onClick={() => setActiveFilter(filter)}
              className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest whitespace-nowrap border transition-all ${
                activeFilter === filter 
                ? "bg-black border-black text-white" 
                : "bg-white border-gray-100 text-gray-400 hover:border-red-600"
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* NOTIFICATION LIST */}
        <AnimatePresence mode="popLayout">
          <motion.div layout className="space-y-4">
            {filteredNotifications.map((notif) => (
              <motion.div
                key={notif.id}
                variants={itemVariants}
                layout
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover={{ x: 10 }}
                className={`relative group border rounded-[40px] p-6 md:p-10 transition-all flex flex-col md:flex-row items-start gap-8 ${
                  notif.priority === 'critical' 
                  ? 'border-red-600 bg-red-50/20 shadow-2xl shadow-red-100' 
                  : 'border-gray-50 bg-white hover:border-gray-200'
                }`}
              >
                {/* ICON & PRIORITY INDICATOR */}
                <div className="relative">
                  <div className={`w-16 h-16 rounded-[24px] flex items-center justify-center transition-transform group-hover:scale-110 ${
                    notif.priority === 'critical' ? 'bg-red-600 text-white' : 'bg-black text-white'
                  }`}>
                    {notif.icon}
                  </div>
                  {notif.priority === 'critical' && (
                    <motion.div 
                      variants={pulseVariants}
                      initial="initial"
                      animate="animate"
                      className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 rounded-full border-4 border-white" 
                    />
                  )}
                </div>

                {/* TEXT CONTENT */}
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-red-600 flex items-center gap-2">
                      <span className="w-4 h-[1px] bg-red-600" /> {notif.type} // {notif.priority}
                    </span>
                    <span className="text-[10px] font-bold text-gray-300 uppercase">{notif.time}</span>
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tighter italic text-gray-900 leading-tight">
                    {notif.title}
                  </h3>
                  <p className="text-sm text-gray-500 font-medium leading-relaxed max-w-xl">
                    {notif.message}
                  </p>
                  
                  <div className="pt-6 flex items-center gap-6">
                    <motion.button 
                      whileHover={{ x: 5 }}
                      className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2 text-black hover:text-red-600 transition-colors"
                    >
                      Execute Action <ArrowUpRight size={14} />
                    </motion.button>
                    <button 
                      onClick={() => removeNotification(notif.id)}
                      className="text-[10px] font-black uppercase tracking-widest text-gray-300 hover:text-black transition-colors"
                    >
                      Archive Log
                    </button>
                  </div>
                </div>

                {/* QUICK DISMISS (DESKTOP) */}
                <motion.button 
                  whileHover={{ rotate: 90, color: "#dc2626" }}
                  onClick={() => removeNotification(notif.id)}
                  className="hidden md:block opacity-0 group-hover:opacity-100 p-2 text-gray-200 transition-all"
                >
                  <X size={24} />
                </motion.button>
              </motion.div>
            ))}

            {/* EMPTY STATE */}
            {filteredNotifications.length === 0 && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-32 text-center border-2 border-dashed border-gray-100 rounded-[48px] bg-gray-50/30"
              >
                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <CheckCircle2 size={32} className="text-gray-200" />
                </div>
                <h2 className="text-3xl font-black uppercase italic tracking-tighter">Zero Alerts</h2>
                <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest mt-2">
                  System integrity 100% • No active logs found
                </p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* FOOTER METRICS */}
        <motion.div variants={itemVariants} className="mt-20 flex flex-wrap gap-10 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
          <div className="text-[10px] font-black uppercase tracking-[0.3em]">
            Latency: <span className="text-red-600">14ms</span>
          </div>
          <div className="text-[10px] font-black uppercase tracking-[0.3em]">
            Nodes: <span className="text-red-600">Active</span>
          </div>
          <div className="text-[10px] font-black uppercase tracking-[0.3em]">
            Encryption: <span className="text-red-600">AES-256</span>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}