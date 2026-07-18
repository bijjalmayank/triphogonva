import { useState } from "react"
import { motion } from "framer-motion"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Seo } from "@/components/common/Seo"
import { Container } from "@/components/common/Container"
import { SectionHeading } from "@/components/common/SectionHeading"
import { hampiGallery } from "@/constants/media"

export function GalleryPage() {
  const [activeImage, setActiveImage] = useState<string | null>(null)

  return (
    <main className="pt-24">
      <Seo
        title="Gallery"
        description="A visual gallery of the destinations Triphogonva curates — real photography from real trips."
        url="/gallery"
      />
      <Container className="flex flex-col gap-10 py-16">
        <SectionHeading
          eyebrow="Gallery"
          title="A visual record of the road"
          description="Every frame here is a real destination our travelers have walked through."
        />

        <div className="columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4">
          {hampiGallery.map((src, i) => (
            <motion.button
              key={src}
              type="button"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: (i % 8) * 0.04 }}
              onClick={() => setActiveImage(src)}
              className="group block w-full overflow-hidden rounded-2xl"
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </motion.button>
          ))}
        </div>
      </Container>

      <Dialog open={!!activeImage} onOpenChange={(open) => !open && setActiveImage(null)}>
        <DialogContent className="max-w-3xl border-0 bg-transparent p-0 shadow-none">
          <DialogTitle className="sr-only">Gallery image preview</DialogTitle>
          {activeImage && <img src={activeImage} alt="" className="w-full rounded-2xl" />}
        </DialogContent>
      </Dialog>
    </main>
  )
}
