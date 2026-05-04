"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const news = [
  {
    title: "Helvica Expands Global Distribution Network",
    category: "Company",
    date: "Jan 2026",
    image: "/medicine-hero-1.jpg",
  },
  {
    title: "Breakthrough in Dermatology Research",
    category: "Research",
    date: "Dec 2025",
    image: "/medicine-hero-2.jpg",
  },
  {
    title: "Sustainability Initiative Across Operations",
    category: "Sustainability",
    date: "Nov 2025",
    image: "/medicine-hero-3.jpg",
  },
  {
    title: "New Manufacturing Facility Launched",
    category: "Manufacturing",
    date: "Oct 2025",
    image: "/medicine.png",
  },
];

export default function NewsroomPage() {
  return (
    <main className="bg-white">

      {/* ================= HERO ================= */}
      <section className="py-28 bg-[#f5f5f7] text-center">
        <div className="max-w-3xl mx-auto px-6">

          <p className="text-xs tracking-widest text-gray-500 uppercase">
            Newsroom
          </p>

          <h1 className="text-4xl md:text-6xl font-semibold mt-4 text-gray-900 tracking-tight">
            Latest News & Insights
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            Stay updated with company announcements, research, and industry insights.
          </p>

        </div>
      </section>

      {/* ================= FEATURED ================= */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="rounded-3xl overflow-hidden grid md:grid-cols-2 bg-[#f9fafb]"
          >

            {/* IMAGE */}
            <div className="h-[260px] md:h-auto">
              <img
                src={news[0].image}
                className="w-full h-full object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="p-10 flex flex-col justify-center">

              <p className="text-xs text-[#0024C3] uppercase tracking-wide">
                {news[0].category}
              </p>

              <h2 className="text-2xl md:text-3xl font-semibold mt-3 text-gray-900">
                {news[0].title}
              </h2>

              <p className="mt-4 text-gray-500 text-sm">
                {news[0].date}
              </p>

              <Link href="#">
                <button className="mt-6 text-sm text-[#0024C3]">
                  Read More →
                </button>
              </Link>

            </div>

          </motion.div>

        </div>
      </section>

      {/* ================= GRID ================= */}
      <section className="py-24 bg-[#f5f5f7]">
        <div className="max-w-6xl mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-8">

            {news.slice(1).map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-md transition"
              >

                <img
                  src={item.image}
                  className="w-full h-40 object-cover"
                />

                <div className="p-6">

                  <p className="text-xs text-[#0024C3] uppercase tracking-wide">
                    {item.category}
                  </p>

                  <h3 className="mt-2 font-medium text-gray-900 leading-snug">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-gray-500 text-sm">
                    {item.date}
                  </p>

                  <Link href="#">
                    <button className="mt-4 text-sm text-[#0024C3]">
                      Read →
                    </button>
                  </Link>

                </div>

              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= PRESS CONTACT ================= */}
      <section className="py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Press & Media Inquiries
          </h2>

          <p className="mt-4 text-gray-600">
            For press-related queries, collaborations, or interviews, please contact us.
          </p>

          <Link href="/contact">
            <button className="mt-8 px-6 py-3 bg-black text-white rounded-full hover:opacity-90">
              Contact Us
            </button>
          </Link>

        </div>
      </section>

    </main>
  );
}