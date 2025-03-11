import { useState, useEffect } from 'react';
import ProductoConCarrito from '../producto/ProductoConCarrito';

export default function HomePage({ searchQuery }) {
    const [productos, setProductos] = useState([]);
    const [filteredProductos, setFilteredProductos] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                if (!response.ok) throw new Error('Error al cargar productos');
                const data = await response.json();
                const dataWithExtraFields = data.map(producto => ({
                    ...producto,
                    publicadoHace: Math.floor(Math.random() * 10) + 1,
                    precioActual: producto.price,
                    precioAntiguo: producto.price * 2,
                    sitioVenta: "example.com",
                    nombreUsuario: "Usuario anónimo"
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
                        descripcion={producto.description}
                        categoria={producto.category}
                        rating={producto.rating}
                        precio={producto.price}
                        id={producto.id}
                    />
                ))}
            </div>
        </div>
    );
}
