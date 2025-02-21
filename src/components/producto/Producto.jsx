export default function Producto() {
    return (
        <>
            <div className="flex flex-col md:flex-row w-full p-4 border-2 border-black rounded-md shadow-2xl my-4 bg-white">
                {/* div que contiene la imagen */}
                <div className="w-full md:w-[300px] h-[150px] md:h-full mb-4 md:mb-0">
                    <img
                        src="/src/assets/images/daft-punk.jpg"
                        alt="producto"
                        className="w-full h-full rounded-md object-cover"
                    />
                </div>
                <div className="flex flex-col w-full md:ml-4">
                    <div className="flex justify-end mb-2 text-sm text-gray-500">
                        Publicado hace 45 mins
                    </div>
                    <div className="flex flex-col items-start justify-between">
                        <div className="text-lg font-semibold">
                            Nombre del producto
                        </div>
                        <section className="mt-2">
                            <div className="flex items-center">
                                <div className="text-2xl mr-2 text-amber-500">
                                    99,99
                                </div>
                                <div className="text-xl text-gray-500 line-through">
                                    precio antiguo
                                </div>
                            </div>
                        </section>
                        <section className="flex items-center mt-4">
                            <div className="text-sm mr-2">
                                Sitio donde se vende
                            </div>
                            <img
                                src="/src/assets/images/daft-punk.jpg"
                                alt="producto"
                                className="w-8 h-8 rounded-full"
                            />
                            <div className="ml-2 text-sm">
                                Nombre del usuario
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
}
