import React from 'react'
import style from './SectionTitle.module.css'

const SectionTitle = (props) => {
  const { symbol, children, isLine, lineWidth } = props
  return (
    <div className={style.sectionTitleContainer}>
      <h3 className={style.sectionTitleHeader} data-cursor="emphasize">
        <span>{symbol}</span>
        {children}
      </h3>
      {isLine && (
        <div
          className={style.sectionTitleLine}
          style={{ width: `${lineWidth}` }}
        ></div>
      )}
    </div>
  )
}

export default SectionTitle
