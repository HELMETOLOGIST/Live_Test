import React from "react";

const brands = [
{
    link: "/collections/bosch",
    img: "https://i.pinimg.com/1200x/7c/f6/d2/7cf6d264070388ddb957f7372ac0d0ae.jpg",
  },
  {
    link: "/collections/makita",
    img: "https://i.pinimg.com/1200x/6e/c3/d4/6ec3d46ee39b76421dbabe16d0b09a98.jpg",
  },
  {
    link: "/collections/dewalt",
    img: "https://i.pinimg.com/736x/0c/7b/38/0c7b38984ee31af1c3f118377fd82c43.jpg",
  },
  {
    link: "/collections/stanley",
    img: "https://i.pinimg.com/1200x/6f/d9/ce/6fd9ce38b2328acff8501fcc7ede6e4c.jpg",
  },
  {
    link: "/collections/black-decker",
    img: "https://i.pinimg.com/736x/22/d5/8c/22d58cd5c38c0c62001a1b948360184f.jpg",
  },
  {
    link: "/collections/hilti",
    img: "https://i.pinimg.com/736x/e0/f5/92/e0f5923c2021151f8405d3d8a5765bd6.jpg",
  },
  {
    link: "/collections/ingco",
    img: "https://i.pinimg.com/1200x/c9/75/7b/c9757bf56870b75b0e90ec00f5b3981c.jpg",
  },
  {
    link: "/collections/taparia",
    img: "https://i.pinimg.com/1200x/53/99/12/53991212abaf15fddda89183da033ab7.jpg",
  },
  {
    link: "/collections/siemens",
    img: "https://i.pinimg.com/736x/65/d8/83/65d883ffe8313f7ffa336e5234c90444.jpg",
  },
];

export default function BrandSlider() {
  return (
    <div className="w-full py-10 bg-white">

      {/* Title */}
      <h2 className="text-center text-3xl font-bold text-gray-900 mb-8 tracking-tight">
        Our Brands
      </h2>

      {/* Desktop - Grid Layout */}
      <div className="hidden md:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto px-4">
        {brands.map((b, idx) => (
          <a
            key={idx}
            href={b.link}
            className="bg-white border border-black rounded-lg h-24 flex items-center justify-center p-4 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <img
              src={b.img}
              alt="brand"
              className="h-full w-auto object-contain"
            />
          </a>
        ))}
      </div>

      {/* Mobile - Auto Scroll Slider */}
      <div className="md:hidden overflow-hidden mt-4">
        <div className="flex gap-4 animate-scroll whitespace-nowrap px-4">
          {brands.concat(brands).map((b, idx) => (
            <a
              key={idx}
              href={b.link}
              className="bg-white border border-black rounded-md h-16 w-32 flex items-center justify-center p-2 shadow-sm hover:shadow-lg transition"
            >
              <img
                src={b.img}
                alt="brand"
                className="h-full object-contain"
              />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll Animation */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 18s linear infinite;
        }
      `}</style>
    </div>
  );
}
