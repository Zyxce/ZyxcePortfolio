import React from 'react'
import { useTranslation } from 'react-i18next'
import style from './About.module.css'
import SectionTitle from '../Reusable/SectionTitle'
import AboutAnim from '../Reusable/AboutAnim'
import SmallCard from '../Reusable/SmallCard'
import squareLines from '../../images/squareLines.svg'
import squareDots from '../../images/squareDots.svg'

const About = () => {
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
  ]

  const factsArray = [
    t('about.ilikespring'),
    t('about.ilikepizza'),
    t('about.myfavoritemovie'),
    t('about.imstilluniversity'),
    t('about.playcs'),
    t('about.iwasinarmy'),
    t('about.ilikecars'),
  ]

  return (
    <div className={style.aboutContainer}>
      <SectionTitle symbol={'/'} isLine={false} lineWidth={'40vw'}>
        {t('about.aboutme')}
      </SectionTitle>
      <p className={style.aboutDescription} data-cursor="emphasize">
        {t('about.whoami')}
      </p>
      <div className={style.aboutContentSection}>
        <div className={style.aboutTextContainer}>
          <p className={style.aboutText} data-cursor="emphasize">
            {t('about.helloim')}
          </p>
          <p className={style.aboutText} data-cursor="emphasize">
            {t('about.imdevfrom')}
          </p>
          <p className={style.aboutText} data-cursor="emphasize">
            {t('about.mycreative')}
          </p>
        </div>
        <div className={style.aboutAnim}>
          <AboutAnim />
        </div>
      </div>
      <div className={style.aboutSkillsSection}>
        <SectionTitle symbol={'#'} isLine={true} lineWidth={'60vw'}>
          {t('skills.skills')}
        </SectionTitle>
        <div className={style.aboutCardsContainer}>
          {skillsArray.map((skill) => (
            <SmallCard key={skill.header} {...skill}></SmallCard>
          ))}
        </div>
      </div>
      <div className={style.aboutFactsSection}>
        <SectionTitle symbol={'#'} isLine={true} lineWidth={'20vw'}>
          {t('about.myfunfacts')}
        </SectionTitle>
        <div className={style.aboutFactsContainer}>
          {factsArray.map((fact, index) => (
            <p
              data-cursor="emphasize"
              key={index}
              dangerouslySetInnerHTML={{ __html: fact }}
            />
          ))}
        </div>
      </div>
      <img className={style.squareLines1} src={squareLines} alt={'zyxce'}></img>
      <img className={style.squareLines2} src={squareLines} alt={'zyxce'}></img>
      <img className={style.squareDots1} src={squareDots} alt={'zyxce'}></img>
      <img className={style.squareDots2} src={squareDots} alt={'zyxce'}></img>
      <img className={style.squareDots3} src={squareDots} alt={'zyxce'}></img>
    </div>
  )
}

export default About
