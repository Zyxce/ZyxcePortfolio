import { create } from 'zustand'
import i18n from '../i18n'
import { StoreState } from '../types'

export const useStore = create<StoreState>((set) => ({
  //состояния курсора
  cursorType: '',
  setCursorType: (type) => set({ cursorType: type }),

  //состояния боковой панели
  isGit: false,
  isTelegram: false,
  isDiscord: false,
  setIsGit: (value) => set({ isGit: value }),
  setIsTelegram: (value) => set({ isTelegram: value }),
  setIsDiscord: (value) => set({ isDiscord: value }),

  //состояние i18n
  currentLanguage: i18n.language,
  setLanguage: (lang) => {
    i18n.changeLanguage(lang)
    set({ currentLanguage: lang })
  },

  //состояние для проектов
  projects: [],
  setProjects: (projects) => set({ projects }),
}))
