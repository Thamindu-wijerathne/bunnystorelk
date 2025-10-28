import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ShoppingCart } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Premium Creatine Monohydrate",
    category: "Supplements",
    price: 29.99,
    rating: 4.8,
    reviews: 245,
    image: "/creatine-powder.png",
  },
  {
    id: 2,
    name: "Advanced Fat Burner",
    category: "Supplements",
    price: 39.99,
    rating: 4.6,
    reviews: 189,
    image: "/fat-burner-supplement-bottle.jpg",
  },
  {
    id: 3,
    name: "Luxury Gym Perfume",
    category: "Perfume",
    price: 49.99,
    rating: 4.9,
    reviews: 156,
    image: "/luxury-perfume-bottle.png",
  },
  {
    id: 4,
    name: "Professional Dumbbell Set",
    category: "Gym Gear",
    price: 199.99,
    rating: 4.7,
    reviews: 312,
    image: "/professional-dumbbells-set.jpg",
  },
]

export default function FeaturedProducts() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Products</h2>
          <p className="text-muted-foreground text-lg">Best sellers from our collection</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition">
              <div className="relative h-48 bg-muted overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              </div>
              <div className="p-4">
                <p className="text-xs text-primary font-semibold mb-2">{product.category}</p>
                <h3 className="font-bold text-foreground mb-2 line-clamp-2">{product.name}</h3>

                <div className="flex items-center gap-1 mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-muted"}`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">({product.reviews})</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-foreground">${product.price}</span>
                  <Button size="sm" className="bg-primary hover:bg-primary/90">
                    <ShoppingCart className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
