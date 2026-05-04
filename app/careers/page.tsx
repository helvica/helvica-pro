"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const jobs = [
  {
    role: "Pharmaceutical Research Scientist",
    location: "India",
  },
  {
    role: "Regulatory Affairs Manager",
    location: "Remote",
  },
  {
    role: "Marketing Executive",
    location: "Delhi",
  },
];

export default function CareersPage() {
  return (
    <main className="bg-white">

      {/* ================= HERO ================= */}
      <section className="py-24 bg-[#f5f5f7] text-center">
        <div className="max-w-3xl mx-auto px-6">

          <p className="text-sm tracking-widest text-gray-500 uppercase">
            Careers at Helvica
          </p>

          <h1 className="text-4xl md:text-6xl font-semibold mt-4 text-gray-900">
            Build the Future of Healthcare
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            Join a global team committed to innovation, science, and improving lives.
          </p>

          <button className="mt-8 px-6 py-3 bg-black text-white rounded-full text-sm hover:opacity-90">
            View Open Positions
          </button>

        </div>
      </section>

      {/* ================= WHY JOIN ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">

          {[
            {
              title: "Innovation First",
              desc: "Work on cutting-edge pharmaceutical solutions shaping the future.",
            },
            {
              title: "Global Impact",
              desc: "Help improve healthcare outcomes across multiple countries.",
            },
            {
              title: "Growth Culture",
              desc: "We invest in your learning, leadership, and career development.",
            },
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-2xl bg-[#f9fafb] border border-gray-200 hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="text-gray-600 mt-3">{item.desc}</p>
            </div>
          ))}

        </div>
      </section>

      {/* ================= JOB LIST ================= */}
      <section className="py-24 bg-[#f5f5f7]">
        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-10">
            Open Positions
          </h2>

          <div className="space-y-4">

            {jobs.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex justify-between items-center p-6 bg-white rounded-xl border border-gray-200 hover:shadow-md transition"
              >
                <div>
                  <h3 className="font-medium text-gray-900">{job.role}</h3>
                  <p className="text-gray-500 text-sm">{job.location}</p>
                </div>

                <button className="text-sm text-[#0024C3]">
                  Apply →
                </button>
              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= CULTURE CARD ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          <div className="rounded-3xl overflow-hidden bg-gradient-to-r from-[#e5e5e7] to-[#dbeafe] p-10 md:p-16 grid md:grid-cols-2 items-center">

            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                A Culture of Purpose
              </h2>

              <p className="mt-4 text-gray-600">
                At Helvica, we believe in collaboration, integrity, and
                putting patients first in everything we do.
              </p>
            </div>

            <div className="mt-8 md:mt-0 flex justify-center">
              <img
                src="/team.jpg"
                alt="Team"
                className="w-[280px] md:w-[340px] object-contain"
              />
            </div>

          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-[#f5f5f7] text-center">
        <div className="max-w-2xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Ready to make an impact?
          </h2>

          <p className="mt-4 text-gray-600">
            Explore opportunities and grow with Helvica Pharma.
          </p>

          <Link href="/contact">
            <button className="mt-8 px-6 py-3 bg-[#0024C3] text-white rounded-full hover:opacity-90">
              Apply Now
            </button>
          </Link>

        </div>
      </section>

    </main>
  );
}