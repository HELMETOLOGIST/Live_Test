import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search, ShoppingCart, ChevronDown, ChevronRight, Phone, MessageSquare, User, Settings, LogOut, LogIn } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Support from "../home/Support";
import senseLogo from "../../assets/logo/logo.png";

export default function VestelNavbar() {
  const [openSupport, setOpenSupport] = useState(false);
  const [openMega, setOpenMega] = useState(null);
  const [activeItem, setActiveItem] = useState("Mobiles");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState(null);
  const [openProfile, setOpenProfile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSubNavOpen, setIsSubNavOpen] = useState(false);
  const navigate = useNavigate();

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
        setIsSubNavOpen(false); 
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const alreadyShown = localStorage.getItem("supportShown");
    if (!alreadyShown) {
      setOpenSupport(true);
      localStorage.setItem("supportShown", "true");
    }
  }, []);

  const categories = {
    Powertools: [
      { name: "Driller", img: "https://jpttools.com/cdn/shop/files/1_54bf1e6e-f985-4798-8920-c63deba2dfeb.jpg?v=1724305880" },
      { name: "Cutter", img: "https://www.endicopowertools.com/storage/app/public/uploads/ngwOqbcBsLMc1c8hL3HDe9RRg4NwmpFTAVWGPS7b.jpg" },
    ],
    Vaccum_Cleaner: [
      { name: "Floor Cleaner", img: "https://5.imimg.com/data5/SELLER/Default/2024/1/378810641/TM/DR/UZ/2917635/floor-cleaning-machine.jpg" },
    ],
  };

  const brands = {
    Makita: [{ name: "Wood Cutter", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmr_YdcvaMQiRUgAXK5zS0pmIjAVgbjG3ZZA&s" }],
    CAT: [{ name: "Excavator", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ73G6kzsBQZsFQS0o2_bTdmXvQxZqIcIwfQ&s" }],
  };

  return (
    <>
      <header 
        className={`sticky top-0 w-full z-[100] transition-all duration-500 ease-in-out ${
          scrolled 
            ? "bg-white/90 backdrop-blur-lg shadow-xl border-b border-gray-100" 
            : "bg-white"
        }`}
      >
        {/* ================= TOP BAR ================= */}
        <div 
          className={`max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between transition-all duration-500 ${
            scrolled ? "h-16 md:h-20" : "h-16 md:h-24"
          }`}
        >
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="xl:hidden group p-2 -ml-2 flex flex-col gap-1.5 items-start justify-center relative z-[110]"
            >
              <span className="w-6 h-[2px] bg-black rounded-full transition-all group-hover:w-4"></span>
              <span className="w-4 h-[2px] bg-red-600 rounded-full"></span>
              <span className="w-6 h-[2px] bg-black rounded-full transition-all group-hover:w-4"></span>
            </button>
            
            {/* ================= UPDATED LOGO AREA ================= */}
            <div className="relative group cursor-pointer" onClick={() => navigate("/")}>
              <div className="w-[120px] md:w-[160px] overflow-hidden transition-all duration-500">
                <img 
                  src={senseLogo} 
                  alt="SENSE Industrial Logo" 
                  className="w-full h-auto object-contain  brightness-110 contrast-125 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500"
                />
              </div>

              {/* Technical Detail Underlay */}
              <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-red-600 group-hover:w-full transition-all duration-500" />
              
              {/* Technical ID text */}
              <span className="absolute -right-4 top-0 text-[8px] font-black text-red-600 opacity-0 group-hover:opacity-100 transition-opacity">
                R-01
              </span>
            </div>
            {/* Logo end */}
          </div>

          <nav className="hidden xl:flex items-center space-x-12 text-[15px] font-bold uppercase tracking-widest text-gray-800">
            <NavItem label="Home" />
            <NavItem label="Shop" />
            <NavItem label="Sustainability" />
            <NavItem label="About Us" />
          </nav>

          <div className="flex items-center gap-4">
            {scrolled && (
               <button 
                onClick={() => setIsSubNavOpen(!isSubNavOpen)}
                className="hidden xl:flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-red-600 transition-all group"
               >
                 Explore
                 <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isSubNavOpen ? "rotate-180 text-red-600" : ""}`} />
               </button>
            )}

            <button
              onClick={() => setOpenSupport(true)}
              className="hidden sm:flex items-center gap-2 border-2 border-gray-100 px-5 py-2.5 rounded-full text-[13px] font-bold uppercase tracking-wider hover:border-red-600 hover:text-red-600 transition-all duration-300"
            >
              Support
            </button>
            
            <div className="flex items-center gap-3 md:gap-6 ml-2">
              <div className="relative" onMouseEnter={() => setOpenProfile(true)} onMouseLeave={() => setOpenProfile(false)}>
                <button className={`p-2 rounded-full transition-all duration-300 ${openProfile ? "bg-black text-white" : "hover:bg-gray-100 text-gray-800"}`}>
                  <User className="w-6 h-6 transition-colors" />
                </button>
                <AnimatePresence>
                  {openProfile && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute right-0 top-full pt-2 w-56 z-[120]"
                    >
                      <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden py-2 px-1">
                        <ProfileItem icon={<LogIn size={16}/>} label="Sign In" />
                        <ProfileItem icon={<Settings size={16}/>} label="Manage Account" />
                        <hr className="my-2 border-gray-50" />
                        <ProfileItem icon={<LogOut size={16}/>} label="Sign Out" color="text-red-600 hover:bg-red-50" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="relative cursor-pointer group p-2 hover:bg-gray-100 rounded-full transition-colors">
                <ShoppingCart className="w-6 h-6 text-gray-800 group-hover:text-red-600 transition-colors" />
                <span className="absolute top-1 right-1 bg-red-600 text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">0</span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= SUB NAVBAR ================= */}
        <motion.div 
          initial={false}
          animate={{ 
            height: (!scrolled || isSubNavOpen) ? "auto" : 0,
            opacity: (!scrolled || isSubNavOpen) ? 1 : 0
          }}
          className="hidden xl:block w-full bg-white border-y border-gray-100 overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-10">
            <div className="flex items-center gap-10">
              <button
                onMouseEnter={() => { setOpenMega("category"); setActiveItem(Object.keys(categories)[0]); }}
                className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-gray-500 hover:text-red-600 transition"
              >
                Categories <ChevronDown size={14} className={openMega === "category" ? "rotate-180" : ""} />
              </button>
              <button
                onMouseEnter={() => { setOpenMega("brand"); setActiveItem(Object.keys(brands)[0]); }}
                className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-gray-500 hover:text-red-600 transition"
              >
                Brands <ChevronDown size={14} className={openMega === "brand" ? "rotate-180" : ""} />
              </button>
            </div>

            <div className="flex-1 max-w-lg relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-red-600 transition-colors" />
              <input 
                type="text" 
                placeholder="Search products..." 
                className="w-full bg-gray-50 border-2 border-transparent py-3 pl-11 pr-4 rounded-xl text-xs font-bold uppercase tracking-widest outline-none transition-all duration-300 focus:bg-white focus:border-red-600 shadow-sm"
              />
            </div>

            <div className="text-[11px] font-black text-red-600 bg-red-50 px-4 py-2 rounded-lg tracking-[0.2em] uppercase">
              Free Shipping on ₹100+
            </div>
          </div>
        </motion.div>

        {/* ================= MEGA MENU ================= */}
        <AnimatePresence>
          {openMega && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onMouseLeave={() => setOpenMega(null)}
              className="hidden xl:block absolute w-full bg-white shadow-2xl border-t z-40 overflow-hidden"
            >
              <div className="max-w-7xl mx-auto grid grid-cols-12 min-h-[380px]">
                {/* Sidebar */}
                <div className="col-span-3 border-r border-gray-100 p-6 bg-black flex flex-col gap-2">
                  {Object.keys(openMega === "category" ? categories : brands).map((key, idx) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      onMouseEnter={() => setActiveItem(key)}
                      className={`p-4 rounded-xl cursor-pointer font-black text-xs uppercase tracking-widest transition-all duration-300 ${
                        activeItem === key ? "bg-red-600 text-white translate-x-3 shadow-lg" : "text-gray-400 hover:text-white"
                      }`}
                    >
                      {key}
                    </motion.div>
                  ))}
                </div>
                {/* Content Grid */}
                <div className="col-span-9 p-10">
                  <motion.div 
                    key={activeItem}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-3 gap-10"
                  >
                    {(openMega === "category" ? categories[activeItem] : brands[activeItem])?.map((item) => (
                      <div key={item.name} className="group cursor-pointer">
                        <div className="overflow-hidden rounded-3xl bg-gray-100 aspect-[4/3] relative border border-transparent group-hover:border-red-100 group-hover:shadow-xl transition-all duration-500">
                          <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-500" />
                        </div>
                        <p className="mt-5 font-black text-gray-900 group-hover:text-red-600 transition uppercase text-[10px] tracking-[0.2em]">{item.name}</p>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ================= MOBILE SIDEBAR ================= */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[200]"
            >
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
              <motion.div 
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="absolute top-0 left-0 w-[85%] max-w-xs h-full bg-white shadow-2xl overflow-y-auto"
              >
                <div className="p-8 flex flex-col h-full">
                  <div className="flex justify-between items-center mb-6">
                    {/* Updated SENSE Mobile Logo */}
                    <img src={senseLogo} alt="SENSE" className="h-8 w-auto object-contain" />
                    <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors"><X size={24}/></button>
                  </div>

                  <div className="relative mb-8">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input type="text" placeholder="Search..." className="w-full bg-gray-100 py-3 pl-10 pr-4 rounded-xl text-sm" />
                  </div>

                  <div className="space-y-6 flex-1">
                    <a href="#" className="block text-2xl font-black text-gray-900">Home</a>
                    <a href="#" className="block text-2xl font-black text-gray-900">Shop</a>
                    
                    <div className="pt-4 border-t border-gray-100">
                      <button onClick={() => setMobileSection(mobileSection === 'cat' ? null : 'cat')} className="w-full flex justify-between items-center py-2 text-sm font-bold uppercase tracking-widest text-gray-500">
                        Categories <ChevronRight size={18} className={`transition-transform duration-300 ${mobileSection === 'cat' ? 'rotate-90 text-red-600' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {mobileSection === 'cat' && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="pl-2 mt-4 space-y-4 overflow-hidden"
                          >
                            {Object.keys(categories).map(cat => <a key={cat} href="#" className="block text-lg font-bold text-gray-800 hover:text-red-600 transition-colors">{cat}</a>)}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                      <button onClick={() => setMobileSection(mobileSection === 'brand' ? null : 'brand')} className="w-full flex justify-between items-center py-2 text-sm font-bold uppercase tracking-widest text-gray-500">
                        Brands <ChevronRight size={18} className={`transition-transform duration-300 ${mobileSection === 'brand' ? 'rotate-90 text-red-600' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {mobileSection === 'brand' && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="pl-2 mt-4 space-y-4 overflow-hidden"
                          >
                            {Object.keys(brands).map(brand => <a key={brand} href="#" className="block text-lg font-bold text-gray-800 hover:text-red-600 transition-colors">{brand}</a>)}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <a href="#" className="block text-2xl font-black text-gray-900">Sustainability</a>
                    <a href="#" className="block text-2xl font-black text-gray-900">About Us</a>
                  </div>

                  <div className="mt-10 pt-8 border-t border-gray-100 flex gap-4">
                    <button className="flex-1 py-4 bg-gray-900 text-white rounded-2xl flex flex-col items-center gap-1">
                      <Phone size={18} />
                      <span className="text-[10px] font-bold uppercase tracking-wider">Call</span>
                    </button>
                    <button onClick={() => { setIsMobileMenuOpen(false); setOpenSupport(true); }} className="flex-1 py-4 bg-red-600 text-white rounded-2xl flex flex-col items-center gap-1">
                      <MessageSquare size={18} />
                      <span className="text-[10px] font-bold uppercase tracking-wider">Help</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ================= SUPPORT MODAL ================= */}
      <AnimatePresence>
        {openSupport && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[210] flex items-center justify-center bg-black/70 backdrop-blur-md px-4 p-4" 
            onClick={() => setOpenSupport(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()} 
              className="bg-white w-full max-w-2xl max-h-[90vh] overflow-hidden rounded-[40px] shadow-2xl flex flex-col"
            >
              <div className="p-8 border-b flex justify-between items-center bg-white">
                <h2 className="text-3xl font-black text-gray-900 tracking-tight uppercase">Support</h2>
                <button onClick={() => setOpenSupport(false)} className="p-3 bg-gray-100 hover:bg-red-50 hover:text-red-600 rounded-full transition-all"><X size={20} /></button>
              </div>
              <div className="overflow-y-auto p-8 flex-1"><Support /></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavItem({ label }) {
  return (
    <a href="#" className="relative group py-2">
      <span className="group-hover:text-red-600 transition-colors duration-300 tracking-widest">{label}</span>
      <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-red-600 transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>
    </a>
  );
}

function ProfileItem({ icon, label, color = "text-gray-900 hover:bg-gray-100" }) {
  return (
    <a href="#" className={`flex items-center gap-3 px-4 py-3.5 text-[11px] font-black uppercase tracking-widest rounded-xl transition-all duration-300 ${color}`}>
      {icon}
      {label}
    </a>
  );
}