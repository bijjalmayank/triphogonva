import { motion } from "framer-motion"
import { FiShield, FiHeart, FiHeadphones, FiCompass } from "react-icons/fi"
import { Container } from "@/components/common/Container"
import { SectionHeading } from "@/components/common/SectionHeading"
import { AnimatedCounter } from "@/components/common/AnimatedCounter"
import { stats } from "@/constants/stats"

const pillars = [
  { icon: FiCompass, title: "Curated, not generic", description: "Every itinerary is built around a place's character, not a template." },
  { icon: FiShield, title: "Trusted local partners", description: "Vetted stays and guides we'd send our own family to." },
  { icon: FiHeart, title: "Handled with care", description: "From first enquiry to the last day, a single point of contact." },
  { icon: FiHeadphones, title: "Support on the ground", description: "Reachable throughout your trip — not just before you book." },
]

export function WhyChooseUsSection() {
  return (
    <section className="bg-primary py-24 text-background">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow="Why Triphogonva"
          title="Travel planning, done with intent"
          className="[&_h2]:text-background [&_p]:text-background/70"
        />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
              className="flex flex-col gap-3"
            >
              <pillar.icon className="size-7 text-accent" />
              <h3 className="text-lg text-background">{pillar.title}</h3>
              <p className="text-sm text-background/60">{pillar.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-8 border-t border-background/15 pt-12 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-2 text-center">
              <stat.icon className="size-5 text-accent" />
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                className="text-3xl text-background sm:text-4xl"
              />
              <span className="text-xs tracking-wide text-background/60 uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
