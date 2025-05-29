"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import AnimatedSection from "./animated-section"
import { Button } from "@/components/ui/button"
import { useTiltEffect } from "@/hooks/use-tilt-effect"
// "/images/Portfolio.png"
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern front-end e-commerce platform with a beautifully designed, fully responsive UI for a seamless shopping experience. It features dynamic product management and smooth cart functionality in an intuitive, visually engaging environment.",
    image: "/projects/Ecom.png",
    category: ["Web App", "Frontend"],
    technologies: ["React", "Tailwind CSS"],
    demoLink: "https://shopify-x-web.netlify.app/",
    githubLink: "https://github.com/waqar606/Shop-X",
  },
  {
    id: 2,
    title: "Pizza Shop",
    description: "A responsive pizza shop website built with React JS, offering an engaging menu, easy ordering, and a smooth user experience.",
    image: "/projects/pizza.png",
    category: ["Web App", "Frontend"],
    technologies: ["React", "Tailwind CSS"],
    demoLink: "https://pizzalo.vercel.app/",
    githubLink: "https://github.com/waqar606/MyPizza",
  },
  {
    id: 3,
    title: "YTube",
    description:
      "A modern YouTube clone featuring a sleek, fully responsive UI that delivers a smooth video streaming experience. Users can play and pause videos, explore related content, and search seamlessly in an intuitive, visually engaging environment.",
    image: "/projects/Ytube.png",
    category: ["Web App", "Frontend"],
    technologies: ["React", "NodeJs","Express","MongoDb", "Tailwind CSS"],
    demoLink: "https://youtube-clone-amber-three.vercel.app/",
    githubLink: "https://github.com/waqar606/MyTube",
  },
  {
    id: 4,
    title: "Job Portal",
    description:
      "A MERN stack job portal web app designed for seamless interaction between students and recruiters. Students can apply for jobs, track application status, and explore opportunities, while recruiters can create companies, post job listings, and manage applications with approval workflows.",
    image: "/projects/Job_Portal.png",
    category: ["Web App", "Mern Stack"],
    technologies: ["React", "NodeJs","Express","MongoDb","Deepseek API","Tailwind CSS","Shadcn"],
    demoLink: "https://my-job-site-x1or.vercel.app/",
    githubLink: "https://github.com/waqar606/jobwebsite-mern",
  },
  {
    id: 5,
    title: "Course Heaven",
    description:
      "A course-buying platform built with the MERN stack, featuring user and admin roles for streamlined management. Admins can create, update, and delete courses, while students can browse, purchase courses, and make secure payments through integrated Stripe functionality.",
    image: "/projects/coursera.png",
    category: ["Web App", "Mern Stack"],
    technologies:["React", "NodeJs","Express","MongoDb","Stripe", "Tailwind CSS"],
    demoLink: "https://course-app-vj3i.vercel.app/",
    githubLink: "https://github.com/waqar606/Course_App",
  },
   {
    id: 6,
    title: "Dementia Testing",
    description:
      "A full-stack Django and React JS web app for dementia testing, where patients can upload their MRI scans for analysis. An integrated AI model processes the images to provide diagnostic results, which doctors can access along with patient details for further evaluation and care.",
    image: "/projects/fyp.png",
    category: ["Web App", "Full Stack"],
    technologies: ["HTML","CSS","JS","React", "Django", "MySql",],
    demoLink: "#",
    githubLink: "https://github.com/waqar606/FYP_Web",
  },
  
]

// const categories = ["All", "Web App", "Mobile App", "Frontend", "Full Stack"]

const categories = ["All", "Web App", "Frontend", "Mern Stack"]

export default function Projects() {
  const [filter, setFilter] = useState("All")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 })

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category.includes(filter))

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-white dark:bg-gray-900 overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-50 to-transparent dark:from-gray-800 dark:to-transparent"></div>
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-teal-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 mb-4">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Check out some of my recent work. These projects showcase my skills and expertise in different areas of
            development.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3} className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                className={
                  filter === category
                    ? "bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-md"
                    : "border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:border-emerald-500 dark:text-emerald-500 dark:hover:bg-emerald-950/30"
                }
                onClick={() => setFilter(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </AnimatedSection>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        <AnimatedSection delay={0.5} className="text-center mt-16">
          <Button
            size="lg"
            className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            asChild
          >
            <a href="#contact">Let's Work Together</a>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  )
}

interface ProjectCardProps {
  project: (typeof projects)[0]
  index: number
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const { handleMouseMove, handleMouseLeave, transform } = useTiltEffect()
  const [isHovered, setIsHovered] = useState(false)

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        delay: 0.1 * index,
      },
    },
  }

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform }}
      className="h-full"
    >
      <div
        className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 h-full border border-gray-100 dark:border-gray-700 flex flex-col group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden">
          <div className="aspect-video">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-emerald-600/90 to-teal-600/90 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex space-x-4">
              <motion.a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-emerald-600 p-3 rounded-full hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={20} />
                <span className="sr-only">Live Demo</span>
              </motion.a>
              <motion.a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-emerald-600 p-3 rounded-full hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={20} />
                <span className="sr-only">GitHub Repository</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-500 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
