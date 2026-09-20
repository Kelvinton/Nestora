import { useState } from "react";
import { useFavorites } from "../context/FavoritesContext";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle,
//   ChevronLeft,
//   ChevronRight,
  Heart,
  MapPin,
} from "lucide-react";
import properties from "../data/properties";
import PropertyCard from "../components/home/PropertyCard";
import agents from "../data/agents";
import ContactModal from "../components/modals/ContactModal";
import ViewingModal from "../components/modals/ViewingModal";

function PropertyDetails() {

    // const [viewingData, setViewingData] = useState({
    // date: "",
    // time: "",
    // phone: "",
    // });

    // const [viewingError, setViewingError] = useState("");
    // const [viewingSubmitted, setViewingSubmitted] = useState(false);

    // const [formData, setFormData] = useState({
    // name: "",
    // email: "",
    // phone: "",
    // message: "",
    // });
    // const handleViewingChange = (e) => {
    // const { name, value } = e.target;

    // setViewingData((current) => ({
    //     ...current,
    //     [name]: value,
    // }));
    // };

    // const handleViewingSubmit = (e) => {
    //     e.preventDefault();

    //     if (!viewingData.date) {
    //         setViewingError("Please select a date.");
    //         return;
    //     }

    //     if (!viewingData.time) {
    //         setViewingError("Please select a preferred time.");
    //         return;
    //     }

    //     if (!viewingData.phone.trim()) {
    //         setViewingError("Please enter your phone number.");
    //         return;
    //     }

    //     setViewingError("");
    //     setViewingSubmitted(true);
    // };

    // const handleChange = (e) => {
    //     const { name, value } = e.target;

    //     setFormData((current) => ({
    //         ...current,
    //         [name]: value,
    //     }));

        
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     if (!formData.name.trim()) {
    //         setFormError("Please enter your name.");
    //         return;
    //     }

    //     if (!formData.email.trim()) {
    //         setFormError("Please enter your email.");
    //         return;
    //     }

    //     if (!formData.phone.trim()) {
    //         setFormError("Please enter your phone number.");
    //         return;
    //     }

    //     if (!formData.message.trim()) {
    //         setFormError("Please enter a message.");
    //         return;
    //     }

    //     setFormError("");
    //     setIsSubmitted(true);
    // };

    // const [formError, setFormError] = useState("");
    // const [isSubmitted, setIsSubmitted] = useState(false);

    
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
            <div className="mx-auto max-w-7xl px-6 pt-8">
                <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#12372A] transition-colors hover:text-[#D6A756]"
                >
                <ArrowLeft size={18} />
                Back to properties
                </Link>
            </div>

            {/* Property Gallery */}
            <div className="grid gap-3 md:grid-cols-4 mx-6">
                {/* Main Image */}
                <div className="relative h-105 overflow-hidden rounded-2xl md:col-span-3 md:h-130">
                    <img
                    src={property.images[selectedImage]}
                    alt={`${property.title} - image ${selectedImage + 1}`}
                    className="h-full w-full object-cover"
                    />

                    {/* Previous Button */}
                    {property.images.length > 1 && (
                    <button
                    type="button"
                    onClick={() => toggleFavorite(property)}
                    className={`flex h-11 w-11 items-center justify-center rounded-full border transition ${
                        favorite
                        ? "border-red-200 bg-red-50 text-red-500"
                        : "border-gray-200 bg-white text-gray-500 hover:border-[#D6A756] hover:text-[#D6A756]"
                    }`}
                    aria-label={
                        favorite
                        ? "Remove from favorites"
                        : "Save property"
                    }
                    >
                    <Heart
                        size={20}
                        fill={favorite ? "currentColor" : "none"}
                    />
                    </button>
                    )}

                    {/* Next Button */}
                    {property.images.length > 1 && (
                    <button
                        type="button"
                        onClick={() => toggleFavorite(property)}
                        className={`flex h-11 w-11 items-center justify-center rounded-full border transition ${
                            favorite
                            ? "border-red-200 bg-red-50 text-red-500"
                            : "border-gray-200 bg-white text-gray-500 hover:border-[#D6A756] hover:text-[#D6A756]"
                        }`}
                        aria-label={
                            favorite
                            ? "Remove from favorites"
                            : "Save property"
                        }
                        >
                        <Heart
                            size={20}
                            fill={favorite ? "currentColor" : "none"}
                        />
                    </button>
                    )}

                    {/* Image Counter */}
                    {property.images.length > 1 && (
                    <div className="absolute bottom-4 right-4 rounded-full bg-black/60 px-3 py-1.5 text-xs font-medium text-white">
                        {selectedImage + 1} / {property.images.length}
                    </div>
                    )}
                </div>

                {/* Thumbnails */}
                <div className="grid grid-cols-3 gap-3 md:grid-cols-1">
                    {property.images.map((image, index) => (
                    <button
                        key={image + index}
                        type="button"
                        onClick={() => setSelectedImage(index)}
                        className={`relative overflow-hidden rounded-xl ${
                        selectedImage === index
                            ? "ring-2 ring-[#D6A756] ring-offset-2"
                            : ""
                        }`}
                    >
                        <img
                        src={image}
                        alt={`${property.title} thumbnail ${index + 1}`}
                        className="h-28 w-full object-cover transition duration-300 hover:scale-105 md:h-[calc((496/3))]"
                        />

                        {selectedImage !== index && (
                        <div className="absolute inset-0 bg-black/10 transition hover:bg-black/0" />
                        )}
                    </button>
                    ))}
                </div>
            </div>  

            <div className="mt-8 mx-6">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                    <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full bg-[#D6A756] px-3 py-1 text-xs font-semibold text-white">
                        {property.status}
                        </span>

                        <span className="text-sm text-gray-500">
                        {property.type}
                        </span>
                    </div>

                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-[#12372A] md:text-4xl">
                        {property.title}
                    </h1>

                    <div className="mt-3 flex items-center gap-2 text-gray-500">
                        <MapPin size={18} />
                        <span>{property.location}</span>
                    </div>
                    </div>

                    <div className="flex items-center gap-3">
                    <div>
                        <p className="text-right text-2xl font-bold text-[#12372A]">
                        {property.price}
                        </p>

                        {property.pricePeriod === "year" && (
                        <p className="text-right text-sm text-gray-400">
                            per year
                        </p>
                        )}
                    </div>

                    <button
                        type="button"
                        onClick={() => toggleFavorite(property)}
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
            <div className="mt-8 grid grid-cols-2 overflow-hidden rounded-2xl border border-gray-200 bg-white sm:grid-cols-4 mx-6">
            {propertyStats.map((stat, index) => (
                <div
                key={stat.label}
                className={`p-5 ${
                    index !== propertyStats.length - 1
                    ? "border-b border-gray-200 sm:border-b-0 sm:border-r"
                    : ""
                }`}
                >
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                    {stat.label}
                </p>

                <p className="mt-2 text-lg font-bold text-[#12372A]">
                    {stat.value}
                </p>
                </div>
            ))}
            </div>

            <section className="mt-10 mx-6">
                <h2 className="text-2xl font-bold text-[#12372A]">
                    About this property
                </h2>

                <p className="mt-4 max-w-3xl leading-7 text-gray-600">
                    {property.description}
                </p>
            </section>
            

            <section className="mt-10 mx-6">
                <h2 className="text-2xl font-bold text-[#12372A]">
                    Property features
                </h2>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
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

            <div className="mt-10 rounded-2xl bg-[#12372A] p-6 text-white md:p-8 mx-6">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-[#D6A756]">
                        Interested in this property?
                    </p>

                    <h2 className="mt-2 text-2xl font-bold">
                        Take the next step
                    </h2>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-white/70">
                        Speak with our property team or schedule a viewing
                        to see this property in person.
                    </p>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row">
                    <button
                        type="button"
                        onClick={() => setIsContactOpen(true)}
                        className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#12372A] transition hover:bg-gray-100"
                    >
                        Contact Agent
                    </button>

                    <button
                        type="button"
                        onClick={() => setIsViewingOpen(true)}
                        className="rounded-xl bg-[#D6A756] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#c39745]"
                    >
                        Schedule Viewing
                    </button>
                    </div>
                </div>
            </div>

            {/* Agent Information */}
            {agent && (
                <section className="mt-10 mx-6">
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

            {similarProperties.length > 0 && (
                <section className="my-16 border-t border-gray-200 pt-12 mx-6">
                    <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-[#D6A756]">
                        More to explore
                    </p>

                    <h2 className="mt-2 text-2xl font-bold text-[#12372A] md:text-3xl">
                        You may also like
                    </h2>

                    <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-500">
                        Explore other properties that may match what you're
                        looking for.
                    </p>
                    </div>

                    <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {similarProperties.map((property) => (
                        <PropertyCard
                        key={property.id}
                        property={property}
                        />
                    ))}
                    </div>
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