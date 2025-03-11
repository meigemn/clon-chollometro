import { useState, useEffect } from 'react';
import ProductoConCarrito from "../producto/ProductoConCarrito";

export default function HomePage({ searchQuery }) {
    const [productos, setProductos] = useState([]);
    const [filteredProductos, setFilteredProductos] = useState([]);
    const [error, setError] = useState(null);
    const [carrito, setCarrito] = useState([]);

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                if (!response.ok) throw new Error('Error al cargar productos');
                const data = await response.json();
                const dataWithExtraFields = data.map(producto => ({
                    ...producto,
                    publicadoHace: Math.floor(Math.random() * 10) + 1, // Ejemplo de valor aleatorio
                    precioActual: producto.price,
                    precioAntiguo: producto.price * 2, // Ejemplo de valor aleatorio
                    sitioVenta: "example.com", // Ejemplo de valor fijo
                    nombreUsuario: "Usuario anónimo" // Ejemplo de valor fijo
                }));
                setProductos(dataWithExtraFields);
                setFilteredProductos(dataWithExtraFields);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchProductos();
    }, []);

    useEffect(() => {
        if (searchQuery) {
            const filtered = productos.filter(producto =>
                producto.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredProductos(filtered);
        } else {
            setFilteredProductos(productos);
        }
    }, [searchQuery, productos]);

    const handleAddToCart = (producto) => {
        setCarrito(prevCarrito => [...prevCarrito, producto]);
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredProductos.map(producto => (
                    <ProductoConCarrito
                        key={producto.id}
                        imagenProducto={producto.image}
                        nombreProducto={producto.title}
                        publicadoHace={producto.publicadoHace}
                        precioActual={producto.precioActual}
                        precioAntiguo={producto.precioAntiguo}
                        sitioVenta={producto.sitioVenta}
                        nombreUsuario={producto.nombreUsuario}
                        rating={producto.rating}
                        onAddToCart={() => handleAddToCart(producto)}
                    />
                ))}
            </div>
            <div className="mt-8">
                <h2 className="text-2xl font-semibold">Carrito</h2>
                {carrito.length === 0 ? (
                    <p>El carrito está vacío.</p>
                ) : (
                    <ul>
                        {carrito.map((producto, index) => (
                            <li key={index} className="flex items-center justify-between p-2 border-b border-gray-200">
                                <span>{producto.title}</span>
                                <span>${producto.price}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
