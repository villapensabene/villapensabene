import { Card } from "@/components/ui/card"
import { Heart, Users, Pizza } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">La Nostra Storia</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            {
              "Una tradizione di famiglia che continua da generazioni, portando l'autentico sapore italiano sulla vostra tavola"
            }
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 text-center bg-card hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-4">
              <Heart className="text-accent" size={48} />
            </div>
            <h3 className="font-serif text-2xl font-bold mb-3 text-foreground">Passione</h3>
            <p className="text-muted-foreground leading-relaxed">
              {"Ogni piatto è preparato con amore e dedizione, usando ricette tramandate di generazione in generazione"}
            </p>
          </Card>

          <Card className="p-8 text-center bg-card hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-4">
              <Users className="text-accent" size={48} />
            </div>
            <h3 className="font-serif text-2xl font-bold mb-3 text-foreground">Famiglia</h3>
            <p className="text-muted-foreground leading-relaxed">
              {"Un ambiente accogliente dove ogni ospite è trattato come un membro della famiglia"}
            </p>
          </Card>

          <Card className="p-8 text-center bg-card hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-4">
              <Pizza className="text-accent" size={48} />
            </div>
            <h3 className="font-serif text-2xl font-bold mb-3 text-foreground">Qualità</h3>
            <p className="text-muted-foreground leading-relaxed">
              {"Ingredienti freschi e di prima qualità, selezionati con cura per garantire il miglior sapore"}
            </p>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/italian-chef-preparing-pizza-in-wood-oven.jpg"
              alt="Chef preparing food"
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
          <div>
            <h3 className="font-serif text-3xl font-bold mb-6 text-foreground">{"L'Arte della Cucina Italiana"}</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              {
                "Villa Pensabene nasce dalla passione per la cucina italiana autentica e il desiderio di condividere i sapori della nostra terra con chi ama il buon cibo."
              }
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              {
                "Dal nostro forno a legna escono pizze croccanti e profumate, mentre la nostra cucina propone piatti della tradizione preparati con ricette originali e ingredienti di stagione."
              }
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {
                "Vi aspettiamo per farvi vivere un'esperienza culinaria indimenticabile in un'atmosfera calda e accogliente."
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
