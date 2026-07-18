import { FiStar } from "react-icons/fi"
import { cn } from "@/lib/utils"

interface RatingStarsProps {
  rating: number
  reviewCount?: number
  className?: string
}

export function RatingStars({ rating, reviewCount, className }: RatingStarsProps) {
  return (
    <div className={cn("flex items-center gap-1.5", className)}>
      <FiStar className="size-4 fill-accent text-accent" />
      <span className="text-sm font-medium text-foreground">{rating.toFixed(1)}</span>
      {reviewCount !== undefined && (
        <span className="text-sm text-foreground/50">({reviewCount})</span>
      )}
    </div>
  )
}
