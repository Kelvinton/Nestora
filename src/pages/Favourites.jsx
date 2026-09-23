import { Link } from "react-router-dom";
import {
  Heart,
  Home,
  KeyRound,
  Building2,
} from "lucide-react";
import PropertyCard from "../components/home/PropertyCard";
import { useFavorites } from "../context/FavoritesContext";

function Favorites() {
  const { favorites, clearFavorites } = useFavorites();

  // Summary counts
  const saleCount = favorites.filter(
    (property) => property.listingType === "Sale"
  ).length;

  const rentCount = favorites.filter(
    (property) => property.listingType === "Rent"
  ).length;

  return (
    <main className="min-h-screen bg-[#F8F7F3]">

      {/* Header */}
      <section className="bg-[#12372A] px-6 py-16 text-white">
        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-semibold uppercase tracking-wider text-[#D6A756]">
            Your collection
          </p>

          <h1 className="mt-2 text-3xl font-bold md:text-5xl">
            Saved properties
          </h1>

          <p className="mt-4 max-w-2xl text-white/70">
            Keep track of the properties you're interested in
            and easily come back to them later.
          </p>

        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">

        {favorites.length > 0 ? (
          <>

            {/* Summary */}
            <div className="grid gap-4 sm:grid-cols-3">

              {/* Total */}
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-sm text-gray-500">
                      Total saved
                    </p>

                    <p className="mt-1 text-2xl font-bold text-[#12372A]">
                      {favorites.length}
                    </p>
                  </div>

                  <div className="rounded-xl bg-[#12372A]/10 p-3">
                    <Heart
                      size={22}
                      className="text-[#12372A]"
                    />
                  </div>

                </div>

              </div>

              {/* For Sale */}
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-sm text-gray-500">
                      For sale
                    </p>

                    <p className="mt-1 text-2xl font-bold text-[#12372A]">
                      {saleCount}
                    </p>
                  </div>

                  <div className="rounded-xl bg-[#D6A756]/15 p-3">
                    <Home
                      size={22}
                      className="text-[#D6A756]"
                    />
                  </div>

                </div>

              </div>

              {/* For Rent */}
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-sm text-gray-500">
                      For rent
                    </p>

                    <p className="mt-1 text-2xl font-bold text-[#12372A]">
                      {rentCount}
                    </p>
                  </div>

                  <div className="rounded-xl bg-[#12372A]/10 p-3">
                    <KeyRound
                      size={22}
                      className="text-[#12372A]"
                    />
                  </div>

                </div>

              </div>

            </div>

            {/* Saved properties heading */}
            <div className="mt-12 mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

              <div>
                <h2 className="text-2xl font-bold text-[#12372A]">
                  Your saved properties
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Properties you've added to your collection.
                </p>
              </div>

              <button
                onClick={() => {
                  const confirmed = window.confirm(
                    "Are you sure you want to remove all saved properties?"
                  );

                  if (confirmed) {
                    clearFavorites();
                  }
                }}
                className="cursor-pointer self-start text-sm font-semibold text-red-500 transition hover:text-red-600 sm:self-auto"
              >
                Clear all
              </button>

            </div>

            {/* Property cards */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {favorites.map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                />
              ))}

            </div>

          </>
        ) : (

          /* Empty state */
          <div className="mx-auto max-w-2xl rounded-2xl border border-gray-200 bg-white px-6 py-20 text-center shadow-sm">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#12372A]/10">
              <Heart
                size={32}
                strokeWidth={1.5}
                className="text-[#12372A]"
              />
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-[#D6A756]">
              Your collection is empty
            </p>

            <h2 className="mt-2 text-2xl font-bold text-[#12372A]">
              No saved properties yet
            </h2>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-500">
              Found a property you like? Tap the heart icon to
              save it here and easily come back to it later.
            </p>

            <Link
              to="/properties"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#12372A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#315C48]"
            >
              <Building2 size={18} />
              Explore properties
            </Link>

          </div>

        )}

      </section>

    </main>
  );
}

export default Favorites;