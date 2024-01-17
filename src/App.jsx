import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './pages/Header'
import Sidebar from './pages/Sidebar'
import Home from './pages/Home'
import Frecuencia from './pages/Frecuencia'
import Velocidad from './pages/Velocidad'
import './index.css'

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/frecuencia" element={<Frecuencia />} />
        <Route path="/velocidad" element={<Velocidad />} />
      </Routes>
    </div>
  )
}

export default App