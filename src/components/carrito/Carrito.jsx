import React from 'react';
import ReactDOM from 'react-dom';
import { useCart } from '../../context/CartContext';
import './Carrito.css'; // Importa el archivo CSS actualizado
import Lottie from 'lottie-react'; // Importa el componente Lottie
import carritoVacioAnimation from '../../assets/animacion_lottie_fantasma.json'; // Importa el archivo JSON de Lottie
import animacionDescuento from '../../assets/animacion_descuento.json'; // Importa la animación de descuento

const Carrito = ({ setIsCartVisible }) => {
    const { cartItems, removeFromCart, increaseQuantity } = useCart();

    // Calcular el importe total sin descuento
    const totalAmount = cartItems.reduce((total, item) => total + item.precio * item.quantity, 0);

    // Aplicar descuento del 50% si el total es igual o superior a 200
    const discountThreshold = 200;
    const discount = totalAmount >= discountThreshold ? totalAmount * 0.5 : 0;
    const totalWithDiscount = totalAmount - discount;

    return ReactDOM.createPortal(
        <>
            {/* Fondo semi-transparente con desenfoque */}
            <div className="modal-backdrop-carrito"></div>

            {/* Contenedor del modal */}
            <div className="modal-content-carrito">
                <div className="bg-white w-full max-w-sm mx-6 p-4 rounded-lg shadow-lg max-h-[80vh] overflow-y-auto">
                    {/* Encabezado del carrito */}
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold text-gray-800">Carrito de compras</h2>
                        <button
                            onClick={() => setIsCartVisible(false)}
                            className="text-gray-500 hover:text-gray-700"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Lista de productos o animación Lottie cuando el carrito está vacío */}
                    {cartItems.length === 0 ? (
                        <div className="flex flex-col items-center justify-center">
                            <Lottie
                                animationData={carritoVacioAnimation} // Archivo JSON de la animación
                                loop={true} // Repetir la animación
                                autoplay={true} // Reproducir automáticamente
                                style={{ width: 150, height: 150 }} // Tamaño de la animación
                            />
                            <p className="text-gray-600 mt-4">Tu carrito está vacío.</p>
                        </div>
                    ) : (
                        <ul className="space-y-3">
                            {cartItems.map((item) => (
                                <li key={item.cartItemId} className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <img src={item.imagenProducto} alt={item.nombreProducto} className="w-12 h-12 object-cover rounded-lg" />
                                        <div className="ml-3">
                                            <p className="font-semibold text-gray-800 text-sm">{item.nombreProducto}</p>
                                            <p className="text-xs text-gray-500">${item.precio.toFixed(2)}</p>
                                            <p className="text-xs text-gray-500">Cantidad: {item.quantity}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        {/* Botón de sumar */}
                                        <button
                                            onClick={() => increaseQuantity(item.cartItemId)}
                                            className="text-green-500 hover:text-green-700"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                            </svg>
                                        </button>
                                        {/* Botón de restar (papelera) */}
                                        <button
                                            onClick={() => removeFromCart(item.cartItemId)}
                                            className="text-red-500 hover:text-red-700"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}

                    {/* Animación de descuento si el total es igual o superior a 200 */}
                    {totalAmount >= discountThreshold && (
                        <div className="flex flex-col items-center justify-center mt-4">
                            <Lottie
                                animationData={animacionDescuento} // Archivo JSON de la animación de descuento
                                loop={true} // Repetir la animación
                                autoplay={true} // Reproducir automáticamente
                                style={{ width: 100, height: 100 }} // Tamaño de la animación
                            />
                            <p className="text-green-600 font-semibold text-sm mt-2">¡Descuento del 50% aplicado!</p>
                        </div>
                    )}

                    {/* Importe total */}
                    <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="flex justify-between items-center">
                            <p className="text-gray-600 text-sm">Subtotal:</p>
                            <p className="text-lg font-bold text-gray-800">{totalAmount.toFixed(2)} €</p>
                        </div>
                        {totalAmount >= discountThreshold && (
                            <div className="flex justify-between items-center mt-2">
                                <p className="text-gray-600 text-sm">Descuento (50%):</p>
                                <p className="text-lg font-bold text-red-600">-{discount.toFixed(2)} €</p>
                            </div>
                        )}
                        <div className="flex justify-between items-center mt-2">
                            <p className="text-gray-600 text-sm">Total:</p>
                            <p className="text-lg font-bold text-gray-800">{totalWithDiscount.toFixed(2)} €</p>
                        </div>
                    </div>

                    {/* Botones de acción */}
                    <div className="mt-4 space-y-2">
                        <button
                            onClick={() => setIsCartVisible(false)}
                            className="w-full bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors hover:cursor-pointer text-sm"
                        >
                            Seguir comprando
                        </button>
                        {cartItems.length > 0 && (
                            <button
                                onClick={() => alert('Proceso de pago no implementado')}
                                className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                            >
                                Proceder al pago
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </>,
        document.getElementById('cart-root') // Renderizar en el portal
    );
};

export default Carrito;