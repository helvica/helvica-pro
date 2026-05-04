"use client";

import Link from "next/link";
import { FaLinkedinIn, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f7] text-gray-700">

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
            © {new Date().getFullYear()} Helvica Pharma. All rights reserved.
          </p>
        </div>

        {/* COLUMN 1 */}
        <div>
          <h4 className="font-semibold mb-4 text-gray-900">
            Company
          </h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/about">Innovation</Link></li>
            <li><Link href="/about">Responsibility</Link></li>
            <li><Link href="/about">Investors</Link></li>
          </ul>
        </div>

        {/* COLUMN 2 */}
        <div>
          <h4 className="font-semibold mb-4 text-gray-900">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/newsroom">Newsroom</Link></li>
            <li><Link href="/newsroom">Media</Link></li>
            <li><Link href="/careers">Careers</Link></li>
          </ul>
        </div>

        {/* COLUMN 3 */}
        <div>
          <h4 className="font-semibold mb-4 text-gray-900">
            Get in touch
          </h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="/contact">Partnerships</Link></li>
            <li><Link href="/report-issue">Report Issue</Link></li>
          </ul>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-6">

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-500 hover:text-gray-900 transition duration-200 hover:scale-110"
            >
              <FaLinkedinIn size={16} />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-gray-500 hover:text-gray-900 transition duration-200 hover:scale-110"
            >
              <FaTwitter size={16} />
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-gray-500 hover:text-gray-900 transition duration-200 hover:scale-110"
            >
              <FaYoutube size={16} />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gray-500 hover:text-gray-900 transition duration-200 hover:scale-110"
            >
              <FaInstagram size={16} />
            </a>

          </div>

        </div>

      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="border-t border-gray-200 py-6 text-sm">
        <div className="container-custom flex flex-wrap justify-between gap-4 text-gray-500">

          <div className="flex gap-6 flex-wrap">
            <Link href="/accessibility">Accessibility</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/cookies">Cookies</Link>
            <Link href="/sitemap">Sitemap</Link>
          </div>

        </div>
      </div>

      {/* ================= SCROLL TOP ================= */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-[#0024c3] text-white flex items-center justify-center shadow-lg transition duration-200 hover:scale-110"
      >
        ↑
      </button>

    </footer>
  );
}