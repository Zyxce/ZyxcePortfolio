import React from 'react'
import style from './HeroAnim.module.css'
import HeroTableBig from '../../../images/HeroTableBig.png'
import HeroTableSmall from '../../../images/HeroTableSmall.png'
import HeroLogo from '../../../images/HeroLogo.png'
import HeroHTML from '../../../images/HeroHTML.png'
import HeroCSS from '../../../images/HeroCSS.png'
import HeroCplus from '../../../images/HeroCplus.png'
import HeroDeveloper from '../../../images/HeroDeveloper.png'

const HeroAnim = (props) => {
  const { paragraphText, spanText } = props
  return (
    <div className={style.animContainer}>
      <img
        className={style.animHeroDeveloper}
        src={HeroDeveloper}
        alt={'herooooooooooooooo'}
      />
      <img
        className={style.animHeroTableBig}
        src={HeroTableBig}
        alt={'herooooooooooooooo'}
      />
      <img
        className={style.animHeroTableSmall}
        src={HeroTableSmall}
        alt={'herooooooooooooooo'}
      />
      <img
        className={style.animHeroLogo}
        src={HeroLogo}
        alt={'herooooooooooooooo'}
      />
      <img
        className={style.animHeroCplus}
        src={HeroCplus}
        alt={'herooooooooooooooo'}
      />
      <img
        className={style.animHeroHTML}
        src={HeroHTML}
        alt={'herooooooooooooooo'}
      />
      <img
        className={style.animHeroCSS}
        src={HeroCSS}
        alt={'herooooooooooooooo'}
      />
      <div className={style.animTextContainer}>
        <div className={style.animTextSquare}></div>
        <p className={style.animText}>
          {paragraphText} <span>{spanText}</span>
        </p>
      </div>
    </div>
  )
}

export default HeroAnim
