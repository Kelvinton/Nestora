import { useState } from "react";
import { useNavigate } from "react-router-dom";
import heroProperty from "../../assets/images/hero-property.jpg";

function Hero() {
  const navigate = useNavigate();

  const [location, setLocation] = useState("");
  const [listingType, setListingType] = useState("All");
  const [propertyType, setPropertyType] = useState("Any");
  const [priceRange, setPriceRange] = useState("All");

  const handleSearch = () => {
    const params = new URLSearchParams();

    if (location.trim()) {
      params.set("location", location.trim());
    }

    if (listingType !== "All") {
      params.set(
        "listing",
        listingType === "Buy" ? "sale" : "rent"
      );
    }

    if (propertyType !== "Any") {
      params.set("type", propertyType);
    }

    if (priceRange !== "All") {
      params.set("price", priceRange);
    }

    navigate(`/properties?${params.toString()}`);
  };

  return (
    <section className="relative min-h-155 overflow-hidden">
      {/* Background image */}
      <img
        src={heroProperty}
        alt="Beautiful modern home"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-155 max-w-7xl items-center px-5 py-7 sm:px-6 lg:px-8">
        <div className="w-full max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D6A756]">
            Your next home starts here
          </p>

          <h1 className="mt-4 max-w-2xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Find a place you'll love.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
            Discover homes and properties that fit your lifestyle,
            budget, and future.
          </p>

          {/* Search box */}
          <div className="mt-8 rounded-2xl bg-white p-4 shadow-2xl sm:p-5">
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
              {/* Location */}
              <div>
                <label
                  htmlFor="location"
                  className="mb-2 block text-xs font-semibold text-gray-500"
                >
                  Location
                </label>

                <input
                  id="location"
                  type="text"
                  placeholder="e.g. Lekki"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-[#1F2933] outline-none transition focus:border-[#12372A]"
                />
              </div>

              {/* Listing type */}
              <div>
                <label
                  htmlFor="listing"
                  className="mb-2 block text-xs font-semibold text-gray-500"
                >
                  Listing
                </label>

                <select
                  id="listing"
                  value={listingType}
                  onChange={(e) => {
                    setListingType(e.target.value);
                    setPriceRange("All");
                  }}
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#1F2933] outline-none transition focus:border-[#12372A]"
                >
                  <option value="All">Buy or Rent</option>
                  <option value="Buy">Buy</option>
                  <option value="Rent">Rent</option>
                </select>
              </div>

              {/* Property type */}
              <div>
                <label
                  htmlFor="propertyType"
                  className="mb-2 block text-xs font-semibold text-gray-500"
                >
                  Property Type
                </label>

                <select
                  id="propertyType"
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#1F2933] outline-none transition focus:border-[#12372A]"
                >
                  <option value="Any">Any Property</option>
                  <option value="Apartment">Apartment</option>
                  <option value="House">House</option>
                  <option value="Duplex">Duplex</option>
                  <option value="Land">Land</option>
                </select>
              </div>

              {/* Price */}
              <div>
                <label
                  htmlFor="price"
                  className="mb-2 block text-xs font-semibold text-gray-500"
                >
                  Price Range
                </label>

                <select
                  id="price"
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#1F2933] outline-none transition focus:border-[#12372A]"
                >
                  <option value="All">Any Price</option>
                  <option value="Under 70m">Under ₦70m</option>
                  <option value="70m - 100m">₦70m - ₦100m</option>
                  <option value="Above 100m">Above ₦100m</option>
                </select>
              </div>
            </div>

            {/* Search button */}
            <button
              type="button"
              onClick={handleSearch}
              className="mt-3 w-full rounded-xl bg-[#12372A] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#315C48]"
            >
              Search Properties
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;