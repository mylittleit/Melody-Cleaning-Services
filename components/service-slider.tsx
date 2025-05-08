"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

// Define images with guaranteed sources
const images = [
  {
    src: "/Slide.png",
    alt: "Professional Cleaning Service",
  },
  {
    src: "/Slide1.png",
    alt: "End of Tenancy Cleaning",
  },
  {
    src: "/Slide2.png",
    alt: "Commercial Cleaning",
  },
  {
    src: "/Slide4.png",
    alt: "Deep Cleaning",
  },
  {
    src: "/Slide5.png",
    alt: "Carpet Cleaning",
  },
  {
    src: "/Slide6.png",
    alt: "Upholstery Cleaning",
  },
  {
    src: "/Slide8.png",
    alt: "Event Cleaning",
  },
  {
    src: "/Slide9.png",
    alt: "Office Cleaning",
  },
  {
    src: "/Slide10.png",
    alt: "Residential Cleaning",
  },
  {
    src: "/Carpet2.png",
    alt: "Carpet Cleaning Service",
  },
  {
    src: "/Carpet3.png",
    alt: "Professional Carpet Cleaning",
  },
  {
    src: "/Event4.png",
    alt: "Event Cleaning Service",
  },
  {
    src: "/Event5.png",
    alt: "Pre-Event Cleaning",
  },
  {
    src: "/Event6.png",
    alt: "Post-Event Cleaning",
  },
  {
    src: "/Restaurant1.png",
    alt: "Restaurant Cleaning",
  },
  {
    src: "/Upholstery.png",
    alt: "Upholstery Cleaning",
  },
  {
    src: "/IMG-20250428-WA0013.jpg",
    alt: "Professional Cleaning",
  },
]

// Filter out any images with empty src
const validImages = images.filter((img) => img.src && img.src.trim() !== "")

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

  // If no valid images, don't render the component
  if (validImages.length === 0) {
    return null
  }

  return (
    <div className="mt-12 mb-10 overflow-hidden">
      <div
        ref={sliderRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {/* Duplicate images for seamless looping */}
        {[...validImages, ...validImages].map((image, index) => (
          <div key={index} className="flex-shrink-0 w-80 h-60 relative rounded-lg overflow-hidden">
            <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  )
}
