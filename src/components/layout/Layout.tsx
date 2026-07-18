import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Navbar } from "@/components/layout/Navbar"
import { MobileNav } from "@/components/layout/MobileNav"
import { Footer } from "@/components/layout/Footer"
import { PageLoader } from "@/components/layout/PageLoader"
import { ScrollToTop } from "@/components/layout/ScrollToTop"

export function Layout() {
  return (
    <TooltipProvider>
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
      <Footer />
      <MobileNav />
    </TooltipProvider>
  )
}
