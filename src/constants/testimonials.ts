export interface Testimonial {
  name: string
  location: string
  rating: number
  quote: string
  trip: string
}

export const testimonials: Testimonial[] = [
  {
    name: "Ananya Rao",
    location: "Bengaluru",
    rating: 5,
    quote:
      "Triphogonva planned our Hampi trip down to the last sunrise. Every detail felt considered, not templated.",
    trip: "Hampi Heritage Trail",
  },
  {
    name: "Rohit Malhotra",
    location: "Delhi",
    rating: 5,
    quote:
      "The Ladakh road trip was seamless — acclimatization days, camping, everything paced perfectly.",
    trip: "Ladakh Adventure",
  },
  {
    name: "Sara Thomas",
    location: "Kochi",
    rating: 4.5,
    quote:
      "Our houseboat stay in Alleppey was the most peaceful three days we've had in years.",
    trip: "Kerala Backwaters",
  },
  {
    name: "Vikram Singh",
    location: "Jaipur",
    rating: 5,
    quote:
      "Jaisalmer at sunset, exactly as promised. The desert camp was better than most hotels.",
    trip: "Jaisalmer Desert Safari",
  },
]
