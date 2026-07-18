import { FiExternalLink, FiMapPin } from "react-icons/fi"
import { cn } from "@/lib/utils"

interface DestinationMapProps {
  destination: string
  coordinates: [number, number]
  className?: string
}

const ZOOM = 13

function toTileCoordinates(lat: number, lon: number, zoom: number) {
  const n = 2 ** zoom
  const x = Math.floor(((lon + 180) / 360) * n)
  const latRad = (lat * Math.PI) / 180
  const y = Math.floor(((1 - Math.asinh(Math.tan(latRad)) / Math.PI) / 2) * n)
  return { x, y }
}

export function DestinationMap({ destination, coordinates, className }: DestinationMapProps) {
  const [lat, lon] = coordinates
  const { x, y } = toTileCoordinates(lat, lon, ZOOM)
  const tiles = [
    [x, y],
    [x + 1, y],
    [x, y + 1],
    [x + 1, y + 1],
  ]
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(destination)}`

  return (
    <a
      href={googleMapsUrl}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "shadow-warm-md group relative block overflow-hidden rounded-3xl bg-muted",
        className,
      )}
    >
      <div className="grid h-64 grid-cols-2 grid-rows-2 overflow-hidden transition-transform duration-500 group-hover:scale-105 sm:h-80">
        {tiles.map(([tx, ty]) => (
          <img
            key={`${tx}-${ty}`}
            src={`https://tile.openstreetmap.org/${ZOOM}/${tx}/${ty}.png`}
            alt=""
            loading="lazy"
            className="size-full object-cover"
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />

      <div className="absolute inset-x-4 bottom-4 flex items-center justify-between">
        <span className="flex items-center gap-1.5 text-sm font-medium text-white">
          <FiMapPin className="size-4 text-accent" /> {destination}
        </span>
        <span className="glass flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-white">
          View on Google Maps <FiExternalLink className="size-3.5" />
        </span>
      </div>

      <span className="absolute top-2 right-2 rounded bg-black/40 px-1.5 py-0.5 text-[9px] text-white/70">
        © OpenStreetMap
      </span>
    </a>
  )
}
