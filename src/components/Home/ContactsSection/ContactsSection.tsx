import React from 'react'
import { FaTelegram, FaDiscord } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import SectionTitle from '../../Reusable/SectionTitle'
import style from '../../../styles/components/Home/ContactsSection/ContactsSection.module.css'
import squareLines from '../../../images/Anim/Bg/squareLines.svg'
import linesFigure from '../../../images/Anim/Bg/linesFigure.svg'

const ContactsSection: React.FC = () => {
  const { t } = useTranslation()
  return (
    <div className={style.contactsSectionContainer}>
      <SectionTitle symbol={'#'} isLine={true} lineWidth={'15vw'}>
        {t('contacts.contacts')}
      </SectionTitle>
      <div className={style.contactsContainer}>
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
    </div>
  )
}

export default ContactsSection
