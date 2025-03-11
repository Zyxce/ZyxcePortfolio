import React from 'react'
import style from './HeroQuote.module.css'

const HeroQuote = (props) => {
  const { quote, author } = props
  return (
    <div className={style.heroQuoteContainer}>
      <div className={style.heroQuoteTop}>
        <p className={style.heroQuoteHeader}>{quote}</p>
        <div className={style.heroQuoteCircle}>
          <p>“</p>
        </div>
        <div className={style.heroQuoteCircle}>
          <p>“</p>
        </div>
      </div>
      <div className={style.heroQuoteBottom}>
        <p className={style.heroQuoteAuthor}>{author}</p>
      </div>
    </div>
  )
}

export default HeroQuote
