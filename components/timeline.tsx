"use client"

import { motion } from "framer-motion"

interface Experience {
  title: string
  company: string
  period: string
  description: string
}

interface TimelineProps {
  experiences: Experience[]
}

export default function Timeline({ experiences }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-emerald-600 to-teal-600"></div>

      {experiences.map((experience, index) => (
        <div key={index} className="mb-12 last:mb-0">
          <div className="flex flex-col md:flex-row items-start md:items-center">
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"}`}
            >
              <div
                className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 relative ${
                  index % 2 === 0 ? "md:mr-6" : "md:ml-6"
                }`}
              >
                {/* Timeline dot */}
                <div
                  className="absolute top-6 w-4 h-4 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 hidden md:block"
                  style={{
                    [index % 2 === 0 ? "right" : "left"]: "-8px",
                  }}
                ></div>

                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{experience.title}</h4>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-emerald-600 dark:text-emerald-500 font-medium">{experience.company}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{experience.period}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400">{experience.description}</p>
              </div>
            </motion.div>

            {/* For mobile view, we need to show the timeline dot */}
            <div className="absolute left-0 top-6 w-4 h-4 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 md:hidden"></div>
          </div>
        </div>
      ))}
    </div>
  )
}
