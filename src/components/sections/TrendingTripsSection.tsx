import { useEffect, useRef } from "react"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import { Container } from "@/components/common/Container"
import { SectionHeading } from "@/components/common/SectionHeading"
import { TripCard } from "@/components/cards/TripCard"
import { Button } from "@/components/ui/button"
import { trips } from "@/constants/trips"

export function TrendingTripsSection() {
  const scrollerRef = useRef<HTMLDivElement>(null)

  function scrollByAmount(direction: 1 | -1) {
    const el = scrollerRef.current
    if (!el) return
    el.scrollBy({ left: direction * el.clientWidth * 0.85, behavior: "smooth" })
  }

  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return

    // Browsers redirect plain vertical wheel scroll into horizontal scroll
    // for any element that only overflows horizontally. That traps normal
    // page scrolling whenever the cursor is over this carousel — let
    // vertical intent scroll the page instead, and keep horizontal wheel
    // gestures (deltaX-dominant, e.g. trackpads) scrolling the carousel.
    function onWheel(event: WheelEvent) {
      if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
        event.preventDefault()
        window.scrollBy({ top: event.deltaY })
      }
    }

    el.addEventListener("wheel", onWheel, { passive: false })
    return () => el.removeEventListener("wheel", onWheel)
  }, [])

  return (
    <section className="py-24">
      <Container className="flex flex-col gap-10">
        <div className="flex items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Trending Now"
            title="Trips travelers can't stop booking"
            description="A rotating edit of the destinations getting the most attention this season."
            align="left"
          />
          <div className="hidden shrink-0 gap-2 sm:flex">
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={() => scrollByAmount(-1)}
              aria-label="Scroll left"
            >
              <FiChevronLeft />
            </Button>
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={() => scrollByAmount(1)}
              aria-label="Scroll right"
            >
              <FiChevronRight />
            </Button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="scrollbar-none flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2"
        >
          {trips.map((trip) => (
            <div
              key={trip.id}
              className="w-[82%] shrink-0 snap-start sm:w-[46%] lg:w-[31%] xl:w-[27%]"
            >
              <TripCard trip={trip} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
