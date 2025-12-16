import React from "react";

export default function Support() {
  return (
    <div className="bg-white flex flex-col items-center px-4 py-8">

      {/* LOGO */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-red-600 tracking-wide">
        VESTEL
      </h1>

      {/* MAIN FORM BOX */}
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl mt-8 p-8 border border-gray-200">

        {/* Title */}
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
          Get in touch with us!
        </h2>

        {/* FORM */}
        <form className="w-full space-y-5">

          {/* Name */}
          <input
            type="text"
            placeholder="Name - Surname"
            className="w-full h-14 border border-gray-300 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          {/* EMAIL + SUBJECT */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {/* Email */}
            <input
              type="email"
              placeholder="E-mail"
              className="w-full h-14 border border-gray-300 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />

            {/* Subject Dropdown */}
            <div className="relative">
              <select
                className="w-full h-14 border border-gray-300 px-4 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <option>Subject</option>
                <option>Support</option>
                <option>Sales</option>
                <option>Technical Issue</option>
              </select>

              {/* Dropdown Arrow */}
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-500 text-lg">
                ▼
              </div>
            </div>

          </div>

          {/* MESSAGE */}
          <textarea
            rows="6"
            placeholder="Message"
            className="w-full border border-gray-300 px-4 py-3 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-red-500"
          ></textarea>

          {/* PRIVACY POLICY */}
          <label className="flex items-center gap-3 text-sm text-gray-600">
            <input type="checkbox" className="w-4 h-4" />
            I read{" "}
            <a href="#" className="text-red-600 underline">
              Privacy Policy
            </a>
          </label>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-4 text-lg font-bold rounded-lg shadow hover:bg-red-700 active:scale-[0.98] transition"
          >
            SUBMIT
          </button>

        </form>
      </div>

    </div>
  );
}
