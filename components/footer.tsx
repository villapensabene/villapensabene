import { Facebook, Instagram, Mail, Phone, MapPin, Clock } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer id="footer" className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-6">
            <Image
              src="/logo.png"
              alt="Villa Pensabene"
              width={200}
              height={70}
              className="h-14 w-auto brightness-0 invert"
            />
            <p className="text-sm leading-relaxed opacity-80">
              {"Villa Pensabene è la location perfetta per i tuoi eventi speciali, grazie a un'accogliente sala interna e un ampio spazio esterno. Gusta le nostre specialità cotte nel forno a legna mentre i più piccoli si divertono in sicurezza nella nostra area giochi bimbi. E la domenica, ti aspettiamo con l'esclusiva formula 'Agriturismo in città' per il pranzo della domenica."}
            </p>

            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/villapensabeneristorante/?locale=it_IT"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-foreground/10 p-2.5 rounded-full hover:bg-gold hover:text-primary transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/villapensabene/?hl=it"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-foreground/10 p-2.5 rounded-full hover:bg-gold hover:text-primary transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-6 text-primary-foreground">Link Utili</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#home" className="hover:text-gold transition-all">Home</a></li>
              <li><a href="https://gofoodmenu.it/villa-pensabene-ristorante-pizzeria" target="_blank" className="hover:text-gold transition-all">Il Menu</a></li>
              <li><a href="#about" className="hover:text-gold transition-all">Chi Siamo</a></li>
              <li><a href="#gallery" className="hover:text-gold transition-all">Galleria</a></li>
              <li><a href="#contact" className="hover:text-gold transition-all font-semibold">Prenota Tavolo</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-6 text-primary-foreground">Contatti</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin size={20} className="text-primary-foreground shrink-0" />
                <span className="opacity-80">
                  Via P.40, 29<br />
                  90146 Palermo PA, Italia
                  <br />
                  <a href="https://maps.app.goo.gl/ErK4fypQzfVWmpL1A" target="_blank" className="text-gold hover:underline text-xs mt-1 block">Indicazioni Stradali →</a>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary-foreground shrink-0" />
                <a href="tel:+393274146546" className="hover:text-gold transition-all opacity-80">327 414 6546</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary-foreground shrink-0" />
                <a href="mailto:info@villapensabene.it" className="hover:text-gold transition-all opacity-80">info@villapensabene.it</a>
              </li>
              <li className="flex items-center gap-3 pt-2">
                <Clock size={18} className="text-primary-foreground shrink-0" />
                <a
                  href="https://maps.app.goo.gl/99hroLSAfosUnoku6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:underline text-xs font-medium transition-all"
                >
                  Controlla i nostri orari di apertura
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col items-center gap-8 text-sm opacity-75">
          <div className="text-center">
            <p>© 2026 Villa Pensabene Ristorante Pizzeria. Tutti i diritti riservati.</p>
            <p className="mt-1 text-xs opacity-70">P.IVA IT06636480821</p>
          </div>

          <div className="flex items-center gap-3 bg-primary-foreground/5 px-4 py-2 rounded-full border border-primary-foreground/10 transition-all hover:bg-primary-foreground/10 group">
            <span className="text-[10px] uppercase font-bold tracking-widest opacity-60">Sviluppato da</span>
            <a
              href="https://gofoodmenu.it/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Image
                src="/credits/icon.svg"
                alt="GO!Food Italia"
                width={80}
                height={24}
                className="h-5 w-auto brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
              />
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}
