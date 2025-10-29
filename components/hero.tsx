import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 md:py-32 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                  Welcome to BunnyStore
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Your{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Wellness</span>{" "}
                Journey
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Premium supplements, personalized meal plans, and expert consulting to help you achieve your wellness
                goals. Join thousands of satisfied customers.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/shop">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground shadow-lg"
                >
                  Shop Now
                </Button>
              </Link>
              <Link href="/consulting">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-primary/30 hover:bg-primary/5 bg-transparent"
                >
                  Get Consulting
                </Button>
              </Link>
            </div>

            {/* Stats */}
            {/* <div className="grid grid-cols-3 gap-4 pt-8">
              {[
                { value: "10K+", label: "Happy Customers" },
                { value: "500+", label: "Products" },
                { value: "24/7", label: "Support" },
              ].map((stat, i) => (
                <div key={i} className="p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition">
                  <p className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div> */}
          </div>

          {/* Right Image */}
          <div className="relative h-96 md:h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl"></div>
            <img
              src="/fit-person-in-gym-with-dumbbells.jpg"
              alt="BunnyStore wellness"
              className="relative w-full h-full object-cover rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
