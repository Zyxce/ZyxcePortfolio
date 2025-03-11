import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './CustomCursor.css' // Импортируйте стили для курсора

const CustomCursor = () => {
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      const cursor = document.getElementById('custom-cursor')
      cursor.style.left = `${e.clientX}px`
      cursor.style.top = `${e.clientY}px`
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <motion.div
      id="custom-cursor"
      className={`cursor ${hovered ? 'hovered' : ''} ${
        focused ? 'focused' : ''
      }`}
      initial={{ scale: 1 }}
      animate={{ scale: hovered ? 1.5 : focused ? 1 : 1 }}
      transition={{ type: 'spring', stiffness: 300 }}
    />
  )
}

export default CustomCursor
