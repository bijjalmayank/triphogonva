import { FiCompass, FiHeart, FiShield } from "react-icons/fi"
import { Seo } from "@/components/common/Seo"
import { Container } from "@/components/common/Container"
import { SectionHeading } from "@/components/common/SectionHeading"
import { AnimatedCounter } from "@/components/common/AnimatedCounter"
import { stats } from "@/constants/stats"
import { hampiImages } from "@/constants/media"

const values = [
  { icon: FiCompass, title: "Curated, not catalogued", description: "We design fewer trips, more deliberately — every itinerary reflects a place's actual character." },
  { icon: FiShield, title: "Ground-level trust", description: "Our partners on the ground are vetted the way we'd vet a stay for our own family." },
  { icon: FiHeart, title: "Care past the booking", description: "A single point of contact from your first enquiry through the last day of the trip." },
]

export function AboutPage() {
  return (
    <main className="pt-24">
      <Seo
        title="About Us"
        description="Triphogonva is built by travelers who design fewer trips, more deliberately — heritage and luxury travel without the theme-park gloss."
        url="/about"
      />
      <section className="relative flex min-h-[50vh] items-center overflow-hidden">
        <img
          src={hampiImages.sunsetPoint}
          alt=""
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/50" />
        <Container className="relative z-10 flex flex-col gap-4 text-white">
          <span className="text-xs tracking-[0.2em] text-accent uppercase">About Triphogonva</span>
          <h1 className="max-w-2xl font-heading text-4xl sm:text-5xl">
            Travel that feels like discovery, not a checklist
          </h1>
        </Container>
      </section>

      <Container className="flex flex-col gap-20 py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Our Story"
            align="left"
            title="Built by travelers who got tired of generic itineraries"
            description="Triphogonva started with a simple frustration: most travel planning treats every destination the same way. We wanted trips that respected a place's history, pace, and people — heritage and luxury without the theme-park gloss."
          />
          <SectionHeading
            eyebrow="Our Approach"
            align="left"
            title="Fewer trips, planned with more intent"
            description="Every itinerary on Triphogonva is built by someone who has actually been there — not assembled from a database. We work with a small set of trusted local partners rather than the cheapest available option."
          />
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {values.map((value) => (
            <div key={value.title} className="flex flex-col gap-3">
              <value.icon className="size-7 text-accent" />
              <h3 className="font-heading text-lg text-primary">{value.title}</h3>
              <p className="text-sm text-foreground/70">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-primary shadow-warm-lg grid grid-cols-2 gap-8 rounded-3xl p-10 text-background sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-2 text-center">
              <stat.icon className="size-5 text-accent" />
              <AnimatedCounter value={stat.value} suffix={stat.suffix} className="text-3xl" />
              <span className="text-xs tracking-wide text-background/60 uppercase">{stat.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </main>
  )
}
