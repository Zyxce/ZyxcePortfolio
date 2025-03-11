import React from 'react'
import style from './ProjectsSection.module.css'

const PorjectsSection = () => {
  return (
    <div className={style.projectsSection}>
      <div className={style.projectsSectionTop}>
        <h3 className={style.projectsSectionHeader}>
          <span>#</span>Projects
        </h3>
      </div>
      <div className={style.projectsSectionBottom}>PorjectsSection</div>
    </div>
  )
}

export default PorjectsSection
