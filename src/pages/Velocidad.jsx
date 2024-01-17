import React from 'react';
import { useState, useEffect } from "react";
import { useFetch } from '../utils/useFetch';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Grid, Typography, Divider, Button } from '@mui/material';
import GrafiVeloRuta from '../components/graficos-velocidad/grafiVeloRuta';
import GrafiVeloHoras from '../components/graficos-velocidad/grafiVeloHoras';
import GrafiVeloRutR from '../components/graficos-velocidad/grafiVeloRutR';
import GrafiVeloMes from '../components/graficos-velocidad/grafiVeloMes';
import GrafiVeloDia from '../components/graficos-velocidad/grafiVeloDia';

function Velocidad() {
  // Variables
  const GridRutas = React.createRef();
  const GridHoras = React.createRef();
  const GridRutR = React.createRef();
  const GridMes = React.createRef();
  const GridDia = React.createRef();
  const [dataRutas, setDataRutas] = useState(null);
  const [dataHoras, setDataHoras] = useState(null);
  const [dataRutR, setDataRutR] = useState(null);
  const [dataMes, setDataMes] = useState(null);
  const [dataDia, setDataDia] = useState(null);

  // Creacion Atajos
  const scrollToGridRutas = () => {
    if (GridRutas.current) {
      GridRutas.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToGridHoras = () => {
    if (GridHoras.current) {
      GridHoras.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToGridRutR = () => {
    if (GridRutR.current) {
      GridRutR.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToGridMes = () => {
    if (GridMes.current) {
      GridMes.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToGridDia = () => {
    if (GridDia.current) {
      GridDia.current.scrollIntoView({ behavior: 'smooth' });
    }
  };


  useEffect(() => {
    fetch("http://127.0.0.1:8000/velocidad-rutas")
      .then((response) => response.json())
      .then((dataRutas) => setDataRutas(dataRutas))

    fetch("http://127.0.0.1:8000/velocidad-horas")
      .then((response) => response.json())
      .then((dataHoras) => setDataHoras(dataHoras))

    fetch("http://127.0.0.1:8000/velocidad-cincoRutas")
      .then((response) => response.json())
      .then((dataRutR) => setDataRutR(dataRutR))

    fetch("http://127.0.0.1:8000/velocidad-mes")
      .then((response) => response.json())
      .then((dataMes) => setDataMes(dataMes))

    fetch("http://127.0.0.1:8000/velocidad-dia")
      .then((response) => response.json())
      .then((dataDia) => setDataDia(dataDia))
  }, []);


  return (
    <div className='main-container'>
      <div className='main-title'>
        <Typography variant="h3" textAlign="center" p={3}>
          Velocidad de Viaje
        </Typography>
        <Typography variant="h6" p={3} textAlign="center" >
          Velocidad promedio de los vehículos durante su recorrido.
        </Typography>
      </div>
      <Divider sx={{ backgroundColor: 'white', p: 0, m: 0 }} />
      {/* Graficos Pequenios */}
      <Grid container spacing={{ xs: 2, sm: 2, md: 2 }} columns={{ xs: 12, sm: 6, md: 12 }} padding={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <BarChart
            width={300}
            height={300}
            data={dataRutas}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="nombre" tick={false} label={{ value: 'Horas del dia', position: 'insideRight' }} />
            <YAxis label={{ value: 'Frecuencia(min)', angle: -90, position: 'insideLeft' }} />
            <Legend />
            <Bar dataKey="promedio_velocidad_ruta" fill="#32e662" activeBar={<Rectangle fill="pink" stroke="red" />} />
          </BarChart>
          <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            <Button onClick={scrollToGridRutas}>Mas informacion</Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <BarChart
            width={300}
            height={300}
            data={dataHoras}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="hora" tick={false} label={{ value: 'Meses', position: 'insideRight' }} />
            <YAxis label={{ value: 'Frecuencia(min)', angle: -90, position: 'insideLeft' }} />
            <Legend />
            <Bar dataKey="promedio_velocidad_hora" fill="#32e662" activeBar={<Rectangle fill="pink" stroke="red" />} />
          </BarChart>
          <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            <Button onClick={scrollToGridHoras}>Mas informacion</Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <BarChart
            width={300}
            height={300}
            data={dataRutR}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="nombre" tick={false} label={{ value: 'Rutas', position: 'insideRight' }} />
            <YAxis label={{ value: 'Frecuencia(min)', angle: -90, position: 'insideLeft' }} />
            <Legend />
            <Bar dataKey="promedio_velocidad_ruta" fill="#32e662" activeBar={<Rectangle fill="pink" stroke="red" />} />
          </BarChart>
          <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            <Button onClick={scrollToGridRutR}>Mas informacion</Button>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={{ xs: 2, sm: 2, md: 2 }} columns={{ xs: 12, sm: 6, md: 12 }} padding={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <BarChart
            width={300}
            height={300}
            data={dataMes}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="mes" tick={false} label={{ value: 'Dias de la Semana', position: 'insideRight' }} />
            <YAxis label={{ value: 'Frecuencia(min)', angle: -90, position: 'insideLeft' }} />
            <Legend />
            <Bar dataKey="promedio_velocidad_mes" fill="#32e662" activeBar={<Rectangle fill="pink" stroke="red" />} />
          </BarChart>
          <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            <Button onClick={scrollToGridMes}>Mas informacion</Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <BarChart
            width={300}
            height={300}
            data={dataDia}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="dia_semana" tick={false} label={{ value: 'Dias de la Semana', position: 'insideRight' }} />
            <YAxis label={{ value: 'Frecuencia(min)', angle: -90, position: 'insideLeft' }} />
            <Legend />
            <Bar dataKey="promedio_velocidad_dia_semana" fill="#32e662" activeBar={<Rectangle fill="pink" stroke="red" />} />
          </BarChart>
          <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            <Button onClick={scrollToGridDia}>Mas informacion</Button>
          </div>
        </Grid>
      </Grid>
      <Divider sx={{ backgroundColor: 'white', p: 0, m: 0 }} />
      {/* Graficos Grandes */}
      <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'center' }}>
        {/*  VELOCIDAD EN RUTAS */}
        <Grid item xs={12} lg={12} ref={GridRutas}>
          <Typography variant="h3" textAlign="center" p={3}>
            Velocidad en Rutas
          </Typography>
          <Typography variant="h6" p={3} textAlign="center" >
            Calculada a partir del promedio de la velocidad en la ruta.
          </Typography>
          <GrafiVeloRuta />
          <Divider sx={{ backgroundColor: 'white', p: 0, marginTop: 2 }} />
        </Grid>
        {/*  VELOCIDAD EN HORAS*/}
        <Grid item xs={12} lg={12} ref={GridHoras}>
          <Typography variant="h3" textAlign="center" p={3}>
            Velocidad en Horas del Dia
          </Typography>
          <Typography variant="h6" p={3} textAlign="center" >
            Calculada a partir del promedio de la velocidad en las Horas del Dia.
          </Typography>
          <GrafiVeloHoras />
          <Divider sx={{ backgroundColor: 'white', p: 0, marginTop: 2 }} />
        </Grid>
        {/*  VELOCIDAD EN RUTAS MAS RAPIDAS */}
        <Grid item xs={12} lg={12} ref={GridRutR}>
          <Typography variant="h3" textAlign="center" p={3}>
            Rutas con Mayor Velocidad
          </Typography>
          <Typography variant="h6" p={3} textAlign="center" >
            Calculada a partir del promedio de la velocidad en las rutas especificando las 5 con mayor promedio.
          </Typography>
          <GrafiVeloRutR />
          <Divider sx={{ backgroundColor: 'white', p: 0, marginTop: 2 }} />
        </Grid>
        {/*  VELOCIDAD EN MESES */}
        <Grid item xs={12} lg={12} ref={GridMes}>
          <Typography variant="h3" textAlign="center" p={3}>
            Meses del año con Mayor Velocidad
          </Typography>
          <Typography variant="h6" p={3} textAlign="center" >
            Calculada a partir del promedio de la velocidad en los meses del año, especificando las 5 con mayor velocidad.
          </Typography>
          <GrafiVeloMes />
          <Divider sx={{ backgroundColor: 'white', p: 0, marginTop: 2 }} />
        </Grid>
        {/*  VELOCIDAD EN DIAS */}
        <Grid item xs={12} lg={12} ref={GridDia}>
          <Typography variant="h3" textAlign="center" p={3}>
            Dias del año con Mayor Velocidad
          </Typography>
          <Typography variant="h6" p={3} textAlign="center" >
            Calculada a partir del promedio de la velocidad en los dias del año.
          </Typography>
          <GrafiVeloDia />
          <Divider sx={{ backgroundColor: 'white', p: 0, marginTop: 2 }} />
        </Grid>
      </Grid>
    </div>
  )
}

export default Velocidad