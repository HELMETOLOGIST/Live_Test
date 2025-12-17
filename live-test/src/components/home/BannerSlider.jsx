import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ChevronRight } from "lucide-react";

// Assuming these imports remain the same
import bosch from "@/assets/banners/bosch1.png";
import dewalt1 from "@/assets/banners/dewalt1.jpg";
import dewalt2 from "@/assets/banners/dewalt2.jpg";
import makita from "@/assets/banners/makita1.webp";

const slides = [
  {
    img: bosch,
    heading: "Precision Unleashed",
    sub: "Professional grade tools for master craftsmen.",
    btn: "Shop Bosch",
  },
  {
    img: dewalt1,
    heading: "Toughness Redefined",
    sub: "Guaranteed tough. Built for the modern jobsite.",
    btn: "Explore DeWalt",
  },
  {
    img: dewalt2,
    heading: "Limited Time Offers",
    sub: "Exclusive discounts on heavy-duty machinery.",
    btn: "Grab Deals",
  },
  {
    img: makita,
    heading: "Cordless Innovation",
    sub: "LXT technology for world-class performance.",
    btn: "View Makita",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const slideRefs = useRef([]);
  const textRefs = useRef([]);
  const progressRefs = useRef([]);

  useEffect(() => {
    // 1. Image Background Animation (Zoom + Slight Rotation)
    gsap.fromTo(
      slideRefs.current[index],
      { scale: 1.2, opacity: 0 },
      { scale: 1, opacity: 1, duration: 2, ease: "power4.out" }
    );

    // 2. Staggered Text Animation
    const content = textRefs.current[index];
    if (content) {
      const elements = content.children;
      gsap.fromTo(
        elements,
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          stagger: 0.2, 
          ease: "back.out(1.7)",
          delay: 0.3 
        }
      );
    }

    // 3. Progress Bar Animation
    gsap.fromTo(
      progressRefs.current[index],
      { width: "0%" },
      { width: "100%", duration: 5, ease: "none" }
    );

    // Auto-slide logic
    const interval = setInterval(() => {
      setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="relative w-full h-[500px] md:h-[650px] lg:h-[750px] overflow-hidden bg-black">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 z-10 ${
            i === index ? "visible pointer-events-auto" : "invisible pointer-events-none"
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0 overflow-hidden">
            <img
              ref={(el) => (slideRefs.current[i] = el)}
              src={slide.img}
              alt="slide"
              className="w-full h-full object-cover"
            />
            {/* Darker Overlay for Text Contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
          </div>

          {/* Text Content */}
          <div
            ref={(el) => (textRefs.current[i] = el)}
            className="absolute left-6 md:left-20 top-1/2 -translate-y-1/2 max-w-2xl text-white space-y-6"
          >
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] drop-shadow-2xl">
              {slide.heading}
            </h1>

            <p className="text-lg md:text-2xl text-gray-300 font-medium max-w-lg">
              {slide.sub}
            </p>

            <div className="flex items-center gap-4">
              <button className="group flex items-center gap-2 px-10 py-4 bg-red-600 hover:bg-white hover:text-red-600 rounded-full text-white text-lg font-black uppercase tracking-widest transition-all duration-300 shadow-2xl">
                {slide.btn}
                <ChevronRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Modern Navigation Controls */}
      <div className="absolute bottom-12 left-6 md:left-20 right-6 md:right-auto z-30 flex items-center gap-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className="group flex flex-col gap-2"
          >
            {/* Numbering */}
            <span className={`text-[10px] font-black transition-colors ${index === i ? "text-white" : "text-white/30"}`}>
              0{i + 1}
            </span>
            {/* The Progress Bar Container */}
            <div className="w-16 md:w-24 h-[3px] bg-white/20 rounded-full overflow-hidden">
              <div
                ref={(el) => (progressRefs.current[i] = el)}
                className={`h-full bg-red-600 transition-opacity ${
                  index === i ? "opacity-100" : "opacity-0"
                }`}
              ></div>
            </div>
          </button>
        ))}
      </div>

      {/* Side Brand Badge */}
      <div className="absolute right-10 top-1/2 -rotate-90 origin-right translate-y-1/2 z-30 hidden lg:block">
        <span className="text-white/10 text-9xl font-black uppercase tracking-widest select-none">
          SENSE BRAND
        </span>
      </div>
    </div>
  );
}