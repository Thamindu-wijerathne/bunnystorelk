import PageLayout from "@/components/page-layout"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Award, Users, Target, Heart } from "lucide-react"
import Link from "next/link"

const values = [
  {
    icon: Target,
    title: "Mission",
    description: "Empower individuals to achieve their wellness goals through quality products and expert guidance.",
  },
  {
    icon: Heart,
    title: "Values",
    description: "We believe in integrity, quality, and customer satisfaction in everything we do.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Committed to providing the highest quality supplements, gear, and consulting services.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Building a supportive community of wellness enthusiasts and professionals.",
  },
]

const team = [
  {
    name: "John Smith",
    role: "Founder & CEO",
    bio: "15+ years in wellness industry",
    image: "/professional-man.png",
  },
  // {
  //   name: "Sarah Johnson",
  //   role: "Head of Nutrition",
  //   bio: "Certified nutritionist & dietitian",
  //   image: "/professional-woman.png",
  // },
  // {
  //   name: "Mike Chen",
  //   role: "Wellness Director",
  //   bio: "NASM certified trainer",
  //   image: "/professional-trainer.jpg",
  // },
  // {
  //   name: "Emma Davis",
  //   role: "Customer Success",
  //   bio: "Dedicated to your goals",
  //   image: "/professional-support.jpg",
  // },
]

export default function AboutPage() {
  return (
    <PageLayout title="About BunnyStore" description="Your trusted partner in wellness and lifestyle">
      {/* Story Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Story</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              BunnyStore was founded with a simple mission: to make wellness accessible and achievable for everyone. We
              started as a small supplement shop and have grown into a comprehensive wellness platform offering premium
              products, expert consulting, and personalized meal plans.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Today, we serve over 10,000 customers worldwide, helping them transform their lives through quality
              products and expert guidance. Our team of certified professionals is dedicated to your success.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Values</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition">
                  <div
                    className={`w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mx-auto mb-4`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground text-lg">Experts dedicated to your wellness journey</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition">
                <div className="h-48 bg-muted overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-lg text-foreground">{member.name}</h3>
                  <p className="text-sm text-primary font-semibold mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Join Our Community</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Start your wellness journey today and become part of the BunnyStore family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/shop">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Shop Now
              </Button>
            </Link>
            <Link href="/consulting">
              <Button size="lg" variant="outline">
                Get Consulting
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
