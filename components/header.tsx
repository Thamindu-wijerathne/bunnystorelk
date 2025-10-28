"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggle"
import { useAuth } from "@/lib/auth-context"
import { useTheme } from "./theme-provider"

import Image from "next/image"
import logodark from "@/public/Logo-dark.png"
import logolight from "@/public/Logo-light.png"


export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { user, logout } = useAuth()
  const { theme } = useTheme();


  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 group">
            <div className="w-10 h-10 from-primary via-accent to-primary rounded-xl flex items-center justify-center ">
              <span className="text-primary-foreground font-bold text-lg">
      <Image
        src={theme === "light" ? logodark : logolight }
        alt="Logo picture"
        width={120} // Next.js requires width
        height={40} // Next.js requires height
      />
              </span>
            </div>
            <span className="font-bold pt-2 text-xl text-foreground hidden sm:inline bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              BunnyStore
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {[
              { href: "/shop", label: "Shop" },
              { href: "/consulting", label: "Consulting" },
              { href: "/meals", label: "Meal Plans" },
              { href: "/about", label: "About" },
            ].map((item) => (
              <Link key={item.href} href={item.href}>
                <Button variant="ghost" className="text-foreground hover:text-primary hover:bg-primary/10 transition">
                  {item.label}
                </Button>
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-1 sm:gap-2">
            {/* <Button variant="ghost" size="icon" className="hidden sm:flex hover:bg-primary/10">
              <Search className="w-5 h-5" />
            </Button>

            <Button variant="ghost" size="icon" className="hidden sm:flex hover:bg-primary/10">
              <ShoppingCart className="w-5 h-5" />
            </Button> */}

            <ThemeToggle />

            {user ? (
              <div className="hidden sm:flex items-center gap-1">
                <Link href="/account">
                  <Button variant="ghost" size="sm" className="hover:bg-primary/10">
                    {user.name.split(" ")[0]}
                  </Button>
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={logout}
                  className="hover:bg-destructive/10 hover:text-destructive"
                >
                  <LogOut className="w-5 h-5" />
                </Button>
              </div>
            ) 
            : (
              <div className="hidden sm:flex gap-2">
                {/* <Link href="/login">
                  <Button variant="ghost" size="sm" className="hover:bg-primary/10">
                    Login
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground shadow-md"
                  >
                    Sign Up
                  </Button>
                </Link> */}
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-primary/10 rounded-lg transition"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-1 animate-in fade-in slide-in-from-top-2">
            {[
              { href: "/shop", label: "Shop" },
              { href: "/consulting", label: "Consulting" },
              { href: "/meals", label: "Meal Plans" },
              { href: "/about", label: "About" },
            ].map((item) => (
              <Link key={item.href} href={item.href}>
                <Button variant="ghost" className="w-full justify-start hover:bg-primary/10">
                  {item.label}
                </Button>
              </Link>
            ))}
            {!user && (
              <div className="px-2 py-2 space-y-2 border-t border-border mt-2 pt-2">
                <Link href="/login" className="block">
                  <Button variant="outline" className="w-full bg-transparent hover:bg-primary/10">
                    Login
                  </Button>
                </Link>
                <Link href="/signup" className="block">
                  <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground">
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
          </nav>
        )}
      </div>
    </header>
  )
}
