import React from 'react'
import { IHeroQuote } from '../../../types'
import style from '../../../styles/components/Home/Hero/HeroQuote.module.css'
import Michelangelo from '../../../images/Michelangelo.png'
import pizzaBox from '../../../images/pizzaBox.png'

const HeroQuote: React.FC<IHeroQuote> = (props) => {
  const { quote, author } = props
  return (
    <div className={style.heroQuoteContainer}>
      <div className={style.heroQuoteTop}>
        <div className={style.heroQuoteTextContainer}>
          <p className={style.heroQuoteHeader} data-cursor="emphasize">
            {quote}
          </p>
          <div className={style.heroQuoteCircle}>
            <p>“</p>
          </div>
          <div className={style.heroQuoteCircle}>
            <p>“</p>
          </div>
        </div>
        <div className={style.heroQuoteMichelangeContainer}>
          <img
            className={style.michelangeloImg}
            src={Michelangelo}
            alt="Michelangelo"
          ></img>
        </div>
        <div className={style.heroQuotePizzaBoxContainer}>
          <img
            className={style.pizzaBoxloImg}
            src={pizzaBox}
            alt="Michelangelo"
          ></img>
        </div>
      </div>
      <div className={style.heroQuoteBottom}>
        <p className={style.heroQuoteAuthor} data-cursor="emphasize">
          {author}
        </p>
      </div>
    </div>
  )
}

export default HeroQuote
