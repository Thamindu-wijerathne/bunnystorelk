"use client"

import { useState } from "react"
import PageLayout from "@/components/page-layout"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ShoppingCart, Filter } from "lucide-react"
import Link from "next/link"
import { ProductInfoModal } from "@/components/product-info-modal"

const allProducts = [
  // Pre Workouts
  {
    id: 1,
    name: "Pump 3G",
    category: "Pre Workouts",
    price: 7500,
    rating: 4.8,
    reviews: 120,
    image: "/products/Pump 3G.jpg",
  },
  {
    id: 2,
    name: "Reckful",
    category: "Pre Workouts",
    price: 7500,
    rating: 4.7,
    reviews: 85,
    image: "/products/reckful pre workout.jpg",
  },
  {
    id: 3,
    name: "Caffeine Tabs",
    category: "Pre Workouts",
    price: 4500,
    rating: 4.5,
    reviews: 60,
    image: "/products/Caffeine tabs.jpg",
  },

  // Creatine
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
    id: 5,
    name: "Nutriversum",
    category: "Creatine",
    price: 4500,
    rating: 4.6,
    reviews: 150,
    image: "/products/Nutriversum.png",
  },
  {
    id: 6,
    name: "Raw Creatine",
    category: "Creatine",
    price: 5000,
    rating: 4.8,
    reviews: 180,
    image: "/products/Raw creatine.webp",
  },
  {
    id: 7,
    name: "Enhance",
    category: "Creatine",
    price: 4500,
    rating: 4.5,
    reviews: 90,
    image: "/products/Enhance.webp",
  },
  {
    id: 8,
    name: "Applied FLV",
    category: "Creatine",
    price: 6000,
    rating: 4.7,
    reviews: 110,
    image: "/products/Creatine-FLV.png.webp",
  },
  {
    id: 9,
    name: "Core Champs",
    category: "Creatine",
    price: 5000,
    rating: 4.6,
    reviews: 75,
    image: "/products/Core champs.jpg",
  },
  {
    id: 10,
    name: "VX Creatine",
    category: "Creatine",
    price: 5500,
    rating: 4.7,
    reviews: 95,
    image: "/products/Vx creatine.webp",
  },
  {
    id: 11,
    name: "Big Ramy",
    category: "Creatine",
    price: 5500,
    rating: 4.8,
    reviews: 130,
    image: "/products/Big ramy.webp",
  },
  {
    id: 12,
    name: "Galvanize Creatine",
    category: "Creatine",
    price: 6000,
    rating: 4.9,
    reviews: 160,
    image: "/products/Galvanize.webp",
  },

  // Proteins
  {
    id: 13,
    name: "ISO 100",
    category: "Proteins",
    price: 33000,
    rating: 5.0,
    reviews: 300,
    image: "/products/Iso 100.webp",
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
    id: 15,
    name: "Ultimate Whey",
    category: "Proteins",
    price: 23000,
    rating: 4.8,
    reviews: 180,
    image: "/products/Ultimate whey.jpg",
  },
  {
    id: 16,
    name: "Dennis James",
    category: "Proteins",
    price: 22000,
    rating: 4.6,
    reviews: 120,
    image: "/products/Dennis omega 3.webp",
  },
  {
    id: 17,
    name: "Gibbon Whey",
    category: "Proteins",
    price: 21000,
    rating: 4.5,
    reviews: 90,
    image: "/products/Gibbon whey.jpg",
  },
  {
    id: 18,
    name: "Applied Critical",
    category: "Proteins",
    price: 21500,
    rating: 4.7,
    reviews: 110,
    image: "/products/Applied multivitamin.webp",
  },
  {
    id: 19,
    name: "Pro Science",
    category: "Proteins",
    price: 21500,
    rating: 4.6,
    reviews: 100,
    image: "/products/Pro science mass.webp",
  },
  {
    id: 20,
    name: "Nitro Tech",
    category: "Proteins",
    price: 23000,
    rating: 4.9,
    reviews: 250,
    image: "/products/Nitro Tech.jpg",
  },

  // Mass Gainers
  {
    id: 21,
    name: "Pro Science Mass",
    category: "Mass gainers",
    price: 21500,
    rating: 4.7,
    reviews: 140,
    image: "/products/Pro science mass.webp",
  },

  // Others
  {
    id: 22,
    name: "Applied Multivitamin",
    category: "Others",
    price: 4500,
    rating: 4.6,
    reviews: 80,
    image: "/products/Applied multivitamin.webp",
  },
  {
    id: 23,
    name: "Collagen",
    category: "Others",
    price: 4500,
    rating: 4.5,
    reviews: 60,
    image: "/products/Caffeine tabs.jpg",
  },
  {
    id: 24,
    name: "Dennis Omega 3",
    category: "Others",
    price: 5000,
    rating: 4.7,
    reviews: 95,
    image: "/products/Dennis omega 3.webp",
  },
  {
    id: 25,
    name: "Xtend BCAA",
    category: "Others",
    price: 7500,
    rating: 4.8,
    reviews: 150,
    image: "/products/Xtend bcaa.jpg",
  },
  {
    id: 26,
    name: "BSN Amino",
    category: "Others",
    price: 5000,
    rating: 4.6,
    reviews: 110,
    image: "/products/Bsn amino.jpg",
  },
  {
    id: 27,
    name: "GAT Testrol",
    category: "Others",
    price: 4500,
    rating: 4.5,
    reviews: 70,
    image: "/products/Gat testrol.jpg",
  },
  {
    id: 28,
    name: "Dexter L-Carnitine",
    category: "Others",
    price: 7000,
    rating: 4.7,
    reviews: 85,
    image: "/products/Dexter l carnitine.webp",
  },
]

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = ["Pre Workouts", "Creatine", "Proteins", "Mass gainers", "Others"]
  const filteredProducts = selectedCategory ? allProducts.filter((p) => p.category === selectedCategory) : allProducts

  return (
    <PageLayout
      title="Shop"
      description="Browse our premium selection of supplements and nutrition"
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductInfoModal
                key={product.id}
                product={product}
                trigger={
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
                              className={`w-3 h-3 md:w-4 md:h-4 ${i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-muted"}`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground">({product.reviews})</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-base font-bold text-foreground">Rs. {product.price.toLocaleString()}</span>
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
        </div>
      </section>
    </PageLayout>
  )
}
