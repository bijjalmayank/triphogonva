import type { IconType } from "react-icons"
import { FiCompass, FiHeart, FiHome, FiPhone, FiUser } from "react-icons/fi"

export interface NavLink {
  label: string
  href: string
}

export const desktopNavLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/destinations" },
  { label: "Experiences", href: "/experiences" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

export interface MobileNavLink {
  label: string
  href: string
  icon: IconType
}

export const mobileNavLinks: MobileNavLink[] = [
  { label: "Home", href: "/", icon: FiHome },
  { label: "Explore", href: "/destinations", icon: FiCompass },
  { label: "Wishlist", href: "/wishlist", icon: FiHeart },
  { label: "Contact", href: "/contact", icon: FiPhone },
  { label: "About", href: "/about", icon: FiUser },
]
