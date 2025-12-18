// src/layout/ClientLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import VestelNavbar from "../components/home/Navbar";
import FloatingButtons from "../components/home/FloatingButtons";
import SenseFooter from "../components/home/Footer"; // Import the new footer

export default function ClientLayout() {
  return (
    <div className="min-h-screen bg-white relative flex flex-col">
      {/* NAVBAR + MEGA MENU */}
      <VestelNavbar />

      {/* MAIN CONTENT */}
      {/* flex-grow ensures this area takes up all available space, pushing footer down */}
      <main className="pt-0 flex-grow">
        <Outlet /> {/* Nested routes will render here */}
      </main>

      {/* FOOTER */}
      <SenseFooter />

      {/* FLOATING BUTTONS */}
      <FloatingButtons />
    </div>
  );
}