import React from 'react'
import style from './SmallCard.module.css'

const SmallCard = (props) => {
  const { header, skills } = props
  return (
    <div className={style.cardContainer}>
      <h4 className={style.cardHeader}>{header}</h4>
      <p className={style.cardText}>{skills}</p>
    </div>
  )
}

export default SmallCard
