import React from 'react'
import { useTranslation } from 'react-i18next'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { IProjectData } from '../../../types'
import projectsData from '../../../data/projectsData.json'
import SectionTitle from '../../Reusable/SectionTitle'
import BigCard from '../../Reusable/BigCard'
import CryptoScan from '../../../images/CryptoScan.png'
import CosmoJump from '../../../images/CosmoJump.jpg'
import WeatherNow from '../../../images/WeatherNow.png'
import PrintTest from '../../../images/PrintTest.jpg'
import style from './ProjectsSection.module.css'

const PorjectsSection: React.FC = () => {
  const { t } = useTranslation()
  const n: NavigateFunction = useNavigate()

  const imagesMap: Record<string, string> = {
    CryptoScan: CryptoScan,
    WeatherNow: WeatherNow,
    PrintTest: PrintTest,
  }

  const cardsArray: IProjectData[] = projectsData.map((item) => ({
    ...item,
    projectImage: item.projectImage ? imagesMap[item.projectImage] : null,
    projectDescription: t(
      item.projectDescription.replace("t('", '').replace("')", '')
    ),
    buttons: item.buttons.map((button) => ({
      ...button,
      color: button.color as 'primary' | 'gray', // явное приведение типа не удалять
    })),
  }))

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
          <svg
            width="130px"
            height="45px"
            viewBox="0 0 180 60"
            className="border"
          >
            <polyline
              points="179,1 179,59 1,59 1,1 179,1"
              className="bg-line"
            />
            <polyline
              points="179,1 179,59 1,59 1,1 179,1"
              className="hl-line"
            />
          </svg>
          <span>{t('projects.view')} ~~&gt;</span>
        </button>
      </div>

      <div className={style.projectsSectionBottom}>
        {cardsArray.slice(0, 3).map((card) => (
          <BigCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  )
}

export default PorjectsSection
