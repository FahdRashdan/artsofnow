"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const featuredProjects = [
  {
    id: 1,
    title: "Perfume photo shoot",
    category: "Branding",
    image: "/port/branding/ChatGPT Image Jul 13, 2025, 04_06_38 AM.png",
    description: "A featured Branding project.",
  },
  {
    id: 2,
    title: "Bag photoshoot",
    category: "Branding",
    image: "/port/branding/ChatGPT Image Jul 18, 2025 at 03_59_50 PM.png",
    description: "A featured Branding project.",
  },
  {
    id: 3,
    title: "Desert Still Life with Woman",
    category: "Photography",
    image: "/port/photography/Desert Still Life with Woman.png",
    description: "A featured Photography project.",
  },
]

export function FeaturedWork() {
  const sectionRef = useRef<HTMLElement>(null)
  const [modalImage, setModalImage] = useState<null | { src: string; title: string }>(null)

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

  const closeModal = () => setModalImage(null)

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Featured Work</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover some of our latest projects that showcase our creative expertise and attention to detail.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <button
              key={project.id}
              type="button"
              onClick={() => setModalImage({ src: project.image, title: project.title })}
              className="group fade-in-up focus:outline-none"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    unoptimized
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="text-center fade-in-up">
          <Button asChild size="lg" variant="outline">
            <Link href="/portfolio">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
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
              <ArrowRight className="w-6 h-6 rotate-180" />
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
