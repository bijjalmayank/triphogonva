import { lazy } from "react"
import { createBrowserRouter } from "react-router-dom"
import { Layout } from "@/components/layout/Layout"

const HomePage = lazy(() => import("@/pages/HomePage").then((m) => ({ default: m.HomePage })))
const DestinationsPage = lazy(() =>
  import("@/pages/DestinationsPage").then((m) => ({ default: m.DestinationsPage })),
)
const DestinationDetailPage = lazy(() =>
  import("@/pages/DestinationDetailPage").then((m) => ({ default: m.DestinationDetailPage })),
)
const ExperiencesPage = lazy(() =>
  import("@/pages/ExperiencesPage").then((m) => ({ default: m.ExperiencesPage })),
)
const GalleryPage = lazy(() => import("@/pages/GalleryPage").then((m) => ({ default: m.GalleryPage })))
const AboutPage = lazy(() => import("@/pages/AboutPage").then((m) => ({ default: m.AboutPage })))
const ContactPage = lazy(() => import("@/pages/ContactPage").then((m) => ({ default: m.ContactPage })))
const WishlistPage = lazy(() =>
  import("@/pages/WishlistPage").then((m) => ({ default: m.WishlistPage })),
)
const NotFoundPage = lazy(() =>
  import("@/pages/NotFoundPage").then((m) => ({ default: m.NotFoundPage })),
)

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/destinations", element: <DestinationsPage /> },
      { path: "/destinations/:slug", element: <DestinationDetailPage /> },
      { path: "/experiences", element: <ExperiencesPage /> },
      { path: "/gallery", element: <GalleryPage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/wishlist", element: <WishlistPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
])
