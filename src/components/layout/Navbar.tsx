import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { motion } from "framer-motion"
import { Logo } from "@/components/common/Logo"
import { Container } from "@/components/common/Container"
import { Button } from "@/components/ui/button"
import { desktopNavLinks } from "@/constants/nav"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 hidden transition-all duration-300 lg:block",
        scrolled ? "glass shadow-warm-sm py-3" : "bg-transparent py-6",
      )}
    >
      <Container className="flex items-center justify-between">
        <NavLink to="/" aria-label="Triphogonva home">
          <Logo tone={scrolled ? "dark" : "light"} />
        </NavLink>

        <nav className="flex items-center gap-5 xl:gap-8">
          {desktopNavLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium tracking-wide transition-colors duration-200",
                  scrolled ? "text-foreground" : "text-white",
                  isActive && (scrolled ? "text-primary" : "text-accent"),
                  "hover:text-accent",
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <Button asChild size="sm">
          <NavLink to="/contact">Enquire Now</NavLink>
        </Button>
      </Container>
    </motion.header>
  )
}
