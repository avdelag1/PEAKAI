import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoryTabs from "@/components/CategoryTabs";
import FeaturedVenuesSection from "@/components/FeaturedVenuesSection";
import DestinationsSection from "@/components/DestinationsSection";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />
      <main>
        <HeroSection />
        <CategoryTabs />
        <FeaturedVenuesSection />
        <DestinationsSection />
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
};

export default Index;
