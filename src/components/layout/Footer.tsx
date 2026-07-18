import { NavLink } from "react-router-dom"
import { FiInstagram, FiFacebook, FiMail, FiPhone, FiMapPin } from "react-icons/fi"
import { Logo } from "@/components/common/Logo"
import { Container } from "@/components/common/Container"
import { desktopNavLinks } from "@/constants/nav"

export function Footer() {
  return (
    <footer className="bg-primary text-background/90 pt-16 pb-28 lg:pb-16">
      <Container className="flex flex-col gap-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Logo tone="light" />
            <p className="max-w-xs text-sm text-background/60">
              Heritage-rich, handcrafted travel experiences across India and
              beyond — curated for those who want more than a checklist.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xs tracking-[0.2em] text-accent uppercase">Explore</span>
            {desktopNavLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className="text-sm text-background/70 transition-colors hover:text-accent"
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xs tracking-[0.2em] text-accent uppercase">Contact</span>
            <a
              href="mailto:hello@triphogonva.com"
              className="flex items-center gap-2 text-sm text-background/70 transition-colors hover:text-accent"
            >
              <FiMail className="size-4" /> hello@triphogonva.com
            </a>
            <a
              href="tel:+911234567890"
              className="flex items-center gap-2 text-sm text-background/70 transition-colors hover:text-accent"
            >
              <FiPhone className="size-4" /> +91 12345 67890
            </a>
            <span className="flex items-center gap-2 text-sm text-background/70">
              <FiMapPin className="size-4" /> Jaipur, Rajasthan, India
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xs tracking-[0.2em] text-accent uppercase">Follow</span>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="glass flex size-9 items-center justify-center rounded-full transition-colors hover:text-accent"
              >
                <FiInstagram className="size-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="glass flex size-9 items-center justify-center rounded-full transition-colors hover:text-accent"
              >
                <FiFacebook className="size-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-background/15 pt-6 text-xs text-background/50 sm:flex-row">
          <span>© {new Date().getFullYear()} Triphogonva. All rights reserved.</span>
          <span>Designed with heritage &amp; heart.</span>
        </div>
      </Container>
    </footer>
  )
}
