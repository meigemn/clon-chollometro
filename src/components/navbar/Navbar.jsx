import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlassDollar, faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="relative select-none bg-cyan-800 lg:flex lg:items-stretch w-full rounded-md shadow-2xl ">
            <div className="flex flex-shrink-0 items-stretch h-12">
                {/* Logo y elementos izquierda */}
                <div className="flex">
                    <a
                        href="#"
                        className="flex-grow-0 flex-shrink-0 relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-gray-700"
                    >
                        Logo
                    </a>
                </div>

                {/* Botón hamburguesa (mobile) */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="block lg:hidden cursor-pointer ml-auto relative w-12 h-12 p-4"
                >
                    {isOpen ? (
                        <svg
                            className="fill-current text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                        </svg>
                    ) : (
                        <svg
                            className="fill-current text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Elementos de navegación */}
            <div
                className={`${isOpen ? 'absolute top-full left-0 right-0 bg-gray-800' : 'hidden'
                    } lg:flex lg:items-stretch lg:flex-shrink-0 lg:flex-grow`}
            >
                <div className="lg:flex lg:items-stretch lg:justify-end ml-auto flex flex-col lg:flex-row">
                    {/* Search Input */}
                    <div className="relative flex-grow-0 flex-shrink-0 py-2 px-4 w-full lg:w-auto mr-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full py-1 pl-8 pr-2 text-gray-700 bg-white border border-gray-300 rounded focus:outline-none focus:border-gray-500"
                            />
                            <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                                <FontAwesomeIcon icon={faMagnifyingGlassDollar} className="text-gray-400" />
                            </div>
                        </div>
                    </div>

                    {/* Filter Options */}
                    <details className="filter-details mr-4">
                        <summary className="filter-summary cursor-pointer py-2 px-4 text-white hover:bg-gray-700 rounded">
                            Opciones de Filtrado
                        </summary>
                        <div className="filter-options bg-gray-700 p-4 rounded mt-2">
                            <label className="block">
                                <input type="radio" name="filter" value="price" className="mr-2" />
                                Por Precio
                            </label>
                            <label className="block">
                                <input type="radio" name="filter" value="new" className="mr-2" />
                                Por Novedad
                            </label>
                            <label className="block">
                                <input type="radio" name="filter" value="popularity" className="mr-2" />
                                Por Popularidad
                            </label>
                        </div>
                    </details>

                    <a href="" 
                        className="flex-grow-0 flex-shrink-0 relative py-2 px-4 rounded-md leading-normal text-white no-underline flex items-center hover:bg-[#50C878]"
                    >
                        Listas
                    </a> 
                    <a
                        href="#"
                        className="flex-grow-0 flex-shrink-0 relative py-2 px-4 rounded-md leading-normal text-white no-underline flex items-center hover:bg-[#50C878]"
                    >
                        Iniciar Sesión
                        <FontAwesomeIcon icon={faUser} className="text-gray-400 ml-2" />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
