import React from "react";
import { motion } from "framer-motion";

const letters = ["S", "E", "N", "S", "E"];

export default function SENSELoader() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { duration: 0.8, ease: "easeInOut" }
      }}
      /* Set to solid black background */
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden font-sans perspective-[1000px]"
    >
      
      {/* 1. SUBTLE AMBIENT GRADIENT (Deep Red Glow) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(220,38,38,0.08)_0%,_transparent_70%)] pointer-events-none" />

      {/* RADIATING KINETIC PULSE */}
      <motion.div 
        animate={{ 
          scale: [1, 1.4, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[500px] h-[500px] rounded-full border border-red-600/30 pointer-events-none"
      />

      <div className="relative flex flex-col items-center">

        {/* 2. THE 3D ROUNDING LETTERS */}
        <div className="relative flex gap-2 md:gap-6 px-10 py-12">
          
          {/* HORIZONTAL LASER SWEEP */}
          <motion.div 
            animate={{ 
              top: ["-10%", "110%", "-10%"],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 right-0 h-[1px] bg-red-600/60 shadow-[0_0_20px_#dc2626] z-30"
          />

          {letters.map((char, index) => (
            <div key={index} className="relative perspective-[500px]">
              {/* Mechanical Back-plate */}
              <div className="absolute inset-0 bg-white/5 rounded-lg blur-[2px]" />

              {/* Kinetic Rounding Letter */}
              <motion.span
                initial={{ opacity: 0, rotateX: -90, y: 20 }}
                animate={{
                  opacity: [0, 1, 1, 0.7],
                  rotateX: [-90, 0, 0, 0],
                  y: [20, 0, 0, 0],
                  color: ["#ffffff", "#ffffff", "#dc2626", "#ffffff"],
                  textShadow: [
                    "0 0 0px rgba(220,38,38,0)",
                    "0 0 25px rgba(220,38,38,0.6)",
                    "0 0 12px rgba(220,38,38,0.8)",
                    "0 0 0px rgba(220,38,38,0)"
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.15,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className="relative block text-6xl md:text-9xl font-black tracking-tighter text-white select-none z-20"
              >
                {char}
              </motion.span>

              {/* Vertical Calibration Beam */}
              <motion.div 
                animate={{ scaleY: [0, 1, 0], opacity: [0, 0.6, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
                className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-red-500/40"
              />
            </div>
          ))}
        </div>

        {/* 3. ROUNDING STATUS INTERFACE */}
        <div className="mt-8 flex flex-col items-center w-64 md:w-80">
          
          <div className="w-full flex justify-between items-end mb-2 px-1">
             <div className="flex flex-col">
                <span className="text-[8px] font-mono text-zinc-500 tracking-[0.3em] uppercase">Security_Protocol</span>
                <span className="text-xs font-black text-white">SENSE_OS.v14</span>
             </div>
             <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
               className="w-4 h-4 border-2 border-dashed border-red-600 rounded-full"
             />
          </div>

          {/* DUAL LAYER PROGRESS RAIL */}
          <div className="w-full h-[2px] bg-white/10 rounded-full relative overflow-hidden">
            <motion.div 
              animate={{ left: ["-100%", "100%"] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-red-600 to-transparent"
            />
          </div>

          {/* TELEMETRY FEED */}
          <div className="mt-4 w-full grid grid-cols-2 gap-4">
             <div className="border-l border-white/10 pl-2">
                <p className="text-[7px] font-mono text-zinc-500">ROTATION_AXIS</p>
                <motion.p 
                  animate={{ opacity: [1, 0.5, 1] }}
                  className="text-[9px] font-mono text-red-500 font-bold"
                >
                  360_NORM
                </motion.p>
             </div>
             <div className="border-l border-white/10 pl-2">
                <p className="text-[7px] font-mono text-zinc-500">SYSTEM_SYNC</p>
                <p className="text-[9px] font-mono text-white font-bold tracking-tighter uppercase">
                  Active_Link
                </p>
             </div>
          </div>
        </div>

      </div>

      {/* 4. INDUSTRIAL CORNER MOUNTS */}
      {['top-10 left-10', 'top-10 right-10', 'bottom-10 left-10', 'bottom-10 right-10'].map((pos, i) => (
        <div key={i} className={`absolute ${pos} flex gap-1`}>
          <div className="w-1.5 h-1.5 bg-red-600/60 rounded-full shadow-[0_0_8px_#dc2626]" />
          <div className="w-4 h-[1px] bg-white/20 mt-[3.5px]" />
        </div>
      ))}

    </motion.div>
  );
}