// типы для компонентов проекты
export interface IButtonType {
  text: string
  color: 'primary' | 'gray'
  url?: string
}

export interface IProjectData {
  id: number
  projectImage: string | null
  projectName: string
  projectStack: string[]
  projectDescription: string
  buttons: IButtonType[]
}

//типы languageArray для компонента LanguageSelector

export interface ILanguageArray {
  label: string
  field: string
}

// тип пропсов для HeroAnim
export interface IHeroAnim {
  paragraphText: string
  spanText: string
}
// тип пропсов для HeroText
export interface IHeroTextProps {
  heroTextTranslation: IHeroTextTranslation
}
export interface IHeroTextTranslation {
  translateHey: string
  translateIm: string
  translateName: string
  translateDescription: string
  textsArray: string[]
  translateBtn: string
}

// тип пропсов для HeroQuote
export interface IHeroQuote {
  quote: string
  author: string
  className: string
}

// тип пропсов для ButtonBorder
export interface IButtonBorder {
  classStyle: string
  text: string
  color: 'gray' | 'primary'
  navigate?: string
  url?: string
}

// тип пропсов для SectionTitle
export interface ISectionTitle {
  symbol: string
  isLine: boolean
  lineWidth: string
  children: string
}

// тип пропсов для BigCard
export interface IBigCard {
  projectImage: string | null
  projectName: string
  projectStack: string[]
  projectDescription: string
  buttons: IButtonType[]
}

// тип пропсов для SmallCard
export interface ISmallCard {
  header: string
  skills: string
}

// тип пропсов для NavButton
export interface INavButton {
  text: string
  url: string
  className: string
}

// тип пропсов для Logo
export interface ILogo {
  anim: boolean
  mail: boolean
  className?: string
}

// тип пропсов для Media
export interface IMedia {
  headerText: string
  className: string
}
