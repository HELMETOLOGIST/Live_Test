import React, { useState } from "react";
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

  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 flex flex-col items-end z-[999]">
      
      {/* ================= POP-UP MENU ================= */}
      <div className="flex flex-col items-end gap-3 mb-4">
        {socialLinks.map((social, idx) => (
          <div 
            key={idx} 
            className={`flex items-center transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] ${
              isOpen 
                ? "opacity-100 translate-y-0 scale-100 visible" 
                : "opacity-0 translate-y-10 scale-50 invisible"
            }`}
            style={{ 
              // This creates the staggered "one-by-one" pop effect
              transitionDelay: isOpen ? `${(socialLinks.length - idx) * 70}ms` : "0ms" 
            }}
          >
            {/* SENSE Industrial Label */}
            <span className="mr-3 px-3 py-1.5 bg-black/90 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-[0.15em] rounded-lg shadow-2xl hidden md:block">
              {social.label}
            </span>

            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 md:w-14 md:h-14 bg-white/90 backdrop-blur-md text-gray-800 border border-gray-100 rounded-2xl flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 group ${social.color}`}
            >
              <div className="group-hover:scale-110 transition-transform duration-300">
                {social.icon}
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* ================= MAIN TOGGLE BUTTON ================= */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative w-16 h-16 md:w-20 md:h-20 rounded-[22px] md:rounded-[28px] flex items-center justify-center shadow-[0_20px_50px_rgba(220,38,38,0.3)] transition-all duration-500 transform active:scale-90 ${
          isOpen ? "bg-black rotate-[135deg]" : "bg-red-600 hover:shadow-[0_20px_50px_rgba(220,38,38,0.5)] hover:-translate-y-1"
        }`}
      >
        {/* Modern Pulse Effect */}
        {!isOpen && (
          <span className="absolute inset-0 bg-red-400/40 animate-ping rounded-[28px] scale-90"></span>
        )}
        
        <div className="relative flex items-center justify-center">
            {/* SENSE Themed Icon Switch */}
            {isOpen ? (
                 <Plus className="w-8 h-8 md:w-10 md:h-10 text-white" />
            ) : (
                <>
                    <Plus className="w-8 h-8 md:w-10 md:h-10 text-white" />
                    <span className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-white rounded-full border-[3px] border-red-600 animate-bounce"></span>
                </>
            )}
        </div>
      </button>

      {/* Animation Global Styles */}
      <style>{`
        @keyframes ping {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(1.8); opacity: 0; }
        }
        .animate-ping {
          animation: ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
}