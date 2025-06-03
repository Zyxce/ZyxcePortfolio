import { Outlet } from 'react-router-dom'
import Menu from '../components/Menu/Menu'
import Footer from '../components/Footer/Footer'
import style from '../styles/layouts/MainLayout.module.css'

const MainLayout = () => {
  return (
    <div className={style.mainContainer}>
      <div className={style.mainMenu}>
        <Menu />
      </div>
      <div className={style.mainContent}>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout
