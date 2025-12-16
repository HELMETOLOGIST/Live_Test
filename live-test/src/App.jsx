// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

/* Layout */
import ClientLayout from "./layout/ClientLayout";

/* Pages */
import Home from "./routes/home/Home";
import ProductCard from "./components/home/ProductCard";
import Support from "./components/home/Support";

/* Login page */

export default function App() {
  return (
    
    <Routes>
      {/* LOGIN */}

      {/* CLIENT SIDE ROUTES */}
      <Route element={<ClientLayout />}>
        <Route index element={<Home />} /> {/* "/" */}
        <Route path="productcard" element={<ProductCard />} />
        <Route path="support" element={<Support />} />
        
      </Route>
    </Routes>
  );
}
