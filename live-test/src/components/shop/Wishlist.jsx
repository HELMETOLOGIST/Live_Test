import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Heart, Trash2, ShoppingCart, ChevronLeft, 
  Filter, Grid, List, ArrowRight, Package,
  Zap, ShieldCheck, Cpu
} from "lucide-react";

// Animation Configurations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } 
  },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } }
};

export default function WishlistPage() {
  const [viewMode, setViewMode] = useState("grid"); // grid or list
  const [wishlist, setWishlist] = useState([
    { id: 1, name: "Neural Link Module", price: 1250.00, category: "Core Hardware", stock: "In Stock" },
    { id: 2, name: "Titanium Casing v2", price: 450.00, category: "Structural", stock: "Low Stock" },
    { id: 3, name: "Plasma Cooling Unit", price: 890.00, category: "Thermal", stock: "In Stock" },
    { id: 4, name: "Optic Sensor Array", price: 2100.00, category: "Sensory", stock: "Out of Stock" },
  ]);

  const removeItem = (id) => {
    setWishlist(wishlist.filter(item => item.id !== id));
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="bg-white min-h-screen p-4 md:p-10 font-sans text-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER SECTION */}
        <motion.div variants={itemVariants} className="mb-12 space-y-4">
          <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-red-600 transition-colors">
            <ChevronLeft size={16} /> Continue Exploring
          </button>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter italic uppercase leading-none">
                Saved <span className="text-red-600">Assets</span>
              </h1>
              <p className="text-gray-400 font-bold uppercase text-[11px] tracking-[0.3em] mt-2">
                SENSE Repository — {wishlist.length} Items Indexed
              </p>
            </div>

            {/* VIEW CONTROLS */}
            <div className="flex bg-gray-50 p-1.5 rounded-2xl border border-gray-100">
              <button 
                onClick={() => setViewMode("grid")}
                className={`p-3 rounded-xl transition-all ${viewMode === "grid" ? "bg-black text-white shadow-lg" : "text-gray-400 hover:text-black"}`}
              >
                <Grid size={18} />
              </button>
              <button 
                onClick={() => setViewMode("list")}
                className={`p-3 rounded-xl transition-all ${viewMode === "list" ? "bg-black text-white shadow-lg" : "text-gray-400 hover:text-black"}`}
              >
                <List size={18} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* WISHLIST GRID/LIST */}
        <AnimatePresence mode="popLayout">
          {wishlist.length > 0 ? (
            <motion.div 
              key={viewMode}
              layout
              className={viewMode === "grid" 
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" 
                : "flex flex-col gap-4"
              }
            >
              {wishlist.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  variants={itemVariants}
                  exit="exit"
                  whileHover={{ y: -5 }}
                  className={`relative overflow-hidden group border border-gray-100 rounded-[32px] bg-white transition-all hover:shadow-2xl hover:shadow-gray-100 ${
                    viewMode === "list" ? "flex flex-row items-center p-6" : "p-8"
                  }`}
                >
                  {/* PRODUCT IMAGE PLACEHOLDER */}
                  <div className={`bg-gray-50 rounded-2xl flex items-center justify-center transition-colors group-hover:bg-red-50/50 ${
                    viewMode === "list" ? "w-24 h-24 mr-8" : "w-full aspect-square mb-6"
                  }`}>
                    <Package size={viewMode === "list" ? 32 : 48} className="text-gray-200 group-hover:text-red-600 transition-colors" />
                  </div>

                  {/* INFO */}
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[9px] font-black text-red-600 uppercase tracking-widest bg-red-50 px-2 py-0.5 rounded">
                        {item.category}
                      </span>
                      <span className={`text-[9px] font-bold uppercase ${item.stock === "Out of Stock" ? "text-gray-400" : "text-green-600"}`}>
                        {item.stock}
                      </span>
                    </div>
                    <h3 className="text-xl font-black uppercase tracking-tight italic mb-1 group-hover:text-red-600 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-2xl font-black tracking-tighter mb-6">
                      ${item.price.toLocaleString()}
                    </p>

                    {/* ACTIONS */}
                    <div className="flex gap-2">
                      <motion.button 
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 bg-black text-white py-4 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-red-600 transition-colors"
                      >
                        <ShoppingCart size={14} /> Add to Cart
                      </motion.button>
                      <motion.button 
                        whileTap={{ scale: 0.95 }}
                        onClick={() => removeItem(item.id)}
                        className="p-4 rounded-xl border border-gray-100 text-gray-400 hover:text-red-600 hover:border-red-100 transition-all"
                      >
                        <Trash2 size={16} />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              className="py-32 text-center"
            >
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-300">
                <Heart size={40} />
              </div>
              <h2 className="text-3xl font-black uppercase italic">Repository Empty</h2>
              <p className="text-gray-400 text-sm mt-2 uppercase tracking-widest">No assets saved to your profile</p>
              <button className="mt-8 bg-black text-white px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-widest">
                Browse Components
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* RECENTLY VIEWED / FOOTER CTAs */}
        <motion.div variants={itemVariants} className="mt-20 pt-10 border-t border-gray-100 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all">
              <Zap size={20} />
            </div>
            <div>
              <h4 className="text-xs font-black uppercase">Rapid Dispatch</h4>
              <p className="text-[10px] font-bold text-gray-400 uppercase">24H Logistic Deployment</p>
            </div>
          </div>
          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all">
              <ShieldCheck size={20} />
            </div>
            <div>
              <h4 className="text-xs font-black uppercase">SENSE Warranty</h4>
              <p className="text-[10px] font-bold text-gray-400 uppercase">Industrial Grade Protection</p>
            </div>
          </div>
          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all">
              <Cpu size={20} />
            </div>
            <div>
              <h4 className="text-xs font-black uppercase">Tech Support</h4>
              <p className="text-[10px] font-bold text-gray-400 uppercase">Expert Engineer Consultation</p>
            </div>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}