import { formatPrice } from "@/utils/format"
import { cn } from "@/lib/utils"

interface PriceTagProps {
  amount: number
  className?: string
}

export function PriceTag({ amount, className }: PriceTagProps) {
  return (
    <div className={cn("flex flex-col", className)}>
      <span className="text-xs tracking-wide text-foreground/50 uppercase">Starting from</span>
      <span className="text-lg font-medium text-primary tabular-nums">
        {formatPrice(amount)}
      </span>
    </div>
  )
}
