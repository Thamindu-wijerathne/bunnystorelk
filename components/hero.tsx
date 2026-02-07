"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import React, { useEffect, useRef, useState } from "react"
import { ChevronDown } from "lucide-react"
import WhatsAppButton from "@/components/whatsapp-button"

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const targetFrameRef = useRef<number>(0);
  const currentFrameRef = useRef<number>(0);
  const rafRef = useRef<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [textOpacity, setTextOpacity] = useState(0);
  const [textTranslate, setTextTranslate] = useState(50);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  const totalFrames = 89;

  // Preload Images
  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];

    const preloadImages = () => {
      for (let i = 1; i <= totalFrames; i++) {
        const img = new Image();
        const paddedNum = i.toString().padStart(3, "0");
        img.src = `/homepagevideo/ezgif-frame-${paddedNum}.jpg`;
        
        img.onload = () => {
          loadedCount++;
          setLoadingProgress(Math.floor((loadedCount / totalFrames) * 100));
          if (loadedCount === totalFrames) {
            setIsLoaded(true);
          }
        };

        img.onerror = () => {
          loadedCount++;
          console.error(`Failed to load frame ${paddedNum}`);
          if (loadedCount === totalFrames) {
            setIsLoaded(true);
          }
        };

        images[i - 1] = img;
      }
      imagesRef.current = images;
    };

    preloadImages();
    
    // Safety timeout
    const timeout = setTimeout(() => {
      if (!isLoaded && loadedCount > 10) { 
        setIsLoaded(true);
      }
    }, 10000);

    return () => clearTimeout(timeout);
  }, []);

  // Animation Loop
  useEffect(() => {
    if (!isLoaded) return;

    const render = () => {
      const canvas = canvasRef.current;
      const context = canvas?.getContext("2d");
      if (!canvas || !context) {
        rafRef.current = requestAnimationFrame(render);
        return;
      }

      // Interpolate frame index for smoothness
      const diff = targetFrameRef.current - currentFrameRef.current;
      if (Math.abs(diff) > 0.001) {
        currentFrameRef.current += diff * 0.15; // Smooth damping
      }

      const frameIndex = Math.min(
        Math.max(Math.round(currentFrameRef.current), 0),
        totalFrames - 1
      );

      const img = imagesRef.current[frameIndex];

      if (img && img.complete) {
        // Handle aspect ratio (cover)
        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;
        const imgWidth = img.width;
        const imgHeight = img.height;

        const ratio = Math.max(canvasWidth / imgWidth, canvasHeight / imgHeight);
        const newWidth = imgWidth * ratio;
        const newHeight = imgHeight * ratio;
        const x = (canvasWidth - newWidth) / 2;
        const y = (canvasHeight - newHeight) / 2;

        context.clearRect(0, 0, canvasWidth, canvasHeight);
        context.drawImage(img, x, y, newWidth, newHeight);
      }

      rafRef.current = requestAnimationFrame(render);
    };

    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };

    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const total = rect.height - viewportH;
      const scrolled = Math.max(0, Math.min(-rect.top, total));
      const progress = scrolled / total;

      targetFrameRef.current = progress * (totalFrames - 1);

      // UI animations
      setTextOpacity(Math.min(progress * 2.5, 1));
      setTextTranslate(50 - progress * 100);
      setShowScrollIndicator(progress < 0.05);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    rafRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isLoaded]);

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

  return (
    <>
      {/* Loading Overlay */}
      {!isLoaded && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black text-white px-4">
          <div className="text-center animate-in fade-in duration-700">
            <img
              src="/Logo-light.png"
              alt="BunnyStore Logo"
              className="w-48 h-auto object-contain mb-8 mx-auto"
            />
            <p className="text-2xl font-bold tracking-widest mb-6 uppercase">BUNNYSTORE</p>
            
            <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden mb-4 mx-auto">
              <div 
                className="h-full bg-white transition-all duration-300 ease-out"
                style={{ width: `${loadingProgress}%` }}
              />
            </div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/40">
              Loading Experience • {loadingProgress}%
            </p>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section
        ref={sectionRef}
        className="relative bg-black"
        style={{ height: "300vh" }}
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <canvas
            ref={canvasRef}
            className="w-full h-full object-cover"
          />
          
          {/* Overlay Content */}
          <div 
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pointer-events-none"
            style={{
              opacity: textOpacity,
              transform: `translateY(${textTranslate}px)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
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
              <Button size="lg" variant="outline" className="border-primary/30 text-black bg-gradient-to-r from-muted-foreground to-foreground">
                Get Consulting
              </Button>
            </Link>
          </div>
          </div>

          {/* Scroll Indicator */}
          {/* {showScrollIndicator && (
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/30 animate-bounce">
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold mb-3">Scroll to explore</p>
              <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
            </div>
          )} */}
        </div>
        <WhatsAppButton />
      </section>
    </>
  )
}
