import { NavLink, useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import { mobileNavLinks } from "@/constants/nav"
import { cn } from "@/lib/utils"

export function MobileNav() {
  const { pathname } = useLocation()

  return (
    <nav
      aria-label="Primary"
      className="glass-dark shadow-warm-lg fixed inset-x-4 bottom-4 z-50 flex items-center justify-between rounded-full px-2 py-2 lg:hidden"
    >
      {mobileNavLinks.map((link) => {
        const isActive =
          link.href === "/" ? pathname === "/" : pathname.startsWith(link.href)

        return (
          <NavLink
            key={link.href}
            to={link.href}
            className="relative flex flex-1 flex-col items-center gap-1 rounded-full py-2 text-white"
          >
            {isActive && (
              <motion.span
                layoutId="mobile-nav-active"
                className="bg-accent/25 absolute inset-0 rounded-full"
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            )}
            <link.icon
              className={cn(
                "relative size-5 transition-colors duration-200",
                isActive ? "text-accent" : "text-white/70",
              )}
            />
            <span
              className={cn(
                "relative text-[10px] font-medium tracking-wide transition-colors duration-200",
                isActive ? "text-accent" : "text-white/70",
              )}
            >
              {link.label}
            </span>
          </NavLink>
        )
      })}
    </nav>
  )
}
