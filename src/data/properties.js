import propertyImage from "../assets/images/property-1.jpg";
import propertyImage1 from "../assets/images/property-1a.jpg";
import propertyImage2 from "../assets/images/property-2.jpg";
import propertyImage3 from "../assets/images/property-3.jpg";

const properties = [
  {
    id: 1,
    title: "Modern 4 Bedroom Duplex",
    location: "Lekki, Lagos",
    price: "₦85,000,000",
    images: [propertyImage, propertyImage1,],
    beds: 4,
    baths: 4,
    area: "320 sqm",
    status: "For Sale",
  },
  {
    id: 2,
    title: "Luxury 3 Bedroom Apartment",
    location: "Ikoyi, Lagos",
    price: "₦65,000,000",
    images: [propertyImage2,],
    beds: 3,
    baths: 3,
    area: "210 sqm",
    status: "For Sale",
  },
  {
    id: 3,
    title: "Contemporary Family Home",
    location: "Victoria Island, Lagos",
    price: "₦120,000,000",
    images: [propertyImage3,],
    beds: 5,
    baths: 5,
    area: "450 sqm",
    status: "For Sale",
  },
];

export default properties;