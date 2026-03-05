import { ENV } from "./config/env"
import ContactForm from "./components/ContactForm"

const destinos = [
  {
    nombre: "Ushuaia",
    provincia: "Tierra del Fuego",
    imagen: "/images/ushuaia.jpg",
    descripcion:
      "Puerta al fin del mundo: navegaciones por el Canal Beagle, bosques fueguinos y senderos que combinan mar, montaña y silencio austral.",
  },
  {
    nombre: "El Calafate",
    provincia: "Santa Cruz",
    imagen: "/images/el-calafate.jpg",
    descripcion:
      "Base ideal para conocer el Glaciar Perito Moreno, recorrer pasarelas panorámicas y vivir la inmensidad patagónica desde muy cerca.",
  },
  {
    nombre: "Bariloche",
    provincia: "Río Negro",
    imagen: "/images/bariloche.jpg",
    descripcion:
      "Lagos cristalinos, cerros para trekking o nieve y una escena gastronómica de montaña que mezcla tradición, chocolate y sabores locales.",
  },
  {
    nombre: "San Martín de los Andes",
    provincia: "Neuquén",
    imagen: "/images/san-martin-andes.jpg",
    descripcion:
      "Paisajes de la Ruta de los Siete Lagos, playas lacustres y caminatas entre bosques nativos que invitan a viajar con ritmo pausado.",
  },
  {
    nombre: "Mendoza",
    provincia: "Cordillera de los Andes",
    imagen: "/images/mendoza.jpg",
    descripcion:
      "Viñedos al pie de la cordillera, experiencias enológicas y propuestas de aventura en alta montaña para combinar descanso y adrenalina.",
  },
  {
    nombre: "Salta",
    provincia: "Valles Calchaquíes",
    imagen: "/images/salta.jpeg",
    descripcion:
      "Arquitectura colonial, peñas folclóricas y rutas de altura entre quebradas rojizas que conectan cultura viva, historia y paisaje.",
  },
  {
    nombre: "Purmamarca",
    provincia: "Jujuy",
    imagen: "/images/purmamarca.jpg",
    descripcion:
      "Tradición andina, artesanías regionales y el Cerro de los Siete Colores como emblema de una experiencia visual única del norte argentino.",
  },
  {
    nombre: "Iguazú",
    provincia: "Misiones",
    imagen: "/images/iguazu.jpg",
    descripcion:
      "Selva subtropical exuberante y cataratas monumentales que convierten cada pasarela en una travesía sensorial de agua, niebla y naturaleza.",
  },
  {
    nombre: "Córdoba",
    provincia: "Sierras Centrales",
    imagen: "/images/cordoba.jpg",
    descripcion:
      "Sierras, ríos y pueblos con identidad propia para disfrutar escapadas activas, descanso serrano y circuitos culturales durante todo el año.",
  },
  {
    nombre: "Mar del Plata",
    provincia: "Costa Atlántica",
    imagen: "/images/mar-del-plata.jpg",
    descripcion:
      "Ciudad costera dinámica con playas amplias, agenda cultural permanente y propuestas gastronómicas para una escapada completa frente al mar.",
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
  return (
    <div className="page-shell">
      <div className="animated-map" aria-hidden="true" />

      <main className="container">
        <header className="hero glass-card">
          <div className="brand-row">
            <img className="brand-logo" src="/logo.png" alt="Logo de Gran Milla" />
            <span className="hero-tag">Explorá Argentina a tu ritmo</span>
          </div>

          <h1>{ENV.appName}</h1>

          <p className="intro">
            Gran Milla te invita a recorrer Argentina como una travesía con sentido: no se trata
            solo de llegar, sino de detenerse, observar y conectar con cada paisaje. Diseñamos
            propuestas para que el camino tenga tanto valor como el destino.
          </p>

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
      </main>
    </div>
  )
}
