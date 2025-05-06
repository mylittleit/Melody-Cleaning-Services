"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

// Define images with guaranteed placeholder sources
const images = [
  {
    src: "/Restaurant1.png",
    alt: "Restaurant Cleaning",
  },
  {
    src: "/Carpet1.png",
    alt: "Carpet Cleaning",
  },
  {
    src: "/Event6.png",
    alt: "Event Cleaning",
  },
  {
    src: "/Slide6.png",
    alt: "Domestic Cleaning",
  },
  {
    src: "/Carpet2.png",
    alt: "Domestic Cleaning",
  },
  {
    src: "/Event5.png",
    alt: "Domestic Cleaning",
  },
  {
    src: "/Restaurant.png",
    alt: "Domestic Cleaning",
  },
  {
    src: "/Slide9.png",
    alt: "Upholstery Cleaning",
  },
  {
    src: "/Slide.png",
    alt: "Bathroom Cleaning",
  },
  {
    src: "/Slide4.png",
    alt: "General Cleaning",
  },
]

export default function ServiceSlider() {
  const sliderRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 },
    )

    if (sliderRef.current) {
      observer.observe(sliderRef.current)
    }

    return () => {
      if (sliderRef.current) {
        observer.unobserve(sliderRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible || !sliderRef.current) return

    const slider = sliderRef.current
    let animationId: number
    let startTime: number | null = null
    const duration = 30000 // 30 seconds for a complete cycle

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = (elapsed % duration) / duration

      if (slider) {
        const totalWidth = slider.scrollWidth - slider.clientWidth
        slider.scrollLeft = progress * totalWidth
      }

      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [isVisible])

  return (
    <div className="mt-12 mb-10 overflow-hidden">
      <div
        ref={sliderRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {/* Duplicate images for seamless looping */}
        {[...images, ...images].map((image, index) => (
          <div key={index} className="flex-shrink-0 w-80 h-60 relative rounded-lg overflow-hidden">
            <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  )
}
