import { Camera, Video, Palette, Box, Sparkles, Monitor, Zap, Users } from "lucide-react"

const services = [
  {
    icon: Sparkles,
    title: "AI Image Generation",
    description:
      "Cutting-edge AI tools to create unique, high-quality images tailored to your brand's vision and requirements.",
  },
  {
    icon: Video,
    title: "Short Video Content",
    description:
      "Engaging video content optimized for social media platforms, designed to capture attention and drive engagement.",
  },
  {
    icon: Camera,
    title: "Professional Photography",
    description: "From product photography to corporate headshots, we deliver stunning imagery that tells your story.",
  },
  {
    icon: Monitor,
    title: "Frontend Design",
    description: "Modern, responsive web designs that provide exceptional user experiences across all devices.",
  },
  {
    icon: Palette,
    title: "Logo & Brand Design",
    description:
      "Memorable brand identities that capture your company's essence and resonate with your target audience.",
  },
  {
    icon: Box,
    title: "3D Animation",
    description:
      "Dynamic 3D animations and visualizations that bring products and concepts to life with stunning realism.",
  },
]

const values = [
  {
    icon: Zap,
    title: "Innovation",
    description: "We stay ahead of trends and embrace new technologies to deliver cutting-edge solutions.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with our clients to ensure every project exceeds expectations.",
  },
]

export function ServicesSection() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We offer a comprehensive range of visual content services to help your brand stand out in today's
            competitive landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <Icon className="h-12 w-12 text-gray-600 dark:text-gray-400 mb-6" />
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
              </div>
            )
          })}
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Values</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {values.map((value) => {
            const Icon = value.icon
            return (
              <div key={value.title} className="text-center">
                <Icon className="h-16 w-16 text-gray-600 dark:text-gray-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
