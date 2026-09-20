import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-7xl rounded-3xl bg-[#12372A] px-6 py-16 text-center text-white md:px-12">
        
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-white/70">
          Your next home starts here
        </p>

        <h2 className="mx-auto max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
          Find a place you'll love.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-white/75">
          Explore properties that match your lifestyle, budget, and future.
        </p>

        <Link
          to="/properties"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#F8F7F3] px-6 py-3 font-medium text-[#12372A] transition hover:scale-105"
        >
          Explore Properties
          <ArrowRight size={18} />
        </Link>

      </div>
    </section>
  );
}

export default CTA;