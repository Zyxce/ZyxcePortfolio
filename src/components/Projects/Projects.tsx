import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { IProjectData } from '../../types'
import { useStore } from '../../store/store'
import projectsData from '../../data/projectsData.json'
import style from '../../styles/components/Projects/Projects.module.css'
import SectionTitle from '../Reusable/SectionTitle'
import BigCard from '../Reusable/BigCard'
import CryptoScan from '../../images/Projects/CryptoScan.png'
import CosmoJump from '../../images/Projects/CosmoJump.jpg'
import Blanko from '../../images/Projects/Blanko.png'
import Aperture from '../../images/Projects/Aperture.png'
import FromBoard from '../../images/Projects/FromBoard.png'
import PrintTest from '../../images/Projects/PrintTest.jpg'
import Simple from '../../images/Projects/Simple.png'
import Wpolitika from '../../images/Projects/Wpolitika.png'
import Zyxce from '../../images/Projects/Zyxce.png'
import Nexora from '../../images/Projects/Nexora.jpg'
import squareLines from '../../images/Anim/Bg/squareLines.svg'
import squareDots from '../../images/Anim/Bg/squareDots.svg'
import YahtClub from '../../images/Projects/YahtClub.png'
import WeatherNow from '../../images/Projects/WeatherNow.png'
import vkcrm from '../../images/Projects/VKCRM.png'
import hrcrm from '../../images/Projects/HRCRM.png'
import todoApp from '../../images/Projects/TodoApp.png'
// import Lionic from '../../images/Projects/Lionic.png'
// import Pioner from '../../images/Projects/Pioner.png'
// import RoboSchool from '../../images/Projects/RoboSchool.png'
// import Collection from '../../images/Projects/Collection.png'
// import Evklid from '../../images/Projects/Evklid.png'

const Projects: React.FC = () => {
  const { t } = useTranslation()
  const projects = useStore((state) => state.projects)
  const setProjects = useStore((state) => state.setProjects)

  useEffect(() => {
    if (projects.length === 0) {
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
        TodoApp: todoApp,
        HRCRM: hrcrm,
      }

      const cardsArray: IProjectData[] = projectsData.map((item) => ({
        ...item,
        projectImage: item.projectImage ? imagesMap[item.projectImage] : null,
        projectDescription: t(
          item.projectDescription.replace("t('", '').replace("')", '')
        ),
        projectStatus: item.projectStatus,
        buttons: item.buttons.map((button) => ({
          ...button,
          color: button.color as 'primary' | 'gray',
        })),
      }))

      setProjects(cardsArray)
    }
  }, [t, projects.length, setProjects])

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
          {projects.slice(0, 15).map((card) => (
            <BigCard key={card.id} {...card} />
          ))}
        </div>
      </div>
      <div className={style.projectsApsContainer}>
        <SectionTitle symbol={'#'} isLine={true} lineWidth={'20vw'}>
          {t('projects.smallprojects')}
        </SectionTitle>
        <div className={style.projectsApsCards}>
          {projects.slice(15, 21).map((card) => (
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
