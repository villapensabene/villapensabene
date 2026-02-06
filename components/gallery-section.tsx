export function GallerySection() {
  const images = [
    { url: "/gourmet-italian-pasta-dish.jpg", alt: "Pasta dish" },
    { url: "/neapolitan-pizza-margherita.jpg", alt: "Pizza" },
    { url: "/italian-restaurant-cozy-interior.jpg", alt: "Restaurant interior" },
    { url: "/italian-antipasto-platter.jpg", alt: "Antipasti" },
    { url: "/tiramisu-dessert-closeup.jpg", alt: "Tiramisu" },
    { url: "/wood-fired-pizza-oven.png", alt: "Pizza oven" },
  ]

  return (
    <section id="gallery" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">Galleria</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            {"Un assaggio visivo delle nostre creazioni culinarie"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg group">
              <img
                src={image.url || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
