import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Logo() {
  const [isHovered, setIsHovered] = useState(false)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  // Track cursor position for the glow effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Animation variants
  const containerVariants = {
    initial: { opacity: 1 },
    hover: { opacity: 1 },
  }

  const bracketVariants = {
    initial: { y: 0, rotate: 0 },
    hover: (i: number) => ({
      y: [-2, 2][i],
      rotate: [-5, 5][i],
      transition: {
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse" as const,
        duration: 0.8,
      },
    }),
  }

  const letterVariants = {
    initial: {
      y: 0,
      textShadow: "0 0 0px rgba(16, 185, 129, 0)",
    },
    hover: {
      y: -3,
      textShadow: "0 0 15px rgba(16, 185, 129, 0.7)",
      transition: {
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse" as const,
        duration: 1.2,
      },
    },
  }

  const glowVariants = {
    initial: {
      opacity: 0,
      scale: 0.8,
    },
    hover: {
      opacity: 0.15,
      scale: 1.2,
      transition: {
        duration: 0.4,
      },
    },
  }

  const codeDotsVariants = {
    initial: { opacity: 0, scale: 0 },
    hover: (i: number) => ({
      opacity: 0.8,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        type: "spring",
        stiffness: 300,
      },
    }),
  }

  return (
    <a
      href="#home"
      className="relative flex items-center gap-1 group py-2 px-3"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ letterSpacing: "0.01em" }}
    >
      {/* Background glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-lg -z-10"
        initial="initial"
        animate={isHovered ? "hover" : "initial"}
        variants={glowVariants}
      />

      {/* Logo container */}
      <motion.div
        className="relative flex items-center"
        initial="initial"
        animate={isHovered ? "hover" : "initial"}
        variants={containerVariants}
      >
        {/* W letter */}
        <motion.span
          className="text-xl font-bold text-emerald-500 drop-shadow-md relative z-10"
          variants={letterVariants}
          whileHover={{ scale: 1.1, color: "#10b981" }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          
        </motion.span>

        {/* Code brackets with animation */}
        <div className="flex items-center relative">
          <motion.span className="text-xl font-bold text-emerald-400" custom={0} variants={bracketVariants}>
            &lt;
          </motion.span>

          {/* Animated dots (like code) */}
          <div className="relative w-2 h-5 mx-0.1 flex justify-center items-center">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-emerald-400 rounded-full"
                style={{ top: `${i * 10 + 5}px` }}
                custom={i}
                variants={codeDotsVariants}
              />
            ))}
          </div>

          <motion.span className="text-xl font-bold text-emerald-400" custom={1} variants={bracketVariants}>
          <span style={{ fontFamily: '"Edu QLD Hand", cursive' }} className="text-xl font-bold text-emerald-400">Waqar</span><span style={{ fontFamily: '"Edu QLD Hand", cursive' }} className="text-xl font-bold text-white"> Ahmed</span> &gt;
          </motion.span>
        </div>

        {/* A letter */}
        <motion.span
          className="ml-1 text-xl font-bold text-white relative z-10"
          variants={letterVariants}
          whileHover={{ scale: 1.1, color: "#a7f3d0" }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          
        </motion.span>

        {/* Decorative circuit lines */}
        {isHovered && (
          <>
            <motion.div
              className="absolute h-[1px] bg-gradient-to-r from-emerald-500/0 via-emerald-500/70 to-emerald-500/0"
              style={{ width: "120%", left: "-10%", bottom: "-3px" }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute w-[1px] h-4 bg-emerald-500/50"
              style={{ left: "20%", bottom: "-3px" }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.2, delay: 0.2 }}
            />
            <motion.div
              className="absolute w-[1px] h-4 bg-emerald-500/50"
              style={{ left: "80%", bottom: "-3px" }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.2, delay: 0.3 }}
            />
          </>
        )}
      </motion.div>

      {/* Subtle pulse effect */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 bg-emerald-500 rounded-lg -z-20 opacity-0"
          animate={{
            opacity: [0, 0.1, 0],
            scale: [0.8, 1.1, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          }}
        />
      )}
    </a>
  )
}