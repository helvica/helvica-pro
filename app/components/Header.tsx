"use client";

import Link from "next/link";
import { Search, X, Menu } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Products", href: "/products" },
    { name: "Newsroom", href: "/newsroom" },
    { name: "About", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Careers", href: "/careers" },
  ];

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-gray-200">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link href="/">
              <img
                src="/helvica-logo.png"
                alt="Helvica Pharma"
                className="h-7"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-700">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href} className="hover:text-black transition">
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Right */}
            <div className="flex items-center gap-4">

              {/* Search */}
              <Search className="w-5 h-5 text-gray-700 cursor-pointer hover:text-black" />

              {/* Hamburger */}
              <button
                onClick={() => setOpen(true)}
                className="md:hidden"
              >
                <Menu className="w-6 h-6" />
              </button>

            </div>

          </div>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white z-[999]"
          >

            {/* Top bar */}
            <div className="container-custom flex items-center justify-between h-16 border-b">

              <img src="/helvica-logo.png" className="h-7" />

              <button onClick={() => setOpen(false)}>
                <X className="w-6 h-6" />
              </button>

            </div>

            {/* Menu Items */}
            <div className="flex flex-col items-center justify-center h-full gap-8 text-xl font-medium">

              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="hover:text-[#0024C3] transition"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}