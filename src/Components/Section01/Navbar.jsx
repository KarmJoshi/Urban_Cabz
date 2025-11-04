import React, { useState } from "react";
import LoginModal from "../Section01/Login_SignUp_Model"; // check this path

export default function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 bg-white/50 backdrop-blur-xl border-b border-white/30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
          {/* Logo */}
          <h4 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
            Urban <span className="text-yellow-500">Cabz</span>
          </h4>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="px-5 py-2 rounded-xl border border-gray-800/70 text-gray-800 font-medium hover:bg-gray-900 hover:text-white hover:scale-105 transition-all duration-300 shadow-sm">
              Register Taxi
            </button>
            <button
              onClick={() => setShowLogin(true)}
              className="px-5 py-2 rounded-xl bg-gray-900 text-white font-medium hover:bg-yellow-500 hover:text-gray-900 hover:scale-105 transition-all duration-300 shadow-sm"
            >
              Login
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <button
            className="md:hidden p-2 text-gray-800 hover:text-yellow-500 transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  menuOpen
                    ? "M6 18L18 6M6 6l12 12" // close icon
                    : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" // menu icon
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white/90 backdrop-blur-lg border-t border-gray-200 shadow-lg">
            <div className="flex flex-col items-center gap-4 py-4">
              <button className="w-[80%] px-5 py-2 rounded-xl border border-gray-800/70 text-gray-800 font-medium hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-sm">
                Register Taxi
              </button>
              <button
                onClick={() => {
                  setShowLogin(true);
                  setMenuOpen(false);
                }}
                className="w-[80%] px-5 py-2 rounded-xl bg-gray-900 text-white font-medium hover:bg-yellow-500 hover:text-gray-900 transition-all duration-300 shadow-sm"
              >
                Login
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Login Modal */}
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
    </>
  );
}
