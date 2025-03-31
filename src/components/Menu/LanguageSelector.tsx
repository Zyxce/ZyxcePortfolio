import React, { useState } from 'react'
import { SlArrowDown, SlArrowUp } from 'react-icons/sl'
import { useTranslation } from 'react-i18next'
import { ILanguageArray } from '../../types'
import style from './LanguageSelector.module.css'

const LanguageSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { i18n } = useTranslation()
  const currentLanguage: string = i18n.language

  const languageArray: ILanguageArray[] = [
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
