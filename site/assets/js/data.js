/* =========================================================
   VIAJES ANGEL — datos de tours (fuente única para todas las páginas)
   ========================================================= */
const TOURS = [
  {
    slug: "salar-uyuni-clasico",
    title: "Tour Clásico Salar de Uyuni 3D/2N",
    country: "Bolivia",
    category: "bolivia",
    badge: "pop",
    badgeText: "Popular",
    price: "220",
    priceNote: "por persona / salida La Paz",
    duration: "3 días · 2 noches",
    people: "Grupos reducidos",
    image: "uyuni-sunset.jpg",
    gallery: ["uyuni-sunset.jpg","uyuni-2.jpg","uyuni-flags.jpg","uyuni-13.jpg"],
    summary: "El clásico imperdible: el espejo de sal más grande del mundo, la Laguna Colorada, los géiseres de Sol de Mañana y el desierto de Siloli, con la opción de continuar hasta San Pedro de Atacama.",
    tags: ["Salar de Uyuni","Laguna Colorada","Desierto de Siloli","Aventura 4x4"],
    incluye: [
      "Transporte terrestre La Paz - Uyuni - Uyuni / San Pedro de Atacama",
      "Movilidad 4x4 con chofer-guía bilingüe",
      "2 noches de alojamiento (hostal de sal / refugio)",
      "Alimentación completa según itinerario",
      "Entrada a la Reserva Nacional de Fauna Andina Eduardo Avaroa",
      "Visita al Cementerio de Trenes y Salar de Uyuni",
      "Fotos panorámicas incluidas en el recorrido"
    ],
    noIncluye: [
      "Vuelos o buses nocturnos de conexión",
      "Bebidas alcohólicas",
      "Propinas y gastos personales",
      "Impuesto de salida a Chile (si continúa a San Pedro)"
    ],
    llevar: ["Ropa abrigadora (las noches bajan de 0°C)","Bloqueador solar y lentes de sol","Botella de agua reutilizable","Cámara fotográfica","Documento de identidad / pasaporte"],
    itinerario: [
      {t:"Día 1 · La Paz - Uyuni - Cementerio de Trenes", d:"Salida en bus cama hacia Uyuni. Visita al Cementerio de Trenes, Colchani y las primeras vistas del Salar. Atardecer inolvidable sobre el espejo de sal."},
      {t:"Día 2 · Isla Incahuasi - Desierto de Siloli", d:"Cruce del Salar hasta la Isla Incahuasi (cactus gigantes), continuando hacia los Valles de Rocas y las lagunas altoandinas."},
      {t:"Día 3 · Laguna Colorada - Géiseres - Salida", d:"Amanecer en la Laguna Colorada junto a los flamencos, géiseres Sol de Mañana, Aguas Termales de Polques y retorno o conexión a San Pedro de Atacama."}
    ]
  },
  {
    slug: "uyuni-copacabana-tiahuanaco",
    title: "Uyuni + Copacabana + Tiahuanaco + Laguna Colorada",
    country: "Bolivia",
    category: "combo",
    badge: "combo",
    badgeText: "Combo",
    price: "450",
    priceNote: "desde, según duración (5, 6 o 7 días)",
    duration: "5 a 7 días",
    people: "Programa flexible",
    image: "uyuni-flags.jpg",
    gallery: ["uyuni-flags.jpg","lapaz-umbrellas.jpg","isladelsol-2.jpg","uyuni-tower.jpg"],
    summary: "El recorrido más completo de Bolivia: Tiahuanaco, La Paz, el Lago Titicaca con Copacabana y el Salar de Uyuni con Laguna Colorada y Reserva de Flamencos, en un solo viaje.",
    tags: ["Tiahuanaco","La Paz","Copacabana","Uyuni","Flamencos"],
    incluye: [
      "Transporte turístico en todas las rutas del programa",
      "Guía profesional bilingüe",
      "Entradas a Tiahuanaco y Reserva de Flamencos",
      "Alojamiento según noches del programa elegido",
      "Movilidad 4x4 en el tramo del Salar de Uyuni",
      "Asistencia permanente de Viajes Angel"
    ],
    noIncluye: ["Vuelos internacionales","Almuerzos y cenas no especificados","Propinas","Excursiones opcionales"],
    llevar: ["Ropa de abrigo por capas","Documento de identidad / pasaporte","Medicamento para el soroche (altura)","Cámara y batería extra"],
    itinerario: [
      {t:"Día 1 · La Paz - Tiahuanaco", d:"City tour por La Paz y visita a las ruinas preincaicas de Tiahuanaco, cuna de la cultura andina."},
      {t:"Día 2 · Copacabana - Isla del Sol", d:"Viaje al Lago Titicaca, visita a Copacabana y navegación a la Isla del Sol, cuna del imperio inca."},
      {t:"Día 3-4 · La Paz - Uyuni", d:"Traslado a Uyuni para iniciar el recorrido por el Salar, Isla Incahuasi y los Valles de Rocas."},
      {t:"Día 5-7 · Laguna Colorada - Reserva de Flamencos", d:"Recorrido por las lagunas altiplánicas, géiseres, aguas termales y observación de la Reserva de Flamencos."}
    ]
  },
  {
    slug: "la-paz-magica",
    title: "Full Day La Paz Mágica + Valle de la Luna",
    country: "Bolivia",
    category: "bolivia",
    badge: "new",
    badgeText: "Nuevo",
    price: "45",
    priceNote: "por persona",
    duration: "1 día completo",
    people: "Salidas diarias",
    image: "lapaz-plaza.jpg",
    gallery: ["lapaz-plaza.jpg","lapaz-umbrellas.jpg","lapaz-3.jpg","lapaz-2.jpg"],
    summary: "Descubre la ciudad más alta del mundo: su casco histórico, la icónica Calle de las Sombrillas, miradores panorámicos y el sorprendente Valle de la Luna.",
    tags: ["City Tour","Valle de la Luna","Teleférico","Compras artesanales"],
    incluye: [
      "Transporte turístico con guía",
      "City tour por el centro histórico de La Paz",
      "Visita a la Calle de las Sombrillas y mercado de artesanías",
      "Recorrido en teleférico (tramo panorámico)",
      "Entrada al Valle de la Luna",
      "Fotografías del recorrido"
    ],
    noIncluye: ["Almuerzo","Compras personales","Propinas"],
    llevar: ["Calzado cómodo","Chaqueta ligera","Cámara de fotos","Efectivo para artesanías"],
    itinerario: [
      {t:"Mañana · Centro histórico", d:"Recojo del hotel, visita a la Plaza Murillo, Iglesia de San Francisco y el famoso Mercado de las Brujas."},
      {t:"Medio día · Miradores y teleférico", d:"Ascenso en teleférico para apreciar la ciudad desde las alturas de El Alto."},
      {t:"Tarde · Valle de la Luna", d:"Visita a las formaciones rocosas del Valle de la Luna y retorno al hotel."}
    ]
  },
  {
    slug: "copacabana-isla-del-sol",
    title: "Copacabana + Isla del Sol",
    country: "Bolivia",
    category: "bolivia",
    badge: "pop",
    badgeText: "Popular",
    price: "65",
    priceNote: "por persona",
    duration: "1 a 2 días",
    people: "Salidas diarias",
    image: "isladelsol-1.jpg",
    gallery: ["isladelsol-1.jpg","isladelsol-2.jpg","isladelsol-3.jpg","isladelsol-5.jpg"],
    summary: "Navega el lago navegable más alto del mundo, visita el Santuario de la Virgen de Copacabana y camina por los senderos ancestrales de la Isla del Sol, cuna de la mitología inca.",
    tags: ["Lago Titicaca","Isla del Sol","Cultura Inca","Navegación"],
    incluye: [
      "Transporte La Paz - Copacabana - La Paz",
      "Guía especializado en cultura andina",
      "Navegación a la Isla del Sol",
      "Visita al Santuario de Copacabana",
      "Entradas a sitios arqueológicos de la isla"
    ],
    noIncluye: ["Alimentación","Hospedaje (en la opción de 2 días)","Propinas"],
    llevar: ["Bloqueador solar","Sombrero o gorra","Calzado de trekking","Poncho impermeable"],
    itinerario: [
      {t:"Día 1 · Copacabana", d:"Viaje bordeando el Lago Titicaca hasta Copacabana. Visita al Santuario y tiempo libre en la playa del lago."},
      {t:"Día 2 · Isla del Sol", d:"Navegación hacia la Isla del Sol, caminata por las terrazas incas y las ruinas de Pilkokaina, retorno a La Paz."}
    ]
  },
  {
    slug: "cusco-machupicchu-humantay-salkantay",
    title: "Machu Picchu - Humantay - Salkantay - Montaña de Colores 7D",
    country: "Perú",
    category: "peru",
    badge: "pop",
    badgeText: "Popular",
    price: "850",
    priceNote: "por persona (mínimo 7 pax) / desde $900 en grupos pequeños",
    duration: "7 días · 6 noches",
    people: "Mínimo 2 personas",
    image: "lapaz-3.jpg",
    gallery: ["lapaz-3.jpg","hero-group.jpg","lapaz-4.jpg"],
    summary: "La ruta más completa del sur peruano: Machu Picchu, la Laguna Humantay, el trekking de Salkantay y la espectacular Montaña de Colores, todo en un solo programa con guías especializados.",
    tags: ["Machu Picchu","Trekking Salkantay","Laguna Humantay","Montaña de 7 Colores"],
    incluye: [
      "Recojo del aeropuerto de Cusco",
      "City tour por Cusco e Iglesias coloniales",
      "Entrada a Machu Picchu con guía oficial",
      "Trekking guiado a la Laguna Humantay",
      "Excursión a la Montaña de Colores (Vinicunca)",
      "Transporte terrestre en todo el recorrido",
      "Alojamiento según programa"
    ],
    noIncluye: ["Tren a Machu Picchu (cotizar aparte)","Boleto Turístico General de Cusco","Alimentación no especificada","Equipo de trekking personal"],
    llevar: ["Mochila de trekking","Ropa térmica","Botas de trekking","Bastones de senderismo","Documentos de viaje"],
    itinerario: [
      {t:"Día 1 · Llegada a Cusco", d:"Recojo del aeropuerto, traslado al hotel y city tour por el centro histórico de Cusco."},
      {t:"Día 2 · Laguna Humantay", d:"Excursión a la impresionante Laguna Humantay, a los pies del nevado Salkantay."},
      {t:"Día 3-4 · Trekking Salkantay", d:"Caminata por la ruta Salkantay, uno de los treks más espectaculares de Sudamérica."},
      {t:"Día 5 · Machu Picchu", d:"Visita guiada a la ciudadela inca de Machu Picchu, una de las 7 maravillas del mundo moderno."},
      {t:"Día 6 · Montaña de Colores", d:"Excursión a Vinicunca, la Montaña de los 7 Colores."},
      {t:"Día 7 · Salida", d:"Tiempo libre para compras y traslado al aeropuerto."}
    ]
  },
  {
    slug: "cusco-uyuni-flamencos-12dias",
    title: "Cusco - Machu Picchu - Tiahuanaco + Salar de Uyuni + Flamencos 12D/11N",
    country: "Perú - Bolivia",
    category: "combo",
    badge: "combo",
    badgeText: "Combo Perú-Bolivia",
    price: "Cotizar",
    priceNote: "programa a medida",
    duration: "12 días · 11 noches",
    people: "Grupos y parejas",
    image: "uyuni-9.jpg",
    gallery: ["uyuni-9.jpg","uyuni-tower.jpg","uyuni-flags.jpg","lapaz-3.jpg","isladelsol-1.jpg"],
    summary: "Vive la mejor experiencia combinando las rutas turísticas más espectaculares de Sudamérica: las dos maravillas paisajísticas de Perú y Bolivia en un solo viaje, con atención personalizada de principio a fin.",
    tags: ["Cusco","Machu Picchu","Valle Sagrado","Tiahuanaco","Salar de Uyuni","Flamencos"],
    incluye: [
      "Traslados aeropuerto - hotel - aeropuerto",
      "City tour Cusco + Valle Sagrado",
      "Entrada a Machu Picchu con tren y guía",
      "Excursión a la Montaña de Colores",
      "Cruce Perú - Bolivia (Puno - Copacabana - La Paz)",
      "Visita a Tiahuanaco",
      "Recorrido completo del Salar de Uyuni",
      "Reserva Nacional de Fauna Andina (Flamencos)",
      "Alojamiento durante todo el programa"
    ],
    noIncluye: ["Vuelos internacionales","Boleto Turístico de Cusco","Alimentación libre","Propinas y gastos personales"],
    llevar: ["Pasaporte / DNI vigente","Ropa para clima frío y cálido","Medicamento para la altura","Cámara fotográfica"],
    itinerario: [
      {t:"Día 1-4 · Cusco - Valle Sagrado - Machu Picchu", d:"City tour, Valle Sagrado, Ollantaytambo y visita guiada a la ciudadela de Machu Picchu."},
      {t:"Día 5 · Montaña de Colores", d:"Excursión de día completo a Vinicunca."},
      {t:"Día 6-7 · Puno - Lago Titicaca - Copacabana", d:"Cruce de frontera hacia Bolivia, navegación por el Titicaca e Islas Uros."},
      {t:"Día 8 · La Paz - Tiahuanaco", d:"City tour en La Paz y visita a las ruinas de Tiahuanaco."},
      {t:"Día 9-11 · Salar de Uyuni - Laguna Colorada - Flamencos", d:"El recorrido completo por el Salar de Uyuni, lagunas de colores y la Reserva de Flamencos."},
      {t:"Día 12 · Salida", d:"Traslado final y despedida."}
    ]
  },
  {
    slug: "amazonas-rio-napo",
    title: "Expedición Río Napo y Amazonas 7 Días",
    country: "Amazonas",
    category: "amazonas",
    badge: "new",
    badgeText: "Nuevo",
    price: "Cotizar",
    priceNote: "programa a medida",
    duration: "7 días · 6 noches",
    people: "Grupos reducidos",
    image: "uyuni-tower.jpg",
    gallery: ["uyuni-tower.jpg","uyuni-8.jpg"],
    summary: "Surca el Río Napo hacia el corazón de la Amazonía: comunidades nativas, fauna silvestre, selva virgen y noches bajo un cielo estrellado inigualable.",
    tags: ["Selva Amazónica","Río Napo","Comunidades nativas","Fauna silvestre"],
    incluye: [
      "Transporte fluvial y terrestre",
      "Guía naturalista bilingüe",
      "Alojamiento en lodge ecológico",
      "Alimentación completa en la selva",
      "Excursiones de observación de fauna",
      "Visita a comunidades nativas"
    ],
    noIncluye: ["Vuelos hacia la ciudad de conexión","Bebidas alcohólicas","Propinas al staff local"],
    llevar: ["Ropa de manga larga","Repelente de insectos","Botas de agua","Impermeable ligero"],
    itinerario: [
      {t:"Día 1 · Llegada", d:"Recojo y traslado al punto de embarque sobre el Río Napo."},
      {t:"Día 2-5 · Selva profunda", d:"Caminatas nocturnas y diurnas, pesca deportiva, observación de aves y visita a comunidades nativas."},
      {t:"Día 6-7 · Retorno", d:"Última expedición de fauna y retorno hacia la ciudad de origen."}
    ]
  },
  {
    slug: "bolivia-8dias-isla-sol-uyuni",
    title: "Tour 8 Días Bolivia: Isla del Sol - Ciudad de la Plata - Salar de Uyuni",
    country: "Bolivia",
    category: "bolivia",
    badge: "new",
    badgeText: "Nuevo",
    price: "Cotizar",
    priceNote: "programa a medida",
    duration: "8 días · 7 noches",
    people: "Grupos y parejas",
    image: "isladelsol-2.jpg",
    gallery: ["isladelsol-2.jpg","isladelsol-3.jpg","lapaz-7.jpg","uyuni-6.jpg"],
    summary: "Un recorrido histórico y paisajístico: la mística Isla del Sol, la colonial Ciudad de la Plata (Sucre) y el imponente Salar de Uyuni, con 25 años de experiencia guiando viajeros por Bolivia.",
    tags: ["Isla del Sol","Sucre","Salar de Uyuni","Historia y cultura"],
    incluye: [
      "Transporte turístico en todas las rutas",
      "Guía profesional en todo el recorrido",
      "Alojamiento 7 noches",
      "Navegación a la Isla del Sol",
      "City tour por Sucre, Ciudad Blanca",
      "Recorrido completo del Salar de Uyuni"
    ],
    noIncluye: ["Vuelos internos entre ciudades (opcional)","Alimentación no especificada","Propinas"],
    llevar: ["Documento de identidad vigente","Ropa de abrigo","Cámara fotográfica","Medicamento para la altura"],
    itinerario: [
      {t:"Día 1-2 · La Paz - Copacabana - Isla del Sol", d:"Navegación por el Titicaca y caminata por los senderos incas de la isla."},
      {t:"Día 3-4 · Sucre, la Ciudad Blanca", d:"Recorrido por el centro histórico colonial declarado Patrimonio de la Humanidad."},
      {t:"Día 5-8 · Salar de Uyuni", d:"El recorrido clásico del Salar, lagunas de colores y desierto de Siloli."}
    ]
  }
];

function tourImg(name){ return "assets/img/" + name; }
