import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, Smartphone, CreditCard, Landmark, 
  Truck, CheckCircle2, AlertCircle, Loader2, Lock, 
  ChevronLeft, ArrowRight, QrCode 
} from "lucide-react";

// Animation Constants
const pageTransition = {
  initial: { opacity: 0, scale: 0.98 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 1.02 }
};

export default function PaymentPage() {
  const [method, setMethod] = useState("upi");
  const [status, setStatus] = useState("idle"); // idle | processing | success | error

  const handlePayment = () => {
    setStatus("processing");
    // Simulate Gateway Response
    setTimeout(() => {
      setStatus(Math.random() > 0.1 ? "success" : "error");
    }, 2500);
  };

  return (
    <motion.div 
      initial="initial"
      animate="animate"
      variants={pageTransition}
      className="bg-white min-h-screen pt-32 pb-24 px-6 font-sans overflow-hidden"
    >
      <div className="max-w-4xl mx-auto">
        
        {/* HEADER */}
        <div className="mb-12 flex items-center justify-between border-b border-gray-100 pb-8">
          <div className="space-y-1">
            <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-black transition-colors">
              <ChevronLeft size={14} /> Cancellation Protocol
            </button>
            <h1 className="text-5xl font-black text-gray-900 uppercase tracking-tighter">
              Secure <span className="text-red-600">Gateway</span>
            </h1>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Amount Due</p>
            <p className="text-3xl font-black text-black tracking-tighter">₹9,263.00</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* PAYMENT METHOD SELECTOR */}
          <div className="md:col-span-4 space-y-3">
            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">Selection Protocol</label>
            <PaymentMethodBtn 
              active={method === "upi"} 
              icon={<Smartphone size={18}/>} 
              label="UPI Transfer" 
              onClick={() => setMethod("upi")} 
            />
            <PaymentMethodBtn 
              active={method === "card"} 
              icon={<CreditCard size={18}/>} 
              label="Credit/Debit" 
              onClick={() => setMethod("card")} 
            />
            <PaymentMethodBtn 
              active={method === "net"} 
              icon={<Landmark size={18}/>} 
              label="Net Banking" 
              onClick={() => setMethod("net")} 
            />
            <PaymentMethodBtn 
              active={method === "cod"} 
              icon={<Truck size={18}/>} 
              label="Logistics COD" 
              onClick={() => setMethod("cod")} 
            />
          </div>

          {/* DYNAMIC INPUT TERMINAL */}
          <div className="md:col-span-8">
            <div className="bg-gray-50 rounded-[40px] border border-gray-100 p-8 md:p-12 relative min-h-[400px] flex flex-col">
              <AnimatePresence mode="wait">
                {status === "idle" && (
                  <motion.div
                    key={method}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex-1"
                  >
                    {method === "upi" && <UPITerminal />}
                    {method === "card" && <CardTerminal />}
                    {method === "net" && <BankTerminal />}
                    {method === "cod" && <CODTerminal />}

                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handlePayment}
                      className="w-full mt-10 bg-black text-white py-6 rounded-3xl font-black uppercase text-[12px] tracking-[0.2em] flex items-center justify-center gap-3 shadow-xl hover:bg-red-600 transition-colors"
                    >
                      Authorize Transaction <Lock size={16} />
                    </motion.button>
                  </motion.div>
                )}

                {status === "processing" && <ProcessingState />}
                {status === "success" && <ResultState type="success" onRetry={() => setStatus("idle")} />}
                {status === "error" && <ResultState type="error" onRetry={() => setStatus("idle")} />}
              </AnimatePresence>
            </div>
            
            <div className="mt-8 flex items-center justify-center gap-6 opacity-30 grayscale">
               <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="Paypal" className="h-4" />
               <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
               <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// --- TERMINAL COMPONENTS ---

function UPITerminal() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 border-b border-gray-200 pb-6">
        <div className="w-16 h-16 bg-white rounded-2xl border border-gray-200 flex items-center justify-center">
          <QrCode size={32} className="text-gray-400" />
        </div>
        <div>
          <h3 className="font-black uppercase tracking-tight">Scan QR Code</h3>
          <p className="text-[10px] text-gray-500 font-bold uppercase">Universal UPI Interoperability</p>
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Virtual Payment Address</label>
        <input className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 text-sm font-bold focus:border-red-600 outline-none transition-all" placeholder="user@bank" />
      </div>
    </div>
  );
}

