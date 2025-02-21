import Producto from "../producto/Producto";

export default function HomePage() {
    return (
        <div>
            <Producto imagenProducto="/src/assets/images/Extremoduro.jpg" nombreProducto="Disco Extermoduro" publicadoHace={10} precioActual={1} precioAntiguo={1000} sitioVenta="extremomanda.com" nombreUsuario="Usuario anonimo" />
        </div>
    )
}