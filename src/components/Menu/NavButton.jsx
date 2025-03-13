import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import style from './NavButton.module.css'

const NavButton = (props) => {
  const { text, url } = props

  return (
    <motion.div
      className={style.btnContainer}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
      <Link className={style.btnText} to={url}>
        <span className={style.btnSymbol}>#</span>
        {text}
      </Link>
    </motion.div>
  )
}

export default NavButton
