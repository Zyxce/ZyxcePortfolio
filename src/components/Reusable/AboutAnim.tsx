import React from 'react'
import style from '../../styles/components/Reusable/AboutAnim.module.css'
import aboutBackground from '../../images/Anim/About/aboutBackground.png'
import aboutChips from '../../images/Anim/About/aboutChips.png'
import aboutEnergyDrink1 from '../../images/Anim/About/aboutEnergyDrink1.png'
import aboutEnergyDrink2 from '../../images/Anim/About/aboutEnergyDrink2.png'
import aboutGamer from '../../images/Anim/About/aboutGamer.png'
import aboutGamerEyes from '../../images/Anim/About/aboutGamerEyes.png'
import aboutMonitorLight from '../../images/Anim/About/aboutMonitorLight.png'
import aboutNewGame from '../../images/Anim/About/aboutNewGame.png'
import aboutPizza from '../../images/Anim/About/aboutPizza.png'
import aboutPizzaPlate from '../../images/Anim/About/aboutPizzaPlate.png'
import squareLines from '../../images/Anim/Bg/squareLines.svg'
import squareDots from '../../images/Anim/Bg/squareDots.svg'

const AboutAnim: React.FC = () => {
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
      <img className={style.squareDots1} src={squareDots} alt={'zyxce'}></img>
    </div>
  )
}

export default AboutAnim
