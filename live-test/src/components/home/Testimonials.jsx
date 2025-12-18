import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Award, X, ChevronRight, Quote, Calendar, ShieldCheck, FileText, ExternalLink } from "lucide-react";

const data = [
  {
    id: 1,
    type: "award",
    heading: "Excellence in Engineering",
    subHeading: "Global Innovation Summit",
    year: "2024",
    description: "Recognized for pioneering sustainable hardware solutions and spare part longevity in the industrial sector. Our commitment to 100% recyclable components set a new industry benchmark.",
    image: "https://images.axminstertools.com/axminstertools/aIHgZlGsbswqTM3H_home-tile-half-einhell-powertools-info.jpg?auto=format%2Ccompress&q=75&w=543",
    organization: "Industrial Tech Council",
  },
  {
    id: 2,
    type: "certification",
    heading: "ISO 9001:2015 Certified",
    subHeading: "Quality Management Systems",
    year: "2024",
    description: "SENSE maintains the highest international standards for quality management, ensuring every mechanical part meets rigorous durability and safety requirements.",
    image: "https://marketplace.canva.com/EAFlVDzb7sA/3/0/1600w/canva-white-gold-elegant-modern-certificate-of-participation-Qn4Rei141MM.jpg",
    organization: "TÜV SÜD Standard",
  },
  {
    id: 3,
    type: "video",
    heading: "Reliable Logistics Support",
    subHeading: "Client Success Story",
    year: "2023",
    description: "Since switching to SENSE parts, our downtime decreased by 40%. Their technical support team is unrivaled in the mechanical spare parts market.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800",
    organization: "Global Steel Works",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", 
  },
];

export default function Testimonials() {
  const [filter, setFilter] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredData = filter === "all" ? data : data.filter(item => item.type === filter);

  return (
    <div className="bg-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* ================= UPDATED HEADER SECTION (SENSE THEME) ================= */}
        <div className="flex flex-col items-center text-center space-y-2 mb-16">
          <motion.span 
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.4em" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-red-600 font-black text-[10px] md:text-xs uppercase tracking-[0.4em]"
          >
            Verification & Legacy
          </motion.span>
          
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter uppercase leading-none">
            Certified <span className="text-red-600">Excellence</span>
          </h2>

          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5, ease: "circOut" }}
            className="h-1.5 bg-red-600 mt-6 rounded-full" 
          />
        </div>

        {/* CENTERED FILTER TOGGLE */}
        <div className="flex justify-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap bg-gray-100 p-1.5 rounded-2xl border border-gray-200 gap-1"
          >
            {["all", "award", "certification", "video"].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`relative px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-colors duration-300 z-10 ${
                  filter === type ? "text-white" : "text-gray-400 hover:text-gray-900"
                }`}
              >
                <span className="relative z-10">{type}s</span>
                {filter === type && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-black rounded-xl shadow-lg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </motion.div>
        </div>

        {/* ================= GRID SECTION ================= */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredData.map((item) => (
              <motion.div 
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedItem(item)}
                className="group relative bg-white border border-gray-100 rounded-[40px] p-6 hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] transition-all duration-500 cursor-pointer overflow-hidden border-b-4 hover:border-b-red-600"
              >
                {/* Media Container */}
                <div className="relative w-full aspect-[4/3] rounded-[32px] overflow-hidden bg-gray-100 mb-8">
                  <motion.img 
                    src={item.image} 
                    className="w-full h-full object-cover"
                    alt={item.heading}
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-all duration-500" />
                  
                  {/* Dynamic Icon Overlay */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl">
                    {item.type === "video" && <Play className="text-red-600 fill-red-600" size={24} />}
                    {item.type === "award" && <Award className="text-red-600" size={24} />}
                    {item.type === "certification" && <ShieldCheck className="text-red-600" size={24} />}
                  </div>
                </div>

                {/* Text Content */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                     <span className="text-red-600 font-black text-[9px] uppercase tracking-[0.2em] bg-red-50 px-3 py-1.5 rounded-lg">
                       FY-{item.year}
                     </span>
                     <p className="text-gray-300 font-black text-[9px] uppercase tracking-widest">
                       ID: #SNSE-{item.id}00
                     </p>
                  </div>
                  
                  <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tight leading-tight group-hover:text-red-600 transition-colors">
                    {item.heading}
                  </h3>

                  <p className="text-gray-500 text-sm font-medium line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="pt-2 flex items-center justify-between border-t border-gray-50 mt-4">
                     <span className="text-[10px] font-black text-gray-900 uppercase tracking-widest">
                       {item.organization}
                     </span>
                     <ChevronRight size={18} className="text-gray-200 group-hover:text-red-600 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ================= SENSE EXPANDED MODAL ================= */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[400] flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-xl"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-[48px] shadow-2xl relative flex flex-col lg:flex-row border border-white/20"
            >
              
              {/* Close Button */}
              <button 
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 p-4 bg-gray-100 hover:bg-red-600 hover:text-white rounded-2xl z-[410] transition-all active:scale-90"
              >
                <X size={24} />
              </button>

              {/* Modal Media Side */}
              <div className="lg:w-1/2 bg-gray-900 flex items-center justify-center relative min-h-[350px]">
                {selectedItem.type === "video" ? (
                  <video controls autoPlay className="w-full h-full object-contain" src={selectedItem.videoUrl} />
                ) : (
                  <motion.img 
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.8 }}
                    src={selectedItem.image} 
                    className="w-full h-full object-cover" 
                    alt="Full View" 
                  />
                )}
                {selectedItem.type === "certification" && (
                   <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md rounded-3xl border border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-3 text-white">
                          <FileText className="text-red-600" />
                          <span className="text-[10px] font-black uppercase tracking-widest">Verify Certificate Document</span>
                      </div>
                      <ExternalLink size={18} className="text-white hover:text-red-600 cursor-pointer" />
                   </div>
                )}
              </div>

              {/* Modal Content Side */}
              <div className="lg:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-white">
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mb-10"
                >
                  <div className="flex items-center gap-3 text-red-600 font-black text-xs uppercase tracking-[0.4em] mb-4">
                     <Calendar size={18} /> Issued {selectedItem.year}
                  </div>
                  <h2 className="text-4xl md:text-6xl font-black text-gray-900 uppercase tracking-tighter leading-[0.9]">
                    {selectedItem.heading}
                  </h2>
                  <p className="text-gray-400 font-black text-xs uppercase tracking-widest mt-6">
                    {selectedItem.subHeading}
                  </p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="relative p-8 bg-gray-50 rounded-[32px] border-l-8 border-red-600 mb-10"
                >
                  <Quote className="text-red-200 absolute -top-4 -left-2 rotate-180" size={48} />
                  <p className="text-gray-700 text-lg md:text-xl font-medium leading-relaxed italic">
                    {selectedItem.description}
                  </p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-5 p-6 border-2 border-gray-100 rounded-3xl"
                >
                  <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center text-white shrink-0">
                    {selectedItem.type === "award" ? <Award size={32} /> : <ShieldCheck size={32} />}
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Authenticated By</p>
                    <p className="text-xl font-black text-gray-900 uppercase tracking-tight leading-none">{selectedItem.organization}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}