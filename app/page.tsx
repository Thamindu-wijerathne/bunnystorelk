import Header from "@/components/header"
import Hero from "@/components/hero"
import ProductCategories from "@/components/product-categories"
import ConsultingSection from "@/components/consulting-section"
import FeaturedProducts from "@/components/featured-products"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      {/* <ProductCategories /> */}
      {/* <FeaturedProducts /> */}
      <ConsultingSection />
      <Footer />
    </main>
  )
}
