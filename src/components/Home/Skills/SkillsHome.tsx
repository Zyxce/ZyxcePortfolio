import React from 'react'
import { useTranslation } from 'react-i18next'
import { ISmallCard } from '../../../types'
import skillsData from '../../../data/skillsData.json'
import SectionTitle from '../../Reusable/SectionTitle'
import SmallCard from '../../Reusable/SmallCard'
import dotSquare from '../../../images/squareDots.svg'
import linesFigure from '../../../images/linesFigure.svg'
import squareLines from '../../../images/squareLines.svg'
import style from './SkillsHome.module.css'

const SkillsHome: React.FC = () => {
  const { t } = useTranslation()
  const skillsArray: ISmallCard[] = skillsData.reverse().map((item) => ({
    ...item,
    header: t(item.header.replace("t('", '').replace("')", '')),
  }))
  return (
    <div className={style.skillsHomeContainer}>
      <SectionTitle symbol={'#'} isLine={true} lineWidth={'18vw'}>
        {t('skills.skills')}
      </SectionTitle>
      <div className={style.skillsHomeBottom}>
        <div className={style.skillsHomeFigures}>
          <img
            className={style.skillsHomeFigure}
            src={dotSquare}
            alt={'zyxce'}
          ></img>
          <img
            className={style.skillsHomeFigure}
            src={dotSquare}
            alt={'zyxce'}
          ></img>
          <img
            className={style.skillsHomeFigure}
            src={squareLines}
            alt={'zyxce'}
          ></img>
          <img
            className={style.skillsHomeFigure}
            src={squareLines}
            alt={'zyxce'}
          ></img>
          <img
            className={style.skillsHomeFigure}
            src={linesFigure}
            alt={'zyxce'}
          ></img>
        </div>
        <div className={style.skillsHomeCardsContainer}>
          <div className={style.skillsHomeCards}>
            {skillsArray.slice(0, 1).map((skill) => (
              <SmallCard key={skill.header} {...skill}></SmallCard>
            ))}
          </div>
          <div className={style.skillsHomeCards}>
            {skillsArray.slice(1, 3).map((skill) => (
              <SmallCard key={skill.header} {...skill}></SmallCard>
            ))}
          </div>
          <div className={style.skillsHomeCards}>
            {skillsArray.slice(3, 5).map((skill) => (
              <SmallCard key={skill.header} {...skill}></SmallCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillsHome
