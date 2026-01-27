import PageLayout from "@/components/page-layout"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Users, Zap, BookOpen, Calendar, MessageSquare, TrendingUp } from "lucide-react"
import Link from "next/link"
import { ConsultingModal } from "@/components/consulting-modal"
import { FaWhatsapp } from "react-icons/fa"

const services = [
  {
    icon: Users,
    title: "Expert Consultants",
    description: "Work with certified wellness professionals with 10+ years of experience",
  },
  {
    icon: BookOpen,
    title: "Personalized Meal Plans",
    description: "Custom recipes with detailed calorie tracking and macros",
  },
  {
    icon: Zap,
    title: "Real-time Support",
    description: "Chat with your consultant anytime, anywhere",
  },
  // {
  //   icon: TrendingUp,
  //   title: "Progress Tracking",
  //   description: "Monitor your wellness journey with detailed analytics",
  // },
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description: "Book sessions at times that work for you",
  },
  // {
  //   icon: MessageSquare,
  //   title: "Community Support",
  //   description: "Connect with other wellness enthusiasts",
  // },
]

const packages = [
  {
    name: "Starter",
    price: 99,
    duration: "month",
    features: ["1 consultation per week", "Basic meal plan", "Email support", "Progress tracking"],
    service: "online-coaching",
  },
  {
    name: "Professional",
    price: 199,
    duration: "month",
    features: [
      "2 consultations per week",
      "Advanced meal plans",
      "Priority chat support",
      "Detailed analytics",
      "Custom workout plans",
    ],
    highlighted: true,
    service: "online-coaching",
  },
  {
    name: "Elite",
    price: 299,
    duration: "month",
    features: [
      "Unlimited consultations",
      "Premium meal plans",
      "24/7 support",
      "Advanced analytics",
      "Custom programs",
      "1-on-1 video calls",
    ],
    service: "online-coaching",
  },
]

export default function ConsultingPage() {
  return (
    <PageLayout
      title="Wellness Consulting"
      description="Get personalized guidance from certified wellness professionals"
    >

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to Transform?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Start your wellness journey today with personalized guidance from our expert consultants.
          </p>
          <ConsultingModal trigger={
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <FaWhatsapp className="mr-2 h-5 w-5" />
              Book Your First Consultation
            </Button>
          } />

        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-muted-foreground text-lg">Everything you need to succeed</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Pricing Plans</h2>
            <p className="text-muted-foreground text-lg">Choose the plan that fits your needs</p>
          </div>

          {/* <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`p-8 flex flex-col ${pkg.highlighted ? "border-primary border-2 shadow-lg" : ""}`}
              >
                {pkg.highlighted && (
                  <div className="bg-primary text-primary-foreground text-sm font-semibold px-3 py-1 rounded-full w-fit mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-primary">${pkg.price}</span>
                  <span className="text-muted-foreground">/{pkg.duration}</span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href={`/consulting/${pkg.service}`}>
                  <Button
                    className={`w-full ${pkg.highlighted ? "bg-primary hover:bg-primary/90" : "bg-secondary hover:bg-secondary/90"}`}
                  >
                    Get Started
                  </Button>
                </Link>
              </Card>
            ))}
          </div> */}
          <div className="text-green-800 text-center font-extrabold text-5xl md:text-6xl lg:text-7xl text-foreground tracking-tight drop-shadow-lg">
            Stay Tuned
          </div>

        </div>
      </section>
    </PageLayout>
  )
}
