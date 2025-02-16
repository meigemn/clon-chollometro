import React, { useEffect, useState } from 'react';
import './App.css';
import HomePage from './components/home/home-page';
import DataDisplay from './components/data-display';


function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/public/data.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setData(data))
            .catch(error => console.error('Error al cargar los datos:', error));
    }, []);

    return (
        <>
            <HomePage />
            <DataDisplay data={data} />
        </>
    );
}

export default App;
