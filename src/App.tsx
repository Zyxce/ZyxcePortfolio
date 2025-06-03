import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import { useStore } from './store/store'
import './default/normalize.css' // НОРМАЛИЗЕ СИ ЭС ЭС
import './App.css'
import MainLayout from './layouts/MainLayout'
import AttentionLayout from './layouts/AttentionLayout'
import Home from './components/Home/Home'
import Projects from './components/Projects/Projects'
import About from './components/About/About'
import Contacts from './components/Contacts/Contacts'
import CustomCursor from './CustomCursor'

function App() {
  const isTouchDevice = useMediaQuery({ query: '(hover: none)' })
  const isAttention = useMediaQuery({ maxWidth: 1439 })
  const setProjects = useStore((state) => state.setProjects)
  useEffect(() => {
    // Можно загрузить начальные данные проектов здесь
  }, [setProjects])
  return (
    <BrowserRouter>
      <div className="App">
        {!isTouchDevice && <CustomCursor />}
        <Routes>
          {!isAttention ? (
            <Route path="/ZyxcePortfolio" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="/ZyxcePortfolio/Projects" element={<Projects />} />
              <Route path="/ZyxcePortfolio/About" element={<About />} />
              <Route path="/ZyxcePortfolio/Contacts" element={<Contacts />} />
            </Route>
          ) : (
            <Route path="/ZyxcePortfolio" element={<AttentionLayout />} />
          )}
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
