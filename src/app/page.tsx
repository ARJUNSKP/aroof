import HeroBanner from "@/components/HeroBanner";
import AboutSection from "@/components/AboutSection";
import ProductDescriptionSection from "@/components/ProductDescriptionSection";
import ProductShowcaseSection from "@/components/ProductShowcaseSection";
import LatestArticles from "@/components/LatestArticles";
import LatestVideos from "@/components/LatestVideos";
import CallToActionSection from "@/components/CallToActionSection";

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <AboutSection />
      <ProductDescriptionSection />
      <ProductShowcaseSection />
      <LatestArticles />
      <LatestVideos />
      <CallToActionSection />
    </main>
  );
}
