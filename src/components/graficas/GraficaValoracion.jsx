import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    Title, // Importamos el plugin Title
} from 'chart.js';
import { FiX } from 'react-icons/fi'; // Importamos el ícono de cierre
import '../../assets/css/Modal.css'; // Importamos el archivo CSS

// Registrar los componentes necesarios de Chart.js
ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    Title // Registramos el plugin Title
);

const GraficaValoracion = ({ valoraciones, onClose }) => {
    // Agrupar productos por valoración y contar cuántos hay en cada grupo
    const ratingCounts = valoraciones.reduce((acc, producto) => {
        const rate = Math.floor(producto.rating.rate); // Redondear la valoración al entero más cercano
        acc[rate] = (acc[rate] || 0) + 1; // Incrementar el contador para esta valoración
        return acc;
    }, {});

    // Preparar los datos para el gráfico
    const data = {
        labels: Object.keys(ratingCounts).map(rate => `${rate} estrellas`), // Etiquetas para cada segmento
        datasets: [
            {
                label: 'Cantidad de productos', // Leyenda del gráfico
                data: Object.values(ratingCounts), // Datos de cantidad de productos por valoración
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)', // Color para el primer segmento
                    'rgba(54, 162, 235, 0.6)', // Color para el segundo segmento
                    'rgba(75, 192, 192, 0.6)', // Color para el tercer segmento
                    'rgba(153, 102, 255, 0.6)', // Color para el cuarto segmento
                    'rgba(255, 159, 64, 0.6)', // Color para el quinto segmento
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)', // Borde para el primer segmento
                    'rgba(54, 162, 235, 1)', // Borde para el segundo segmento
                    'rgba(75, 192, 192, 1)', // Borde para el tercer segmento
                    'rgba(153, 102, 255, 1)', // Borde para el cuarto segmento
                    'rgba(255, 159, 64, 1)', // Borde para el quinto segmento
                ],
                borderWidth: 1, // Ancho del borde
                
            },
        ],
    };

    // Opciones del gráfico
    const options = {
        responsive: true, // Hacer el gráfico responsivo
        plugins: {
            legend: {
                position: 'top', // Posición de la leyenda
            },
            title: {
                display: true, // Mostrar el título
                text: 'Distribución de Valoraciones', // Texto del título
                font: {
                    size: 20, // Tamaño de la fuente
                    weight: 'bold', // Peso de la fuente
                },
                padding: {
                    top: 10, // Espaciado superior
                    bottom: 20, // Espaciado inferior
                },
            },
        },
    };

    return (
        <div className="modal-backdrop-producto">
            <div className="modal-content-producto">
                {/* Botón de cierre */}
                <button
                    onClick={onClose}
                    className="modal-close-button-producto"
                >
                    <FiX className="h-6 w-6" />
                </button>

                {/* Gráfico de valoraciones */}
                <div className="p-6  w-[500px] h-[500px]">
                    <Doughnut data={data} options={options} />
                </div>
            </div>
        </div>
    );
};

export default GraficaValoracion;