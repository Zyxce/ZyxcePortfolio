import React from 'react'
import { ISmallCard } from '../../types'
import style from './SmallCard.module.css'

const SmallCard: React.FC<ISmallCard> = (props) => {
  const { header, skills } = props
  return (
    <div className={style.cardContainer}>
      <h4 className={style.cardHeader} data-cursor="emphasize">
        {header}
      </h4>
      <p className={style.cardText} data-cursor="emphasize">
        {skills}
      </p>
    </div>
  )
}

export default SmallCard
