import landImage from "../../assets/images/landImage.jpg";
import houseImage from "../../assets/images/houseImage.jpg";
import apartmentImage from "../../assets/images/apartmentImage.jpg";
import duplexImage from "../../assets/images/duplexImage.jpg";

const categories = [
  {
    name: "Apartments",
    image: apartmentImage,
    count: "120+ properties",
  },
  {
    name: "Houses",
    image: houseImage,
    count: "85+ properties",
  },
  {
    name: "Duplexes",
    image: duplexImage,
    count: "60+ properties",
  },
  {
    name: "Land",
    image: landImage,
    count: "40+ properties",
  },
];

function Categories() {
  return (
    <section className="bg-[#F8F7F3] py-20 px-4 md:px-5">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section heading */}

        <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#D6A756]">
                Explore
            </p>

            <h2 className="mt-2 text-3xl font-bold text-[#12372A] md:text-4xl">
                Find a property that fits your lifestyle
            </h2>

            <p className="mt-3 max-w-2xl text-[#6B7280]">
                Browse homes and properties by type and find the perfect
                place for your next chapter.
            </p>
        </div>

       <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
                <div
                key={category.name}
                className="group relative h-72 overflow-hidden rounded-2xl"
                >
                <img
                    src={category.image}
                    alt={category.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 p-5 text-white">
                    <h3 className="text-xl font-semibold">
                    {category.name}
                    </h3>

                    <p className="mt-1 text-sm text-white/80">
                    {category.count}
                    </p>
                </div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
}

export default Categories;