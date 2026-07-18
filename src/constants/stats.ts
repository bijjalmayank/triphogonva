import type { IconType } from "react-icons"
import { FiMapPin, FiSmile, FiAward, FiCalendar } from "react-icons/fi"

export interface Stat {
  label: string
  value: number
  suffix?: string
  icon: IconType
}

export const stats: Stat[] = [
  { label: "Destinations curated", value: 120, suffix: "+", icon: FiMapPin },
  { label: "Happy travelers", value: 8600, suffix: "+", icon: FiSmile },
  { label: "Years of experience", value: 12, suffix: "+", icon: FiAward },
  { label: "Trips planned yearly", value: 950, suffix: "+", icon: FiCalendar },
]
