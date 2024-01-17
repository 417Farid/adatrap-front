import { useFetch } from '../../utils/useFetch';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const Bars = () => {
  const { data } = useFetch("http://127.0.0.1:8000/frecuencia-mes");

  const getNombreMes = (numeroMes) => {
    const meses = [
      "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
      "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    return meses[numeroMes - 1]; // Restamos 1 porque los meses en el array comienzan desde 0
  };

  // Obtener los nombres y valores de la respuesta JSON
  const meses = data?.map((item) => getNombreMes(item.mes));
  const promedios = data?.map((item) => item.promedio_diferencia_mes);

  // Definir la configuración del gráfico
  const options = {
    responsive: true,
    animation: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        min: 0,
        max: 5,
        ticks: { color: 'white' },
      },
      x: {
        ticks: { color: 'white' },
      },
    },
  };

  // Crear el objeto de datos para el gráfico
  const chartData = {
    labels: meses,
    datasets: [
      {
        label: 'Frecuencia (min)',
        data: promedios,
        backgroundColor: 'rgba(0, 0, 255, 0.5)',
      },
    ],
  };

  return <Bar data={chartData} options={options} />;
};

export default Bars;
