import React from 'react'
import Hero from './Hero/Hero'
import ProjectsSection from './ProjectsSection/ProjectsSection'
import AboutSection from './AboutSection/AboutSection'
import ContactsSection from './ContactsSection/ContactsSection'
import SkillsHome from './Skills/SkillsHome'
import style from './Home.module.css'

const Home = () => {
  return (
    <div className={style.homeContainer}>
      <Hero />
      <ProjectsSection />
      <SkillsHome />
      <AboutSection />
      <ContactsSection />
    </div>
  )
}

export default Home
