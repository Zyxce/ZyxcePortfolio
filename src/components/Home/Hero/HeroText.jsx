import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Hand from '../../../images/Hand.gif'
import ButtonBorder from '../../Reusable/ButtonBorder'
import style from './HeroText.module.css'

const HeroText = (props) => {
  const { heroTextTranslation } = props
  const {
    translateHey,
    translateIm,
    translateName,
    translateDescription,
    textsArray,
    translateBtn,
  } = heroTextTranslation
  const texts = textsArray

  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = texts[currentTextIndex]
    let timeout

    if (!isDeleting) {
      if (displayedText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1))
        }, 100)
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000)
      }
    } else {
      // cирание текста
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1))
        }, 50)
      } else {
        setIsDeleting(false)
        setCurrentTextIndex((prev) => (prev + 1) % texts.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, currentTextIndex])

  return (
    <div className={style.heroTextContainer}>
      <div className={style.heroTextHeaderContainer}>
        <h1 className={style.heroText}>
          {translateHey} <img src={Hand} alt={'hand'} />, {translateIm}{' '}
          <span>{translateName}</span>
        </h1>
        <div className={style.heroTextAnimateContainer}>
          <AnimatePresence mode="wait">
            <motion.span
              key={currentTextIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className={style.highlightedText}
            >
              {displayedText}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
      <p className={style.heroTextDescription}>{translateDescription}</p>
      <ButtonBorder
        classStyle={style.heroTextBtn}
        text={translateBtn}
        color={'primary'}
        navigate={'/ZyxcePortfolio/Contacts'}
      />
    </div>
  )
}

export default HeroText
