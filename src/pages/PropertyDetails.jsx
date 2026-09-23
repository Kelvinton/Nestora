import { useState } from "react";
import { useFavorites } from "../context/FavoritesContext";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Heart,
  MapPin,
} from "lucide-react";
import properties from "../data/properties";
import PropertyCard from "../components/home/PropertyCard";
import agents from "../data/agents";
import ContactModal from "../components/modals/ContactModal";
import ViewingModal from "../components/modals/ViewingModal";

function PropertyDetails() {
    const [isViewingOpen, setIsViewingOpen] = useState(false);
    const { id } = useParams();

    const property = properties.find(
        (property) => property.id === Number(id)
    );

    const similarProperties = property
    ? properties
        .filter((item) => item.id !== property.id)
        .map((item) => {
            let score = 0;

            // Same property type = strong match
            if (item.type === property.type) {
            score += 4;
            }

            // Same listing type = important
            if (item.listingType === property.listingType) {
            score += 3;
            }

            // Same location = strong match
            if (item.location === property.location) {
            score += 4;
            }

            // Similar bedroom count
            if (
            item.type !== "Land" &&
            property.type !== "Land" &&
            Math.abs(item.beds - property.beds) <= 1
            ) {
            score += 2;
            }

            // Similar price range
            if (
                property.priceValue > 0 &&
                Math.abs(item.priceValue - property.priceValue) /
                    property.priceValue <=
                    0.25
                ) {
                score += 2;
            }

            return {
            ...item,
            score,
            };
        })
        .sort((a, b) => b.score - a.score)
        .slice(0, 3)
    : [];

    const propertyStats = property
    ? [
        ...(property.type !== "Land"
            ? [
                {
                label: "Bedrooms",
                value: property.beds,
                },
                {
                label: "Bathrooms",
                value: property.baths,
                },
            ]
            : []),

        {
            label: "Property type",
            value: property.type,
        },

        {
            label: "Area",
            value: property.area,
        },
        ]
    : [];

    const agent = agents.find(
        (agent) => agent.id === property?.agentId
    );
    
   
    
    const [selectedImage, setSelectedImage] = useState(0);
    const nextImage = () => {
        setSelectedImage((current) =>
            current === property.images.length - 1 ? 0 : current + 1
        );
        };

        const previousImage = () => {
        setSelectedImage((current) =>
            current === 0 ? property.images.length - 1 : current - 1
        );
    };
    const [isContactOpen, setIsContactOpen] = useState(false);


    const { toggleFavorite, isFavorite } = useFavorites();
    const favorite = isFavorite(property?.id);

    if (!property) {
        return (
        <div className="flex min-h-screen items-center justify-center bg-[#F8F7F3]">
            <div className="text-center">
            <h1 className="text-3xl font-bold text-[#12372A]">
                Property not found
            </h1>

            <Link
                to="/"
                className="mt-4 inline-block text-sm font-semibold text-[#D6A756]"
            >
                ← Back to home
            </Link>
            </div>
        </div>
        );
    }

    return (
        <main className="min-h-screen bg-[#F8F7F3]">

            {/* Back Button */}
            <div className="mx-auto max-w-7xl px-5 pt-6 sm:px-6 sm:pt-8 lg:px-8">
                <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#12372A] transition-colors hover:text-[#D6A756]"
                >
                <ArrowLeft size={18} />
                Back to properties
                </Link>
            </div>

            {/* Property Gallery */}
            <div className="mx-auto mt-6 grid max-w-7xl gap-3 px-5 sm:px-6 md:grid-cols-4 lg:px-8">
                {/* Main image */}
                <div className="relative h-75 overflow-hidden rounded-2xl sm:h-105 md:col-span-3 md:h-130">
                    <img
                    src={property.images[selectedImage]}
                    alt={property.title}
                    className="h-full w-full object-cover"
                    />

                    {/* Previous button */}
                    <button
                    type="button"
                    onClick={previousImage}
                    aria-label="Previous image"
                    className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#12372A] shadow-md transition hover:bg-white sm:left-4"
                    >
                    <ChevronLeft size={20} />
                    </button>

                    {/* Next button */}
                    <button
                    type="button"
                    onClick={nextImage}
                    aria-label="Next image"
                    className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#12372A] shadow-md transition hover:bg-white sm:right-4"
                    >
                    <ChevronRight size={20} />
                    </button>
                </div>

                {/* Thumbnails */}
                <div className="grid grid-cols-3 gap-3 md:grid-cols-1">
                    {property.images.map((image, index) => (
                    <button
                        key={`${image}-${index}`}
                        type="button"
                        onClick={() => setSelectedImage(index)}
                        className={`relative h-20 overflow-hidden rounded-xl sm:h-24 ${
                        selectedImage === index
                            ? "ring-2 ring-[#D6A756]"
                            : ""
                        }`}
                    >
                        <img
                        src={image}
                        alt={`${property.title} ${index + 1}`}
                        className="h-full w-full object-cover"
                        />
                    </button>
                    ))}
                </div>
            </div>  

            {/* Property Header */}
            <div className="mx-auto mt-8 max-w-7xl px-5 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                    {/* Property information */}
                    <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full bg-[#D6A756] px-3 py-1 text-xs font-semibold text-white">
                        {property.status}
                        </span>

                        <span className="text-sm text-gray-500">
                        {property.type}
                        </span>
                    </div>

                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-[#12372A] sm:text-4xl">
                        {property.title}
                    </h1>

                    <div className="mt-3 flex items-start gap-2 text-sm text-gray-500 sm:text-base">
                        <MapPin className="mt-0.5 shrink-0" size={18} />
                        <span>{property.location}</span>
                    </div>
                    </div>

                    {/* Price + Favourite */}
                    <div className="flex items-center justify-between gap-4 lg:shrink-0 lg:pt-1">
                    <div>
                        <p className="text-xl font-bold text-[#12372A] sm:text-2xl lg:text-right">
                        {property.price}
                        </p>

                        {property.pricePeriod === "year" && (
                        <p className="mt-0.5 text-sm text-gray-400 lg:text-right">
                            per year
                        </p>
                        )}
                    </div>

                    <button
                        type="button"
                        onClick={() => toggleFavorite(property)}
                        aria-label={
                        favorite
                            ? "Remove from favorites"
                            : "Add to favorites"
                        }
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition ${
                        favorite
                            ? "border-red-200 bg-red-50 text-red-500"
                            : "border-gray-200 bg-white text-gray-500 hover:border-[#D6A756] hover:text-[#D6A756]"
                        }`}
                    >
                        <Heart
                        size={20}
                        fill={favorite ? "currentColor" : "none"}
                        />
                    </button>
                    </div>
                </div>
            </div>

            
            {/* Property Stats */}
            <div className="mx-auto mt-8 max-w-7xl px-5 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-gray-200 bg-white sm:grid-cols-4">
                    {propertyStats.map((stat) => (
                    <div
                        key={stat.label}
                        className="border-b border-gray-200 p-4 last:border-b-0 sm:border-b-0 sm:border-r sm:p-5 sm:last:border-r-0"
                    >
                        <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                        {stat.label}
                        </p>

                        <p className="mt-2 wrap-break-wordbreak-words text-base font-bold text-[#12372A] sm:text-lg">
                        {stat.value}
                        </p>
                    </div>
                    ))}
                </div>
            </div>

            {/* Property Description */}
            <section className="mx-auto mt-10 max-w-7xl px-5 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                    <h2 className="text-2xl font-bold text-[#12372A] sm:text-3xl">
                    About this property
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                    {property.description}
                    </p>
                </div>
            </section>
            

            {/* Property Features */}
            <section className="mx-auto mt-10 max-w-7xl px-5 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-bold text-[#12372A] sm:text-3xl">
                    Property features
                </h2>

                <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {property.amenities.map((amenity) => (
                    <div
                        key={amenity}
                        className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4"
                    >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#12372A]/10">
                        <CheckCircle
                            size={18}
                            className="text-[#12372A]"
                        />
                        </div>

                        <span className="text-sm font-medium text-gray-700">
                        {amenity}
                        </span>
                    </div>
                    ))}
                </div>
            </section>

           {/* Property CTA */}
            <div className="mx-auto mt-10 max-w-7xl px-5 sm:px-6 lg:px-8">
                <div className="rounded-2xl bg-[#12372A] p-6 text-white sm:p-8">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                    <div className="max-w-2xl">
                        <p className="text-sm font-semibold uppercase tracking-wider text-[#D6A756]">
                        Interested in this property?
                        </p>

                        <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                        Take the next step
                        </h2>

                        <p className="mt-2 text-sm leading-6 text-white/70 sm:text-base">
                        Speak with our property team or schedule a viewing
                        to see this property in person.
                        </p>
                    </div>

                    <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto">
                        <button
                        type="button"
                        onClick={() => setIsContactOpen(true)}
                        className="w-full rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#12372A] transition hover:bg-gray-100 sm:w-auto"
                        >
                        Contact Agent
                        </button>

                        <button
                        type="button"
                        onClick={() => setIsViewingOpen(true)}
                        className="w-full rounded-xl bg-[#D6A756] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#c39745] sm:w-auto"
                        >
                        Schedule Viewing
                        </button>
                    </div>
                    </div>
                </div>
            </div>

            {/* Agent Information */}
            {agent && (
                <section className="mt-10 mx-8">
                    {/* agent card */}
                    <h2 className="text-2xl font-bold text-[#12372A]">
                        Your property agent
                    </h2>

                    <div className="mt-5 rounded-2xl border border-gray-200 bg-white p-6">
                        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-4">
                            {/* Agent Avatar */}
                            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#12372A] text-lg font-bold text-white">
                            {agent?.name
                                ?.split(" ")
                                .map((name) => name[0])
                                .join("")
                                .slice(0, 2)}
                            </div>

                            <div>
                            <h3 className="text-lg font-bold text-[#12372A]">
                                {agent?.name}
                            </h3>

                            <p className="mt-1 text-sm font-medium text-[#D6A756]">
                                {agent?.role}
                            </p>

                            <div className="mt-2 flex items-center gap-1.5 text-sm text-gray-500">
                                <MapPin size={15} />
                                <span>{agent?.location}</span>
                            </div>
                            </div>
                        </div>

                        <Link
                            to={`/agents/${agent?.id}`}
                            className="inline-flex items-center justify-center rounded-xl border border-[#12372A] px-5 py-3 text-sm font-semibold text-[#12372A] transition hover:bg-[#12372A] hover:text-white"
                        >
                            View agent profile
                        </Link>
                        </div>

                        <div className="mt-5 flex flex-col gap-3 border-t border-gray-100 pt-5 sm:flex-row">
                            <a
                                href={`tel:${agent?.phone}`}
                                className="flex-1 rounded-xl bg-[#12372A] px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#315C48]"
                            >
                                Call agent
                            </a>

                            <a
                                href={`mailto:${agent?.email}`}
                                className="flex-1 rounded-xl border border-gray-200 px-5 py-3 text-center text-sm font-semibold text-[#12372A] transition hover:border-[#D6A756] hover:text-[#D6A756]"
                            >
                                Send email
                            </a>
                        </div>
                    </div>
                </section>
            )}

            {/* Similar Properties */}
            {similarProperties.length > 0 && (
            <section className="mx-auto mt-12 max-w-7xl px-5 pb-16 sm:px-6 lg:px-8 lg:pb-20">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D6A756]">
                            You may also like
                        </p>

                        <h2 className="mt-2 text-2xl font-bold text-[#12372A] sm:text-3xl">
                            Similar properties
                        </h2>

                        <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
                            Explore other properties that match some of the features,
                            location, and preferences of this listing.
                        </p>
                    </div>

                    <Link
                        to="/properties"
                        className="shrink-0 text-sm font-semibold text-[#12372A] transition hover:text-[#D6A756]"
                        >
                        View all properties →
                    </Link>
                </div>

                {similarProperties.length > 0 ? (
                    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {similarProperties.map((similarProperty) => (
                        <PropertyCard
                        key={similarProperty.id}
                        property={similarProperty}
                        />
                    ))}
                    </div>
                ) : (
                    <div className="mt-8 rounded-2xl border border-dashed border-gray-300 bg-[#F8F7F3] px-6 py-10 text-center">
                    <p className="text-sm text-gray-500">
                        No similar properties are available at the moment.
                    </p>

                    <Link
                        to="/properties"
                        className="mt-4 inline-flex rounded-xl bg-[#12372A] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#315C48]"
                    >
                        Explore properties
                    </Link>
                    </div>
                )}
            </section>
            )}


            <ContactModal
            isOpen={isContactOpen}
            onClose={() => setIsContactOpen(false)}
            agent={agent}
            property={property}
            />

            <ViewingModal
            isOpen={isViewingOpen}
            onClose={() => setIsViewingOpen(false)}
            property={property}
            />

        </main>
    );
}

export default PropertyDetails;