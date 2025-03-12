import React from 'react'
import { useTranslation } from 'react-i18next'
import SectionTitle from '../../Reusable/SectionTitle'
import style from './ContactsSection.module.css'

const ContactsSection = () => {
  const { t } = useTranslation()
  return (
    <div className={style.contactsSectionContainer}>
      <SectionTitle symbol={'#'} isLine={true} lineWidth={'15vw'}>
        {t('contacts.contacts')}
      </SectionTitle>
      <div className={style.contactsContainer}>
        <p className={style.contactsText}>{t('contacts.iminterested')}</p>
      </div>
    </div>
  )
}

export default ContactsSection
