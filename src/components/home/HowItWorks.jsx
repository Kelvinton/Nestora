import { Search, Heart, CalendarCheck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Search properties",
    description:
      "Tell us what you're looking for by location, property type, price, and lifestyle preferences.",
  },
  {
    number: "02",
    icon: Heart,
    title: "Save your favourites",
    description:
      "Keep properties you like in one place so you can easily compare and revisit them.",
  },
  {
    number: "03",
    icon: CalendarCheck,
    title: "Take the next step",
    description:
      "Contact an agent or schedule a viewing when you find a property that feels right.",
  },
];

function HowItWorks() {
  return (
    <section className="bg-[#F8F7F3] px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D6A756]">
            How it works
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#12372A] sm:text-4xl">
            Finding your next home, made simple
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-500 sm:text-base">
            From your first search to your first viewing, Nestora
            keeps the property discovery process straightforward.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-12 grid gap-8 md:grid-cols-3 md:gap-6">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8"
              >
                {/* Number */}
                <span className="absolute right-5 top-5 text-sm font-bold text-[#D6A756]/60">
                  {step.number}
                </span>

                {/* Icon */}
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#12372A]/10">
                  <Icon
                    size={26}
                    className="text-[#12372A]"
                  />
                </div>

                {/* Content */}
                <h3 className="mt-6 text-lg font-bold text-[#12372A]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;