"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import AnimatedSection from "./animated-section"
import { Code, Figma, Database, Layers, Smartphone, GitBranch } from "lucide-react"

const skills = [
  {
    name: "Frontend Development",
    description: "Building responsive and interactive user interfaces with modern frameworks.",
    icon: Code,
    delay: 0.2,
    proficiency: 65,
  },
  
  {
    name: "Mern Stack Development",
    description: "Bridging frontend and backend to create complete web applications.",
    icon: Layers,
    delay: 0.5,
    proficiency: 50,
  },
  {
    name: "Backend Development",
    description: "Developing robust server-side applications and APIs.",
    icon: Database,
    delay: 0.4,
    proficiency: 50,
  },
  {
    name: "Django Development",
    description: "Developing robust server-side applications and APIs.",
    icon: Database,
    delay: 0.4,
    proficiency: 40,
  },
 
  {
    name: "Version Control",
    description: "Managing code changes and collaborating with Git and GitHub.",
    icon: GitBranch,
    delay: 0.7,
    proficiency: 60,
  },
]

const technologies = [
  "React",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "MongoDB",
  "Django",
  "Ant Design",
  "Material UI",
  "Redux",
  "Git",
  "Figma",
  "Responsive Design",
 
]

export default function Skills() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <section id="skills" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800 overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent dark:from-gray-900 dark:to-transparent"></div>
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-teal-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 mb-4">
            My Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I've developed a diverse set of skills throughout my career. Here's what I bring to the table.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skills.map((skill, index) => (
            <AnimatedSection key={index} delay={skill.delay}>
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 h-full border border-gray-100 dark:border-gray-700 group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <skill.icon className="w-7 h-7 text-emerald-600 dark:text-emerald-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-500 transition-colors">
                  {skill.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{skill.description}</p>

                {/* Skill progress bar */}
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-1">
                  <motion.div
                    className="h-2.5 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.proficiency}%` }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true }}
                  ></motion.div>
                </div>
                <div className="text-right text-sm text-gray-500 dark:text-gray-400">{skill.proficiency}%</div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <motion.div
            style={{ y, opacity }}
            className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-sm border border-gray-100 dark:border-gray-700 relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl"></div>
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 mb-6 text-center relative z-10">
              Technologies I Work With
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-3 relative z-10"
            >
              {technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  variants={itemVariants}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium hover:bg-emerald-100 hover:text-emerald-800 dark:hover:bg-emerald-900/30 dark:hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  )
}
