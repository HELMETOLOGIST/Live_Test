import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Instagram, Youtube, MessageCircle, Plus, X } from "lucide-react";

export default function FloatingButtons() {
  const [isOpen, setIsOpen] = useState(false);

  const socialLinks = [
    { 
      icon: <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />, 
      label: "WhatsApp", 
      href: "https://wa.me/910000000000", 
      color: "hover:bg-[#25D366] hover:text-white" 
    },
    { 
      icon: <Instagram className="w-5 h-5 md:w-6 md:h-6" />, 
      label: "Instagram", 
      href: "https://instagram.com/YOUR_PAGE", 
      color: "hover:bg-red-600 hover:text-white" 
    },
    { 
      icon: <Youtube className="w-5 h-5 md:w-6 md:h-6" />, 
      label: "YouTube", 
      href: "https://youtube.com/YOUR_CHANNEL", 
      color: "hover:bg-red-700 hover:text-white" 
    },
    { 
      icon: <Phone className="w-5 h-5 md:w-6 md:h-6" />, 
      label: "Call Now", 
      href: "tel:+910000000000", 
      color: "hover:bg-black hover:text-white" 
    },
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1, // Pop up from bottom to top
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 20 }
    },
    exit: { opacity: 0, y: 20, scale: 0.8 }
  };

  return (
    <div 
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 flex flex-col items-end z-[999]"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      
      {/* ================= POP-UP MENU ================= */}
      <div className="flex flex-col items-end gap-3 mb-4 min-h-[50px]">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="flex flex-col items-end gap-3"
            >
              {socialLinks.map((social, idx) => (
                <motion.div 
                  key={idx} 
                  variants={itemVariants}
                  className="flex items-center"
                >
                  {/* SENSE Industrial Label */}
                  <span className="mr-3 px-3 py-1.5 bg-black/90 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-[0.15em] rounded-lg shadow-2xl hidden md:block border border-white/10">
                    {social.label}
                  </span>

                  <motion.a
                    whileHover={{ scale: 1.1, x: -5 }}
                    whileTap={{ scale: 0.9 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 md:w-14 md:h-14 bg-white/90 backdrop-blur-md text-gray-800 border border-gray-100 rounded-2xl flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-colors duration-300 group ${social.color}`}
                  >
                    <div className="transition-transform duration-300">
                      {social.icon}
                    </div>
                  </motion.a>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ================= MAIN TOGGLE BUTTON ================= */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        animate={{ 
          rotate: isOpen ? 135 : 0,
          backgroundColor: isOpen ? "#000000" : "#dc2626"
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        className={`relative w-16 h-16 md:w-20 md:h-20 rounded-[22px] md:rounded-[28px] flex items-center justify-center shadow-[0_20px_50px_rgba(220,38,38,0.3)] z-10`}
      >
        {/* Modern Pulse Effect */}
        <AnimatePresence>
          {!isOpen && (
            <motion.span 
              initial={{ scale: 0.8, opacity: 0.5 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
              className="absolute inset-0 bg-red-400/40 rounded-[28px]"
            ></motion.span>
          )}
        </AnimatePresence>
        
        <div className="relative flex items-center justify-center">
            {/* SENSE Themed Icon Switch */}
            <Plus className="w-8 h-8 md:w-10 md:h-10 text-white" />
            
            <AnimatePresence>
              {!isOpen && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-white rounded-full border-[3px] border-red-600"
                  style={{ 
                    animation: "bounce 2s infinite" 
                  }}
                ></motion.span>
              )}
            </AnimatePresence>
        </div>
      </motion.button>

      {/* Custom Bounce Animation for the Notification Dot */}
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
      `}</style>
    </div>
  );
}