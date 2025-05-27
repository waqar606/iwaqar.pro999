"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import AnimatedSection from "./animated-section"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Timeline from "./timeline"

const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    period: "2021 - Present",
    description: "Leading frontend development for enterprise applications using React and Next.js.",
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    period: "2018 - 2021",
    description: "Developed and maintained full-stack web applications using MERN stack.",
  },
  {
    title: "UI/UX Designer",
    company: "Creative Agency",
    period: "2016 - 2018",
    description: "Designed user interfaces and experiences for web and mobile applications.",
  },
]

export default function About() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])
  const imageRotate = useTransform(scrollYProgress, [0, 0.5], [-5, 0])

  return (
    <section id="about" ref={ref} className="py-20 bg-white dark:bg-gray-900 overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-50 to-transparent dark:from-gray-800 dark:to-transparent"></div>
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-teal-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know me better and learn about my journey, skills, and passion for creating amazing digital
            experiences.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <AnimatedSection delay={0.3}>
            <motion.div style={{ y, scale: imageScale, rotate: imageRotate }} className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg blur opacity-30 transform -rotate-6"></div>
              <div className="aspect-[4/5] bg-gradient-to-br from-emerald-100 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-lg relative transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="/placeholder.svg?height=600&width=480"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/20 to-transparent rounded-lg"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-600/10 rounded-full"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-teal-600/10 rounded-full"></div>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection delay={0.5} className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Creative Developer with a Passion for Design
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              I'm a passionate developer with over 5 years of experience creating beautiful, functional websites and
              applications. My journey in tech began with a curiosity about how things work on the web, which led me to
              pursue a career in development.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              I specialize in front-end development with React, but I'm also comfortable working with back-end
              technologies. I believe in writing clean, maintainable code and creating intuitive user experiences.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Name:</h4>
                <p className="text-gray-700 dark:text-gray-300">John Doe</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Email:</h4>
                <p className="text-gray-700 dark:text-gray-300">hello@example.com</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Location:</h4>
                <p className="text-gray-700 dark:text-gray-300">San Francisco, CA</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Availability:</h4>
                <p className="text-gray-700 dark:text-gray-300">Open to opportunities</p>
              </div>
            </div>
            <Button
              className="mt-6 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              size="lg"
            >
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </Button>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.6}>
          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-sm border border-gray-100 dark:border-gray-700 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl"></div>
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 mb-8 text-center">
              My Journey
            </h3>
            <Timeline experiences={experiences} />
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
