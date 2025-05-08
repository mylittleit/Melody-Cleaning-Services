"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

// Define a guaranteed placeholder image
const PLACEHOLDER = "/placeholder.svg"

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

  // Sample images with guaranteed placeholder
  const sampleImages = Array(10).fill({
    src: PLACEHOLDER,
    alt: "Cleaning Service Image",
  })

  return (
    <div className="mt-12 mb-10 overflow-hidden">
      <div
        ref={sliderRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {/* Use sample images with guaranteed src */}
        {sampleImages.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-80 h-60 relative rounded-lg overflow-hidden">
            <Image src={PLACEHOLDER || "/placeholder.svg"} alt="Cleaning Service" fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  )
}
