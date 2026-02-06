import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock, Mail } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">Contatti e Orari</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            {"Vieni a trovarci o contattaci per prenotare il tuo tavolo"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="p-6 bg-card flex items-start gap-4">
              <MapPin className="text-accent flex-shrink-0" size={32} />
              <div>
                <h3 className="font-bold text-lg mb-2 text-foreground">Indirizzo</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Via Esempio 123
                  <br />
                  90100 Palermo, Italia
                </p>
                <a
                  href="https://maps.app.goo.gl/Ge4LRCFnxHFE6nwf7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline inline-block mt-2"
                >
                  Visualizza su Google Maps →
                </a>
              </div>
            </Card>

            <Card className="p-6 bg-card flex items-start gap-4">
              <Phone className="text-accent flex-shrink-0" size={32} />
              <div>
                <h3 className="font-bold text-lg mb-2 text-foreground">Telefono</h3>
                <p className="text-muted-foreground leading-relaxed">
                  <a href="tel:+390912345678" className="hover:text-accent transition-colors">
                    +39 091 234 5678
                  </a>
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-card flex items-start gap-4">
              <Mail className="text-accent flex-shrink-0" size={32} />
              <div>
                <h3 className="font-bold text-lg mb-2 text-foreground">Email</h3>
                <p className="text-muted-foreground leading-relaxed">
                  <a href="mailto:info@villapensabene.it" className="hover:text-accent transition-colors">
                    info@villapensabene.it
                  </a>
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-card flex items-start gap-4">
              <Clock className="text-accent flex-shrink-0" size={32} />
              <div>
                <h3 className="font-bold text-lg mb-2 text-foreground">Orari di Apertura</h3>
                <div className="text-muted-foreground space-y-1 leading-relaxed">
                  <p>
                    <span className="font-semibold text-foreground">Lun - Ven:</span> 12:00 - 15:00, 19:00 - 23:00
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">Sabato:</span> 12:00 - 15:00, 19:00 - 00:00
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">Domenica:</span> 12:00 - 15:00, 19:00 - 23:00
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Reservation Form */}
          <Card className="p-8 bg-card">
            <h3 className="font-serif text-2xl font-bold mb-6 text-foreground">Prenota un Tavolo</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                  Nome e Cognome
                </label>
                <input
                  type="text"
                  id="name"
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
                  className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent bg-background text-foreground"
                >
                  <option>1 persona</option>
                  <option>2 persone</option>
                  <option>3 persone</option>
                  <option>4 persone</option>
                  <option>5+ persone</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                  Note Aggiuntive
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent bg-background text-foreground"
                  placeholder="Richieste speciali, intolleranze, ecc."
                />
              </div>
              <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                Invia Prenotazione
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
