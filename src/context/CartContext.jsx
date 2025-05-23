import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    // Recuperar el carrito desde localStorage al iniciar
    const initialCart = JSON.parse(localStorage.getItem('cart')) || [];
    const [cartItems, setCartItems] = useState(initialCart);

    // Guardar el carrito en localStorage cada vez que cambie
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const existingItemIndex = prevItems.findIndex((item) => item.id === product.id);

            if (existingItemIndex !== -1) {
                // Si el producto ya está en el carrito, incrementar la cantidad
                const updatedItems = [...prevItems];
                updatedItems[existingItemIndex] = {
                    ...updatedItems[existingItemIndex],
                    quantity: updatedItems[existingItemIndex].quantity + 1,
                };
                return updatedItems;
            } else {
                // Si el producto no está en el carrito, añadirlo con cantidad 1 y un cartItemId único
                const newItem = {
                    ...product,
                    quantity: 1,
                    cartItemId: Date.now(), // Usamos un timestamp como id único
                };
                return [...prevItems, newItem];
            }
        });
    };

    const removeFromCart = (cartItemId) => {
        setCartItems((prevItems) => {
            const existingItemIndex = prevItems.findIndex((item) => item.cartItemId === cartItemId);

            if (existingItemIndex !== -1) {
                const existingItem = prevItems[existingItemIndex];

                if (existingItem.quantity > 1) {
                    // Si la cantidad es mayor que 1, reducir la cantidad
                    const updatedItems = [...prevItems];
                    updatedItems[existingItemIndex] = {
                        ...existingItem,
                        quantity: existingItem.quantity - 1,
                    };
                    return updatedItems;
                } else {
                    // Si la cantidad es 1, eliminar el producto del carrito
                    return prevItems.filter((item) => item.cartItemId !== cartItemId);
                }
            }
            return prevItems;
        });
    };

    const increaseQuantity = (cartItemId) => {
        setCartItems((prevItems) => {
            const existingItemIndex = prevItems.findIndex((item) => item.cartItemId === cartItemId);

            if (existingItemIndex !== -1) {
                // Incrementar la cantidad del producto
                const updatedItems = [...prevItems];
                updatedItems[existingItemIndex] = {
                    ...updatedItems[existingItemIndex],
                    quantity: updatedItems[existingItemIndex].quantity + 1,
                };
                return updatedItems;
            }
            return prevItems;
        });
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, increaseQuantity }}>
            {children}
        </CartContext.Provider>
    );
};