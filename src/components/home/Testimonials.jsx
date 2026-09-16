import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Okafor",
    location: "Lagos",
    initials: "SO",
    review:
      "Nestora made finding a home much easier. I loved how simple it was to explore different properties and compare my options.",
  },
  {
    name: "David James",
    location: "Abuja",
    initials: "DJ",
    review:
      "The property search was straightforward, and the filters helped me narrow down exactly what I was looking for.",
  },
  {
    name: "Grace Williams",
    location: "Port Harcourt",
    initials: "GW",
    review:
      "I found several properties that matched my budget and preferences. The whole experience felt simple and organized.",
  },
];

function Testimonials() {
  return (
    <section className="bg-white px-4 py-20 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#12372A]/70">
            Testimonials
          </p>

          <h2 className="text-3xl font-semibold leading-tight text-[#1F2933] md:text-5xl">
            What people are saying.
          </h2>

          <p className="mt-4 text-[#1F2933]/65">
            See what our community has to say about their property discovery
            experience.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-2xl border border-gray-100 bg-[#F8F7F3] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Stars */}
              <div className="mb-6 flex gap-1">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={17}
                    fill="currentColor"
                    className="text-[#12372A]"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="min-h-30 leading-7 text-[#1F2933]/75">
                "{testimonial.review}"
              </p>

              {/* User */}
              <div className="mt-6 flex items-center gap-3 border-t border-gray-200 pt-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#12372A] text-sm font-semibold text-white">
                  {testimonial.initials}
                </div>

                <div>
                  <h3 className="font-semibold text-[#1F2933]">
                    {testimonial.name}
                  </h3>

                  <p className="text-sm text-[#1F2933]/55">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;