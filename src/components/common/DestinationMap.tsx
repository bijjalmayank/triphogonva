import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import { cn } from "@/lib/utils"

interface NearbyPoint {
  name: string
  coordinates: [number, number]
}

interface DestinationMapProps {
  destination: string
  coordinates: [number, number]
  nearby?: NearbyPoint[]
  className?: string
}

function createPinIcon(color: string) {
  return L.divIcon({
    className: "",
    html: `<span style="
      display:block;
      width:16px;
      height:16px;
      border-radius:9999px;
      background:${color};
      border:3px solid white;
      box-shadow:0 2px 8px rgba(27,58,47,0.4);
    "></span>`,
    iconSize: [16, 16],
    iconAnchor: [8, 8],
  })
}

const primaryIcon = createPinIcon("#1B3A2F")
const accentIcon = createPinIcon("#C6A15B")

export function DestinationMap({
  destination,
  coordinates,
  nearby = [],
  className,
}: DestinationMapProps) {
  return (
    <div className={cn("shadow-warm-md overflow-hidden rounded-3xl", className)}>
      <MapContainer
        center={coordinates}
        zoom={12}
        scrollWheelZoom={false}
        className="h-[420px] w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={coordinates} icon={primaryIcon}>
          <Popup>{destination}</Popup>
        </Marker>
        {nearby.map((point) => (
          <Marker key={point.name} position={point.coordinates} icon={accentIcon}>
            <Popup>{point.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}
