import { motion } from "framer-motion"
import { NavLink } from "react-router-dom"
import { Container } from "@/components/common/Container"
import { SectionHeading } from "@/components/common/SectionHeading"
import { trips } from "@/constants/trips"

export function PopularDestinationsSection() {
  const featured = trips.slice(0, 6)

  return (
    <section className="py-24">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="Popular Destinations"
          title="Where travelers are heading this year"
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {featured.map((trip, i) => (
            <motion.div
              key={trip.id}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: (i % 6) * 0.06 }}
              className={i === 0 || i === 3 ? "col-span-2 row-span-2" : ""}
            >
              <NavLink
                to={`/destinations/${trip.slug}`}
                className="group relative block h-full min-h-40 overflow-hidden rounded-3xl"
              >
                <img
                  src={trip.coverImage}
                  alt={trip.destination}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-4 font-heading text-white">
                  {trip.destination}
                </span>
              </NavLink>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
