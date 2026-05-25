import { cookies } from "next/headers";
import ComingSoon from "@/components/ComingSoon";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import SocialProof from "@/components/home/SocialProof";
import InlineQuiz from "@/components/home/InlineQuiz";
import FeaturedPlants from "@/components/home/FeaturedPlants";
import ShopPreview from "@/components/home/ShopPreview";
import BlogPreview from "@/components/home/BlogPreview";

export default async function HomePage() {
  const cookieStore = await cookies();
  const hasPreview = cookieStore.get("preview_access")?.value === "1";

  if (!hasPreview) {
    return <ComingSoon />;
  }

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
