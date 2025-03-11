import './App.css';
import HomePage from './components/homepage/Home-Page';
import Navbar from './components/navbar/Navbar';
import { useState } from 'react';

function App() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    return (
        <>
            <Navbar onSearch={handleSearch} />
            <HomePage searchQuery={searchQuery} />
        </>
    );
}

export default App;
