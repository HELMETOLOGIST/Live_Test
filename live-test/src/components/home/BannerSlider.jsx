import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ArrowRight } from "lucide-react";

// Assuming these imports remain the same
import bosch from "@/assets/banners/bosch1.png";
import dewalt1 from "@/assets/banners/dewalt1.jpg";
import dewalt2 from "@/assets/banners/dewalt2.jpg";
import makita from "@/assets/banners/makita1.webp";

const slides = [
  {
    img: bosch,
    heading: "Precision Unleashed",
    sub: "Professional grade tools for master craftsmen.",
    btn: "Shop Bosch",
  },
  {
    img: dewalt1,
    heading: "Toughness Redefined",
    sub: "Guaranteed tough. Built for the modern jobsite.",
    btn: "Explore DeWalt",
  },
  {
    img: dewalt2,
    heading: "Limited Time Offers",
    sub: "Exclusive discounts on heavy-duty machinery.",
    btn: "Grab Deals",
  },
  {
    img: makita,
    heading: "Cordless Innovation",
    sub: "LXT technology for world-class performance.",
    btn: "View Makita",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <div className="relative w-full h-[600px] md:h-[750px] lg:h-[850px] overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Background Image with Ken Burns Effect */}
          <motion.div 
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 6, ease: "linear" }}
            className="absolute inset-0"
          >
            <img
              src={slides[index].img}
              alt="Hero Slide"
              className="w-full h-full object-cover"
            />
            {/* SENSE Industrial Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
          </motion.div>

          {/* Text Content Container */}
          <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-20 z-20">
            <div className="max-w-4xl space-y-8">
              
              {/* Animated Subheading */}
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-red-600 font-black uppercase tracking-[0.5em] text-xs md:text-sm flex items-center gap-3"
              >
                <span className="w-12 h-[2px] bg-red-600 inline-block" />
                SENSE Hardware Series 2025
              </motion.p>

              {/* Main Heading with Staggered Characters/Words */}
              <motion.h1
                initial={{ opacity: 0, y: 50, skewY: 7 }}
                animate={{ opacity: 1, y: 0, skewY: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl md:text-[10rem] font-black uppercase tracking-tighter italic leading-[0.85] text-white"
              >
                {slides[index].heading.split(' ').map((word, i) => (
                  <span key={i} className={i === 1 ? "text-red-600" : ""}>
                    {word}<br className="hidden md:block" />
                  </span>
                ))}
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="text-gray-400 text-lg md:text-2xl font-medium max-w-xl"
              >
                {slides[index].sub}
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <button className="group relative overflow-hidden bg-red-600 text-white px-10 py-5 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest flex items-center gap-4 transition-all hover:bg-white hover:text-black">
                  <span className="relative z-10">{slides[index].btn}</span>
                  <ArrowRight size={18} className="relative z-10 group-hover:translate-x-2 transition-transform" />
                  {/* Decorative background filler */}
                  <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Progress & Navigation */}
      <div className="absolute bottom-12 left-6 md:left-20 z-30 flex items-center gap-6">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className="flex flex-col gap-3 group"
          >
            <span className={`text-[10px] font-black tracking-tighter transition-colors ${index === i ? "text-red-600" : "text-white/20"}`}>
              0{i + 1}
            </span>
            <div className="relative w-16 md:w-32 h-[2px] bg-white/10 overflow-hidden">
              {index === i && (
                <motion.div
                  layoutId="progress-bar"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 6, ease: "linear" }}
                  className="absolute inset-0 bg-red-600"
                />
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Side Decorative Badge (Faded Logo) */}
      <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 rotate-90 hidden lg:block select-none opacity-5">
        <h2 className="text-[15rem] font-black uppercase tracking-tighter text-white whitespace-nowrap">
          SENSE SYSTEM
        </h2>
      </div>
    </div>
  );
}