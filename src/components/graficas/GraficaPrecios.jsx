import React from 'react';
import { Radar } from 'react-chartjs-2'; // Cambiamos Scatter por Radar
import {
    Chart as ChartJS,
    RadialLinearScale, // Escala radial para gráficos de radar
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
    Title,
} from 'chart.js';
import { FiX } from 'react-icons/fi';
import '../../assets/css/Modal.css';

// Registrar los componentes necesarios de Chart.js
ChartJS.register(
    RadialLinearScale, // Escala radial
    PointElement,
    LineElement,
    Filler, // Para rellenar el área del radar
    Tooltip,
    Legend,
    Title
);

const GraficaPrecios = ({ productos, onClose }) => {
    // Agrupar productos por rango de precios
    const priceRanges = productos.reduce((acc, producto) => {
        const priceRange = Math.floor(producto.price / 10) * 10; // Agrupar por rangos de 10 en 10
        acc[priceRange] = (acc[priceRange] || 0) + 1; // Contar productos en cada rango
        return acc;
    }, {});

    // Preparar los datos para el gráfico de radar
    const data = {
        labels: Object.keys(priceRanges).map(range => `$${range}-${Number(range) + 10}`), // Etiquetas de rangos
        datasets: [
            {
                label: 'Cantidad de productos', // Leyenda del gráfico
                data: Object.values(priceRanges), // Datos de cantidad de productos por rango
                backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de relleno
                borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
                borderWidth: 2, // Ancho del borde
                
            },
        ],
    };

    // Opciones del gráfico
    const options = {
        responsive: true,
        scales: {
            r: {
                angleLines: {
                    display: true,
                },
                suggestedMin: 0, // Mínimo valor en el radar
                suggestedMax: Math.max(...Object.values(priceRanges)) + 2, // Máximo valor en el radar
            },
        },
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Distribución de Precios', // Título del gráfico
                font: {
                    size: 20,
                    weight: 'bold',
                },
                padding: {
                    top: 10,
                    bottom: 20,
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

                {/* Gráfico de radar */}
                <div className="p-6  w-[700px] h-[700px]">
                    <Radar data={data} options={options} />
                </div>
            </div>
        </div>
    );
};

export default GraficaPrecios;