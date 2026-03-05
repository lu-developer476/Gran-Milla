import { useMemo, useState } from "react"
import About from "./about"
import ContactForm from "./components/ContactForm"

const destinos = [
  {
    nombre: "Ushuaia",
    provincia: "Tierra del Fuego",
    imagen: "/images/ushuaia.jpg",
    descripcion:
      "Ushuaia tiene algo difícil de explicar hasta que se pisa: una mezcla de ciudad de frontera, paisaje extremo y calma austral. Navegar por el Canal Beagle, caminar por senderos del Parque Nacional y ver cómo el clima cambia en minutos vuelve cada jornada distinta. Es un destino ideal para quienes sienten que viajar también es correrse del ruido y volver a mirar el mundo con otra escala.",
  },
  {
    nombre: "El Calafate",
    provincia: "Santa Cruz",
    imagen: "/images/el-calafate.jpg",
    descripcion:
      "En El Calafate, la magnitud del hielo modifica la percepción del tiempo. El Glaciar Perito Moreno impresiona no solo por su tamaño, sino por su movimiento constante y sus sonidos profundos. Las excursiones lacustres entre témpanos y los miradores patagónicos crean una experiencia contemplativa, perfecta para quienes buscan naturaleza en estado puro y una conexión genuina con el sur.",
  },
  {
    nombre: "Bariloche",
    provincia: "Río Negro",
    imagen: "/images/bariloche.jpg",
    descripcion:
      "Bariloche combina aventura, paisaje y vida urbana de forma equilibrada. Se puede pasar de una caminata en cerros y bosques a una tarde frente al lago, y terminar el día con una propuesta gastronómica de gran nivel. Su diversidad de actividades durante todo el año la vuelve versátil: funciona tanto para un viaje activo como para una escapada tranquila, en pareja, en familia o con amigos.",
  },
  {
    nombre: "San Martín de los Andes",
    provincia: "Neuquén",
    imagen: "/images/san-martin-andes.jpg",
    descripcion:
      "San Martín de los Andes transmite serenidad desde el primer momento. Su entorno de bosques, montañas y lagos invita a recorrer sin apuro, disfrutando cada tramo de la Ruta de los Siete Lagos como parte central de la experiencia. Es un lugar muy elegido por quienes valoran el contacto con la naturaleza, los ritmos lentos y una atmósfera de pueblo de montaña bien cuidada.",
  },
  {
    nombre: "Cordillera de los Andes",
    provincia: "Mendoza",
    imagen: "/images/mendoza.jpg",
    descripcion:
      "Mendoza propone una combinación poco común entre paisaje imponente y cultura del buen vivir. La experiencia en bodegas, los caminos del vino y la vista permanente de la cordillera conviven con actividades de aventura en alta montaña. Es un destino que permite diseñar viajes a medida: desde propuestas gourmet y descanso hasta itinerarios más exigentes para quienes quieren movimiento y aire de altura.",
  },
  {
    nombre: "Valles Calchaquíes",
    provincia: "Salta",
    imagen: "/images/salta.jpeg",
    descripcion:
      "Salta ofrece una identidad muy definida, donde la historia colonial, la música local y los paisajes de altura se integran de manera natural. Sus rutas atraviesan quebradas, valles y pueblos con fuerte tradición cultural, lo que convierte cada desplazamiento en parte del atractivo. Es una provincia ideal para viajeros curiosos, de esos que quieren entender el lugar y no solo sacarle una foto.",
  },
  {
    nombre: "Purmamarca",
    provincia: "Jujuy",
    imagen: "/images/purmamarca.jpg",
    descripcion:
      "Purmamarca es pequeña en tamaño, pero enorme en identidad. El Cerro de los Siete Colores domina el paisaje con una presencia única, mientras el pueblo conserva un ritmo simple y una fuerte raíz andina. Caminar sus calles, conversar con artesanos y observar la vida cotidiana local permite vivir una experiencia cercana, auténtica y profundamente ligada al territorio del norte argentino.",
  },
  {
    nombre: "Iguazú",
    provincia: "Misiones",
    imagen: "/images/iguazu.jpg",
    descripcion:
      "Iguazú impacta desde el cuerpo: el sonido del agua, la humedad del ambiente y la potencia de la selva generan una experiencia sensorial completa. Las pasarelas permiten distintos puntos de vista sobre las cataratas y muestran cómo la naturaleza puede ser, al mismo tiempo, inmensa y delicada. Es un destino que emociona incluso a quienes viajan mucho y creen que ya lo vieron todo.",
  },
  {
    nombre: "Sierras Centrales",
    provincia: "Córdoba",
    imagen: "/images/cordoba.jpg",
    descripcion:
      "Córdoba tiene una versatilidad que la vuelve siempre vigente: sierras, ríos, pueblos con personalidad y una escena cultural activa durante todo el año. Se puede alternar entre descanso, trekking suave, recorridos históricos o escapadas gastronómicas sin grandes distancias. Es una opción muy completa para quienes buscan viajes prácticos, variados y con buen equilibrio entre naturaleza y vida urbana.",
  },
  {
    nombre: "Mar del Plata",
    provincia: "Buenos Aires",
    imagen: "/images/mar-del-plata.jpg",
    descripcion:
      "Mar del Plata mantiene su lugar como gran referencia de la costa atlántica por una razón clara: combina playa, identidad urbana y agenda cultural de manera constante. Más allá del verano, ofrece propuestas para todo el año, con circuitos gastronómicos, caminatas costeras y espacios culturales muy activos. Es un destino ideal para quienes quieren mar, movimiento y servicios completos en un solo lugar.",
  },
]

