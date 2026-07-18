import { motion } from "framer-motion"
import { FiStar } from "react-icons/fi"
import { Container } from "@/components/common/Container"
import { SectionHeading } from "@/components/common/SectionHeading"
import { testimonials } from "@/constants/testimonials"

export function TestimonialsSection() {
  return (
    <section className="bg-secondary/40 py-24">
      <Container className="flex flex-col gap-10">
        <SectionHeading eyebrow="Traveler Stories" title="What it's like to travel with us" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, i) => (
            <motion.figure
              key={testimonial.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
              className="glass-dark shadow-warm-sm flex flex-col gap-4 rounded-3xl p-6"
            >
              <div className="flex gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <FiStar
                    key={idx}
                    className={idx < Math.round(testimonial.rating) ? "fill-accent" : "text-white/30"}
                  />
                ))}
              </div>
              <blockquote className="text-sm text-background/90">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-auto flex flex-col text-sm">
                <span className="font-medium text-background">{testimonial.name}</span>
                <span className="text-background/60">
                  {testimonial.location} &middot; {testimonial.trip}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </Container>
    </section>
  )
}
