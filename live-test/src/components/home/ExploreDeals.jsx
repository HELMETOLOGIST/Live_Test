import React from "react";
import ProductCard from "./ProductCard";

export default function Home() {
const products = [
{
    "image": "https://images.unsplash.com/photo-1597066157837-5084c251fa34?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "category": "Fasteners",
    "title": "Hex Nut",
    "description": "Standard hex nut used for fastening bolts in hardware and mechanical assemblies.",
    "price": "₹30"
  },
  {
    "image": "https://images.unsplash.com/photo-1592867964826-ca850133fb74?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "category": "Fasteners",
    "title": "Steel Bolt",
    "description": "High-tensile steel bolt suitable for construction and machinery use.",
    "price": "₹45"
  },
  {
    "image": "https://images.unsplash.com/photo-1673833114586-f951168be369?q=80&w=2043&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "category": "Fasteners",
    "title": "Metal Washer",
    "description": "Flat metal washer used to distribute load and prevent surface damage.",
    "price": "₹15"
  },
  {
    "image": "https://images.unsplash.com/photo-1589391349202-900abe66462a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "category": "Mechanical Parts",
    "title": "Ball Bearing",
    "description": "Precision ball bearing designed for smooth rotation in machines and motors.",
    "price": "₹320"
  },
  {
    "image": "https://plus.unsplash.com/premium_photo-1667732234284-bb920bd1f5e6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "category": "Hardware Parts",
    "title": "Metal Spring",
    "description": "High-carbon steel spring used in mechanical and industrial applications.",
    "price": "₹120"
  },
  {
    "image": "https://images.unsplash.com/photo-1593062087953-b837e95b7095?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "category": "Hardware Parts",
    "title": "Steel Gear",
    "description": "Machined steel gear for power transmission in industrial equipment.",
    "price": "₹750"
  },
    {
    "image": "https://images.unsplash.com/photo-1567093322102-6bdd32fba67d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "category": "Hardware Parts",
    "title": "Metal Gear",
    "description": "Machined Metak gear for power transmission in industrial equipment.",
    "price": "₹750"
  },
  {
    "image": "https://images.unsplash.com/photo-1617123623686-2b7b339785da?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "category": "Fasteners",
    "title": "Screws",
    "description": "High-tensile steel screws suitable for construction and machinery use.",
    "price": "₹45"
  },
];



  return (
    <div className="max-w-7xl text-black mx-auto px-4 py-16">
      {/* Heading */}
      <h1 className="text-4xl text-black font-bold text-center mb-14">
        Explore the Best Deals
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {products.map((p, idx) => (
          <ProductCard key={idx} {...p} />
        ))}
      </div>
    </div>
  );
}
