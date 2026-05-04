"use client";

import Link from "next/link";

export default function MediaGrid() {
  return (
    <section className="px-4 md:px-6 pb-12">

      {/* TOP GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* BIG LEFT TILE */}
        <div className="relative h-[420px] md:h-[520px] rounded-2xl overflow-hidden group">
          <img
            src="/grid1.jpg"
            alt="Research"
            className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          <div className="absolute bottom-6 left-6 text-white max-w-xs">
            <h3 className="text-2xl font-semibold tracking-tight">
              Advanced Research
            </h3>
            <p className="text-sm mt-2 opacity-90">
              Driving next-generation pharmaceutical innovation.
            </p>

            <Link href="/about">
              <button className="mt-4 px-4 py-2 bg-white text-black rounded-full text-sm">
                Learn more
              </button>
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE (2 STACKED) */}
        <div className="grid grid-rows-2 gap-4">

          {/* TOP TILE */}
          <div className="relative h-[200px] rounded-2xl overflow-hidden group">
            <img
              src="/grid2.jpg"
              alt="Manufacturing"
              className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            <div className="absolute bottom-4 left-4 text-white">
              <h4 className="text-lg font-medium">Manufacturing</h4>
            </div>
          </div>

          {/* BOTTOM TILE */}
          <div className="relative h-[200px] rounded-2xl overflow-hidden group">
            <img
              src="/grid3.jpg"
              alt="Global Reach"
              className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            <div className="absolute bottom-4 left-4 text-white">
              <h4 className="text-lg font-medium">Global Reach</h4>
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM GRID */}
      <div className="grid md:grid-cols-3 gap-4 mt-4">

        {[
          { title: "Quality Assurance", img: "/grid4.jpg" },
          { title: "Innovation", img: "/grid5.jpg" },
          { title: "Healthcare Impact", img: "/grid6.jpg" },
        ].map((item) => (
          <div
            key={item.title}
            className="relative h-[240px] rounded-2xl overflow-hidden group"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            <div className="absolute bottom-4 left-4 text-white">
              <h4 className="text-lg font-medium">{item.title}</h4>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}