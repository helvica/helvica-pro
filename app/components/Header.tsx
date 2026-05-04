"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navItems = [
    { name: "Products", href: "/products" },
    { name: "Newsroom", href: "/newsroom" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "/careers" },
  ];

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-gray-200 pt-[env(safe-area-inset-top)]">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div className="flex items-center justify-between h-14">

            {/* Logo */}
            <Link href="/">
              <img src="/helvica-logo.png" alt="Helvica" className="h-6" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href} className="hover:text-black transition">
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Right */}
            <div className="flex items-center gap-2">

              {/* Search */}
              <button
                onClick={() => setSearchOpen(true)}
                className="w-9 h-9 flex items-center justify-center"
              >
                <Search className="w-5 h-5 text-gray-800" />
              </button>

              {/* Hamburger */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden w-9 h-9 flex items-center justify-center relative"
              >
                <span
                  className={`absolute w-5 h-[1.5px] bg-black transition-all duration-300 ${
                    menuOpen ? "rotate-45" : "-translate-y-1.5"
                  }`}
                />
                <span
                  className={`absolute w-5 h-[1.5px] bg-black transition-all duration-300 ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`absolute w-5 h-[1.5px] bg-black transition-all duration-300 ${
                    menuOpen ? "-rotate-45" : "translate-y-1.5"
                  }`}
                />
              </button>

            </div>
          </div>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[56px] left-0 w-full h-[calc(100vh-56px)] bg-white z-[999]"
          >
            <div className="max-w-md mx-auto px-6 pt-8 space-y-6">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block text-lg text-gray-900"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= SEARCH OVERLAY ================= */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[1000] bg-white/95 backdrop-blur-xl"
          >

            {/* ✅ FIXED CLOSE BUTTON (same as hamburger) */}
            <div className="absolute top-[env(safe-area-inset-top)] right-4 md:right-10 h-14 flex items-center">
              <button
                onClick={() => setSearchOpen(false)}
                className="w-9 h-9 flex items-center justify-center relative"
              >
                <span className="absolute w-5 h-[1.5px] bg-black rotate-45" />
                <span className="absolute w-5 h-[1.5px] bg-black -rotate-45" />
              </button>
            </div>

            {/* Content */}
            <div className="max-w-3xl mx-auto px-6 md:px-10 mt-24">

              {/* Input */}
              <div className="flex items-center gap-4 border-b border-gray-300 pb-4">
                <Search className="w-6 h-6 text-gray-400" />

                <input
                  autoFocus
                  type="text"
                  placeholder="Search helvica.com"
                  className="w-full text-2xl md:text-3xl outline-none placeholder-gray-400"
                />
              </div>

              {/* Quick Links */}
              <div className="mt-10">
                <p className="text-sm text-gray-400 mb-4">Quick Links</p>

                <div className="space-y-4 text-lg">
                  {[
                    "Find a Store",
                    "Skin Care Products",
                    "Hair Care",
                    "Medical Solutions",
                    "About Helvica",
                  ].map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-center gap-3 text-gray-700 hover:text-black cursor-pointer"
                    >
                      <span>→</span>
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}