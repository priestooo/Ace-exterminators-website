"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone, Mail } from "lucide-react"
import { AceLogo } from "@/components/ace-logo"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top bar */}
      <div className="bg-black-600 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="h-4 w-4" />
              <span>(405) 555-PEST</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-4 w-4" />
              <span>info@aceexterminators.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span className="font-semibold">24/7 Emergency Service Available</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="relative bg-gradient-to-br from-black-50 to-black-100 px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <AceLogo className="h-12 w-12" />
            <div>
              <h1 className="text-2xl font-bold text-red-600" style={{ fontFamily: "Orbitron, sans-serif" }}>
                ACE EXTERMINATORS
              </h1>
              <p className="text-sm text-gray-600">Oklahoma's Premier Pest Control</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-red-600 font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Button className="hidden md:inline-flex bg-black-600 hover:bg-white-700" asChild>
              <a href="#contact">Get Free Quote</a>
            </Button>

            {/* Mobile menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="lg:hidden bg-transparent">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-lg font-medium text-gray-700 hover:text-red-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Button className="mt-4 bg-dark-600 hover:bg-white-700" asChild>
                    <a href="#contact">Get Free Quote</a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
