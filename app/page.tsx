"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import RnDSection from "./components/RnDSection";
import NewsSlider from "./components/NewsSlider";
import BioBackground from "./components/BioBackground";

/* Animation */
const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7 },
  viewport: { once: true },
};

export default function Home() {
  return (
    <main className="bg-white text-black overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">

  {/* ================= BACKGROUND ================= */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#f8fafc] via-white to-[#eef2ff]" />

  {/* Soft blue glow */}
  <div className="absolute w-[500px] h-[500px] bg-[#0024C3]/10 blur-[120px] rounded-full top-20 left-1/2 -translate-x-1/2" />

  {/* subtle radial highlight */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(0,36,195,0.08),transparent)]" />

  {/* ================= CONTENT ================= */}
  <div className="container-custom relative text-center">

    {/* Badge */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="inline-block px-4 py-1 mb-6 rounded-full bg-[#0024C3]/10 text-[#0024C3] text-sm"
    >
      Global Pharmaceutical Innovation
    </motion.div>

    {/* Heading */}
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-5xl md:text-7xl font-semibold text-gray-900 leading-tight tracking-tight"
    >
      Advancing Healthcare
      <br />
      <span className="text-[#0024C3]">
        Through Innovation
      </span>
    </motion.h1>

    {/* Subtext */}
    <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg"
    >
      Helvica Pharma delivers high-quality pharmaceutical solutions
      with global compliance, advanced research, and patient-first innovation.
    </motion.p>

    {/* CTA */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="mt-10 flex justify-center gap-4"
    >

      <button className="px-6 py-3 bg-[#0024C3] text-white rounded-full hover:scale-105 transition font-medium">
        Explore Products
      </button>

      <button className="px-6 py-3 border border-gray-300 text-gray-800 rounded-full hover:bg-black hover:text-white transition">
        Learn More
      </button>

    </motion.div>

  </div>

  {/* Scroll hint */}
  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400 text-sm">
    Scroll ↓
  </div>

</section>

{/* ================= Second Section ================= */}

<section className="py-28 bg-white">
  <div className="container-custom grid md:grid-cols-2 gap-16 items-center">

    {/* TEXT */}
    <div>
      <p className="text-sm text-[#0024C3] font-medium mb-3">
        Patient Stories
      </p>

      <h2 className="text-4xl font-semibold text-gray-900 leading-tight">
        Transforming Lives Through Innovation
      </h2>

      <p className="mt-6 text-gray-600 leading-relaxed">
        Every day, we push the boundaries of science to deliver breakthrough
        treatments that improve patient outcomes across the world.
      </p>

      <button className="mt-6 text-[#0024C3] font-medium flex items-center gap-2 hover:gap-3 transition">
        Read the story →
      </button>
    </div>

    {/* IMAGE / VIDEO */}
    <div className="relative rounded-2xl overflow-hidden shadow-lg">

      <img
        src="/medicine-hero-1.jpg"
        className="w-full h-full object-cover"
      />

      {/* Play Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
          ▶
        </div>
      </div>

    </div>

  </div>
</section>

{/* ================= 3 section ================= */}

<section className="py-28 bg-gray-50">
  <div className="container-custom grid md:grid-cols-2 gap-16 items-center">

    {/* IMAGE */}
    <div className="rounded-2xl overflow-hidden shadow-lg">
      <img src="/medicine-hero-2.jpg" className="w-full h-full object-cover" />
    </div>

    {/* TEXT */}
    <div>
      <p className="text-sm text-[#0024C3] font-medium mb-3">
        Research & Development
      </p>

      <h2 className="text-4xl font-semibold text-gray-900">
        Advancing Science for Tomorrow
      </h2>

      <p className="mt-6 text-gray-600">
        Our global R&D network focuses on innovation, quality, and speed
        to bring life-saving medicines to patients faster.
      </p>

      <button className="mt-6 text-[#0024C3] font-medium">
        Discover more →
      </button>
    </div>

  </div>
</section>

      

      {/* ================= Product section ================= */}

      <section className="relative py-32 overflow-hidden">

  {/* ================= BACKGROUND ================= */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#f5f9ff] via-[#eef4ff] to-white" />

  {/* soft glow */}
  <div className="absolute w-[500px] h-[500px] bg-[#0024C3]/10 blur-[120px] rounded-full top-10 left-1/2 -translate-x-1/2" />

  {/* ================= CONTENT ================= */}
  <div className="container-custom text-center relative">

    {/* Heading */}
    <h2 className="text-4xl md:text-6xl font-semibold text-gray-900">
      Radiance Cream
    </h2>

    <p className="mt-3 text-lg text-gray-600">
      Advanced skin repair. Visible glow.
    </p>

    {/* CTA */}
    <div className="mt-6 flex justify-center gap-4">
      <button className="px-5 py-2 bg-[#0024C3] text-white rounded-full">
        Learn more
      </button>
      <button className="px-5 py-2 border border-gray-300 rounded-full">
        Buy
      </button>
    </div>

  </div>

  {/* ================= PRODUCT IMAGE ================= */}
  <div className="relative mt-16 flex justify-center">

    <motion.img
      src="/cream.png"   // 👈 your product image
      alt="Beauty Cream"
      className="w-[260px] md:w-[340px] object-contain drop-shadow-[0_30px_80px_rgba(0,0,0,0.15)]"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    />

  </div>

</section>

      {/* ================= R&D ================= */}
      <RnDSection />

      {/* ================= STORY ================= */}
      <section className="relative py-32 overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0AA37F] via-[#0A6FA3] to-[#0024C3]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.15),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.1),transparent)]" />

        {/* Content */}
        <div className="container-custom relative grid md:grid-cols-2 items-center gap-16">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center md:justify-start"
          >
            <div className="absolute w-[350px] h-[350px] bg-white/10 blur-[100px] rounded-full" />

            <motion.img
              src="/founder.png"
              className="relative w-[320px] md:w-[380px]"
              animate={{ y: [-10, 10] }}
              transition={{ duration: 6, repeat: Infinity, repeatType: "mirror" }}
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <p className="text-sm tracking-widest opacity-80">
              THE HELVICA STORY
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold mt-4">
              Driven by Science,
              <br />
              Inspired by Patients
            </h2>

            <p className="mt-6 text-white/80 max-w-lg">
              Helvica Pharma has grown into a globally trusted pharmaceutical company driven by innovation and patient-first values.
            </p>

            <button className="mt-8 px-6 py-3 bg-white text-[#0024C3] rounded-full">
              Know More
            </button>
          </motion.div>

        </div>
      </section>

      {/* ================= NEWS ================= */}
      <NewsSlider />

      {/* ================= CTA ================= */}
      {/* ================= CTA PREMIUM ================= */}
<section className="relative py-32 overflow-hidden text-white">

  {/* ================= BACKGROUND ================= */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#0024C3] via-[#1a3cff] to-[#0048ff]" />

  {/* Soft radial glow */}
  <div className="absolute w-[500px] h-[500px] bg-white/10 blur-[120px] rounded-full top-[-100px] left-[20%]" />
  <div className="absolute w-[400px] h-[400px] bg-cyan-400/10 blur-[120px] rounded-full bottom-[-100px] right-[20%]" />

  {/* 🔥 ANIMATED BIO BACKGROUND */}
  <BioBackground />

  {/* Extra overlay (important for readability) */}
  <div className="absolute inset-0 bg-black/20" />

  {/* ================= CONTENT ================= */}
  <div className="container-custom relative text-center">

    <motion.div {...fadeUp} className="max-w-3xl mx-auto">

      <p className="text-sm tracking-widest uppercase opacity-80 mb-4">
        Global Partnership
      </p>

      <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
        Partner With Helvica Pharma
      </h2>

      <p className="mt-5 text-white/80 text-lg">
        Collaborate with a globally trusted pharmaceutical company
        committed to innovation, quality, and patient-first solutions.
      </p>

      <div className="mt-10 flex justify-center gap-4">
        <Link href="/contact">
          <button className="px-6 py-3 bg-white text-[#0024C3] rounded-full font-medium hover:scale-105 transition">
            Contact Us
          </button>
        </Link>

        <button className="px-6 py-3 border border-white/40 rounded-full hover:bg-white hover:text-[#0024C3] transition">
          Learn More
        </button>
      </div>

    </motion.div>
  </div>

</section>

    </main>
  );
}