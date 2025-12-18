import React, { useRef } from "react";
import { motion } from "framer-motion";
import { 
  History, 
  ChevronRight, 
  ChevronLeft, 
  RotateCcw,
  LayoutGrid
} from "lucide-react";
import ProductCard from "./ProductCard";

// Animation Variants for the staggered entrance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: 30, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    x: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
  }
};

const recentlyViewedData = [
  { id: 1, name: "Impact Driver v3", price: 299, category: "Power Tools", image: "/assets/p1.png" },
  { id: 2, name: "Laser Level Pro", price: 150, category: "Optics", image: "/assets/p2.png" },
  { id: 3, name: "Carbon Drill Bit", price: 45, category: "Accessories", image: "/assets/p3.png" },
  { id: 4, name: "Thermal Sensor", price: 820, category: "Sensors", image: "/assets/p4.png" },
  { id: 5, name: "Servo Motor X1", price: 340, category: "Motion", image: "/assets/p5.png" },
];

export default function RecentlyViewed() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="bg-white py-16 px-6 md:px-20 overflow-hidden border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <motion.div variants={itemVariants} className="flex items-center gap-2 text-red-600">
              <History size={16} strokeWidth={3} />
              <span className="text-[10px] font-black uppercase tracking-[0.5em]">User Activity Log</span>
            </motion.div>
            
            <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-none">
              Recently <span className="text-red-600">Visited</span>
            </motion.h2>
          </div>

          {/* CUSTOM NAVIGATION NAVIGATION */}
          <motion.div variants={itemVariants} className="flex items-center gap-4">
            <div className="hidden md:flex gap-2 mr-4 border-r border-gray-200 pr-6">
              <button 
                onClick={() => scroll('left')}
                className="p-4 rounded-2xl bg-gray-50 hover:bg-black hover:text-white transition-all duration-300"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={() => scroll('right')}
                className="p-4 rounded-2xl bg-gray-50 hover:bg-black hover:text-white transition-all duration-300"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-red-600 transition-colors">
              <LayoutGrid size={14} /> View All History
            </button>
          </motion.div>
        </div>

        {/* PRODUCT CAROUSEL */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar snap-x pb-10"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {recentlyViewedData.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="min-w-[280px] md:min-w-[320px] snap-start"
            >
              {/* Using your custom ProductCard component */}
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        {/* FOOTER ACTION */}
        <motion.div 
          variants={itemVariants}
          className="flex justify-center mt-6"
        >
          <button className="group flex items-center gap-3 px-8 py-4 rounded-full border border-gray-100 hover:border-red-600 transition-all">
            <RotateCcw size={14} className="group-hover:rotate-[-180deg] transition-transform duration-500 text-gray-400 group-hover:text-red-600" />
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-black">
              Flush Session History
            </span>
          </button>
        </motion.div>

      </div>
    </motion.section>
  );
}