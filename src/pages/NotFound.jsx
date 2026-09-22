import { Link } from "react-router-dom";
import { ArrowLeft, Home, Search } from "lucide-react";

function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[#F8F7F3] px-6 py-16">
      <div className="mx-auto max-w-2xl text-center">
        {/* Number */}
        <p className="text-8xl font-bold tracking-tight text-[#12372A] md:text-9xl">
          404
        </p>

        {/* Eyebrow */}
        <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#D6A756]">
          Page not found
        </p>

        {/* Heading */}
        <h1 className="mt-3 text-3xl font-bold text-[#12372A] md:text-4xl">
          Looks like this property went off the market.
        </h1>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-gray-500 md:text-base">
          The page you're looking for doesn't exist or may have
          been moved. Let's get you back to finding a place
          you'll love.
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#12372A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#315C48]"
          >
            <Home size={18} />
            Back home
          </Link>

          <Link
            to="/properties"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-[#12372A] transition hover:border-[#D6A756] hover:text-[#D6A756]"
          >
            <Search size={18} />
            Explore properties
          </Link>
        </div>

        {/* Back */}
        <button
          type="button"
          onClick={() => window.history.back()}
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-[#12372A]"
        >
          <ArrowLeft size={16} />
          Go back
        </button>
      </div>
    </main>
  );
}

export default NotFound;