function CardTerminal() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="col-span-2 space-y-2">
        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Cardholder Designation</label>
        <input className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 text-sm font-bold outline-none" placeholder="FULL NAME" />
      </div>
      <div className="col-span-2 space-y-2">
        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Master Identification Number</label>
        <input className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 text-sm font-bold outline-none" placeholder="0000 0000 0000 0000" />
      </div>
      <input className="bg-white border border-gray-200 rounded-2xl px-6 py-4 text-sm font-bold outline-none" placeholder="MM/YY" />
      <input className="bg-white border border-gray-200 rounded-2xl px-6 py-4 text-sm font-bold outline-none" placeholder="CVC" />
    </div>
  );
}

function BankTerminal() {
  return (
    <div className="space-y-4">
      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Select Certified Institution</label>
      <div className="grid grid-cols-2 gap-3">
        {['HDFC Bank', 'ICICI Bank', 'SBI', 'Axis Bank'].map(bank => (
          <button key={bank} className="p-4 bg-white border border-gray-200 rounded-2xl text-xs font-black uppercase hover:border-red-600 transition-all">
            {bank}
          </button>
        ))}
      </div>
    </div>
  );
}

function CODTerminal() {
  return (
    <div className="p-8 border-2 border-dashed border-gray-200 rounded-[32px] text-center space-y-4">
      <Truck size={40} className="mx-auto text-gray-300" />
      <h3 className="text-sm font-black uppercase">Pay on Deployment</h3>
      <p className="text-[10px] text-gray-400 uppercase leading-relaxed font-bold">
        A logistics surcharge of ₹50 applies. <br/> ensure availability at destination coordinates.
      </p>
    </div>
  );
}

// --- FEEDBACK STATES ---

function ProcessingState() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50 rounded-[40px] z-20"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="mb-6 text-red-600"
      >
        <Loader2 size={48} />
      </motion.div>
      <h3 className="text-xl font-black uppercase tracking-widest">Verifying Protocol</h3>
      <p className="text-[10px] text-gray-400 font-bold uppercase mt-2">Connecting to Secure Vault...</p>
    </motion.div>
  );
}

function ResultState({ type, onRetry }) {
  const isSuccess = type === "success";
  return (
    <motion.div 
      initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
      className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center bg-white rounded-[40px] z-30"
    >
      <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 ${isSuccess ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
        {isSuccess ? <CheckCircle2 size={40} /> : <AlertCircle size={40} />}
      </div>
      <h3 className="text-3xl font-black uppercase tracking-tighter mb-2">
        {isSuccess ? "Authorization Confirmed" : "Terminal Error"}
      </h3>
      <p className="text-gray-500 text-sm font-medium mb-8">
        {isSuccess ? "Hardware deployment sequence initiated. Check manifest for tracking." : "Transaction rejected by institution. Please check credentials."}
      </p>
      <button 
        onClick={onRetry}
        className={`px-10 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest transition-all ${isSuccess ? 'bg-black text-white hover:bg-gray-800' : 'bg-red-600 text-white hover:bg-red-700'}`}
      >
        {isSuccess ? "Return to Dashboard" : "Retry Protocol"}
      </button>
    </motion.div>
  );
}

// --- UI HELPERS ---

function PaymentMethodBtn({ active, icon, label, onClick }) {
  return (
    <motion.button
      whileHover={{ x: 5 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`w-full p-5 rounded-2xl border-2 flex items-center gap-4 transition-all relative overflow-hidden ${active ? 'border-red-600 bg-black text-white' : 'border-gray-100 text-gray-400 hover:border-gray-200 bg-white'}`}
    >
      <div className={active ? 'text-red-600' : 'text-gray-300'}>{icon}</div>
      <span className="text-[11px] font-black uppercase tracking-widest">{label}</span>
      {active && (
        <motion.div 
          layoutId="activeGlow"
          className="absolute right-0 top-0 bottom-0 w-1 bg-red-600"
        />
      )}
    </motion.button>
  );
}