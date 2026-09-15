import { useState } from "react";

function ViewingModal({
  isOpen,
  onClose,
//   property,
}) {
    const [submitted, setSubmitted] = useState(false);

    const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((current) => ({
            ...current,
            [name]: value,
        }));

        setErrors((current) => ({
            ...current,
            [name]: "",
        }));
    };

  if (!isOpen) {
    return null;
  }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Please enter your name.";
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Please enter your phone number.";
        }

        if (!formData.date) {
            newErrors.date = "Please select a viewing date.";
        }

        if (!formData.time) {
            newErrors.time = "Please select a viewing time.";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            setSubmitted(true);
        }
    };

    const handleClose = () => {
        setSubmitted(false);

        setFormData({
            name: "",
            phone: "",
            date: "",
            time: "",
        });

        setErrors({});

        onClose();
    };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 px-4">
      <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl">
        {!submitted ? (
          <>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-[#D6A756]">
                  Property viewing
                </p>

                <h2 className="mt-2 text-2xl font-bold text-[#12372A]">
                  Schedule a viewing
                </h2>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Choose a convenient date and time to view this
                  property.
                </p>
              </div>

              <button
                onClick={handleClose}
                className="rounded-full p-2 text-gray-500 transition hover:bg-gray-100 hover:text-[#12372A]"
                aria-label="Close viewing form"
              >
                ✕
              </button>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mt-6 space-y-2"
            >
                <div>
                    <label className="text-sm font-medium text-[#1F2933]">
                    Your name
                    </label>

                    <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#12372A]"
                    />

                    {errors.name && (
                    <p className="mt-1 text-xs text-red-500">
                        {errors.name}
                    </p>
                    )}
                </div>

                <div>
                    <label className="text-sm font-medium text-[#1F2933]">
                    Phone number
                    </label>

                    <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+234..."
                    className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#12372A]"
                    />

                    {errors.phone && (
                    <p className="mt-1 text-xs text-red-500">
                        {errors.phone}
                    </p>
                    )}
                </div>

                <div>
                    <label className="text-sm font-medium text-[#1F2933]">
                    Preferred date
                    </label>

                    <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split("T")[0]}
                    className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#12372A]"
                    />

                    {errors.date && (
                    <p className="mt-1 text-xs text-red-500">
                        {errors.date}
                    </p>
                    )}
                </div>

                <div>
                    <label className="text-sm font-medium text-[#1F2933]">
                    Preferred time
                    </label>

                    <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#12372A]"
                    >
                    <option value="">Select a time</option>
                    <option value="09:00">9:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="17:00">5:00 PM</option>
                    </select>

                    {errors.time && (
                    <p className="mt-1 text-xs text-red-500">
                        {errors.time}
                    </p>
                    )}
                </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-[#12372A] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#315C48]"
              >
                Request viewing
              </button>
            </form>
          </>
        ) : (
          <div className="py-8 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#12372A]/10 text-xl text-[#12372A]">
              ✓
            </div>

            <h2 className="mt-5 text-2xl font-bold text-[#12372A]">
              Viewing requested
            </h2>

            <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-gray-500">
              Your viewing request has been submitted. The
              property agent can follow up to confirm the
              appointment.
            </p>

            <button
              onClick={handleClose}
              className="mt-6 rounded-xl bg-[#12372A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#315C48]"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ViewingModal;