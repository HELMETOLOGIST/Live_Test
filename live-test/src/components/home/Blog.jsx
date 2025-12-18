import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, Plus, Send, Image as ImageIcon, Type, Layout, Info, User } from "lucide-react";

const initialPosts = [
  {
    id: 1,
    category: "Innovation",
    title: "The Future of Sustainable Steel in Mechanical Parts",
    excerpt: "Exploring how 100% recyclable alloys are changing the durability standards of modern industrial fasteners.",
    author: "Dr. Aris V.",
    date: "Dec 12, 2025",
    readTime: "6 min",
    version: "LOG-A2",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200",
    content: "Full technical analysis of sustainable steel integration in industrial sectors. We explore the molecular durability of 100% recyclable alloys..."
  },
  {
    id: 2,
    category: "Logistics",
    title: "AI-Driven Supply Chain Management for Spare Parts",
    excerpt: "How predictive modeling is reducing downtime by ensuring part availability before failure.",
    author: "Sarah Chen",
    date: "Nov 28, 2025",
    readTime: "4 min",
    version: "LOG-B5",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800",
    content: "Predictive maintenance is the backbone of modern logistics. By utilizing AI-driven supply chains, we ensure components are ready before the machine stops..."
  }
];

export default function SenseBlog() {
  const [posts, setPosts] = useState(initialPosts);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const [newPost, setNewPost] = useState({
    title: "",
    category: "Innovation",
    excerpt: "",
    content: "",
    version: "LOG-NEW",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800"
  });

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedPost || isEditorOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedPost, isEditorOpen]);

  const categories = ["All", "Innovation", "Logistics", "Hardware", "Materials"];
  const filteredPosts = activeCategory === "All" ? posts : posts.filter(p => p.category === activeCategory);

  const handlePublish = (e) => {
    e.preventDefault();
    const postToAdd = {
      ...newPost,
      id: posts.length + 1,
      author: "Admin User",
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      readTime: "5 min"
    };
    setPosts([postToAdd, ...posts]);
    setIsEditorOpen(false);
    setNewPost({ title: "", category: "Innovation", excerpt: "", content: "", version: "LOG-NEW", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800" });
  };

  return (
    <div className="bg-white min-h-screen py-12 md:py-24 px-4 md:px-6 relative overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* ================= HEADER ================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <span className="text-red-600 font-black text-xs uppercase tracking-[0.4em]">Knowledge Base</span>
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter uppercase leading-none">
              Technical <br /> <span className="text-gray-200">Insights.</span>
            </h2>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
            <button 
              onClick={() => setIsEditorOpen(true)}
              className="w-full md:w-auto flex items-center justify-center gap-2 bg-black text-white px-8 py-5 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-red-600 transition-all shadow-xl active:scale-95"
            >
              <Plus size={18} /> Create Log
            </button>
          </motion.div>
        </div>

        {/* Category Filter */}
        <div className="overflow-x-auto no-scrollbar mb-12">
          <motion.div 
            layout
            className="flex flex-nowrap md:flex-wrap gap-2 bg-gray-50 p-2 rounded-[24px] border border-gray-100 inline-flex relative"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-6 py-3 rounded-[18px] text-[10px] font-black uppercase tracking-widest transition-colors duration-300 z-10 ${
                  activeCategory === cat ? "text-black" : "text-gray-400 hover:text-gray-900"
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white shadow-md border border-gray-100 rounded-[18px] -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </motion.div>
        </div>

        {/* ================= BLOG GRID ================= */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post) => (
              <motion.div 
                key={post.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedPost(post)}
                className="group flex flex-col bg-white border border-gray-100 rounded-[40px] p-6 hover:shadow-2xl transition-all duration-500 cursor-pointer h-full"
              >
                <div className="relative aspect-video rounded-[30px] overflow-hidden mb-6 bg-gray-100">
                  <img src={post.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={post.title} />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest">{post.version}</div>
                </div>
                <h4 className="text-2xl font-black text-gray-900 uppercase tracking-tight mb-4 group-hover:text-red-600 transition-colors leading-tight">{post.title}</h4>
                <p className="text-gray-500 text-sm font-medium line-clamp-3 mb-6 flex-1">{post.excerpt}</p>
                <div className="flex items-center justify-between pt-6 border-t border-gray-50 mt-auto">
                  <span className="text-[10px] font-black text-gray-900 uppercase tracking-widest">{post.author}</span>
                  <ChevronRight className="text-gray-200 group-hover:text-red-600 transform group-hover:translate-x-1 transition-all" size={20} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ================= POST WRITER MODAL (EDITOR) ================= */}
      <AnimatePresence>
        {isEditorOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[700] flex items-center justify-center bg-black/95 backdrop-blur-2xl p-0 md:p-8"
          >
            <motion.div 
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 50, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white w-full h-full md:max-w-7xl md:rounded-[48px] overflow-hidden flex flex-col md:flex-row shadow-2xl"
            >
              
              {/* Editor Sidebar - Original Style */}
              <motion.div 
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="w-full md:w-80 bg-gray-50 p-8 border-r border-gray-100 flex flex-col"
              >
                <div className="flex justify-between items-center mb-10">
                  <h3 className="text-xl font-black uppercase tracking-tighter">New Log</h3>
                  <button onClick={() => setIsEditorOpen(false)} className="md:hidden"><X /></button>
                </div>
                
                <div className="space-y-6 flex-1">
                  <div>
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 block">Category</label>
                    <select 
                      value={newPost.category}
                      onChange={(e) => setNewPost({...newPost, category: e.target.value})}
                      className="w-full bg-white border-2 border-gray-200 p-4 rounded-2xl font-bold uppercase text-xs focus:border-red-600 outline-none transition-all cursor-pointer"
                    >
                      {categories.filter(c => c !== "All").map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 block">Version Tag</label>
                    <input 
                      type="text" placeholder="LOG-X01" 
                      value={newPost.version}
                      onChange={(e) => setNewPost({...newPost, version: e.target.value})}
                      className="w-full bg-white border-2 border-gray-200 p-4 rounded-2xl font-bold uppercase text-xs focus:border-red-600 outline-none transition-all" 
                    />
                  </div>
                  <div className="p-6 bg-red-50 rounded-3xl border border-red-100">
                    <p className="text-[9px] font-black text-red-600 uppercase tracking-[0.2em] mb-2">Publishing Status</p>
                    <p className="text-xs font-medium text-red-800">Draft mode active. Content will be live upon verification.</p>
                  </div>
                </div>
                
                <button onClick={() => setIsEditorOpen(false)} className="hidden md:flex items-center gap-2 text-gray-400 hover:text-black font-black uppercase text-[10px] tracking-widest mt-6 transition-all">
                  <X size={16}/> Discard Changes
                </button>
              </motion.div>

              {/* Writing Area - Original Style */}
              <div className="flex-1 p-8 md:p-16 overflow-y-auto">
                <form onSubmit={handlePublish} className="space-y-8 max-w-4xl mx-auto">
                  <motion.input 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    type="text" placeholder="ENTER LOG TITLE..." 
                    required
                    value={newPost.title}
                    onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                    className="w-full text-4xl md:text-6xl font-black uppercase tracking-tighter outline-none placeholder:text-gray-100 focus:placeholder:text-gray-200"
                  />
                  
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                    <textarea 
                      placeholder="Technical summary (excerpt)..." 
                      required
                      value={newPost.excerpt}
                      onChange={(e) => setNewPost({...newPost, excerpt: e.target.value})}
                      className="w-full text-xl font-medium text-gray-500 outline-none border-l-4 border-gray-100 pl-6 h-24 resize-none"
                    />
                  </motion.div>

                  <div className="flex gap-4 border-y border-gray-50 py-4">
                     <button type="button" className="p-2 hover:bg-gray-100 rounded-lg text-gray-400 transition-colors"><ImageIcon size={20}/></button>
                     <button type="button" className="p-2 hover:bg-gray-100 rounded-lg text-gray-400 transition-colors"><Type size={20}/></button>
                     <button type="button" className="p-2 hover:bg-gray-100 rounded-lg text-gray-400 transition-colors"><Layout size={20}/></button>
                  </div>

                  <textarea 
                    placeholder="Begin technical report..." 
                    required
                    value={newPost.content}
                    onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                    className="w-full min-h-[400px] text-lg text-gray-700 leading-relaxed outline-none"
                  />

                  <div className="sticky bottom-0 bg-white pt-6 flex justify-end">
                     <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type="submit"
                      className="flex items-center gap-3 bg-red-600 text-white px-10 py-5 rounded-[24px] font-black uppercase tracking-[0.2em] shadow-2xl hover:bg-black transition-all"
                     >
                        Submit Log <Send size={18} />
                     </motion.button>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= VIEW POST MODAL - Original Style ================= */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[600] flex items-center justify-center p-0 md:p-8 bg-black/95 backdrop-blur-3xl"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              className="bg-white w-full h-full md:max-w-5xl md:h-auto md:max-h-[90vh] overflow-y-auto md:rounded-[48px] relative flex flex-col"
            >
              <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md px-8 py-6 flex justify-between items-center border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <span className="text-red-600 font-black text-xs uppercase tracking-widest">{selectedPost.version}</span>
                    <span className="text-gray-300 text-xs">/</span>
                    <span className="text-gray-500 font-black text-[10px] uppercase tracking-widest">{selectedPost.date}</span>
                  </div>
                  <button onClick={() => setSelectedPost(null)} className="p-3 bg-black text-white rounded-xl hover:bg-red-600 transition-all active:scale-90"><X size={18}/></button>
              </div>
              <div className="px-8 md:px-20 py-12">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-6xl font-black text-gray-900 uppercase tracking-tighter leading-none mb-10"
                >
                  {selectedPost.title}
                </motion.h2>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="rounded-[40px] overflow-hidden mb-12 shadow-2xl"
                >
                  <img src={selectedPost.image} className="w-full h-auto object-cover max-h-[500px]" alt="" />
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="prose prose-xl max-w-none text-gray-600 leading-relaxed font-medium"
                >
                  {selectedPost.content}
                </motion.div>
                
                <div className="mt-16 pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center">
                      <User className="text-gray-400" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Authenticated Author</p>
                      <p className="text-xl font-black text-gray-900 uppercase tracking-tight">{selectedPost.author}</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-8 py-6 rounded-3xl border border-gray-100 flex items-center gap-4">
                    <Info className="text-red-600" />
                    <span className="text-xs font-bold text-gray-500">This log is part of the SENSE internal knowledge standard.</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}