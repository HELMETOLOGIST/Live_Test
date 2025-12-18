import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2, Info } from "lucide-react";

const galleryData = [
  { id: 1, category: "Mechanical", title: "Precision Gearbox", img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800" },
  { id: 2, category: "Logistics", title: "Automated Sorting", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800" },
  { id: 4, category: "Mechanical", title: "Hydraulic Pump", img: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=800" },
  { id: 5, category: "Logistics", title: "Heavy Duty Transit", img: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800" },
  { id: 6, category: "Hardware", title: "CNC Machining", img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800" },
  { id: 7, category: "Mechanical", title: "Turbine Engine", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800" },
];

export default function SenseGallery() {
  const [filter, setFilter] = useState("all");
  const [selectedImg, setSelectedImg] = useState(null);

  const filteredItems = filter === "all" ? galleryData : galleryData.filter(item => item.category === filter);
  const categories = ["all", "Mechanical", "Hardware", "Logistics"];

  return (
    <div className="bg-white min-h-screen py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* ================= UPDATED HEADER (SENSE THEME) ================= */}
        <div className="flex flex-col items-center text-center space-y-2 mb-16">
          <motion.span 
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.4em" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-red-600 font-black text-[10px] md:text-xs uppercase tracking-[0.4em]"
          >
            Visual Inventory
          </motion.span>
          
          <h2 className="text-4xl md:text-7xl font-black text-gray-900 tracking-tighter uppercase leading-none">
            The <span className="text-red-600">Blueprint</span>
          </h2>

          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5, ease: "circOut" }}
            className="h-1.5 bg-red-600 mt-6 rounded-full" 
          />
        </div>

        {/* CENTERED FILTER TOGGLE */}
        <div className="flex justify-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex flex-wrap justify-center gap-2 bg-gray-50 p-2 rounded-[24px] border border-gray-100 relative"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`relative px-6 py-3 rounded-[18px] text-[10px] font-black uppercase tracking-widest transition-colors duration-300 z-10 ${
                  filter === cat ? "text-white" : "text-gray-400 hover:text-gray-900"
                }`}
              >
                <span className="relative z-10">{cat}</span>
                {filter === cat && (
                  <motion.div
                    layoutId="galleryTab"
                    className="absolute inset-0 bg-black rounded-[18px] shadow-xl"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </motion.div>
        </div>

        {/* ================= MASONRY GRID ================= */}
        <motion.div 
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedImg(item)}
                className="relative group cursor-pointer break-inside-avoid rounded-[32px] overflow-hidden border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-red-500 font-black text-[9px] uppercase tracking-[0.3em] mb-2 block">
                      {item.category}
                    </span>
                    <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-4">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 text-white/60 text-[10px] font-black uppercase tracking-widest">
                      <Maximize2 size={14} className="text-red-600" /> View Specs
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ================= LIGHTBOX / MODAL ================= */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[500] flex items-center justify-center p-4 bg-black/95 backdrop-blur-2xl"
          >
            {/* Close Button */}
            <motion.button 
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              onClick={() => setSelectedImg(null)}
              className="absolute top-8 right-8 p-5 bg-white/10 hover:bg-red-600 text-white rounded-2xl transition-all z-[510]"
            >
              <X size={24} />
            </motion.button>

            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Image Side with Scanning Animation */}
              <div className="lg:col-span-8 rounded-[40px] overflow-hidden border border-white/10 shadow-2xl relative">
                <img src={selectedImg.img} className="w-full h-auto" alt="Technical View" />
                <motion.div 
                  initial={{ top: "-10%" }}
                  animate={{ top: "110%" }}
                  transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                  className="absolute left-0 right-0 h-[2px] bg-red-600/50 shadow-[0_0_15px_rgba(220,38,38,0.8)] z-10 pointer-events-none"
                />
              </div>

              {/* Info Side */}
              <div className="lg:col-span-4 space-y-8 p-4">
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-2"
                >
                  <span className="text-red-600 font-black text-xs uppercase tracking-[0.4em]">
                    Technical Specs
                  </span>
                  <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
                    {selectedImg.title}
                  </h2>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="grid grid-cols-2 gap-4"
                >
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                    <p className="text-[9px] font-black text-gray-500 uppercase tracking-widest mb-1">Catalog ID</p>
                    <p className="text-white font-black uppercase text-sm">SNSE-0{selectedImg.id}X</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                    <p className="text-[9px] font-black text-gray-500 uppercase tracking-widest mb-1">Standard</p>
                    <p className="text-white font-black uppercase text-sm">ISO-9001</p>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="p-6 bg-red-600 rounded-[24px] text-white"
                >
                    <div className="flex items-center gap-3 mb-2">
                       <Info size={18} />
                       <span className="text-[10px] font-black uppercase tracking-[0.2em]">Application</span>
                    </div>
                    <p className="text-sm font-medium leading-relaxed opacity-90 italic">
                      "Optimized for high-pressure industrial environments requiring maximum durability and precision tolerance."
                    </p>
                </motion.div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-5 bg-white text-black rounded-2xl font-black uppercase text-[11px] tracking-[0.3em] hover:bg-red-600 hover:text-white transition-all shadow-xl"
                >
                  Download Technical Data Sheet
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}