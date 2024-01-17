import React from 'react';
import { useState, useEffect } from "react";
import { useFetch } from '../utils/useFetch';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Grid, Typography, Divider, Button } from '@mui/material';
import GrafiFrecuRuta from '../components/graficos-frecuencia/grafiFrecuRuta';
import GrafiFrecuMes from '../components/graficos-frecuencia/grafiFrecuMes';
import GrafiFrecuDia from '../components/graficos-frecuencia/grafiFrecuDia';
import GrafiFrecuHora from '../components/graficos-frecuencia/grafiFrecuHora';

function Frecuencia() {
  // Variables
  const GridHoras = React.createRef();
  const GridMes = React.createRef();
  const GridDia = React.createRef();
  const GridRuta = React.createRef();
  const [dataMes, setDataMes] = useState(null);
  const [dataHora, setDataHora] = useState(null);
  const [dataDia, setDataDia] = useState(null);
  const { data } = useFetch("http://127.0.0.1:8000/frecuencia-rutas");

  // Creacion Atajos
  const scrollToGridHoras = () => {
    if (GridHoras.current) {
      GridHoras.current.scrollIntoView({ behavior: 'smooth' });
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
  const scrollToGridRuta = () => {
    if (GridRuta.current) {
      GridRuta.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    fetch("http://127.0.0.1:8000/frecuencia-mes")
      .then((response) => response.json())
      .then((dataMes) => setDataMes(dataMes))

    fetch("http://127.0.0.1:8000/frecuencia-hora")
      .then((response) => response.json())
      .then((dataHora) => setDataHora(dataHora))

    fetch("http://127.0.0.1:8000/frecuencia-dia")
      .then((response) => response.json())
      .then((dataDia) => setDataDia(dataDia))
  }, []);

  return (
    <div className='main-container'>
      <div className='main-title'>
        <Typography variant="h3" textAlign="center" p={3}>
          Frecuencia de Despacho
        </Typography>
        <Typography variant="h6" p={3} textAlign="center" >
          Tiempo que transcurre entre el envío de un vehículo y otro.
        </Typography>
      </div>
      <Divider sx={{ backgroundColor: 'white', p: 0, m: 0 }} />
      {/* Graficos Pequenios */}
      <Grid container spacing={{ xs: 2, sm: 2, md: 2 }} columns={{ xs: 12, sm: 6, md: 12 }} padding={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <BarChart
            width={300}
            height={300}
            data={dataHora}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="hora" tick={false} label={{ value: 'Horas del dia', position: 'insideRight' }} />
            <YAxis label={{ value: 'Frecuencia(min)', angle: -90, position: 'insideLeft' }} />
            <Legend />
            <Bar dataKey="promedio_diferencia_hora" fill="#32e662" activeBar={<Rectangle fill="pink" stroke="red" />} />
          </BarChart>
          <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            <Button onClick={scrollToGridHoras}>Mas informacion</Button>
          </div>
        </Grid>
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
            <XAxis dataKey="mes" tick={false} label={{ value: 'Meses', position: 'insideRight' }} />
            <YAxis label={{ value: 'Frecuencia(min)', angle: -90, position: 'insideLeft' }} />
            <Legend />
            <Bar dataKey="promedio_diferencia_mes" fill="#32e662" activeBar={<Rectangle fill="pink" stroke="red" />} />
          </BarChart>
          <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            <Button onClick={scrollToGridMes}>Mas informacion</Button>
          </div>
        </Grid> 
        <Grid item xs={12} sm={6} md={4}>
          <BarChart
            width={300}
            height={300}
            data={data}
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
            <Bar dataKey="promedio_diferencia_ruta" fill="#32e662" activeBar={<Rectangle fill="pink" stroke="red" />} />
          </BarChart>
          <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            <Button onClick={scrollToGridRuta}>Mas informacion</Button>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={{ xs: 2, sm: 2, md: 2 }} columns={{ xs: 12, sm: 6, md: 12 }} padding={2} justifyContent="center">
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
            <Bar dataKey="promedio_diferencia_dia_semana" fill="#32e662" activeBar={<Rectangle fill="pink" stroke="red" />} />
          </BarChart>
          <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            <Button onClick={scrollToGridDia}>Mas informacion</Button>
          </div>
        </Grid>
      </Grid>
      <Divider sx={{ backgroundColor: 'white', p: 0, m: 0 }} />
      {/* Graficos Grandes */}
      <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'center' }}>
        {/*  FRECUENCIA EN HORAS */}
        <Grid item xs={12} lg={12} ref={GridHoras}>
          <Typography variant="h3" textAlign="center" p={3}>
            Frecuencia por Horas del Dia
          </Typography>
          <Typography variant="h6" p={3} textAlign="center" >
            Calculada a partir del promedio del tiempo entre envíos consecutivos en cada hora del dia. Usando las siguientes variables:
          </Typography>
          <GrafiFrecuHora />
          <Divider sx={{ backgroundColor: 'white', p: 0, marginTop: 2 }} />
        </Grid>
        {/*  FRECUENCIA EN MESES */}
        <Grid item xs={12} lg={12} ref={GridMes}>
          <Typography variant="h3" textAlign="center" p={3}>
            Frecuencia por Meses
          </Typography>
          <Typography variant="h6" p={3} textAlign="center" >
            Calculada a partir del promedio del tiempo entre envíos consecutivos en cada mes. Usando las siguientes variables:
          </Typography>
          <GrafiFrecuMes />
          <Divider sx={{ backgroundColor: 'white', p: 0, marginTop: 2 }} />
        </Grid>
        {/*  FRECUENCIA EN RUTAS */}
        <Grid item xs={12} lg={12} ref={GridRuta}>
          <Typography variant="h3" textAlign="center" p={3}>
            Frecuencia por Rutas
          </Typography>
          <Typography variant="h6" p={3} textAlign="center" >
            Calculada a partir del promedio del tiempo entre envíos consecutivos en la misma ruta.
            Usando las siguientes variables:
          </Typography>
          <GrafiFrecuRuta />
          <Divider sx={{ backgroundColor: 'white', p: 0, marginTop: 2 }} />
        </Grid>
        {/*  FRECUENCIA EN DIAS SEMANA */}
        <Grid item xs={12} lg={12} ref={GridDia}>
          <Typography variant="h3" textAlign="center" p={3}>
            Frecuencia por Dias de la Semana
          </Typography>
          <Typography variant="h6" p={3} textAlign="center" >
            Calculada a partir del promedio del tiempo entre envíos consecutivos en cada dia de la semana. Usando las siguientes variables:
          </Typography>
          <GrafiFrecuDia />
          <Divider sx={{ backgroundColor: 'white', p: 0, marginTop: 2 }} />
        </Grid>
      </Grid>
    </div>
  )
}

export default Frecuencia