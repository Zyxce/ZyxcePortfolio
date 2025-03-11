import React from 'react'
import Hero from './Hero/Hero'
import ProjectsSection from './ProjectsSection/ProjectsSection'
import style from './Home.module.css'

const Home = () => {
  return (
    <div className={style.homeContainer}>
      <Hero />
      <ProjectsSection />
    </div>
  )
}

export default Home
