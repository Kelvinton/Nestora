import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Home Buyer",
    text: "Nestora made it much easier to narrow down the kind of property I was looking for. The experience felt simple and straightforward.",
  },
  {
    name: "David Williams",
    role: "Property Investor",
    text: "I liked how easy it was to explore different properties and compare the details before deciding which ones to follow up on.",
  },
  {
    name: "Amaka Okafor",
    role: "Tenant",
    text: "The property search experience was clean and easy to understand. I could quickly find listings that matched what I wanted.",
  },
];

function Testimonials() {
  return (
    <section className="bg-white px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D6A756]">
            Testimonials
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#12372A] sm:text-4xl">
            What people say about Nestora
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-500 sm:text-base">
            A great property experience should feel simple,
            transparent, and centred around the person searching.
          </p>
        </div>

        {/* Testimonials */}
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="flex h-full flex-col rounded-2xl border border-gray-200 bg-[#F8F7F3] p-6 sm:p-8"
            >
              {/* Quote icon */}
              <div className="flex items-center justify-between">
                <Quote
                  size={30}
                  className="text-[#D6A756]"
                />

                {/* Stars */}
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={15}
                      fill="currentColor"
                      className="text-[#D6A756]"
                    />
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <p className="mt-6 flex-1 text-sm leading-7 text-gray-600">
                "{testimonial.text}"
              </p>

              {/* Person */}
              <div className="mt-6 border-t border-gray-200 pt-5">
                <p className="font-semibold text-[#12372A]">
                  {testimonial.name}
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  {testimonial.role}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;