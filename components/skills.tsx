"use client"

import { motion } from "framer-motion"
import { Code, Database, Layout, Server, Smartphone, GitBranch, Terminal } from "lucide-react"

export function Skills() {
  const skills = [
    {
      category: "Frontend",
      icon: <Layout className="w-10 h-10 text-[#0ff]" />,
      items: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Vue.js",
        "Tailwind CSS",
        "Framer Motion",
      ],
    },
    {
      category: "Backend",
      icon: <Server className="w-10 h-10 text-[#f0f]" />,
      items: ["Node.js", "Express", "Python", "Django", "PHP", "Laravel", "GraphQL", "REST API"],
    },
    {
      category: "Database",
      icon: <Database className="w-10 h-10 text-[#0ff]" />,
      items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis", "Prisma", "Supabase"],
    },
    {
      category: "Mobile",
      icon: <Smartphone className="w-10 h-10 text-[#f0f]" />,
      items: ["React Native", "Flutter", "Ionic", "Progressive Web Apps"],
    },
    {
      category: "DevOps",
      icon: <GitBranch className="w-10 h-10 text-[#0ff]" />,
      items: ["Git", "GitHub", "CI/CD", "Docker", "AWS", "Vercel", "Netlify"],
    },
    {
      category: "Tools",
      icon: <Terminal className="w-10 h-10 text-[#f0f]" />,
      items: ["VS Code", "Figma", "Adobe XD", "Postman", "Jest", "Cypress"],
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-[#0ff]/10 rounded-full filter blur-[80px]"></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ff] to-[#f0f]">My Skills</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              I've worked with a variety of technologies in the web development world. Here's a comprehensive list of my
              technical skills.
            </p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                variants={item}
                className="bg-gradient-to-r from-black to-gray-900 border border-gray-800 rounded-lg p-6 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  {skill.icon}
                  <h3 className="text-xl font-bold ml-3">{skill.category}</h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="text-gray-400 flex items-center">
                      <span className="text-xs mr-2 text-[#0ff]">▹</span> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center justify-center p-1 rounded-full bg-gradient-to-r from-[#0ff] to-[#f0f]">
              <div className="bg-black px-6 py-3 rounded-full">
                <p className="text-white">
                  <Code className="inline-block mr-2 text-[#0ff]" size={16} />
                  <span>Always learning new technologies and improving my skills</span>
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

