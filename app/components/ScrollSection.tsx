"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ScrollSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 0]);

  return (
    <section ref={ref} className="py-32 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10 text-center">

        <motion.h2
          style={{ y, opacity }}
          className="text-4xl md:text-5xl font-semibold"
        >
          Innovation that Scales Globally
        </motion.h2>

        <motion.p
          style={{ y, opacity }}
          className="mt-6 text-gray-600 max-w-xl mx-auto"
        >
          Our advanced pharmaceutical capabilities ensure consistency,
          compliance, and reliability across global markets.
        </motion.p>

      </div>
    </section>
  );
}