"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import React, { useEffect, useRef, useState } from "react"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  const containerRef = useRef<HTMLElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const imagesRef = useRef<HTMLImageElement[]>([])
  const [textOpacity, setTextOpacity] = useState(0)
  const [textTranslate, setTextTranslate] = useState(50)
  const totalFrames = 89
  const [showScrollIndicator, setShowScrollIndicator] = useState(true)
  const pad = (num: number) => num.toString().padStart(3, "0")

  // Function to draw a specific frame to the canvas
  const renderFrame = (index: number) => {
    const canvas = canvasRef.current
    const context = canvas?.getContext("2d")
    const img = imagesRef.current[index]

    if (!canvas || !context || !img) return

    // "object-cover" logic for canvas
    const w = canvas.width
    const h = canvas.height
    const imgW = img.width
    const imgH = img.height

    const scale = Math.max(w / imgW, h / imgH)
    const x = (w - imgW * scale) / 2
    const y = (h - imgH * scale) / 2

    context.clearRect(0, 0, w, h)
    context.drawImage(img, x, y, imgW * scale, imgH * scale)
  }

  // Handle Scroll and Animation
  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!containerRef.current) return

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const section = containerRef.current!
          const scrollTop = window.scrollY - section.offsetTop
          const scrollHeight = section.offsetHeight - window.innerHeight

          const scrollProgress = Math.min(
            Math.max(scrollTop / scrollHeight, 0),
            1
          )

          // Calculate current frame index (0 to totalFrames-1)
          // We map 1..totalFrames to 0..totalFrames-1 for array access
          const frameIndex = Math.min(
            Math.floor(scrollProgress * (totalFrames - 1)),
            totalFrames - 1
          )

          // Draw the image directly
          renderFrame(frameIndex)

          // Text animation
          setTextOpacity(Math.min(scrollProgress * 2, 1))
          setTextTranslate(50 - scrollProgress * 50)

          ticking = false
        })

        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isLoaded]) // Re-bind when loaded so renderFrame works with populated images


  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth
        canvasRef.current.height = window.innerHeight
        // Re-render current scroll position or default to 0
        // For simplicity, we can let the scroll event (which often fires on resize) handle it, 
        // or force a re-render of frame 0 if at top. 
        // A simple trick: trigger a scroll handler manually or just redraw 0 if at top
        if (window.scrollY === 0) renderFrame(0)
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize() // Initial sizing

    return () => window.removeEventListener('resize', handleResize)
  }, [isLoaded])


  // Lock scroll when loading
  useEffect(() => {
    if (!isLoaded) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isLoaded])

  // load all images before page opens
  useEffect(() => {
    const preloadImages = async () => {
      // Initialize array
      imagesRef.current = new Array(totalFrames)

      // Create an array of promises for each image
      const imagePromises = Array.from({ length: totalFrames }, (_, i) => {
        return new Promise<void>((resolve) => {
          const img = new Image()
          img.src = `/homepagevideo/ezgif-frame-${pad(i + 1)}.jpg`
          img.onload = () => {
            imagesRef.current[i] = img
            setLoadingProgress(prev => {
              const newProgress = prev + (100 / totalFrames);
              return Math.min(newProgress, 100);
            })
            resolve()
          }
          img.onerror = () => {
            // Resolve even on error
            setLoadingProgress(prev => {
              const newProgress = prev + (100 / totalFrames);
              return Math.min(newProgress, 100);
            })
            resolve()
          }
        })
      })

      // Minimum loader time to prevent flash
      const minTimePromise = new Promise((resolve) => setTimeout(resolve, 2000))

      await Promise.all([Promise.all(imagePromises), minTimePromise])

      setIsLoaded(true)

      // Initial render after load
      setTimeout(() => {
        if (canvasRef.current) {
          canvasRef.current.width = window.innerWidth
          canvasRef.current.height = window.innerHeight
          renderFrame(0)
        }
      }, 0)
    }

    preloadImages()
  }, [])

  if (!isLoaded) {
    return (
      <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black text-white">
        <div className="mb-6">
          <img
            src="/Logo-light.png"
            alt="BunnyStore Logo"
            className="w-48 h-auto object-contain"
          />
        </div>
        <div className="mb-6">
          <p className="text-2xl font-bold tracking-wider">BUNNYSTORE</p>
        </div>
        <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-white transition-all duration-100 ease-out"
            style={{ width: `${loadingProgress}%` }}
          />
        </div>
        <p className="mt-2 text-sm text-gray-400">{Math.round(loadingProgress)}%</p>
      </div>
    )
  }

  return (
    <section
      ref={containerRef}
      className="relative w-full"
      style={{ height: `${totalFrames * 50}px` }}
    >
      {/* Sticky hero image */}
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-black">
        <canvas
          ref={canvasRef}
          className="w-full h-full block"
        />

        {/* Overlay text */}
        <div
          className="absolute inset-0 flex flex-col justify-center items-center p-6 text-white text-center"
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
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Bunny Fitness
              </span>{" "}
            </h1>
          </div>

          <p className="mt-2 text-lg max-w-2xl">
            Premium supplements, personalized meal plans, and expert consulting to help you achieve your wellness goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link href="/shop">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent">
                Shop Now
              </Button>
            </Link>
            <Link href="/consulting">
              <Button size="lg" variant="outline" className="border-primary/30 text-black">
                Get Consulting
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white transition-opacity duration-500 pointer-events-none ${showScrollIndicator ? 'opacity-100' : 'opacity-0'}`}
        >
          <span className="text-sm font-medium mb-2 uppercase tracking-widest text-primary">Scroll Down</span>
          <ChevronDown className="w-8 h-8 animate-bounce text-primary" />
        </div>
      </div>
    </section>
  )
}
