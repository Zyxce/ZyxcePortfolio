import React from 'react'
import { motion } from 'framer-motion'
import style from './NavButton.module.css'

const NavButton = (props) => {
  const { text } = props

  return (
    <motion.div
      className={style.btnContainer}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
      <p className={style.btnText}>
        <span className={style.btnSymbol}>#</span>
        {text}
      </p>
    </motion.div>
  )
}

export default NavButton
