import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import PropertyCard from "../components/home/PropertyCard";
import { useFavorites } from "../context/FavoritesContext";

function Favorites() {
  const { favorites, clearFavorites } = useFavorites();

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

          <p className="mt-4 text-white/70">
            Keep track of the properties you're interested in.
          </p>
        </div>
      </section>

      {/* Properties */}
      <section className="mx-auto max-w-7xl px-6 py-12">

        {favorites.length > 0 ? (
          <>
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-gray-500">
                {favorites.length}{" "}
                {favorites.length === 1 ? "property" : "properties"} saved
              </p>

              <button
                onClick={() => {
                  const confirmed = window.confirm(
                    "Are you sure you want to remove all saved properties?"
                  );

                  if (confirmed) {
                    clearFavorites();
                  }
                }}
                className="text-sm font-semibold text-red-500 transition hover:text-red-600"
              >
                Clear all
              </button>
            </div>

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
          <div className="rounded-2xl border border-gray-200 bg-white px-6 py-20 text-center">
            
            <Heart
              size={42}
              strokeWidth={1.5}
              className="mx-auto text-gray-300"
            />

            <h2 className="mt-5 text-xl font-bold text-[#12372A]">
              No saved properties yet
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">
              Properties you save will appear here so you can
              easily find them later.
            </p>

            <Link
              to="/properties"
              className="mt-6 inline-block rounded-xl bg-[#12372A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#315C48]"
            >
              Explore properties
            </Link>
          </div>
        )}

      </section>
    </main>
  );
}

export default Favorites;