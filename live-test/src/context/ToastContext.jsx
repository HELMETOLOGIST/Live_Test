import React, { createContext, useContext, useState } from "react";
import { AnimatePresence } from "framer-motion";
import SystemToast from "../components/Toast/SystemToast";


const ToastContext = createContext();

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const showToast = (type, message) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, type, message }]);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      
      <div className="fixed top-12 right-6 z-[999] pointer-events-none">
        <div className="flex flex-col items-end">
          <AnimatePresence mode="popLayout">
            {toasts.map((toast) => (
              <SystemToast key={toast.id} {...toast} onClose={removeToast} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </ToastContext.Provider>
  );
}

export const useToast = () => useContext(ToastContext);