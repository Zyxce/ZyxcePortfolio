import React from 'react'
import Hero from './Hero/Hero'
import ProjectsSection from './ProjectsSection/ProjectsSection'
import AboutSection from './AboutSection/AboutSection'
import ContactsSection from './ContactsSection/ContactsSection'
import SkillsHome from './Skills/SkillsHome'
import squareLines from '../../images/Anim/Bg/squareLines.svg'
import squareDots from '../../images/Anim/Bg/squareDots.svg'
import style from '../../styles/components/Home/Home.module.css'

const Home: React.FC = () => {
  return (
    <div className={style.homeContainer}>
      <Hero />
      <ProjectsSection />
      <SkillsHome />
      <AboutSection />
      <ContactsSection />
      <img className={style.squareLines1} src={squareLines} alt={'zyxce'}></img>
      <img className={style.squareLines2} src={squareLines} alt={'zyxce'}></img>
      <img className={style.squareLines3} src={squareLines} alt={'zyxce'}></img>
      <img className={style.squareDots1} src={squareDots} alt={'zyxce'}></img>
      <img className={style.squareDots2} src={squareDots} alt={'zyxce'}></img>
      <img className={style.squareDots3} src={squareDots} alt={'zyxce'}></img>
    </div>
  )
}

export default Home
