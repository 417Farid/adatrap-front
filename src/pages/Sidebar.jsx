import React from 'react'
import { Link } from 'react-router-dom';
import { BsFillHouseFill, BsBusFront, BsClockFill, BsSpeedometer, BsStopwatch, BsFillPersonLinesFill } from 'react-icons/bs'

function Sidebar({ openSidebarToggle, OpenSidebar }) {
    return (
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
            <div className='sidebar-title'>
                <div className='sidebar-brand'>
                    <BsBusFront className='icon_header' />
                </div>
                <span className='icon close_icon' onClick={OpenSidebar}>X</span>
            </div>

            <ul className='sidebar-list'>

                <Link className='full-link' to="/">
                    <li className='sidebar-list-item'>
                        <BsFillHouseFill className='icon' /> Inicio
                    </li>
                </Link>
                <Link className='full-link' to="/frecuencia">
                    <li className='sidebar-list-item'>
                        <BsClockFill className='icon' /> Frecuencia
                    </li>
                </Link>
                <Link className='full-link' to="/velocidad">
                    <li className='sidebar-list-item'>
                    <BsSpeedometer className='icon' /> Velocidad
                    </li>
                </Link>

            <li className='sidebar-list-item'>
                <a href="">
                    <BsStopwatch className='icon' /> Tiempos
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillPersonLinesFill className='icon' /> Pasajeros
                </a>
            </li>
        </ul>
        </aside >
    )
}

export default Sidebar