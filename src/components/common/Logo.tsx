import { cn } from "@/lib/utils"

interface LogoProps {
  variant?: "full" | "mark"
  tone?: "dark" | "light"
  className?: string
}

/**
 * Monogram: a "T" whose crossbar terminates in a thin horizon arc.
 * See BRANDING.md §2 for the full lockup rules.
 */
export function Logo({ variant = "full", tone = "dark", className }: LogoProps) {
  const inkColor = tone === "dark" ? "#1B3A2F" : "#FBF8F3"

  const mark = (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4 8.5C8 6 20 6 24 8.5"
        stroke={inkColor}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path d="M14 8V22" stroke={inkColor} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )

  if (variant === "mark") {
    return <span className={cn("inline-flex", className)}>{mark}</span>
  }

  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      {mark}
      <span
        className="font-heading text-lg tracking-[0.05em]"
        style={{ color: inkColor }}
      >
        triphogonva
      </span>
    </span>
  )
}
