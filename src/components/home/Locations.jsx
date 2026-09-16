import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import lagos from "../../assets/images/lagosImage.jpg";

const locations = [
  {
    name: "Lagos",
    properties: "450+ Properties",
    image:[lagos], 
  },
  {
    name: "Abuja",
    properties: "280+ Properties",
    image:
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Port Harcourt",
    properties: "180+ Properties",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Ibadan",
    properties: "150+ Properties",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=900&q=80",
  },
];

function Locations() {
  return (
    <section className="bg-[#F8F7F3] px-4 py-20 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#12372A]/70">
              Explore Locations
            </p>

            <h2 className="max-w-2xl text-3xl font-semibold leading-tight text-[#1F2933] md:text-5xl">
              Discover homes in popular locations.
            </h2>

            <p className="mt-4 max-w-xl text-[#1F2933]/65">
              Explore properties across some of the most sought-after cities
              and find a location that feels right for you.
            </p>
          </div>

          <Link
            to="/properties"
            className="group flex w-fit items-center gap-2 font-medium text-[#12372A]"
          >
            View all properties
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Location Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {locations.map((location) => (
            <Link
              key={location.name}
              to={`/properties?location=${encodeURIComponent(location.name)}`}
              className="group relative h-80 overflow-hidden rounded-2xl"
            >
              {/* Image */}
              <img
                src={location.image}
                alt={`${location.name} properties`}
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 transition group-hover:bg-black/50" />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <div className="mb-2 flex items-center gap-2 text-sm text-white/80">
                  <MapPin size={16} />
                  <span>Explore</span>
                </div>

                <h3 className="text-2xl font-semibold">
                  {location.name}
                </h3>

                <p className="mt-1 text-sm text-white/75">
                  {location.properties}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Locations;