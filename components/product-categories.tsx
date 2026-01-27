import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Dumbbell, Pill, Droplet, Sparkles } from "lucide-react"

const categories = [
  {
    id: "supplements",
    name: "Supplements",
    description: "Creatine, protein, fat burners & more",
    icon: Pill,
    color: "bg-primary/10 text-primary",
    href: "/shop?category=supplements",
  },
  // {
  //   id: "gym-gear",
  //   name: "Gym Gear",
  //   description: "Equipment & accessories",
  //   icon: Dumbbell,
  //   color: "bg-secondary/10 text-secondary",
  //   href: "/shop?category=gym-gear",
  // },
  // {
  //   id: "perfume",
  //   name: "Perfume & Care",
  //   description: "Premium fragrances & grooming",
  //   icon: Sparkles,
  //   color: "bg-accent/10 text-accent",
  //   href: "/shop?category=perfume",
  // },
  {
    id: "nutrition",
    name: "Nutrition",
    description: "Meal plans & recipes",
    icon: Droplet,
    color: "bg-primary/10 text-primary",
    href: "/meals",
  },
]

export default function ProductCategories() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Shop by Category</h2>
          <p className="text-muted-foreground text-lg">Everything you need for your wellness journey</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <Link key={category.id} href={category.href}>
                <Card className="p-6 hover:shadow-lg transition cursor-pointer h-full items-center">
                  <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-2">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
