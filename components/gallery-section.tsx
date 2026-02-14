export function GallerySection() {
  const images = [
    { url: "/dishes/villa_001.jpg", alt: "Piatto Villa Pensabene" },
    { url: "/dishes/villa_002.jpg", alt: "Piatto Villa Pensabene" },
    { url: "/dishes/villa_003.jpg", alt: "Piatto Villa Pensabene" },
    { url: "/dishes/villa_004.jpg", alt: "Piatto Villa Pensabene" },
    { url: "/dishes/villa_005.jpg", alt: "Piatto Villa Pensabene" },
    { url: "/dishes/villa_006.jpg", alt: "Piatto Villa Pensabene" },
    { url: "/dishes/villa_007.jpg", alt: "Piatto Villa Pensabene" },
    { url: "/dishes/villa_008.jpg", alt: "Piatto Villa Pensabene" },
    { url: "/dishes/villa_009.jpg", alt: "Piatto Villa Pensabene" },
    { url: "/dishes/villa_010.jpg", alt: "Piatto Villa Pensabene" },
    { url: "/dishes/villa_011.jpg", alt: "Piatto Villa Pensabene" },
    { url: "/dishes/villa_012.jpg", alt: "Piatto Villa Pensabene" },
    { url: "/dishes/villa_013.jpg", alt: "Piatto Villa Pensabene" },
    { url: "/dishes/villa_014.jpg", alt: "Piatto Villa Pensabene" },
    { url: "/dishes/villa_015.jpg", alt: "Piatto Villa Pensabene" },
    { url: "/dishes/villa_016.jpg", alt: "Piatto Villa Pensabene" },
    { url: "/dishes/villa_017.jpg", alt: "Piatto Villa Pensabene" },
    { url: "/dishes/villa_018.jpg", alt: "Piatto Villa Pensabene" },
    { url: "/dishes/villa_019.jpg", alt: "Piatto Villa Pensabene" },
    { url: "/dishes/villa_020.jpg", alt: "Piatto Villa Pensabene" },
    { url: "/dishes/villa_021.jpg", alt: "Piatto Villa Pensabene" },
    { url: "/dishes/villa_022.jpg", alt: "Piatto Villa Pensabene" },
    { url: "/dishes/villa_023.jpg", alt: "Piatto Villa Pensabene" },
    { url: "/dishes/villa_024.jpg", alt: "Piatto Villa Pensabene" },
    { url: "/dishes/villa_025.jpg", alt: "Piatto Villa Pensabene" },
    { url: "/dishes/villa_026.jpg", alt: "Piatto Villa Pensabene" },
    { url: "/dishes/villa_027.jpg", alt: "Piatto Villa Pensabene" },
    { url: "/dishes/villa_028.jpg", alt: "Piatto Villa Pensabene" },
    { url: "/dishes/villa_029.jpg", alt: "Piatto Villa Pensabene" },
    { url: "/dishes/villa_030.png", alt: "Piatto Villa Pensabene" },
    { url: "/dishes/villa_031.jpg", alt: "Piatto Villa Pensabene" },
    { url: "/dishes/villa_032.jpg", alt: "Piatto Villa Pensabene" },
    { url: "/dishes/villa_033.jpg", alt: "Piatto Villa Pensabene" },
    { url: "/dishes/villa_034.jpg", alt: "Piatto Villa Pensabene" },
    { url: "/dishes/villa_035.jpg", alt: "Piatto Villa Pensabene" },
    { url: "/dishes/villa_036.jpg", alt: "Piatto Villa Pensabene" },
    { url: "/dishes/villa_037.jpg", alt: "Piatto Villa Pensabene" },
    { url: "/dishes/villa_038.jpg", alt: "Piatto Villa Pensabene" },
    { url: "/dishes/villa_039.jpg", alt: "Piatto Villa Pensabene" },
    { url: "/dishes/villa_040.jpg", alt: "Piatto Villa Pensabene" },
    { url: "/dishes/villa_041.jpg", alt: "Piatto Villa Pensabene" },
    { url: "/dishes/villa_042.jpg", alt: "Piatto Villa Pensabene" },
    { url: "/dishes/villa_043.jpg", alt: "Piatto Villa Pensabene" },
    { url: "/dishes/villa_044.jpg", alt: "Piatto Villa Pensabene" },
    { url: "/dishes/villa_045.jpg", alt: "Piatto Villa Pensabene" },
    { url: "/dishes/villa_046.jpg", alt: "Piatto Villa Pensabene" },
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
