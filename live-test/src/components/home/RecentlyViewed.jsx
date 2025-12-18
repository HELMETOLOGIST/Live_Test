import React, { useRef } from "react";
import { motion } from "framer-motion";
import { 
  ChevronRight, 
  ChevronLeft, 
  RotateCcw,
  LayoutGrid,
  Activity
} from "lucide-react";
import ProductCard from "./ProductCard";
import { useToast } from "../../context/ToastContext";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

const recentlyViewedData = [
  { id: 1, name: "Impact Driver v3", price: 299, category: "Power Tools", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=400" },
  { id: 2, name: "Laser Level Pro", price: 150, category: "Optics", image: "https://www.liontoolsmart.com/cdn/shop/files/185-1_1000x1000.progressive.jpg?v=1742457385" },
  { id: 3, name: "Carbon Drill Bit", price: 45, category: "Accessories", image: "https://d2j6dbq0eux0bg.cloudfront.net/images/62425538/4845479430.png" },
  { id: 4, name: "Thermal Sensor", price: 820, category: "Sensors", image: "https://static.vecteezy.com/system/resources/thumbnails/069/825/730/small/powerful-cordless-electric-drill-a-versatile-tool-for-home-improvement-and-diy-projects-free-photo.jpeg" },
  { id: 5, name: "Servo Motor X1", price: 340, category: "Motion", image: "https://www.popsci.com/wp-content/uploads/2025/05/essential-tools-circular-saw.jpg?quality=85&w=768" },
];

export default function RecentlyViewed() {
  const scrollRef = useRef(null);
  const { showToast } = useToast();

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const handleFlush = () => {
    showToast("success", "SESSION_LOG_PURGED: Local history cache cleared.");
  };

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="bg-white py-24 px-6 md:px-20 overflow-hidden border-t border-gray-100 relative"
    >
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 p-20 opacity-[0.03] pointer-events-none">
        <Activity size={400} strokeWidth={1} />
      </div>

      <div className="max-w-7xl mx-auto">
        
        {/* ================= UPDATED HEADER (SENSE THEME) ================= */}
        <div className="flex flex-col items-center text-center space-y-2 mb-16">
          <motion.span 
            variants={itemVariants}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-red-600 font-black text-[10px] md:text-xs uppercase tracking-[0.4em]"
          >
            User Activity Log
          </motion.span>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter uppercase leading-none"
          >
            Recently <span className="text-red-600">Visited</span>
          </motion.h2>

          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5, ease: "circOut" }}
            className="h-1.5 bg-red-600 mt-6 rounded-full" 
          />
        </div>

        {/* NAVIGATION CONTROLS */}
        <div className="flex justify-between items-center mb-8">
           <button className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-gray-400 hover:text-red-600 transition-colors group">
              <LayoutGrid size={16} className="group-hover:rotate-90 transition-transform duration-500" /> 
              View Archive
            </button>

            <div className="flex gap-3">
              <button 
                onClick={() => scroll('left')} 
                className="group p-4 rounded-xl bg-gray-50 hover:bg-black transition-all duration-500 active:scale-90 border border-gray-100"
              >
                <ChevronLeft size={20} className="group-hover:text-white group-hover:-translate-x-1 transition-all" />
              </button>
              <button 
                onClick={() => scroll('right')} 
                className="group p-4 rounded-xl bg-gray-50 hover:bg-black transition-all duration-500 active:scale-90 border border-gray-100"
              >
                <ChevronRight size={20} className="group-hover:text-white group-hover:translate-x-1 transition-all" />
              </button>
            </div>
        </div>

        {/* ================= SCROLLABLE LIST ================= */}
        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto no-scrollbar snap-x pb-12"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {recentlyViewedData.map((product) => (
            <motion.div 
              key={product.id} 
              variants={itemVariants} 
              className="min-w-[300px] md:min-w-[350px] snap-start"
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        {/* ================= FLUSH ACTION ================= */}
        <motion.div variants={itemVariants} className="flex justify-center mt-12">
          <button 
            onClick={handleFlush}
            className="group relative flex items-center gap-4 px-10 py-5 rounded-2xl border-2 border-gray-900 overflow-hidden transition-all duration-500"
          >
            <div className="absolute inset-0 w-0 bg-red-600 group-hover:w-full transition-all duration-500 -z-10" />
            
            <RotateCcw size={16} className="text-gray-900 group-hover:text-white group-hover:rotate-[-180deg] transition-all duration-700 font-bold" />
            
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-900 group-hover:text-white transition-colors duration-300">
              Flush Session Log
            </span>

            <div className="ml-2 w-2 h-2 rounded-full bg-red-600 group-hover:bg-white animate-pulse" />
          </button>
        </motion.div>

      </div>
    </motion.section>
  );
}