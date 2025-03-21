"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with product management, cart functionality, payment processing, and order tracking.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Social Media Dashboard",
      description:
        "A comprehensive dashboard for social media management with analytics, scheduling, and content management.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Chart.js", "Firebase"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, team assignments, and progress tracking.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Vue.js", "Express", "PostgreSQL", "Socket.io", "JWT"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Weather Forecast App",
      description:
        "A weather application that provides current conditions and forecasts with interactive maps and location-based services.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "OpenWeather API", "Mapbox", "Styled Components"],
      liveLink: "#",
      githubLink: "#",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-[#f0f]/10 rounded-full filter blur-[80px]"></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ff] to-[#f0f]">
                Featured Projects
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Here are some of my recent projects. Each project is a unique piece of development.
            </p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={item}
                className="bg-black border border-gray-800 rounded-lg overflow-hidden group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-4">
                      <a
                        href={project.githubLink}
                        className="bg-black/80 p-3 rounded-full hover:bg-[#0ff]/20 transition-colors duration-300"
                        aria-label="View GitHub repository"
                      >
                        <Github className="w-6 h-6 text-[#0ff]" />
                      </a>
                      <a
                        href={project.liveLink}
                        className="bg-black/80 p-3 rounded-full hover:bg-[#f0f]/20 transition-colors duration-300"
                        aria-label="View live project"
                      >
                        <ExternalLink className="w-6 h-6 text-[#f0f]" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#0ff] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Button
              variant="outline"
              className="border-[#0ff] text-[#0ff] hover:bg-[#0ff]/10 shadow-[0_0_10px_rgba(0,255,255,0.3)]"
            >
              View All Projects <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

