"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const images = [
  {
    src: "/Slide.png",
    alt: "Professional Cleaning Service",
    caption: "Professional Cleaning Services",
  },
  {
    src: "/Slide1.png",
    alt: "End of Tenancy Cleaning",
    caption: "End of Tenancy Cleaning",
  },
  {
    src: "/Slide2.png",
    alt: "Commercial Cleaning",
    caption: "Commercial Cleaning Solutions",
  },
  {
    src: "/Slide3.png",
    alt: "Deep Cleaning",
    caption: "Deep Cleaning Services",
  },
  {
    src: "/Slide4.png",
    alt: "Carpet Cleaning",
    caption: "Professional Carpet Cleaning",
  },
]

export default function ServiceSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="mt-8">
      <h3 className="mb-6 text-center text-2xl font-bold text-primary">Our Work Gallery</h3>
      <div className="slideshow rounded-lg overflow-hidden shadow-lg">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slideshow-slide ${index === currentSlide ? "active" : ""}`}
            style={{
              backgroundImage: `url(${image.src || "/placeholder.svg?height=400&width=600"})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/30 flex items-end">
              <div className="w-full p-6 text-white">
                <h4 className="text-xl font-bold">{image.caption}</h4>
              </div>
            </div>
          </div>
        ))}

        <div className="slideshow-arrow prev" onClick={goToPrevSlide}>
          <ChevronLeft className="h-6 w-6" />
        </div>
        <div className="slideshow-arrow next" onClick={goToNextSlide}>
          <ChevronRight className="h-6 w-6" />
        </div>

        <div className="slideshow-controls">
          {images.map((_, index) => (
            <div
              key={index}
              className={`slideshow-dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}
