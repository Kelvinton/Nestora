import {
  ShieldCheck,
  Users,
  Search,
  Heart,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted listings",
    description:
      "Explore carefully presented properties with clear information to help you make informed decisions.",
  },
  {
    icon: Search,
    title: "Easy property search",
    description:
      "Find properties by location, type, price range, and other preferences without unnecessary complexity.",
  },
  {
    icon: Users,
    title: "People-focused service",
    description:
      "Connect with property professionals who can guide you through your property search.",
  },
  {
    icon: Heart,
    title: "Built around you",
    description:
      "Your lifestyle, budget, and goals stay at the centre of the property discovery experience.",
  },
];

function WhyChooseNestora() {
  return (
    <section className="bg-[#F8F7F3] px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D6A756]">
            Why Nestora
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#12372A] sm:text-4xl">
            A simpler way to find your next home
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-500 sm:text-base">
            We make property discovery easier by bringing useful
            information, simple tools, and people together in one
            experience.
          </p>
        </div>

        {/* Feature cards */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#12372A]/10">
                  <Icon
                    size={24}
                    className="text-[#12372A]"
                  />
                </div>

                <h3 className="mt-5 text-lg font-bold text-[#12372A]">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseNestora;