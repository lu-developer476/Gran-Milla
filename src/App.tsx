
import ContactForm from './components/ContactForm'

export default function App() {
  return (
    <div className="container">
      <header className="hero">
        <h1>Gran Milla</h1>
        <p className="intro">

Gran Milla nace como una invitación a recorrer Argentina con otros ojos. No es simplemente una página sobre destinos:
es una puerta abierta a la idea de movimiento, de travesía, de descubrimiento personal a través del territorio.

Desde las cumbres silenciosas del norte hasta los glaciares imponentes del sur, cada kilómetro recorrido en este país
tiene una historia distinta. Argentina no es solamente un mapa: es un mosaico de culturas, paisajes, climas,
gastronomías y tradiciones que cambian radicalmente cada pocos cientos de kilómetros.

Gran Milla propone un viaje lento, consciente y significativo. Un viaje donde el trayecto importa tanto como el destino.
Las rutas argentinas no conectan solo ciudades: conectan experiencias. Conectan personas. Conectan momentos que
permanecen grabados para siempre.

En esta plataforma vas a encontrar destinos seleccionados a lo largo de todo el país: montañas, glaciares, selvas,
ciudades históricas, paisajes desérticos y maravillas naturales que forman parte de una de las geografías más diversas
del planeta.

Viajar no es escapar de la vida cotidiana. Viajar es expandirla.

Gran Milla es la idea de que cada kilómetro recorrido suma una experiencia. Cada paisaje observado transforma la mirada.
Cada conversación en el camino amplía el mundo.

Y al final del recorrido, uno siempre vuelve distinto.

        </p>
      </header>

      <section className="destinos">
        <h2>Destinos dentro de Argentina</h2>
        <ul>
          <li>Ushuaia – Tierra del Fuego</li>
<li>El Calafate – Santa Cruz</li>
<li>Bariloche – Río Negro</li>
<li>San Martín de los Andes – Neuquén</li>
<li>Mendoza – Cordillera de los Andes</li>
<li>Salta – Valles Calchaquíes</li>
<li>Purmamarca – Jujuy</li>
<li>Iguazú – Misiones</li>
<li>Córdoba – Sierras Centrales</li>
<li>Mar del Plata – Costa Atlántica</li>
        </ul>
      </section>

      <section className="contacto">
        <h2>Contacto</h2>
        <ContactForm />
      </section>
    </div>
  )
}
