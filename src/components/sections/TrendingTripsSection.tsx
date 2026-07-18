import { useEffect, useRef } from "react"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import { Container } from "@/components/common/Container"
import { SectionHeading } from "@/components/common/SectionHeading"
import { TripCard } from "@/components/cards/TripCard"
import { Button } from "@/components/ui/button"
import { trips } from "@/constants/trips"

export function TrendingTripsSection() {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

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

  useEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller) return

    let rafId = 0

    // Stacked-carousel look: the card nearest the container's center sits
    // forward at full scale/opacity; cards further to either side recede —
    // scaled down, dimmed, and pushed back — proportional to their distance
    // from center. Symmetric on both sides, works for any card count.
    function updateCardTransforms() {
      const containerRect = scroller!.getBoundingClientRect()
      const containerCenter = containerRect.left + containerRect.width / 2

      for (const card of cardRefs.current) {
        if (!card) continue
        const cardRect = card.getBoundingClientRect()
        const cardCenter = cardRect.left + cardRect.width / 2
        const distance = Math.abs(cardCenter - containerCenter)
        const maxDistance = containerRect.width / 2 + cardRect.width / 2
        const progress = Math.min(distance / maxDistance, 1)

        const scale = 1 - progress * 0.16
        const opacity = 1 - progress * 0.6
        const translateY = progress * 16

        card.style.transform = `scale(${scale}) translateY(${translateY}px)`
        card.style.opacity = String(opacity)
      }
    }

    function onScroll() {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(updateCardTransforms)
    }

    updateCardTransforms()
    scroller.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      scroller.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      cancelAnimationFrame(rafId)
    }
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
          className="scrollbar-none flex snap-x snap-mandatory gap-6 overflow-x-auto overflow-y-hidden py-4"
        >
          {trips.map((trip, index) => (
            <div
              key={trip.id}
              ref={(el) => {
                cardRefs.current[index] = el
              }}
              className="w-[82%] shrink-0 snap-start transition-[transform,opacity] duration-200 ease-out sm:w-[46%] lg:w-[31%] xl:w-[27%]"
            >
              <TripCard trip={trip} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
