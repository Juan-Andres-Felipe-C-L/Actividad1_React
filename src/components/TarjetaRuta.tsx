import type { Ruta } from "../datos/rutas";
import "./TarjetaRuta.css"

interface RutaProps {
    ruta: Ruta;
}


export function TarjetaRuta({ruta}: RutaProps) {
    const precio = ruta.precio.toLocaleString("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0});
    
    return (
        <article>
            <h3>Nombre ruta: {ruta.nombre}</h3>
            <p>-Municipio: {ruta.municipio}.</p>
            <p>-Duración: {ruta.duracionHoras} horas.</p>
            <p>-Precio: {precio} COP</p>
            <p>-Dificultad: {ruta.dificultad}</p>
            <p>-Info. adicional: {ruta.incluyeTransporte && <strong>Incluye transporte</strong>} · {ruta.duracionHoras < 5 ? "Ruta corta" : "Jornada completa"}</p>
        </article>
    );
}