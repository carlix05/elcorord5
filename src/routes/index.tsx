import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/')({
  component: ElCoroRD,
})

// ─── Helpers ────────────────────────────────────────────────────────────────

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&')
}

function StarRating({
  rating,
  onChange,
}: {
  rating: number
  onChange?: (n: number) => void
}) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => onChange?.(n)}
          className={`text-2xl ${n <= rating ? 'star-filled' : 'star-empty'} ${onChange ? 'cursor-pointer hover:scale-110 transition-transform' : 'cursor-default'}`}
        >
          ★
        </button>
      ))}
    </div>
  )
}

// ─── Section: Header ────────────────────────────────────────────────────────

function Header() {
  return (
    <header className="gradient-header text-white py-6 px-6 text-center">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-1">
          🌴 El Coro RD
        </h1>
        <p className="text-blue-100 text-sm md:text-base font-light tracking-widest uppercase">
          Turismo Oficial · República Dominicana
        </p>
      </div>
    </header>
  )
}

// ─── Section: Sticky Nav ────────────────────────────────────────────────────

function Nav() {
  const [open, setOpen] = useState(false)
  const links = [
    { href: '#destinos', label: 'Destinos' },
    { href: '#aventura', label: 'Aventura' },
    { href: '#historia', label: 'Historia' },
    { href: '#planifica', label: 'Planifica' },
    { href: '#reservas', label: 'Reservas' },
    { href: '#resenas', label: 'Reseñas' },
    { href: '#contacto', label: 'Contacto' },
  ]
  return (
    <nav className="nav-sticky shadow-lg">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-14">
        <span className="text-white font-bold text-lg hidden md:block">🌴 El Coro RD</span>
        {/* Desktop */}
        <ul className="hidden md:flex gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-blue-100 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        {/* Mobile toggle */}
        <button
          className="md:hidden text-white text-2xl px-2"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#002D62] border-t border-blue-800">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-blue-100 hover:text-white hover:bg-white/10 px-5 py-3 text-sm font-medium"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

// ─── Section: Hero ──────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="hero-bg min-h-screen flex items-center justify-center text-center px-6">
      <div className="max-w-3xl">
        <p className="text-blue-200 uppercase tracking-widest text-sm mb-4 font-medium">
          Bienvenido a la isla que lo tiene todo
        </p>
        <h2 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
          Tu experiencia inolvidable comienza aquí
        </h2>
        <p className="text-blue-100 text-lg md:text-xl mb-10 leading-relaxed">
          Playas de ensueño, montañas majestuosas, historia viva y una cultura que te
          robará el corazón. La República Dominicana te espera.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#destinos"
            className="bg-[#CE1126] hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full transition-colors shadow-lg"
          >
            Explorar Destinos
          </a>
          <a
            href="#reservas"
            className="bg-white/15 hover:bg-white/25 border border-white/40 text-white font-semibold px-8 py-4 rounded-full transition-colors backdrop-blur-sm"
          >
            Reservar Ahora
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── Section: Destinos ──────────────────────────────────────────────────────

const destinations = [
  {
    name: 'Punta Cana',
    description:
      'El paraíso del Caribe con 50 km de playas de arena blanca y aguas cristalinas. Famosa por sus resorts todo incluido, el parque Scape Park y su vibrante vida nocturna.',
    image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?w=800&q=80',
    tag: 'Playa & Resorts',
  },
  {
    name: 'Samaná',
    description:
      'Un rincón escondido de naturaleza salvaje donde las ballenas jorobadas migran cada invierno. Las cascadas El Limón y la Playa Rincón la convierten en destino único.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
    tag: 'Naturaleza & Ballenas',
  },
  {
    name: 'Bahía de las Águilas',
    description:
      'Considerada la playa más virgen del Caribe. Totalmente protegida dentro del Parque Nacional Jaragua, sólo accesible en bote, con aguas turquesas sin par.',
    image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=800&q=80',
    tag: 'Playa Virgen',
  },
]

function Destinos() {
  return (
    <section id="destinos" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-[#CE1126] uppercase tracking-widest text-sm font-semibold">Descubre</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#002D62] mt-2">
            Destinos Imperdibles
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Cada rincón de la República Dominicana guarda una maravilla única.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {destinations.map((d) => (
            <div key={d.name} className="bg-white rounded-2xl overflow-hidden shadow-md card-hover">
              <div className="h-52 overflow-hidden relative">
                <img
                  src={d.image}
                  alt={d.name}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 left-3 bg-[#002D62]/80 text-white text-xs px-3 py-1 rounded-full font-medium">
                  {d.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#002D62] mb-2">{d.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{d.description}</p>
                <a
                  href="#reservas"
                  className="mt-4 inline-block bg-[#CE1126] hover:bg-red-700 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors"
                >
                  Reservar
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Section: Aventura ──────────────────────────────────────────────────────

const adventures = [
  {
    icon: '🚣',
    title: 'Kayak en el Caribe',
    description:
      'Recorre las aguas cristalinas de Punta Cana y Samaná en kayak. Explora manglares, cuevas marinas y arrecifes de coral desde el agua.',
  },
  {
    icon: '🏄',
    title: 'Boogie Board & Surf',
    description:
      'Las olas de Cabarete y Las Terrenas son perfectas para principiantes y expertos. Instructores certificados disponibles todo el año.',
  },
  {
    icon: '🥾',
    title: 'Senderismo en Jarabacoa',
    description:
      'La "Ciudad de las Flores" ofrece trails espectaculares hacia el Pico Duarte (3,098 m) y las cataratas Jimenoa. Naturaleza alpina tropical.',
  },
  {
    icon: '💦',
    title: '27 Charcos de Damajagua',
    description:
      'Salta desde cascadas naturales y deslízate por toboganes de roca en esta cadena de 27 pozas turquesas en plena selva dominicana.',
  },
  {
    icon: '⛵',
    title: 'Isla Saona',
    description:
      'Excursión en catamarán a la famosa isla con piscina natural y piscina de estrellas de mar. Snorkel, open bar y almuerzo incluido.',
  },
  {
    icon: '🤿',
    title: 'Buceo & Snorkel',
    description:
      'Los arrecifes dominicanos albergan más de 600 especies de peces. Explora el Parque Nacional del Este y sus aguas prístinas.',
  },
]

function Aventura() {
  return (
    <section id="aventura" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-[#CE1126] uppercase tracking-widest text-sm font-semibold">Adrenalina</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#002D62] mt-2">
            Turismo de Aventura
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Para quienes buscan emociones únicas en el paraíso caribeño.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {adventures.map((a) => (
            <div
              key={a.title}
              className="border border-gray-100 rounded-2xl p-6 card-hover bg-gradient-to-br from-gray-50 to-blue-50/30 hover:border-[#002D62]/20"
            >
              <div className="text-4xl mb-3">{a.icon}</div>
              <h3 className="text-lg font-bold text-[#002D62] mb-2">{a.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{a.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Section: Historia ──────────────────────────────────────────────────────

const historySites = [
  {
    name: 'Zona Colonial',
    subtitle: 'Primera ciudad del Nuevo Mundo · UNESCO',
    description:
      'Declarada Patrimonio de la Humanidad por la UNESCO, la Zona Colonial de Santo Domingo alberga la primera catedral, universidad y hospital de América. Sus adoquines medievales te transportarán al siglo XV.',
    image: 'https://images.unsplash.com/photo-1580820266744-72fa2e4203a7?w=800&q=80',
  },
  {
    name: 'Faro a Colón',
    subtitle: 'Santo Domingo · Monumento Nacional',
    description:
      'Imponente monumento con forma de cruz que alberga la tumba de Cristóbal Colón. Inaugurado en 1992 para el 5° centenario del Descubrimiento, proyecta una cruz de luz al cielo nocturno.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  },
  {
    name: 'Alcázar de Colón',
    subtitle: 'Primera residencia real de América',
    description:
      'Palacio del virrey Diego Colón, hijo del Almirante. Construido en 1510 sin usar un solo clavo de hierro, hoy es museo con muebles y obras de arte del siglo XVI. Vista inigualable sobre el río Ozama.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
  },
]

function Historia() {
  return (
    <section
      id="historia"
      className="py-20 px-6"
      style={{ background: 'linear-gradient(135deg, #001f45 0%, #002D62 60%, #1a0a0f 100%)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-red-300 uppercase tracking-widest text-sm font-semibold">Patrimonio</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-2">
            Historia & Cultura
          </h2>
          <p className="text-blue-200 mt-3 max-w-xl mx-auto">
            La cuna de la civilización americana te abre sus puertas en Santo Domingo.
          </p>
        </div>
        <div className="flex flex-col gap-10">
          {historySites.map((site, i) => (
            <div
              key={site.name}
              className={`flex flex-col md:flex-row gap-6 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={site.image}
                  alt={site.name}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 text-white px-2">
                <p className="text-red-300 text-xs uppercase tracking-widest font-semibold mb-1">
                  {site.subtitle}
                </p>
                <h3 className="text-3xl font-bold mb-3">{site.name}</h3>
                <p className="text-blue-100 leading-relaxed">{site.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Section: Planifica ─────────────────────────────────────────────────────

const planInfo = [
  { icon: '💱', title: 'Moneda', body: 'Peso Dominicano (DOP). Tipo de cambio: aprox. 58 DOP = 1 USD. Cajeros disponibles en todo el país. El dólar americano es ampliamente aceptado en zonas turísticas.' },
  { icon: '🗣️', title: 'Idioma', body: 'Español es el idioma oficial. En zonas turísticas encontrarás personal bilingüe en inglés, francés y alemán.' },
  { icon: '✈️', title: 'Aeropuertos', body: 'PUJ – Punta Cana (internacional), SDQ – Las Américas (Santo Domingo), STI – Santiago, AZS – Samaná El Catey. Vuelos directos desde EEUU, Europa y Latinoamérica.' },
  { icon: '🌤️', title: 'Clima', body: 'Tropical cálido todo el año: 26-32°C. Temporada de lluvias: mayo-noviembre. Vientos alisios refrescan la costa norte. Ideal para visitar cualquier mes.' },
  { icon: '📅', title: 'Temporada Alta', body: 'Diciembre a abril es la temporada alta con clima seco y perfecto. Enero-marzo es ideal para ver ballenas jorobadas en Samaná. Reserva con anticipación.' },
  { icon: '🛡️', title: 'Seguridad', body: 'Las zonas turísticas son seguras. Usa taxis registrados o transfers del hotel. Evita playas solitarias de noche. Contrata un seguro de viaje. Agua embotellada recomendada.' },
]

function Planifica() {
  return (
    <section id="planifica" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-[#CE1126] uppercase tracking-widest text-sm font-semibold">Guía práctica</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#002D62] mt-2">
            Planifica tu Viaje
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Todo lo que necesitas saber antes de volar a la República Dominicana.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {planInfo.map((p) => (
            <div key={p.title} className="bg-white rounded-2xl p-6 shadow-sm card-hover border border-gray-100">
              <div className="text-3xl mb-3">{p.icon}</div>
              <h3 className="font-bold text-[#002D62] mb-2 text-lg">{p.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Section: Reservas ──────────────────────────────────────────────────────

function Reservas() {
  const [fields, setFields] = useState({
    name: '',
    email: '',
    date: '',
    destination: '',
    details: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setFields({ ...fields, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await fetch('/elcoro-forms.html', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'reserva', ...fields }),
    })
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section id="reservas" className="py-20 px-6 bg-white">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#CE1126] uppercase tracking-widest text-sm font-semibold">Reserva</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#002D62] mt-2">
            Planifica tu Estancia
          </h2>
          <p className="text-gray-500 mt-3">
            Completa el formulario y nuestro equipo te contactará en menos de 24 horas.
          </p>
        </div>
        {submitted ? (
          <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold text-green-800 mb-2">¡Solicitud recibida!</h3>
            <p className="text-green-700">
              Gracias, <strong>{fields.name}</strong>. Te contactaremos pronto al correo {fields.email}.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col gap-5"
          >
            <input type="hidden" name="form-name" value="reserva" />
            {/* Honeypot */}
            <div style={{ display: 'none' }}>
              <input name="bot-field" tabIndex={-1} autoComplete="off" />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#002D62] mb-1">
                Nombre completo *
              </label>
              <input
                type="text"
                name="name"
                value={fields.name}
                onChange={handleChange}
                required
                placeholder="Tu nombre"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#002D62]/30"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#002D62] mb-1">
                Correo electrónico *
              </label>
              <input
                type="email"
                name="email"
                value={fields.email}
                onChange={handleChange}
                required
                placeholder="tu@correo.com"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#002D62]/30"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#002D62] mb-1">
                Fecha de llegada *
              </label>
              <input
                type="date"
                name="date"
                value={fields.date}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#002D62]/30"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#002D62] mb-1">
                Destino *
              </label>
              <select
                name="destination"
                value={fields.destination}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#002D62]/30 bg-white"
              >
                <option value="">Selecciona un destino</option>
                <option value="Punta Cana">Punta Cana</option>
                <option value="Samaná">Samaná</option>
                <option value="Bahía de las Águilas">Bahía de las Águilas</option>
                <option value="Zona Colonial">Zona Colonial</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#002D62] mb-1">
                Detalles adicionales
              </label>
              <textarea
                name="details"
                value={fields.details}
                onChange={handleChange}
                rows={4}
                placeholder="Número de viajeros, preferencias, preguntas..."
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#002D62]/30 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-[#CE1126] hover:bg-red-700 disabled:opacity-60 text-white font-bold py-4 rounded-xl transition-colors shadow-md"
            >
              {loading ? 'Enviando...' : 'Enviar Solicitud de Reserva'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

// ─── Section: Reseñas ───────────────────────────────────────────────────────

type Review = { name: string; rating: number; comment: string; destination: string }

const initialReviews: Review[] = [
  {
    name: 'María García',
    rating: 5,
    comment: '¡Absolutamente increíble! Punta Cana superó todas mis expectativas. Las playas son de otro mundo y el servicio fue impecable. ¡Volveré sin dudarlo!',
    destination: 'Punta Cana',
  },
  {
    name: 'Carlos Rodríguez',
    rating: 5,
    comment: 'Los 27 Charcos de Damajagua fue la aventura de mi vida. Las guías fueron excelentes y la naturaleza es espectacular. Una experiencia única.',
    destination: 'Damajagua',
  },
  {
    name: 'Sophie Müller',
    rating: 4,
    comment: 'La Zona Colonial es puro encanto histórico. Caminar por esas calles adoquinadas en la noche es mágico. El tour con El Coro RD fue perfecto.',
    destination: 'Santo Domingo',
  },
]

function Resenas() {
  const [reviews, setReviews] = useState<Review[]>(initialReviews)
  const [newReview, setNewReview] = useState<Review>({ name: '', rating: 5, comment: '', destination: '' })
  const [submittedReview, setSubmittedReview] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setNewReview({ ...newReview, [e.target.name]: e.target.value })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newReview.name || !newReview.comment) return
    setReviews([{ ...newReview }, ...reviews])
    setSubmittedReview(true)
    setNewReview({ name: '', rating: 5, comment: '', destination: '' })
    setTimeout(() => setSubmittedReview(false), 3000)
  }

  return (
    <section id="resenas" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-[#CE1126] uppercase tracking-widest text-sm font-semibold">Viajeros</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#002D62] mt-2">
            Reseñas
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Lo que dicen quienes ya vivieron la magia dominicana.
          </p>
        </div>

        {/* Review cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 card-hover">
              <StarRating rating={r.rating} />
              <p className="text-gray-700 mt-3 text-sm leading-relaxed italic">"{r.comment}"</p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="font-semibold text-[#002D62] text-sm">{r.name}</p>
                {r.destination && (
                  <p className="text-xs text-gray-400">{r.destination}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Submit a review */}
        <div className="max-w-xl mx-auto bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-[#002D62] mb-5">Comparte tu experiencia</h3>
          {submittedReview ? (
            <p className="text-green-600 font-medium text-center py-4">¡Gracias por tu reseña! 🙏</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                value={newReview.name}
                onChange={handleChange}
                required
                placeholder="Tu nombre"
                className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#002D62]/30"
              />
              <input
                type="text"
                name="destination"
                value={newReview.destination}
                onChange={handleChange}
                placeholder="Destino visitado"
                className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#002D62]/30"
              />
              <div>
                <p className="text-sm font-semibold text-[#002D62] mb-2">Calificación</p>
                <StarRating rating={newReview.rating} onChange={(n) => setNewReview({ ...newReview, rating: n })} />
              </div>
              <textarea
                name="comment"
                value={newReview.comment}
                onChange={handleChange}
                required
                rows={3}
                placeholder="Cuéntanos tu experiencia..."
                className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#002D62]/30 resize-none"
              />
              <button
                type="submit"
                className="bg-[#002D62] hover:bg-blue-900 text-white font-bold py-3 rounded-xl transition-colors"
              >
                Publicar Reseña
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

// ─── Section: Contacto ──────────────────────────────────────────────────────

function Contacto() {
  return (
    <section id="contacto" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-[#CE1126] uppercase tracking-widest text-sm font-semibold">Hablemos</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#002D62] mt-2">Contacto</h2>
          <p className="text-gray-500 mt-3">
            Estamos listos para ayudarte a planificar el viaje de tu vida.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {/* WhatsApp */}
          <a
            href="https://wa.me/18493425653"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-5 bg-green-50 hover:bg-green-100 border border-green-200 rounded-2xl p-7 transition-colors card-hover group"
          >
            <div className="bg-[#25d366] text-white rounded-full w-14 h-14 flex items-center justify-center text-2xl shadow-md flex-shrink-0">
              💬
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">WhatsApp</p>
              <p className="text-xl font-bold text-gray-800 group-hover:text-green-700 transition-colors">
                849-342-5653
              </p>
              <p className="text-sm text-gray-500">Díaz Calixto</p>
            </div>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/DiazCalixto"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-5 bg-pink-50 hover:bg-pink-100 border border-pink-200 rounded-2xl p-7 transition-colors card-hover group"
          >
            <div
              className="text-white rounded-full w-14 h-14 flex items-center justify-center text-2xl shadow-md flex-shrink-0"
              style={{ background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)' }}
            >
              📸
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">Instagram</p>
              <p className="text-xl font-bold text-gray-800 group-hover:text-pink-700 transition-colors">
                @DíazCalixto
              </p>
              <p className="text-sm text-gray-500">Síguenos</p>
            </div>
          </a>
        </div>

        <p className="text-center text-gray-400 text-sm mt-12">
          Horario de atención: Lunes a Sábado · 8:00 AM – 8:00 PM (AST)
        </p>
      </div>
    </section>
  )
}

// ─── Footer ─────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="gradient-header text-white py-10 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-2xl font-bold mb-1">🌴 El Coro RD</p>
        <p className="text-blue-200 text-sm mb-4">Turismo Oficial República Dominicana</p>
        <div className="flex justify-center gap-6 mb-6">
          {['Destinos', 'Aventura', 'Historia', 'Planifica', 'Reservas', 'Reseñas', 'Contacto'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace('ñ', 'n').replace('é', 'e')}`}
              className="text-blue-200 hover:text-white text-xs transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
        <div className="border-t border-white/20 pt-6 text-blue-300 text-xs space-y-1">
          <p>© {new Date().getFullYear()} El Coro RD - Turismo Oficial República Dominicana</p>
          <p>Gestionado por Díaz Calixto · Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  )
}

// ─── WhatsApp Float ──────────────────────────────────────────────────────────

function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/18493425653"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Contactar por WhatsApp"
      title="849-342-5653"
    >
      <svg width="30" height="30" viewBox="0 0 30 30" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 2.25C8.0 2.25 2.25 8.0 2.25 15c0 2.24.6 4.35 1.65 6.17L2.25 27.75l6.77-1.63A12.67 12.67 0 0015 27.75c6.99 0 12.75-5.76 12.75-12.75S21.99 2.25 15 2.25zm6.44 17.57c-.27.75-1.58 1.44-2.17 1.53-.56.08-1.26.12-2.03-.13a18.7 18.7 0 01-1.84-.68C12.45 19.5 10.4 17.1 10.2 16.84c-.2-.26-1.6-2.13-1.6-4.06 0-1.93 1.01-2.88 1.37-3.27.36-.39.79-.49 1.05-.49.26 0 .53.003.76.014.24.012.57-.09.9.69.34.8 1.14 2.74 1.24 2.94.1.2.17.43.03.69-.13.26-.2.42-.39.65-.2.23-.41.52-.59.7-.2.2-.4.41-.17.81.23.39 1.02 1.68 2.19 2.72 1.5 1.34 2.77 1.75 3.16 1.95.39.2.62.17.85-.1.23-.27.98-1.14 1.24-1.53.26-.39.52-.33.88-.2.36.13 2.27 1.07 2.66 1.27.39.2.65.3.74.46.1.17.1.97-.17 1.72z" />
      </svg>
    </a>
  )
}

// ─── Main Page ───────────────────────────────────────────────────────────────

function ElCoroRD() {
  return (
    <>
      <Header />
      <Nav />
      <Hero />
      <Destinos />
      <Aventura />
      <Historia />
      <Planifica />
      <Reservas />
      <Resenas />
      <Contacto />
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
