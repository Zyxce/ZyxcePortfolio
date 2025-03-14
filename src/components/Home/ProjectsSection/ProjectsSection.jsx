import React from 'react'
import { useTranslation } from 'react-i18next'
import SectionTitle from '../../Reusable/SectionTitle'
import BigCard from '../../Reusable/BigCard'
import TestImage from '../../../images/TestImage.jpg'
import CryptoScan from '../../../images/CryptoScan.png'
import CosmoJump from '../../../images/CosmoJump.jpg'
import Blanko from '../../../images/Blanko.png'
import style from './ProjectsSection.module.css'
import { useNavigate } from 'react-router-dom'

const PorjectsSection = () => {
  const { t } = useTranslation()
  const n = useNavigate()

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
  ]

  return (
    <div className={style.projectsSection}>
      <div className={style.projectsSectionTop}>
        <SectionTitle symbol={'#'} isLine={true} lineWidth={'40vw'}>
          {t('projects.projects')}
        </SectionTitle>
        <button
          className={style.projectsSectionBtn}
          onClick={() => n('/ZyxcePortfolio/Projects')}
          data-cursor="hover"
        >
          <svg width="130px" height="45px" viewBox="0 0 180 60" class="border">
            <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
            <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
          </svg>
          <span>{t('projects.view')} ~~&gt;</span>
        </button>
      </div>

      <div className={style.projectsSectionBottom}>
        {cardsArray.map((card) => (
          <BigCard key={card.name} {...card} />
        ))}
      </div>
    </div>
  )
}

export default PorjectsSection
