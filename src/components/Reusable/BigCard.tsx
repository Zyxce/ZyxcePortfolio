import React from 'react'
import { IBigCard } from '../../types'
import style from '../../styles/components/Reusable/BigCard.module.css'
import ButtonBorder from './ButtonBorder'

const BigCard: React.FC<IBigCard> = (props) => {
  const {
    projectImage,
    projectName,
    projectStack,
    projectStatus,
    projectDescription,
    buttons,
  } = props

  const projectStackSmall = projectStack.slice(0, 5).join(' ')

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
        {projectStackSmall}
      </p>

      <div className={style.cardContentContainer}>
        <div className={style.cardHeader}>
          <h3 className={style.cardName} data-cursor="emphasize">
            {projectName}
          </h3>
          {projectStatus ? (
            <p className={style.cardProjectStatus} data-cursor="emphasize">
              {projectStatus}
            </p>
          ) : null}
        </div>
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
