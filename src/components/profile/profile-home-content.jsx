export default function ProfileHomeContent() {
    return (
        <div className="flex h-[690px]">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-50 dark:bg-gray-800 p-4">
                <div className="overflow-y-auto rounded">
                    <ul className="space-y-2">
                        {/* Elemento Perfil */}
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="21" viewBox="0 0 448 512">
                                    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/>
                                </svg>
                                <span className="ml-3">Perfil</span>
                            </a>
                        </li>

                        {/* Listas de reproducción con despliegue */}
                        <li>
                            <details className="group">
                                <summary className="flex items-center p-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded cursor-pointer list-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 512 512" className="transition-transform group-open:rotate-180">
                                        <path d="M40 48C26.7 48 16 58.7 16 72l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24L40 48zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM16 232l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0z"/>
                                    </svg>
                                    <span className="ml-3">Listas de reproducción</span>
                                    <svg className="ml-auto w-4 h-4 transition-transform transform group-open:rotate-180" 
                                         xmlns="http://www.w3.org/2000/svg" 
                                         viewBox="0 0 20 20" 
                                         fill="currentColor">
                                        <path fillRule="evenodd" 
                                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
                                              clipRule="evenodd"/>
                                    </svg>
                                </summary>
                                
                                {/* Listas de usuario */}
                                <ul className="ml-4 mt-1 space-y-1">
                                    <li>
                                        <a href="#" className="flex items-center p-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded">
                                            <svg className="w-4 h-4 mr-2" 
                                                 xmlns="http://www.w3.org/2000/svg" 
                                                 viewBox="0 0 20 20" 
                                                 fill="currentColor">
                                                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2zM3 16a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2z"/>
                                            </svg>
                                            Mi Lista Favorita
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center p-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded">
                                            <svg className="w-4 h-4 mr-2" 
                                                 xmlns="http://www.w3.org/2000/svg" 
                                                 viewBox="0 0 20 20" 
                                                 fill="currentColor">
                                                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2zM3 16a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2z"/>
                                            </svg>
                                            Rock Clásico
                                        </a>
                                    </li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </aside>
        </div>
    );
}