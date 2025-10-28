"use client"

import { useState } from "react"
import PageLayout from "@/components/page-layout"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ShoppingCart, Filter } from "lucide-react"
import Link from "next/link"

const allProducts = [
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
    name: "Whey Protein Isolate",
    category: "Supplements",
    price: 49.99,
    rating: 4.9,
    reviews: 412,
    image: "/protein-powder.jpg",
  },
  {
    id: 4,
    name: "BCAA Complex",
    category: "Supplements",
    price: 34.99,
    rating: 4.7,
    reviews: 178,
    image: "/bcaa-supplement.jpg",
  },
  {
    id: 5,
    name: "Professional Dumbbell Set",
    category: "Gym Gear",
    price: 199.99,
    rating: 4.7,
    reviews: 312,
    image: "/professional-dumbbells-set.jpg",
  },
  {
    id: 6,
    name: "Adjustable Weight Bench",
    category: "Gym Gear",
    price: 149.99,
    rating: 4.8,
    reviews: 267,
    image: "/weight-bench.jpg",
  },
  {
    id: 7,
    name: "Resistance Band Set",
    category: "Gym Gear",
    price: 24.99,
    rating: 4.5,
    reviews: 189,
    image: "/resistance-bands.jpg",
  },
  {
    id: 8,
    name: "Yoga Mat Premium",
    category: "Gym Gear",
    price: 39.99,
    rating: 4.6,
    reviews: 234,
    image: "/yoga-mat.jpg",
  },
  {
    id: 9,
    name: "Luxury Gym Perfume",
    category: "Perfume",
    price: 49.99,
    rating: 4.9,
    reviews: 156,
    image: "/luxury-perfume-bottle.png",
  },
  {
    id: 10,
    name: "Fresh Citrus Cologne",
    category: "Perfume",
    price: 44.99,
    rating: 4.7,
    reviews: 123,
    image: "/citrus-cologne.jpg",
  },
  {
    id: 11,
    name: "Energizing Body Spray",
    category: "Perfume",
    price: 29.99,
    rating: 4.4,
    reviews: 98,
    image: "/body-spray.jpg",
  },
  {
    id: 12,
    name: "Premium Deodorant",
    category: "Perfume",
    price: 19.99,
    rating: 4.6,
    reviews: 267,
    image: "/deodorant.jpg",
  },
]

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = ["Supplements", "Gym Gear", "Perfume"]
  const filteredProducts = selectedCategory ? allProducts.filter((p) => p.category === selectedCategory) : allProducts

  return (
    <PageLayout
      title="Shop"
      description="Browse our complete collection of supplements, gym gear, and premium fragrances"
    >
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Section */}
          <div className="mb-8 flex flex-wrap gap-3">
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              onClick={() => setSelectedCategory(null)}
              className="flex items-center gap-2"
            >
              <Filter className="w-4 h-4" />
              All Products
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Link key={product.id} href={`/shop/${product.id}`}>
                <Card className="overflow-hidden hover:shadow-lg transition cursor-pointer h-full">
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
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
