"use client";

import { motion } from "framer-motion";

export default function ReportIssuePage() {
  return (
    <main className="bg-white">

      {/* ================= HERO ================= */}
      <section className="py-28 bg-[#f5f5f7] text-center">
        <div className="max-w-3xl mx-auto px-6">

          <p className="text-xs tracking-widest text-gray-500 uppercase">
            Report an Issue
          </p>

          <h1 className="text-4xl md:text-6xl font-semibold mt-4 text-gray-900 tracking-tight">
            Help Us Improve
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            Report product concerns, technical issues, or feedback. Your input helps us maintain quality and safety.
          </p>

        </div>
      </section>

      {/* ================= FORM ================= */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-10"
          >

            {/* NAME */}
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border-b border-gray-300 py-3 text-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-black"
            />

            {/* EMAIL */}
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border-b border-gray-300 py-3 text-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-black"
            />

            {/* ISSUE TYPE */}
            <select
              className="w-full border-b border-gray-300 py-3 text-lg text-gray-700 focus:outline-none focus:border-black bg-transparent"
            >
              <option>Issue Type</option>
              <option>Product Quality</option>
              <option>Adverse Reaction</option>
              <option>Packaging Issue</option>
              <option>Website / Technical Issue</option>
              <option>Other</option>
            </select>

            {/* PRODUCT NAME */}
            <input
              type="text"
              placeholder="Product Name (if applicable)"
              className="w-full border-b border-gray-300 py-3 text-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-black"
            />

            {/* DESCRIPTION */}
            <textarea
              rows={5}
              placeholder="Describe the issue in detail"
              className="w-full border-b border-gray-300 py-3 text-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-black resize-none"
            />

            {/* FILE UPLOAD */}
            <div>
              <label className="text-sm text-gray-500">
                Attach supporting file (optional)
              </label>
              <input
                type="file"
                className="mt-2 block w-full text-sm text-gray-600"
              />
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="mt-6 px-8 py-3 bg-black text-white rounded-full text-sm font-medium hover:opacity-90 transition"
            >
              Submit Report
            </button>

          </motion.form>

        </div>
      </section>

      {/* ================= NOTE ================= */}
      <section className="pb-24 text-center">
        <div className="max-w-2xl mx-auto px-6">

          <p className="text-sm text-gray-500">
            Your report will be reviewed by our quality and compliance team.
            For urgent medical concerns, please contact a healthcare professional immediately.
          </p>

        </div>
      </section>

    </main>
  );
}