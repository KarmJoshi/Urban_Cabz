import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Login_SignUp_Model({ onClose }) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50 px-4"
      onClick={onClose}
    >
      {/* Modal shell: layout enabled so size changes animate */}
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.95, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md bg-white/12 backdrop-blur-2xl border border-white/25 rounded-3xl shadow-2xl text-white overflow-hidden"
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-white/80 hover:text-white text-2xl z-10"
        >
          ×
        </button>

        {/* Tabs */}
        <div className="flex justify-center gap-0 mt-4 p-2">
          <button
            onClick={() => setIsLogin(true)}
            className={`px-5 py-2 rounded-l-xl font-semibold transition-colors ${
              isLogin ? "bg-yellow-400 text-gray-900 shadow-md" : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`px-5 py-2 rounded-r-xl font-semibold transition-colors ${
              !isLogin ? "bg-yellow-400 text-gray-900 shadow-md" : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Animated content container (layout) */}
        <motion.div
          layout
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="p-6 sm:p-8"
        >
          <AnimatePresence mode="wait">
            {isLogin ? (
              /* LOGIN */
              <motion.div
                key="login"
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.32, ease: "easeInOut" }}
              >
                <h2 className="text-2xl font-semibold text-center mb-5">Welcome Back</h2>

                <div className="mb-4">
                  <label className="block text-sm text-white/85 mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/16 border border-white/25 text-white placeholder-white/60 focus:ring-2 focus:ring-yellow-400 outline-none"
                  />
                </div>

                <div className="mb-3">
                  <label className="block text-sm text-white/85 mb-1">Password</label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full px-4 py-3 rounded-xl bg-white/16 border border-white/25 text-white placeholder-white/60 focus:ring-2 focus:ring-yellow-400 outline-none"
                  />
                </div>

                <div className="flex justify-end mb-5">
                  <button className="text-sm text-yellow-300 hover:underline">Forgot Password?</button>
                </div>

                <button className="w-full py-3 bg-yellow-400 text-gray-900 font-semibold rounded-xl shadow-sm hover:bg-yellow-300 transition">
                  Login
                </button>
              </motion.div>
            ) : (
              /* SIGNUP */
              <motion.div
                key="signup"
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.32, ease: "easeInOut" }}
              >
                <h2 className="text-2xl font-semibold text-center mb-5">Create Account</h2>

                <div className="mb-3">
                  <label className="block text-sm text-white/85 mb-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-white/16 border border-white/25 text-white placeholder-white/60 focus:ring-2 focus:ring-yellow-400 outline-none"
                  />
                </div>

                <div className="mb-3">
                  <label className="block text-sm text-white/85 mb-1">Mobile Number</label>
                  <input
                    type="tel"
                    placeholder="+91 9XXXXXXXXX"
                    className="w-full px-4 py-3 rounded-xl bg-white/16 border border-white/25 text-white placeholder-white/60 focus:ring-2 focus:ring-yellow-400 outline-none"
                  />
                </div>

                <div className="mb-3">
                  <label className="block text-sm text-white/85 mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/16 border border-white/25 text-white placeholder-white/60 focus:ring-2 focus:ring-yellow-400 outline-none"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm text-white/85 mb-1">Password</label>
                  <input
                    type="password"
                    placeholder="Create a password"
                    className="w-full px-4 py-3 rounded-xl bg-white/16 border border-white/25 text-white placeholder-white/60 focus:ring-2 focus:ring-yellow-400 outline-none"
                  />
                </div>

                <button className="w-full py-3 bg-yellow-400 text-gray-900 font-semibold rounded-xl shadow-sm hover:bg-yellow-300 transition">
                  Sign Up
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
}
