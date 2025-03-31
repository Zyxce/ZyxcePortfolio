import React from 'react'
import { useTranslation } from 'react-i18next'
import style from './Menu.module.css'
import NavButton from './NavButton'
import Logo from '../Reusable/Logo'
import LanguageSelector from './LanguageSelector'
import SidePanel from './SidePanel'

const Menu: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className={style.menuContainer}>
      <SidePanel />
      <Logo anim={true} mail={false} />
      <div className={style.contentContainer}>
        <nav className={style.navContainer}>
          <NavButton
            className={style.navItem}
            text={t('menu.home')}
            url={'/ZyxcePortfolio'}
          />
          <NavButton
            className={style.navItem}
            text={t('menu.works')}
            url={'/ZyxcePortfolio/Projects'}
          />
          <NavButton
            className={style.navItem}
            text={t('menu.aboutme')}
            url={'/ZyxcePortfolio/About'}
          />
          <NavButton
            className={style.navItem}
            text={t('menu.contacts')}
            url={'/ZyxcePortfolio/Contacts'}
          />
        </nav>
        <LanguageSelector />
      </div>
    </div>
  )
}

export default Menu
