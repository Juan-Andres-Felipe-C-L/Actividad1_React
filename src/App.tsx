import './App.css'
import { rutas, type Ruta, type Dificultad } from './datos/rutas';
import { TarjetaRuta } from './components/TarjetaRuta';

interface ListaRutasProps {
        rutas: Ruta[];
}

type Criterio = "precio" | "duracion"
type Order = "asc" | "des"

function filtrarPorDificultad(rutas: Ruta[], dificultad: Dificultad) {
    if(dificultad === "todas") return rutas

    return rutas.filter((ruta) => ruta.dificultad === dificultad)
}

function ordenarRutas(rutas: Ruta[], criterio: Criterio, order: Order = "asc") {
    const campo = criterio === "precio" ? "precio" : "duracionHoras"
    return rutas.toSorted((a, b) =>
        order === "asc"
      ? a[campo] - b[campo]
      : b[campo] - a[campo]
    )

}


function ListaRutas({ rutas }: ListaRutasProps) {

        if (rutas.length === 0) {
            return <p>No hay rutas con esos criterios.</p>;
        }

        return (
            <section>
                {rutas.map((ruta) => (
                    <TarjetaRuta key={ruta.id} ruta={ruta} />
                ))}
            </section>
        );
}
    
function App() {

    return <ListaRutas rutas = {rutas}/>
    
}

export default App
