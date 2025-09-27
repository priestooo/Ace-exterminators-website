import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Oklahoma City, OK",
    rating: 5,
    text: "Ace Exterminators saved our home from a severe termite infestation. Their team was professional, thorough, and the results were immediate. Highly recommended!",
    image: "/images/customer1.jpg",
  },
  {
    name: "Mike Rodriguez",
    location: "Tulsa, OK",
    rating: 5,
    text: "We've been using Ace for our restaurant's pest control for 3 years. They're reliable, discreet, and always deliver excellent results. Great customer service!",
    image: "/images/customer2.jpg",
  },
  {
    name: "Emily Davis",
    location: "Norman, OK",
    rating: 5,
    text: "The eco-friendly treatment they used was perfect for our family with young children and pets. No harsh chemicals, but completely effective against ants and spiders.",
    image: "/images/customer3.jpg",
  },
  {
    name: "Robert Thompson",
    location: "Broken Arrow, OK",
    rating: 5,
    text: "Emergency service at 2 AM for a wasp nest - they came out immediately and handled it professionally. This is why I trust Ace Exterminators completely.",
    image: "/images/customer4.jpg",
  },
  {
    name: "Lisa Martinez",
    location: "Edmond, OK",
    rating: 5,
    text: "Their quarterly maintenance program has kept our office building pest-free for over 2 years. Professional, punctual, and effective every single time.",
    image: "/images/customer5.jpg",
  },
  {
    name: "David Wilson",
    location: "Lawton, OK",
    rating: 5,
    text: "Ace eliminated our rodent problem quickly and humanely. They also sealed entry points to prevent future issues. Excellent value for money!",
    image: "/images/customer6.jpg",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers across Oklahoma have to say about our
            services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
