// src/layout/ClientLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import VestelNavbar from "../components/home/Navbar";
import FloatingButtons from "../components/home/FloatingButtons";

export default function ClientLayout() {
  return (
    <div className="min-h-screen bg-white relative">
      {/* NAVBAR + MEGA MENU */}
      <VestelNavbar />

      {/* MAIN CONTENT */}
      <main className="pt-0">
        <Outlet /> {/* Nested routes will render here */}
      </main>

      {/* FLOATING BUTTONS */}
      <FloatingButtons />
    </div>
  );
}
