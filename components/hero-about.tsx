"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Download, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import ParticleBackground from "./particle-background"

// Simple AnimatedText component since we don't have access to the original
const AnimatedText = ({ text, className }: { text: string; className: string }) => {
  return (
    <motion.h1
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, staggerChildren: 0.1 }}
    >
      {text}
    </motion.h1>
  )
}

export default function HeroAbout() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 50])
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.05])

  const handleDownload = () => {
    // Create a link element
    const link = document.createElement("a")
    // Set the href to the path of your resume in the public folder
    link.href = "/Waqar-Ahmed_Resume.pdf"
    // Set the download attribute with the desired filename
    link.download = "Waqar-Ahmed_Resume.pdf"
    // Append to body
    document.body.appendChild(link)
    // Trigger the click
    link.click()
    // Clean up
    document.body.removeChild(link)
  }

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center py-20 px-6 overflow-hidden"
    >
      {/* Particle Background */}
      <ParticleBackground />

      <div className="container mx-auto max-w-6xl mt-10 z-10 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo Section */}
          <motion.div
            style={{ scale: imageScale }}
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl blur opacity-30 transform -rotate-6"></div>
              <div className="aspect-[3/4] bg-gradient-to-br from-emerald-900/30 to-teal-900/30 relative transform rotate-3 hover:rotate-0 transition-transform duration-500 overflow-hidden">
                <img
                  src="/images/Portfolio.png"
                  alt="Profile"
                  className="w-full h-[60] object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/20 to-transparent rounded-xl"></div>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="order-1 md:order-2 text-center md:text-left"
            style={{ y }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-emerald-900/30 text-emerald-400 text-sm font-medium mb-4">
              Hello, I'm a Mern Stack Developer
            </span>

            <AnimatedText
              text="Waqar Ahmed"
              className="text-4xl md:text-6xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-500"
            />

            <h2 className="text-2xl md:text-3xl font-bold text-gray-200 mb-6">Creative Developer & Designer</h2>

            <p className="text-gray-300 mb-8 max-w-xl mx-auto md:mx-0">
              I craft engaging digital experiences through clean code and thoughtful design. With 1+ years of
              experience, I specialize in building modern, responsive websites and full-stack applications using the
              MERN stack, combining functionality with aesthetic appeal.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8 max-w-md mx-auto md:mx-0">
              <div>
                <h4 className="font-medium text-emerald-400 mb-1">Email:</h4>
                <p className="text-gray-300">waqar.tech999@gmail.com</p>
              </div>
              <div>
                <h4 className="font-medium text-emerald-400 mb-1">Location:</h4>
                <p className="text-gray-300">Karachi, Pakistan</p>
              </div>
              <div>
                <h4 className="font-medium text-emerald-400 mb-1">Availability:</h4>
                <p className="text-gray-300">Open to opportunities</p>
              </div>
              <div>
                <h4 className="font-medium text-emerald-400 mb-1">Experience:</h4>
                <p className="text-gray-300">1+ Years</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                asChild
              >
                <a href="#projects">View My Work</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-emerald-500 text-emerald-500 hover:bg-emerald-950/30 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                onClick={handleDownload}
              >
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <a href="#skills" className="flex flex-col items-center text-gray-400 hover:text-emerald-500">
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown className="animate-bounce" />
        </a>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-emerald-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl"></div>
    </section>
  )
}
