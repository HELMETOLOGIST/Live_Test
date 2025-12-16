import React from "react";

export default function ProductCard({ image, category, title, description, price }) {
  return (
    <div className="bg-white rounded-xl shadow-lg relative p-4 transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">
      {/* Image */}
      <div className="w-full h-56 overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-all duration-300 hover:scale-110"
        />
      </div>

      {/* Category */}
      <div className="text-center mt-3">
        <span className="inline-block bg-gray-900 text-white text-xs px-4 py-2 rounded-full shadow-md transition-all">
          {category}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-center mt-4 truncate">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 text-sm text-center mt-2 line-clamp-3 px-2">
        {description}
      </p>

      {/* Footer */}
      <div className="flex justify-between items-center mt-5 border-t pt-3">
        <span className="font-bold text-lg">{price}</span>
        <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-800 hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all">
          🛒
        </button>
      </div>
    </div>
  );
}
