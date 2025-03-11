import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';

const InsertarProducto = ({ onClose, onInsert }) => {
    const [formData, setFormData] = useState({
        title: '',
        price: '',
        description: '',
        category: '',
        image: '', // URL de la imagen
        imageFile: null, // Archivo de imagen seleccionado
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData({
                ...formData,
                imageFile: file, // Guardar el archivo seleccionado
                image: URL.createObjectURL(file), // Mostrar una vista previa de la imagen
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newProduct = {
            title: formData.title,
            price: parseFloat(formData.price),
            description: formData.description,
            category: formData.category,
            image: formData.image, // Usar la URL de la imagen o la vista previa
            id: 0, // El ID lo genera la API
        };

        try {
            // Insertar el nuevo producto
            const response = await fetch('https://fakestoreapi.com/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newProduct),
            });

            if (!response.ok) throw new Error('Error al insertar el producto');

            const data = await response.json();

            // Actualizar el estado en el componente padre (Navbar)
            onInsert(data); // Pasar el nuevo producto al componente padre

            onClose(); // Cerrar el modal
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="modal-backdrop-producto">
            <div className="modal-content-producto w-11/12 max-w-2xl">
                {/* Botón de cierre */}
                <button
                    onClick={onClose}
                    className="modal-close-button-producto"
                >
                    <FiX className="h-6 w-6" />
                </button>

                {/* Formulario para insertar producto */}
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <h2 className="text-xl font-bold mb-4">Insertar Producto</h2>

                    {/* Campos del formulario */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Título</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Precio</label>
                        <input
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            step="0.1"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Descripción</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Categoría</label>
                        <input
                            type="text"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">URL de la imagen</label>
                        <input
                            type="url"
                            name="image"
                            value={formData.image}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">O subir una imagen</label>
                        <input
                            type="file"
                            name="imageFile"
                            onChange={handleFileChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            accept="image/*" // Aceptar solo archivos de imagen
                        />
                    </div>

                    {/* Vista previa de la imagen */}
                    {formData.image && (
                        <div className="mt-4">
                            <label className="block text-sm font-medium text-gray-700">Vista previa de la imagen</label>
                            <img
                                src={formData.image}
                                alt="Vista previa"
                                className="mt-2 w-32 h-32 object-cover rounded"
                            />
                        </div>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                    >
                        Insertar Producto
                    </button>
                </form>
            </div>
        </div>
    );
};

export default InsertarProducto;