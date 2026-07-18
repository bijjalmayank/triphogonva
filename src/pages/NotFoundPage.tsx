import { NavLink } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Seo } from "@/components/common/Seo"

export function NotFoundPage() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-6 pt-24 text-center">
      <Seo title="Page Not Found" description="This page doesn't exist." noindex />
      <span className="text-xs tracking-[0.2em] text-accent uppercase">404</span>
      <h1 className="text-4xl text-primary sm:text-5xl">This trail goes nowhere</h1>
      <p className="max-w-md text-foreground/70">
        The page you're looking for has wandered off the map.
      </p>
      <Button asChild>
        <NavLink to="/">Back to Home</NavLink>
      </Button>
    </main>
  )
}
