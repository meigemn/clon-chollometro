import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlassDollar, faUser } from '@fortawesome/free-solid-svg-icons';
import { FiChevronDown, FiX } from 'react-icons/fi';
import didYouMean from 'didyoumean2';

const Navbar = ({ onSearch }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);
    const [allProducts, setAllProducts] = useState([]);
    const searchContainerRef = useRef(null);
    const [isInitialLoading, setIsInitialLoading] = useState(true);

    // Fetch inicial de productos
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                if (!response.ok) throw new Error('Error al cargar productos');
                const data = await response.json();
                setAllProducts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsInitialLoading(false); // Actualiza el estado
            }
        };
        fetchProducts();
    }, []);

    // Debounce para optimizar búsquedas
    const debounce = (func, delay) => {
        let timeoutId;
        const debouncedFunc = (...args) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func(...args), delay);
        };
        debouncedFunc.cancel = () => clearTimeout(timeoutId);
        return debouncedFunc;
    };

    // Buscar productos con corrección ortográfica
    const searchProducts = (query) => {
        if (!query.trim() || isInitialLoading) { // Bloquea búsquedas durante carga inicial
            setSuggestions([]);
            return;
        }

        try {
            setIsLoading(true);

            // Buscar coincidencias directas primero
            const directMatches = allProducts.filter(product =>
                product.title.toLowerCase().includes(query.toLowerCase())
            );

            // Si no hay coincidencias directas, usar didyoumean2
            const bestMatches = directMatches.length > 0
                ? directMatches.map(p => p.title)
                : didYouMean(query, allProducts.map(p => p.title), {
                    threshold: 0.3, // Umbral más flexible
                    trimSpace: true,
                    caseSensitive: false,
                    matchPath: ['title']
                }) || [];

            const finalResults = allProducts.filter(product =>
                bestMatches.includes(product.title)
            );

            setSuggestions(finalResults.slice(0, 5));
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    // Versión debounceada de la búsqueda
    const debouncedSearch = debounce(searchProducts, 300);

    useEffect(() => {
        debouncedSearch(searchQuery);
        return () => debouncedSearch.cancel();
    }, [searchQuery, allProducts]);

    // Manejar clic fuera del buscador
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
                setSuggestions([]);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Manejar teclado para sugerencias
    const handleKeyDown = (e) => {
        if (e.key === 'ArrowDown') {
            setSelectedSuggestionIndex(prev => Math.min(prev + 1, suggestions.length - 1));
        } else if (e.key === 'ArrowUp') {
            setSelectedSuggestionIndex(prev => Math.max(prev - 1, -1));
        } else if (e.key === 'Enter' && selectedSuggestionIndex >= 0) {
            handleSuggestionClick(suggestions[selectedSuggestionIndex].title);
        }
    };

    // Manejar selección de sugerencia
    const handleSuggestionClick = (productTitle) => {
        setSearchQuery(productTitle);
        setSuggestions([]);
        onSearch(productTitle); // Pasar la consulta de búsqueda a HomePage
    };

    // Renderizar sugerencias con resaltado
    const renderHighlightedText = (text, query) => {
        const parts = text.split(new RegExp(`(${query})`, 'gi'));
        return parts.map((part, index) =>
            part.toLowerCase() === query.toLowerCase() ? (
                <span key={index} className="font-semibold text-blue-600">{part}</span>
            ) : (
                <span key={index}>{part}</span>
            )
        );
    };

    return (
        <nav className="relative select-none bg-cyan-800 lg:flex lg:items-stretch w-full rounded-md shadow-2xl mb-20 mt-3">
            <div className="flex flex-shrink-0 items-stretch h-12">
                {/* Logo */}
                <div className="flex">
                    <a href="#" className="flex-grow-0 flex-shrink-0 relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-gray-700">
                        Logo
                    </a>
                </div>

                {/* Botón hamburguesa (mobile) */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="block lg:hidden cursor-pointer ml-auto relative w-12 h-12 p-4"
                >
                    {isOpen ? <FiX className="text-white w-5 h-5" /> : <FiChevronDown className="text-white w-5 h-5" />}
                </button>
            </div>

            {/* Elementos de navegación */}
            <div
                className={`${isOpen ? 'absolute top-full left-0 right-0 bg-gray-800' : 'hidden'} lg:flex lg:items-stretch lg:flex-shrink-0 lg:flex-grow`}
            >
                <div className="lg:flex lg:items-stretch lg:justify-end ml-auto flex flex-col lg:flex-row items-center">
                    {/* Buscador con sugerencias */}
                    <div className="relative flex-grow-0 flex-shrink-0 py-2 px-4 w-full lg:w-auto mr-4" ref={searchContainerRef}>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Buscar productos..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyDown={handleKeyDown}
                                className="w-full py-1 pl-8 pr-8 text-gray-700 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            />
                            <div className="absolute inset-y-0 left-2 flex items-center pointer-events-none">
                                <FontAwesomeIcon icon={faMagnifyingGlassDollar} className="text-gray-400" />
                            </div>

                            {/* Botón de limpiar */}
                            {searchQuery && (
                                <button
                                    onClick={() => {
                                        setSearchQuery('');
                                        setSuggestions([]);
                                        onSearch(''); // Limpiar la búsqueda en HomePage
                                    }}
                                    className="absolute inset-y-0 right-2 flex items-center pr-2"
                                >
                                    <FiX className="text-gray-400 hover:text-gray-600 transition-colors" />
                                </button>
                            )}

                            {/* Contenedor de sugerencias */}
                            {(suggestions.length > 0 || isLoading || error) && (
                                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-xl z-50">
                                    {isInitialLoading ? (
                                        <div className="p-3 text-gray-500">
                                            Cargando catálogo completo...
                                        </div>
                                    ) : (
                                        <>
                                            {isLoading && (
                                                <div className="p-3 text-gray-500">
                                                    Buscando...
                                                </div>
                                            )}

                                            {!isLoading && suggestions.length === 0 && searchQuery && (
                                                <div className="p-3 text-gray-500">
                                                    No se encontraron productos para "{searchQuery}"
                                                </div>
                                            )}

                                            {suggestions.map((suggestion, index) => (
                                                <div
                                                    key={suggestion.id}
                                                    onClick={() => handleSuggestionClick(suggestion.title)}
                                                    className={`p-3 cursor-pointer ${selectedSuggestionIndex === index ? 'bg-gray-200' : ''}`}
                                                >
                                                    {renderHighlightedText(suggestion.title, searchQuery)}
                                                </div>
                                            ))}
                                        </>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Filtros y otros elementos */}
                    <div className="flex flex-row items-center space-x-4 py-2 px-4">
                        <label htmlFor="ciudades" className="text-white text-sm font-medium">
                            Filtrar por:
                        </label>
                        <select
                            id="ciudades"
                            name="ciudades"
                            className="px-3 py-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white hover:border-gray-400 transition-all"
                        >
                            <option value="precio">Precio</option>
                            <option value="publicacion">Publicación</option>
                        </select>
                    </div>

                    <a href="#" className="flex items-center py-2 px-4 rounded-md text-white hover:bg-[#50C878] transition-colors">
                        Listas
                    </a>
                    <a href="#" className="flex items-center py-2 px-4 rounded-md text-white hover:bg-[#50C878] transition-colors">
                        <FontAwesomeIcon icon={faUser} className="mr-2" />
                        Iniciar Sesión
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
