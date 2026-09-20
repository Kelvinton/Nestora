import { Link } from "react-router-dom";
import {
  Bath,
  BedDouble,
  Heart,
  MapPin,
  Ruler,
} from "lucide-react";
import { useFavorites } from "../../context/FavoritesContext";

function PropertyCard({ property }) {
  const { toggleFavorite, isFavorite } = useFavorites();

  const favorite = isFavorite(property.id);

  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Property Image */}
      <div className="relative h-64 overflow-hidden">
        <Link to={`/properties/${property.id}`}>
          <img
            src={property.images[0]}
            alt={property.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/10" />
        </Link>

        {/* Listing Type */}
        <div className="absolute left-4 top-4">
          <span
            className={`rounded-full px-3 py-1.5 text-xs font-semibold shadow-sm ${
              property.listingType === "Rent"
                ? "bg-[#12372A] text-white"
                : "bg-[#D6A756] text-white"
            }`}
          >
            {property.status}
          </span>
        </div>

        {/* Favorite Button */}
        <button
          type="button"
          onClick={() => toggleFavorite(property)}
          aria-label={
            favorite
              ? "Remove from favorites"
              : "Add to favorites"
          }
          className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 shadow-md backdrop-blur-sm transition duration-300 hover:scale-110 ${
            favorite
              ? "text-red-500"
              : "text-gray-600 hover:text-red-500"
          }`}
        >
          <Heart
            size={19}
            fill={favorite ? "currentColor" : "none"}
          />
        </button>
      </div>

      {/* Property Information */}
      <div className="p-5">
        <Link to={`/properties/${property.id}`}>
          <h3 className="line-clamp-1 text-lg font-bold text-[#12372A] transition hover:text-[#D6A756]">
            {property.title}
          </h3>
        </Link>

        {/* Location */}
        <div className="mt-2 flex items-center gap-1.5 text-sm text-gray-500">
          <MapPin size={16} className="shrink-0" />
          <span>{property.location}</span>
        </div>

        {/* Property Details */}
        <div className="mt-4 flex items-center gap-4 border-y border-gray-100 py-4 text-sm text-gray-600">
          {property.type === "Land" ? (
            <>
              <span className="flex items-center gap-1.5">
                <Ruler size={16} />
                {property.area}
              </span>

              <span>Residential Land</span>
            </>
          ) : (
            <>
              <span className="flex items-center gap-1.5">
                <BedDouble size={16} />
                {property.beds}
              </span>

              <span className="flex items-center gap-1.5">
                <Bath size={16} />
                {property.baths}
              </span>

              <span className="flex items-center gap-1.5">
                <Ruler size={16} />
                {property.area}
              </span>
            </>
          )}
        </div>

        {/* Price + Details */}
        <div className="mt-5 flex items-end justify-between gap-4">
          <div>
            <p className="text-xl font-bold text-[#12372A]">
              {property.price}
            </p>

            {property.pricePeriod === "year" && (
              <p className="mt-0.5 text-xs text-gray-400">
                per year
              </p>
            )}
          </div>

          <Link
            to={`/properties/${property.id}`}
            className="text-sm font-semibold text-[#12372A] transition hover:text-[#D6A756]"
          >
            View details →
          </Link>
        </div>
      </div>
    </article>
  );
}

export default PropertyCard;