const opcionesDeViaje = [
  {
    titulo: "Planificación inteligente",
    descripcion:
      "Elegí la región según estación, distancias y tiempo disponible para construir un recorrido realista y disfrutable.",
  },
  {
    titulo: "Travesía por etapas",
    descripcion:
      "Combiná paradas cortas con experiencias clave: miradores, pueblos, reservas naturales y sabores típicos de cada zona.",
  },
  {
    titulo: "Memoria del camino",
    descripcion:
      "Registrá cada tramo con notas o fotos para convertir el viaje en una guía personal para futuras aventuras.",
  },
]

export default function App() {
  const [view, setView] = useState<"home" | "about">("home")

  const navLabel = useMemo(() => (view === "home" ? "Quiénes somos" : "Volver al inicio"), [view])

export default function App() {
  return (
    <div className="page-shell">
      <div className="animated-map" aria-hidden="true" />

      <button
        className="about-link"
        type="button"
        onClick={() => setView((prev) => (prev === "home" ? "about" : "home"))}
      >
        {navLabel}
      </button>

      <main className="container">
        {view === "about" ? (
          <About />
        ) : (
          <>
            <header className="hero glass-card">
              <div className="brand-row">
                <img className="brand-logo" src="/logo.png" alt="Logo de Gran Milla" />
              </div>

              <div className="intro-block">
                <p>
                  Te invitamos a recorrer Argentina con calma, con los ojos abiertos y el espíritu dispuesto a descubrir. Cada paisaje, cada camino y cada rincón del país guarda historias, culturas y experiencias que merecen ser vividas con atención y profundidad.
                </p>
                <p>
                  Desde la inmensidad de los glaciares patagónicos hasta los colores vibrantes del norte, Argentina ofrece un territorio diverso que se transforma a cada kilómetro recorrido. No se trata solo de llegar a un destino, sino de vivir el trayecto, de detenerse, observar y conectar con la esencia de cada lugar.
                </p>
                <p>
                  Nuestra propuesta es acompañarte en ese viaje: ofrecerte inspiración, información y nuevas perspectivas para que cada recorrido se convierta en una experiencia significativa.
                </p>
                <p>
                  Porque viajar no es simplemente moverse de un punto a otro. Viajar es abrirse a lo inesperado, descubrir nuevas miradas y, en el proceso, encontrarse también con uno mismo.
                </p>
                <p>Emprendé tu próximo camino con nosotros.</p>
              </div>

              <div className="hero-highlights">
                <article>
                  <h3>Viaje consciente</h3>
                  <p>Priorizá experiencias auténticas por encima de la velocidad y el consumo rápido.</p>
                </article>
                <article>
                  <h3>Rutas combinables</h3>
                  <p>Armá itinerarios modulares para escapadas cortas o travesías extensas.</p>
                </article>
                <article>
                  <h3>Argentina diversa</h3>
                  <p>Un país con climas, culturas y relieves que cambian en cada tramo recorrido.</p>
                </article>
              </div>
            </header>

            <section className="route-section glass-card" aria-label="Opciones de viaje">
              <h2>Opciones de viaje</h2>
              <div className="travel-options-grid">
                {opcionesDeViaje.map((opcion) => (
                  <article key={opcion.titulo} className="travel-option-card">
                    <h3>{opcion.titulo}</h3>
                    <p>{opcion.descripcion}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="destinos" aria-label="Destinos dentro de Argentina">
              <h2>Destinos destacados</h2>
              <p className="destinos-intro">
                Cada destino incluye una ilustración propia y una descripción breve para ayudarte a comparar
                regiones y construir una ruta más alineada con tu estilo de viaje.
              </p>

              <div className="destino-grid">
                {destinos.map((destino) => (
                  <article key={destino.nombre} className="destino-card glass-card">
                    <img className="destino-image" src={destino.imagen} alt={`Imagen de ${destino.nombre}`} />
                    <h3>{destino.nombre}</h3>
                    <p className="provincia">{destino.provincia}</p>
                    <p>{destino.descripcion}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="contacto glass-card">
              <h2>Contacto</h2>
              <p className="contacto-texto">
                Completá el formulario y te ayudamos a definir una travesía personalizada según temporada,
                presupuesto, tiempos y tipo de experiencia que querés vivir.
              </p>
              <div className="form-wrapper">
                <ContactForm />
              </div>
            </section>

            <footer className="site-footer glass-card" aria-label="Pie de página">
              <p>
                <span className="text-cyber-gold">©</span> {new Date().getFullYear()} Todos los derechos reservados • Built with React.js & TypeScript • UX/UI Interface • Deployed on Vercel ®
              </p>
            </footer>
          </>
        )}
      </main>
    </div>
  )
}
