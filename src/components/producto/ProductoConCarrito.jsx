import PropTypes from 'prop-types';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';
import { useState } from 'react'; // Importamos useState para controlar el modal
import { motion, AnimatePresence } from 'framer-motion'; // Importamos Framer Motion
import Producto from './Producto'; // Importamos el componente Producto
import '../../assets/css/Modal.css'; // Importamos el archivo CSS actualizado

export default function ProductoConCarrito({ imagenProducto, nombreProducto, descripcion, categoria, rating, precio, id }) {
    const { addToCart } = useCart();
    const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar el modal del producto
    const [isImageModalOpen, setIsImageModalOpen] = useState(false); // Estado para controlar el modal de la imagen ampliada

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

    const handleAddToCart = () => {
        const product = { imagenProducto, nombreProducto, precio, id };
        addToCart(product);
    };

    const handleNombreClick = () => {
        setIsModalOpen(true); // Abrir el modal del producto al hacer clic en el nombre
    };

    const handleImageClick = () => {
        setIsImageModalOpen(true); // Abrir el modal de la imagen ampliada al hacer clic en la imagen
    };

    const handleCloseModal = () => {
        setIsModalOpen(false); // Cerrar el modal del producto
        setIsImageModalOpen(false); // Cerrar el modal de la imagen ampliada
    };

    return (
        <div className="flex flex-col md:flex-row w-full p-4 border-2 border-black rounded-md shadow-2xl my-4 bg-white  hover:shadow-xl hover:border-amber-400">
            {/* Imagen del producto */}
            <div
                className="w-full md:w-[300px] h-[150px] md:h-full mb-4 md:mb-0 bg-contain bg-center rounded-md cursor-zoom-in" // cursor-zoom-in para la lupa
                style={{ backgroundImage: `url(${imagenProducto})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
                onClick={handleImageClick} // Abrir el modal de la imagen ampliada al hacer clic
            ></div>

            {/* Detalles del producto */}
            <div className="flex flex-col w-full md:ml-4 h-full">
                {/* Categoría */}
                <div className="flex justify-end mb-2 text-sm text-gray-500">
                    {categoria}
                </div>

                {/* Nombre del producto */}
                <div
                    className="text-lg font-semibold cursor-pointer mb-2 hover:underline"
                    onClick={handleNombreClick} // Abrir el modal del producto al hacer clic en el nombre
                >
                    {nombreProducto}
                </div>

                {/* Espacio flexible para empujar el precio y las estrellas hacia abajo */}
                <div className="flex-grow"></div>

                {/* Rating y Precio */}
                <div className="flex items-center justify-between mb-4">
                    {/* Estrellas */}
                    <div className="flex items-center">
                        {getStars(rating.rate)}
                        <span className="ml-2 text-gray-500">({rating.count})</span>
                    </div>

                    {/* Precio */}
                    <p className="text-lg font-bold text-gray-800">
                        {precio}€
                    </p>
                </div>

                {/* Botón "Añadir al carrito" */}
                <button
                    onClick={handleAddToCart}
                    className="w-full px-4 py-2 bg-blue-500 text-white rounded-md active:bg-blue-600 hover:cursor-pointer transition-transform transform hover:-translate-y-1 active:scale-95"
                >
                    Añadir al carrito
                </button>
            </div>

            {/* Modal para mostrar el componente Producto */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        className="modal-backdrop-producto"
                        onClick={handleCloseModal} // Cerrar el modal al hacer clic fuera
                        initial={{ opacity: 0 }} // Estado inicial de la animación
                        animate={{ opacity: 1 }} // Estado animado
                        exit={{ opacity: 0 }} // Estado al cerrar
                        transition={{ duration: 0.3 }} // Duración de la animación
                    >
                        <motion.div
                            className="modal-content-producto"
                            onClick={(e) => e.stopPropagation()} // Evitar que el modal se cierre al hacer clic dentro
                            initial={{ scale: 0.8, opacity: 0 }} // Estado inicial de la animación
                            animate={{ scale: 1, opacity: 1 }} // Estado animado
                            exit={{ scale: 0.8, opacity: 0 }} // Estado al cerrar
                            transition={{ duration: 0.3 }} // Duración de la animación
                        >
                            <button
                                onClick={handleCloseModal}
                                className="modal-close-button-producto"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            {/* Mostrar el componente Producto dentro del modal */}
                            <Producto
                                imagenProducto={imagenProducto}
                                nombreProducto={nombreProducto}
                                descripcion={descripcion}
                                categoria={categoria}
                                rating={rating}
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Modal para la imagen ampliada */}
            <AnimatePresence>
                {isImageModalOpen && (
                    <motion.div
                        className="modal-backdrop-producto"
                        onClick={handleCloseModal} // Cerrar el modal al hacer clic fuera
                        initial={{ opacity: 0 }} // Estado inicial de la animación
                        animate={{ opacity: 1 }} // Estado animado
                        exit={{ opacity: 0 }} // Estado al cerrar
                        transition={{ duration: 0.3 }} // Duración de la animación
                    >
                        <motion.div
                            className="modal-content-producto"
                            onClick={(e) => e.stopPropagation()} // Evitar que el modal se cierre al hacer clic dentro
                            initial={{ scale: 0.8, opacity: 0 }} // Estado inicial de la animación
                            animate={{ scale: 1, opacity: 1 }} // Estado animado
                            exit={{ scale: 0.8, opacity: 0 }} // Estado al cerrar
                            transition={{ duration: 0.3 }} // Duración de la animación
                        >
                            <button
                                onClick={handleCloseModal}
                                className="modal-close-button-producto"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            {/* Imagen ampliada */}
                            <img
                                src={imagenProducto}
                                alt={nombreProducto}
                                className="max-w-full max-h-[80vh] object-contain" // Limitar el tamaño de la imagen
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
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
    precio: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
};