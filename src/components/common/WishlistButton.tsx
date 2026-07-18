import { motion } from "framer-motion"
import { FiHeart } from "react-icons/fi"
import { cn } from "@/lib/utils"
import { useWishlist } from "@/hooks/useWishlist"

interface WishlistButtonProps {
  tripId: string
  className?: string
}

export function WishlistButton({ tripId, className }: WishlistButtonProps) {
  const { isWishlisted, toggle } = useWishlist()
  const active = isWishlisted(tripId)

  return (
    <motion.button
      type="button"
      aria-label={active ? "Remove from wishlist" : "Add to wishlist"}
      aria-pressed={active}
      whileTap={{ scale: 0.85 }}
      onClick={(event) => {
        event.preventDefault()
        event.stopPropagation()
        toggle(tripId)
      }}
      className={cn(
        "glass flex size-9 items-center justify-center rounded-full text-white transition-colors duration-200",
        className,
      )}
    >
      <FiHeart className={cn("size-[18px]", active && "fill-accent text-accent")} />
    </motion.button>
  )
}
