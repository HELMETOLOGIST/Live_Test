import React from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, Globe, Zap, Users, Factory, 
  Target, Cpu, Award, ArrowRight, Layers, 
  Compass, Hexagon, HardHat
} from "lucide-react";

// Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.2 } }
};

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-20 px-6 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* ================= HERO SECTION ================= */}
        <section className="relative mb-32">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div 
              className="lg:w-1/2 space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-full text-[10px] font-black uppercase tracking-[0.3em]">
                <Zap size={14} className="animate-pulse" /> Defining the Standard
              </div>
              <h1 className="text-7xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
                Engineering <br />
                <motion.span 
                  className="text-red-600"
                  initial={{ width: 0 }}
                  animate={{ width: "auto" }}
                  transition={{ delay: 0.5, duration: 1 }}
                >
                  The Future
                </motion.span>
              </h1>
              <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-xl">
                SENSE is not just a parts provider. We are a precision ecosystem 
                dedicated to the seamless integration of high-performance mechanical 
                systems and smart industrial technology.
              </p>
            </motion.div>

            <motion.div 
              className="lg:w-1/2 relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="aspect-square bg-gray-100 rounded-[60px] overflow-hidden relative group">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800" 
                  alt="Engineering" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-10 left-10 text-white">
                  <motion.p 
                    className="text-5xl font-black"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    25+
                  </motion.p>
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-80">Years of Precision</p>
                </div>
              </div>
              <motion.div 
                className="absolute -top-10 -right-10 w-40 h-40 border-[20px] border-red-600/10 rounded-full"
                animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </section>

        {/* ================= CORE PHILOSOPHY ================= */}
        <motion.section 
          className="mb-40"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PhilosophyCard 
              icon={<ShieldCheck size={32} />} 
              title="Absolute Integrity" 
              desc="Every component in our vault undergoes 48-point stress testing to ensure zero-fail performance."
            />
            <PhilosophyCard 
              icon={<Cpu size={32} />} 
              title="Smart Logistics" 
              desc="Our proprietary SENSE-AI tracking system ensures 99.9% on-time delivery across global industrial hubs."
            />
            <PhilosophyCard 
              icon={<Users size={32} />} 
              title="Expert Support" 
              desc="24/7 access to tier-1 mechanical engineers for fitment guidance and technical troubleshooting."
            />
          </div>
        </motion.section>

        {/* ================= THE SENSE TIMELINE ================= */}
        <section className="mb-40 py-24 bg-gray-900 rounded-[60px] text-white px-12 relative overflow-hidden">
          <div className="relative z-10">
            <motion.h2 
              className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-16"
              {...fadeInUp}
            >
              Our <span className="text-red-600">Evolution</span>
            </motion.h2>
            <div className="space-y-12">
              <TimelineItem year="1998" title="Foundation" desc="Established as a specialized braking components laboratory in Bangalore." index={0} />
              <TimelineItem year="2010" title="Global Expansion" desc="Opened distribution hubs in Germany and Singapore to serve the European market." index={1} />
              <TimelineItem year="2024" title="Digital Integration" desc="Launched the SENSE Cloud inventory system for real-time industrial procurement." index={2} />
            </div>
          </div>
          <motion.div
            initial={{ rotate: 0, opacity: 0.05 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-20 -right-20 text-white"
          >
            <Layers size={400} />
          </motion.div>
        </section>

        {/* ================= STATS GRID ================= */}
        <section className="mb-40">
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <StatBox number="500K+" label="Parts Shipped" />
            <StatBox number="12" label="Global Hubs" />
            <StatBox number="150+" label="OEM Partners" />
            <StatBox number="0.01%" label="Return Rate" />
          </motion.div>
        </section>

        {/* ================= GLOBAL REACH ================= */}
        <section className="flex flex-col lg:flex-row gap-16 items-center mb-20">
          <motion.div 
            className="lg:w-1/2"
            {...fadeInUp}
          >
            <h2 className="text-5xl font-black uppercase tracking-tighter mb-8 leading-none">
              Connecting <br /> Global <span className="text-red-600">Industries</span>
            </h2>
            <p className="text-gray-500 font-medium mb-8">
              Our logistics network bridges the gap between high-end manufacturing and 
              on-site requirements. SENSE is the silent force behind the movement.
            </p>
            <div className="space-y-4">
              <CheckItem text="ISO 9001:2015 Certified Manufacturing" />
              <CheckItem text="Environmentally Sustainable Packaging" />
              <CheckItem text="Real-time Blockchain Traceability" />
            </div>
          </motion.div>

          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
             <motion.div className="space-y-4" initial={{ y: 20 }} whileInView={{ y: 0 }} transition={{ duration: 0.8 }}>
                <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=400" className="rounded-3xl grayscale hover:grayscale-0 transition-all duration-500 shadow-xl" alt="Factory" />
                <motion.div 
                  className="h-32 bg-red-600 rounded-3xl flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                >
                   <Globe className="text-white animate-spin-slow" size={48} />
                </motion.div>
             </motion.div>
             <motion.div className="pt-12 space-y-4" initial={{ y: -20 }} whileInView={{ y: 0 }} transition={{ duration: 0.8 }}>
                <div className="h-32 bg-gray-100 rounded-3xl" />
                <img src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=400" className="rounded-3xl grayscale hover:grayscale-0 transition-all duration-500 shadow-xl" alt="Mechanical" />
             </motion.div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <motion.section 
          className="bg-red-600 rounded-[48px] p-12 text-center text-white relative overflow-hidden group shadow-2xl"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="relative z-10">
            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
              Join the Engineering Revolution
            </h3>
            <motion.button 
              className="bg-white text-black px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest transition-all flex items-center gap-4 mx-auto"
              whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
              whileTap={{ scale: 0.95 }}
            >
              Partner With Us <ArrowRight size={18} />
            </motion.button>
          </div>
          <motion.div 
            className="absolute -top-10 -left-10 opacity-10"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Hexagon size={200} />
          </motion.div>
        </motion.section>

      </div>
    </div>
  );
}

