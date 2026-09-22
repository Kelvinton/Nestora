import { Link } from "react-router-dom";
import PropertyCard from "./PropertyCard";
import properties from "../../data/properties";

function FeaturedProperties() {
  const featuredProperties = properties.slice(0, 6);

  return (
    <section className="bg-white px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D6A756]">
              Featured properties
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#12372A] sm:text-4xl">
              Homes worth taking a closer look at
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-500 sm:text-base">
              Explore some of our featured properties selected to
              help you find your next home.
            </p>
          </div>

          <Link
            to="/properties"
            className="shrink-0 text-sm font-semibold text-[#12372A] transition hover:text-[#D6A756]"
          >
            View all properties →
          </Link>
        </div>

        {/* Property grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProperties;