import React from 'react'
import { useTranslation } from 'react-i18next'
import style from './Projects.module.css'
import SectionTitle from '../Reusable/SectionTitle'
import BigCard from '../Reusable/BigCard'
import CryptoScan from '../../images/CryptoScan.png'
import CosmoJump from '../../images/CosmoJump.jpg'
import Blanko from '../../images/Blanko.png'
import Aperture from '../../images/Aperture.png'
import Collection from '../../images/Collection.png'
import Evklid from '../../images/Evklid.png'
import FromBoard from '../../images/FromBoard.png'
import Lionic from '../../images/Lionic.png'
import Pioner from '../../images/Pioner.png'
import RoboSchool from '../../images/RoboSchool.png'
import Simple from '../../images/Simple.png'
import Wpolitika from '../../images/Wpolitika.png'
import YahtClub from '../../images/YahtClub.png'
import Zyxce from '../../images/Zyxce.png'

const Projects = () => {
  const { t } = useTranslation()

  const cardsArray = [
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
      projectStack: 'HTML CSS SASS JavaScript React',
      projectDescription: t('projects.cosmojump'),
      buttons: [{ text: 'Cached >=', color: 'gray' }],
    },
    {
      projectImage: Simple,
      projectName: 'Simple',
      projectStack: 'HTML HAML CSS SASS JavaScript',
      projectDescription: t('projects.blanko'),
      buttons: [{ text: 'Cached >=', color: 'gray' }],
    },
    {
      projectImage: Aperture,
      projectName: 'Aperture',
      projectStack: 'HTML HAML CSS SASS JavaScript',
      projectDescription: t('projects.cosmojump'),
      buttons: [{ text: 'Cached >=', color: 'gray' }],
    },
    {
      projectImage: FromBoard,
      projectName: 'FromBoard',
      projectStack: 'HTML CSS SASS JavaScript React',
      projectDescription: t('projects.blanko'),
      buttons: [{ text: 'Cached >=', color: 'gray' }],
    },
    {
      projectImage: Wpolitika,
      projectName: 'Wpolitika',
      projectStack: 'HTML CSS JavaScript WordPress PHP',
      projectDescription: t('projects.cosmojump'),
      buttons: [{ text: 'Cached >=', color: 'gray' }],
    },
    {
      projectImage: YahtClub,
      projectName: 'YahtClub',
      projectStack: 'HTML CSS JavaScript',
      projectDescription: t('projects.blanko'),
      buttons: [{ text: 'Cached >=', color: 'gray' }],
    },
    {
      projectImage: Collection,
      projectName: 'Collection',
      projectStack: 'HTML CSS JavaScript',
      projectDescription: t('projects.cosmojump'),
      buttons: [{ text: 'Cached >=', color: 'gray' }],
    },
    {
      projectImage: Evklid,
      projectName: 'Evklid',
      projectStack: 'HTML CSS',
      projectDescription: t('projects.blanko'),
      buttons: [{ text: 'Cached >=', color: 'gray' }],
    },
    {
      projectImage: RoboSchool,
      projectName: 'RoboSchool',
      projectStack: 'HTML CSS',
      projectDescription: t('projects.cosmojump'),
      buttons: [{ text: 'Cached >=', color: 'gray' }],
    },
    {
      projectImage: Lionic,
      projectName: 'Lionic',
      projectStack: 'HTML CSS JavaScript',
      projectDescription: t('projects.cosmojump'),
      buttons: [{ text: 'Cached >=', color: 'gray' }],
    },
    {
      projectImage: Pioner,
      projectName: 'Pioner',
      projectStack: 'HTML CSS JavaScript',
      projectDescription: t('projects.blanko'),
      buttons: [{ text: 'Cached >=', color: 'gray' }],
    },
  ]
  return (
    <div className={style.projectsContainer}>
      <SectionTitle symbol={'/'} isLine={false} lineWidth={'40vw'}>
        {t('projects.projects')}
      </SectionTitle>
      <p className={style.projectsDescription}>
        {t('projects.listofprojects')}
      </p>
      <div className={style.projectsApsContainer}>
        <SectionTitle symbol={'#'} isLine={false} lineWidth={'40vw'}>
          {t('projects.completeaps')}
        </SectionTitle>
        <div className={style.projectsApsCards}>
          {cardsArray.map((card) => (
            <BigCard key={card.name} {...card} />
          ))}
        </div>
      </div>
      <div className={style.projectsSmallContainer}>
        <SectionTitle symbol={'#'} isLine={false} lineWidth={'40vw'}>
          {t('projects.smallprojects')}
        </SectionTitle>
        <div className={style.projectsApsCards}></div>
      </div>
    </div>
  )
}

export default Projects
