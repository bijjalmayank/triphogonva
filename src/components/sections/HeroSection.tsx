import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { motion } from "framer-motion"
import { NavLink, useNavigate } from "react-router-dom"
import { FiSearch, FiMapPin } from "react-icons/fi"
import { Button } from "@/components/ui/button"
import { heroImage } from "@/constants/media"
import { trips } from "@/constants/trips"

interface HeroSectionProps {
  /** Optional MP4 background — drop a file into src/assets and pass its import here to replace the image. */
  videoSrc?: string
}

export function HeroSection({ videoSrc }: HeroSectionProps) {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (!headingRef.current) return
    const words = headingRef.current.querySelectorAll("span[data-word]")
    gsap.fromTo(
      words,
      { yPercent: 120, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.08,
        delay: 0.2,
      },
    )
  }, [])

  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const destination = formData.get("destination")?.toString()
    navigate(destination ? `/destinations?q=${encodeURIComponent(destination)}` : "/destinations")
  }

  const heading = "Journeys Worth Remembering"

  return (
    <section className="relative flex min-h-svh items-center justify-center overflow-hidden">
      {videoSrc ? (
        <video
          className="absolute inset-0 size-full object-cover"
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      ) : (
        <img
          src={heroImage}
          alt=""
          className="absolute inset-0 size-full object-cover"
          fetchPriority="high"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />

      <div className="relative z-10 flex w-full flex-col items-center gap-8 px-5 text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xs font-medium tracking-[0.3em] text-accent uppercase"
        >
          Heritage &middot; Luxury &middot; Aesthetics
        </motion.span>

        <h1
          ref={headingRef}
          className="max-w-4xl text-5xl text-white sm:text-6xl lg:text-7xl"
        >
          {heading.split(" ").map((word, i) => (
            <span key={i} className="inline-block overflow-hidden pb-2 align-top">
              <span data-word className="inline-block">
                {word}
                {i < heading.split(" ").length - 1 ? " " : ""}
              </span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-xl text-balance text-base text-white/80 sm:text-lg"
        >
          Handpicked destinations, curated itineraries, and stays that feel
          like discoveries — not checklists.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex gap-4"
        >
          <Button asChild size="lg" className="rounded-full px-8">
            <NavLink to="/destinations">Explore Trips</NavLink>
          </Button>
          <Button asChild variant="outline" size="lg" className="glass rounded-full border-white/40 px-8 text-white hover:bg-white/20">
            <NavLink to="/contact">Contact Us</NavLink>
          </Button>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          onSubmit={handleSearch}
          className="glass mt-4 flex w-full max-w-xl items-center gap-2 rounded-full p-2 pl-5"
        >
          <FiMapPin className="size-4 shrink-0 text-white/70" />
          <input
            name="destination"
            type="text"
            list="hero-destinations"
            placeholder="Where do you want to go?"
            className="w-full bg-transparent text-sm text-white placeholder:text-white/60 focus:outline-none"
          />
          <datalist id="hero-destinations">
            {trips.map((trip) => (
              <option key={trip.id} value={trip.destination} />
            ))}
          </datalist>
          <Button type="submit" size="icon" className="shrink-0 rounded-full">
            <FiSearch className="size-4" />
          </Button>
        </motion.form>
      </div>
    </section>
  )
}
