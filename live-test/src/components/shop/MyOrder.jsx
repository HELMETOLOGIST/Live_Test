import React from "react";
import { motion } from "framer-motion";
import { 
  Package, Download, ExternalLink, 
  Clock, CheckCircle2, Truck, Box,
  ChevronLeft, Search, Filter, ShieldCheck,
  ArrowRight, Activity
} from "lucide-react";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function MyOrdersPage() {
  const orders = [
    {
      id: "ORD-99281-X",
      date: "DEC 12, 2025",
      status: "Delivered",
      total: "₹94,250",
      items: "Sense Hub v2, Tactical Cables (x4)",
      count: 5,
      type: "Primary Deployment"
    },
    {
      id: "ORD-99105-B",
      date: "DEC 05, 2025",
      status: "In Transit",
      total: "₹18,850",
      items: "Operator Console (Titanium Edition)",
      count: 1,
      type: "Hardware Upgrade"
    },
    {
      id: "ORD-98820-Z",
      date: "NOV 22, 2025",
      status: "Processing",
      total: "₹1,42,100",
      items: "Enterprise Satellite Node",
      count: 12,
      type: "Infrastructure expansion"
    }
  ];

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="bg-white min-h-screen pt-32 pb-24 px-6 font-sans"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER SECTION */}
        <motion.div variants={fadeInUp} className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-100 pb-8">
          <div className="space-y-2">
            <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-red-600 transition-colors">
              <ChevronLeft size={14} /> Back to Terminal
            </button>
            <h1 className="text-6xl font-black text-gray-900 uppercase tracking-tighter leading-none">
              Order <span className="text-red-600">Manifest</span>
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input 
                    type="text" 
                    placeholder="Search Deployment ID..." 
                    className="bg-gray-50 border border-gray-100 rounded-2xl py-3 pl-12 pr-6 text-xs font-bold focus:outline-none focus:ring-4 focus:ring-red-50 focus:border-red-600 transition-all w-64"
                />
            </div>
            <button className="p-3 bg-black text-white rounded-2xl hover:bg-red-600 transition-colors shadow-lg">
                <Filter size={20} />
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT: ORDERS LIST */}
          <div className="lg:col-span-8 space-y-6">
            <SectionHeader icon={<Box size={18}/>} title="Deployment History" />
            
            <div className="space-y-4">
              {orders.map((order, idx) => (
                <OrderCard key={order.id} order={order} delay={idx} />
              ))}
            </div>
          </div>

          {/* RIGHT: ACCOUNT STATS (Tactical Summary Style) */}
          <div className="lg:col-span-4">
            <motion.div variants={fadeInUp} className="sticky top-32 space-y-6">
                <div className="bg-black rounded-[48px] p-10 text-white shadow-2xl relative overflow-hidden">
                    <div className="relative z-10 space-y-8">
                        <div className="flex items-center justify-between border-b border-white/10 pb-6">
                            <h3 className="text-xl font-black uppercase tracking-tight">Fleet Overview</h3>
                            <Activity size={20} className="text-red-600" />
                        </div>

                        <div className="space-y-6">
                            <StatRow label="Active Shipments" value="02" color="text-blue-400" />
                            <StatRow label="Completed Units" value="38" color="text-green-400" />
                            <StatRow label="Total Valuation" value="₹2,55,200" color="text-red-600" />
                        </div>

                        <div className="pt-8 border-t border-white/10">
                            <div className="bg-white/5 rounded-3xl p-6 border border-white/10">
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Next Scheduled Arrival</p>
                                <p className="text-lg font-black text-white italic">18 DEC 2025</p>
                            </div>
                        </div>
                    </div>

                    {/* Background Decoration */}
                    <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        className="absolute -bottom-20 -right-20 text-white/5"
                    >
                        <Package size={280} />
                    </motion.div>
                </div>

                <div className="p-8 bg-red-50 border border-red-100 rounded-[32px] flex items-center gap-4 group cursor-pointer hover:bg-red-100 transition-colors">
                    <div className="w-12 h-12 bg-red-600 text-white rounded-2xl flex items-center justify-center">
                        <ShieldCheck size={24} />
                    </div>
                    <div>
                        <p className="text-xs font-black uppercase tracking-tight text-red-600">Support Access</p>
                        <p className="text-[10px] text-red-800/60 font-medium">Connect with technical logistics for hardware assistance.</p>
                    </div>
                </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// HELPER COMPONENTS
function OrderCard({ order, delay }) {
  const isDelivered = order.status === "Delivered";
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: delay * 0.1 }}
      className="bg-white rounded-[32px] border border-gray-100 p-6 md:p-8 hover:shadow-2xl hover:shadow-gray-100 transition-all group relative overflow-hidden"
    >
      <div className="flex flex-col md:flex-row justify-between gap-6">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
             <span className="text-[10px] font-black bg-gray-100 px-3 py-1 rounded-full text-gray-400 uppercase tracking-widest">{order.date}</span>
             <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full ${isDelivered ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                {isDelivered ? <CheckCircle2 size={12} /> : <Clock size={12} />}
                <span className="text-[10px] font-black uppercase tracking-widest">{order.status}</span>
             </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-black text-gray-900 tracking-tighter uppercase group-hover:text-red-600 transition-colors">{order.id}</h3>
            <p className="text-sm font-bold text-gray-400 italic mt-1">{order.items}</p>
          </div>

          <div className="flex gap-8">
            <div>
              <p className="text-[9px] font-black text-gray-300 uppercase tracking-[0.2em]">Valuation</p>
              <p className="text-sm font-black text-gray-900">{order.total}</p>
            </div>
            <div>
              <p className="text-[9px] font-black text-gray-300 uppercase tracking-[0.2em]">Quantity</p>
              <p className="text-sm font-black text-gray-900">{order.count} Units</p>
            </div>
          </div>
        </div>

        <div className="flex md:flex-col justify-end gap-3">
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-black text-white px-6 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-red-600 transition-colors shadow-lg">
            <Download size={14} /> Invoice
          </button>
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 border-2 border-gray-100 px-6 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:border-black transition-colors">
            Details <ExternalLink size={14} />
          </button>
        </div>
      </div>

      {/* Subtle Progress Bar for Transit */}
      {!isDelivered && (
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-50">
            <motion.div 
                initial={{ width: "0%" }}
                animate={{ width: "65%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="h-full bg-blue-500"
            />
        </div>
      )}
    </motion.div>
  );
}

function SectionHeader({ icon, title }) {
  return (
    <div className="flex items-center gap-3 border-l-4 border-red-600 pl-4 mb-8">
      <div className="text-red-600">{icon}</div>
      <h2 className="text-xl font-black uppercase tracking-tight">{title}</h2>
    </div>
  );
}

function StatRow({ label, value, color }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{label}</span>
      <span className={`text-lg font-black ${color}`}>{value}</span>
    </div>
  );
}