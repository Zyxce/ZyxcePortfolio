import React, { useState } from 'react'
import { SlArrowDown, SlArrowUp } from 'react-icons/sl'
import { useTranslation } from 'react-i18next'
import style from './LanguageSelector.module.css'

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { i18n } = useTranslation()
  const currentLanguage = i18n.language

  const languageArray = [
    {
      label: 'EN',
      field: 'en',
    },
    {
      label: 'RU',
      field: 'ru',
    },
    {
      label: 'BY',
      field: 'by',
    },
  ]

  const filteredLanguageArray = languageArray.filter(
    (item) => item.field !== currentLanguage
  )

  return (
    <>
      {!isOpen ? (
        <div
          className={style.selectorContainer}
          onClick={() => setIsOpen(true)}
          data-cursor="hover"
        >
          <p className={style.selectorText}>{currentLanguage.toUpperCase()}</p>
          <SlArrowDown size={15} className={style.selectorArrow} />
        </div>
      ) : (
        <div className={style.selectorContainer} data-cursor="hover">
          <p className={style.selectorText} onClick={() => setIsOpen(false)}>
            {currentLanguage.toUpperCase()}
          </p>
          <SlArrowUp
            size={15}
            className={style.selectorArrow}
            onClick={() => setIsOpen(false)}
          />
          <div className={style.selectorTable}>
            {filteredLanguageArray.map(({ label, field }, index) => (
              <p
                key={index}
                className={style.selectorText}
                onClick={() => {
                  i18n.changeLanguage(field)
                  setIsOpen(false)
                }}
              >
                {label}
              </p>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default LanguageSelector
