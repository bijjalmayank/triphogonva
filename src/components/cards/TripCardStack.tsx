import { useLayoutEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import { Button } from "@/components/ui/button"
import { TripCard } from "@/components/cards/TripCard"
import type { Trip } from "@/types/trip"

interface TripCardStackProps {
  trips: Trip[]
}

const STACK_DEPTH = 3

export function TripCardStack({ trips }: TripCardStackProps) {
  const [index, setIndex] = useState(0)
  const activeCardRef = useRef<HTMLDivElement>(null)
  const [stackHeight, setStackHeight] = useState(0)

  function next() {
    setIndex((i) => (i + 1) % trips.length)
  }
  function prev() {
    setIndex((i) => (i - 1 + trips.length) % trips.length)
  }

  const layers = Array.from({ length: Math.min(STACK_DEPTH, trips.length) }, (_, depth) => {
    const tripIndex = (index + depth) % trips.length
    return { depth, trip: trips[tripIndex], key: `${trips[tripIndex].id}-${index}` }
  }).reverse()

  // The stack itself has no natural height (its children are absolutely
  // positioned), so it never reserves layout space for the tallest card —
  // the card just visually overflows and steals clicks meant for whatever
  // sits below it. Measure the active card and size the stack to match.
  useLayoutEffect(() => {
    const el = activeCardRef.current
    if (!el) return
    const observer = new ResizeObserver(([entry]) => {
      setStackHeight(entry.contentRect.height)
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [index])

  return (
    <div className="flex flex-col gap-6">
      <div
        className="relative transition-[height] duration-200"
        style={{ height: stackHeight || undefined }}
      >
        <AnimatePresence initial={false}>
          {layers.map(({ depth, trip, key }) => (
            <motion.div
              key={key}
              ref={depth === 0 ? activeCardRef : undefined}
              className={depth === 0 ? "absolute inset-x-0 top-0" : "absolute inset-x-0 top-0 pointer-events-none"}
              style={{ zIndex: STACK_DEPTH - depth }}
              initial={depth === 0 ? { opacity: 0, x: 80, scale: 0.96 } : false}
              animate={{
                opacity: depth === 0 ? 1 : 1 - depth * 0.35,
                scale: 1 - depth * 0.05,
                y: depth * 14,
                x: 0,
              }}
              exit={{ opacity: 0, x: -80, scale: 0.96, transition: { duration: 0.25 } }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              drag={depth === 0 ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.6}
              onDragEnd={(_, info) => {
                if (info.offset.x < -80) next()
                else if (info.offset.x > 80) prev()
              }}
            >
              <TripCard trip={trip} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-center gap-4">
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="rounded-full"
          onClick={prev}
          aria-label="Previous trip"
        >
          <FiChevronLeft />
        </Button>
        <span className="text-sm text-foreground/60 tabular-nums">
          {index + 1} / {trips.length}
        </span>
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="rounded-full"
          onClick={next}
          aria-label="Next trip"
        >
          <FiChevronRight />
        </Button>
      </div>
    </div>
  )
}
