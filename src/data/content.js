// Todo el contenido editable de la página vive aquí.
// Para agregar imágenes: colócalas en /public/images y referencia con img('archivo.jpg').

// Rutas de imágenes compatibles con GitHub Pages (subcarpeta)
const img = (file) => `${import.meta.env.BASE_URL}images/${file}`

// Fechas base (AAAA-MM-DD). La edad y los años de experiencia se calculan solos con la fecha de hoy.
const BIRTH_DATE = '2007-03-31'
const CAREER_START = '2024-01-01' // TODO: poner fecha exacta en que empezó a impulsar marcas

function yearsSince(date) {
  const from = new Date(`${date}T00:00:00`)
  const now = new Date()
  let years = now.getFullYear() - from.getFullYear()
  const beforeAnniversary =
    now.getMonth() < from.getMonth() || (now.getMonth() === from.getMonth() && now.getDate() < from.getDate())
  if (beforeAnniversary) years--
  return Math.max(years, 0)
}

const age = yearsSince(BIRTH_DATE)
const years = Math.max(yearsSince(CAREER_START), 1)
const yearsLabel = years === 1 ? '1 año' : `${years} años`

export const profile = {
  name: 'Alison Beatriz',
  lastName: 'Argueta Aguilar',
  age,
  role: 'Impulsora de marcas',
  years,
  yearsLabel,
  photo: img('alison-principal-benetton.png'),
  phone: '7677-3369',
  whatsapp: 'https://wa.me/50376773369?text=' + encodeURIComponent('¡Hola Alison! Vi tu página y me gustaría trabajar contigo.'),
}

export const intro = [
  `¡Hola! Soy Alison Beatriz Argueta Aguilar, tengo ${age} años y desde hace ${yearsLabel} me dedico a lo que más me apasiona: impulsar marcas.`,
  'He tenido la oportunidad de estar en diferentes lugares y en cada uno aprendí algo nuevo: a conectar con las personas, a contar historias que se quedan y a convertir una idea en algo que la gente quiere seguir.',
  'Soy joven, sí, pero eso me da energía, frescura y ganas de ir siempre un paso más allá.',
  'Si buscas a alguien que crea en tu marca tanto como tú, aquí estoy. ✨',
]

export const stats = [
  { value: `${years}+`, label: years === 1 ? 'Año impulsando marcas' : 'Años impulsando marcas' },
  { value: `${age}`, label: 'Años de pura energía' },
  { value: '∞', label: 'Ideas por crear' },
]

export const credentials = [
  { icon: '🎓', title: 'Diplomado en inglés', detail: 'Nivel A2' },
  { icon: '🚗', title: 'Licencia de conducir', detail: 'Disponibilidad para movilizarme' },
  { icon: '🛂', title: 'Pasaporte vigente', detail: 'Disponibilidad para viajar' },
]

export const skills = [
  { icon: '📱', title: 'Contenido para redes', text: 'Fotos, reels y stories que se sienten auténticos y venden.' },
  { icon: '🤝', title: 'Atención al cliente', text: 'Conecto con las personas y hago que vuelvan.' },
  { icon: '🎉', title: 'Activaciones y eventos', text: 'Represento tu marca en eventos con energía y buena vibra.' },
]

// Experiencia: cada lugar con su foto (en /public/images)
export const experience = [
  { place: 'Givenchy · Magie Multiplaza', image: img('givenchy-magie-multiplaza.png'), text: 'Impulsando la marca Givenchy en Magie Multiplaza: asesoría de fragancias y maquillaje, conectando con cada cliente.' },
  { place: 'Hugo Pork · Super Selectos', image: img('hugo-pork-super-selectos.png'), text: 'Impulsando la marca Hugo Pork en sala de ventas: degustación, recomendación de productos y atención directa al cliente.' },
  { place: 'Sello de Oro', image: img('sello-de-oro.png'), text: 'Impulsando la marca Sello de Oro: degustación de alitas, recomendación de productos y atención con la mejor sonrisa.' },
  { place: 'Cerveza Gallo · La Despensa de Don Juan', image: img('gallo-despensa-don-juan.png'), text: 'Impulsando la marca Gallo: presentando Gallo Light, recomendando el producto y conectando con cada cliente en sala de ventas.' },
  { place: "Hellmann's", image: img('hellmanns-degustacion.png'), text: "Degustación de la marca Hellmann's: preparando muestras, dando a probar la cremosidad de sus mayonesas y animando a cada cliente a llevarlas a casa." },
  { place: 'Soleá', image: img('solea-bartender.png'), text: 'Bartender para la marca Soleá: preparando y sirviendo bebidas, cuidando cada detalle de la barra y haciendo que cada invitado viva la experiencia de la marca.' },
  { place: 'YSL · Magie La Gran Vía', image: img('ysl-magie-gran-via.png'), text: 'Rocío de fragancias para la marca Yves Saint Laurent en Magie La Gran Vía: invitando a cada cliente a descubrir sus aromas y enamorarse de la marca.' },
  { place: 'Staff · Concierto Yandel Sinfónico', image: img('staff-yandel-sinfonico.png'), text: 'Parte del staff del concierto de Yandel Sinfónico: orientando al público en los ingresos y ayudando a que cada asistente viviera una gran experiencia.' },
  { place: 'Oreo · Super Selectos Santa Tecla', image: img('oreo-super-selectos-santa-tecla.png'), text: 'Impulsando la marca Oreo con degustación de galletas: invitando a cada cliente a probar la nueva Oreo Golden Fresa y llevarla a casa.' },
  { place: 'Lancôme · Magie La Gran Vía', image: img('lancome-magie-gran-via.png'), text: 'Impulsando la marca Lancôme en Magie La Gran Vía: asesoría de maquillaje y cuidado de la piel, ayudando a cada clienta a encontrar lo ideal para ella.' },
  { place: 'Biotherm · Magie La Gran Vía', image: img('biotherm-magie-gran-via.png'), text: 'Bartender para la marca Biotherm en Magie La Gran Vía: ofreciendo degustación en la barra y presentando la marca a cada cliente que se acercaba.' },
  { place: 'Mugler · Magie Multiplaza', image: img('mugler-magie-multiplaza.png'), text: 'Impulsando la nueva fragancia de Mugler en Magie Multiplaza: presentando su aroma, invitando a cada cliente a descubrirla y enamorarse de la marca.' },
  { place: 'Micoco · Super Selectos', image: img('micoco-super-selectos.png'), text: 'Degustación de agua de coco Micoco: invitando a cada cliente a refrescarse, probar el producto y llevarlo a casa.' },
  { place: 'Benetton · Magie Multiplaza', image: img('benetton-magie-multiplaza.png'), text: 'Impulsando la nueva fragancia Tribe Elixir de United Colors of Benetton en Magie Multiplaza: presentando sus aromas y acercando la marca a cada cliente.' },
  { place: 'Grupo Magie · Magie La Gran Vía', image: img('magie-gran-via-evento-navideno.png'), text: 'Apoyando a Grupo Magie en Magie La Gran Vía durante su evento navideño: atendiendo a los clientes y ayudando a que la temporada brillara en la tienda.' },
  { place: 'Shakira · Magie La Gran Vía', image: img('shakira-magie-gran-via.png'), text: 'Rociando la nueva fragancia de Shakira, Amarillo, en Magie La Gran Vía: invitando a cada cliente a descubrir su aroma y llevarse la novedad.' },
]
