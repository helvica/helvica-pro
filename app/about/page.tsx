"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="bg-white">

      {/* ================= HERO ================= */}
      <section className="py-28 text-center bg-[#f5f5f7]">
        <div className="max-w-3xl mx-auto px-6">

          <p className="text-xs tracking-widest text-gray-500 uppercase">
            About Helvica
          </p>

          <h1 className="text-4xl md:text-6xl font-semibold mt-4 text-gray-900 tracking-tight">
            Driven by Science. <br /> Inspired by Patients.
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            We are building a future where healthcare is accessible, innovative,
            and trusted worldwide.
          </p>

        </div>
      </section>

      {/* ================= STORY ================= */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <img
              src="/founder.png"
              alt="Founder"
              className="w-[300px] md:w-[380px] object-contain mx-auto"
            />
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
          >

            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Our Story
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Helvica Pharma was founded with a vision to transform healthcare
              through innovation and trust. From research to delivery, we focus
              on creating solutions that improve lives globally.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Our journey is driven by science, guided by ethics, and inspired
              by patients. Every step we take is aligned with our commitment to
              quality and impact.
            </p>

          </motion.div>

        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="py-24 bg-[#f5f5f7]">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 text-center mb-16">
            Our Values
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                title: "Innovation",
                desc: "Continuously advancing science to deliver better healthcare solutions.",
              },
              {
                title: "Integrity",
                desc: "Operating with transparency, ethics, and accountability.",
              },
              {
                title: "Patient First",
                desc: "Every decision is made with patient well-being at the core.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 bg-white rounded-2xl border border-gray-200 text-center"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-gray-600 text-sm">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= MISSION ================= */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Our Mission
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            To deliver high-quality pharmaceutical solutions that enhance
            global healthcare standards and improve patient outcomes through
            innovation, research, and responsibility.
          </p>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-[#f5f5f7] text-center">
        <div className="max-w-2xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Join Our Journey
          </h2>

          <p className="mt-4 text-gray-600">
            Be part of a company shaping the future of healthcare.
          </p>

          <button className="mt-8 px-6 py-3 bg-black text-white rounded-full hover:opacity-90">
            Explore Careers
          </button>

        </div>
      </section>

    </main>
  );
}