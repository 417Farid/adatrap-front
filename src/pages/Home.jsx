import React from 'react';
import ComboBox from '../components/comboBox';
import { BsArrowLeftCircleFill , BsArrowUpCircleFill , BsArrowRightCircleFill, BsSearch   }
  from 'react-icons/bs'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line }
  from 'recharts';
  

function Home() {

  const nombresDeMeses = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  // Codigo para el selector de fechas
  const fechaActual = new Date();
  const mesActualNumero = fechaActual.getMonth();

  // Obtiene el día, mes y año del día anterior
  const diaActual = fechaActual.getDate();
  const mesActualNombre = nombresDeMeses[mesActualNumero]

  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <main className='main-container'>
      <div className='main-title'>
        <h1>A D A T R A P</h1>
      </div>
      {/* HOME CARDS */}
      <div className='main-cards'>
        <div className='card'>
          <div className='card-inner'>
            <h3>{diaActual - 1} de {mesActualNombre}</h3>
            <BsArrowLeftCircleFill  className='card_icon'/>
          </div>
          <div className='card-inner-bottom'>
            <p>Al hacer clic aquí, recibirás más información acerca de los eventos y estadísticas del día anterior.</p>
            <button className='card-button-anterior'>Entrar</button>
          </div>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>{diaActual} de {mesActualNombre}</h3>
            <BsArrowUpCircleFill   className='card_icon'/>
          </div>
          <div className='card-inner-bottom'>
            <p>Al hacer clic aquí, obtendrás información detallada sobre los eventos y estadísticas del día actual.</p>
            <button className='card-button-actual'>Entrar</button>
          </div>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>{diaActual + 1} de {mesActualNombre}</h3>
            <BsArrowRightCircleFill    className='card_icon'/>
          </div>
          <div className='card-inner-bottom'>
            <p>Al hacer clic aquí, obtendrás información detallada sobre los eventos y estadísticas del día siguiente.</p>
            <button className='card-button-siguiente'>Entrar</button>
          </div>
        </div>
      </div>
      {/* SEARCH SECTION */}
      <div className='main-search'>
          <div className='card-inner'>
            <h3>Filtro por Ruta</h3>
            <BsSearch     className='card_icon'/>
          </div>
          <div className='card-inner-bottom'>
            <p>Puedes buscar una ruta específica para obtener información detallada. Simplemente selecciona una ruta y haz clic en el botón para acceder a todos los detalles disponibles.</p>
          </div>
          <div className='search-combo'>
            <ComboBox/>
            <button className='card-button-search'>Entrar</button>
          </div>
      </div>
    </main>
  )
}

export default Home