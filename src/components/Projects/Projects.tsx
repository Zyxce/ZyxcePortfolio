import React from 'react'
import { useTranslation } from 'react-i18next'
import { IProjectData } from '../../types'
import projectsData from '../../data/projectsData.json'
import style from './Projects.module.css'
import SectionTitle from '../Reusable/SectionTitle'
import BigCard from '../Reusable/BigCard'
import CryptoScan from '../../images/CryptoScan.png'
import CosmoJump from '../../images/CosmoJump.jpg'
import Blanko from '../../images/Blanko.png'
import Aperture from '../../images/Aperture.png'
import FromBoard from '../../images/FromBoard.png'
import PrintTest from '../../images/PrintTest.jpg'
import Simple from '../../images/Simple.png'
import Wpolitika from '../../images/Wpolitika.png'
import Zyxce from '../../images/Zyxce.png'
import Nexora from '../../images/Nexora.jpg'
import squareLines from '../../images/squareLines.svg'
import squareDots from '../../images/squareDots.svg'
import YahtClub from '../../images/YahtClub.png'
import WeatherNow from '../../images/WeatherNow.png'
import vkcrm from '../../images/VKCRM.png'

// import Lionic from '../../images/Lionic.png'
// import Pioner from '../../images/Pioner.png'
// import RoboSchool from '../../images/RoboSchool.png'
// import Collection from '../../images/Collection.png'
// import Evklid from '../../images/Evklid.png'

const Projects: React.FC = () => {
  const { t } = useTranslation()

  const imagesMap: Record<string, string> = {
    CryptoScan: CryptoScan,
    CosmoJump: CosmoJump,
    PrintTest: PrintTest,
    Zyxce: Zyxce,
    Wpolitika: Wpolitika,
    Blanko: Blanko,
    Simple: Simple,
    Aperture: Aperture,
    FromBoard: FromBoard,
    Nexora: Nexora,
    YahtClub: YahtClub,
    WeatherNow: WeatherNow,
    VKCRM: vkcrm,
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
          {cardsArray.slice(0, 13).map((card) => (
            <BigCard key={card.id} {...card} />
          ))}
        </div>
      </div>
      <div className={style.projectsApsContainer}>
        <SectionTitle symbol={'#'} isLine={true} lineWidth={'20vw'}>
          {t('projects.smallprojects')}
        </SectionTitle>
        <div className={style.projectsApsCards}>
          {cardsArray.slice(13, 19).map((card) => (
            <BigCard key={card.id} {...card} />
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
