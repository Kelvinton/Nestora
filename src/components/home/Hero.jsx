import heroProperty from "../../assets/images/hero-property.jpg";

function Hero() {
  return (
    <section
      className="relative bg-cover bg-center"
      style={{ backgroundImage: `url(${heroProperty})` }}
    >

      {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/45"></div>

      {/* Hero content */}
        <div className="relative mx-auto max-w-7xl px-6 py-28">

            <div className="max-w-3xl">
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-white/90 sm:text-sm">
                    Your next home starts here
                </p>

                <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl dark:text-gray-100">
                    Find a place you'll love.
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90">
                    Discover homes and properties that fit your lifestyle,
                    budget, and future.
                </p>

            </div>

            {/* Search Content */}
            <div className="relative z-20 mt-15 rounded-2xl bg-white p-3 shadow-xl dark:bg-[#18231F]">
                <div className="grid gap-3 md:grid-cols-4">

                    {/* Location */}
                    <div className="rounded-xl px-4 py-3">
                    <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400">
                        Location
                    </label>

                    <input
                        type="text"
                        placeholder="Lagos, Nigeria"
                        className="mt-1 w-full bg-transparent text-sm font-medium text-[#1F2933] dark:text-gray-600 outline-none placeholder:text-gray-500 dark:placeholder:text-gray-400"
                    />
                    </div>

                    {/* Property Type */}
                    <div className="rounded-xl px-4 py-3 md:border-l md:border-gray-200">
                    <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400">
                        Property Type
                    </label>

                    <select className="mt-1 w-full bg-transparent text-sm font-medium text-[#1F2933] dark:text-gray-600 outline-none">
                        <option>Any property</option>
                        <option>Apartment</option>
                        <option>House</option>
                        <option>Duplex</option>
                    </select>
                    </div>

                    {/* Price */}
                    <div className="rounded-xl px-4 py-3 md:border-l md:border-gray-200">
                    <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400">
                        Price Range
                    </label>

                    <select className="mt-1 w-full bg-transparent text-sm font-medium text-[#1F2933] dark:text-gray-600  outline-none">
                        <option>Any price</option>
                        <option>₦500k - ₦1m</option>
                        <option>₦1m - ₦3m</option>
                        <option>₦3m - ₦5m</option>
                    </select>
                    </div>

                    {/* Search */}
                    <button className="rounded-xl bg-[#12372A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#315C48]">
                    Search Properties
                    </button>

                </div>
            </div>

        </div>

        

    </section>
  );
}

export default Hero;