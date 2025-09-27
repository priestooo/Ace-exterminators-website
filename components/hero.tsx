import { Button } from "@/components/ui/button"
import { Shield, Clock, Award } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-black-50 to-black-100 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Oklahoma's <span className="text-red-600">Premier</span> Pest Control Experts
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Protecting homes and businesses across Oklahoma with safe, effective, and eco-friendly pest control
                solutions. Available 24/7 for emergency services.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-black-600 hover:bg-white-700 text-lg px-8 py-4" asChild>
                <a href="#contact">Get Free Inspection</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 border-black-600 text-red-600 hover:bg-white-50 bg-transparent"
                asChild
              >
                <a href="tel:(405)555-7378">Call (405) 555-PEST</a>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <Shield className="h-8 w-8 text-red-600 mx-auto mb-2" />
                <p className="font-semibold text-gray-900">Licensed & Insured</p>
              </div>
              <div className="text-center">
                <Clock className="h-8 w-8 text-red-600 mx-auto mb-2" />
                <p className="font-semibold text-gray-900">24/7 Emergency</p>
              </div>
              <div className="text-center">
                <Award className="h-8 w-8 text-red-600 mx-auto mb-2" />
                <p className="font-semibold text-gray-900">Satisfaction Guaranteed</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <Image
              src="https://cdn.dubaiclean.com/uploads/2025/02/pest-control-dubai-price.webp"
              alt="Professional pest control technician"
              width={500}
              height={600}
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
              <div className="text-center">
                <p className="text-3xl font-bold text-red-600">15+</p>
                <p className="text-gray-600">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
