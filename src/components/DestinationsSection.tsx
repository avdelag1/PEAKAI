import DestinationCard from "./DestinationCard";
import monacoImg from "@/assets/destination-monaco.jpg";
import dubaiImg from "@/assets/destination-dubai.jpg";
import mykonosImg from "@/assets/destination-mykonos.jpg";
import ibizaImg from "@/assets/destination-ibiza.jpg";

const destinations = [
  {
    name: "Monaco",
    country: "French Riviera",
    image: monacoImg,
    rating: 4.9,
    venues: 45,
    featured: true,
  },
  {
    name: "Dubai",
    country: "UAE",
    image: dubaiImg,
    rating: 4.8,
    venues: 120,
  },
  {
    name: "Mykonos",
    country: "Greece",
    image: mykonosImg,
    rating: 4.7,
    venues: 35,
  },
  {
    name: "Ibiza",
    country: "Spain",
    image: ibizaImg,
    rating: 4.8,
    venues: 80,
  },
];

const DestinationsSection = () => {
  return (
    <section id="destinations" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-gold text-sm font-medium uppercase tracking-wider mb-4 block">
            Destinations
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Curated <span className="text-gradient-gold">Destinations</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover the world's most exclusive locations where unforgettable nights and extraordinary experiences await.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <DestinationCard
              key={destination.name}
              {...destination}
              featured={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
