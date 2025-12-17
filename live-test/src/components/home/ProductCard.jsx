import React from "react";
import { ShoppingCart, ArrowRight, ShieldCheck } from "lucide-react";

export default function ProductCard({ image, category, title, description, price }) {
  return (
    <div className="group relative bg-white rounded-[32px] p-4 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col h-full">
      
      {/* ================= IMAGE SECTION ================= */}
      <div className="relative w-full aspect-square overflow-hidden rounded-[24px] bg-gray-50 border border-gray-50">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        
        {/* Floating Category Tag */}
        <div className="absolute top-3 left-3">
          <span className="bg-black/90 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-[0.15em] px-3 py-1.5 rounded-lg flex items-center gap-1.5">
            <div className="w-1 h-1 bg-red-600 rounded-full animate-pulse" />
            {category}
          </span>
        </div>

        {/* Hover Overlay Icon */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
             <div className="bg-white/90 p-3 rounded-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <ArrowRight className="w-5 h-5 text-red-600" />
             </div>
        </div>
      </div>

      {/* ================= CONTENT SECTION ================= */}
      <div className="flex flex-col flex-1 mt-6 px-1">
        
        {/* Title & Price Row */}
        <div className="flex justify-between items-start gap-2 mb-2">
          <h3 className="text-xl font-black text-gray-900 uppercase tracking-tighter leading-tight group-hover:text-red-600 transition-colors duration-300">
            {title}
          </h3>
          <div className="flex flex-col items-end">
            <span className="text-xl font-black text-gray-900 leading-none">{price}</span>
            <span className="text-[10px] text-gray-400 font-bold uppercase mt-1">Incl. Tax</span>
          </div>
        </div>

        {/* Technical Description */}
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-6 font-medium">
          {description}
        </p>

        {/* Feature Tags (Small Detail for Spare Parts look) */}
        <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center gap-1 text-[9px] font-black uppercase tracking-widest text-gray-400">
                <ShieldCheck size={12} className="text-green-500" />
                Genuine Part
            </div>
            <div className="w-1 h-1 bg-gray-300 rounded-full" />
            <div className="text-[9px] font-black uppercase tracking-widest text-gray-400">
                In Stock
            </div>
        </div>

        {/* ================= ACTION BUTTON ================= */}
        <div className="mt-auto">
          <button className="group/btn w-full bg-gray-900 hover:bg-red-600 text-white py-4 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 active:scale-95 shadow-lg shadow-gray-200 hover:shadow-red-200">
            <span className="text-xs font-black uppercase tracking-[0.2em]">Add to Cart</span>
            <div className="bg-white/10 p-1 rounded-md group-hover/btn:bg-white/20 transition-colors">
                <ShoppingCart size={16} className="transition-transform group-hover/btn:rotate-12" />
            </div>
          </button>
        </div>

      </div>

      {/* Decorative Corner Element */}
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
        <div className="w-8 h-8 border-t-2 border-r-2 border-red-600 rounded-tr-xl" />
      </div>
    </div>
  );
}