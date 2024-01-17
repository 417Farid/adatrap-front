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
  const { data } = useFetch("http://127.0.0.1:8000/velocidad-dia");

  // Obtener los nombres y valores de la respuesta JSON
  const dias = data?.map((item) => item.dia_semana);
  const promedios = data?.map((item) => item.promedio_velocidad_dia_semana);

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
        max: 30,
        ticks: { color: 'white' },
      },
      x: {
        ticks: { color: 'white' },
      },
    },
  };

  // Crear el objeto de datos para el gráfico
  const chartData = {
    labels: dias,
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
