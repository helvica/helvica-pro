"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const categories = ["All", "Capsule", "Tablet", "Syrup", "Injection"];

const allProducts = [
  {
    name: "Helvica Dermacare",
    type: "Tablet",
    desc: "Advanced dermatology care solution.",
    image: "/medicine-hero-1.jpg",
  },
  {
    name: "CardioPlus",
    type: "Capsule",
    desc: "Supports cardiovascular health.",
    image: "/medicine-hero-2.jpg",
  },
  {
    name: "NeuroMax",
    type: "Syrup",
    desc: "Boosts neurological function.",
    image: "/medicine-hero-3.jpg",
  },
  {
    name: "InfectoCure",
    type: "Injection",
    desc: "High potency infection control.",
    image: "/medicine.png",
  },
];

export default function ProductsPage() {
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");
  const [view, setView] = useState<"grid" | "list">("grid");

  const filtered = allProducts.filter((p) => {
    const matchCategory = active === "All" || p.type === active;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <main className="bg-white">

      {/* ================= HERO ================= */}
      <section className="py-24 bg-[#f5f5f7] text-center">
        <h1 className="text-4xl md:text-6xl font-semibold text-gray-900">
          Our Products
        </h1>
        <p className="mt-4 text-gray-600">
          Explore our pharmaceutical solutions.
        </p>
      </section>

      {/* ================= CONTROLS ================= */}
      <section className="py-10 max-w-6xl mx-auto px-6 space-y-6">

        {/* SEARCH */}
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border-b border-gray-300 py-3 text-lg focus:outline-none focus:border-black"
        />

        {/* FILTER + VIEW */}
        <div className="flex flex-wrap justify-between gap-4 items-center">

          {/* FILTER */}
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full text-sm border ${
                  active === cat
                    ? "bg-black text-white"
                    : "border-gray-300 text-gray-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* VIEW TOGGLE */}
          <div className="flex gap-2">
            <button
              onClick={() => setView("grid")}
              className={`px-3 py-1 text-sm ${
                view === "grid" ? "font-semibold" : "text-gray-500"
              }`}
            >
              Grid
            </button>
            <button
              onClick={() => setView("list")}
              className={`px-3 py-1 text-sm ${
                view === "list" ? "font-semibold" : "text-gray-500"
              }`}
            >
              List
            </button>
          </div>

        </div>

      </section>

      {/* ================= PRODUCTS ================= */}
      <section className="pb-24 max-w-6xl mx-auto px-6">

        {/* GRID VIEW */}
        {view === "grid" && (
          <div className="grid md:grid-cols-3 gap-8">
            {filtered.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition"
              >

                <img src={item.image} className="w-full h-44 object-cover" />

                <div className="p-6">
                  <p className="text-xs text-[#0024C3] uppercase">
                    {item.type}
                  </p>

                  <h3 className="mt-2 font-semibold text-gray-900">
                    {item.name}
                  </h3>

                  <p className="mt-2 text-gray-600 text-sm">
                    {item.desc}
                  </p>

                  <button className="mt-4 text-sm text-[#0024C3]">
                    View Full →
                  </button>
                </div>

              </motion.div>
            ))}
          </div>
        )}

        {/* LIST VIEW */}
        {view === "list" && (
          <div className="space-y-4">
            {filtered.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="flex items-center gap-6 border border-gray-200 p-4 rounded-xl"
              >

                <img
                  src={item.image}
                  className="w-20 h-20 object-cover rounded-lg"
                />

                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">
                    {item.name}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {item.desc}
                  </p>
                </div>

                <button className="text-sm text-[#0024C3]">
                  View →
                </button>

              </motion.div>
            ))}
          </div>
        )}

      </section>

    </main>
  );
}