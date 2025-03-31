import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaTelegram, FaDiscord } from 'react-icons/fa'
import style from './Contacts.module.css'
import SectionTitle from '../Reusable/SectionTitle'
import squareLines from '../../images/squareLines.svg'
import linesFigure from '../../images/linesFigure.svg'
import squareDots from '../../images/squareDots.svg'

const Contacts: React.FC = () => {
  const { t } = useTranslation()
  return (
    <div className={style.contactsContainer}>
      <SectionTitle symbol={'/'} isLine={false} lineWidth={'60vw'}>
        {t('contacts.contacts')}
      </SectionTitle>
      <p className={style.contactsDescription} data-cursor="emphasize">
        {t('about.whoami')}
      </p>
      <div className={style.contactsContentSection}>
        <p className={style.contactsText} data-cursor="emphasize">
          {t('contacts.iminterested')}
        </p>
        <div className={style.contactsSocial}>
          <h5 className={style.socialHeader} data-cursor="emphasize">
            {t('contacts.socialHeader')}
          </h5>
          <div className={style.socialContainer} data-cursor="hover">
            <FaTelegram className={style.socialIcon} />
            <a className={style.socialUrl} href="https://t.me/CerfZerf">
              @CerfZerf
            </a>
          </div>
          <div className={style.socialContainer} data-cursor="hover">
            <FaDiscord className={style.socialIcon} />
            <a className={style.socialUrl} href="https://discord.com/laksor">
              @laksor
            </a>
          </div>
          <img
            className={style.squareLines1}
            src={squareLines}
            alt={'zyxce'}
          ></img>
          <img
            className={style.linesFigure1}
            src={linesFigure}
            alt={'zyxce'}
          ></img>
        </div>
      </div>
      <img className={style.squareLines1} src={squareLines} alt={'zyxce'}></img>
      <img className={style.squareLines2} src={squareLines} alt={'zyxce'}></img>
      <img className={style.squareDots1} src={squareDots} alt={'zyxce'}></img>
      <img className={style.squareDots2} src={squareDots} alt={'zyxce'}></img>
    </div>
  )
}

export default Contacts
