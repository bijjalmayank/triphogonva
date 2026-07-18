import type { IconType } from "react-icons"
import {
  FiCompass,
  FiHome,
  FiFeather,
  FiAward,
  FiSun,
  FiMap,
  FiCalendar,
  FiGlobe,
} from "react-icons/fi"
import type { TripCategory } from "@/types/trip"

export interface CategoryTile {
  name: TripCategory
  icon: IconType
  image: string
}

import { hampiImages } from "@/constants/media"

export const categories: CategoryTile[] = [
  { name: "Adventure", icon: FiCompass, image: hampiImages.matangaHillSunrise },
  { name: "Historical", icon: FiHome, image: hampiImages.stoneChariot },
  { name: "Wildlife", icon: FiFeather, image: hampiImages.scenery2 },
  { name: "Luxury", icon: FiAward, image: hampiImages.sunsetPoint },
  { name: "Pilgrimage", icon: FiSun, image: hampiImages.lotusTemple },
  { name: "Road Trips", icon: FiMap, image: hampiImages.beautifulArchitecture },
  { name: "Weekend Getaways", icon: FiCalendar, image: hampiImages.karnatakaIndia2 },
  { name: "International", icon: FiGlobe, image: hampiImages.karnatakaIndia3 },
]
