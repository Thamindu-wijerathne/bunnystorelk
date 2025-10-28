import { Button } from "@/components/ui/button"
import { CheckCircle, Users, Zap, BookOpen } from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: Users,
    title: "Expert Consultants",
    description: "Work with certified fitness professionals",
  },
  {
    icon: BookOpen,
    title: "Personalized Meal Plans",
    description: "Custom recipes with calorie tracking",
  },
  {
    icon: Zap,
    title: "Real-time Support",
    description: "Chat with your consultant anytime",
  },
  {
    icon: CheckCircle,
    title: "Progress Tracking",
    description: "Monitor your fitness journey",
  },
]

export default function ConsultingSection() {
  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Online Fitness Consulting</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Get personalized meal plans with detailed recipes and calorie information. Our expert consultants will
              guide you every step of the way.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <Link href="/consulting">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Start Your Consultation
              </Button>
            </Link>
          </div>

          {/* Right Image */}
          <div className="relative h-96">
            <img src="/nutritionist-with-meal-plan-and-healthy-food.jpg" alt="Consulting" className="w-full h-full object-cover rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
