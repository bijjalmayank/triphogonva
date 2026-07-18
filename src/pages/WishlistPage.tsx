import { NavLink } from "react-router-dom"
import { FiHeart } from "react-icons/fi"
import { Button } from "@/components/ui/button"
import { Seo } from "@/components/common/Seo"
import { Container } from "@/components/common/Container"
import { SectionHeading } from "@/components/common/SectionHeading"
import { TripCard } from "@/components/cards/TripCard"
import { useWishlist } from "@/hooks/useWishlist"
import { trips } from "@/constants/trips"

export function WishlistPage() {
  const { ids } = useWishlist()
  const wishlistedTrips = trips.filter((trip) => ids.includes(trip.id))

  return (
    <main className="pt-24">
      <Seo
        title="Wishlist"
        description="Trips you've saved for later on Triphogonva."
        url="/wishlist"
        noindex
      />
      <Container className="flex flex-col gap-10 py-16">
        <SectionHeading
          eyebrow="Wishlist"
          title="Trips you're saving for later"
          description="Tap the heart on any trip card to add it here."
        />

        {wishlistedTrips.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {wishlistedTrips.map((trip) => (
              <TripCard key={trip.id} trip={trip} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4 py-16 text-center">
            <FiHeart className="size-10 text-border" />
            <p className="text-foreground/60">Your wishlist is empty for now.</p>
            <Button asChild className="rounded-full">
              <NavLink to="/destinations">Browse destinations</NavLink>
            </Button>
          </div>
        )}
      </Container>
    </main>
  )
}
