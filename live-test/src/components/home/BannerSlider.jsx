import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const slides = [
  {
    img: "http://localhost:8000/media/banner/bosch1.png", // NO import needed
    heading: "Discover New Arrivals",
    sub: "Fresh trends curated just for you.",
    btn: "Shop Now",
  },
  {
    img: "http://localhost:8000/media/banner/dewalt1.jpg",
    heading: "Discover New Arrivals",
    sub: "Fresh trends curated just for you.",
    btn: "Shop Now",
  },
  {
    img: "http://localhost:8000/media/banner/dewalt2.jpg",
    heading: "Limited Time Offers",
    sub: "Don’t miss out on exclusive deals.",
    btn: "Grab Now",
  },
  {
    img: "http://localhost:8000/media/banner/makita1.webp",
    heading: "Comfort Meets Style",
    sub: "Feel good, look great, every day.",
    btn: "View Products",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const slideRefs = useRef([]);
  const textRefs = useRef([]);

  useEffect(() => {
    // Fade in + zoom image
    gsap.fromTo(
      slideRefs.current[index],
      { opacity: 0, scale: 1.1 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power3.out",
      }
    );

    // Animate text
    gsap.fromTo(
      textRefs.current[index],
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.3,
        ease: "power3.out",
        delay: 0.2,
      }
    );

    // Auto-slide
    const interval = setInterval(() => {
      setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="relative w-full h-[420px] md:h-[520px] lg:h-[580px] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          ref={(el) => (slideRefs.current[i] = el)}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === index ? "opacity-100 z-20" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <img
            src={slide.img}
            alt="slide"
            className="w-full h-full object-cover object-center"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-black/60 to-black/10"></div>

          {/* Text Content */}
          {i === index && (
            <div
              ref={(el) => (textRefs.current[i] = el)}
              className="absolute left-8 top-1/2 -translate-y-1/2 max-w-xl text-white space-y-4"
            >
              <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
                {slide.heading}
              </h1>

              <p className="text-lg md:text-xl text-gray-200 drop-shadow-md">
                {slide.sub}
              </p>

              <button className="mt-4 px-8 py-3 bg-pink-600 hover:bg-pink-500 rounded-full text-white text-lg font-semibold shadow-lg transition">
                {slide.btn}
              </button>
            </div>
          )}
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              index === i ? "bg-white" : "bg-white/40"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
