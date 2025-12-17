import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css"; // Tailwind CSS

// ---- GitHub Pages 404 redirect fix ----
const redirect = sessionStorage.redirect;
delete sessionStorage.redirect;

if (redirect && redirect !== window.location.pathname) {
  window.history.replaceState(null, "", redirect);
}
// -------------------------------------

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
