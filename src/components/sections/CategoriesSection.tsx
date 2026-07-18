import { motion } from "framer-motion"
import { NavLink } from "react-router-dom"
import { Container } from "@/components/common/Container"
import { SectionHeading } from "@/components/common/SectionHeading"
import { categories } from "@/constants/categories"

export function CategoriesSection() {
  return (
    <section className="py-24">
      <Container className="flex flex-col gap-10">
        <SectionHeading eyebrow="Browse by Mood" title="Find a trip that matches the moment" />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map((category, i) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: (i % 4) * 0.07 }}
            >
              <NavLink
                to={`/destinations?category=${encodeURIComponent(category.name)}`}
                className="group relative flex aspect-square flex-col items-center justify-center gap-3 overflow-hidden rounded-3xl"
              >
                <img
                  src={category.image}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                <category.icon className="relative size-6 text-white" />
                <span className="relative text-sm font-medium text-white">{category.name}</span>
              </NavLink>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
