import React from 'react'
import { useTranslation } from 'react-i18next'
import style from './AboutSection.module.css'
import SectionTitle from '../../Reusable/SectionTitle'
import AboutAnim from '../../Reusable/AboutAnim'
import ButtonBorder from '../../Reusable/ButtonBorder'

const AboutSection = () => {
  const { t } = useTranslation()
  return (
    <div className={style.aboutContainer}>
      <SectionTitle symbol={'#'} isLine={true} lineWidth={'60vw'}>
        {t('about.aboutme')}
      </SectionTitle>
      <div className={style.aboutContentContainer}>
        <div className={style.aboutTextContainer}>
          <p className={style.aboutText}>{t('about.helloim')}</p>
          <p className={style.aboutText}>{t('about.imdevfrom')}</p>
          <p className={style.aboutText}>{t('about.mycreative')}</p>
          <ButtonBorder
            text={'Read more ->'}
            classStyle={style.aboutBtn}
            color={'primary'}
          ></ButtonBorder>
        </div>
        <div className={style.aboutAnimContainer}>
          <AboutAnim></AboutAnim>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
