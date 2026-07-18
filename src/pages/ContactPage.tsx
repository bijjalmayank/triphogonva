import { FiMail, FiPhone, FiMapPin } from "react-icons/fi"
import { Seo } from "@/components/common/Seo"
import { Container } from "@/components/common/Container"
import { SectionHeading } from "@/components/common/SectionHeading"
import { EnquiryForm } from "@/components/sections/EnquiryForm"
import { DestinationMap } from "@/components/common/DestinationMap"

export function ContactPage() {
  return (
    <main className="pt-24">
      <Seo
        title="Contact"
        description="Get in touch with Triphogonva's travel desk to start planning your next heritage or luxury trip."
        url="/contact"
      />
      <Container className="flex flex-col gap-16 py-16">
        <SectionHeading
          eyebrow="Contact"
          title="Let's plan your next trip"
          description="Fill in a few details and our travel desk will follow up with a tailored itinerary."
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div className="flex flex-col gap-8">
            <div className="shadow-warm-md flex flex-col gap-5 rounded-3xl border border-border bg-card p-8">
              <a href="mailto:hello@triphogonva.com" className="flex items-center gap-3 text-sm text-foreground/80">
                <FiMail className="size-4 text-accent" /> hello@triphogonva.com
              </a>
              <a href="tel:+911234567890" className="flex items-center gap-3 text-sm text-foreground/80">
                <FiPhone className="size-4 text-accent" /> +91 12345 67890
              </a>
              <span className="flex items-center gap-3 text-sm text-foreground/80">
                <FiMapPin className="size-4 text-accent" /> Jaipur, Rajasthan, India
              </span>
            </div>

            <DestinationMap destination="Triphogonva HQ" coordinates={[26.9124, 75.7873]} />
          </div>

          <div className="shadow-warm-md rounded-3xl border border-border bg-card p-8">
            <EnquiryForm />
          </div>
        </div>
      </Container>
    </main>
  )
}
