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
        description: "Verdure Pastellate, Crostino, Tuma, Panelle, Crocchè",
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
    title: "Secondi di Carne",
    items: [
      {
        name: "Caesar salad",
        price: "€12.00",
        description: "Iceberg, Straccetti di Pollo Grill, Scaglie di Grana, Verdure, Olio EVO",
      },
      { name: "Chianina di Angus (200 gr circa)", price: "€5.00/etto", description: "" },
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
    title: "Hamburgers",
    items: [
      {
        name: "BBQ Piemontese",
        price: "€13.00",
        description: "Hamburger di Fassona Italiana, Pomodoro, Tuma, Cipolla caramellata, Guanciale, Salsa BBQ, Patate",
      },
      {
        name: "Mortazza Deluxe",
        price: "€13.00",
        description: "Hamburger di Fassona Italiana, Mortadella Grill, Stracciatella, Pesto di Pistacchio, Patate",
      },
      {
        name: "Green Chicken",
        price: "€13.00",
        description: "Hamburger di Pollo, Lattuga, Tuma al Pistacchio, Pomodoro, Guanciale croccante, Patate",
      },
      {
        name: "Sunrise Burger",
        price: "€13.00",
        description: "Hamburger di Fassona Italiana, Uovo occhio di bue, Lattuga, Guanciale croccante, Cacio Cavallo, Patate",
      },
    ],
  },
  {
    title: "Pizze Classiche",
    items: [
      { name: "Biancaneve", price: "€7.00", description: "Fiordilatte" },
      { name: "Margherita", price: "€8.00", description: "Polpa di Pomodoro, Fiordilatte, Basilico Fresco" },
      { name: "Napoli", price: "€8.00", description: "Polpa di Pomodoro, Fiordilatte, Filetti di Acciughe, Origano" },
      { name: "Bruschetta", price: "€8.00", description: "Cubetti di Pomodoro, Basilico, Scaglie di Parmigiano" },
      { name: "America", price: "€9.00", description: "Polpa di Pomodoro, Fiordilatte, Patatine Fritte, Wurstel, Salsa BBQ" },
      {
        name: "Campagnola",
        price: "€10.00",
        description: "Polpa di Pomodoro, Fiordilatte, Salsiccia, Spinaci, Funghi Freschi, Cipolla Rossa, Olive",
      },
      {
        name: "Siciliana",
        price: "€9.00",
        description: "Polpa di Pomodoro, Cipolla Rossa, Salsiccia, Acciughe, Ricotta Fresca, Muddica Tostata",
      },
      { name: "Diavola", price: "€9.00", description: "Polpa di Pomodoro, Fiordilatte, Ventricina, Cipolla Rossa" },
      { name: "Romana", price: "€9.00", description: "Polpa di Pomodoro, Fiordilatte, Prosciutto Cotto" },
      { name: "4 Formaggi", price: "€9.00", description: "Fiordilatte, Emmenthal, Caciocavallo, Gorgonzola" },
      { name: "Calzone", price: "€9.00", description: "Polpa di Pomodoro, Fiordilatte, Prosciutto Cotto" },
      { name: "Caprese", price: "€9.00", description: "Pomodoro a Fette, Mozzarella di Bufala DOP, Basilico, Olio Evo" },
      { name: "Bagherese", price: "€9.00", description: "Salsa Sfinciuni Bianca, Tuma, Ricotta Fresca, Muddica" },
      { name: "Affumicata", price: "€9.50", description: "Fiordilatte, Scamorza Affumicata, Melanzane, Speck, Scaglie di Grana" },
      { name: "Faccia di Vecchia", price: "€9.50", description: "Salsa di Pomodoro, Acciughe, Cipolla, Caciocavallo, Pangrattato" },
      { name: "Parmigiana", price: "€9.50", description: "Polpa di Pomodoro, Fiordilatte, Melanzane, Scaglie di Grana, Basilico" },
      { name: "Sfincione Palermitano", price: "€9.50", description: "Salsa di Cipolla, Filetti di Acciughe, Caciocavallo, Muddica" },
      { name: "4 Gusti", price: "€9.50", description: "Polpa di Pomodoro, Fiordilatte, Prosciutto Cotto, Carciofi, Wurstel" },
      { name: "Capricciosa", price: "€10.00", description: "Polpa di Pomodoro, Fiordilatte, Prosciutto Cotto, Carciofi, Funghi, Wurstel" },
      { name: "Rustica", price: "€9.50", description: "Polpa di Pomodoro, Fiordilatte, Melanzane, Cipolla Rossa, Caciocavallo, Olive" },
      { name: "Chicken", price: "€9.50", description: "Polpa di Pomodoro, Fiordilatte, Sfilze di Pollo, Salsa BBQ" },
      { name: "Maialina", price: "€10.00", description: "Polpa di Pomodoro, Fiordilatte, Porchetta, Emmenthal, Cipolla caramellata" },
      { name: "Tirolese", price: "€10.00", description: "Polpa di Pomodoro, Fiordilatte, Speck, Gorgonzola" },
      { name: "Tonnata", price: "€10.00", description: "Polpa di Pomodoro, Fiordilatte, Tonno, Olive, Cipolla Rossa" },
      { name: "Sfiziosa", price: "€10.00", description: "Polpa di Pomodoro, Fiordilatte, Bacon, Salamino Piccante, Mascarpone" },
      { name: "Vegetariana", price: "€10.00", description: "Polpa di Pomodoro, Fiordilatte, Funghi, Pomodorino, Melanzane, Zucchine" },
    ],
  },
  {
    title: "Pizze Bufalose",
    items: [
      { name: "Ai Frati", price: "€13.00", description: "Mozzarella di Bufala, Radicchio, Mascarpone, Gorgonzola, Speck, Noci" },
      { name: "Andrea", price: "€13.00", description: "Mozzarella di Bufala, Pomodorini, Mascarpone, Crudo, Scaglie di Grana" },
      { name: "Brontese", price: "€13.00", description: "Mozzarella di Bufala DOP, Pomodoro Datterino, Speck, Pesto di Pistacchio" },
      { name: "Bufalina", price: "€11.00", description: "Polpa di Pomodoro, Mozzarella di Bufala DOP, Pomodorini, Basilico" },
      { name: "Delizia", price: "€13.00", description: "Polpa di Pomodoro, Mozzarella di Bufala, Prosciutto Crudo, Pomodorini, Rucola" },
      { name: "Friariella", price: "€11.00", description: "Mozzarella di Bufala DOP, Friarielli, Salsiccia" },
      { name: "Isola", price: "€13.00", description: "Ripieno Porcini. Esterno: Pomodorini, Mozzarella di Bufala, Speck, Grana" },
      { name: "La Villa", price: "€13.00", description: "Mozzarella di Bufala Affumicata, Patate, Bresaola" },
      { name: "Mortadelosa", price: "€14.00", description: "Mozzarella di Bufala DOP, Ciliegino, Stracciatella, Mortadella, Pistacchio" },
      { name: "Nebrodi", price: "€12.00", description: "Mozzarella di Bufala Affumicata, Lardo, Miele, Noci" },
      { name: "Parma", price: "€12.00", description: "Polpa di Pomodoro, Bufala, Prosciutto Crudo di Parma" },
      { name: "Porcini", price: "€11.00", description: "Mozzarella di Bufala DOP Affumicata, Funghi Porcini, Basilico" },
    ],
  },
  {
    title: "Pizze Stracciatellose",
    items: [
      { name: "Bresaola", price: "€12.00", description: "Stracciatella, Bresaola, Noci, Scaglie di Grana" },
      { name: "Calzone Farcito", price: "€14.00", description: "Crema Porcini, Bufala DOP, Prosciutto Crudo, Stracciatella, Pistacchio" },
      { name: "Parmense", price: "€12.00", description: "Polpa di Pomodoro, Pomodorini, Prosciutto Crudo di Parma, Stracciatella, Rucola" },
      { name: "Preziosa", price: "€13.00", description: "Polpa di Pomodoro, Bufala DOP, Stracciatella, Crudo, Granella di Pistacchio" },
    ],
  },
  {
    title: "Pizze in Pala & Speciali",
    items: [
      { name: "Antichi Sapori", price: "€13.00", description: "Mozzarella di Bufala, Primosale, Mortadella Grigliata, Miele" },
      { name: "Oceano", price: "€15.00", description: "Pesto Pistacchio, Bufala, Salmone, Stracciatella, Zeste di Limone" },
      { name: "Pensabene", price: "€14.00", description: "Mozzarella di Bufala, Melanzane Grigliate, Ciliegino, Salmone Affumicato" },
      { name: "Cannolo", price: "€13.00", description: "Interno: Salsiccia. Esterno: Stracciatella, Granella di Pistacchio" },
      { name: "Kayak", price: "€14.00", description: "Interno: Pesto Pistacchio, Philadelphia. Esterno: Speck, Stracciatella" },
      { name: "Quadro", price: "€14.00", description: "Bordo 4 Formaggi, Mozzarella di Bufala, Funghi Porcini, Salsiccia" },
      { name: "Regina", price: "€14.00", description: "Bordo Porcini. Centro: Pomodoro, Bufala DOP, Crudo, Pachino, Rucola" },
      { name: "Sfilatino", price: "€12.00", description: "Pomodoro a Fette, Fiordilatte, Salame Felino, Emmenthal, Sesamo" },
    ],
  },
  {
    title: "Dessert & Bevande",
    items: [
      { name: "Le torte di Villa Pensabene", price: "€5.00", description: "" },
      { name: "Tiramisù", price: "€5.00", description: "" },
      { name: "Parfait di mandorle", price: "€5.00", description: "" },
      { name: "Cheesecake", price: "€5.00", description: "Frutti di Bosco, Cioccolato Fondente, Pistacchio" },
      { name: "Semifreddo rocher", price: "€5.00", description: "" },
      { name: "Bavarese al pistacchio", price: "€5.00", description: "Con fonduta di fave di cacao" },
      { name: "Tortino cuore caldo", price: "€6.00", description: "Al cioccolato su crema inglese" },
      { name: "Acqua (1 lt)", price: "€3.00", description: "" },
      { name: "Birre in bottiglia (33 cl)", price: "€3.50/€4.50", description: "Beck's, Heineken, Corona, Tennent's, Ceres" },
      { name: "Bibite (33 cl)", price: "€3.00", description: "Coca-Cola, Zero, Fanta, Sprite, Chinotto" },
      { name: "Birra alla spina (40 cl)", price: "€5.00", description: "Forst Kronen - Sixtus" },
    ],
  },
  {
    title: "La nostra Cantina",
    items: [
      { name: "Vini Bianchi", price: "€20.00/€32.00", description: "Anthilia, Bianco di Nera, Charme, Leone, Maria Costanza" },
      { name: "Vini Rossi", price: "€20.00/€30.00", description: "Benuara, Floramundi, Merlot, Nero d'Avola, Syrah" },
      { name: "Prosecco", price: "€16.00", description: "" },
      { name: "Amari e Liquori", price: "€4.00/€5.00", description: "Averna, Del Capo, Jagermeister, Montenegro, Amara, Grappa" },
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

        {/* Desktop View: Distributed into 2 columns to maintain horizontal order feel with independent heights */}
        <div className="hidden md:flex md:flex-row gap-8 mb-12">
          <div className="flex-1 space-y-8">
            {menuCategories
              .filter((_, i) => i % 2 === 0)
              .map((category, index) => (
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
          <div className="flex-1 space-y-8">
            {menuCategories
              .filter((_, i) => i % 2 !== 0)
              .map((category, index) => (
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
        </div>

        {/* Mobile View: Single column maintaining strict sequential order */}
        <div className="flex flex-col gap-8 mb-12 md:hidden">
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
