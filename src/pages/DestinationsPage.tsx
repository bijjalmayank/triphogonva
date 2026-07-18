import { useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { motion } from "framer-motion"
import { Seo } from "@/components/common/Seo"
import { Container } from "@/components/common/Container"
import { SectionHeading } from "@/components/common/SectionHeading"
import { TripCard } from "@/components/cards/TripCard"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { trips } from "@/constants/trips"
import type { TripCategory } from "@/types/trip"

const allCategories: (TripCategory | "All")[] = [
  "All",
  "Adventure",
  "Historical",
  "Wildlife",
  "Luxury",
  "Pilgrimage",
  "Road Trips",
  "Weekend Getaways",
  "International",
]

export function DestinationsPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = (searchParams.get("category") as TripCategory | null) ?? "All"
  const [category, setCategory] = useState<TripCategory | "All">(initialCategory)
  const [query, setQuery] = useState(searchParams.get("q") ?? "")

  const filteredTrips = useMemo(() => {
    return trips.filter((trip) => {
      const matchesCategory = category === "All" || trip.category === category
      const matchesQuery = trip.destination.toLowerCase().includes(query.toLowerCase())
      return matchesCategory && matchesQuery
    })
  }, [category, query])

  function handleCategoryChange(next: TripCategory | "All") {
    setCategory(next)
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev)
      if (next === "All") params.delete("category")
      else params.set("category", next)
      return params
    })
  }

  return (
    <main className="pt-24">
      <Seo
        title="Destinations"
        description="Browse every heritage and luxury destination Triphogonva curates, filterable by mood — adventure, historical, wildlife, luxury, and more."
        url="/destinations"
      />
      <Container className="flex flex-col gap-10 py-16">
        <SectionHeading
          eyebrow="Destinations"
          title="Every trip we curate, in one place"
          description="Filter by mood, or search for a destination you already have in mind."
        />

        <Input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search destinations..."
          className="mx-auto max-w-md rounded-full"
        />

        <div className="flex flex-wrap justify-center gap-2">
          {allCategories.map((cat) => (
            <Button
              key={cat}
              type="button"
              size="sm"
              variant={category === cat ? "default" : "outline"}
              className="rounded-full"
              onClick={() => handleCategoryChange(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>

        {filteredTrips.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredTrips.map((trip) => (
              <TripCard key={trip.id} trip={trip} />
            ))}
          </motion.div>
        ) : (
          <p className="py-16 text-center text-foreground/60">
            No trips match your search. Try a different destination or category.
          </p>
        )}
      </Container>
    </main>
  )
}
