import React, { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { 
  FileText, Download, ChevronRight, Star, ShieldCheck, Settings, 
  Maximize2, ShoppingCart, ArrowRight, Package, Zap, Send, Eye, Info, Flag 
} from "lucide-react";

// Mock Data
const productData = {
  product_id: "VW-99021-PL",
  category_id: "CAT-BRAKE-01",
  brand_id: "BR-VESTEL-IND",
  name: "High-Performance Ventilated Brake Disc",
  slug: "high-performance-brake-disc",
  vendor: "Vestel Mechanicals",
  store: "Bangalore Main Warehouse",
  quantity: 45,
  manufacture_date: "2024-05-12",
  origin_country: "India",
  warranty_months: 24,
  price_inr: 4250,
  price_usd: 51,
  price: 4250,
  discount_percent: 29,
  in_stock: true,
  featured: true,
  new_arrival: true,
  limited_stock: true,
  description: "Ventilated steel brake disc engineered specifically for the Polo G6 chassis. Features anti-corrosion coating and precision-drilled cooling holes for maximum thermal dissipation.",
  hot_deal: true,
  hot_deal_ends_at: "2025-12-31",
  gst_rate: 18,
  mrp_price: 5999,
  cost_price: 3100,
  is_published: true,
  views_count: 1240,
  carts_count: 89,
  sold_count: 850,
  reviews_count: 48,
  rating_avg: 4.8,
  product_type: "Spare Part",
  machine: "Volkswagen Polo (2018-2024)",
  images: [
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800",
    "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800",
    "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=800"
  ],
  specs: [
    { label: "Material", value: "Carbon-Steel Alloy" },
    { label: "Diameter", value: "288mm" },
    { label: "Weight", value: "5.4kg" },
    { label: "Standards", value: "ISO 9001 / TUV" }
  ],
  relatedParts: [
    { name: "Ceramic Brake Pads", type: "Essential", price: "₹1,800", img: "https://images.unsplash.com/photo-1593062087953-b837e95b7095?auto=format&fit=crop&w=400" },
    { name: "Brake Fluid (DOT 4)", type: "Maintenance", price: "₹450", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400" },
    { name: "ABS Sensor G6", type: "Electronic", price: "₹1,200", img: "https://images.unsplash.com/photo-1530124560677-bdaea027df32?auto=format&fit=crop&w=400" }
  ]
};

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
};

const imageTransition = {
  initial: { opacity: 0, scale: 1.1, filter: "blur(10px)" },
  animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
  exit: { opacity: 0, scale: 0.95, filter: "blur(10px)" },
  transition: { duration: 0.5, ease: "anticipate" }
};

export default function ProductView() {
  const [activeImg, setActiveImg] = useState(productData.images[0]);
  const [zoomPos, setZoomPos] = useState({ x: 0, y: 0, show: false });
  const [selectedVariant, setSelectedVariant] = useState("Standard");

  // Review Form State
  const [reviewForm, setReviewForm] = useState({
    rating: 0,
    title: "",
    body: "",
    user_name: "",
    user_email: ""
  });
  const [hoverRating, setHoverRating] = useState(0);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top - window.scrollY) / height) * 100;
    setZoomPos({ x, y, show: true });
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting Review:", {
      ...reviewForm,
      product_id: productData.product_id,
      ip_address: "192.168.1.1",
      user_agent: navigator.userAgent
    });
    alert("Technical Log Submitted for Approval");
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="bg-white min-h-screen pt-32 pb-24 px-6 font-sans overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* ================= HEADER STATS BAR ================= */}
        <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-between gap-4 mb-8 border-b border-gray-100 pb-6">
          <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
            <span>Inventory</span> <ChevronRight size={12} />
            <span>{productData.product_type}</span> <ChevronRight size={12} />
            <motion.span layoutId="activePath" className="text-red-600">{productData.name}</motion.span>
          </nav>
          <div className="flex items-center gap-6">
            <StatPill icon={<Eye size={14}/>} count={productData.views_count} label="Views" />
            <StatPill icon={<ShoppingCart size={14}/>} count={productData.carts_count} label="Carts" />
            <StatPill icon={<Package size={14}/>} count={productData.sold_count} label="Sold" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          
          {/* ================= LEFT: GALLERY & ZOOM ================= */}
          <motion.div variants={fadeInUp} className="lg:col-span-7 space-y-6">
            <div 
              className="relative aspect-square bg-gray-50 rounded-[48px] overflow-hidden border border-gray-100 cursor-crosshair group"
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setZoomPos({ ...zoomPos, show: false })}
            >
              <AnimatePresence mode="wait">
                <motion.img 
                  key={activeImg}
                  {...imageTransition}
                  src={activeImg} 
                  className="w-full h-full object-cover" 
                  alt="Product" 
                />
              </AnimatePresence>

              <AnimatePresence>
                {zoomPos.show && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-10 pointer-events-none hidden md:block"
                    style={{ 
                      backgroundImage: `url(${activeImg})`, 
                      backgroundPosition: `${zoomPos.x}% ${zoomPos.y}%`, 
                      backgroundSize: '250%', 
                      backgroundRepeat: 'no-repeat' 
                    }}
                  />
                )}
              </AnimatePresence>
              
              <div className="absolute top-6 left-6 flex flex-col gap-2">
                <motion.div whileHover={{ scale: 1.05 }} className="bg-black text-white px-4 py-2 rounded-xl text-[10px] font-black tracking-widest uppercase flex items-center gap-2 shadow-2xl">
                  <Maximize2 size={14} className="text-red-600" /> High-Res View
                </motion.div>
                {productData.hot_deal && (
                  <motion.div 
                    animate={{ opacity: [1, 0.5, 1], scale: [1, 1.02, 1] }} 
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="bg-red-600 text-white px-4 py-2 rounded-xl text-[10px] font-black tracking-widest uppercase flex items-center gap-2"
                  >
                    <Zap size={14} /> Hot Deal
                  </motion.div>
                )}
              </div>
            </div>

            <div className="flex gap-4">
              {productData.images.map((img, i) => (
                <motion.button 
                  key={i} 
                  whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setActiveImg(img)} 
                  className={`relative w-24 h-24 rounded-2xl overflow-hidden border-2 transition-all ${activeImg === img ? "border-red-600 shadow-xl" : "border-transparent opacity-60 hover:opacity-100"}`}
                >
                  <img src={img} className="w-full h-full object-cover" alt="Thumb" />
                  {activeImg === img && (
                    <motion.div layoutId="thumbBorder" className="absolute inset-0 border-2 border-red-600 rounded-2xl" />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* ================= RIGHT: PRODUCT INFO ================= */}
          <motion.div variants={fadeInUp} className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <motion.div variants={fadeInUp} className="flex items-center gap-3">
                {productData.new_arrival && (
                  <motion.span initial={{ x: -20 }} animate={{ x: 0 }} className="bg-red-600 text-white px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest">New Arrival</motion.span>
                )}
                <span className="text-[10px] text-gray-400 font-black uppercase tracking-widest">SKU: {productData.product_id}</span>
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-5xl font-black text-gray-900 uppercase tracking-tighter leading-none">
                {productData.name}
              </motion.h1>

              <motion.div 
                whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.08)" }} 
                className="p-8 bg-gray-50 rounded-[40px] border border-gray-100 transition-all"
              >
                <div className="flex items-center gap-4">
                  <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="text-5xl font-black text-red-600">₹{productData.price_inr}</motion.div>
                  <div className="flex flex-col">
                    <span className="text-lg text-gray-300 line-through font-bold">₹{productData.mrp_price}</span>
                    <span className="text-green-600 text-[10px] font-black uppercase">{productData.discount_percent}% Discount Applied</span>
                  </div>
                </div>
                <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-4 flex items-center gap-2">
                  <Info size={14} className="text-blue-500" /> Including {productData.gst_rate}% GST
                </div>
              </motion.div>
            </div>

            {/* VARIANTS */}
            <div className="space-y-3">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Coating Variant</label>
              <LayoutGroup>
                <div className="flex gap-3">
                  {["Standard", "Z-Coat", "Performance"].map((v) => (
                    <motion.button 
                      key={v} 
                      layout
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedVariant(v)} 
                      className={`relative px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${selectedVariant === v ? "text-red-600" : "text-gray-400 hover:text-gray-600"}`}
                    >
                      <span className="relative z-10">{v}</span>
                      {selectedVariant === v && (
                        <motion.div 
                          layoutId="variantBg" 
                          className="absolute inset-0 bg-red-50 border-2 border-red-600 rounded-xl"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </motion.button>
                  ))}
                </div>
              </LayoutGroup>
            </div>

            {/* METADATA GRID */}
            <div className="grid grid-cols-2 gap-4">
              <MetadataItem icon={<ShieldCheck size={14}/>} label="Warranty" value={`${productData.warranty_months} Months`} />
              <MetadataItem icon={<Flag size={14}/>} label="Origin" value={productData.origin_country} />
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button 
                whileHover={{ scale: 1.02, backgroundColor: "#1a1a1a" }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 bg-black text-white py-6 rounded-3xl font-black uppercase text-[11px] tracking-widest flex items-center justify-center gap-3 shadow-xl transition-colors"
              >
                <ShoppingCart size={18} /> Add To Cart
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.02, backgroundColor: "#dc2626" }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 bg-red-600 text-white py-6 rounded-3xl font-black uppercase text-[11px] tracking-widest flex items-center justify-center gap-3 shadow-xl transition-colors"
              >
                <Zap size={18} fill="currentColor" /> Buy Now
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* ================= REVIEW SECTION & FORM ================= */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 pt-24 border-t border-gray-100"
        >
          
          <motion.div variants={fadeInUp} className="lg:col-span-5 space-y-12">
            <div className="space-y-4">
              <h3 className="text-4xl font-black uppercase tracking-tighter leading-none">Submit <br/><span className="text-red-600">Performance Log</span></h3>
              <p className="text-gray-500 font-medium">Your technical feedback helps us maintain precision standards.</p>
            </div>

            <form onSubmit={handleReviewSubmit} className="space-y-6 bg-gray-50 p-8 rounded-[40px] border border-gray-100">
              <div className="space-y-3">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Select Rating Grade</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <motion.button
                      type="button" key={star}
                      whileTap={{ scale: 0.8 }}
                      onClick={() => setReviewForm({...reviewForm, rating: star})}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                    >
                      <Star 
                        size={28} 
                        fill={(hoverRating || reviewForm.rating) >= star ? "#dc2626" : "transparent"} 
                        className={(hoverRating || reviewForm.rating) >= star ? "text-red-600" : "text-gray-300 transition-colors"}
                      />
                    </motion.button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <InputGroup label="Full Name" placeholder="Rahul Sharma" value={reviewForm.user_name} onChange={(val) => setReviewForm({...reviewForm, user_name: val})} />
                <InputGroup label="System Email" placeholder="rahul@eng.com" value={reviewForm.user_email} onChange={(val) => setReviewForm({...reviewForm, user_email: val})} />
              </div>
              <InputGroup label="Review Title" placeholder="Perfect OEM Fit" value={reviewForm.title} onChange={(val) => setReviewForm({...reviewForm, title: val})} />
              
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">Technical Body</label>
                <textarea 
                  required rows="4"
                  className="w-full bg-white border border-gray-200 rounded-2xl p-4 text-sm font-medium focus:outline-none focus:border-red-600 transition-colors resize-none"
                  placeholder="Describe parts performance..."
                  value={reviewForm.body}
                  onChange={(e) => setReviewForm({...reviewForm, body: e.target.value})}
                />
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                className="w-full bg-black text-white py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest flex items-center justify-center gap-3 hover:bg-red-600 transition-all"
              >
                Submit Log <Send size={14} />
              </motion.button>
            </form>
          </motion.div>

          <motion.div variants={fadeInUp} className="lg:col-span-7 space-y-8">
            <div className="flex items-center justify-between border-b border-gray-100 pb-6">
              <h4 className="text-xl font-black uppercase tracking-tight">Deployment Logs</h4>
              <span className="text-[10px] font-black text-gray-400 uppercase">Total: {productData.reviews_count}</span>
            </div>
            
            <div className="space-y-8 max-h-[800px] overflow-y-auto pr-4 custom-scrollbar">
              <ReviewCard name="Mechanical King" date="12 Oct 2025" title="Superior Thermal Control" body="The ventilated design works flawlessly under heavy braking loads." rating={5} />
              <ReviewCard name="Amit Tech" date="05 Oct 2025" title="Precise Fit" body="Alignment was 100% accurate to the Polo G6 chassis blueprint." rating={4} />
            </div>
          </motion.div>
        </motion.div>

        {/* ================= DOCUMENTATION & RELATED ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 my-24 items-center">
           <motion.div 
             initial="hidden" 
             whileInView="visible" 
             viewport={{ once: true }} 
             variants={staggerContainer} 
             className="space-y-6"
           >
              <motion.h3 variants={fadeInUp} className="text-3xl font-black uppercase tracking-tighter">Technical <span className="text-gray-300">Vault</span></motion.h3>
              <motion.p variants={fadeInUp} className="text-gray-500 font-medium">Access blueprints directly from our engineering database.</motion.p>
              <motion.div variants={staggerContainer} className="space-y-3">
                <DownloadCard label="Installation Manual.pdf" size="2.4 MB" />
                <DownloadCard label="Technical Blueprint.dwg" size="14.8 MB" />
              </motion.div>
           </motion.div>

           <motion.div 
             initial={{ scale: 0.9, opacity: 0 }}
             whileInView={{ scale: 1, opacity: 1 }}
             viewport={{ once: true }}
             whileHover={{ scale: 1.02 }}
             className="bg-red-600 rounded-[48px] p-12 text-white relative overflow-hidden group cursor-pointer shadow-2xl"
           >
              <div className="relative z-10 space-y-6">
                 <h3 className="text-4xl font-black uppercase tracking-tighter leading-none">Need Expert Installation?</h3>
                 <motion.button 
                   whileHover={{ x: 10 }}
                   className="flex items-center gap-3 bg-white text-red-600 px-8 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-black hover:text-white transition-all shadow-lg"
                 >
                    Request Technician <ArrowRight size={16} />
                 </motion.button>
              </div>
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-20 -right-20 opacity-10"
              >
                <Settings size={300} />
              </motion.div>
           </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

// UI HELPER COMPONENTS
function StatPill({ icon, count, label }) {
  return (
    <motion.div 
      whileHover={{ y: -2 }}
      className="flex items-center gap-2 text-[10px] font-black uppercase text-gray-400"
    >
      <span className="text-red-600">{icon}</span>
      <span>{count} {label}</span>
    </motion.div>
  );
}

function InputGroup({ label, placeholder, value, onChange }) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">{label}</label>
      <input 
        required type="text"
        className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-3 text-sm font-medium focus:outline-none focus:border-red-600 transition-colors"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

function ReviewCard({ name, date, title, body, rating }) {
  return (
    <motion.div 
      variants={fadeInUp}
      whileHover={{ x: 10, borderColor: "#dc2626" }}
      className="p-8 bg-white border border-gray-100 rounded-[32px] transition-all group shadow-sm"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center text-white font-black">{name.charAt(0)}</div>
          <div>
            <p className="text-sm font-black uppercase tracking-tight">{name}</p>
            <p className="text-[9px] font-black text-gray-400 uppercase">{date}</p>
          </div>
        </div>
        <div className="flex text-yellow-500">
          {[...Array(5)].map((_, i) => <Star key={i} size={12} fill={i < rating ? "currentColor" : "none"} />)}
        </div>
      </div>
      <h4 className="text-lg font-black uppercase tracking-tight text-red-600 mb-2">{title}</h4>
      <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
    </motion.div>
  );
}

function MetadataItem({ icon, label, value }) {
  return (
    <motion.div 
      variants={fadeInUp}
      whileHover={{ y: -5, borderColor: "#dc2626" }} 
      className="p-4 bg-white border border-gray-100 rounded-2xl flex items-center gap-3 shadow-sm transition-all"
    >
      <div className="text-red-600">{icon}</div>
      <div>
        <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-0.5">{label}</p>
        <p className="text-sm font-black text-gray-900 uppercase tracking-tight">{value}</p>
      </div>
    </motion.div>
  );
}

function DownloadCard({ label, size }) {
  return (
    <motion.div 
      variants={fadeInUp}
      whileHover={{ scale: 1.02, borderColor: "#dc2626" }}
      className="flex items-center justify-between p-5 bg-white border-2 border-gray-100 rounded-[24px] group hover:border-red-600 transition-all cursor-pointer shadow-sm"
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-all"><FileText size={20} /></div>
        <div>
           <p className="text-sm font-black text-gray-900 uppercase tracking-tight">{label}</p>
           <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">{size}</p>
        </div>
      </div>
      <Download size={18} className="text-gray-300 group-hover:text-red-600 transition-all" />
    </motion.div>
  );
}