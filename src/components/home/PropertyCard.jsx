import { useFavorites } from "../../context/FavoritesContext";
import { Bath, BedDouble, Heart, MapPin, Ruler } from "lucide-react";
import { Link } from "react-router-dom";

function PropertyCard({ property }) {
  const { toggleFavorite, isFavorite } = useFavorites();

  const favorite = isFavorite(property.id);

  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Property Image */}
      <div className="relative h-64 overflow-hidden">

        <img
         src={property.images[0]}
          alt={property.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Status */}
        <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#12372A]">
          {property.status}
        </span>

        {/* Favorite */}
        <button
          onClick={() => toggleFavorite(property)}
          className={`absolute right-4 top-4 rounded-full p-2 shadow-sm transition ${
            favorite
              ? "bg-[#D6A756] text-white"
              : "bg-white text-[#12372A] hover:bg-[#12372A] hover:text-white"
          }`}
          aria-label={
            isFavorite
              ? "Remove property from favorites"
              : "Save property"
          }
        >
          <Heart
            size={18}
            fill={favorite ? "currentColor" : "none"}
          />
        </button>
      </div>

      {/* Property Information */}
      <div className="p-5">

        <h3 className="text-lg font-semibold text-[#12372A]">
          {property.title}
        </h3>

        {/* Location */}
        <p className="mt-2 flex items-center gap-1 text-sm text-gray-500">
          <MapPin size={15} />
          {property.location}
        </p>

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
        <div className="mt-5 flex items-end justify-between">

          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
              Price
            </p>

            <p className="mt-1 text-xl font-bold text-[#12372A]">
              {property.price}
            </p>
          </div>

          <Link
            to={`/properties/${property.id}`}
            className="text-sm font-semibold text-[#12372A] transition-colors hover:text-[#D6A756]"
          >
            View details →
          </Link>

        </div>

      </div>
    </div>
  );
}

export default PropertyCard;