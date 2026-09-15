import { CheckCircle, Heart, ShieldCheck, Users } from "lucide-react";

function About() {
  return (
    <main className="min-h-screen bg-[#F8F7F3]">
      {/* Hero */}
      <section className="bg-[#12372A] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#D6A756]">
            About Nestora
          </p>

          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            Helping you find a place you'll love.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Nestora is a modern property discovery platform designed
            to make finding your next home simpler, clearer, and more
            enjoyable.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#D6A756]">
              Our mission
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-[#12372A] md:text-4xl">
              Property search shouldn't feel complicated.
            </h2>

            <p className="mt-6 leading-7 text-gray-600">
              Finding the right property is about more than bedrooms
              and square metres. It's about finding a place that fits
              your lifestyle, budget, goals, and future.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              Nestora brings properties, useful information, and
              property professionals together in one simple experience.
            </p>
          </div>

          {/* Mission card */}
          <div className="rounded-3xl bg-[#12372A] p-8 text-white md:p-10">
            <Heart
              size={36}
              strokeWidth={1.5}
              className="text-[#D6A756]"
            />

            <h3 className="mt-6 text-2xl font-bold">
              Built around people.
            </h3>

            <p className="mt-4 leading-7 text-white/70">
              Every part of Nestora is designed to help people make
              better property decisions with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-gray-200 bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#D6A756]">
              What we value
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#12372A] md:text-4xl">
              A better property experience
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 p-6">
              <ShieldCheck
                size={30}
                className="text-[#12372A]"
              />

              <h3 className="mt-5 text-lg font-bold text-[#12372A]">
                Trust
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Clear property information and a straightforward
                experience from discovery to enquiry.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <Users
                size={30}
                className="text-[#12372A]"
              />

              <h3 className="mt-5 text-lg font-bold text-[#12372A]">
                People
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Connecting property seekers with professionals who
                understand their local markets.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <CheckCircle
                size={30}
                className="text-[#12372A]"
              />

              <h3 className="mt-5 text-lg font-bold text-[#12372A]">
                Simplicity
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Useful tools and thoughtful design that make property
                discovery easier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-[#12372A] px-6 py-14 text-center text-white md:px-12">
          <h2 className="text-3xl font-bold md:text-4xl">
            Ready to find your next home?
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-white/70">
            Explore available properties and discover a place that
            fits your lifestyle.
          </p>

          <a
            href="/properties"
            className="mt-8 inline-block rounded-xl bg-[#D6A756] px-7 py-3 text-sm font-semibold text-[#12372A] transition hover:bg-white"
          >
            Explore properties
          </a>
        </div>
      </section>
    </main>
  );
}

export default About;