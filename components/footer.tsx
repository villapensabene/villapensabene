import { Facebook, Instagram, Mail, Phone } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <Image
              src="/logo.png"
              alt="Villa Pensabene"
              width={180}
              height={60}
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-sm leading-relaxed opacity-90">
              {"Autentica cucina italiana dal 1985. Tradizione, qualità e passione in ogni piatto."}
            </p>
          </div>

          <div>
            <h4 className="font-serif text-xl font-bold mb-4">Link Utili</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="https://gofoodmenu.it/villa-pensabene-ristorante-pizzeria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  Menu
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-accent transition-colors">
                  Chi Siamo
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-accent transition-colors">
                  Galleria
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors">
                  Contatti
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl font-bold mb-4">Seguici</h4>
            <div className="flex gap-4 mb-4">
              <a
                href="https://www.facebook.com/villapensabeneristorante/?locale=it_IT"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-foreground/10 p-2 rounded-full hover:bg-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/villapensabene/?hl=it"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-foreground/10 p-2 rounded-full hover:bg-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+393274146546" className="hover:text-accent transition-colors">
                  327 414 6546
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:info@villapensabene.it" className="hover:text-accent transition-colors">
                  info@villapensabene.it
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6 text-center text-sm opacity-75">
          <p>© 2026 Villa Pensabene Ristorante Pizzeria. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  )
}
