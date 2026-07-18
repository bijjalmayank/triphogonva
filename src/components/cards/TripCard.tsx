import { motion } from "framer-motion"
import { NavLink } from "react-router-dom"
import { FiClock } from "react-icons/fi"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { RatingStars } from "@/components/common/RatingStars"
import { PriceTag } from "@/components/common/PriceTag"
import { WishlistButton } from "@/components/common/WishlistButton"
import type { Trip } from "@/types/trip"

interface TripCardProps {
  trip: Trip
  className?: string
}

export function TripCard({ trip }: TripCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="shadow-warm-md hover:shadow-warm-lg group flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-shadow duration-300"
    >
      <NavLink
        to={`/destinations/${trip.slug}`}
        className="relative block aspect-[4/5] overflow-hidden rounded-3xl"
      >
        <img
          src={trip.coverImage}
          alt={trip.destination}
          loading="lazy"
          className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        <WishlistButton tripId={trip.id} className="absolute top-4 right-4" />

        <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
          {trip.tags.slice(0, 2).map((tag) => (
            <Badge key={tag} className="glass border-0 text-xs text-white">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="absolute inset-x-4 bottom-4 flex items-center justify-between text-white">
          <span className="font-heading text-xl">{trip.destination}</span>
          <span className="flex items-center gap-1 text-xs">
            <FiClock className="size-3.5" />
            {trip.durationDays}D/{trip.durationNights}N
          </span>
        </div>
      </NavLink>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <p className="line-clamp-2 text-sm text-foreground/70">{trip.shortDescription}</p>

        <div className="flex items-center justify-between">
          <PriceTag amount={trip.priceFrom} />
          <RatingStars rating={trip.rating} reviewCount={trip.reviewCount} />
        </div>

        <div className="mt-2 flex gap-2">
          <Button asChild variant="outline" size="lg" className="flex-1 rounded-full">
            <NavLink to={`/destinations/${trip.slug}`}>Explore</NavLink>
          </Button>
          <Button asChild size="lg" className="flex-1 rounded-full">
            <NavLink to={`/contact?destination=${encodeURIComponent(trip.destination)}`}>
              Enquire
            </NavLink>
          </Button>
        </div>
      </div>
    </motion.article>
  )
}
