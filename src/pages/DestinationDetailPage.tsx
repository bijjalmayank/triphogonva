import { useEffect } from "react"
import { Navigate, NavLink, useParams } from "react-router-dom"
import { motion } from "framer-motion"
import { FiClock, FiCalendar, FiCheck } from "react-icons/fi"
import { Seo } from "@/components/common/Seo"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Container } from "@/components/common/Container"
import { SectionHeading } from "@/components/common/SectionHeading"
import { RatingStars } from "@/components/common/RatingStars"
import { PriceTag } from "@/components/common/PriceTag"
import { WishlistButton } from "@/components/common/WishlistButton"
import { DestinationMap } from "@/components/common/DestinationMap"
import { TripCard } from "@/components/cards/TripCard"
import { getRelatedTrips, getTripBySlug } from "@/constants/trips"

export function DestinationDetailPage() {
  const { slug } = useParams()
  const trip = slug ? getTripBySlug(slug) : undefined

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [slug])

  if (!trip) {
    return <Navigate to="/destinations" replace />
  }

  const relatedTrips = getRelatedTrips(trip)

  return (
    <main>
      <Seo
        title={`${trip.destination} Trip Package`}
        description={trip.shortDescription}
        image={trip.coverImage}
        url={`/destinations/${trip.slug}`}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          name: `${trip.destination} Trip`,
          description: trip.description,
          touristType: trip.category,
          offers: {
            "@type": "Offer",
            priceCurrency: "INR",
            price: trip.priceFrom,
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: trip.rating,
            reviewCount: trip.reviewCount,
          },
        }}
      />
      {/* Hero Banner */}
      <section className="relative flex min-h-[70vh] items-end overflow-hidden">
        <img
          src={trip.coverImage}
          alt={trip.destination}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40" />

        <Container className="relative z-10 flex flex-col gap-4 pt-24 pb-12 text-white">
          <div className="flex flex-wrap items-center gap-3">
            {trip.tags.map((tag) => (
              <span key={tag} className="glass rounded-full px-3 py-1 text-xs">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl">{trip.destination}</h1>
          <p className="text-white/80">{trip.location}</p>

          <div className="mt-4 flex flex-wrap items-center gap-6">
            <RatingStars rating={trip.rating} reviewCount={trip.reviewCount} className="text-white [&_span]:text-white" />
            <span className="flex items-center gap-1.5 text-sm">
              <FiClock className="size-4" /> {trip.durationDays}D / {trip.durationNights}N
            </span>
            <span className="flex items-center gap-1.5 text-sm">
              <FiCalendar className="size-4" /> Best: {trip.bestTimeToVisit}
            </span>
          </div>
        </Container>
      </section>

      <Container className="flex flex-col gap-20 py-20">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.6fr_1fr]">
          <div className="flex flex-col gap-16">
            {/* Description */}
            <div className="flex flex-col gap-4">
              <h2 className="font-heading text-3xl text-primary">About this trip</h2>
              <p className="text-foreground/70">{trip.description}</p>
            </div>

            {/* Gallery */}
            <div className="flex flex-col gap-4">
              <h2 className="font-heading text-3xl text-primary">Gallery</h2>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {trip.gallery.map((src, i) => (
                  <motion.img
                    key={src + i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    src={src}
                    alt=""
                    loading="lazy"
                    className={`aspect-square rounded-2xl object-cover ${i === 0 ? "col-span-2 row-span-2 aspect-auto h-full" : ""}`}
                  />
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className="flex flex-col gap-4">
              <h2 className="font-heading text-3xl text-primary">Highlights</h2>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {trip.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2 text-sm text-foreground/80">
                    <FiCheck className="mt-0.5 size-4 shrink-0 text-accent" /> {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {/* Things to do */}
            <div className="flex flex-col gap-4">
              <h2 className="font-heading text-3xl text-primary">Things to do</h2>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {trip.thingsToDo.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                    <FiCheck className="mt-0.5 size-4 shrink-0 text-accent" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Itinerary */}
            <div className="flex flex-col gap-4">
              <h2 className="font-heading text-3xl text-primary">Suggested Itinerary</h2>
              <Accordion type="single" collapsible defaultValue="day-1" className="w-full">
                {trip.itinerary.map((day) => (
                  <AccordionItem key={day.day} value={`day-${day.day}`}>
                    <AccordionTrigger className="font-heading text-lg text-primary">
                      Day {day.day}: {day.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/70">
                      {day.description}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Map */}
            <div className="flex flex-col gap-4">
              <h2 className="font-heading text-3xl text-primary">Location</h2>
              <DestinationMap destination={trip.destination} coordinates={trip.coordinates} />
            </div>

            {/* FAQs */}
            <div className="flex flex-col gap-4">
              <h2 className="font-heading text-3xl text-primary">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                {trip.faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-foreground/70">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* Sticky enquiry panel */}
          <aside className="h-fit lg:sticky lg:top-28">
            <div className="shadow-warm-lg flex flex-col gap-5 rounded-3xl border border-border bg-card p-6">
              <PriceTag amount={trip.priceFrom} />
              <p className="text-xs text-foreground/50">per person, all-inclusive</p>
              <Button asChild size="lg" className="rounded-full">
                <NavLink to={`/contact?destination=${encodeURIComponent(trip.destination)}`}>
                  Enquire Now
                </NavLink>
              </Button>
              <WishlistButton
                tripId={trip.id}
                className="static flex w-full items-center justify-center gap-2 rounded-full border border-border bg-transparent text-primary [&_svg]:text-primary"
              />
            </div>
          </aside>
        </div>

        {/* Related trips */}
        {relatedTrips.length > 0 && (
          <div className="flex flex-col gap-10">
            <SectionHeading eyebrow="You Might Also Like" title="Related trips" align="left" />
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedTrips.map((related) => (
                <TripCard key={related.id} trip={related} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </main>
  )
}
