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
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-12">

          <div>
            <p className="text-sm text-[#0024C3] tracking-wide">
              SUSTAINABILITY SPOTLIGHT
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold mt-2 leading-tight">
              Committed to Creating Value
              <br />
              for People and Planet
            </h2>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition"
            >
              ←
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition"
            >
              →
            </button>
          </div>

        </div>

        {/* SLIDER */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-6"
        >

          {news.map((item, i) => (
            <Link
              href={item.link}
              key={i}
              className={`min-w-[280px] md:min-w-[320px] rounded-3xl overflow-hidden transition duration-300 cursor-pointer
              ${
                item.highlight
                  ? "bg-gradient-to-br from-[#0024C3] to-purple-700 text-white"
                  : "bg-white border border-gray-200"
              }
              hover:shadow-xl hover:-translate-y-1`}
            >

              {/* IMAGE */}
              {!item.highlight && (
                <img
                  src={item.image}
                  className="w-full h-44 object-cover transition duration-500 group-hover:scale-105"
                />
              )}

              {/* CONTENT */}
              <div className="p-6">

                <p
                  className={`text-xs mb-2 ${
                    item.highlight ? "text-white/80" : "text-[#0024C3]"
                  }`}
                >
                  // {item.category}
                </p>

                <h3 className="font-semibold text-lg leading-snug">
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
    </section>
  );
}