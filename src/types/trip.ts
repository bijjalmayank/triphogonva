export type TripCategory =
  | "Adventure"
  | "Historical"
  | "Wildlife"
  | "Luxury"
  | "Pilgrimage"
  | "Road Trips"
  | "Weekend Getaways"
  | "International"

export interface ItineraryDay {
  day: number
  title: string
  description: string
}

export interface Faq {
  question: string
  answer: string
}

export interface Trip {
  id: string
  slug: string
  destination: string
  location: string
  coordinates: [number, number]
  durationDays: number
  durationNights: number
  priceFrom: number
  rating: number
  reviewCount: number
  tags: string[]
  category: TripCategory
  shortDescription: string
  description: string
  highlights: string[]
  thingsToDo: string[]
  bestTimeToVisit: string
  itinerary: ItineraryDay[]
  faqs: Faq[]
  coverImage: string
  gallery: string[]
}
