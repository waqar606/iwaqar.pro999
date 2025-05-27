"use client"

import { motion } from "framer-motion"
import { ArrowUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0"
          >
            <div className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
              <span className="text-emerald-600">Waqar-</span>Ahmed
            </div>
            <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-md">
              Creating beautiful digital experiences with clean code and creative design.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-end"
          >
            <button
              onClick={scrollToTop}
              className="mb-4 p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-full text-emerald-600 dark:text-emerald-500 hover:bg-emerald-200 dark:hover:bg-emerald-900/50 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
            <p className="text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Portfolio. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
