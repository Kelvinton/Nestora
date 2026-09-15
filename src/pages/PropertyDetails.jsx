import { useState } from "react";
import { useFavorites } from "../context/FavoritesContext";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
//   Bath,
//   BedDouble,
//   CheckCircle,
//   ChevronLeft,
//   ChevronRight,
  Heart,
  MapPin,
//   Ruler,
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

            {/* Property Image */}
            {/* Property Gallery */}
            <section className="mx-auto mt-6 max-w-7xl px-6">

                {/* Main Image */}
                <div className="relative h-87.5 overflow-hidden rounded-2xl md:h-125">

                    <img
                    src={property.images[selectedImage]}
                    alt={property.title}
                    className="h-full w-full object-cover"
                    />

                    <span className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#12372A]">
                    {property.status}
                    </span>

                    <button
                        onClick={() => toggleFavorite(property)}
                        className={`absolute right-5 top-5 rounded-full p-3 shadow-md transition ${
                        favorite
                            ? "bg-[#D6A756] text-white"
                            : "bg-white text-[#12372A] hover:bg-[#12372A] hover:text-white"
                        }`}
                        aria-label={
                            favorite
                            ? "Remove property from favorites"
                            : "Save property"
                        }
                        >
                        <Heart
                        size={20}
                        fill={favorite ? "currentColor" : "none"}
                        />
                </button>

                </div>

                {/* Thumbnails */}
                <div className="mt-4 flex gap-3">

                    {property.images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`h-20 w-24 overflow-hidden rounded-lg border-2 ${
                        selectedImage === index
                            ? "border-[#D6A756]"
                            : "border-transparent"
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

            </section>  

            {/* Property Information */}
            <section className="mx-auto max-w-7xl px-6 py-10">

                <div className="grid gap-10 lg:grid-cols-[1fr_350px]">

                    {/* Left */}
                    <div>

                        <p className="flex items-center gap-2 text-sm text-gray-500">
                        <MapPin size={16} />
                        {property.location}
                        </p>

                        <h1 className="mt-3 text-3xl font-bold text-[#12372A] md:text-4xl">
                        {property.title}
                        </h1>

                        {/* Property Features */}
                        <div
                            className={`mt-8 grid overflow-hidden rounded-2xl border border-gray-200 bg-white ${
                                propertyStats.length === 2
                                ? "grid-cols-2"
                                : "grid-cols-2 sm:grid-cols-4"
                            }`}
                            >
                            {propertyStats.map((stat, index) => (
                                <div
                                key={stat.label}
                                className={`p-5 ${
                                    index < propertyStats.length - 1
                                    ? "border-b border-gray-200 sm:border-b-0 sm:border-r"
                                    : ""
                                }`}
                                >
                                <p className="text-xs uppercase tracking-wide text-gray-400">
                                    {stat.label}
                                </p>

                                <p className="mt-2 text-lg font-bold text-[#12372A]">
                                    {stat.value}
                                </p>
                                </div>
                            ))}
                        </div>

                        {/* Amenities  */}
                        <div className="mt-10">
                            <h2 className="text-xl font-bold text-[#12372A]">
                                Amenities
                            </h2>

                            <div className="mt-5 grid gap-3 sm:grid-cols-2">
                                {property.amenities.map((amenity) => (
                                <div
                                    key={amenity}
                                    className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-600"
                                >
                                    ✓ {amenity}
                                </div>
                                ))}
                            </div>
                        </div>

                        {/* Agents */}
                        <div className="mt-10">
                            <h2 className="text-xl font-bold text-[#12372A]">
                                Listed by
                            </h2>

                            <div className="mt-5 flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-5 sm:flex-row sm:items-center">
                                
                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#12372A] text-lg font-bold text-white">
                                {agent?.name
                                    ?.split(" ")
                                    .map((name) => name[0])
                                    .join("")}
                                </div>

                                <div className="flex-1">
                                <h3 className="font-semibold text-[#12372A]">
                                    {agent?.name}
                                </h3>

                                <p className="mt-1 text-sm text-gray-500">
                                    {agent?.role}
                                </p>

                                <p className="mt-1 text-sm text-gray-500">
                                    {agent?.location}
                                </p>
                                </div>

                                <button
                                onClick={() => setIsContactOpen(true)}
                                className="rounded-xl border border-[#12372A] px-5 py-2.5 text-sm font-semibold text-[#12372A] transition hover:bg-[#12372A] hover:text-white"
                                >
                                Contact
                                </button>

                            </div>
                        </div>

                    </div>

                    {/* Right - Price Card */}
                    <div>
                        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

                            <p className="text-sm text-gray-500">
                                Listed price
                            </p>

                            <p className="mt-1 text-3xl font-bold text-[#12372A]">
                                {property.price}
                            </p>

                            <button
                            onClick={() => setIsContactOpen(true)}
                            className="mt-6 w-full rounded-xl bg-[#12372A] px-6 py-3 font-semibold text-white transition hover:bg-[#315C48]"
                            >
                            Contact Agent
                            </button>

                            <button
                            onClick={() => setIsViewingOpen(true)}
                            className="mt-3 w-full rounded-xl border border-[#12372A] px-6 py-3 font-semibold text-[#12372A] transition hover:bg-[#12372A] hover:text-white"
                            >
                            Schedule a Viewing
                            </button>

                        </div>
                    </div>

                </div>

            </section>

            {similarProperties.length > 0 && (
                <section className="mt-16 border-t border-gray-200 pt-12 mx-3">
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