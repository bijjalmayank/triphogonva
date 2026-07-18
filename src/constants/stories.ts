import { hampiImages } from "@/constants/media"

export interface Story {
  slug: string
  title: string
  excerpt: string
  readTime: string
  image: string
}

export const stories: Story[] = [
  {
    slug: "hampi-golden-hour",
    title: "Chasing Golden Hour Through Hampi's Ruins",
    excerpt: "Why sunrise at Matanga Hill is worth the 5am alarm — a photo-led guide to Hampi's best light.",
    readTime: "6 min read",
    image: hampiImages.matangaHillSunrise,
  },
  {
    slug: "rajasthan-palace-hotels",
    title: "Rajasthan's Palace Hotels, Ranked",
    excerpt: "From Udaipur's lake palaces to Jaisalmer's desert forts — where heritage stays actually deliver.",
    readTime: "8 min read",
    image: hampiImages.beautifulArchitecture,
  },
  {
    slug: "kerala-slow-travel",
    title: "The Case for Slow Travel in Kerala",
    excerpt: "Three days on a houseboat taught us more about pacing a trip than any guidebook.",
    readTime: "5 min read",
    image: hampiImages.scenery1,
  },
]
