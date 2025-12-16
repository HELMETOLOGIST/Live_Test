import React from "react";
import { Phone, Instagram, Youtube } from "lucide-react";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">

      {/* Phone */}
      <a
        href="tel:+910000000000"
        className="w-14 h-14 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center shadow-xl transition"
        title="Call Us"
      >
        <Phone className="w-7 h-7" />
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com/YOUR_PAGE"
        target="_blank"
        className="w-14 h-14 bg-linear-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white rounded-full flex items-center justify-center shadow-xl transition"
        title="Instagram"
      >
        <Instagram className="w-7 h-7" />
      </a>

      {/* YouTube */}
      <a
        href="https://youtube.com/YOUR_CHANNEL"
        target="_blank"
        className="w-14 h-14 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center shadow-xl transition"
        title="YouTube"
      >
        <Youtube className="w-8 h-8" />
      </a>

    </div>
  );
}
