"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Image src="/logo.png" alt="Villa Pensabene" width={180} height={60} className="h-12 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-foreground hover:text-accent transition-colors">
              Home
            </a>
            <a href="#menu" className="text-foreground hover:text-accent transition-colors">
              Menu
            </a>
            <a href="#about" className="text-foreground hover:text-accent transition-colors">
              Chi Siamo
            </a>
            <a href="#gallery" className="text-foreground hover:text-accent transition-colors">
              Galleria
            </a>
            <a href="#contact" className="text-foreground hover:text-accent transition-colors">
              Contatti
            </a>
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90">Prenota Ora</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            <a
              href="#home"
              className="block py-2 text-foreground hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="#menu"
              className="block py-2 text-foreground hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Menu
            </a>
            <a
              href="#about"
              className="block py-2 text-foreground hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Chi Siamo
            </a>
            <a
              href="#gallery"
              className="block py-2 text-foreground hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Galleria
            </a>
            <a
              href="#contact"
              className="block py-2 text-foreground hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contatti
            </a>
            <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Prenota Ora</Button>
          </div>
        )}
      </div>
    </nav>
  )
}
