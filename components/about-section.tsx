import { Card } from "@/components/ui/card"
import { Utensils, Waves, TreePine, Baby, Clock, ScrollText, Sparkles, PartyPopper, Cake, Wine } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Intro Section */}
        <div className="text-center mb-16">
          <span className="text-accent font-medium tracking-widest uppercase text-sm mb-2 block">Tradizione e Passione</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">Villa Pensabene ti aspetta! 🍝</h2>
          <div className="h-1 w-20 bg-accent mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            {"Vieni a scoprire il gusto autentico della tradizione siciliana nel cuore di Palermo. La nostra cucina celebra i sapori della terra e del mare con ingredienti freschissimi e ricette artigianali."}
          </p>
        </div>

        {/* Our Specialties Icons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {[
            { icon: <Waves className="text-accent" />, title: "Pesce Freschissimo" },
            { icon: <TreePine className="text-accent" />, title: "Carni alla Griglia" },
            { icon: <Utensils className="text-accent" />, title: "Giropizza Artigianale" },
            { icon: <ScrollText className="text-accent" />, title: "Giropasta Tradizionale" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center p-4 bg-card/50 rounded-2xl border border-white/5 shadow-sm">
              <div className="mb-3 bg-secondary p-3 rounded-full">{item.icon}</div>
              <span className="text-sm font-bold text-center uppercase tracking-tighter">{item.title}</span>
            </div>
          ))}
        </div>

        {/* Agriturismo in Città Focus */}
        <div className="bg-card rounded-3xl p-8 md:p-12 mb-20 shadow-2xl relative overflow-hidden border border-white/10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-accent mb-4">{"Agriturismo in Città! 🍷🌿"}</h3>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed italic">
                {"Vivi l'esperienza di un vero agriturismo senza lasciare Palermo. Prenota il tuo tavolo per la domenica e goditi un pranzo indimenticabile con tutta la famiglia."}
              </p>
            </div>

            {/* Promotional Video */}
            <div className="max-w-2xl mx-auto mb-16 rounded-2xl overflow-hidden shadow-2xl border border-white/5">
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
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Fish Menu */}
              <Card className="relative overflow-hidden group border-none shadow-xl bg-secondary/30">
                <div className="absolute top-0 right-0 p-6 z-10">
                  <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full font-bold shadow-lg">35€</span>
                </div>
                <div className="p-8 h-full flex flex-col">
                  <h4 className="font-serif text-2xl font-bold mb-4">Menu di Pesce</h4>
                  <h5 className="text-accent font-medium uppercase tracking-wider text-xs mb-6 italic">"Delizia del Mare"</h5>
                  <ul className="space-y-3 mb-8 flex-grow text-sm">
                    <li className="flex items-center gap-2 border-b border-white/5 pb-2">
                      <span className="text-accent font-bold">4</span>
                      <span className="text-muted-foreground">Antipasti sfiziosi</span>
                    </li>
                    <li className="flex items-center gap-2 border-b border-white/5 pb-2">
                      <span className="text-accent font-bold">2</span>
                      <span className="text-muted-foreground">Primi tradizionali</span>
                    </li>
                    <li className="flex items-center gap-2 border-b border-white/5 pb-2">
                      <span className="text-accent font-bold">1</span>
                      <span className="text-muted-foreground">Secondo con contorno</span>
                    </li>
                    <li className="text-xs text-muted-foreground/60 mt-4 italic">Acqua, Coca Cola e Vino inclusi</li>
                  </ul>
                </div>
              </Card>

              {/* Meat Menu */}
              <Card className="relative overflow-hidden group border-none shadow-xl bg-secondary/30">
                <div className="absolute top-0 right-0 p-6 z-10">
                  <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full font-bold shadow-lg">30€</span>
                </div>
                <div className="p-8 h-full flex flex-col border-t-2 border-accent/10">
                  <h4 className="font-serif text-2xl font-bold mb-4">Menu di Carne</h4>
                  <h5 className="text-accent font-medium uppercase tracking-wider text-xs mb-6 italic">"Tesori della Terra"</h5>
                  <ul className="space-y-3 mb-8 flex-grow text-sm">
                    <li className="flex items-center gap-2 border-b border-white/5 pb-2">
                      <span className="text-accent font-bold">6</span>
                      <span className="text-muted-foreground">Antipasti tipici</span>
                    </li>
                    <li className="flex items-center gap-2 border-b border-white/5 pb-2">
                      <span className="text-accent font-bold">2</span>
                      <span className="text-muted-foreground">Primi di pasta fresca</span>
                    </li>
                    <li className="flex items-center gap-2 border-b border-white/5 pb-2">
                      <span className="text-accent font-bold">1</span>
                      <span className="text-muted-foreground">Secondo alla brace</span>
                    </li>
                    <li className="text-xs text-muted-foreground/60 mt-4 italic">Acqua, Coca Cola e Vino inclusi</li>
                  </ul>
                </div>
              </Card>
            </div>

            {/* Sunday Quick features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3 p-4 bg-secondary/20 rounded-xl border border-white/5">
                <Clock className="text-accent" size={20} />
                <span className="text-xs font-bold uppercase tracking-tight">Giro Pasta - 20€</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-secondary/20 rounded-xl border border-white/5">
                <Baby className="text-accent" size={20} />
                <span className="text-xs font-bold uppercase tracking-tight">Area Giochi Bimbi</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-secondary/20 rounded-xl border border-white/5">
                <ScrollText className="text-accent" size={20} />
                <span className="text-xs font-bold uppercase tracking-tight">Menu alla Carta</span>
              </div>
            </div>
          </div>
        </div>

        {/* Special Events Section */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-bold mb-6 border border-accent/20">
            <Sparkles size={16} />
            <span>I tuoi momenti indimenticabili</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-foreground">Organizziamo i tuoi eventi speciali 🎉</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            {"Creiamo insieme il tuo evento perfetto con menu personalizzati e un'atmosfera accogliente per festeggiare le tappe più importanti della tua vita."}
          </p>

          {/* Events Promotional Video */}
          <div className="max-w-md mx-auto mb-16 rounded-2xl overflow-hidden shadow-2xl border border-white/5">
            <video
              autoPlay
              muted
              loop
              playsInline
              controls
              className="w-full h-auto bg-black"
            >
              <source src="/eventi.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: <Baby className="text-accent" />, title: "Battesimi" },
              { icon: <Cake className="text-accent" />, title: "Compleanni" },
              { icon: <Wine className="text-accent" />, title: "Cerimonie" },
              { icon: <PartyPopper className="text-accent" />, title: "Feste Private" },
            ].map((event, i) => (
              <Card key={i} className="p-6 border-none shadow-lg hover:translate-y-[-5px] transition-all duration-300 group">
                <div className="flex justify-center mb-4">
                  <div className="bg-secondary p-4 rounded-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                    {event.icon}
                  </div>
                </div>
                <h4 className="font-bold uppercase tracking-tighter text-sm">{event.title}</h4>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
