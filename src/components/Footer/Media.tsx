import React from 'react'
import { FaGithub, FaTelegram, FaDiscord } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { IMedia } from '../../types'
import style from './Media.module.css'

const Media: React.FC<IMedia> = (props) => {
  const { headerText } = props
  return (
    <div className={style.mediaContainer}>
      <h4 className={style.mediaHeader} data-cursor="emphasize">
        {headerText}
      </h4>
      <div className={style.socialButtons}>
        <motion.div
          className={style.socialDiv}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          data-cursor="hover"
        >
          <a href="https://github.com/Zyxce" className={style.socialLink}>
            <FaGithub className={style.socialIcon} />
          </a>
        </motion.div>
        <motion.div
          className={style.socialDiv}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          data-cursor="hover"
        >
          <a href="https://t.me/CerfZerf" className={style.socialLink}>
            <FaTelegram className={style.socialIcon} />
          </a>
        </motion.div>
        <motion.div
          className={style.socialDiv}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          data-cursor="hover"
        >
          <a href="DISCORD" className={style.socialLink}>
            <FaDiscord className={style.socialIcon} />
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default Media
