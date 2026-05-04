"use client";

import { motion } from "framer-motion";

export default function HoverCard({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <motion.div
      whileHover={{
        scale: 1.04,
        rotateX: 2,
        rotateY: -2,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl transition"
    >
      <h3 className="text-lg font-semibold text-[#0024C3]">
        {title}
      </h3>

      <p className="mt-3 text-gray-600 text-sm leading-relaxed">
        {desc}
      </p>
    </motion.div>
  );
}