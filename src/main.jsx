import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        {/* Contenedor para el portal del carrito */}
        <div id="cart-root"></div>
        <App />
    </StrictMode>
);