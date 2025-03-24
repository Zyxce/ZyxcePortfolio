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
      {projectImage && (
        <div className={style.cardImageContainer}>
          <img
            src={projectImage}
            alt={'Zyxce'}
            className={style.cardImage}
          ></img>
        </div>
      )}
      <p className={style.cardStack} data-cursor="emphasize">
        {projectStack}
      </p>
      <div className={style.cardContentContainer}>
        <h3 className={style.cardName} data-cursor="emphasize">
          {projectName}
        </h3>
        <p className={style.cardDescription} data-cursor="emphasize">
          {projectDescription}
        </p>
        {buttons && (
          <div className={style.cardBtnContainer}>
            {buttons.map((button) => (
              <ButtonBorder
                text={button.text}
                classStyle={style.cardBtn}
                color={button.color}
                url={button.url}
              ></ButtonBorder>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default BigCard
