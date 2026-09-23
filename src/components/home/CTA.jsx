import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function CTA() {
  return (
    <section className="bg-[#12372A] px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-3xl bg-[#1B4937] px-6 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
          <div className="mx-auto max-w-3xl text-center">
            
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D6A756]">
              Your next move
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to find a place you'll love?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
              Explore properties that match your lifestyle,
              budget, and future. Your next home could be closer
              than you think.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/properties"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#D6A756] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#c39745]"
              >
                Explore properties
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/agents"
                className="inline-flex items-center justify-center rounded-xl border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                Meet our agents
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;