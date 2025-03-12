import React from 'react'
import { motion } from 'framer-motion'
import style from './ButtonBorder.module.css'

const ButtonBorder = (props) => {
  const { text, classStyle, color } = props

  if (color === 'gray') {
    return (
      <motion.div
        className={`${style.btnContainer} ${classStyle}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        <button className={style.buttonGray}>{text}</button>
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
      >
        <button className={style.buttonPrimary}>{text}</button>
      </motion.div>
    )
  }
}

export default ButtonBorder
