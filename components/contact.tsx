"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useForm, ValidationError } from '@formspree/react';

export function Contact() {
  const [state, handleSubmit] = useForm("xwpbwnzd");
  if (state.succeeded) {
      return <p className="text-center text-2xl md:text-xl sm:text-lg font-bold mx-2 text-[#00FFFF]">Message sent successfully, we will contact you shortly..</p>;
  }

  return (
    <section id="contact" className="py-20 relative w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/2 w-64 h-64 bg-[#f0f]/10 rounded-full filter blur-[80px] transform -translate-x-1/2"></div>
      </div>

      <div className="w-full max-w-none px-4 sm:px-6 lg:px-8 z-10 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ff] to-[#f0f]">Get In Touch</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto px-4">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try
              my best to get back to you!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 px-4">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <div className="space-y-6">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#0ff]/10 p-3 rounded-lg flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#0ff]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-lg font-medium">Email</h4>
                    <a 
                      href="mailto:sonu88ggn@gmail.com" 
                      className="text-gray-400 hover:text-[#0ff] transition-colors break-all"
                    >
                      sonu88ggn@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#f0f]/10 p-3 rounded-lg flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#f0f]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-lg font-medium">Phone</h4>
                    <a 
                      href="tel:+919654439957" 
                      className="text-gray-400 hover:text-[#f0f] transition-colors"
                    >
                      +91 9654439957
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#0ff]/10 p-3 rounded-lg flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#0ff]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-lg font-medium">Location</h4>
                    <p className="text-gray-400">Gurugram, Haryana</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <form onSubmit={handleSubmit} className="space-y-6 w-full">
                <div className="w-full">
                  <Input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full bg-black/50 border-gray-800 focus:border-[#0ff] focus:ring-[#0ff]/20"
                  />
                </div>
                <div className="w-full">
                  <Input
                    id="email"
                    type="email" 
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full bg-black/50 border-gray-800 focus:border-[#0ff] focus:ring-[#0ff]/20"
                  />
                </div>
                
                <div className="w-full">
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your Message"
                    required
                    className="w-full bg-black/50 border-gray-800 focus:border-[#0ff] focus:ring-[#0ff]/20 min-h-[150px] resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={state.submitting}
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