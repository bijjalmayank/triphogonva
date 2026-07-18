import { Seo } from "@/components/common/Seo"
import { Container } from "@/components/common/Container"
import { SectionHeading } from "@/components/common/SectionHeading"
import { TripCard } from "@/components/cards/TripCard"
import { categories } from "@/constants/categories"
import { trips } from "@/constants/trips"

export function ExperiencesPage() {
  return (
    <main className="pt-24">
      <Seo
        title="Experiences"
        description="Explore Triphogonva's curated travel experiences grouped by mood — from adventure and heritage to wildlife and pilgrimage."
        url="/experiences"
      />
      <Container className="flex flex-col gap-20 py-16">
        <SectionHeading
          eyebrow="Experiences"
          title="Curated by mood, not just map pins"
          description="Every experience is grouped by the feeling it delivers — pick the one that matches your trip."
        />

        {categories.map((category) => {
          const categoryTrips = trips.filter((trip) => trip.category === category.name)
          if (categoryTrips.length === 0) return null

          return (
            <div key={category.name} className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <category.icon className="size-6 text-accent" />
                <h2 className="font-heading text-2xl text-primary sm:text-3xl">
                  {category.name}
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {categoryTrips.map((trip) => (
                  <TripCard key={trip.id} trip={trip} />
                ))}
              </div>
            </div>
          )
        })}
      </Container>
    </main>
  )
}
