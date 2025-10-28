"use client"

import { useState } from "react"
import PageLayout from "@/components/page-layout"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ShoppingCart, Heart, Share2, Minus, Plus } from "lucide-react"
import Link from "next/link"

// Mock product data - in a real app, this would come from a database
const products: Record<string, any> = {
  "1": {
    id: 1,
    name: "Premium Creatine Monohydrate",
    category: "Supplements",
    price: 29.99,
    rating: 4.8,
    reviews: 245,
    image: "/creatine-powder.png",
    description:
      "High-quality creatine monohydrate powder designed to support muscle strength and performance. Micronized for better absorption and mixability.",
    benefits: [
      "Increases muscle strength and power",
      "Supports muscle growth and recovery",
      "Improves athletic performance",
      "Enhances energy production",
      "Micronized for better absorption",
    ],
    specifications: {
      servingSize: "5g",
      servingsPerContainer: 200,
      ingredients: "100% Creatine Monohydrate",
      flavor: "Unflavored",
    },
  },
  "2": {
    id: 2,
    name: "Advanced Fat Burner",
    category: "Supplements",
    price: 39.99,
    rating: 4.6,
    reviews: 189,
    image: "/fat-burner-supplement-bottle.jpg",
    description:
      "Powerful thermogenic formula designed to boost metabolism and support fat loss. Contains natural ingredients for sustained energy.",
    benefits: [
      "Boosts metabolism naturally",
      "Increases energy levels",
      "Supports fat loss goals",
      "Enhances mental focus",
      "No jitters or crashes",
    ],
    specifications: {
      servingSize: "2 capsules",
      servingsPerContainer: 60,
      ingredients: "Green Tea Extract, Caffeine, L-Carnitine, CLA",
      flavor: "N/A",
    },
  },
  "3": {
    id: 3,
    name: "Luxury Gym Perfume",
    category: "Perfume",
    price: 49.99,
    rating: 4.9,
    reviews: 156,
    image: "/luxury-perfume-bottle.png",
    description:
      "Premium fragrance designed for active individuals. Long-lasting scent that stays fresh throughout your workout.",
    benefits: [
      "Long-lasting fragrance (8+ hours)",
      "Sweat-resistant formula",
      "Energizing scent profile",
      "Premium quality ingredients",
      "Perfect for gym or daily wear",
    ],
    specifications: {
      volume: "100ml",
      type: "Eau de Toilette",
      topNotes: "Citrus, Bergamot",
      heartNotes: "Lavender, Cedarwood",
    },
  },
  "4": {
    id: 4,
    name: "Professional Dumbbell Set",
    category: "Gym Gear",
    price: 199.99,
    rating: 4.7,
    reviews: 312,
    image: "/professional-dumbbells-set.jpg",
    description:
      "Complete dumbbell set with adjustable weights. Perfect for home or commercial gym use. Includes storage rack.",
    benefits: [
      "Adjustable weight range",
      "Durable construction",
      "Includes storage rack",
      "Suitable for all fitness levels",
      "Professional grade quality",
    ],
    specifications: {
      weightRange: "5-50 lbs",
      material: "Cast iron with rubber coating",
      quantity: "20 pairs",
      storage: "Included rack",
    },
  },
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products[params.id]
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)

  if (!product) {
    return (
      <PageLayout title="Product Not Found">
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-lg text-muted-foreground mb-6">The product you're looking for doesn't exist.</p>
            <Link href="/shop">
              <Button className="bg-primary hover:bg-primary/90">Back to Shop</Button>
            </Link>
          </div>
        </section>
      </PageLayout>
    )
  }

  const relatedProducts = Object.values(products)
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3)

  return (
    <PageLayout>
      {/* Product Details */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/shop" className="text-primary hover:text-primary/80 mb-6 inline-block">
            ← Back to Shop
          </Link>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="flex items-center justify-center bg-muted rounded-lg p-8">
              <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-auto max-h-96" />
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <p className="text-sm text-primary font-semibold mb-2">{product.category}</p>
                <h1 className="text-4xl font-bold text-foreground mb-4">{product.name}</h1>
                <p className="text-lg text-muted-foreground">{product.description}</p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-muted"}`}
                    />
                  ))}
                </div>
                <span className="text-muted-foreground">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="text-4xl font-bold text-primary">${product.price}</div>

              {/* Quantity Selector */}
              <div className="flex items-center gap-4">
                <span className="text-foreground font-semibold">Quantity:</span>
                <div className="flex items-center border border-border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-muted transition"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 font-semibold">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="p-2 hover:bg-muted transition">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="flex-1 bg-primary hover:bg-primary/90 flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={isWishlisted ? "bg-primary/10" : ""}
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? "fill-primary text-primary" : ""}`} />
                </Button>
                <Button size="lg" variant="outline">
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>

              {/* Shipping Info */}
              <Card className="p-4 bg-primary/5 border-primary/20">
                <p className="text-sm text-foreground">
                  <span className="font-semibold">Free shipping</span> on orders over $50
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Specifications */}
      <section className="py-12 md:py-16 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Benefits */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Key Benefits</h2>
              <ul className="space-y-3">
                {product.benefits.map((benefit: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm font-bold">✓</span>
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Specifications</h2>
              <div className="space-y-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground capitalize">{key.replace(/([A-Z])/g, " $1")}:</span>
                    <span className="font-semibold text-foreground">{String(value)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-12 md:py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">Related Products</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct: any) => (
                <Link key={relatedProduct.id} href={`/shop/${relatedProduct.id}`}>
                  <Card className="overflow-hidden hover:shadow-lg transition cursor-pointer h-full">
                    <div className="relative h-48 bg-muted overflow-hidden">
                      <img
                        src={relatedProduct.image || "/placeholder.svg"}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover hover:scale-105 transition"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-xs text-primary font-semibold mb-2">{relatedProduct.category}</p>
                      <h3 className="font-bold text-foreground mb-2 line-clamp-2">{relatedProduct.name}</h3>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-foreground">${relatedProduct.price}</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${i < Math.floor(relatedProduct.rating) ? "fill-primary text-primary" : "text-muted"}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </PageLayout>
  )
}
