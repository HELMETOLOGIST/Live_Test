import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, MapPin, CreditCard, HardDrive, 
  LogOut, ChevronRight, Edit3, 
  ShieldCheck, Bell, Plus, Activity,
  Lock, Smartphone, Globe, ArrowRight
} from "lucide-react";

// Animation Variants matching Vesto Theme
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  }
};

export default function OperatorDashboard() {
  const [activeTab, setActiveTab] = useState("profile");

  const sidebarItems = [
    { id: "profile", label: "Profile Details", icon: <User size={18} /> },
    { id: "addresses", label: "Saved Addresses", icon: <MapPin size={18} /> },
    { id: "payments", label: "Saved Payments", icon: <CreditCard size={18} /> },
    { id: "security", label: "Security HUD", icon: <ShieldCheck size={18} /> },
  ];

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      className="bg-white min-h-screen pt-32 pb-24 px-6 font-sans"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER AREA */}
        <motion.div variants={fadeInUp} className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 border-b border-gray-100 pb-8">
          <div className="space-y-2">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-black flex items-center justify-center text-white rounded-xl">
                <HardDrive size={20} />
              </div>
              <h1 className="text-4xl font-black uppercase italic tracking-tighter text-gray-900">
                Operator <span className="text-red-600">Portal</span>
              </h1>
            </div>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">Registry ID: SENSE-9920-X</p>
          </div>
          
          <button className="flex items-center gap-2 bg-black text-white px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-red-600 transition-all shadow-xl shadow-gray-200">
            <LogOut size={14} /> Terminate Session
          </button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* SIDEBAR NAVIGATION */}
          <motion.div variants={fadeInUp} className="lg:col-span-4 space-y-3">
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4 px-2">Navigation Units</p>
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center justify-between p-5 rounded-[24px] transition-all group ${
                  activeTab === item.id 
                  ? "bg-black text-white shadow-2xl shadow-gray-300 translate-x-2" 
                  : "bg-gray-50 text-gray-500 hover:bg-gray-100"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`${activeTab === item.id ? 'text-red-600' : 'text-gray-400'}`}>
                    {item.icon}
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider">{item.label}</span>
                </div>
                <ChevronRight size={16} className={`${activeTab === item.id ? "opacity-100" : "opacity-0 group-hover:opacity-100"} transition-all`} />
              </button>
            ))}

            {/* QUICK STATS CARD IN SIDEBAR */}
            <div className="mt-8 p-8 bg-red-50 rounded-[32px] border border-red-100">
                <div className="flex items-center gap-2 mb-4">
                    <Activity size={16} className="text-red-600" />
                    <span className="text-[10px] font-black text-red-600 uppercase tracking-widest">System Health</span>
                </div>
                <p className="text-xs font-bold text-red-800/60 leading-relaxed">All encrypted nodes are currently synchronized with the Vesto Grid.</p>
            </div>
          </motion.div>

          {/* MAIN CONTENT AREA */}
          <motion.div 
            variants={fadeInUp}
            className="lg:col-span-8 bg-gray-50 rounded-[48px] border border-gray-100 p-8 md:p-12 shadow-inner relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {/* TAB CONTENT: PROFILE */}
              {activeTab === "profile" && (
                <motion.div 
                  key="profile"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="space-y-10"
                >
                  <div className="flex justify-between items-start border-b border-gray-200 pb-8">
                    <SectionHeader icon={<User size={18}/>} title="Biometric Data" />
                    <button className="w-12 h-12 bg-white rounded-2xl border border-gray-200 flex items-center justify-center hover:border-red-600 hover:text-red-600 transition-all shadow-sm">
                      <Edit3 size={18} />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <DataField label="Full Operator Name" value="Alex R. Sterling" />
                    <DataField label="Comm Link (Email)" value="a.sterling@vesto.io" />
                    <DataField label="Security Clearance" value="Level 04 - Senior" />
                    <DataField label="Deployment Enlisted" value="12 JAN 2024" />
                  </div>
                </motion.div>
              )}

              {/* TAB CONTENT: ADDRESSES */}
              {activeTab === "addresses" && (
                <motion.div 
                   key="addresses"
                   initial={{ opacity: 0, x: 10 }}
                   animate={{ opacity: 1, x: 0 }}
                   className="space-y-8"
                >
                  <div className="flex justify-between items-start border-b border-gray-200 pb-8">
                    <SectionHeader icon={<MapPin size={18}/>} title="Deployment Zones" />
                    <button className="flex items-center gap-2 bg-black text-white px-5 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-red-600 transition-all">
                      <Plus size={14} /> New Zone
                    </button>
                  </div>

                  <div className="space-y-4">
                    <AddressCard label="Primary Hub" address="122 Industrial Sector, Southern District, MH 40001" isDefault />
                    <AddressCard label="Testing Lab B" address="Warehouse 09, Northern Deployment Grid, KA 56001" />
                  </div>
                </motion.div>
              )}

              {/* TAB CONTENT: PAYMENTS */}
              {activeTab === "payments" && (
                <motion.div 
                   key="payments"
                   initial={{ opacity: 0, x: 10 }}
                   animate={{ opacity: 1, x: 0 }}
                   className="space-y-8"
                >
                  <div className="flex justify-between items-start border-b border-gray-200 pb-8">
                    <SectionHeader icon={<CreditCard size={18}/>} title="Authorization Assets" />
                    <button className="flex items-center gap-2 bg-black text-white px-5 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-red-600 transition-all">
                      <Plus size={14} /> Add Method
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <PaymentCard brand="Visa" last4="8812" expiry="12/27" />
                    <PaymentCard brand="Mastercard" last4="4002" expiry="08/26" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* BOTTOM LOGO DECORATION */}
            <div className="absolute -bottom-10 -right-10 text-gray-200/20 opacity-10">
                <Globe size={200} />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

// VESTO THEME HELPER COMPONENTS
function SectionHeader({ icon, title }) {
  return (
    <div className="flex items-center gap-3 border-l-4 border-red-600 pl-4">
      <div className="text-red-600">{icon}</div>
      <h2 className="text-xl font-black uppercase tracking-tight">{title}</h2>
    </div>
  );
}

function DataField({ label, value }) {
  return (
    <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm group hover:border-red-100 transition-all">
      <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">{label}</p>
      <p className="text-sm font-black uppercase text-black italic">{value}</p>
    </div>
  );
}

function AddressCard({ label, address, isDefault }) {
  return (
    <div className="bg-white p-6 rounded-[24px] border border-gray-100 flex justify-between items-center group hover:shadow-xl hover:shadow-gray-200 transition-all">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <span className="text-[10px] font-black uppercase tracking-wider">{label}</span>
          {isDefault && <span className="bg-green-100 text-green-600 text-[8px] px-3 py-1 rounded-full uppercase font-black tracking-widest">Active Hub</span>}
        </div>
        <p className="text-xs text-gray-500 font-bold italic">{address}</p>
      </div>
      <button className="w-10 h-10 rounded-xl bg-gray-50 text-gray-400 hover:bg-black hover:text-white transition-all flex items-center justify-center">
        <Edit3 size={14} />
      </button>
    </div>
  );
}

function PaymentCard({ brand, last4, expiry }) {
  return (
    <div className="bg-black text-white p-8 rounded-[32px] relative overflow-hidden group hover:scale-[1.02] transition-transform">
      <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-3xl -translate-x-8 -translate-y-8" />
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-10">
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/10">
                <CreditCard size={24} className="text-red-600" />
            </div>
            <span className="text-[9px] font-black tracking-widest text-gray-500 uppercase">Expires {expiry}</span>
        </div>
        <p className="text-xl font-black tracking-[0.2em] mb-1">•••• {last4}</p>
        <p className="text-[9px] font-black uppercase text-red-600 tracking-widest">{brand} SECURE NODE</p>
      </div>
    </div>
  );
}