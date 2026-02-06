import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const menuCategories = [
  {
    title: "Gli Antipasti",
    items: [
      { name: "Patatine fresche fritte", price: "€4.00", description: "" },
      { name: "Bruschetta classica", price: "€5.00", description: "Pomodoro, Olio, Sale, Pepe, Origano" },
      {
        name: "Antipasto caldo",
        price: "€6.00",
        description: "Patatine Fritte, Arancinette con Carne e Burro, Crostino, Panelline, Crocchè",
      },
      {
        name: "Antipasto delle fritte",
        price: "€7.00",
        description: "Verdure Pastellate, Crostino, Tumà, Panelle, Crocchè",
      },
      { name: "Tortino di patata con cuore di bufala e pesto di pistacchio", price: "€10.00", description: "" },
      {
        name: "Listarelli di panpizza, stracciatella, pesto di pistacchio e scaglie di grana",
        price: "€12.00",
        description: "",
      },
      { name: "Bruschetta con salmone, stracciatella, pesto di pistacchio e lime", price: "€12.00", description: "" },
      { name: "Caponata di pesce spada con granella di mandorle tostate", price: "€12.00", description: "" },
      { name: "Carpaccio di manzo con rucola, scaglie di grana e olio EVO", price: "€13.00", description: "" },
      { name: "Zuppa di cozze con crostoni di pane", price: "€13.00", description: "" },
      {
        name: "Salmone marinato con pesto di agrumi siciliani e spumoncini di avocado",
        price: "€15.00",
        description: "",
      },
      { name: "Tartare di tonno con menta, capperi, soia, mandorle e arancia", price: "€15.00", description: "" },
      {
        name: "Insalata di mare imperiale",
        price: "€17.00",
        description: "Calamaro, Cozze, Vongole, Polpo, Gambero Rosso, Scampi, Olio EVO, Sedano, Carote",
      },
      { name: "Zuppetta di pesce", price: "€18.00", description: "Cozze, Vongole, Gambero Rosso, Triglie" },
    ],
  },
  {
    title: "I nostri deliziosi Primi",
    items: [
      { name: "Gnocchi alla sorrentina gratinati al forno", price: "€13.00", description: "" },
      { name: "Pappardelle fresche all'uovo con ragù di cinghiale", price: "€14.00", description: "" },
      { name: "Busiate con salsa parmantier, salsiccia e funghi porcini", price: "€14.00", description: "" },
      {
        name: "Linguine o riso con crema di zucca rossa, guanciale croccante e fonduta di grana",
        price: "€14.00",
        description: "",
      },
      { name: "Spaghettoni con vongole veraci", price: "€17.00", description: "" },
      { name: "Busiate o riso con gambero rosso, pomodorino e pesto di pistacchio", price: "€18.00", description: "" },
      { name: "Linguine con vongole, bottarga di tonno e zeste di lime", price: "€18.00", description: "" },
      { name: "Spaghetto chitarra cacio e pepe con tartare di gambero rosso", price: "€18.00", description: "" },
      {
        name: "Busiate con ragù di triglie, finocchietto selvatico e mandorle tostate",
        price: "€18.00",
        description: "",
      },
      {
        name: "Paccheri con quadrucci di tonno, pesto genovese fresco e granella di nocciole tostate",
        price: "€18.00",
        description: "",
      },
      {
        name: "Fettuccine mediterranea con letto di nero di seppia, gambero rosso, pomodorino e polvere di pistacchio",
        price: "€18.00",
        description: "",
      },
      { name: "Fettuccine alla granceola e pomodorini", price: "€22.00", description: "" },
      { name: "Fettuccine bronzate all'astice e pomodorino", price: "€25.00", description: "" },
    ],
  },
  {
    title: "Le nostre Pizze Classiche",
    items: [
      { name: "Biancaneve", price: "€7.00", description: "Fiordiatte" },
      { name: "Margherita", price: "€8.00", description: "Polpa di Pomodoro, Fiordiatte, Basilico Fresco" },
      { name: "Napoli", price: "€8.00", description: "Polpa di Pomodoro, Fiordiatte, Filetti di Acciughe, Origano" },
      {
        name: "Diavola",
        price: "€9.00",
        description: "Polpa di Pomodoro, Fiordiatte, Ventricina, Cipolla Rossa di Tropea",
      },
      {
        name: "4 Formaggi",
        price: "€9.00",
        description: "Polpa di Pomodoro, Fiordiatte, Emmentchel, Gorgonzola, Ricotta Fresca",
      },
      {
        name: "Capricciosa",
        price: "€10.00",
        description: "Polpa di Pomodoro, Fiordiatte, Prosciutto Cotto, Carciofi, Funghi, Wurstel",
      },
      {
        name: "Vegetariana",
        price: "€10.00",
        description: "Polpa di Pomodoro, Fiordiatte, Funghi, Radicchio, Pomodorini, Melanzane, Zucchine, Rucola",
      },
      {
        name: "Valtellina",
        price: "€11.00",
        description: "Polpa di Pomodoro, Fiordiatte, Bresaola, Rucola, Pomodorini, Scaglie di Grana",
      },
    ],
  },
  {
    title: "Le nostre Pizze Bufalose",
    items: [
      { name: "Friariella", price: "€11.00", description: "Mozzarella di Bufala DOP, Friarielli, Salsiccia" },
      {
        name: "Bufalina",
        price: "€11.00",
        description: "Polpa di Pomodoro, Mozzarella di Bufala DOP, Pomodorini, Basilico",
      },
      {
        name: "Porcini",
        price: "€11.00",
        description: "Mozzarella di Bufala DOP, Affumicata, Funghi Porcini, Basilico",
      },
      { name: "Parma", price: "€12.00", description: "Polpa di Pomodoro, Bufala, Prosciutto Crudo di Parma" },
      {
        name: "Brontese",
        price: "€13.00",
        description: "Mozzarella di Bufala DOP, Pomodoro Datterino, Speck, Pesto di Pistacchio",
      },
      { name: "La villa", price: "€13.00", description: "Mozzarella di Bufala Affumicata, Patate, Bresaola" },
      {
        name: "Delizia",
        price: "€13.00",
        description: "Polpa di Pomodoro, Mozzarella di Bufala, Prosciutto Crudo, Pomodorini, Scaglie di Grana",
      },
      {
        name: "Mortadellosa",
        price: "€14.00",
        description: "Mozzarella di Bufala, Mortadella, Pesto di Pistacchio, Ricotta, Scaglie di Grana",
      },
    ],
  },
  {
    title: "Secondi di Carne",
    items: [
      {
        name: "Caesar salad",
        price: "€12.00",
        description: "Iceberg, Straccetti di Pollo Grill, Scaglie di Grana, Verdure, Olio EVO",
      },
      { name: "Tagliata di pollo con julienne di verdure stufate", price: "€16.00", description: "" },
      { name: "Tagliata di manzo con rucola, grana e pomodorini", price: "€17.00", description: "" },
      { name: "Stinco di maiale con contorno di patate al burro", price: "€17.00", description: "" },
      { name: "Filetto di vitello ai ferri con salsa al pepe rosa e patate arrosto", price: "€18.00", description: "" },
      {
        name: "Filetto di maialino in crosta di pistacchio, chutney di pere e zenzero e caponatina di verdure",
        price: "€18.00",
        description: "",
      },
    ],
  },
  {
    title: "Secondi di Pesce",
    items: [
      { name: "Involtini di pesce spada panati agli agrumi di Sicilia", price: "€16.00", description: "" },
      { name: "Trancio di spada alla eoliana", price: "€16.00", description: "" },
      { name: "Frittura croccante di totani, gamberi, baccalà e triglie", price: "€17.00", description: "" },
      { name: "Tataki di tonno con riduzione di soia, miele e senape", price: "€20.00", description: "" },
      { name: "Calamaro e gamberoni grill su crema di zucca rossa", price: "€22.00", description: "" },
    ],
  },
  {
    title: "I nostri imperdibbili Desserts",
    items: [
      { name: "Le torte di Villa Pensabene", price: "€5.00", description: "" },
      { name: "Tiramisù", price: "€5.00", description: "" },
      { name: "Parfait ai mandorli", price: "€5.00", description: "" },
      { name: "Cheesecake", price: "€5.00", description: "Frutti di Bosco, Cioccolato Fondente, Pistacchio" },
      { name: "Semifreddo rocher", price: "€5.00", description: "" },
      { name: "Bavarese al pistacchio con fonduta di fave di cacao", price: "€5.00", description: "" },
      { name: "Tortino cuore caldo al cioccolato su crema inglese", price: "€6.00", description: "" },
    ],
  },
]

export function MenuSection() {
  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">Il Nostro Menu</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            {"Scopri i nostri piatti preparati con ingredienti freschi e ricette autentiche della tradizione siciliana"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {menuCategories.map((category, index) => (
            <Card key={index} className="p-8 bg-card">
              <h3 className="font-serif text-3xl font-bold mb-6 text-accent border-b-2 border-accent pb-2">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="border-b border-border pb-4 last:border-0 last:pb-0">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-lg text-foreground">{item.name}</h4>
                      <span className="text-accent font-bold text-lg whitespace-nowrap ml-4">{item.price}</span>
                    </div>
                    {item.description && (
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
            <a
              href="https://gofoodmenu.it/villa-pensabene-ristorante-pizzeria"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visualizza Menu Completo Online
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
