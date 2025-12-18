import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "./ProductCard";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("All");

  const products = [
    {
      image: "https://images.unsplash.com/photo-1597066157837-5084c251fa34?q=80&w=1964&auto=format&fit=crop",
      category: "Fasteners",
      tag: "Featured",
      title: "Hex Nut",
      description: "Standard hex nut used for fastening bolts in hardware and mechanical assemblies.",
      price: "₹30"
    },
    {
      image: "https://images.unsplash.com/photo-1592867964826-ca850133fb74?q=80&w=1074&auto=format&fit=crop",
      category: "Fasteners",
      tag: "New",
      title: "Steel Bolt",
      description: "High-tensile steel bolt suitable for construction and machinery use.",
      price: "₹45"
    },
    {
      image: "https://images.unsplash.com/photo-1673833114586-f951168be369?q=80&w=2043&auto=format&fit=crop",
      category: "Fasteners",
      tag: "Featured",
      title: "Metal Washer",
      description: "Flat metal washer used to distribute load and prevent surface damage.",
      price: "₹15"
    },
    {
      image: "https://images.unsplash.com/photo-1589391349202-900abe66462a?q=80&w=1170&auto=format&fit=crop",
      category: "Mechanical Parts",
      tag: "New",
      title: "Ball Bearing",
      description: "Precision ball bearing designed for smooth rotation in machines and motors.",
      price: "₹320"
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1667732234284-bb920bd1f5e6?q=80&w=687&auto=format&fit=crop",
      category: "Hardware Parts",
      tag: "Featured",
      title: "Metal Spring",
      description: "High-carbon steel spring used in mechanical and industrial applications.",
      price: "₹120"
    },
    {
      image: "https://images.unsplash.com/photo-1593062087953-b837e95b7095?q=80&w=1170&auto=format&fit=crop",
      category: "Hardware Parts",
      tag: "New",
      title: "Steel Gear",
      description: "Machined steel gear for power transmission in industrial equipment.",
      price: "₹750"
    },
    {
      image: "https://images.unsplash.com/photo-1567093322102-6bdd32fba67d?q=80&w=687&auto=format&fit=crop",
      category: "Hardware Parts",
      tag: "Featured",
      title: "Metal Gear",
      description: "Machined Metal gear for power transmission in industrial equipment.",
      price: "₹750"
    },
    {
      image: "https://images.unsplash.com/photo-1617123623686-2b7b339785da?q=80&w=1173&auto=format&fit=crop",
      category: "Fasteners",
      tag: "New",
      title: "Screws",
      description: "High-tensile steel screws suitable for construction and machinery use.",
      price: "₹45"
    },
  ];

  const filterOptions = ["All", "New", "Featured"];

  const filteredProducts = activeFilter === "All" 
    ? products 
    : products.filter(p => p.tag === activeFilter);

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-24">
        
        {/* ================= SENSE THEMED HEADING ================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-4"
          >
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-red-600 font-black text-xs uppercase tracking-[0.4em]"
            >
              Premium Selection
            </motion.span>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter uppercase leading-none">
              Our <br /> <span className="text-gray-200">Inventory.</span>
            </h1>
          </motion.div>

          {/* SENSE Industrial Filter Toggle */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex bg-gray-100 p-1.5 rounded-2xl border border-gray-200 relative"
          >
            {filterOptions.map((option) => (
              <button
                key={option}
                onClick={() => setActiveFilter(option)}
                className={`relative px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-colors duration-300 z-10 ${
                  activeFilter === option ? "text-white" : "text-gray-400 hover:text-gray-900"
                }`}
              >
                {option}
                {activeFilter === option && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 bg-black rounded-xl shadow-lg -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </motion.div>
        </div>

        {/* ================= PRODUCT GRID ================= */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((p, idx) => (
              <motion.div
                key={p.title} // Ensure key is unique and constant
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="group"
              >
                <div className="transition-all duration-500 hover:-translate-y-2">
                   <ProductCard {...p} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        <AnimatePresence>
          {filteredProducts.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-20 text-center border-2 border-dashed border-gray-100 rounded-[40px]"
            >
              <p className="text-gray-400 font-black uppercase tracking-widest">
                No components found in this category.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}