import type React from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"

interface PageLayoutProps {
  children: React.ReactNode
  title?: string
  description?: string
}

export default function PageLayout({ children, title, description }: PageLayoutProps) {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="flex-1">
        {(title || description) && (
          <section className="bg-primary/5 py-12 md:py-16 border-b border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {title && <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{title}</h1>}
              {description && <p className="text-lg text-muted-foreground max-w-2xl">{description}</p>}
            </div>
          </section>
        )}
        {children}
      </div>
      <Footer />
    </main>
  )
}
