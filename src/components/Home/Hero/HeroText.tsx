import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IHeroTextProps } from '../../../types'
import Hand from '../../../images/Hand.gif'
import ButtonBorder from '../../Reusable/ButtonBorder'
import style from './HeroText.module.css'

const HeroText: React.FC<IHeroTextProps> = (props) => {
  const { heroTextTranslation } = props
  const {
    translateHey,
    translateIm,
    translateName,
    translateDescription,
    textsArray,
    translateBtn,
  } = heroTextTranslation
  const texts: string[] = textsArray

  const [currentTextIndex, setCurrentTextIndex] = useState<number>(0)
  const [displayedText, setDisplayedText] = useState<string>('')
  const [isDeleting, setIsDeleting] = useState<boolean>(false)

  useEffect(() => {
    const currentText: string = texts[currentTextIndex]
    let timeout: NodeJS.Timeout

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
  }, [displayedText, isDeleting, currentTextIndex, texts])

  return (
    <div className={style.heroTextContainer}>
      <div className={style.heroTextHeaderContainer}>
        <h1 className={style.heroText} data-cursor="emphasize">
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
              data-cursor="emphasize"
            >
              {displayedText}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
      <p className={style.heroTextDescription} data-cursor="emphasize">
        {translateDescription}
      </p>
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
