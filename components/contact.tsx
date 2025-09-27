"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    emergency: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
          emergency: false,
        })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Your Free Quote Today</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to eliminate your pest problem? Contact us for a free inspection and customized treatment plan.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Request Free Quote</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      required
                      placeholder="(405) 555-0123"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service Needed</Label>
                  <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Pest Control</SelectItem>
                      <SelectItem value="termite">Termite Control</SelectItem>
                      <SelectItem value="rodent">Rodent Control</SelectItem>
                      <SelectItem value="commercial">Commercial Services</SelectItem>
                      <SelectItem value="emergency">Emergency Service</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Describe your pest problem or any specific concerns..."
                    rows={4}
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="emergency"
                    checked={formData.emergency}
                    onChange={(e) => handleInputChange("emergency", e.target.checked)}
                    className="rounded border-gray-300"
                  />
                  <Label htmlFor="emergency" className="text-sm">
                    This is an emergency (we'll contact you within 1 hour)
                  </Label>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-black-600 hover:bg-white-700 py-3 text-lg"
                >
                  {isSubmitting ? "Sending..." : "Get Free Quote"}
                </Button>

                {submitStatus === "success" && (
                  <p className="text-green-600 text-center">Thank you! We'll contact you within 24 hours.</p>
                )}
                {submitStatus === "error" && (
                  <p className="text-red-600 text-center">
                    Something went wrong. Please try again or call us directly.
                  </p>
                )}
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-red-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600">(405) 555-PEST</p>
                    <p className="text-sm text-gray-500">24/7 Emergency Line</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-red-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">info@aceexterminators.com</p>
                    <p className="text-sm text-gray-500">We respond within 2 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-red-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Service Area</p>
                    <p className="text-gray-600">Oklahoma City Metro</p>
                    <p className="text-sm text-gray-500">Serving all of Oklahoma</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-red-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Business Hours</p>
                    <p className="text-gray-600">Mon-Fri: 7:00 AM - 7:00 PM</p>
                    <p className="text-gray-600">Sat-Sun: 8:00 AM - 5:00 PM</p>
                    <p className="text-sm text-red-600 font-medium">Emergency service available 24/7</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-red-600 text-white shadow-lg">
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-4">Emergency Service</h3>
                <p className="mb-4">
                  Pest emergency? Don't wait! Our emergency response team is available 24/7 for urgent situations.
                </p>
                <Button variant="secondary" size="lg" className="bg-white text-red-600 hover:bg-gray-100" asChild>
                  <a href="tel:(405)555-7378">Call Emergency Line</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
