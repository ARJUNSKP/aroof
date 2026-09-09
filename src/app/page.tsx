import HeroBanner from "@/components/HeroBanner";
import AboutSection from "@/components/AboutSection";
import ProductDescriptionSection from "@/components/ProductDescriptionSection";
import ProductShowcaseSection from "@/components/ProductShowcaseSection";

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <AboutSection />
      <ProductDescriptionSection />
      <ProductShowcaseSection />
    </main>
  );
}
