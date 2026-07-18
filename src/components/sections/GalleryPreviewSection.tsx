import { useState } from "react"
import { motion } from "framer-motion"
import { NavLink } from "react-router-dom"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/common/Container"
import { SectionHeading } from "@/components/common/SectionHeading"
import { hampiGallery } from "@/constants/media"

export function GalleryPreviewSection() {
  const [activeImage, setActiveImage] = useState<string | null>(null)
  const previewImages = hampiGallery.slice(0, 9)

  return (
    <section className="py-24">
      <Container className="flex flex-col gap-10">
        <SectionHeading eyebrow="Photo Gallery" title="Moments from the road" />

        <div className="columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4">
          {previewImages.map((src, i) => (
            <motion.button
              key={src}
              type="button"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: (i % 6) * 0.05 }}
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

        <div className="flex justify-center">
          <Button asChild variant="outline" size="lg" className="rounded-full px-8">
            <NavLink to="/gallery">View Full Gallery</NavLink>
          </Button>
        </div>
      </Container>

      <Dialog open={!!activeImage} onOpenChange={(open) => !open && setActiveImage(null)}>
        <DialogContent className="max-w-3xl border-0 bg-transparent p-0 shadow-none">
          <DialogTitle className="sr-only">Gallery image preview</DialogTitle>
          {activeImage && (
            <img src={activeImage} alt="" className="w-full rounded-2xl" />
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
