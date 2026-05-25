import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import SocialProof from "@/components/home/SocialProof";
import InlineQuiz from "@/components/home/InlineQuiz";
import FeaturedPlants from "@/components/home/FeaturedPlants";
import ShopPreview from "@/components/home/ShopPreview";
import BlogPreview from "@/components/home/BlogPreview";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <SocialProof />
        <InlineQuiz />
        <FeaturedPlants />
        <ShopPreview />
        <BlogPreview />
      </main>
      <Footer />
    </>
  );
}
