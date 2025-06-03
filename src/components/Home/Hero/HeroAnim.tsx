import React from 'react'
import { IHeroAnim } from '../../../types'
import style from '../../../styles/components/Home/Hero/HeroAnim.module.css'
import HeroTableBig from '../../../images/Anim/Hero/HeroTableBig.png'
import HeroTableSmall from '../../../images/Anim/Hero/HeroTableSmall.png'
import HeroLogo from '../../../images/Anim/Hero/HeroLogo.png'
import HeroHTML from '../../../images/Anim/Hero/HeroHTML.png'
import HeroCSS from '../../../images/Anim/Hero/HeroCSS.png'
import HeroCsharp from '../../../images/Anim/Hero/HeroCsharp.png'
import HeroDeveloper from '../../../images/Anim/Hero/HeroDeveloper.png'
import linesFigure from '../../../images/Anim/Bg/linesFigure.svg'
import squareDots from '../../../images/Anim/Bg/squareDots.svg'

const HeroAnim: React.FC<IHeroAnim> = (props) => {
  const { paragraphText, spanText } = props
  return (
    <div className={style.animContainer}>
      <img
        className={style.animLinesFigure}
        src={linesFigure}
        alt={'herooooooooooooooo'}
      />
      <img
        className={style.animSquareDots}
        src={squareDots}
        alt={'herooooooooooooooo'}
      />
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
        className={style.animHeroCsharp}
        src={HeroCsharp}
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
        <div className={style.animTextSquare}>
          <p>://</p>
        </div>
        <p className={style.animText} data-cursor="emphasize">
          {paragraphText} <span>{spanText}</span>
        </p>
      </div>
    </div>
  )
}

export default HeroAnim
