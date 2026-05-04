import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden px-6">

      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white" />
      <div className="absolute w-[400px] h-[400px] bg-blue-100/40 blur-[120px] rounded-full top-[-100px] left-1/2 -translate-x-1/2" />

      {/* Content */}
      <div className="relative text-center max-w-md">

        <h1 className="text-6xl md:text-7xl font-semibold tracking-tight text-gray-900">
          404
        </h1>

        <p className="mt-4 text-xl text-gray-700">
          Page not found.
        </p>

        <p className="mt-3 text-gray-500">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Actions */}
        <div className="mt-10 flex justify-center gap-4">

          {/* Primary CTA */}
          <Link
            href="/"
            className="px-6 py-3 bg-black text-white rounded-full text-sm hover:scale-105 transition"
          >
            Go Home
          </Link>

          {/* Secondary CTA (no JS handler) */}
          <Link
            href="/"
            className="px-6 py-3 border border-gray-300 rounded-full text-sm hover:bg-gray-100 transition"
          >
            Browse Site
          </Link>

        </div>
      </div>
    </main>
  );
}