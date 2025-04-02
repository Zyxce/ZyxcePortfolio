import React from 'react'
import style from './AttentionLayout.module.css'
import attentionImg from '../images/attention.png'

const AttentionLayout: React.FC = () => {
  return (
    <div className={style.attentionContainer}>
      <img
        src={attentionImg}
        alt="attention"
        className={style.attentionImg}
      ></img>
      <div className={style.attentionContentContainer}>
        <h1 className={style.attentionTitle}>Heads Up!</h1>
        <p className={style.attentionText}>
          Looks like you're viewing this on a smaller screen.
        </p>
        <p className={style.attentionText}>
          The full experience is currently optimized for 1440px+ displays.
        </p>
        <p className={style.attentionText}>
          Good news: mobile-friendly version is in development!
        </p>
      </div>
    </div>
  )
}

export default AttentionLayout
