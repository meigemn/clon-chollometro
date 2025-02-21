import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="relative select-none bg-gray-800 lg:flex lg:items-stretch w-full">
            <div className="flex flex-shrink-0 items-stretch h-12">
                {/* Logo y elementos izquierda */}
                <div className="flex">
                    <a
                        href="#"
                        className="flex-grow-0 flex-shrink-0 relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-gray-700"
                    >
                        Tailwind
                    </a>
                    <a
                        href="#"
                        className="flex-grow-0 flex-shrink-0 relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-gray-700"
                    >
                        Css
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
                <div className="lg:flex lg:items-stretch lg:justify-end ml-auto">
                    <a
                        href="#"
                        className="flex-grow-0 flex-shrink-0 relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-gray-700"
                    >
                        Item 1
                    </a>
                    <a
                        href="#"
                        className="flex-grow-0 flex-shrink-0 relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-gray-700"
                    >
                        Item 2
                    </a>
                    <a
                        href="#"
                        className="flex-grow-0 flex-shrink-0 relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-gray-700"
                    >
                        Item 3
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;