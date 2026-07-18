import { motion } from "framer-motion"
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi"
import { Container } from "@/components/common/Container"
import { SectionHeading } from "@/components/common/SectionHeading"
import { EnquiryForm } from "@/components/sections/EnquiryForm"

export function ContactSection() {
  return (
    <section className="py-24" id="contact">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Plan Your Trip"
          title="Tell us where you want to go"
          description="Share a few details and our travel desk will put together a tailored itinerary."
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.3fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-primary shadow-warm-lg flex flex-col justify-between gap-10 rounded-3xl p-8 text-background"
          >
            <div className="flex flex-col gap-4">
              <h3 className="font-heading text-2xl">Talk to our travel desk</h3>
              <p className="text-sm text-background/70">
                We usually respond within a few hours during business days.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <a href="mailto:hello@triphogonva.com" className="flex items-center gap-3 text-sm">
                <FiMail className="size-4 text-accent" /> hello@triphogonva.com
              </a>
              <a href="tel:+911234567890" className="flex items-center gap-3 text-sm">
                <FiPhone className="size-4 text-accent" /> +91 12345 67890
              </a>
              <span className="flex items-center gap-3 text-sm">
                <FiMapPin className="size-4 text-accent" /> Jaipur, Rajasthan, India
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="shadow-warm-md rounded-3xl border border-border bg-card p-8"
          >
            <EnquiryForm />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
