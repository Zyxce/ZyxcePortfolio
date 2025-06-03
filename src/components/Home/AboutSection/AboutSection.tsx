import React from 'react'
import { useTranslation } from 'react-i18next'
import style from '../../../styles/components/Home/AboutSection/AboutSection.module.css'
import SectionTitle from '../../Reusable/SectionTitle'
import AboutAnim from '../../Reusable/AboutAnim'
import ButtonBorder from '../../Reusable/ButtonBorder'

const AboutSection: React.FC = () => {
  const { t } = useTranslation()
  return (
    <div className={style.aboutContainer}>
      <SectionTitle symbol={'#'} isLine={true} lineWidth={'60vw'}>
        {t('about.aboutme')}
      </SectionTitle>
      <div className={style.aboutContentContainer}>
        <div className={style.aboutTextContainer}>
          <p className={style.aboutText} data-cursor="emphasize">
            {t('about.helloim')}
          </p>
          <p className={style.aboutText} data-cursor="emphasize">
            {t('about.imdevfrom')}
          </p>
          <p className={style.aboutText} data-cursor="emphasize">
            {t('about.mycreative')}
          </p>
          <ButtonBorder
            text={t('about.readmore')}
            classStyle={style.aboutBtn}
            color={'primary'}
            navigate={'/ZyxcePortfolio/About'}
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
