"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-8 border-t border-gray-800 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute -bottom-10 left-1/4 w-64 h-64 bg-[#0ff]/5 rounded-full filter blur-[80px]"></div>
          <div className="absolute -bottom-10 right-1/4 w-64 h-64 bg-[#f0f]/5 rounded-full filter blur-[80px]"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 flex flex-col items-center"
        >
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0ff] to-[#f0f]">
              John Doe
            </h3>
            <p className="text-gray-400 mt-1">Full Stack Developer</p>
          </div>

          <div className="flex space-x-6 mb-6">
            {["GitHub", "LinkedIn", "Twitter", "Instagram", "Dribbble"].map((social) => (
              <a key={social} href="#" className="text-gray-400 hover:text-[#0ff] transition-colors duration-300">
                {social}
              </a>
            ))}
          </div>

          <div className="text-gray-500 text-sm flex items-center">
            
            <p>© {new Date().getFullYear()} John Doe. All rights reserved.</p>
            <span className="mx-2">|</span>
            <p className="flex items-center">
              Made with <Heart className="w-4 h-4 mx-1 text-[#f0f]" /> using Next.js & Tailwind CSS
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

