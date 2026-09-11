import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Heart, MapPin } from "lucide-react";
import properties from "../data/properties";

function PropertyDetails() {

    const { id } = useParams();

    const property = properties.find(
        (property) => property.id === Number(id)
    );

    const [selectedImage, setSelectedImage] = useState(0);

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
                    className="absolute right-5 top-5 rounded-full bg-white p-3 text-[#12372A] shadow-md transition hover:bg-[#D6A756] hover:text-white"
                    aria-label="Save property"
                    >
                    <Heart size={20} />
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
                        <div className="mt-6 flex flex-wrap gap-6 border-y border-gray-200 py-5 text-sm text-gray-600">
                            <span>
                                <strong className="text-[#12372A]">
                                {property.beds}
                                </strong>{" "}
                                Bedrooms
                            </span>

                            <span>
                                <strong className="text-[#12372A]">
                                {property.baths}
                                </strong>{" "}
                                Bathrooms
                            </span>

                            <span>
                                <strong className="text-[#12372A]">
                                {property.area}
                                </strong>
                            </span>
                        </div>

                        {/* Description */}
                        <div className="mt-8">
                            <h2 className="text-xl font-bold text-[#12372A]">
                                About this property
                            </h2>

                            <p className="mt-3 max-w-3xl leading-7 text-gray-600">
                                Discover this beautiful property in {property.location}.
                                Designed with comfort, style, and modern living in mind,
                                this home offers an ideal space for individuals and families
                                looking for a quality place to call home.
                            </p>
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

                            <button className="mt-6 w-full rounded-xl bg-[#12372A] px-6 py-3 font-semibold text-white transition hover:bg-[#315C48]">
                                Contact Agent
                            </button>

                            <button className="mt-3 w-full rounded-xl border border-[#12372A] px-6 py-3 font-semibold text-[#12372A] transition hover:bg-[#12372A] hover:text-white">
                                Schedule a Viewing
                            </button>

                        </div>
                    </div>

                </div>

            </section>

        </main>
    );
}

export default PropertyDetails;