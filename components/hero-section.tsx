import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/elegant-italian-restaurant-interior-with-warm-ligh.jpg" alt="Villa Pensabene Interior" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance">
          Benvenuti a Villa Pensabene
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
          {"Dove la tradizione italiana incontra l'autentico sapore della cucina casalinga"}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8">
            Scopri il Menu
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-foreground text-lg px-8 bg-transparent"
          >
            Prenota un Tavolo
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="text-white" size={32} />
      </div>
    </section>
  )
}
