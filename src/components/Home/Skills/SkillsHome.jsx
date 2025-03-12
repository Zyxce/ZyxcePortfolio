import React from 'react'
import { useTranslation } from 'react-i18next'
import SectionTitle from '../../Reusable/SectionTitle'
import SmallCard from '../../Reusable/SmallCard'
import dotSquare from '../../../images/squareDots.svg'
import linesFigure from '../../../images/linesFigure.svg'
import squareLines from '../../../images/squareLines.svg'
import style from './SkillsHome.module.css'

const SkillsHome = () => {
  const { t } = useTranslation()
  const skillsArray = [
    {
      header: t('skills.tools'),
      skills: 'VSCode Figma Git VisualStudio AdobeIllustrator AdobePhotoshop',
    },
    {
      header: t('skills.languages'),
      skills: 'JavaScript C# TypeScript Python',
    },
    {
      header: t('skills.engines'),
      skills: 'Unity 3D',
    },
    {
      header: t('skills.other'),
      skills: 'HTML HAML CSS SASS/SCSS',
    },
    {
      header: t('skills.frameworks'),
      skills: 'React',
    },
  ].reverse()
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
