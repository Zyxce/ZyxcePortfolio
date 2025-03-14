import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import style from './ButtonBorder.module.css'

const ButtonBorder = (props) => {
  const { text, classStyle, color, navigate } = props

  const n = useNavigate()

  if (color === 'gray') {
    return (
      <motion.div
        className={`${style.btnContainer} ${classStyle}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        {...(navigate && { onClick: () => n(navigate) })}
      >
        <button className={style.buttonGray} data-cursor="hover">
          {text}
        </button>
      </motion.div>
    )
  }

  if (color === 'primary') {
    return (
      <motion.div
        className={`${style.btnContainer} ${classStyle}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        {...(navigate && { onClick: () => n(navigate) })}
      >
        <button className={style.buttonPrimary} data-cursor="hover">
          {text}
        </button>
      </motion.div>
    )
  }
}

export default ButtonBorder
