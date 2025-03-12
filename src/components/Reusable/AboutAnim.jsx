import React from 'react'
import style from './AboutAnim.module.css'
import aboutBackground from '../../images/aboutBackground.png'
import aboutChips from '../../images/aboutChips.png'
import aboutEnergyDrink1 from '../../images/aboutEnergyDrink1.png'
import aboutEnergyDrink2 from '../../images/aboutEnergyDrink2.png'
import aboutGamer from '../../images/aboutGamer.png'
import aboutGamerEyes from '../../images/aboutGamerEyes.png'
import aboutMonitorLight from '../../images/aboutMonitorLight.png'
import aboutNewGame from '../../images/aboutNewGame.png'
import aboutPizza from '../../images/aboutPizza.png'
import aboutPizzaPlate from '../../images/aboutPizzaPlate.png'

const AboutAnim = () => {
  return (
    <div className={style.animContainer}>
      <img
        className={style.aboutBackground}
        src={aboutBackground}
        alt={'Zyxce'}
      />
      <img className={style.aboutChips} src={aboutChips} alt={'Zyxce'} />
      <img
        className={style.aboutEnergyDrink1}
        src={aboutEnergyDrink1}
        alt={'Zyxce'}
      />
      <img
        className={style.aboutEnergyDrink2}
        src={aboutEnergyDrink2}
        alt={'Zyxce'}
      />
      <img className={style.aboutGamer} src={aboutGamer} alt={'Zyxce'} />
      <img
        className={style.aboutGamerEyes1}
        src={aboutGamerEyes}
        alt={'Zyxce'}
      />
      <img
        className={style.aboutGamerEyes2}
        src={aboutGamerEyes}
        alt={'Zyxce'}
      />
      <img
        className={style.aboutMonitorLight}
        src={aboutMonitorLight}
        alt={'Zyxce'}
      />
      <img
        className={style.aboutNewGame}
        src={aboutNewGame}
        alt={'Zyxceeeee'}
      />
      <img
        className={style.aboutPizza}
        src={aboutPizza}
        alt={'Zyxceeeeeeeeee'}
      />
      <img
        className={style.aboutPizzaPlate}
        src={aboutPizzaPlate}
        alt={'Zyxce'}
      />
    </div>
  )
}

export default AboutAnim
