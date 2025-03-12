import React from 'react'
import Hero from './Hero/Hero'
import ProjectsSection from './ProjectsSection/ProjectsSection'
import SkillsHome from './Skills/SkillsHome'
import style from './Home.module.css'

const Home = () => {
  return (
    <div className={style.homeContainer}>
      <Hero />
      <ProjectsSection />
      <SkillsHome />
    </div>
  )
}

export default Home
