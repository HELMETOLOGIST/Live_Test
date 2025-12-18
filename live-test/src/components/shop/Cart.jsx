import React, { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { 
  Trash2, Plus, Minus, Tag, ArrowRight, ShoppingBag, 
  ShieldCheck, Truck, ChevronLeft, CreditCard 
} from "lucide-react";

// Mock Initial Data
const initialCart = [
  {
    id: 1,
    name: "High-Performance Ventilated Brake Disc",
    sku: "VW-99021-PL",
    price: 4250,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400",
    quantity: 1,
    variant: "Z-Coat Performance"
  },
  {
    id: 2,
    name: "Ceramic Brake Pads (Front Set)",
    sku: "VW-PAD-002",
    price: 1800,
    image: "https://images.unsplash.com/photo-1593062087953-b837e95b7095?auto=format&fit=crop&w=400",
    quantity: 2,
    variant: "Standard"
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function CartPage() {
  const [cart, setCart] = useState(initialCart);
  const [coupon, setCoupon] = useState("");

  const updateQuantity = (id, delta) => {
    setCart(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const removeItem = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const gst = Math.round(subtotal * 0.18);
  const shipping = subtotal > 5000 ? 0 : 250;
  const total = subtotal + gst + shipping;

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="bg-white min-h-screen pt-32 pb-24 px-6 font-sans"
    >
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <motion.div variants={fadeInUp} className="mb-12 border-b border-gray-100 pb-8 flex items-end justify-between">
          <div className="space-y-2">
            <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-red-600 transition-colors">
              <ChevronLeft size={14} /> Return to Store
            </button>
            <h1 className="text-6xl font-black text-gray-900 uppercase tracking-tighter leading-none">
              Technical <span className="text-red-600">Manifest</span>
            </h1>
          </div>
          <div className="text-right hidden md:block">
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Inventory Status</p>
            <p className="text-sm font-black uppercase">Ready for Deployment</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* LEFT: CART ITEMS */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="popLayout">
              {cart.length > 0 ? (
                <motion.div layout className="space-y-6">
                  {cart.map((item) => (
                    <CartItem 
                      key={item.id} 
                      item={item} 
                      onUpdate={updateQuantity} 
                      onRemove={removeItem} 
                    />
                  ))}
                </motion.div>
              ) : (
                <EmptyCartState />
              )}
            </AnimatePresence>
          </div>

          {/* RIGHT: PRICE BREAKDOWN */}
          <motion.div variants={fadeInUp} className="lg:col-span-4">
            <div className="sticky top-32 space-y-6">
              {/* COUPON SECTION */}
              <div className="bg-gray-50 p-6 rounded-[32px] border border-gray-100">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3 block px-1">Clearance Code</label>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    placeholder="ENTER CODE"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value.toUpperCase())}
                    className="flex-1 bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-red-600 transition-colors"
                  />
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-black text-white px-6 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-red-600 transition-colors"
                  >
                    Apply
                  </motion.button>
                </div>
              </div>

              {/* SUMMARY BOX */}
              <div className="bg-black rounded-[48px] p-10 text-white shadow-2xl relative overflow-hidden">
                <div className="relative z-10 space-y-6">
                  <h3 className="text-2xl font-black uppercase tracking-tight border-b border-white/10 pb-4">Log Summary</h3>
                  
                  <div className="space-y-4">
                    <SummaryLine label="Subtotal" value={`₹${subtotal.toLocaleString()}`} />
                    <SummaryLine label="Technical GST (18%)" value={`₹${gst.toLocaleString()}`} />
                    <SummaryLine label="Logistics" value={shipping === 0 ? "FREE" : `₹${shipping}`} />
                  </div>

                  <div className="pt-6 border-t border-white/20">
                    <div className="flex justify-between items-end">
                      <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Total Payable</span>
                      <span className="text-4xl font-black tracking-tighter text-red-600">₹{total.toLocaleString()}</span>
                    </div>
                  </div>

                  <motion.button 
                    whileHover={{ scale: 1.02, backgroundColor: "#dc2626" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-white text-black py-6 rounded-3xl font-black uppercase text-[12px] tracking-[0.2em] flex items-center justify-center gap-3 shadow-xl transition-colors"
                  >
                    Initiate Checkout <ArrowRight size={18} />
                  </motion.button>
                  
                  <div className="flex items-center justify-center gap-4 pt-4 opacity-50">
                    <ShieldCheck size={16} />
                    <p className="text-[8px] font-black uppercase tracking-widest">Encrypted Technical Gateway</p>
                  </div>
                </div>

                {/* Background Decoration */}
                <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-red-600/10 rounded-full blur-3xl" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

// SUB-COMPONENTS
function CartItem({ item, onUpdate, onRemove }) {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
      className="group bg-white border border-gray-100 p-6 rounded-[40px] flex flex-col md:flex-row items-center gap-8 hover:shadow-xl hover:border-red-600/20 transition-all"
    >
      <div className="w-32 h-32 rounded-3xl overflow-hidden bg-gray-50 flex-shrink-0 border border-gray-100">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
      </div>

      <div className="flex-1 space-y-2 text-center md:text-left">
        <div className="flex flex-col md:flex-row md:items-center gap-2">
          <span className="text-[9px] font-black bg-red-600 text-white px-2 py-0.5 rounded w-max mx-auto md:mx-0 uppercase tracking-tighter">SKU: {item.sku}</span>
          <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">{item.variant}</span>
        </div>
        <h3 className="text-xl font-black uppercase tracking-tighter text-gray-900 leading-none">{item.name}</h3>
        <p className="text-lg font-black text-red-600">₹{item.price.toLocaleString()}</p>
      </div>

      <div className="flex items-center gap-6">
        {/* Quantity Controls */}
        <div className="flex items-center bg-gray-50 rounded-2xl p-1 border border-gray-100">
          <motion.button 
            whileTap={{ scale: 0.8 }}
            onClick={() => onUpdate(item.id, -1)}
            className="p-3 hover:bg-white hover:text-red-600 rounded-xl transition-all"
          >
            <Minus size={16} />
          </motion.button>
          <span className="w-12 text-center font-black text-sm">{item.quantity}</span>
          <motion.button 
            whileTap={{ scale: 0.8 }}
            onClick={() => onUpdate(item.id, 1)}
            className="p-3 hover:bg-white hover:text-red-600 rounded-xl transition-all"
          >
            <Plus size={16} />
          </motion.button>
        </div>

        <div className="text-right min-w-[100px] hidden sm:block">
          <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">Subtotal</p>
          <p className="text-xl font-black uppercase tracking-tighter">₹{(item.price * item.quantity).toLocaleString()}</p>
        </div>

        <motion.button 
          whileHover={{ scale: 1.1, color: "#dc2626" }}
          whileTap={{ scale: 0.9 }}
          onClick={() => onRemove(item.id)}
          className="p-4 text-gray-300 transition-colors"
        >
          <Trash2 size={20} />
        </motion.button>
      </div>
    </motion.div>
  );
}

function SummaryLine({ label, value }) {
  return (
    <div className="flex justify-between items-center text-sm">
      <span className="font-black uppercase tracking-widest text-[10px] text-gray-400">{label}</span>
      <span className="font-bold tracking-tight">{value}</span>
    </div>
  );
}

function EmptyCartState() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-center py-24 border-2 border-dashed border-gray-100 rounded-[48px]"
    >
      <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
        <ShoppingBag size={40} className="text-gray-200" />
      </div>
      <h2 className="text-3xl font-black uppercase tracking-tighter mb-4">Log is Empty</h2>
      <p className="text-gray-400 font-medium mb-8">No hardware detected for deployment.</p>
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-black text-white px-8 py-4 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em]"
      >
        Browse Components
      </motion.button>
    </motion.div>
  );
}