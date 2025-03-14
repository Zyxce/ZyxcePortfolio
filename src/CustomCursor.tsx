import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import styleModule from './CustomCursor.module.css'

const CustomCursor: React.FC = () => {
  const [cursorType, setCursorType] = useState<string>('')
  const location = useLocation()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cursor = document.getElementById('custom-cursor')
      if (cursor) {
        cursor.style.left = `${e.clientX}px`
        cursor.style.top = `${e.clientY}px`
      }
    }

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement
      const cursorType = target.dataset.cursor

      if (cursorType === 'emphasize') {
        setCursorType(styleModule.emphasized)
      } else if (cursorType === 'hover') {
        setCursorType(styleModule.hovered)
      } else {
        setCursorType('')
      }
    }

    const handleMouseLeave = () => {
      setCursorType('')
    }

    // обработчики для всех элементов с data-cursor
    const elements = document.querySelectorAll('[data-cursor]')
    elements.forEach((element) => {
      element.addEventListener('mouseenter', handleMouseEnter)
      element.addEventListener('mouseleave', handleMouseLeave)
    })

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      elements.forEach((element) => {
        element.removeEventListener('mouseenter', handleMouseEnter)
        element.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [location]) //обработчики при изменении маршрута

  return (
    <motion.div
      id="custom-cursor"
      className={`${styleModule.customCursor} ${cursorType}`}
      initial={{ scale: 1 }}
      animate={{
        scale:
          cursorType === styleModule.hovered
            ? 1.5
            : cursorType === styleModule.emphasized
            ? 1.2
            : 1,
      }}
      transition={{ type: 'spring', stiffness: 300 }}
    />
  )
}

export default CustomCursor
