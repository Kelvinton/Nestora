import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Search } from "lucide-react";
import PropertyCard from "../components/home/PropertyCard";
import properties from "../data/properties";

function Properties() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Read filters from URL
  const locationFromUrl = searchParams.get("location");
  const typeFromUrl = searchParams.get("type");
  const priceFromUrl = searchParams.get("price");
  const bedroomsFromUrl = searchParams.get("bedrooms");
  const listingFromUrl = searchParams.get("listing");

  // Filter states
  const [searchTerm, setSearchTerm] = useState(
    locationFromUrl || ""
  );

  const [propertyType, setPropertyType] = useState(
    typeFromUrl || "All"
  );

  const [priceRange, setPriceRange] = useState(
    priceFromUrl || "All"
  );

  const [bedrooms, setBedrooms] = useState(
    bedroomsFromUrl || "Any"
  );

  const [listingType, setListingType] = useState(
    listingFromUrl === "sale"
      ? "Sale"
      : listingFromUrl === "rent"
      ? "Rent"
      : "All"
  );

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);

  const propertiesPerPage = 6;

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [
    searchTerm,
    propertyType,
    priceRange,
    bedrooms,
    listingType,
  ]);

  // Filter properties
  const filteredProperties = properties.filter((property) => {
    const normalizedSearch = searchTerm
      .trim()
      .toLowerCase()
      .replace(/,/g, "");

    const searchWords = normalizedSearch
      .split(/\s+/)
      .filter(Boolean);

    const searchableText = `
      ${property.title}
      ${property.location}
      ${property.type}
      ${property.listingType}
    `.toLowerCase();

    const matchesSearch = searchWords.every((word) =>
      searchableText.includes(word)
    );

    const matchesType =
      propertyType === "All" ||
      property.type === propertyType;

    const matchesBedrooms =
      bedrooms === "Any" ||
      property.beds >= Number(bedrooms);

    const matchesListingType =
      listingType === "All" ||
      property.listingType === listingType;

    // Price filtering
    let matchesPrice = true;

    if (listingType === "Rent") {
      if (priceRange === "Under 2m") {
        matchesPrice = property.priceValue < 2000000;
      }

      if (priceRange === "2m - 5m") {
        matchesPrice =
          property.priceValue >= 2000000 &&
          property.priceValue <= 5000000;
      }

      if (priceRange === "Above 5m") {
        matchesPrice = property.priceValue > 5000000;
      }
    } else {
      if (priceRange === "Under 70m") {
        matchesPrice = property.priceValue < 70000000;
      }

      if (priceRange === "70m - 100m") {
        matchesPrice =
          property.priceValue >= 70000000 &&
          property.priceValue <= 100000000;
      }

      if (priceRange === "Above 100m") {
        matchesPrice = property.priceValue > 100000000;
      }
    }

    return (
      matchesSearch &&
      matchesType &&
      matchesPrice &&
      matchesBedrooms &&
      matchesListingType 
    );
  });

  // Pagination
  const totalPages = Math.ceil(
    filteredProperties.length / propertiesPerPage
  );

  const startIndex =
    (currentPage - 1) * propertiesPerPage;

  const endIndex =
    startIndex + propertiesPerPage;

  const visibleProperties = filteredProperties.slice(
    startIndex,
    endIndex
  );

  // Update URL when filters change
  useEffect(() => {
    const params = {};

    if (searchTerm.trim()) {
      params.location = searchTerm.trim();
    }

    if (propertyType !== "All") {
      params.type = propertyType;
    }

    if (priceRange !== "All") {
      params.price = priceRange;
    }

    if (bedrooms !== "Any") {
      params.bedrooms = bedrooms;
    }

    if (listingType !== "All") {
      params.listing = listingType.toLowerCase();
    }

    setSearchParams(params, {
      replace: true,
    });
  }, [
    searchTerm,
    propertyType,
    priceRange,
    bedrooms,
    listingType,
    setSearchParams,
  ]);

  // Clear filters
  const clearFilters = () => {
    setSearchTerm("");
    setPropertyType("All");
    setPriceRange("All");
    setBedrooms("Any");
    setListingType("All");
    setCurrentPage(1);
  };

  return (
    <main className="min-h-screen bg-[#F8F7F3]">

      {/* Header */}
      <section className="bg-[#12372A] px-6 py-16 text-white">
        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-semibold uppercase tracking-wider text-[#D6A756]">
            Explore
          </p>

          <h1 className="mt-2 text-3xl font-bold md:text-5xl">
            Find your next home
          </h1>

          <p className="mt-4 max-w-2xl text-white/70">
            Browse our collection of properties and find a place
            that fits your lifestyle.
          </p>

        </div>
      </section>

      {/* Search & Filters */}
      <section className="mx-auto max-w-7xl px-6 py-8">

        <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">

          {/* Search */}
          <div className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3">

            <Search
              size={20}
              className="text-gray-400"
            />

            <input
              type="text"
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
              placeholder="Search by property or location..."
              className="w-full bg-transparent text-sm outline-none"
            />

          </div>

          {/* Filters */}
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

            {/* Property Type */}
            <div className="rounded-xl border border-gray-200 px-4 py-3">

              <label className="block text-xs font-medium text-gray-500">
                Property Type
              </label>

              <select
                value={propertyType}
                onChange={(e) => {
                  setListingType(e.target.value);
                  setPriceRange("All");
                }}
                className="mt-1 w-full bg-transparent text-sm font-semibold text-[#12372A] outline-none"
              >
                <option value="All">
                  All Types
                </option>

                <option value="Apartment">
                  Apartment
                </option>

                <option value="House">
                  House
                </option>

                <option value="Duplex">
                  Duplex
                </option>

                <option value="Land">
                  Land
                </option>
              </select>

            </div>

            {/* Price */}
            <div className="rounded-xl border border-gray-200 px-4 py-3">

              <label className="block text-xs font-medium text-gray-500">
                Price Range
              </label>

              <select
                value={priceRange}
                onChange={(e) =>
                  setPriceRange(e.target.value)
                }
                className="mt-1 w-full bg-transparent text-sm font-semibold text-[#12372A] outline-none"
              >
                <option value="All">
                  All Prices
                </option>

                {listingType === "Rent" ? (
                  <>
                    <option value="Under 2m">
                      Under ₦2m
                    </option>

                    <option value="2m - 5m">
                      ₦2m - ₦5m
                    </option>

                    <option value="Above 5m">
                      Above ₦5m
                    </option>
                  </>
                ) : (
                  <>
                    <option value="Under 70m">
                      Under ₦70m
                    </option>

                    <option value="70m - 100m">
                      ₦70m - ₦100m
                    </option>

                    <option value="Above 100m">
                      Above ₦100m
                    </option>
                  </>
                )}
              </select>

            </div>

            {/* Bedrooms */}
            <div className="rounded-xl border border-gray-200 px-4 py-3">

              <label className="block text-xs font-medium text-gray-500">
                Bedrooms
              </label>

              <select
                value={bedrooms}
                onChange={(e) =>
                  setBedrooms(e.target.value)
                }
                className="mt-1 w-full bg-transparent text-sm font-semibold text-[#12372A] outline-none"
              >
                <option value="Any">
                  Any Bedrooms
                </option>

                <option value="1">
                  1+ Bedroom
                </option>

                <option value="2">
                  2+ Bedrooms
                </option>

                <option value="3">
                  3+ Bedrooms
                </option>

                <option value="4">
                  4+ Bedrooms
                </option>

                <option value="5">
                  5+ Bedrooms
                </option>
              </select>

            </div>

            {/* Listing */}
            <div className="rounded-xl border border-gray-200 px-4 py-3">

              <label className="block text-xs font-medium text-gray-500">
                Listing
              </label>

              <select
                value={listingType}
                onChange={(e) =>
                  setListingType(e.target.value)
                }
                className="mt-1 w-full bg-transparent text-sm font-semibold text-[#12372A] outline-none"
              >
                <option value="All">
                  Buy & Rent
                </option>

                <option value="Sale">
                  For Sale
                </option>

                <option value="Rent">
                  For Rent
                </option>
              </select>

            </div>

          </div>

          {/* Clear filters */}
          <div className="mt-4 flex justify-end">

            <button
              onClick={clearFilters}
              className="text-sm font-semibold text-[#12372A] transition-colors hover:text-[#D6A756]"
            >
              Clear filters
            </button>

          </div>

        </div>

      </section>

      {/* Property Results */}
      <section className="mx-auto max-w-7xl px-6 pb-16">

        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

          <h2 className="text-2xl font-bold text-[#12372A]">
            Properties
          </h2>

          {filteredProperties.length > 0 && (
            <p className="text-sm text-gray-500">
              Showing {startIndex + 1}–
              {Math.min(
                endIndex,
                filteredProperties.length
              )}{" "}
              of {filteredProperties.length} properties
            </p>
          )}

        </div>

        {filteredProperties.length > 0 ? (

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {visibleProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
              />
            ))}

          </div>

        ) : (

          <div className="rounded-2xl border border-gray-200 bg-white py-16 text-center">

            <h3 className="text-lg font-semibold text-[#12372A]">
              No properties found
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Try adjusting your search or filters.
            </p>

            <button
              onClick={clearFilters}
              className="mt-5 rounded-xl bg-[#12372A] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#315C48]"
            >
              Clear filters
            </button>

          </div>

        )}

        {/* Pagination */}
        {totalPages > 1 && (

          <div className="mt-10 flex items-center justify-center gap-2">

            <button
              onClick={() =>
                setCurrentPage((page) => page - 1)
              }
              disabled={currentPage === 1}
              className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-[#12372A] transition hover:border-[#12372A] disabled:cursor-not-allowed disabled:opacity-40"
            >
              Previous
            </button>

            {Array.from(
              { length: totalPages },
              (_, index) => (
                <button
                  key={index + 1}
                  onClick={() =>
                    setCurrentPage(index + 1)
                  }
                  className={`h-10 w-10 rounded-lg text-sm font-semibold transition ${
                    currentPage === index + 1
                      ? "bg-[#12372A] text-white"
                      : "border border-gray-200 text-[#12372A] hover:border-[#12372A]"
                  }`}
                >
                  {index + 1}
                </button>
              )
            )}

            <button
              onClick={() =>
                setCurrentPage((page) => page + 1)
              }
              disabled={currentPage === totalPages}
              className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-[#12372A] transition hover:border-[#12372A] disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next
            </button>

          </div>

        )}

      </section>

    </main>
  );
}

export default Properties;