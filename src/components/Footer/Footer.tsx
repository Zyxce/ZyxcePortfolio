import React from 'react'
import { useTranslation } from 'react-i18next'
import style from '../../styles/components/Footer/Footer.module.css'
import Logo from '../Reusable/Logo'
import Media from './Media'

const Footer: React.FC = () => {
  const { t } = useTranslation()
  return (
    <div className={style.footerContainer}>
      <div className={style.foooterTop}>
        <div className={style.topLine}></div>
        <div className={style.footerContent}>
          <Logo className={style.footerLogo} anim={false} mail={true} />
          <p className={style.footerContentText} data-cursor="emphasize">
            {t('footer.frontend')}
          </p>
        </div>
        <Media className={style.footerMedia} headerText={t('footer.media')} />
      </div>
      <div className={style.footerCopytight} data-cursor="emphasize">
        {t('footer.copyright')}
      </div>
    </div>
  )
}

export default Footer
