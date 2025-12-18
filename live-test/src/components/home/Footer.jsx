import React from "react";
import { motion } from "framer-motion";
import { 
  Send, Instagram, Linkedin, Twitter, Youtube, 
  Globe, ShieldCheck, ArrowUpRight, Phone, Fingerprint
} from "lucide-react";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const watermarkVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 0.03,
    x: 0,
    transition: { duration: 2, ease: "easeOut" },
  },
};

export default function SenseFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      className="relative bg-black text-white pt-32 pb-12 overflow-hidden"
    >
      {/* GIANT BACKGROUND WATERMARK */}
      <motion.div 
        variants={watermarkVariants}
        className="absolute -bottom-10 -right-10 text-[25vw] font-black text-white leading-none pointer-events-none select-none uppercase tracking-tighter italic"
      >
        Sense
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          
          {/* ================= COLUMN 1: BRAND & NEWSLETTER ================= */}
          <motion.div variants={itemVariants} className="lg:col-span-5 space-y-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center">
                <Fingerprint size={24} className="text-white" />
              </div>
              <div className="text-white font-black text-4xl tracking-tighter uppercase italic">
                Sense<span className="text-red-600">.</span>
              </div>
            </div>
            
            <p className="text-gray-400 text-lg font-medium leading-relaxed max-w-md">
              Engineering the next generation of industrial excellence. From precision hardware to global logistics, we set the standard.
            </p>
            
            <div className="space-y-4">
              <label className="text-[10px] font-black uppercase tracking-[0.4em] text-red-600">
                System Updates
              </label>
              <div className="relative max-w-sm group">
                <input 
                  type="email" 
                  placeholder="ENTER EMAIL ADDRESS" 
                  className="w-full bg-white/5 border border-white/10 py-5 pl-6 pr-16 rounded-[24px] outline-none focus:border-red-600 focus:bg-white/10 transition-all font-bold text-xs uppercase tracking-widest placeholder:text-gray-600"
                />
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-red-600 text-white p-3 rounded-2xl transition-all shadow-lg shadow-red-600/20"
                >
                  <Send size={18} />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* ================= COLUMN 2: INVENTORY ================= */}
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-8">
            <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-gray-500">Inventory</h4>
            <ul className="space-y-4">
              <FooterLink label="Mechanical Parts" />
              <FooterLink label="Hardware Tools" />
              <FooterLink label="Custom Alloys" />
              <FooterLink label="Safety Gear" />
              <FooterLink label="Bulk Orders" />
            </ul>
          </motion.div>

          {/* ================= COLUMN 3: COMPANY ================= */}
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-8">
            <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-gray-500">Company</h4>
            <ul className="space-y-4">
              <FooterLink label="Our Legacy" />
              <FooterLink label="Sustainability" />
              <FooterLink label="Technical Blog" />
              <FooterLink label="Careers" />
              <FooterLink label="Contact" />
            </ul>
          </motion.div>

          {/* ================= COLUMN 4: SUPPORT ================= */}
          <motion.div variants={itemVariants} className="lg:col-span-3 space-y-8">
            <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-gray-500">Headquarters</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center shrink-0 border border-white/10">
                  <Globe size={20} className="text-red-600" />
                </div>
                <p className="text-gray-400 text-sm font-medium leading-relaxed">
                  1200 Industrial Way, Nadakkavu<br />Kozhikode, Kerala 673006
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center shrink-0 border border-white/10">
                  <Phone size={20} className="text-red-600" />
                </div>
                <p className="text-gray-400 text-sm font-bold tracking-widest">+91 828 523 4356</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ================= BOTTOM BAR ================= */}
        <motion.div 
          variants={itemVariants}
          className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8"
        >
          {/* System Status Indicator */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.6)]" />
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-400">System Operational</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={14} className="text-gray-500" />
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-400">AES-256 Encrypted</span>
            </div>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            <SocialIcon icon={<Linkedin size={18}/>} />
            <SocialIcon icon={<Instagram size={18}/>} />
            <SocialIcon icon={<Twitter size={18}/>} />
            <SocialIcon icon={<Youtube size={18}/>} />
          </div>

          {/* Copyright */}
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-600">
            © {currentYear} SENSE INDUSTRIAL.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}

// Sub-components with internal motion
function FooterLink({ label }) {
  return (
    <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
      <a 
        href="#" 
        className="group flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors duration-300"
      >
        <span className="w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-3" />
        {label}
        <ArrowUpRight size={12} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300 text-red-600" />
      </a>
    </motion.li>
  );
}

function SocialIcon({ icon }) {
  return (
    <motion.a 
      href="#" 
      whileHover={{ y: -5, backgroundColor: "rgba(220, 38, 38, 1)", borderColor: "rgba(220, 38, 38, 1)", color: "#fff" }}
      whileTap={{ scale: 0.9 }}
      className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-gray-400 transition-all duration-300"
    >
      {React.cloneElement(icon, { size: 20 })}
    </motion.a>
  );
}