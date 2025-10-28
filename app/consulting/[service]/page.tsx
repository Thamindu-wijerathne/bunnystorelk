import PageLayout from "@/components/page-layout"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Award } from "lucide-react"
import Link from "next/link"

// Mock service data
const services: Record<string, any> = {
  "personal-training": {
    name: "Personal Training",
    description: "One-on-one coaching tailored to your fitness goals",
    price: 75,
    duration: "per session",
    image: "/professional-trainer.jpg",
    overview:
      "Get personalized training sessions with our certified fitness professionals. Each session is customized to your fitness level, goals, and preferences.",
    includes: [
      "Customized workout plans",
      "Form correction and guidance",
      "Progress tracking and adjustments",
      "Nutritional advice",
      "Motivation and accountability",
      "Flexible scheduling",
    ],
    benefits: [
      "Faster results with expert guidance",
      "Injury prevention through proper form",
      "Personalized progression",
      "Accountability and motivation",
      "Flexible scheduling options",
    ],
    sessions: [
      { duration: "30 minutes", price: 50, popular: false },
      { duration: "60 minutes", price: 75, popular: true },
      { duration: "90 minutes", price: 100, popular: false },
    ],
  },
  "nutrition-coaching": {
    name: "Nutrition Coaching",
    description: "Expert guidance on diet and meal planning",
    price: 60,
    duration: "per session",
    image: "/nutritionist-with-meal-plan-and-healthy-food.jpg",
    overview:
      "Work with certified nutritionists to develop a personalized eating plan that supports your fitness goals and lifestyle.",
    includes: [
      "Personalized meal plans",
      "Macro and calorie tracking",
      "Recipe recommendations",
      "Grocery shopping guidance",
      "Supplement recommendations",
      "Regular check-ins and adjustments",
    ],
    benefits: [
      "Sustainable eating habits",
      "Better energy and performance",
      "Improved body composition",
      "Reduced cravings and hunger",
      "Long-term lifestyle changes",
    ],
    sessions: [
      { duration: "Initial consultation", price: 60, popular: false },
      { duration: "Monthly plan", price: 150, popular: true },
      { duration: "Quarterly plan", price: 400, popular: false },
    ],
  },
  "online-coaching": {
    name: "Online Coaching",
    description: "Remote fitness and nutrition coaching",
    price: 99,
    duration: "per month",
    image: "/professional-support.jpg",
    overview:
      "Get comprehensive online coaching combining fitness training and nutrition guidance. Perfect for those with busy schedules.",
    includes: [
      "Weekly video coaching calls",
      "Customized workout programs",
      "Meal planning and recipes",
      "Progress tracking app",
      "24/7 messaging support",
      "Monthly progress reviews",
    ],
    benefits: [
      "Convenience and flexibility",
      "Comprehensive approach",
      "Continuous support",
      "Affordable compared to in-person",
      "Access to expert guidance anytime",
    ],
    sessions: [
      { duration: "1 month", price: 99, popular: false },
      { duration: "3 months", price: 270, popular: true },
      { duration: "6 months", price: 500, popular: false },
    ],
  },
}

export default function ConsultingServicePage({ params }: { params: { service: string } }) {
  const service = services[params.service]

  if (!service) {
    return (
      <PageLayout title="Service Not Found">
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-lg text-muted-foreground mb-6">The service you're looking for doesn't exist.</p>
            <Link href="/consulting">
              <Button className="bg-primary hover:bg-primary/90">Back to Consulting</Button>
            </Link>
          </div>
        </section>
      </PageLayout>
    )
  }

  return (
    <PageLayout>
      {/* Service Header */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/consulting" className="text-primary hover:text-primary/80 mb-6 inline-block">
            ← Back to Consulting
          </Link>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{service.name}</h1>
              <p className="text-xl text-muted-foreground mb-6">{service.overview}</p>

              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-4xl font-bold text-primary">${service.price}</span>
                <span className="text-muted-foreground">/{service.duration}</span>
              </div>

              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Book Now
              </Button>
            </div>

            <div className="h-96 bg-muted rounded-lg overflow-hidden">
              <img
                src={service.image || "/placeholder.svg"}
                alt={service.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-12 md:py-16 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8">What's Included</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {service.includes.map((item: string, index: number) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 md:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8">Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {service.benefits.map((benefit: string, index: number) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition">
                <Award className="w-8 h-8 text-primary mx-auto mb-4" />
                <p className="text-foreground font-semibold">{benefit}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Options */}
      <section className="py-12 md:py-16 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8">Pricing Options</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {service.sessions.map((session: any, index: number) => (
              <Card
                key={index}
                className={`p-6 flex flex-col ${session.popular ? "border-primary border-2 shadow-lg" : ""}`}
              >
                {session.popular && (
                  <div className="bg-primary text-primary-foreground text-sm font-semibold px-3 py-1 rounded-full w-fit mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold text-foreground mb-2">{session.duration}</h3>
                <div className="mb-6 flex-1">
                  <span className="text-3xl font-bold text-primary">${session.price}</span>
                </div>
                <Button
                  className={`w-full ${session.popular ? "bg-primary hover:bg-primary/90" : "bg-secondary hover:bg-secondary/90"}`}
                >
                  Select
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Book your first session today and start your transformation journey.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Book Your Session
          </Button>
        </div>
      </section>
    </PageLayout>
  )
}
