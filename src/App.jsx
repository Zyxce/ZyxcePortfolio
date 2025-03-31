import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './default/normalize.css' // НОРМАЛИЗЕ СИ ЭС ЭС
import './App.css'
import MainLayout from './layouts/MainLayout'
import Home from './components/Home/Home'
import Projects from './components/Projects/Projects.tsx'
import About from './components/About/About'
import Contacts from './components/Contacts/Contacts'
import CustomCursor from './CustomCursor.tsx'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <CustomCursor />
        <Routes>
          <Route path="/ZyxcePortfolio" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/ZyxcePortfolio/Projects" element={<Projects />} />
            <Route path="/ZyxcePortfolio/About" element={<About />} />
            <Route path="/ZyxcePortfolio/Contacts" element={<Contacts />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
