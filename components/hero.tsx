"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import React, { useEffect, useRef, useState } from "react"

export default function Hero() {
  const containerRef = useRef<HTMLElement | null>(null)
  const [frame, setFrame] = useState(1)
  const [textOpacity, setTextOpacity] = useState(0)
  const [textTranslate, setTextTranslate] = useState(50)
  const totalFrames = 59

  const pad = (num: number) => num.toString().padStart(3, "0")

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const section = containerRef.current
      const scrollTop = window.scrollY - section.offsetTop
      const scrollHeight = section.offsetHeight - window.innerHeight

      const scrollProgress = Math.min(Math.max(scrollTop / scrollHeight, 0), 1)

      // Image frame
      const currentFrame = Math.floor(scrollProgress * (totalFrames - 1)) + 1
      setFrame(currentFrame)

      // Text animation: fade in in first 50% scroll
      const opacity = Math.min(scrollProgress * 2, 1)
      const translate = 50 - scrollProgress * 50
      setTextOpacity(opacity)
      setTextTranslate(translate)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative w-full"
      style={{ height: `${totalFrames * 50}px` }}
    >
      {/* Sticky hero image */}
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        <img
          src={`/homepagevideo/ezgif-frame-${pad(frame)}.jpg`}
          alt="Hero animation"
          className="w-full h-full object-cover"
        />

        {/* Overlay text */}
        <div
          className="absolute inset-0 flex flex-col justify-center items-start p-6 text-white"
          style={{
            opacity: textOpacity,
            transform: `translateY(${textTranslate}px)`,
          }}
        >
          {/* <div className="w-full flex justify-end pb-30">
            <span className="px-4 py-2 bg-primary/70 rounded-full text-sm font-semibold">
              Welcome to BunnyStore
            </span>
          </div> */}
          <div className="">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mt-2">
              Your{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Wellness
              </span>{" "}
              Journey
            </h1>
          </div>
          <p className="mt-2 max-w-lg">
            Premium supplements, personalized meal plans, and expert consulting to help you achieve your wellness goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link href="/shop">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent">
                Shop Now
              </Button>
            </Link>
            <Link href="/consulting">
              <Button size="lg" variant="outline" className="border-primary/30">
                Get Consulting
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
