import Image from "next/image"

const team = [
  {
    name: "Sarah Chen",
    role: "Creative Director",
    image: "/placeholder.svg?height=400&width=400",
    bio: "10+ years in visual design and brand strategy",
  },
  {
    name: "Marcus Rodriguez",
    role: "Lead Developer",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Frontend specialist with a passion for user experience",
  },
  {
    name: "Emma Thompson",
    role: "Photography Director",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Award-winning photographer with commercial expertise",
  },
]

export function TeamSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Meet Our Team</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Our talented team of creatives, designers, and developers work together to bring your vision to life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.name} className="text-center group">
              <div className="relative w-64 h-64 mx-auto mb-6 rounded-full overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">{member.role}</p>
              <p className="text-gray-500 dark:text-gray-500">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
