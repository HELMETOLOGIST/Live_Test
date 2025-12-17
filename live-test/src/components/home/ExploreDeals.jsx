import React from "react";
import ProductCard from "./ProductCard";

export default function Home() {
  const products = [
    {
      image: "https://images.unsplash.com/photo-1597066157837-5084c251fa34?q=80&w=1964&auto=format&fit=crop",
      category: "Fasteners",
      title: "Hex Nut",
      description: "Standard hex nut used for fastening bolts in hardware and mechanical assemblies.",
      price: "₹30"
    },
    {
      image: "https://images.unsplash.com/photo-1592867964826-ca850133fb74?q=80&w=1074&auto=format&fit=crop",
      category: "Fasteners",
      title: "Steel Bolt",
      description: "High-tensile steel bolt suitable for construction and machinery use.",
      price: "₹45"
    },
    {
      image: "https://images.unsplash.com/photo-1673833114586-f951168be369?q=80&w=2043&auto=format&fit=crop",
      category: "Fasteners",
      title: "Metal Washer",
      description: "Flat metal washer used to distribute load and prevent surface damage.",
      price: "₹15"
    },
    {
      image: "https://images.unsplash.com/photo-1589391349202-900abe66462a?q=80&w=1170&auto=format&fit=crop",
      category: "Mechanical Parts",
      title: "Ball Bearing",
      description: "Precision ball bearing designed for smooth rotation in machines and motors.",
      price: "₹320"
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1667732234284-bb920bd1f5e6?q=80&w=687&auto=format&fit=crop",
      category: "Hardware Parts",
      title: "Metal Spring",
      description: "High-carbon steel spring used in mechanical and industrial applications.",
      price: "₹120"
    },
    {
      image: "https://images.unsplash.com/photo-1593062087953-b837e95b7095?q=80&w=1170&auto=format&fit=crop",
      category: "Hardware Parts",
      title: "Steel Gear",
      description: "Machined steel gear for power transmission in industrial equipment.",
      price: "₹750"
    },
    {
      image: "https://images.unsplash.com/photo-1567093322102-6bdd32fba67d?q=80&w=687&auto=format&fit=crop",
      category: "Hardware Parts",
      title: "Metal Gear",
      description: "Machined Metal gear for power transmission in industrial equipment.",
      price: "₹750"
    },
    {
      image: "https://images.unsplash.com/photo-1617123623686-2b7b339785da?q=80&w=1173&auto=format&fit=crop",
      category: "Fasteners",
      title: "Screws",
      description: "High-tensile steel screws suitable for construction and machinery use.",
      price: "₹45"
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* ================= SENSE THEMED HEADING ================= */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <span className="text-red-600 font-black text-xs uppercase tracking-[0.4em]">
            Premium Selection
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter uppercase leading-none">
            Our <span className="text-red-600">Inventory</span>
          </h1>
          <p className="text-gray-400 font-medium max-w-lg text-sm md:text-base tracking-wide uppercase italic">
            Engineered for performance. Built for durability.
          </p>
          <div className="w-24 h-1.5 bg-red-600 rounded-full mt-4" />
        </div>

        {/* ================= PRODUCT GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {products.map((p, idx) => (
            <ProductCard key={idx} {...p} />
          ))}
        </div>
      </div>
    </div>
  );
}