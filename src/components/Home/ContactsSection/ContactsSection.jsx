import React from 'react'
import { FaTelegram, FaDiscord } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import SectionTitle from '../../Reusable/SectionTitle'
import style from './ContactsSection.module.css'
import squareLines from '../../../images/squareLines.svg'
import linesFigure from '../../../images/linesFigure.svg'

const ContactsSection = () => {
  const { t } = useTranslation()
  return (
    <div className={style.contactsSectionContainer}>
      <SectionTitle symbol={'#'} isLine={true} lineWidth={'15vw'}>
        {t('contacts.contacts')}
      </SectionTitle>
      <div className={style.contactsContainer}>
        <p className={style.contactsText}>{t('contacts.iminterested')}</p>
        <div className={style.contactsSocial}>
          <h5 className={style.socialHeader}>{t('contacts.socialHeader')}</h5>
          <div className={style.socialContainer}>
            <FaTelegram className={style.socialIcon} />
            <a className={style.socialUrl} href="https://t.me/CerfZerf">
              @CerfZerf
            </a>
          </div>
          <div className={style.socialContainer}>
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
    </div>
  )
}

export default ContactsSection
