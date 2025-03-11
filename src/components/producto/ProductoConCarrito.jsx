import PropTypes from 'prop-types';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

export default function ProductoConCarrito({ imagenProducto, nombreProducto, descripcion, categoria, rating, onAddToCart }) {
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
        <div className="flex flex-col md:flex-row w-full p-4 border-2 border-black rounded-md shadow-2xl my-4 bg-white">
            {/* div que contiene la imagen como fondo */}
            <div
                className="w-full md:w-[300px] h-[150px] md:h-full mb-4 md:mb-0 bg-contain bg-center rounded-md"
                style={{ backgroundImage: `url(${imagenProducto})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
            ></div>
            <div className="flex flex-col w-full md:ml-4">
                <div className="flex justify-end mb-2 text-sm text-gray-500">
                    {categoria}
                </div>
                <div className="flex flex-col items-start justify-between h-full">
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
                    <button
                        onClick={onAddToCart}
                        className="mt-auto px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 hover:cursor-pointer transition-transform transform hover:-translate-y-1"
                    >
                        Añadir al carrito
                    </button>
                </div>
            </div>
        </div>
    );
}

ProductoConCarrito.propTypes = {
    imagenProducto: PropTypes.string.isRequired,
    nombreProducto: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    categoria: PropTypes.string.isRequired,
    rating: PropTypes.shape({
        rate: PropTypes.number.isRequired,
        count: PropTypes.number.isRequired,
    }).isRequired,
    onAddToCart: PropTypes.func.isRequired,
};
