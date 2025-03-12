import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './default/normalize.css' // НОРМАЛИЗЕ СИ ЭС ЭС
import './App.css'
import MainLayout from './layouts/MainLayout'
import Home from './components/Home/Home'
import CustomCursor from './CustomCursor'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <CustomCursor />
        <Routes>
          <Route path="/ZyxcePortfolio" element={<MainLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
