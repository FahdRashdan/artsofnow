"use client"

import { useEffect, useRef } from "react"
import { Camera, Video, Palette, Box, Sparkles, Monitor } from "lucide-react"

const services = [
  {
    icon: Sparkles,
    title: "Image Generation",
    description: "AI-powered visual content creation",
  },
  {
    icon: Video,
    title: "Short Videos",
    description: "Engaging video content for social media",
  },
  {
    icon: Camera,
    title: "Photography",
    description: "Professional photoshoots and product photography",
  },
  {
    icon: Monitor,
    title: "Frontend Design",
    description: "Modern web design and user interfaces",
  },
  {
    icon: Palette,
    title: "Logo Design",
    description: "Brand identity and logo creation",
  },
  {
    icon: Box,
    title: "3D Animation",
    description: "Dynamic 3D objects and animations",
  },
]

export function ServicesPreview() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".fade-in-up")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">What We Do</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We specialize in creating visual content that tells your story and connects with your audience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="group p-8 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-lg fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6">
                  <Icon className="h-12 w-12 text-gray-600 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
