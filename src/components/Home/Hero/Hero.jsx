import React from 'react'
import { useTranslation } from 'react-i18next'
import HeroAnim from './HeroAnim'
import HeroText from './HeroText'
import HeroQuote from './HeroQuote'
import style from './Hero.module.css'

const Hero = () => {
  const { t } = useTranslation()
  const heroTextTranslation = {
    translateHey: t('hero.hey'),
    translateIm: t('hero.im'),
    translateName: t('hero.name'),
    translateDescription: t('hero.description'),
    translateBtn: t('hero.contact'),
    textsArray: [
      t('hero.frontend'),
      t('hero.game'),
      t('hero.cookies'),
      t('hero.problems'),
      t('hero.create'),
    ],
  }
  return (
    <div className={style.heroContainer}>
      <div className={style.heroContainerTop}>
        <HeroText heroTextTranslation={heroTextTranslation} />
        <HeroAnim
          paragraphText={t('hero.currentlyworking')}
          spanText={t('hero.portfolio')}
        />
      </div>
      <HeroQuote
        className={style.heroContainerQuote}
        quote={t('hero.quote')}
        author={t('hero.author')}
      />
    </div>
  )
}

export default Hero
