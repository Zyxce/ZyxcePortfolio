import React, { useState } from 'react'
import { FaGithub, FaTelegram, FaDiscord } from 'react-icons/fa'
import { motion } from 'framer-motion'
import style from './SidePanel.module.css'

const SidePanel: React.FC = () => {
  const [isGit, setIsGit] = useState<boolean>(false)
  const [isTelegram, setIsTelegram] = useState<boolean>(false)
  const [isDiscord, setIsDiscord] = useState<boolean>(false)

  return (
    <div className={style.sidePanel}>
      {/* основная серая линия */}
      <div className={style.verticalLine}></div>

      {/* линии для гита */}
      <motion.div
        className={style.connectLineGit}
        initial={{ height: 0 }}
        animate={{ height: isGit ? 220 : 0 }}
        transition={{ duration: 0.3 }}
      />
      {/* линиии для телеги */}
      <motion.div
        className={style.verticalLineActive}
        initial={{ height: 0 }}
        animate={{ height: isTelegram ? 200 : 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className={style.horisontalLineActive}
        initial={{ width: 0 }}
        animate={{ width: isTelegram ? 50 : 0 }}
        transition={{ duration: 0.3, delay: 0.3 }} // 0.3 секунды
      />
      <motion.div
        className={style.verticalLineActiveTelegram}
        initial={{ height: 0 }}
        animate={{ height: isTelegram ? 99 : 0 }}
        transition={{ duration: 0.3, delay: 0.6 }} // 0.6 секунды
      />
      <motion.div
        className={style.connectLineTelegram}
        initial={{ width: 0 }}
        animate={{ width: isTelegram ? 31 : 0 }}
        transition={{ duration: 0.3, delay: 0.9 }} // 0.9 секунды
      />

      {/* дискорд линии */}
      <motion.div
        className={style.verticalLineActive}
        initial={{ height: 0 }}
        animate={{ height: isDiscord ? 200 : 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className={style.horisontalLineActive}
        initial={{ width: 0 }}
        animate={{ width: isDiscord ? 50 : 0 }}
        transition={{ duration: 0.3, delay: 0.3 }} // 0.3 секунды
      />
      <motion.div
        className={style.verticalLineActiveDiscord}
        initial={{ height: 0 }}
        animate={{ height: isDiscord ? 154 : 0 }}
        transition={{ duration: 0.3, delay: 0.6 }} //0.6 секунды
      />
      <motion.div
        className={style.connectLineDiscord}
        initial={{ width: 0 }}
        animate={{ width: isDiscord ? 31 : 0 }}
        transition={{ duration: 0.3, delay: 0.9 }} // 0.9 секунды
      />

      {/* Кнопки */}
      <div className={style.socialButtons}>
        <motion.div
          onMouseEnter={() => setIsGit(true)}
          onMouseLeave={() => setIsGit(false)}
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
          onMouseEnter={() => setIsTelegram(true)}
          onMouseLeave={() => setIsTelegram(false)}
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
          onMouseEnter={() => setIsDiscord(true)}
          onMouseLeave={() => setIsDiscord(false)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          data-cursor="hover"
        >
          <a href="https://discord.com/" className={style.socialLink}>
            <FaDiscord className={style.socialIcon} />
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default SidePanel
