import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: "left" | "center"
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && (
        <span className="text-xs font-medium tracking-[0.2em] text-accent uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="text-balance max-w-2xl text-3xl text-primary sm:text-4xl lg:text-[44px]">
        {title}
      </h2>
      {description && (
        <p className="max-w-xl text-base text-foreground/70">{description}</p>
      )}
    </motion.div>
  )
}
