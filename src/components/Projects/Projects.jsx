import React from 'react'
import { useTranslation } from 'react-i18next'
import style from './Projects.module.css'
import SectionTitle from '../Reusable/SectionTitle'
import BigCard from '../Reusable/BigCard'
import CryptoScan from '../../images/CryptoScan.png'
import CosmoJump from '../../images/CosmoJump.jpg'
import Blanko from '../../images/Blanko.png'
import Aperture from '../../images/Aperture.png'
import FromBoard from '../../images/FromBoard.png'
import Simple from '../../images/Simple.png'
import Wpolitika from '../../images/Wpolitika.png'
import Zyxce from '../../images/Zyxce.png'
import squareLines from '../../images/squareLines.svg'
import squareDots from '../../images/squareDots.svg'

// import Lionic from '../../images/Lionic.png'
// import Pioner from '../../images/Pioner.png'
// import RoboSchool from '../../images/RoboSchool.png'
// import Collection from '../../images/Collection.png'
// import Evklid from '../../images/Evklid.png'
// import YahtClub from '../../images/YahtClub.png'

const Projects = () => {
  const { t } = useTranslation()

  const appsArray = [
    {
      projectImage: CryptoScan,
      projectName: 'CryptoScan',
      projectStack: 'HTML CSS SASS JavaScript TypeScript React CoinLoreAPI',
      projectDescription: t('projects.cryptoscan'),
      buttons: [
        { text: 'Live <~>', color: 'primary' },
        { text: 'Cached >=', color: 'gray' },
      ],
    },
    {
      projectImage: CosmoJump,
      projectName: 'CosmoJump',
      projectStack: 'C# Unity3D AdobeIllustrator',
      projectDescription: t('projects.cosmojump'),
      buttons: [{ text: 'Cached >=', color: 'gray' }],
    },
    {
      projectImage: Blanko,
      projectName: 'Blanko',
      projectStack: 'HTML HAML CSS SASS JavaScript',
      projectDescription: t('projects.blanko'),
      buttons: [{ text: 'Cached >=', color: 'gray' }],
    },
    {
      projectImage: Zyxce,
      projectName: 'Zyxce',
      projectStack: 'HTML CSS SASS JavaScript TypeScript React',
      projectDescription: t('projects.zyxce'),
      buttons: [{ text: 'Cached >=', color: 'gray' }],
    },
    {
      projectImage: Simple,
      projectName: 'Simple',
      projectStack: 'HTML HAML CSS SASS JavaScript',
      projectDescription: t('projects.simple'),
      buttons: [{ text: 'Cached >=', color: 'gray' }],
    },
    {
      projectImage: Aperture,
      projectName: 'Aperture',
      projectStack: 'HTML HAML CSS SASS JavaScript',
      projectDescription: t('projects.aperture'),
      buttons: [{ text: 'Cached >=', color: 'gray' }],
    },
    {
      projectImage: FromBoard,
      projectName: 'FromBoard',
      projectStack: 'HTML CSS SASS JavaScript React',
      projectDescription: t('projects.fromboard'),
      buttons: [{ text: 'Cached >=', color: 'gray' }],
    },
    {
      projectImage: Wpolitika,
      projectName: 'Wpolitika',
      projectStack: 'WordPress PHP',
      projectDescription: t('projects.wpolitika'),
      buttons: [{ text: 'Cached >=', color: 'gray' }],
    },
  ]

  const smallArray = [
    {
      projectName: 'YahtClub',
      projectStack: 'HTML CSS JavaScript',
      projectDescription: t('projects.yaht'),
      buttons: [{ text: 'Cached >=', color: 'gray' }],
    },
    {
      projectName: 'Collection',
      projectStack: 'HTML CSS JavaScript',
      projectDescription: t('projects.collection'),
      buttons: [{ text: 'Cached >=', color: 'gray' }],
    },
    {
      projectName: 'Evklid',
      projectStack: 'HTML CSS',
      projectDescription: t('projects.evklid'),
      buttons: [{ text: 'Cached >=', color: 'gray' }],
    },
    {
      projectName: 'RoboSchool',
      projectStack: 'HTML CSS',
      projectDescription: t('projects.roboschool'),
      buttons: [{ text: 'Cached >=', color: 'gray' }],
    },
    {
      projectName: 'Lionic',
      projectStack: 'HTML CSS JavaScript',
      projectDescription: t('projects.lionic'),
      buttons: [{ text: 'Cached >=', color: 'gray' }],
    },
    {
      projectName: 'Pioner',
      projectStack: 'HTML CSS JavaScript',
      projectDescription: t('projects.pioner'),
      buttons: [{ text: 'Cached >=', color: 'gray' }],
    },
  ]
  return (
    <div className={style.projectsContainer}>
      <SectionTitle symbol={'/'} isLine={false} lineWidth={'40vw'}>
        {t('projects.projects')}
      </SectionTitle>
      <p className={style.projectsDescription} data-cursor="emphasize">
        {t('projects.listofprojects')}
      </p>
      <div className={style.projectsApsContainer}>
        <SectionTitle symbol={'#'} isLine={true} lineWidth={'50vw'}>
          {t('projects.completeaps')}
        </SectionTitle>
        <div className={style.projectsApsCards}>
          {appsArray.map((card) => (
            <BigCard key={card.name} {...card} />
          ))}
        </div>
      </div>
      <div className={style.projectsApsContainer}>
        <SectionTitle symbol={'#'} isLine={true} lineWidth={'20vw'}>
          {t('projects.smallprojects')}
        </SectionTitle>
        <div className={style.projectsApsCards}>
          {smallArray.map((card) => (
            <BigCard key={card.name} {...card} />
          ))}
        </div>
      </div>
      <img className={style.squareLines1} src={squareLines} alt={'zyxce'}></img>
      <img className={style.squareLines2} src={squareLines} alt={'zyxce'}></img>
      <img className={style.squareDots1} src={squareDots} alt={'zyxce'}></img>
      <img className={style.squareDots2} src={squareDots} alt={'zyxce'}></img>
    </div>
  )
}

export default Projects
