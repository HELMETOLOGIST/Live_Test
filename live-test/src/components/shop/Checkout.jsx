import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronLeft, ShieldCheck, Truck, CreditCard, 
  MapPin, Zap, Lock, Smartphone, Globe, CheckCircle2 
} from "lucide-react";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

export default function CheckoutPage() {
  const [step, setStep] = useState(1); // 1: Shipping, 2: Payment
  const [sameAsShipping, setSameAsShipping] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState("card");

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="bg-white min-h-screen pt-32 pb-24 px-6 font-sans"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* TOP NAVIGATION & PROGRESS */}
        <motion.div variants={fadeInUp} className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-100 pb-8">
          <div className="space-y-2">
            <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-red-600 transition-colors">
              <ChevronLeft size={14} /> Back to Manifest
            </button>
            <h1 className="text-6xl font-black text-gray-900 uppercase tracking-tighter leading-none">
              Deployment <span className="text-red-600">Clearance</span>
            </h1>
          </div>

          {/* Stepper UI */}
          <div className="flex items-center gap-4">
            <StepIndicator number="01" label="Logistics" active={step === 1} completed={step > 1} />
            <div className="w-8 h-[2px] bg-gray-100" />
            <StepIndicator number="02" label="Authorization" active={step === 2} completed={false} />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* LEFT: FORMS */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {step === 1 ? (
                <motion.div 
                  key="shipping"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-10"
                >
                  <section className="space-y-6">
                    <SectionHeader icon={<MapPin size={18}/>} title="Shipping Destination" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input label="First Name" placeholder="Alex" />
                      <Input label="Last Name" placeholder="Vesto" />
                      <div className="md:col-span-2">
                        <Input label="Street Address" placeholder="123 Engineering Way, Tech Park" />
                      </div>
                      <Input label="City" placeholder="Bangalore" />
                      <Input label="Postal Code" placeholder="560001" />
                    </div>
                  </section>

                  <section className="space-y-6">
                    <div className="flex items-center justify-between">
                      <SectionHeader icon={<Globe size={18}/>} title="Billing Protocol" />
                      <button 
                        onClick={() => setSameAsShipping(!sameAsShipping)}
                        className="flex items-center gap-2 group"
                      >
                        <div className={`w-10 h-5 rounded-full transition-colors relative ${sameAsShipping ? 'bg-red-600' : 'bg-gray-200'}`}>
                           <motion.div 
                             animate={{ x: sameAsShipping ? 20 : 2 }}
                             className="absolute top-1 w-3 h-3 bg-white rounded-full shadow-sm"
                           />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-black">Same as shipping</span>
                      </button>
                    </div>

                    <AnimatePresence>
                      {!sameAsShipping && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                            <Input label="Billing Name" placeholder="Corporate HQ" />
                            <Input label="Tax ID (Optional)" placeholder="GST-990011" />
                            <div className="md:col-span-2">
                              <Input label="Billing Address" placeholder="Main Street, Finance Tower" />
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </section>

                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setStep(2)}
                    className="w-full bg-black text-white py-6 rounded-3xl font-black uppercase text-[12px] tracking-[0.2em] flex items-center justify-center gap-3 shadow-xl"
                  >
                    Proceed to Authorization <ArrowRight size={18} />
                  </motion.button>
                </motion.div>
              ) : (
                <motion.div 
                  key="payment"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-10"
                >
                  <section className="space-y-6">
                    <SectionHeader icon={<CreditCard size={18}/>} title="Payment Gateway Selection" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <PaymentCard 
                        id="card" 
                        active={paymentMethod === "card"} 
                        onClick={setPaymentMethod}
                        icon={<CreditCard size={24}/>}
                        label="Secure Card"
                      />
                      <PaymentCard 
                        id="upi" 
                        active={paymentMethod === "upi"} 
                        onClick={setPaymentMethod}
                        icon={<Smartphone size={24}/>}
                        label="Instant UPI"
                      />
                      <PaymentCard 
                        id="wire" 
                        active={paymentMethod === "wire"} 
                        onClick={setPaymentMethod}
                        icon={<Lock size={24}/>}
                        label="Bank Wire"
                      />
                    </div>
                  </section>

                  <section className="bg-gray-50 p-8 rounded-[40px] border border-gray-100 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="md:col-span-2">
                        <Input label="Card Number" placeholder="0000 0000 0000 0000" />
                      </div>
                      <Input label="Expiry Date" placeholder="MM / YY" />
                      <Input label="CVC Code" placeholder="***" />
                    </div>
                  </section>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button 
                      onClick={() => setStep(1)}
                      className="flex-1 border-2 border-gray-100 py-6 rounded-3xl font-black uppercase text-[12px] tracking-widest hover:bg-gray-50 transition-colors"
                    >
                      Back to Logistics
                    </button>
                    <motion.button 
                      whileHover={{ scale: 1.02, backgroundColor: "#dc2626" }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-[2] bg-red-600 text-white py-6 rounded-3xl font-black uppercase text-[12px] tracking-[0.2em] flex items-center justify-center gap-3 shadow-2xl"
                    >
                      Confirm Deployment <Zap size={18} fill="currentColor" />
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* RIGHT: TACTICAL SUMMARY */}
          <div className="lg:col-span-5">
            <motion.div variants={fadeInUp} className="sticky top-32 space-y-6">
              <div className="bg-black rounded-[48px] p-10 text-white shadow-2xl relative overflow-hidden">
                <div className="relative z-10 space-y-8">
                  <div className="flex items-center justify-between border-b border-white/10 pb-6">
                     <h3 className="text-2xl font-black uppercase tracking-tight">Order Manifest</h3>
                     <span className="bg-red-600 text-[10px] px-3 py-1 rounded-full font-black">2 ITEMS</span>
                  </div>

                  {/* MINI ITEM LIST */}
                  <div className="space-y-6">
                    <MiniItem name="Brake Disc G6" price="4,250" />
                    <MiniItem name="Ceramic Pads (Set)" price="3,600" />
                  </div>

                  <div className="space-y-4 pt-8 border-t border-white/10">
                    <SummaryRow label="Subtotal" value="₹7,850" />
                    <SummaryRow label="Logistic Surcharge" value="FREE" />
                    <SummaryRow label="Technical GST" value="₹1,413" />
                    
                    <div className="pt-6 border-t border-white/20 flex justify-between items-end">
                      <div>
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Total Valuation</p>
                        <p className="text-4xl font-black text-red-600 tracking-tighter">₹9,263</p>
                      </div>
                      <ShieldCheck size={40} className="text-white/10" />
                    </div>
                  </div>
                </div>
                
                {/* Visual Gear Decoration */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-20 -left-20 text-white/5"
                >
                  <Truck size={300} />
                </motion.div>
              </div>

              <div className="p-8 bg-gray-50 border border-gray-100 rounded-[32px] flex items-center gap-4">
                 <div className="w-12 h-12 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center">
                    <CheckCircle2 size={24} />
                 </div>
                 <div>
                    <p className="text-xs font-black uppercase tracking-tight">Vesto Protection</p>
                    <p className="text-[10px] text-gray-500 font-medium">Your hardware is covered by our 24-month precision warranty upon deployment.</p>
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
function StepIndicator({ number, label, active, completed }) {
  return (
    <div className={`flex items-center gap-3 transition-opacity ${active ? 'opacity-100' : 'opacity-40'}`}>
      <span className={`text-sm font-black p-2 rounded-lg ${active ? 'bg-black text-white' : 'bg-gray-100 text-gray-400'}`}>
        {completed ? <CheckCircle2 size={16} className="text-green-500" /> : number}
      </span>
      <span className="text-[10px] font-black uppercase tracking-widest">{label}</span>
    </div>
  );
}

function SectionHeader({ icon, title }) {
  return (
    <div className="flex items-center gap-3 border-l-4 border-red-600 pl-4">
      <div className="text-red-600">{icon}</div>
      <h2 className="text-xl font-black uppercase tracking-tight">{title}</h2>
    </div>
  );
}

function Input({ label, placeholder }) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">{label}</label>
      <input 
        type="text"
        className="w-full bg-white border border-gray-100 rounded-2xl px-5 py-4 text-sm font-medium focus:outline-none focus:border-red-600 focus:ring-4 focus:ring-red-50 transition-all placeholder:text-gray-300"
        placeholder={placeholder}
      />
    </div>
  );
}

function PaymentCard({ id, active, icon, label, onClick }) {
  return (
    <motion.button
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onClick(id)}
      className={`relative p-6 rounded-3xl border-2 flex flex-col items-center gap-4 transition-all ${active ? 'border-red-600 bg-red-50 text-red-600' : 'border-gray-100 text-gray-400 hover:border-gray-200'}`}
    >
      {icon}
      <span className="text-[10px] font-black uppercase tracking-widest">{label}</span>
      {active && (
        <motion.div layoutId="payCheck" className="absolute top-2 right-2 text-red-600">
          <CheckCircle2 size={16} />
        </motion.div>
      )}
    </motion.button>
  );
}

function MiniItem({ name, price }) {
  return (
    <div className="flex justify-between items-center group">
      <div className="flex items-center gap-4">
        <div className="w-2 h-2 bg-red-600 rounded-full" />
        <span className="text-sm font-bold uppercase tracking-tight text-gray-200 group-hover:text-white transition-colors">{name}</span>
      </div>
      <span className="text-sm font-black">₹{price}</span>
    </div>
  );
}

function SummaryRow({ label, value }) {
  return (
    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
      <span className="text-gray-400">{label}</span>
      <span className="text-white">{value}</span>
    </div>
  );
}

function ArrowRight({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}