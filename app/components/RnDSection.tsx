"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";

/* ✅ FIXED animation (type-safe) */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function StatCard({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 180, damping: 18 }}
      className="p-8 rounded-2xl bg-white/80 backdrop-blur-xl border border-gray-200 shadow-sm hover:shadow-2xl"
    >
      <div className="flex gap-2 mb-6">
        <span className="w-2 h-2 bg-[#0024C3] rounded-full" />
        <span className="w-2 h-2 bg-gray-300 rounded-full" />
        <span className="w-2 h-2 bg-gray-300 rounded-full" />
      </div>

      <p className="text-xs tracking-wide text-gray-500">{label}</p>

      <motion.h3
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="text-4xl font-semibold mt-3"
      >
        {value}
      </motion.h3>

      <p className="text-gray-600 text-sm mt-1">{sub}</p>
    </motion.div>
  );
}

export default function RnDSection() {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section
      ref={ref}
      className="py-28 bg-gradient-to-b from-white via-gray-50 to-white"
    >
      <div className="container-custom">
        {/* Heading */}
        <div className="mb-14">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-xs tracking-[0.2em] text-[#0024C3]"
          >
            R&D & INNOVATION
          </motion.p>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-semibold mt-3 leading-tight"
          >
            We seek out, and solve,
            <br />
            tough challenges.
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Left stats */}
          <div className="space-y-6">
            <StatCard
              label="R&D EXCELLENCE"
              value="730+"
              sub="Scientists"
            />

            <StatCard
              label="GLOBAL IMPACT"
              value="200+"
              sub="Specialty drugs across markets"
            />
          </div>

          {/* Right highlight */}
          <motion.div
            style={{ y }}
            className="md:col-span-2 rounded-2xl overflow-hidden grid md:grid-cols-2 border border-gray-200 shadow-sm hover:shadow-2xl transition"
          >
            {/* Image */}
            <div className="relative h-[260px] md:h-auto overflow-hidden">
              <motion.img
                src="/medicine-hero-3.jpg"
                alt="R&D"
                className="w-full h-full object-cover"
                initial={{ scale: 1.05 }}
                whileInView={{ scale: 1 }}
                transition={{
                  duration: 1.2,
                  ease: "easeOut" as const, // ✅ FIXED
                }}
                viewport={{ once: true }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Gradient panel */}
            <div className="p-8 bg-gradient-to-br from-[#0024C3] via-blue-700 to-purple-700 text-white flex flex-col justify-between">
              <div>
                <p className="text-xs tracking-widest opacity-80">
                  R&D HIGHLIGHTS
                </p>

                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut" as const, // ✅ FIXED
                  }}
                  viewport={{ once: true }}
                  className="text-xl md:text-2xl font-semibold mt-3 leading-snug"
                >
                  Breakthrough innovations in advanced pharmaceutical research.
                </motion.h3>
              </div>

              <motion.button
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="mt-8 text-sm underline underline-offset-4"
              >
                Learn More →
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}