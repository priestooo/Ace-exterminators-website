import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bug, Home, Building, Leaf, Shield, Zap } from "lucide-react"
import Image from "next/image"

const services = [
  {
    icon: Bug,
    title: "General Pest Control",
    description: "Comprehensive treatment for ants, roaches, spiders, and common household pests.",
    image:
      "https://media.istockphoto.com/id/1414982124/photo/isinfection-of-premises-from-insects-and-rodents-with-chemicals.jpg?s=612x612&w=0&k=20&c=Ya8Il4j2Zq9qlVUdDOPY1jn2qSV0HBfn6IJpK9Yak5w=",
  },
  {
    icon: Home,
    title: "Termite Control",
    description: "Advanced termite detection, treatment, and prevention to protect your property.",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2024/10/457346616/SV/BD/AR/87326503/anti-termite-control-service.jpg",
  },
  {
    icon: Building,
    title: "Commercial Services",
    description: "Customized pest management solutions for restaurants, offices, and warehouses.",
    image: "/images/commercial-services.jpg",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Options",
    description: "Green pest control solutions that are safe for families, pets, and the environment.",
    image: "/images/eco-friendly.jpg",
  },
  {
    icon: Shield,
    title: "Rodent Control",
    description: "Effective mice and rat control with humane and long-lasting solutions.",
    image: "/images/rodent-control.jpg",
  },
  {
    icon: Zap,
    title: "Emergency Services",
    description: "24/7 emergency pest control for urgent infestations and pest emergencies.",
    image: "https://delvallepestcontrol.com/wp-content/uploads/2024/04/Copy-of-Mosquito-control-101.png",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Expert Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From residential homes to commercial properties, we provide comprehensive pest control solutions tailored to
            your specific needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black-600 bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300" />
              </div>
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <service.icon className="h-8 w-8 text-black-600" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-gray-600 leading-relaxed">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full border-black-600 text-white-600 hover:bg-white-50 bg-transparent">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-black-600 hover:bg-white-700 px-8 py-4" asChild>
            <a href="#contact">Get Free Quote</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
