"use client";

import { useRef } from "react";
import Link from "next/link";

const news = [
  {
    title: "Reducing Waste Through Circular Economy",
    category: "CIRCULAR ECONOMY",
    image: "/medicine-hero-1.jpg",
    link: "/news/1",
    highlight: false,
  },
  {
    title: "Resource Management: Preserving Ecosystem",
    category: "RESOURCE MANAGEMENT",
    image: "/medicine-hero-2.jpg",
    link: "/news/2",
    highlight: false,
  },
  {
    title: "Ensuring Employee Safety & Wellbeing",
    category: "EMPLOYEE SAFETY",
    image: "/medicine-hero-3.jpg",
    link: "/news/3",
    highlight: false,
  },
  {
    title: "Strengthening Supply Chain for Growth",
    category: "SUPPLIER ASSESSMENTS",
    image: "/medicine.png",
    link: "/news/4",
    highlight: false,
  },
];

export default function NewsSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* ================= HEADER ================= */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">

          {/* TEXT */}
          <div>
            <p className="text-xs md:text-sm text-[#0024C3] tracking-wide">
              SUSTAINABILITY SPOTLIGHT
            </p>

            <h2 className="text-2xl md:text-5xl font-semibold mt-2 leading-tight">
              Committed to Creating Value
              <br className="hidden md:block" />
              for People and Planet
            </h2>
          </div>

          {/* ARROWS */}
          <div className="flex gap-2 md:gap-3">

            <button
              onClick={() => scroll("left")}
              className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-100 hover:bg-gray-200 active:scale-95 transition flex items-center justify-center text-sm md:text-base"
            >
              ←
            </button>

            <button
              onClick={() => scroll("right")}
              className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-100 hover:bg-gray-200 active:scale-95 transition flex items-center justify-center text-sm md:text-base"
            >
              →
            </button>

          </div>

        </div>

        {/* ================= SLIDER ================= */}
        <div className="relative overflow-hidden">

          {/* LEFT FADE */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-white to-transparent z-10" />

          {/* RIGHT FADE */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-white to-transparent z-10" />

          {/* SCROLL AREA */}
          <div
            ref={scrollRef}
            className="flex gap-6 px-1 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory"
          >

            {news.map((item, i) => (
              <Link
                href={item.link}
                key={i}
                className={`group snap-start min-w-[260px] md:min-w-[320px] rounded-3xl overflow-hidden transition duration-300 cursor-pointer
                ${
                  item.highlight
                    ? "bg-gradient-to-br from-[#0024C3] to-purple-700 text-white"
                    : "bg-white border border-gray-200"
                }
                hover:shadow-xl hover:-translate-y-1`}
              >

                {/* IMAGE */}
                {!item.highlight && (
                  <div className="overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-40 md:h-44 object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                )}

                {/* CONTENT */}
                <div className="p-5 md:p-6">

                  <p
                    className={`text-xs mb-2 ${
                      item.highlight ? "text-white/80" : "text-[#0024C3]"
                    }`}
                  >
                    // {item.category}
                  </p>

                  <h3 className="font-semibold text-base md:text-lg leading-snug">
                    {item.title}
                  </h3>

                  <p
                    className={`text-xs mt-4 ${
                      item.highlight ? "text-white/70" : "text-gray-500"
                    }`}
                  >
                    BLOG | Nov 2024
                  </p>

                </div>

              </Link>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}