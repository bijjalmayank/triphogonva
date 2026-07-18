import { Seo } from "@/components/common/Seo"
import { HeroSection } from "@/components/sections/HeroSection"
import { TrendingTripsSection } from "@/components/sections/TrendingTripsSection"
import { FeaturedExperiencesSection } from "@/components/sections/FeaturedExperiencesSection"
import { CategoriesSection } from "@/components/sections/CategoriesSection"
import { PopularDestinationsSection } from "@/components/sections/PopularDestinationsSection"
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection"
import { GalleryPreviewSection } from "@/components/sections/GalleryPreviewSection"
import { TestimonialsSection } from "@/components/sections/TestimonialsSection"
import { TravelStoriesSection } from "@/components/sections/TravelStoriesSection"
import { ContactSection } from "@/components/sections/ContactSection"

export function HomePage() {
  return (
    <main>
      <Seo
        title="Heritage & Luxury Travel Experiences"
        description="Triphogonva curates immersive, heritage-rich travel experiences across India and beyond — handpicked destinations, luxury stays, and expertly crafted itineraries."
        url="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          name: "Triphogonva",
          description:
            "Curated heritage and luxury travel experiences across India and beyond.",
          url: "https://triphogonva.com",
        }}
      />
      <HeroSection />
      <TrendingTripsSection />
      <FeaturedExperiencesSection />
      <CategoriesSection />
      <PopularDestinationsSection />
      <WhyChooseUsSection />
      <GalleryPreviewSection />
      <TestimonialsSection />
      <TravelStoriesSection />
      <ContactSection />
    </main>
  )
}
