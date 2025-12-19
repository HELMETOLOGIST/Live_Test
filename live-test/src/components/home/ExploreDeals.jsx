import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDownRight } from "lucide-react"; 
import ProductCard from "./ProductCard";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [limit, setLimit] = useState(8);

  const products = [
    {
      id: "hex-nut-01",
      image: "https://thetoolscope.com/wp-content/uploads/2021/03/012-Orbital-Random-Sander-Youtube-Thumbnail-1024x576.png",
      category: "Fasteners",
      tag: "Featured",
      name: "Sander",
      description: "Standard hex nut used for fastening bolts in hardware and mechanical assemblies.",
      price: "30"
    },
    {
      id: "steel-bolt-02",
      image: "https://www.polymak.co.in/category-pics/85_1703329292.jpeg",
      category: "Fasteners",
      tag: "New",
      name: "Cutter",
      description: "High-tensile steel bolt suitable for construction and machinery use.",
      price: "45"
    },
    {
      id: "washer-03",
      image: "https://cdn.pixabay.com/photo/2013/07/12/19/30/power-drill-154903_1280.png",
      category: "Fasteners",
      tag: "Featured",
      name: "Drill",
      description: "Flat metal washer used to distribute load and prevent surface damage.",
      price: "15"
    },
    {
      id: "bearing-04",
      image: "https://images.jdmagicbox.com/quickquotes/images_main/bosch-power-tools-rated-voltage-110-220-v-2007332899-q2b3vu6w.jpg",
      category: "Mechanical Parts",
      tag: "New",
      name: "Angle Grinder",
      description: "Precision ball bearing designed for smooth rotation in machines and motors.",
      price: "320"
    },
    {
      id: "spring-05",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5OxGL73-7bFLVw87-yt-meaFoh_ZhlfZ50Q&s",
      category: "Hardware Parts",
      tag: "Featured",
      name: "Chain Saw",
      description: "High-carbon steel spring used in mechanical and industrial applications.",
      price: "120"
    },
    {
      id: "gear-06",
      image: "https://tiimg.tistatic.com/fp/1/009/198/power-tools-494.jpg",
      category: "Hardware Parts",
      tag: "New",
      name: "Jigsaw",
      description: "Machined steel gear for power transmission in industrial equipment.",
      price: "750"
    },
    {
      id: "gear-07",
      image: "https://www.polymak.co.in/category-pics/17_1702441149.jpg",
      category: "Hardware Parts",
      tag: "New",
      name: "Cordless Drill",
      description: "Machined steel gear for power transmission in industrial equipment.",
      price: "750"
    },
    {
      id: "gear-08",
      image: "https://www.liontoolsmart.com/cdn/shop/files/185-1_1000x1000.progressive.jpg?v=1742457385",
      category: "Hardware Parts",
      tag: "New",
      name: "Cordless Reciprocating Drill",
      description: "Machined steel gear for power transmission in industrial equipment.",
      price: "750"
    },
    { id: "gear-09", name: "Heavy Duty Bolt", category: "Fasteners", tag: "New", price: "80", image: "https://images.unsplash.com/photo-1586864387917-f74e18d2600f?q=80&w=400", description: "Industrial bolt." },
    { id: "gear-10", name: "Torque Wrench", category: "Hardware Parts", tag: "Featured", price: "450", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=400", description: "Precision wrench." }
  ];

  const filterOptions = ["All", "New", "Featured"];

  const filteredProducts = activeFilter === "All" 
    ? products 
    : products.filter(p => p.tag === activeFilter);

  const displayedProducts = filteredProducts.slice(0, limit);
  const hasMore = limit < filteredProducts.length;

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-24">
        
        {/* UPDATED HEADER SECTION (SENSE THEME) */}
        <div className="flex flex-col items-center text-center space-y-2 mb-16">
          <motion.span 
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.4em" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-red-600 font-black text-[10px] md:text-xs uppercase tracking-[0.4em]"
          >
            Premium Selection
          </motion.span>
          
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter uppercase leading-none">
            Our <span className="text-red-600">Inventory</span>
          </h2>

          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 1, delay: 0.5, ease: "circOut" }}
            className="h-1.5 bg-red-600 mt-6 rounded-full" 
          />
        </div>

        {/* FILTER TOGGLE (Centered to match new header) */}
        <div className="flex justify-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex bg-gray-100 p-1.5 rounded-2xl border border-gray-200 overflow-x-auto no-scrollbar"
          >
            {filterOptions.map((option) => (
              <button
                key={option}
                onClick={() => { setActiveFilter(option); setLimit(8); }}
                className={`relative px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-colors duration-300 whitespace-nowrap ${
                  activeFilter === option ? "text-white" : "text-gray-400 hover:text-gray-900"
                }`}
              >
                <span className="relative z-10">{option}</span>
                {activeFilter === option && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 bg-black rounded-xl shadow-lg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </motion.div>
        </div>

        {/* PRODUCT GRID */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          <AnimatePresence mode="popLayout">
            {displayedProducts.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <ProductCard product={p} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* EXPLORE MORE BUTTON */}
        <AnimatePresence>
          {hasMore && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="mt-20 flex justify-center"
            >
              <button 
                onClick={() => setLimit(prev => prev + 4)}
                className="group relative flex items-center gap-6 px-12 py-6 bg-black rounded-full overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
              >
                <div className="absolute inset-0 w-0 bg-red-600 group-hover:w-full transition-all duration-500 ease-out -z-10" />
                
                <span className="text-[11px] font-black uppercase tracking-[0.3em] text-white">
                  Explore More Assets
                </span>
                
                <div className="p-2 bg-white/10 rounded-full text-white group-hover:bg-white group-hover:text-red-600 transition-all duration-500 group-hover:rotate-45">
                  <ArrowDownRight size={18} strokeWidth={3} />
                </div>
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* EMPTY STATE */}
        {displayedProducts.length === 0 && (
          <div className="py-20 text-center border-2 border-dashed border-gray-100 rounded-[40px]">
            <p className="text-gray-400 font-black uppercase tracking-widest italic">
              Scanning Archive... No components detected.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}