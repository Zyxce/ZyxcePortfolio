import React from 'react'
import { motion } from 'framer-motion'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { IButtonBorder } from '../../types'
import style from '../../styles/components/Reusable/ButtonBorder.module.css'

const ButtonBorder: React.FC<IButtonBorder> = (props) => {
  const { text, classStyle, color, navigate, url } = props

  const n: NavigateFunction = useNavigate()

  if (color === 'gray') {
    return url ? (
      <a href={url}>
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
      </a>
    ) : (
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
    return url ? (
      <a href={url}>
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
      </a>
    ) : (
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
