import React, { useState, useEffect } from 'react'
import { FaCode } from 'react-icons/fa'
import { motion } from 'framer-motion'
import style from './Logo.module.css'

const Logo = (props) => {
  const { anim, mail } = props
  const [text, setText] = useState('')
  const [isError, setIsError] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const animateText = async () => {
      //"ztxt"
      setText('z')
      await delay(120)
      setText('zt')
      await delay(120)
      setText('ztx')
      await delay(120)
      setText('ztxt')
      setIsError(true)
      await delay(1000)

      // до "z"
      setIsError(false)
      setText('ztx')
      await delay(120)
      setText('zt')
      await delay(120)
      setText('z')
      await delay(120)

      // "zyxve"
      setText('zy')
      await delay(120)
      setText('zyx')
      await delay(120)
      setText('zyxv')
      await delay(120)
      setText('zyxve')
      setIsError(true)
      await delay(1000)

      // до "zyx"
      setIsError(false)
      setText('zyxv')
      await delay(200)
      setText('zyx')
      await delay(200)

      //"zyxce"
      setText('zyxc')
      await delay(200)
      setText('zyxce')
      setIsComplete(true)
    }

    if (anim) {
      animateText()
    } else {
      setText('zyxce')
      setIsComplete(true)
    }
  }, [anim])

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
  return (
    <div className={style.logoContainer}>
      <FaCode className={style.logoIcon} size={30} />
      <p
        className={`${style.logoText} ${isError ? style.error : ''} ${
          isComplete ? style.complete : ''
        }`}
        data-cursor="emphasize"
      >
        {text}
      </p>
      {mail && (
        <motion.div
          className={style.btnContainer}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          <p className={style.logoMail}>
            <a
              href="mailto:Zyxceles@gmail.com?subject=Привет&body=Здравствуйте!"
              data-cursor="hover"
            >
              Zyxceles@gmail.com
            </a>
          </p>
        </motion.div>
      )}
    </div>
  )
}

export default Logo
