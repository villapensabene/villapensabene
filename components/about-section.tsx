import { Card } from "@/components/ui/card"
import { Utensils, Waves, TreePine, Baby, Clock, ScrollText } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent font-medium tracking-widest uppercase text-sm mb-2 block">Domenica a Villa Pensabene</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">Proposta Gastronomica</h2>
          <div className="h-1 w-20 bg-accent mx-auto mb-6" />
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-accent mb-4">{"Agriturismo in Città"}</h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed italic">
            {"Ogni Domenica a Pranzo vi aspettiamo per un'esperienza che unisce il sapore della campagna alla comodità della città."}
          </p>
        </div>

        {/* Promotional Video */}
        <div className="max-w-2xl mx-auto mb-16 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
          <video
            autoPlay
            muted
            loop
            playsInline
            controls
            className="w-full h-auto bg-black"
          >
            <source src="/agriturismo-in-citta.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Sunday Menus Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Fish Menu */}
          <Card className="relative overflow-hidden group border-none shadow-xl">
            <div className="absolute top-0 right-0 p-6 z-10">
              <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full font-bold shadow-lg">35€</span>
            </div>
            <div className="p-8 md:p-10 bg-card h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-secondary p-3 rounded-full">
                  <Waves className="text-accent" size={28} />
                </div>
                <h4 className="font-serif text-2xl font-bold">Menu di Pesce</h4>
              </div>
              <h5 className="text-accent font-medium uppercase tracking-wider text-sm mb-6">"Delizia del Mare"</h5>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-center gap-3 border-b border-secondary pb-2">
                  <span className="text-accent font-bold">4</span>
                  <span className="text-muted-foreground">Antipasti sfiziosi del giorno</span>
                </li>
                <li className="flex items-center gap-3 border-b border-secondary pb-2">
                  <span className="text-accent font-bold">2</span>
                  <span className="text-muted-foreground">Primi piatti della nostra tradizione barocca</span>
                </li>
                <li className="flex items-center gap-3 border-b border-secondary pb-2">
                  <span className="text-accent font-bold">1</span>
                  <span className="text-muted-foreground">Secondo con contorno di stagione</span>
                </li>
                <li className="flex items-center gap-3 italic text-sm">
                  <Utensils size={16} className="text-accent/60" />
                  <span className="text-muted-foreground/80">Incluso: Acqua, Coca Cola e Vino</span>
                </li>
              </ul>
            </div>
          </Card>

          {/* Meat Menu */}
          <Card className="relative overflow-hidden group border-none shadow-xl">
            <div className="absolute top-0 right-0 p-6 z-10">
              <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full font-bold shadow-lg">30€</span>
            </div>
            <div className="p-8 md:p-10 bg-card h-full flex flex-col border-t-4 border-accent/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-secondary p-3 rounded-full">
                  <TreePine className="text-accent" size={28} />
                </div>
                <h4 className="font-serif text-2xl font-bold">Menu di Carne</h4>
              </div>
              <h5 className="text-accent font-medium uppercase tracking-wider text-sm mb-6">"Tesori della Terra"</h5>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-center gap-3 border-b border-secondary pb-2">
                  <span className="text-accent font-bold">6</span>
                  <span className="text-muted-foreground">Antipasti tipici siciliani</span>
                </li>
                <li className="flex items-center gap-3 border-b border-secondary pb-2">
                  <span className="text-accent font-bold">2</span>
                  <span className="text-muted-foreground">Primi piatti di pasta fresca</span>
                </li>
                <li className="flex items-center gap-3 border-b border-secondary pb-2">
                  <span className="text-accent font-bold">1</span>
                  <span className="text-muted-foreground">Secondo alla brace o della casa</span>
                </li>
                <li className="flex items-center gap-3 italic text-sm">
                  <Utensils size={16} className="text-accent/60" />
                  <span className="text-muted-foreground/80">Incluso: Acqua, Coca Cola e Vino</span>
                </li>
              </ul>
            </div>
          </Card>
        </div>

        {/* Additional Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 bg-card border-none flex items-center gap-4 hover:bg-white transition-colors duration-300 shadow-sm hover:shadow-md">
            <div className="bg-accent/10 p-3 rounded-xl">
              <Clock className="text-accent" size={24} />
            </div>
            <div>
              <h4 className="font-bold text-sm uppercase tracking-tighter mb-1">Giro Pasta</h4>
              <p className="text-muted-foreground text-xs leading-tight">Min 8 persone - 20€ cad.</p>
            </div>
          </Card>

          <Card className="p-6 bg-card border-none flex items-center gap-4 hover:bg-white transition-colors duration-300 shadow-sm hover:shadow-md">
            <div className="bg-accent/10 p-3 rounded-xl">
              <Baby className="text-accent" size={24} />
            </div>
            <div>
              <h4 className="font-bold text-sm uppercase tracking-tighter mb-1">Area Giochi</h4>
              <p className="text-muted-foreground text-xs leading-tight">Bambini al sicuro e felici</p>
            </div>
          </Card>

          <Card className="p-6 bg-card border-none flex items-center gap-4 hover:bg-white transition-colors duration-300 shadow-sm hover:shadow-md">
            <div className="bg-accent/10 p-3 rounded-xl">
              <ScrollText className="text-accent" size={24} />
            </div>
            <div>
              <h4 className="font-bold text-sm uppercase tracking-tighter mb-1">Menu alla Carta</h4>
              <p className="text-muted-foreground text-xs leading-tight">Sempre disponibile ogni giorno</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
