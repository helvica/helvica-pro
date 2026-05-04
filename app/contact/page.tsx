"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-white">

      {/* ================= HERO ================= */}
      <section className="py-24 bg-[#f5f5f7] text-center">
        <div className="max-w-3xl mx-auto px-6">

          <p className="text-sm tracking-widest text-gray-500 uppercase">
            Contact Us
          </p>

          <h1 className="text-4xl md:text-6xl font-semibold mt-4 text-gray-900">
            Get in Touch
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            Have questions, partnerships, or inquiries? We’re here to help.
          </p>

        </div>
      </section>

      {/* ================= CONTACT GRID ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">

          {/* LEFT INFO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >

            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Helvica Pharma
              </h2>
              <p className="text-gray-600 mt-2">
                Advancing global healthcare through innovation and trust.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6 text-gray-700">

              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#0024C3] mt-1" />
                <p>Lucknow, Uttar Pradesh, India</p>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-[#0024C3]" />
                <p>contact@helvicapharma.com</p>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-[#0024C3]" />
                <p>+91 7068547171</p>
              </div>

            </div>

          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-[#f9fafb] p-8 rounded-2xl border border-gray-200"
          >

            <form className="space-y-5">

              {/* INPUT STYLE */}
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 caret-[#0024C3] focus:outline-none focus:ring-2 focus:ring-[#0024C3]"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 caret-[#0024C3] focus:outline-none focus:ring-2 focus:ring-[#0024C3]"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 caret-[#0024C3] focus:outline-none focus:ring-2 focus:ring-[#0024C3]"
              />

              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 caret-[#0024C3] focus:outline-none focus:ring-2 focus:ring-[#0024C3]"
              />

              <button
                type="submit"
                className="w-full py-3 bg-[#0024C3] text-white rounded-lg hover:opacity-90 transition"
              >
                Send Message
              </button>

            </form>

          </motion.div>

        </div>
      </section>

      {/* ================= MAP ================= */}
      <section className="py-24 bg-[#f5f5f7]">

        <div className="max-w-6xl mx-auto px-6">

          <div className="rounded-3xl overflow-hidden border border-gray-200">

            <iframe
              src="https://www.google.com/maps?q=Lucknow,India&output=embed"
              className="w-full h-[400px] border-0"
              loading="lazy"
            />

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-white text-center">

        <div className="max-w-2xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Let’s Work Together
          </h2>

          <p className="mt-4 text-gray-600">
            Reach out to explore partnerships and collaborations.
          </p>

          <button className="mt-8 px-6 py-3 bg-black text-white rounded-full hover:opacity-90">
            Contact Team
          </button>

        </div>

      </section>

    </main>
  );
}