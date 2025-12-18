import React from "react";
import { motion } from "framer-motion";

const brands = [
  { name: "Bosch", link: "/collections/bosch", img: "https://i.pinimg.com/1200x/7c/f6/d2/7cf6d264070388ddb957f7372ac0d0ae.jpg" },
  { name: "Makita", link: "/collections/makita", img: "https://i.pinimg.com/1200x/6e/c3/d4/6ec3d46ee39b76421dbabe16d0b09a98.jpg" },
  { name: "DeWalt", link: "/collections/dewalt", img: "https://i.pinimg.com/736x/0c/7b/38/0c7b38984ee31af1c3f118377fd82c43.jpg" },
  { name: "Stanley", link: "/collections/stanley", img: "https://i.pinimg.com/1200x/6f/d9/ce/6fd9ce38b2328acff8501fcc7ede6e4c.jpg" },
  { name: "Black & Decker", link: "/collections/black-decker", img: "https://i.pinimg.com/736x/22/d5/8c/22d58cd5c38c0c62001a1b948360184f.jpg" },
  { name: "Hilti", link: "/collections/hilti", img: "https://i.pinimg.com/736x/e0/f5/92/e0f5923c2021151f8405d3d8a5765bd6.jpg" },
  { name: "Ingco", link: "/collections/ingco", img: "https://i.pinimg.com/1200x/c9/75/7b/c9757bf56870b75b0e90ec00f5b3981c.jpg" },
  { name: "Taparia", link: "/collections/taparia", img: "https://i.pinimg.com/1200x/53/99/12/53991212abaf15fddda89183da033ab7.jpg" },
  { name: "Siemens", link: "/collections/siemens", img: "https://i.pinimg.com/736x/65/d8/83/65d883ffe8313f7ffa336e5234c90444.jpg" },
];

export default function BrandSlider() {
  // Doubling the brands for a seamless loop
  const duplicatedBrands = [...brands, ...brands];

  return (
    <div className="w-full bg-white py-16 md:py-24 overflow-hidden border-t border-gray-50">
      
      {/* ================= TITLE SECTION ================= */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6 mb-16"
      >
        <div className="flex flex-col items-center text-center space-y-2">
          <motion.span 
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.4em" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-red-600 font-black text-[10px] md:text-xs uppercase tracking-[0.4em]"
          >
            Authorized Partner
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter uppercase leading-none">
            Industry <span className="text-red-600">Giants</span>
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 1, delay: 0.5, ease: "circOut" }}
            className="h-1.5 bg-red-600 mt-6 rounded-full" 
          />
        </div>
      </motion.div>

      {/* ================= SLIDER CONTAINER ================= */}
      <div className="relative w-full">
        {/* Edge Fades for Depth */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
        
        {/* Infinite Motion Track */}
        <div className="flex overflow-hidden">
          <motion.div 
            className="flex gap-8 py-6 pr-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30, // Adjust speed here (lower is faster)
                ease: "linear",
              },
            }}
            // Pause on hover
            whileHover={{ animationPlayState: "paused" }} 
            style={{ display: 'flex', width: 'fit-content' }}
          >
            {duplicatedBrands.map((b, idx) => (
              <motion.a
                key={idx}
                href={b.link}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  borderColor: "rgba(220, 38, 38, 0.2)" // red-600 at 20% opacity
                }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="relative flex items-center justify-center
                           bg-gray-50/50 grayscale opacity-60
                           hover:grayscale-0 hover:opacity-100 hover:bg-white
                           border border-gray-100/50
                           rounded-2xl
                           min-w-[160px] sm:min-w-[200px] md:min-w-[260px]
                           h-24 sm:h-28 md:h-36
                           p-8 transition-all duration-300
                           group shadow-sm hover:shadow-2xl hover:shadow-red-500/5"
              >
                <img
                  src={b.img}
                  alt={b.name}
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Industrial Status Indicator */}
                <div className="absolute top-4 right-4 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-1 h-1 rounded-full bg-red-600 animate-pulse" />
                  <div className="w-1 h-1 rounded-full bg-red-600/40" />
                </div>

                {/* Bottom Border Accent */}
                <motion.div 
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-red-600 rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: "40%" }}
                />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ================= FOOTER META ================= */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="max-w-7xl mx-auto px-6 mt-12 flex justify-between items-center text-[9px] font-black uppercase tracking-[0.3em] text-gray-300"
      >
        <span>Global Supply Chain</span>
        <div className="h-[1px] flex-1 mx-8 bg-gray-100" />
        <span>Verified Logistics</span>
      </motion.div>
    </div>
  );
}