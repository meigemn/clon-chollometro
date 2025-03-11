import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import HomePage from './components/homepage/Home-Page';
import { CartProvider } from './context/CartContext';

const App = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    return (
        <CartProvider>
            <Navbar onSearch={handleSearch} />
            <HomePage searchQuery={searchQuery} />
        </CartProvider>
    );
};

export default App;