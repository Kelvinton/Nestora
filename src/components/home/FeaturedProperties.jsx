import { Link } from "react-router-dom";
import PropertyCard from "./PropertyCard";
import properties from "../../data/properties";

function FeaturedProperties() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-10 items-end justify-between gap-6 md:flex">

            <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-[#D6A756]">
                Featured
                </p>

                <h2 className="mt-2 text-3xl font-bold text-[#12372A] md:text-4xl">
                Properties you'll love
                </h2>

                <p className="mt-3 max-w-2xl text-[#6B7280]">
                Explore some of the most desirable properties available
                on Nestora.
                </p>
            </div>


            <Link 
            to="/properties"
            className="hidden shrink-0 text-sm font-semibold text-[#12372A] transition-colors hover:text-[#D6A756] md:block">
                View all properties →
            </Link>

            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {properties.map((property) => (
                <PropertyCard
                key={property.id}
                property={property}
                />
            ))}
            </div>

            <div className="mt-8 text-center md:hidden">
                <Link
                    to="/properties"
                    className="text-sm font-semibold text-[#12372A] transition-colors hover:text-[#D6A756]"
                >
                    View all properties →
                </Link>
            </div>

        </div>
    </section>
  );
}

export default FeaturedProperties;