import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ShoppingCart } from "lucide-react"
import Link from "next/link"
import { ProductInfoModal } from "@/components/product-info-modal"

const products = [
  {
    id: 1,
    name: "Pump 3G Pre-Workout",
    category: "Pre Workouts",
    price: 7500,
    rating: 4.8,
    reviews: 120,
    image: "/products/Pump 3G.jpg",
  },
  {
    id: 4,
    name: "Cellucor Creatine",
    category: "Creatine",
    price: 5500,
    rating: 4.9,
    reviews: 200,
    image: "/products/Cellucor creatine.jpg",
  },
  {
    id: 13,
    name: "ISO 100 Hydrolyzed",
    category: "Proteins",
    price: 33000,
    rating: 5.0,
    reviews: 300,
    image: "/products/Iso 100.webp",
  },
  {
    id: 21,
    name: "Pro Science Mass Gainer",
    category: "Mass gainers",
    price: 21500,
    rating: 4.7,
    reviews: 140,
    image: "/products/Pro Science Mass.webp",
  },
  {
    id: 2,
    name: "Reckful Pre-Workout",
    category: "Pre Workouts",
    price: 7500,
    rating: 4.7,
    reviews: 85,
    image: "/products/reckful pre workout.jpg",
  },
  {
    id: 14,
    name: "Galvanize Whey",
    category: "Proteins",
    price: 22000,
    rating: 4.7,
    reviews: 150,
    image: "/products/Galvanize.jpg",
  },
  {
    id: 22,
    name: "Applied Multivitamin",
    category: "Others",
    price: 4500,
    rating: 4.6,
    reviews: 80,
    image: "/placeholder.svg",
  },
  {
    id: 25,
    name: "Xtend BCAA",
    category: "Others",
    price: 7500,
    rating: 4.8,
    reviews: 150,
    image: "/products/Xtend BCAA.jpg",
  },
  {
    id: 28,
    name: "Dexter L-Carnitine",
    category: "Others",
    price: 7000,
    rating: 4.7,
    reviews: 85,
    image: "/placeholder.svg",
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

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductInfoModal
              key={product.id}
              product={product}
              trigger={
                <Card
                  className={`overflow-hidden hover:shadow-lg transition cursor-pointer ${index >= 4 ? 'hidden md:block' : ''}`}
                >
                  <div className="relative h-48 bg-muted overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-primary font-semibold mb-2">{product.category}</p>
                    <h3 className="font-bold text-foreground mb-2 line-clamp-2 md:text-lg text-sm">{product.name}</h3>

                    <div className="flex items-center gap-1 mb-3">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 md:w-4 md:h-4 ${i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-muted"}`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">({product.reviews})</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-base md:text-lg font-bold text-foreground">Rs. {product.price.toLocaleString()}</span>
                      <Button size="sm" className="bg-primary hover:bg-primary/90 h-8 w-8 p-0 md:h-9 md:w-auto md:px-3">
                        <ShoppingCart className="w-4 h-4" />
                        <span className="hidden md:ml-2 md:inline">Add</span>
                      </Button>
                    </div>
                  </div>
                </Card>
              }
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/shop">
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
              Show More Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
