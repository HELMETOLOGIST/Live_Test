import { useState, useEffect } from "react";
import { Menu, X, Search, ShoppingCart, ChevronDown } from "lucide-react";
import Support from "../home/Support";

export default function VestelNavbar() {
  const [openSupport, setOpenSupport] = useState(false);
  const [openMega, setOpenMega] = useState(null);
  const [activeItem, setActiveItem] = useState("Mobiles");

  useEffect(() => {
    const alreadyShown = localStorage.getItem("supportShown");
    if (!alreadyShown) {
      setOpenSupport(true);
      localStorage.setItem("supportShown", "true");
    }
  }, []);

  /* ---------------- MEGA MENU DATA ---------------- */
  const categories = {
    Mobiles: [
      { name: "Smartphones", img: "https://images.unsplash.com/photo-1535303311164-664fc9ec6532?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/300x200" },
      { name: "Feature Phones", img: "https://images.unsplash.com/photo-1640936343842-268f9d87e764?q=80&w=847&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/300x200" },
      { name: "Accessories", img: "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?q=80&w=1113&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/300x200" },
    ],
    Laptops: [
      { name: "Gaming Laptops", img: "https://images.unsplash.com/photo-1641623410264-948701015656?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/300x200" },
      { name: "Ultrabooks", img: "https://images.unsplash.com/photo-1507470855518-469f3b3dad25?q=80&w=1205&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/300x200" },
      { name: "Student Laptops", img: "https://images.unsplash.com/photo-1507470855518-469f3b3dad25?q=80&w=1205&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/300x200" },
    ],
    TVs: [
      { name: "Smart TVs", img: "https://images.unsplash.com/photo-1646861039459-fd9e3aabf3fb?q=80&w=1026&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/300x200" },
      { name: "4K TVs", img: "https://images.unsplash.com/photo-1596405367208-63505402f113?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/300x200" },
      { name: "OLED TVs", img: "https://plus.unsplash.com/premium_photo-1683120912036-525c997c227d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/300x200" },
    ],
  };

  const brands = {
    Apple: [
      { name: "iPhone", img: "https://plus.unsplash.com/premium_photo-1680985551009-05107cd2752c?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/300x200" },
      { name: "MacBook", img: "https://images.unsplash.com/photo-1562952306-d06754dbad10?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/300x200" },
      { name: "iPad", img: "https://images.unsplash.com/photo-1589739900869-082b93d8f224?q=80&w=696&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/300x200" },
    ],
    Samsung: [
      { name: "Galaxy Phones", img: "https://images.unsplash.com/photo-1721864429261-3059e48c056b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/300x200" },
      { name: "Samsung TVs", img: "https://images.unsplash.com/photo-1721864429261-3059e48c056b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/300x200" },
      { name: "Appliances", img: "https://images.unsplash.com/photo-1758631130778-42d518bf13aa?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/300x200" },
    ],
    Sony: [
      { name: "PlayStation", img: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/300x200" },
      { name: "Sony TVs", img: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/300x200" },
      { name: "Headphones", img: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/300x200" },
    ],
  };

  return (
    <>
      <header className="w-full bg-white border-b border-gray-200 z-50 relative">
        {/* ================= MAIN NAVBAR ================= */}
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-red-600 font-bold text-4xl tracking-tight select-none">
            SENSE
          </div>

          <nav className="hidden xl:flex items-center space-x-10 text-[17px] text-gray-900">
            <a href="#" className="hover:text-red-600 transition">Home</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:text-red-600 transition">Shop</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:text-red-600 transition">Sustainability</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:text-red-600 transition">About Us</a>
          </nav>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setOpenSupport(true)}
              className="flex items-center gap-2 border px-3 py-2 text-black text-[15px] hover:bg-gray-50 transition rounded-md"
            >
              <span className="text-red-600 text-lg">💬</span> Support
            </button>

            <button className="flex items-center gap-2 border px-3 py-2 text-black rounded-3xl text-[15px] hover:bg-gray-50 transition">
              <span className="text-red-600 text-lg">📞</span> Call
            </button>

            <div className="hidden xl:grid grid-cols-3 gap-1 cursor-pointer">
              {Array(9).fill(0).map((_, i) => (
                <div key={i} className="w-2 h-2 bg-red-600 rounded-full" />
              ))}
            </div>

            <button className="xl:hidden">
              <Menu className="w-7 h-7 text-red-600" />
            </button>
          </div>
        </div>

        {/* ================= SUB NAVBAR ================= */}
        <div className="w-full bg-white border-t shadow-sm">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between h-14">
              <div className="flex items-center gap-6">
                <button
                  onMouseEnter={() => {
                    setOpenMega("category");
                    setActiveItem(Object.keys(categories)[0]);
                  }}
                  className="hidden md:flex items-center gap-1 text-black font-medium hover:text-indigo-600"
                >
                  Categories <ChevronDown size={16} />
                </button>

                <button
                  onMouseEnter={() => {
                    setOpenMega("brand");
                    setActiveItem(Object.keys(brands)[0]);
                  }}
                  className="hidden md:flex items-center gap-1 text-black font-medium hover:text-indigo-600"
                >
                  Brands <ChevronDown size={16} />
                </button>
              </div>

              <div className="hidden md:flex flex-1 justify-center">
                <div className="relative w-full max-w-md">
                  <Search
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full pl-10 pr-4 py-2 rounded-full text-black border focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="hidden md:block font-medium text-black">
                  Offers
                </span>
                <ShoppingCart />
              </div>
            </div>
          </div>

          {/* ================= MEGA MENU PANEL ================= */}
          {openMega && (
            <div
              onMouseLeave={() => setOpenMega(null)}
              className="absolute w-full bg-white shadow-xl border-t z-40"
            >
              <div className="max-w-7xl mx-auto grid grid-cols-12">
                <div className="col-span-3 border-r p-4 bg-gray-50 text-black space-y-2">
                  {Object.keys(openMega === "category" ? categories : brands).map(
                    (key) => (
                      <div
                        key={key}
                        onMouseEnter={() => setActiveItem(key)}
                        className={`p-3 rounded-lg cursor-pointer font-semibold ${
                          activeItem === key
                            ? "bg-indigo-600 text-white"
                            : "hover:bg-indigo-100"
                        }`}
                      >
                        {key}
                      </div>
                    )
                  )}
                </div>

                <div className="col-span-9 p-6 grid grid-cols-2 text-black md:grid-cols-3 gap-6">
                  {(openMega === "category"
                    ? categories[activeItem]
                    : brands[activeItem]
                  )?.map((item) => (
                    <div
                      key={item.name}
                      className="rounded-xl border p-4 text-center hover:shadow-lg transition"
                    >
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <p className="mt-3 font-semibold">{item.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* ================= SUPPORT MODAL ================= */}
      {openSupport && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          onClick={() => setOpenSupport(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-[95%] max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-xl p-6"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Support</h2>
              <button
                onClick={() => setOpenSupport(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            <Support />
          </div>
        </div>
      )}
    </>
  );
}
