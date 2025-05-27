"use client"

import type React from "react"

import { useState, useCallback } from "react"

export function useTiltEffect(intensity = 10) {
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)")

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const element = e.currentTarget
      const rect = element.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const width = rect.width
      const height = rect.height

      // Calculate rotation based on mouse position
      const rotateY = ((x - width / 2) / width) * intensity
      const rotateX = -((y - height / 2) / height) * intensity

      setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`)
    },
    [intensity],
  )

  const handleMouseLeave = useCallback(() => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)")
  }, [])

  return { handleMouseMove, handleMouseLeave, transform }
}
