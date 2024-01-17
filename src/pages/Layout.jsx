import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Layout() {
    return <div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>Inicio</Link>
                </li>
                <li>
                    <Link to='/frecuencia'>Frecuencia</Link>
                </li>
                <li>
                    <Link to='/velocidad'>Velocidad</Link>
                </li>
                <li>
                    <Link to='/tiempos'>Tiempos</Link>
                </li>
                <li>
                    <Link to='/pasajeros'>Pasajeros</Link>
                </li>
            </ul>
        </nav>
        <hr />
        <Outlet/>
    </div>
}

export default Layout