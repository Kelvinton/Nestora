import { useState } from "react";
import {
  Building2,
  CheckCircle,
//   Home,
  MapPin,
  Phone,
} from "lucide-react";

function ListProperty() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#F8F7F3]">
      {/* Header */}
      <section className="bg-[#12372A] px-6 py-16 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#D6A756]">
            List with Nestora
          </p>

          <h1 className="mt-2 text-3xl font-bold md:text-5xl">
            List your property
          </h1>

          <p className="mt-4 max-w-2xl leading-7 text-white/70">
            Tell us about your property and our team will review
            your listing details and get in touch with you.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        {submitted ? (
          <div className="rounded-2xl border border-gray-200 bg-white p-10 text-center shadow-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#12372A]/10">
              <CheckCircle
                size={32}
                className="text-[#12372A]"
              />
            </div>

            <h2 className="mt-6 text-2xl font-bold text-[#12372A]">
              Listing request received
            </h2>

            <p className="mx-auto mt-3 max-w-lg leading-7 text-gray-500">
              Thank you for submitting your property details.
              Our team will review the information and contact
              you shortly.
            </p>

            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="mt-7 rounded-xl border border-gray-200 px-6 py-3 text-sm font-semibold text-[#12372A] transition hover:border-[#D6A756]"
            >
              Submit another property
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8"
          >
            {/* Property Information */}
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#12372A]/10">
                  <Building2
                    size={20}
                    className="text-[#12372A]"
                  />
                </div>

                <div>
                  <h2 className="text-xl font-bold text-[#12372A]">
                    Property information
                  </h2>

                  <p className="text-sm text-gray-500">
                    Tell us about the property you're listing.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Property title
                  </label>

                  <input
                    type="text"
                    required
                    placeholder="e.g. Modern 4 Bedroom Duplex"
                    className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#12372A]"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Property type
                  </label>

                  <select
                    required
                    className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#12372A]"
                  >
                    <option value="">Select type</option>
                    <option>Apartment</option>
                    <option>House</option>
                    <option>Duplex</option>
                    <option>Land</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Listing type
                  </label>

                  <select
                    required
                    className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#12372A]"
                  >
                    <option value="">Select listing type</option>
                    <option>For Sale</option>
                    <option>For Rent</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Price
                  </label>

                  <input
                    type="text"
                    required
                    placeholder="e.g. ₦85,000,000"
                    className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#12372A]"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="text-sm font-medium text-gray-700">
                    Property location
                  </label>

                  <div className="relative mt-2">
                    <MapPin
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                      type="text"
                      required
                      placeholder="e.g. Lekki, Lagos"
                      className="w-full rounded-xl border border-gray-200 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-[#12372A]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Bedrooms
                  </label>

                  <input
                    type="number"
                    min="0"
                    placeholder="e.g. 4"
                    className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#12372A]"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Bathrooms
                  </label>

                  <input
                    type="number"
                    min="0"
                    placeholder="e.g. 4"
                    className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#12372A]"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Property area
                  </label>

                  <input
                    type="text"
                    placeholder="e.g. 320 sqm"
                    className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#12372A]"
                  />
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mt-10 border-t border-gray-100 pt-8">
              <h2 className="text-xl font-bold text-[#12372A]">
                Property description
              </h2>

              <textarea
                rows="5"
                required
                placeholder="Describe the property, its features, location and anything potential buyers or tenants should know."
                className="mt-4 w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm leading-6 outline-none transition focus:border-[#12372A]"
              />
            </div>

            {/* Contact Information */}
            <div className="mt-10 border-t border-gray-100 pt-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D6A756]/15">
                  <Phone
                    size={20}
                    className="text-[#D6A756]"
                  />
                </div>

                <div>
                  <h2 className="text-xl font-bold text-[#12372A]">
                    Your contact information
                  </h2>

                  <p className="text-sm text-gray-500">
                    How should our team contact you?
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Full name
                  </label>

                  <input
                    type="text"
                    required
                    placeholder="Your full name"
                    className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#12372A]"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Phone number
                  </label>

                  <input
                    type="tel"
                    required
                    placeholder="+234..."
                    className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#12372A]"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="text-sm font-medium text-gray-700">
                    Email address
                  </label>

                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#12372A]"
                  />
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="mt-10 border-t border-gray-100 pt-8">
              <button
                type="submit"
                className="w-full rounded-xl bg-[#12372A] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#315C48]"
              >
                Submit property
              </button>

              {/* <p className="mt-3 text-center text-xs text-gray-400">
                This demo form doesn't publish a property to a
                live database yet.
              </p> */}
            </div>
          </form>
        )}
      </section>
    </main>
  );
}

export default ListProperty;