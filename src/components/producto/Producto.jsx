import PropTypes from 'prop-types';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

export default function Producto({ imagenProducto, nombreProducto, descripcion, categoria, rating }) {
    const getStars = (rate) => {
        const stars = [];
        const fullStars = Math.floor(rate);
        const hasHalfStar = rate - fullStars >= 0.5;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<FaStar key={i} className="text-yellow-500" />);
        }

        if (hasHalfStar) {
            stars.push(<FaStarHalfAlt key="half" className="text-yellow-500" />);
        }

        const emptyStars = 5 - stars.length;
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-500" />);
        }

        return stars;
    };

    return (
        <div className="flex flex-col md:flex-row w-full p-4 border-2 border-gray-300 rounded-md shadow-lg my-4 bg-white">
            {/* Imagen del producto */}
            <div className="w-full md:w-[300px] h-[150px] md:h-full mb-4 md:mb-0">
                <img
                    src={imagenProducto}
                    alt={nombreProducto}
                    className="w-full h-full rounded-md object-cover"
                />
            </div>

            {/* Detalles del producto */}
            <div className="flex flex-col w-full md:ml-4">
                <div className="flex justify-end mb-2 text-sm text-gray-500">
                    {categoria}
                </div>
                <div className="flex flex-col items-start justify-between">
                    <div className="text-lg font-semibold cursor-pointer">
                        {nombreProducto}
                    </div>
                    <section className="mt-2">
                        <div className="flex items-center">
                            {getStars(rating.rate)}
                            <span className="ml-2 text-gray-500">({rating.count})</span>
                        </div>
                    </section>
                    <section className="mt-4">
                        <p className="text-gray-700">{descripcion}</p>
                    </section>
                </div>
            </div>
        </div>
    );
}

Producto.propTypes = {
    imagenProducto: PropTypes.string.isRequired,
    nombreProducto: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    categoria: PropTypes.string.isRequired,
    rating: PropTypes.shape({
        rate: PropTypes.number.isRequired,
        count: PropTypes.number.isRequired,
    }).isRequired,
};