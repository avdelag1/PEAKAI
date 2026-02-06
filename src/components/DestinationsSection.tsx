import { Link } from "react-router-dom";
import monacoImg from "@/assets/destination-monaco.jpg";
import dubaiImg from "@/assets/destination-dubai.jpg";
import mykonosImg from "@/assets/destination-mykonos.jpg";
import ibizaImg from "@/assets/destination-ibiza.jpg";

const destinations = [
  {
    name: "Tulum Centro",
    slug: "monaco",
    image: monacoImg,
    venues: 45,
  },
  {
    name: "Beach Zone",
    slug: "dubai",
    image: dubaiImg,
    venues: 120,
  },
  {
    name: "Aldea Zama",
    slug: "mykonos",
    image: mykonosImg,
    venues: 35,
  },
  {
    name: "La Veleta",
    slug: "ibiza",
    image: ibizaImg,
    venues: 80,
  },
];

const DestinationsSection = () => {
  return (
    <section className="py-6">
      <div className="px-4">
        {/* Header */}
        <div className="mb-4">
          <h2 className="text-xl font-serif font-semibold text-foreground">
            Discover new places
          </h2>
        </div>

        {/* Horizontal Scroll */}
        <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
          {destinations.map((destination) => (
            <Link
              key={destination.name}
              to={`/destination/${destination.slug}`}
              className="relative min-w-[140px] h-[180px] rounded-2xl overflow-hidden group"
            >
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <h3 className="text-white font-medium text-sm">{destination.name}</h3>
                <p className="text-white/70 text-xs">{destination.venues} places</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
