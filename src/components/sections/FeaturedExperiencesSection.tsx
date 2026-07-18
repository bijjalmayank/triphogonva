import { Container } from "@/components/common/Container"
import { SectionHeading } from "@/components/common/SectionHeading"
import { TripCard } from "@/components/cards/TripCard"
import { trips } from "@/constants/trips"

export function FeaturedExperiencesSection() {
  const featured = trips.slice(2, 6)

  return (
    <section className="bg-secondary/40 py-24">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="Featured Experiences"
          title="Handpicked for the season"
          description="A tighter edit of experiences our travel desk is most excited about right now."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((trip) => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </div>
      </Container>
    </section>
  )
}
