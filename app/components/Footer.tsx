"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f7] text-gray-700 ">

      

      {/* ================= MAIN FOOTER ================= */}
      <div className="container-custom py-16 grid md:grid-cols-4 gap-12">

        {/* LOGO + TEXT */}
        <div>
          <img src="/helvica-logo.png" className="h-8 mb-4" />

          <p className="text-sm text-gray-500 leading-relaxed">
            Helvica Pharma delivers innovative pharmaceutical solutions
            with a strong global presence and commitment to quality.
          </p>

          <p className="text-xs mt-6 text-gray-400">
            © 2026 Helvica Pharma. All rights reserved.
          </p>
        </div>

        {/* COLUMN 1 */}
        <div>
          <h4 className="font-semibold mb-4 text-gray-900">
            Company
          </h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="#">About</Link></li>
            <li><Link href="#">Innovation</Link></li>
            <li><Link href="#">Responsibility</Link></li>
            <li><Link href="#">Investors</Link></li>
          </ul>
        </div>

        {/* COLUMN 2 */}
        <div>
          <h4 className="font-semibold mb-4 text-gray-900">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="#">Products</Link></li>
            <li><Link href="#">Newsroom</Link></li>
            <li><Link href="#">Media</Link></li>
            <li><Link href="#">Careers</Link></li>
          </ul>
        </div>

        {/* COLUMN 3 */}
        <div>
          <h4 className="font-semibold mb-4 text-gray-900">
            Get in touch
          </h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="#">Contact Us</Link></li>
            <li><Link href="#">Partnerships</Link></li>
            <li><Link href="#">Report Issue</Link></li>
          </ul>

          {/* Social */}
          <div className="flex gap-3 mt-6">
            {["in", "x", "yt", "ig"].map((s, i) => (
              <div
                key={i}
                className="w-9 h-9 rounded-full bg-[#0024C3] text-white flex items-center justify-center text-xs"
              >
                {s}
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="border-t border-gray-200 py-6 text-sm">
        <div className="container-custom flex flex-wrap justify-between gap-4 text-gray-500">

          <div className="flex gap-6 flex-wrap">
            <Link href="#">Accessibility</Link>
            <Link href="#">Privacy</Link>
            <Link href="#">Terms</Link>
            <Link href="#">Cookies</Link>
            <Link href="#">Sitemap</Link>
          </div>

        </div>
      </div>

      {/* ================= SCROLL TOP ================= */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-[#ff5a00] text-white flex items-center justify-center shadow-lg hover:scale-110 transition"
      >
        ↑
      </button>

    </footer>
  );
}