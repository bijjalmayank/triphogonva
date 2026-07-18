import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import { motion } from "framer-motion"
import { FiCheckCircle, FiAlertCircle, FiLoader } from "react-icons/fi"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { trips } from "@/constants/trips"

type Status = "idle" | "submitting" | "success" | "error"

const budgetRanges = [
  "Under ₹20,000",
  "₹20,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000+",
]

export function EnquiryForm() {
  const [status, setStatus] = useState<Status>("idle")
  const [searchParams] = useSearchParams()
  const prefilledDestination = searchParams.get("destination") ?? ""

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("submitting")

    const form = event.currentTarget
    const formData = new FormData(form)
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ?? "")
    formData.append("subject", "New Triphogonva Enquiry")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })
      const result = await response.json()

      if (result.success) {
        setStatus("success")
        form.reset()
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center gap-4 py-16 text-center"
      >
        <FiCheckCircle className="size-12 text-success" />
        <h3 className="font-heading text-2xl text-primary">Enquiry sent</h3>
        <p className="max-w-sm text-foreground/70">
          Thank you — our travel desk will reach out within 24 hours to start
          planning your trip.
        </p>
        <Button variant="outline" className="rounded-full" onClick={() => setStatus("idle")}>
          Send another enquiry
        </Button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" name="name" required placeholder="Your name" />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" name="phone" type="tel" required placeholder="+91 12345 67890" />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required placeholder="you@example.com" />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="destination">Destination Interested In</Label>
          <Select name="destination" defaultValue={prefilledDestination || undefined}>
            <SelectTrigger id="destination" className="w-full">
              <SelectValue placeholder="Select a destination" />
            </SelectTrigger>
            <SelectContent>
              {trips.map((trip) => (
                <SelectItem key={trip.id} value={trip.destination}>
                  {trip.destination}
                </SelectItem>
              ))}
              <SelectItem value="Not sure yet">Not sure yet</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="travelers">Number of Travelers</Label>
          <Input id="travelers" name="travelers" type="number" min={1} required placeholder="2" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="travelDate">Preferred Travel Date</Label>
          <Input id="travelDate" name="travelDate" type="date" required />
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="budget">Budget</Label>
          <Select name="budget">
            <SelectTrigger id="budget" className="w-full">
              <SelectValue placeholder="Select a budget range" />
            </SelectTrigger>
            <SelectContent>
              {budgetRanges.map((range) => (
                <SelectItem key={range} value={range}>
                  {range}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="message">Additional Message</Label>
        <Textarea id="message" name="message" rows={4} placeholder="Tell us more about your trip..." />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-sm text-error">
          <FiAlertCircle className="size-4 shrink-0" />
          Something went wrong sending your enquiry. Please try again.
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={status === "submitting"}
        className="rounded-full"
      >
        {status === "submitting" ? (
          <>
            <FiLoader className="size-4 animate-spin" /> Sending...
          </>
        ) : (
          "Send Enquiry"
        )}
      </Button>
    </form>
  )
}
