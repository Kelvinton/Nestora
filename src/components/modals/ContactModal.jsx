import { useState } from "react";

function ContactModal({
  isOpen,
  onClose,
  agent,
  property,
}) {
    const [submitted, setSubmitted] = useState(false);

    const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
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

        if (!formData.email.trim()) {
            newErrors.email = "Please enter your email.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Please enter a valid email.";
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Please enter your phone number.";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Please enter a message.";
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
    email: "",
    phone: "",
    message: "",
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
                <p className="text-sm font-semibold uppercase tracking-wider text-[#D6A756] mt-6">
                  Contact agent
                </p>

                <h2 className="mt-1 text-2xl font-bold text-[#12372A]">
                  Interested in this property?
                </h2>

                <p className="mt-1 text-sm leading-5 text-gray-500">
                  Send a message to {agent?.name} about this
                  property.
                </p>
              </div>

              <button
                onClick={handleClose}
                className="rounded-full p-2 text-gray-500 transition hover:bg-gray-100 hover:text-[#12372A] mt-2"
                aria-label="Close contact form"
              >
                ✕
              </button>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mt-1 space-y-2"
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
                    Email address
                    </label>

                    <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#12372A]"
                    />

                    {errors.email && (
                    <p className="mt-1 text-xs text-red-500">
                        {errors.email}
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
                    Message
                    </label>

                   <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder={`Hi ${agent?.name}, I'm interested in ${property?.title}.`}
                    className="mt-2 w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#12372A]"
                    />

                    {errors.message && (
                    <p className="mt-1 text-xs text-red-500">
                        {errors.message}
                    </p>
                    )}
                </div>

                <button
                    type="submit"
                    className="w-full rounded-xl bg-[#12372A] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#315C48]"
                >
                    Send message
                </button>
            </form>
          </>
        ) : (
          <div className="py-8 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#12372A]/10 text-xl text-[#12372A]">
              ✓
            </div>

            <h2 className="mt-5 text-2xl font-bold text-[#12372A]">
              Message sent
            </h2>

            <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-gray-500">
              Your enquiry has been recorded. The agent can
              follow up with you.
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

export default ContactModal;