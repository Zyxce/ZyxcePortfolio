import React from 'react'
import style from './BigCard.module.css'
import ButtonBorder from '../Reusable/ButtonBorder'

const BigCard = (props) => {
  const {
    projectImage,
    projectName,
    projectStack,
    projectDescription,
    buttons,
  } = props

  return (
    <div className={style.cardContainer}>
      <div className={style.cardImageContainer}>
        <img src={projectImage} alt={'Zyxce'} className={style.cardImage}></img>
      </div>
      <p className={style.cardStack}>{projectStack}</p>
      <div className={style.cardContentContainer}>
        <h3 className={style.cardName}>{projectName}</h3>
        <p className={style.cardDescription}>{projectDescription}</p>
        <div className={style.cardBtnContainer}>
          {buttons.map((button) => (
            <ButtonBorder
              text={button.text}
              classStyle={style.cardBtn}
              color={button.color}
            ></ButtonBorder>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BigCard
