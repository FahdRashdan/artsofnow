"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { portfolioData } from "@/lib/portfolio-data"
import { X } from "lucide-react"

const categories = ["All", "Branding", "Photography", "Web Design", "3D"]

export function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [filteredProjects, setFilteredProjects] = useState(portfolioData)
  const gridRef = useRef<HTMLDivElement>(null)
  const [modalImage, setModalImage] = useState<null | { src: string; title: string }>(null)

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredProjects(portfolioData)
    } else {
      setFilteredProjects(portfolioData.filter((project) => project.category === activeCategory))
    }
  }, [activeCategory])

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

    const elements = gridRef.current?.querySelectorAll(".fade-in-up")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [filteredProjects])

  // Modal close handler
  const closeModal = () => setModalImage(null)

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="px-6 py-2"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <button
              key={project.id}
              type="button"
              onClick={() => setModalImage({ src: project.image, title: project.title })}
              className="block group cursor-pointer fade-in-up focus:outline-none"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-sm opacity-90">{project.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">{project.category}</div>
                  <h3 className="text-lg font-bold">{project.title}</h3>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
      {/* Modal Overlay */}
      {modalImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl w-full flex flex-col items-center"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-white bg-black/60 rounded-full p-2 hover:bg-black/80 focus:outline-none"
              onClick={closeModal}
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={modalImage.src}
              alt={modalImage.title}
              className="w-auto h-[80vh] max-w-full rounded-xl shadow-lg object-contain bg-black"
            />
            <div className="mt-4 text-white text-lg font-semibold text-center drop-shadow-lg">
              {modalImage.title}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
