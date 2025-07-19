import { HeroSection } from "@/components/hero-section"
import { FeaturedWork } from "@/components/featured-work"
import { ServicesPreview } from "@/components/services-preview"

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesPreview />
      <FeaturedWork />
    </main>
  )
}
