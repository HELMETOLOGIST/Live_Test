import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingCart, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { useToast } from "../../context/ToastContext"; // Import your Toast Hook

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const { showToast } = useToast();

  // Destructure from the product object passed from RecentlyViewed
  const { id, image, category, name: title, description, price, tag } = product || {};

  const handleCardClick = () => {
    if (!id && !title) return; 
    const productId = id || title.toLowerCase().replace(/\s+/g, '-');
    navigate(`/product/${productId}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation(); 
    showToast("success", `ASSET_MOVED: ${title || 'Item'} added to secure cart.`);
  };

  // SENSE fallback image if the URL is blocked or broken
  const fallbackImg = "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=400&auto=format&fit=crop";

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <motion.div 
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -10 }}
      onClick={handleCardClick}
      className="group relative bg-white rounded-[32px] p-4 transition-shadow duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col h-full cursor-pointer"
    >
      {/* IMAGE SECTION */}
      <div className="relative w-full aspect-square overflow-hidden rounded-[24px] bg-gray-50 border border-gray-50">
        <motion.img
          src={image || fallbackImg} 
          alt={title}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full h-full object-cover"
          // FIX: Triggers if image link is blocked by Amazon/Unsplash
          onError={(e) => {
            if (e.target.src !== fallbackImg) {
              e.target.src = fallbackImg;
              showToast("error", `MEDIA_ERR: Asset stream for ${title || 'unknown'} offline.`);
            }
          }}
        />
        
        <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
          <motion.span className="bg-black/90 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-[0.15em] px-3 py-1.5 rounded-lg flex items-center gap-1.5">
            <div className="w-1 h-1 bg-red-600 rounded-full animate-pulse" />
            {category || "Uncategorized"}
          </motion.span>
          
          {tag && (
            <motion.span className="bg-red-600 text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-md w-fit flex items-center gap-1 shadow-lg shadow-red-500/20">
              <Zap size={10} fill="currentColor" /> {tag}
            </motion.span>
          )}
        </div>

        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="bg-white/90 p-3 rounded-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-xl">
            <ArrowRight className="w-5 h-5 text-red-600" />
          </div>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="flex flex-col flex-1 mt-6 px-1">
        <div className="flex justify-between items-start gap-2 mb-2">
          <h3 className="text-xl font-black text-gray-900 uppercase tracking-tighter leading-tight group-hover:text-red-600 transition-colors duration-300">
            {title || "Unnamed Asset"}
          </h3>
          <div className="flex flex-col items-end">
            <span className="text-xl font-black text-gray-900 leading-none">${price || "0.00"}</span>
            <span className="text-[10px] text-gray-400 font-bold uppercase mt-1 text-right">Incl. Tax</span>
          </div>
        </div>

        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-6 font-medium">
          {description || "No technical specifications provided for this component."}
        </p>

        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center gap-1 text-[9px] font-black uppercase tracking-widest text-gray-400">
            <ShieldCheck size={12} className="text-green-500" />
            Genuine Part
          </div>
          <div className="w-1 h-1 bg-gray-300 rounded-full" />
          <div className="text-[9px] font-black uppercase tracking-widest text-gray-400">In Stock</div>
        </div>

        <div className="mt-auto">
          <motion.button 
            whileHover={{ scale: 1.02, backgroundColor: "#dc2626" }}
            whileTap={{ scale: 0.98 }}
            onClick={handleAddToCart}
            className="group/btn w-full bg-gray-900 text-white py-4 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 shadow-lg shadow-gray-200"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em]">Add to Cart</span>
            <ShoppingCart size={16} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}