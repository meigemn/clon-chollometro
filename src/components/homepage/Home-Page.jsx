import { useState, useEffect } from 'react';
import Producto from "../producto/Producto";

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
                setProductos(data);
                setFilteredProductos(data);
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
            {filteredProductos.map(producto => (
                <Producto
                    key={producto.id}
                    imagenProducto={producto.image}
                    nombreProducto={producto.title}
                    descripcion={producto.description}
                    categoria={producto.category}
                    rating={producto.rating}
                />
            ))}
        </div>
    );
}
