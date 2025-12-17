import React from "react";

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
  return (
    <div className="w-full bg-white py-16 md:py-24 overflow-hidden border-t border-gray-50">
      {/* Title Section */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex flex-col items-center text-center space-y-2">
          <span className="text-red-600 font-black text-xs uppercase tracking-[0.3em]">
            Authorized Partner
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter uppercase">
            Industry <span className="text-red-600">Giants</span>
          </h2>
          <div className="w-20 h-1.5 bg-red-600 mt-4 rounded-full" />
        </div>
      </div>

      {/* Slider Container with Fade Edges */}
      <div className="relative w-full group">
        {/* Left Mask Overlay */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        
        {/* The Animated Track */}
        <div className="flex w-max gap-8 animate-brand-scroll group-hover:[animation-play-state:paused] py-4">
          {/* We double the brands for a seamless loop */}
          {[...brands, ...brands].map((b, idx) => (
            <a
              key={idx}
              href={b.link}
              className="relative flex items-center justify-center
                         bg-gray-50/50 grayscale opacity-60
                         hover:grayscale-0 hover:opacity-100 hover:bg-white
                         border border-transparent hover:border-red-100
                         rounded-2xl
                         min-w-[140px] sm:min-w-[180px] md:min-w-[220px]
                         h-24 sm:h-28 md:h-32
                         p-6 transition-all duration-500 ease-out
                         group/card shadow-sm hover:shadow-xl hover:-translate-y-1"
            >
              <img
                src={b.img}
                alt={b.name}
                className="h-full w-full object-contain transition-transform duration-500 group-hover/card:scale-110"
              />
              {/* Subtle hover indicator */}
              <div className="absolute bottom-2 right-4 opacity-0 group-hover/card:opacity-100 transition-opacity">
                 <div className="w-1.5 h-1.5 rounded-full bg-red-600" />
              </div>
            </a>
          ))}
        </div>

        {/* Right Mask Overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes brand-scroll {
          from { 
            transform: translateX(0); 
          }
          to { 
            transform: translateX(calc(-50% - 1rem)); 
          }
        }
        .animate-brand-scroll {
          animation: brand-scroll 35s linear infinite;
        }
      `}</style>
    </div>
  );
}