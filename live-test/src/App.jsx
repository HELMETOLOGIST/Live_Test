import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

/* Layout */
import ClientLayout from "./layout/ClientLayout";

/* Pages */
import Home from "./routes/home/Home";
import ProductCard from "./components/home/ProductCard";
import Support from "./components/home/Support";
import ProductView from "./components/home/ProuductView";
import Notifcation from "./components/home/Notification";
// import RecentlyViewed from "./components/home/RecentlyViewed";
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

import Error404 from "./Error404"




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
        
        {/* DYNAMIC PRODUCT VIEW ROUTE */}
        {/* The :id allows you to catch any product ID like /product/vw-polo-brake */}
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
        {/* LOGIN */}
        <Route path="/login" element={<Login />} />

        {/* SIGNUP */}
        <Route path="/signup" element={<Signup />} />

        {/* FORGOT */}
        <Route path="/forgot" element={<Forgot />} />

        {/* OTP */}
        <Route path="/otp" element={<OTP />} />


      {/* ERROR PAGES */}
      <Route path="/error404" element={<Error404 />} />

      </Route>
    </Routes>
  );
}