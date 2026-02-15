"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock, Mail } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2 persone",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const { name, date, time, guests, message, phone } = formData

    const whatsappMessage = `Prenotazione Tavolo - Villa Pensabene
-------------------------
Nome: ${name}
Data: ${date}
Ora: ${time}
Ospiti: ${guests}
Telefono Cliente: ${phone}
-------------------------
Note: ${message || "Nessuna nota aggiuntiva"}`

    const encodedMessage = encodeURIComponent(whatsappMessage)
    const whatsappUrl = `https://wa.me/393274146546?text=${encodedMessage}`

    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">Prenota un Tavolo</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            {"Assicurati il tuo posto in Villa per una serata indimenticabile. Riceverai conferma immediata su WhatsApp."}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Reservation Form */}
          <Card className="p-8 bg-card shadow-xl border border-border/50">
            <h3 className="font-serif text-2xl font-bold mb-6 text-foreground">Modulo di Prenotazione</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* ... form fields remain same ... */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                  Nome e Cognome
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent bg-background text-foreground"
                  placeholder="Mario Rossi"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent bg-background text-foreground"
                  placeholder="mario.rossi@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2 text-foreground">
                  Telefono
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent bg-background text-foreground"
                  placeholder="+39 123 456 7890"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium mb-2 text-foreground">
                    Data
                  </label>
                  <input
                    type="date"
                    id="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent bg-background text-foreground"
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-medium mb-2 text-foreground">
                    Orario
                  </label>
                  <input
                    type="time"
                    id="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent bg-background text-foreground"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="guests" className="block text-sm font-medium mb-2 text-foreground">
                  Numero Ospiti
                </label>
                <select
                  id="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent bg-background text-foreground"
                >
                  <option value="1 persona">1 persona</option>
                  <option value="2 persone">2 persone</option>
                  <option value="3 persone">3 persone</option>
                  <option value="4 persone">4 persone</option>
                  <option value="5+ persone">5+ persone</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                  Note Aggiuntive
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent bg-background text-foreground"
                  placeholder="Richieste speciali, intolleranze, ecc."
                />
              </div>
              <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                Invia Prenotazione su WhatsApp
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}