// UI COMPONENTS
function PhilosophyCard({ icon, title, desc }) {
  return (
    <motion.div 
      variants={fadeInUp}
      className="p-10 bg-white border border-gray-100 rounded-[40px] hover:border-red-600 transition-all group shadow-sm hover:shadow-xl"
      whileHover={{ y: -10 }}
    >
      <div className="text-red-600 mb-6 transform group-hover:scale-110 transition-transform duration-500">
        {icon}
      </div>
      <h3 className="text-xl font-black uppercase tracking-tight mb-4">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed font-medium">{desc}</p>
    </motion.div>
  );
}

function TimelineItem({ year, title, desc, index }) {
  return (
    <motion.div 
      className="flex flex-col md:flex-row gap-6 md:gap-20 border-l-2 border-red-600 pl-8 relative"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <motion.div 
        className="absolute -left-[9px] top-0 w-4 h-4 bg-red-600 rounded-full"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: index * 0.3, type: "spring" }}
      />
      <span className="text-3xl font-black text-red-600">{year}</span>
      <div>
        <h4 className="text-xl font-black uppercase tracking-tight mb-2">{title}</h4>
        <p className="text-gray-400 text-sm max-w-xl">{desc}</p>
      </div>
    </motion.div>
  );
}

function StatBox({ number, label }) {
  return (
    <motion.div 
      variants={fadeInUp}
      className="text-center p-8 border-b-2 border-gray-100 md:border-b-0 md:border-r-2 last:border-0"
    >
      <motion.h4 
        className="text-5xl font-black text-gray-900 mb-2"
        initial={{ scale: 0.5 }}
        whileInView={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        {number}
      </motion.h4>
      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{label}</p>
    </motion.div>
  );
}

function CheckItem({ text }) {
  return (
    <motion.div 
      className="flex items-center gap-4 group"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      whileHover={{ x: 10 }}
    >
      <div className="w-6 h-6 rounded-lg bg-red-50 text-red-600 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-all">
        <Target size={14} />
      </div>
      <span className="text-sm font-black uppercase tracking-tight text-gray-700">{text}</span>
    </motion.div>
  );
}