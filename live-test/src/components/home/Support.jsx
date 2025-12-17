import React from "react";
import { Send, ShieldCheck, Mail, User, ChevronDown } from "lucide-react";

export default function Support() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center px-6 py-16 md:py-24">
      
      {/* ================= SENSE BRANDING ================= */}
      <div className="flex flex-col items-center text-center mb-12 space-y-2">
        <span className="text-red-600 font-black text-xs uppercase tracking-[0.4em]">
          Support Center
        </span>
        <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter uppercase">
          SENSE
        </h1>
        <div className="w-20 h-1.5 bg-red-600 mt-4 rounded-full" />
      </div>

      {/* ================= MAIN FORM BOX ================= */}
      <div className="w-full max-w-3xl bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-[32px] p-8 md:p-12 border border-gray-100">
        
        <div className="mb-10 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase tracking-tight">
            How can we <span className="text-red-600">help?</span>
          </h2>
          <p className="text-gray-400 font-medium text-sm mt-2 uppercase tracking-widest">
            Expert assistance for industrial solutions.
          </p>
        </div>

        {/* FORM */}
        <form className="w-full space-y-6" onSubmit={(e) => e.preventDefault()}>
          
          {/* Full Name */}
          <div className="relative group">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-red-600 transition-colors" size={20} />
            <input
              type="text"
              placeholder="NAME - SURNAME"
              className="w-full h-16 bg-gray-50 border-2 border-transparent px-12 rounded-2xl font-black text-xs tracking-widest uppercase focus:outline-none focus:border-red-600 focus:bg-white transition-all placeholder:text-gray-400"
            />
          </div>

          {/* EMAIL + SUBJECT GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Email */}
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-red-600 transition-colors" size={20} />
              <input
                type="email"
                placeholder="E-MAIL ADDRESS"
                className="w-full h-16 bg-gray-50 border-2 border-transparent px-12 rounded-2xl font-black text-xs tracking-widest uppercase focus:outline-none focus:border-red-600 focus:bg-white transition-all placeholder:text-gray-400"
              />
            </div>

            {/* Subject Dropdown */}
            <div className="relative group">
              <select
                className="w-full h-16 bg-gray-50 border-2 border-transparent px-5 rounded-2xl font-black text-xs tracking-widest uppercase appearance-none focus:outline-none focus:border-red-600 focus:bg-white transition-all text-gray-900 cursor-pointer"
              >
                <option value="" disabled selected>SELECT SUBJECT</option>
                <option>Support & Spare Parts</option>
                <option>Sales Inquiry</option>
                <option>Technical Issue</option>
                <option>Bulk Ordering</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none group-focus-within:text-red-600" size={20} />
            </div>
          </div>

          {/* MESSAGE */}
          <div className="relative">
            <textarea
              rows="5"
              placeholder="DESCRIBE YOUR REQUEST..."
              className="w-full bg-gray-50 border-2 border-transparent px-5 py-4 rounded-2xl font-black text-xs tracking-widest uppercase focus:outline-none focus:border-red-600 focus:bg-white transition-all placeholder:text-gray-400 resize-none"
            ></textarea>
          </div>

          {/* PRIVACY POLICY */}
          <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl border border-gray-100">
            <input 
              type="checkbox" 
              className="w-5 h-5 accent-red-600 cursor-pointer rounded-md border-none" 
              id="privacy"
            />
            <label htmlFor="privacy" className="text-[10px] md:text-xs font-black text-gray-500 uppercase tracking-widest cursor-pointer select-none">
              I accept the <a href="#" className="text-red-600 hover:underline">Privacy Policy</a> and data processing terms.
            </label>
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="group w-full bg-black hover:bg-red-600 text-white py-5 px-8 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 transform active:scale-95 shadow-xl shadow-gray-200"
          >
            <span className="text-xs font-black uppercase tracking-[0.3em]">Send Request</span>
            <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>

        </form>

        {/* Footer Trust Badge */}
        <div className="mt-10 pt-8 border-t border-gray-100 flex items-center justify-center gap-2">
            <ShieldCheck className="text-green-500" size={18} />
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
              Secured industrial-grade encryption
            </span>
        </div>
      </div>

      {/* Decorative Brand Text */}
      <div className="mt-12 hidden md:block">
         <p className="text-[100px] font-black text-gray-50 select-none pointer-events-none uppercase">
           SENSE PARTS
         </p>
      </div>
    </div>
  );
}