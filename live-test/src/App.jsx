import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

/* Layout */
import ClientLayout from "./layout/ClientLayout";

/* Pages */
import Home from "./routes/home/Home";
import ProductCard from "./components/home/ProductCard";
import Support from "./components/home/Support";

export default function App() {
  const navigate = useNavigate();

  // ---- GitHub Pages redirect fix (for refresh & direct URL) ----
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirect = params.get("redirect");

    if (redirect) {
      navigate(redirect, { replace: true });
    }
  }, [navigate]);
  // ------------------------------------------------------------

  return (
    <Routes>
      {/* CLIENT SIDE ROUTES */}
      <Route element={<ClientLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/productcard" element={<ProductCard />} />
        <Route path="/support" element={<Support />} />
      </Route>
    </Routes>
  );
}
