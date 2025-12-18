import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, Filter, X, SlidersHorizontal, ChevronDown, 
  LayoutGrid, List, ArrowUpDown, PackageOpen, Zap,
  Check, RotateCcw, Factory, Warehouse, ShieldCheck
} from "lucide-react";
import ProductCard from "../../components/home/ProductCard";

// Mock Database (Same as provided)
const MOCK_PRODUCTS = [
  { id: "VW-99021-PL", title: "Ventilated Brake Disc", category: "Braking System", brand: "VESTEL", price_inr: 4250, in_stock: true, condition: "New", warehouse: "Bangalore", rating: 4.8, image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800" },
  { id: "GR-7721-XT", title: "Industrial Carbon Gear", category: "Mechanical", brand: "SENSE", price_inr: 8900, in_stock: true, condition: "Refurbished", warehouse: "Mumbai", rating: 4.5, image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=800" },
  { id: "EL-0012-AB", title: "ABS Sensor Unit", category: "Electronics", brand: "BOSCH", price_inr: 1200, in_stock: false, condition: "New", warehouse: "Bangalore", rating: 4.2, image: "https://images.unsplash.com/photo-1530124560677-bdaea027df32?auto=format&fit=crop&w=800" },
  { id: "SU-5542-BK", title: "Shock Absorber Strut", category: "Suspension", brand: "SENSE", price_inr: 5400, in_stock: true, condition: "New", warehouse: "Chennai", rating: 4.9, image: "https://images.unsplash.com/photo-1512749355846-512336827a4d?auto=format&fit=crop&w=800" },
  { id: "SU-5542-BK", title: "Shock Absorber Strut", category: "Suspension", brand: "SENSE", price_inr: 5400, in_stock: true, condition: "New", warehouse: "Chennai", rating: 4.9, image: "https://images.unsplash.com/photo-1512749355846-512336827a4d?auto=format&fit=crop&w=800" },
  { id: "SU-5542-BK", title: "Shock Absorber Strut", category: "Suspension", brand: "SENSE", price_inr: 5400, in_stock: true, condition: "New", warehouse: "Chennai", rating: 4.9, image: "https://images.unsplash.com/photo-1512749355846-512336827a4d?auto=format&fit=crop&w=800" },
  { id: "SU-5542-BK", title: "Shock Absorber Strut", category: "Suspension", brand: "SENSE", price_inr: 5400, in_stock: true, condition: "New", warehouse: "Chennai", rating: 4.9, image: "https://images.unsplash.com/photo-1512749355846-512336827a4d?auto=format&fit=crop&w=800" },
  { id: "SU-5542-BK", title: "Shock Absorber Strut", category: "Suspension", brand: "SENSE", price_inr: 5400, in_stock: true, condition: "New", warehouse: "Chennai", rating: 4.9, image: "https://images.unsplash.com/photo-1512749355846-512336827a4d?auto=format&fit=crop&w=800" },
  { id: "SU-5542-BK", title: "Shock Absorber Strut", category: "Suspension", brand: "SENSE", price_inr: 5400, in_stock: true, condition: "New", warehouse: "Chennai", rating: 4.9, image: "https://images.unsplash.com/photo-1512749355846-512336827a4d?auto=format&fit=crop&w=800" },
  { id: "SU-5542-BK", title: "Shock Absorber Strut", category: "Suspension", brand: "SENSE", price_inr: 5400, in_stock: true, condition: "New", warehouse: "Chennai", rating: 4.9, image: "https://images.unsplash.com/photo-1512749355846-512336827a4d?auto=format&fit=crop&w=800" },


];

const CATEGORIES = ["All", "Braking System", "Mechanical", "Electronics", "Suspension", "Transmission"];
const BRANDS = ["SENSE", "VESTEL", "BOSCH", "BREMBO"];
const WAREHOUSES = ["Bangalore", "Mumbai", "Chennai"];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
};

export default function ShopPage() {
  const [isMobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceRange, setPriceRange] = useState(10000);
  const [onlyInStock, setOnlyInStock] = useState(false);
  const [selectedWarehouse, setSelectedWarehouse] = useState("All");
  const [sortBy, setSortBy] = useState("relevance");

  const toggleBrand = (brand) => {
    setSelectedBrands(prev => prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]);
  };

  const filteredProducts = useMemo(() => {
    return MOCK_PRODUCTS.filter(product => {
      const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            product.id.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === "All" || product.category === activeCategory;
      const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
      const matchesPrice = product.price_inr <= priceRange;
      const matchesStock = !onlyInStock || product.in_stock;
      const matchesWarehouse = selectedWarehouse === "All" || product.warehouse === selectedWarehouse;
      return matchesSearch && matchesCategory && matchesBrand && matchesPrice && matchesStock && matchesWarehouse;
    }).sort((a, b) => {
      if (sortBy === "price-low") return a.price_inr - b.price_inr;
      if (sortBy === "price-high") return b.price_inr - a.price_inr;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });
  }, [searchQuery, activeCategory, selectedBrands, priceRange, onlyInStock, selectedWarehouse, sortBy]);

  const clearFilters = () => {
    setActiveCategory("All"); setSelectedBrands([]); setPriceRange(10000);
    setOnlyInStock(false); setSelectedWarehouse("All"); setSearchQuery("");
  };

  return (
    <div className="bg-white min-h-screen pt-28 pb-20 px-6 font-sans">
      <div className="max-w-[1600px] mx-auto">
        
        {/* ================= SHOP HEADER ================= */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 border-b border-gray-100 pb-10"
        >
          <div className="space-y-2">
            <h1 className="text-6xl font-black uppercase tracking-tighter leading-none">
              Part <span className="text-red-600">Vault</span>
            </h1>
            <p className="text-gray-400 font-medium uppercase text-[10px] tracking-[0.4em] flex items-center gap-2">
              <ShieldCheck size={14} className="text-red-600" /> Engineering-Grade Components Only
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-red-600 transition-colors" size={18} />
              <input 
                type="text" 
                placeholder="Search SKU or Name..."
                className="bg-gray-50 border border-gray-100 py-4 pl-12 pr-6 rounded-2xl w-full md:w-[380px] text-sm font-medium focus:outline-none focus:border-red-600 transition-all shadow-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <motion.button 
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileFilterOpen(true)} 
              className="lg:hidden p-4 bg-black text-white rounded-2xl"
            >
              <Filter size={20} />
            </motion.button>
          </div>
        </motion.div>

        {/* ================= ACTIVE FILTER CHIPS ================= */}
        <div className="flex flex-wrap items-center gap-3 mb-8 min-h-[40px]">
          <AnimatePresence>
            <motion.div layout className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-full text-[10px] font-black uppercase tracking-widest">
              <Filter size={12} /> Filters
            </motion.div>
            {activeCategory !== "All" && (
              <FilterChip key="cat" label={activeCategory} onClear={() => setActiveCategory("All")} />
            )}
            {selectedBrands.map(b => (
              <FilterChip key={b} label={b} onClear={() => toggleBrand(b)} />
            ))}
            {onlyInStock && (
              <FilterChip key="stock" label="In Stock" onClear={() => setOnlyInStock(false)} />
            )}
            {(activeCategory !== "All" || selectedBrands.length > 0 || onlyInStock) && (
              <motion.button 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={clearFilters} 
                className="text-[10px] font-black uppercase tracking-widest text-red-600 hover:bg-red-50 px-4 py-2 rounded-full transition-colors flex items-center gap-2"
              >
                <RotateCcw size={12} /> Reset System
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        <div className="flex gap-12 relative">
          
          {/* ================= SIDEBAR FILTERS (Desktop) ================= */}
          <aside className="hidden lg:block w-[320px] shrink-0 space-y-8 sticky top-32 h-[calc(100vh-160px)] overflow-y-auto pr-4 custom-scrollbar">
            
            <FilterSection icon={<LayoutGrid size={14} />} title="System Categories">
              <div className="flex flex-col gap-1">
                {CATEGORIES.map(cat => (
                  <motion.button
                    key={cat}
                    whileHover={{ x: 5 }}
                    onClick={() => setActiveCategory(cat)}
                    className={`text-left px-4 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all ${activeCategory === cat ? "bg-red-600 text-white shadow-lg" : "text-gray-400 hover:bg-gray-50"}`}
                  >
                    {cat}
                  </motion.button>
                ))}
              </div>
            </FilterSection>

            <FilterSection icon={<Factory size={14} />} title="Manufacturer">
              <div className="grid grid-cols-1 gap-2">
                {BRANDS.map(brand => (
                  <motion.button
                    key={brand}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => toggleBrand(brand)}
                    className={`flex items-center justify-between px-4 py-3 border-2 rounded-xl transition-all ${selectedBrands.includes(brand) ? "border-black bg-black text-white" : "border-gray-100 text-gray-400"}`}
                  >
                    <span className="text-[11px] font-black uppercase tracking-widest">{brand}</span>
                    {selectedBrands.includes(brand) && <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}><Check size={14} /></motion.div>}
                  </motion.button>
                ))}
              </div>
            </FilterSection>

            <FilterSection title="Price Threshold">
               <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs font-black">
                    <span className="text-gray-400">Max Limit</span>
                    <span className="text-red-600">₹{priceRange.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" min="500" max="15000" step="500" value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-red-600"
                  />
               </div>
            </FilterSection>

            <FilterSection icon={<Warehouse size={14} />} title="Warehouse Location">
               <select 
                value={selectedWarehouse}
                onChange={(e) => setSelectedWarehouse(e.target.value)}
                className="w-full bg-gray-50 border border-gray-100 p-4 rounded-xl text-[11px] font-black uppercase tracking-widest focus:outline-none focus:border-red-600"
               >
                 <option value="All">Global Inventory</option>
                 {WAREHOUSES.map(w => <option key={w} value={w}>{w} Hub</option>)}
               </select>
            </FilterSection>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setOnlyInStock(!onlyInStock)}
              className={`w-full p-6 rounded-[32px] flex items-center justify-between transition-all ${onlyInStock ? "bg-red-600 text-white shadow-xl" : "bg-gray-900 text-white"}`}
            >
              <div className="text-left">
                <p className="text-[10px] font-black uppercase tracking-widest">In Stock</p>
                <p className="text-[9px] opacity-60 font-medium">Verified Availability</p>
              </div>
              <div className={`w-10 h-5 rounded-full relative ${onlyInStock ? "bg-white" : "bg-gray-700"}`}>
                <motion.div 
                  animate={{ x: onlyInStock ? 20 : 0 }}
                  className={`absolute left-1 top-1 w-3 h-3 rounded-full ${onlyInStock ? "bg-red-600" : "bg-white"}`} 
                />
              </div>
            </motion.button>
          </aside>

          {/* ================= MAIN PRODUCT GRID ================= */}
          <main className="flex-1">
            <div className="flex items-center justify-between mb-8">
              <motion.p key={filteredProducts.length} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                Registry Index: <span className="text-gray-900">{filteredProducts.length} Entries found</span>
              </motion.p>
              
              <div className="flex items-center gap-4">
                <div className="relative group">
                  <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-white border border-gray-100 pl-4 pr-10 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest focus:outline-none focus:border-red-600 cursor-pointer"
                  >
                    <option value="relevance">Relevance</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                  <ArrowUpDown size={12} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {filteredProducts.length > 0 ? (
                <motion.div 
                  key="grid"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8"
                >
                  {filteredProducts.map((product) => (
                    <motion.div key={product.id} variants={itemVariants} layout>
                      <ProductCard {...product} />
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div 
                  key="empty"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-40 bg-gray-50 rounded-[48px] border-2 border-dashed border-gray-100"
                >
                  <PackageOpen size={60} className="text-gray-200 mb-4" />
                  <h3 className="text-xl font-black uppercase text-gray-400">Database Entry Not Found</h3>
                  <button onClick={clearFilters} className="mt-6 text-red-600 text-[10px] font-black uppercase tracking-widest hover:underline">
                    Clear System Overrides
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </main>
        </div>
      </div>

      {/* ================= MOBILE FILTER OVERLAY ================= */}
      <AnimatePresence>
        {isMobileFilterOpen && (
          <div className="fixed inset-0 z-[100] lg:hidden">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
              onClick={() => setMobileFilterOpen(false)} 
            />
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-[85%] bg-white p-8 space-y-8 overflow-y-auto"
            >
              <div className="flex justify-between items-center border-b pb-6">
                <h3 className="text-2xl font-black uppercase tracking-tighter">System Filters</h3>
                <button onClick={() => setMobileFilterOpen(false)} className="p-2 bg-gray-50 rounded-full"><X size={20}/></button>
              </div>
              <div className="space-y-8">
                <h4 className="text-[10px] font-black uppercase text-gray-400">Quick Select Category</h4>
                <div className="grid grid-cols-2 gap-2">
                  {CATEGORIES.map(cat => (
                    <button key={cat} onClick={() => setActiveCategory(cat)} className={`p-4 rounded-xl text-[10px] font-black uppercase tracking-widest ${activeCategory === cat ? "bg-red-600 text-white" : "bg-gray-50"}`}>
                      {cat}
                    </button>
                  ))}
                </div>
                <button onClick={() => setMobileFilterOpen(false)} className="w-full bg-black text-white py-4 rounded-2xl font-black uppercase text-xs tracking-widest">Apply Configuration</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

// UI HELPER COMPONENTS
function FilterSection({ icon, title, children }) {
  return (
    <div className="space-y-5">
      <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 flex items-center gap-2">
        {icon} {title}
      </h4>
      {children}
    </div>
  );
}

function FilterChip({ label, onClear }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8, x: -10 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.8 }}
      layout
      className="flex items-center gap-2 pl-4 pr-2 py-2 bg-gray-50 border border-gray-100 rounded-full text-[10px] font-black uppercase tracking-widest text-gray-600 group hover:border-red-600 transition-colors"
    >
      {label}
      <button onClick={onClear} className="p-1 hover:bg-red-600 hover:text-white rounded-full transition-colors">
        <X size={10} />
      </button>
    </motion.div>
  );
}