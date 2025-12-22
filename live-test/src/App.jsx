import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

/* Custom Loader */
import SENSELoader from "./SENSELoader"; // Ensure the path matches where you saved the loader

/* Layout */
import ClientLayout from "./layout/ClientLayout";

/* Pages */
import Home from "./routes/home/Home";
import ProductCard from "./components/home/ProductCard";
import Support from "./components/home/Support";
import ProductView from "./components/home/ProuductView";
import Notifcation from "./components/home/Notification";
import ProductList from "./components/shop/ProductList";
import Cart from "./components/shop/Cart";
import Checkout from "./components/shop/Checkout";
import Payment from "./components/shop/Payment";
import OrderConfirmation from "./components/shop/OrderConfirmation";
import Invoice from "./components/shop/Invoice";
import MyAccount from "./components/shop/MyAccount";
import MyOrder from "./components/shop/MyOrder";
import Wishlist from "./components/shop/Wishlist";
import OrderDetails from "./components/shop/OrderDetails";
import AboutUs from "./components/about/AboutUs";
import Login from "./components/authentication/Login";
import Signup from "./components/authentication/SignUp";
import Forgot from "./components/authentication/Forgot";
import OTP from "./components/authentication/OTP";
import Error404 from "./Error404";

export default function App() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  // ---- Loader Logic ----
  useEffect(() => {
    // Simulate system boot-up
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // 2.5 seconds for the SENSE industrial animation

    return () => clearTimeout(timer);
  }, []);

  // ---- GitHub Pages redirect fix ----
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirect = params.get("redirect");

    if (redirect) {
      navigate(redirect, { replace: true });
    }
  }, [navigate]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <SENSELoader key="loader" />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <Routes>
          {/* CLIENT SIDE ROUTES */}
          <Route element={<ClientLayout />}>
            <Route path="/" element={<Home />} />
            
            {/* DYNAMIC PRODUCT VIEW ROUTE */}
            <Route path="/productview" element={<ProductView />} />
            <Route path="/productcard" element={<ProductCard />} />
            <Route path="/support" element={<Support />} />

            {/* SHOP */}
            <Route path="/shop" element={<ProductList />} />

            {/* CART */}
            <Route path="/cart" element={<Cart />} />

            {/* CHECKOUT */}
            <Route path="/checkout" element={<Checkout />} />

            {/* PAYMENT */}
            <Route path="/payment" element={<Payment />} />

            {/* ORDER CONFIRMATION */}
            <Route path="/orderconfirmation" element={<OrderConfirmation />} />
            
            {/* INVOICE */}
            <Route path="/invoice" element={<Invoice />} />

            {/* NOTIFICATION */}
            <Route path="/notification" element={<Notifcation />} />

            {/* ABOUT US */}
            <Route path="/aboutus" element={<AboutUs />} />

            {/* MY ACCOUNT */}
            <Route path="/myaccount" element={<MyAccount />} />

            {/* MY ORDER */}
            <Route path="/myorder" element={<MyOrder />} />

            {/* ORDER DETAILS */}
            <Route path="/orderdetails" element={<OrderDetails />} />

            {/* WISHLIST */}
            <Route path="/wishlist" element={<Wishlist />} />

            {/* Authentication Area */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot" element={<Forgot />} />
            <Route path="/otp" element={<OTP />} />

            {/* ERROR PAGES */}
            <Route path="/error404" element={<Error404 />} />
          </Route>
        </Routes>
      </motion.div>
    </>
  );
}