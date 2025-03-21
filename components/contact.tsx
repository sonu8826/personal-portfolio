"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formData)
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
    // Show success message
    alert("Message sent successfully!")
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/2 w-64 h-64 bg-[#f0f]/10 rounded-full filter blur-[80px]"></div>
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ff] to-[#f0f]">Get In Touch</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try
              my best to get back to you!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#0ff]/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-[#0ff]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Email</h4>
                    <a href="mailto:hello@johndoe.com" className="text-gray-400 hover:text-[#0ff] transition-colors">
                      hello@johndoe.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#f0f]/10 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-[#f0f]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Phone</h4>
                    <a href="tel:+11234567890" className="text-gray-400 hover:text-[#f0f] transition-colors">
                      +1 (123) 456-7890
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#0ff]/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-[#0ff]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Location</h4>
                    <p className="text-gray-400">San Francisco, California</p>
                  </div>
                </div>

                <div className="pt-6">
                  <h3 className="text-xl font-bold mb-4">Follow Me</h3>
                  <div className="flex space-x-4">
                    {["github", "twitter", "linkedin", "instagram"].map((social) => (
                      <a
                        key={social}
                        href="#"
                        className="bg-gray-800 p-3 rounded-full hover:bg-[#0ff]/20 hover:text-[#0ff] transition-all duration-300"
                        aria-label={`Follow on ${social}`}
                      >
                        <span className="capitalize">{social.charAt(0)}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-black/50 border-gray-800 focus:border-[#0ff] focus:ring-[#0ff]/20"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-black/50 border-gray-800 focus:border-[#0ff] focus:ring-[#0ff]/20"
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-black/50 border-gray-800 focus:border-[#0ff] focus:ring-[#0ff]/20"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-black/50 border-gray-800 focus:border-[#0ff] focus:ring-[#0ff]/20 min-h-[150px]"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#0ff] to-[#f0f] text-black font-bold hover:opacity-90 shadow-[0_0_15px_rgba(0,255,255,0.5)]"
                >
                  Send Message <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

