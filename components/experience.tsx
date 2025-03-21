"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"

export function Experience() {
  const [activeTab, setActiveTab] = useState(0)

  const experiences = [
    {
      company: "Tech Innovations Inc.",
      position: "Senior Frontend Developer",
      period: "January 2021 - Present",
      location: "San Francisco, CA",
      description: [
        "Led the development of the company's flagship product using React and TypeScript",
        "Implemented state management with Redux and optimized performance",
        "Collaborated with designers to create responsive and accessible UI components",
        "Mentored junior developers and conducted code reviews",
      ],
    },
    {
      company: "Digital Solutions LLC",
      position: "Full Stack Developer",
      period: "March 2018 - December 2020",
      location: "New York, NY",
      description: [
        "Developed and maintained multiple client websites using React, Node.js, and MongoDB",
        "Created RESTful APIs and implemented authentication systems",
        "Optimized database queries and improved application performance",
        "Participated in agile development processes and sprint planning",
      ],
    },
    {
      company: "WebCraft Studios",
      position: "Frontend Developer",
      period: "June 2016 - February 2018",
      location: "Boston, MA",
      description: [
        "Built responsive web applications using HTML, CSS, and JavaScript",
        "Worked with Vue.js to create interactive user interfaces",
        "Collaborated with backend developers to integrate frontend with APIs",
        "Participated in user testing and implemented feedback",
      ],
    },
    {
      company: "StartUp Ventures",
      position: "Junior Web Developer",
      period: "January 2015 - May 2016",
      location: "Austin, TX",
      description: [
        "Assisted in the development of web applications using jQuery and Bootstrap",
        "Implemented responsive designs and ensured cross-browser compatibility",
        "Fixed bugs and improved existing features",
        "Participated in code reviews and team meetings",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#0ff]/10 rounded-full filter blur-[80px]"></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ff] to-[#f0f]">
                Work Experience
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              My professional journey as a developer. Here's where I've worked and what I've accomplished.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="md:w-1/3"
            >
              <div className="border-l-2 border-gray-800 sticky top-20">
                {experiences.map((exp, index) => (
                  <button
                    key={index}
                    className={`block text-left pl-4 py-3 border-l-2 -ml-0.5 transition-all duration-300 ${
                      activeTab === index
                        ? "border-[#0ff] text-[#0ff]"
                        : "border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-600"
                    }`}
                    onClick={() => setActiveTab(index)}
                  >
                    {exp.company}
                  </button>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="md:w-2/3"
            >
              <div className="bg-black/50 border border-gray-800 rounded-lg p-6 shadow-[0_0_15px_rgba(0,255,255,0.2)]">
                <h3 className="text-xl font-bold text-white mb-1">
                  {experiences[activeTab].position}{" "}
                  <span className="text-[#0ff]">@ {experiences[activeTab].company}</span>
                </h3>
                <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1 text-[#f0f]" />
                    {experiences[activeTab].period}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1 text-[#f0f]" />
                    {experiences[activeTab].location}
                  </div>
                </div>
                <ul className="space-y-2">
                  {experiences[activeTab].description.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#0ff] mr-2 mt-1">▹</span>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

