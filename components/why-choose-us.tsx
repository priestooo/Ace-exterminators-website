import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Clock, Leaf, Award, Users, Zap } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed professionals with comprehensive insurance coverage for your peace of mind.",
  },
  {
    icon: Clock,
    title: "24/7 Emergency Service",
    description: "Round-the-clock availability for urgent pest control needs and emergency situations.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Solutions",
    description: "Safe, green pest control methods that protect your family, pets, and the environment.",
  },
  {
    icon: Award,
    title: "Satisfaction Guaranteed",
    description: "100% satisfaction guarantee with free follow-up treatments if pests return.",
  },
  {
    icon: Users,
    title: "Expert Technicians",
    description: "Certified professionals with extensive training and years of hands-on experience.",
  },
  {
    icon: Zap,
    title: "Fast Response Time",
    description: "Quick response times with same-day service available for most treatments.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-black-600">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Why Choose Ace Exterminators?</h2>
          <p className="text-xl text-yellow-100 max-w-3xl mx-auto">
            We're not just another pest control company. Here's what sets us apart from the competition.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-dark/10 backdrop-blur-sm border-dark/20 text-white hover:bg-white/20 transition-all duration-300"
            >
              <CardHeader className="text-center">
                <feature.icon className="h-12 w-12 text-white mx-auto mb-4" />
                <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white-100 text-center leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
