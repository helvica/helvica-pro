import Link from "next/link";

export default function SitemapPage() {
  return (
    <main className="bg-white py-24">
      <div className="max-w-3xl mx-auto px-6">

        <h1 className="text-4xl font-semibold text-gray-900">
          Sitemap
        </h1>

        <ul className="mt-8 space-y-3 text-gray-600">

          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/products">Products</Link></li>
          <li><Link href="/newsroom">Newsroom</Link></li>
          <li><Link href="/careers">Careers</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/report-issue">Report Issue</Link></li>

        </ul>

      </div>
    </main>
  );
}