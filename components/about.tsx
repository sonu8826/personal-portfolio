"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-[#f0f]/10 rounded-full filter blur-[80px]"></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <h2 className="text-3xl font-bold mb-2 flex items-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ff] to-[#f0f]">About Me</span>
                <span className="h-px bg-gradient-to-r from-[#0ff] to-[#f0f] flex-grow ml-4"></span>
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Hello! I'm Inderjeet, a passionate web developer. I enjoy creating things that
                  live on the internet, whether that be websites, applications, or anything in between.
                </p>
                <p>
                My interest in web development began when I first started experimenting with customizing websites. This hands-on experience, especially with editing elements like buttons and layout features, helped me gain a solid understanding of HTML and CSS.
                </p>
                <p>Here are a few technologies I've been working with recently:</p>
                <ul className="grid grid-cols-2 gap-2 text-sm">
                  {["JavaScript (ES6+)", "React", "Next.js", "Node.js", "Tailwind CSS"].map((tech) => (
                    <li key={tech} className="flex items-center">
                      <span className="text-[#0ff] mr-2">▹</span> {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="md:w-1/2 relative group"
            >
              <div className="relative w-64 h-64 mx-auto">
                <div className="absolute inset-0 border-2 border-[#0ff] rounded-md transform translate-x-5 translate-y-5 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#0ff]/20 to-[#f0f]/20 rounded-md opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="relative w-full h-full overflow-hidden rounded-md">
                  <Image
                    src="/placeholder.svg?height=256&width=256"
                    alt="John Doe"
                    width={256}
                    height={256}
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

