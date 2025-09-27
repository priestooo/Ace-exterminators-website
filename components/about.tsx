import { Button } from "@/components/ui/button"
import { CheckCircle, Users, Clock, Award } from "lucide-react"
import Image from "next/image"

const stats = [
  { icon: Users, number: "5,000+", label: "Happy Customers" },
  { icon: Clock, number: "15+", label: "Years Experience" },
  { icon: Award, number: "100%", label: "Satisfaction Rate" },
  { icon: CheckCircle, number: "24/7", label: "Emergency Service" },
]

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">About Ace Exterminators</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded in 2008, Ace Exterminators has been Oklahoma's trusted pest control partner for over 15 years.
                We combine cutting-edge technology with time-tested methods to deliver superior results.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team of certified professionals is committed to protecting your home or business with safe,
                effective, and environmentally responsible pest control solutions.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">Why Choose Us?</h3>
              <ul className="space-y-3">
                {[
                  "Licensed and insured professionals",
                  "Eco-friendly and pet-safe treatments",
                  "Comprehensive warranty on all services",
                  "State-of-the-art equipment and techniques",
                  "Customized treatment plans for every property",
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button size="lg" className="bg-black-600 hover:bg-white-700" asChild>
              <a href="#contact">Get Free Quote</a>
            </Button>
          </div>

          <div className="space-y-8">
            <div className="relative">
              <Image
                src="/images/team-photo.jpg"
                alt="Ace Exterminators team"
                width={500}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <stat.icon className="h-8 w-8 text-red-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
