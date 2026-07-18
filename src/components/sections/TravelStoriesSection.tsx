import { motion } from "framer-motion"
import { NavLink } from "react-router-dom"
import { Container } from "@/components/common/Container"
import { SectionHeading } from "@/components/common/SectionHeading"
import { stories } from "@/constants/stories"

export function TravelStoriesSection() {
  return (
    <section className="py-24">
      <Container className="flex flex-col gap-10">
        <SectionHeading eyebrow="Travel Stories" title="Notes from the field" align="left" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {stories.map((story, i) => (
            <motion.article
              key={story.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
              className="group flex flex-col gap-4"
            >
              <NavLink to="/gallery" className="block overflow-hidden rounded-3xl">
                <img
                  src={story.image}
                  alt=""
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </NavLink>
              <div className="flex flex-col gap-2">
                <span className="text-xs tracking-wide text-accent uppercase">{story.readTime}</span>
                <h3 className="font-heading text-xl text-primary">{story.title}</h3>
                <p className="text-sm text-foreground/70">{story.excerpt}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  )
}
