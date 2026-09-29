import magnoliasDesktop from "../assets/projects/magnolias-desktop.png";

export const brand = {
  name: "Ximena Dev",
  tagline: "Desarrollo web para negocios y emprendimientos.",
};

export const nav = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proyecto", href: "#proyecto" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Cómo trabajo", href: "#como-trabajo" },
  { label: "Contacto", href: "#contacto" },
];

// Composición editorial del titular: cada palabra define únicamente su
// tamaño (variant). Todas las líneas comparten el mismo eje izquierdo —
// la jerarquía viene solo de la escala, nunca del desplazamiento.
export const hero = {
  titleWords: [
  { text: "Tu", variant: "huge" },
  { text: "negocio", variant: "huge" },
  { text: "merece", variant: "editorial" },
  { text: "una web", variant: "accent" },
  { text: "que esté", variant: "small" },
  { text: "a la altura.", variant: "medium" },
],
  subtitle:
    "Diseño y desarrollo sitios web modernos, rápidos y adaptados a celulares para pequeños negocios y emprendimientos.",
  ctaLabel: "Quiero una web para mi negocio →",
  ctaHref: "#contacto",
  tags: ["Sitios web", "Landing pages", "Catálogos", "Tiendas online"],
};


export const whatsappNumber = "59894094579";
export const whatsappMessage =
  "Hola! Vi tu página y quiero contarte sobre mi proyecto.";

export function getWhatsappUrl() {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
}

export const socials = {
  instagram: "https://www.instagram.com/ximeheernandez/",
  linkedin: "https://www.linkedin.com/in/ximehernandez/",
  github: "https://github.com/ximehe",
};

export const benefits = {
  introLines: [
    { text: "Tu negocio ya existe." },
    { text: "Ahora hacé que internet ", highlight: "lo vea." },
  ],

  items: [
    {
      number: "01",
      title: "Llegá a más clientes",
      description:
        "Una web permite que personas que todavía no conocen tu negocio puedan encontrarte.",
      details:
        "Tu negocio puede aparecer cuando alguien busca lo que ofrecés y tener un lugar propio donde mostrar tus servicios, productos, ubicación y formas de contacto.",
    },
    {
      number: "02",
      title: "Disponible 24/7",
      description:
        "Tu negocio puede seguir mostrando lo que ofrecés incluso cuando vos no estás.",
      details:
        "Una web trabaja por vos todo el día. Tus clientes pueden consultar información, conocer tus servicios y decidir si quieren contactarte en cualquier momento.",
    },
    {
      number: "03",
      title: "Generá confianza",
      description:
        "Una presencia online profesional transmite seriedad y confianza.",
      details:
        "Cuando alguien escucha hablar de tu negocio, muchas veces lo primero que hace es buscarlo en internet. Una web cuidada puede ayudarte a transmitir quién sos y qué ofrecés desde el primer momento.",
    },
    {
      number: "04",
      title: "Facilitá el contacto",
      description:
        "Hacé que tus clientes encuentren fácilmente cómo contactarte o comprar.",
      details:
        "Podemos reunir WhatsApp, redes sociales, ubicación, formularios, catálogo o tienda online en un solo lugar para que tus clientes sepan exactamente qué hacer después.",
    },
  ],
};

export const services = {
  title: "¿Qué puedo hacer por tu negocio?",
  items: [
    {
      number: "01",
      title: "Página web",
      description:
        "Una web profesional para mostrar tu negocio, servicios, información y formas de contacto.",
      imageSrc: null as string | null,
      details: {
        intro:
          "Una presencia online profesional para que tu negocio tenga un lugar propio en internet y pueda ser encontrado por nuevos clientes.",
        includes: [
          "Diseño personalizado para tu negocio",
          "Adaptación perfecta a celulares, tablets y computadoras",
          "Secciones de información y contacto",
          "Integración con WhatsApp y redes sociales",
          "Publicación y configuración inicial",
        ],
        idealFor:
          "Comercios, profesionales, emprendimientos y negocios que quieren tener su propia web.",
      },
    },
    {
      number: "02",
      title: "Landing page",
      description:
        "Una página enfocada en presentar un producto, servicio o campaña y conseguir contactos.",
      imageSrc: null as string | null,
      details: {
        intro:
          "Una página enfocada en una sola acción: presentar tu propuesta de forma clara y conseguir que las personas se contacten.",
        includes: [
          "Diseño visual enfocado en conversión",
          "Estructura clara y estratégica",
          "Diseño responsive",
          "Botones de contacto y llamadas a la acción",
          "Integración con WhatsApp y redes sociales",
        ],
        idealFor:
          "Lanzamientos, servicios profesionales, promociones, campañas y productos específicos.",
      },
    },
    {
      number: "03",
      title: "Tienda online",
      description:
        "Un e-commerce para mostrar productos, gestionar un catálogo y recibir pedidos.",
      imageSrc: null as string | null,
      details: {
        intro:
          "Una tienda online completa para mostrar tus productos, organizar tu catálogo y facilitar las compras o pedidos.",
        includes: [
          "Catálogo de productos",
          "Categorías y variantes",
          "Carrito de compras",
          "Gestión de pedidos",
          "Integración con medios de contacto o pago",
          "Experiencia adaptada a celulares",
        ],
        idealFor:
          "Emprendimientos y comercios que venden productos y quieren llevar su negocio al mundo online.",
      },
    },
    {
      number: "04",
      title: "Sitio personalizado",
      description:
        "Una solución adaptada a necesidades específicas de tu negocio.",
      imageSrc: null as string | null,
      details: {
        intro:
          "Si tu negocio necesita algo diferente, podemos pensar y desarrollar una solución a medida.",
        includes: [
          "Análisis de las necesidades del proyecto",
          "Diseño de una experiencia personalizada",
          "Funcionalidades específicas",
          "Integraciones con servicios externos",
          "Desarrollo responsive",
        ],
        idealFor:
          "Proyectos que necesitan funcionalidades o flujos que no encajan en una web tradicional.",
      },
    },
  ],
};


export const featuredProject = {
  eyebrow: "Proyecto real / 01",
  name: ["Magnolias", "Cotillón"],
  category: "E-commerce · Proyecto real",
  description:
    "Tienda online desarrollada para un negocio real de cotillón, con catálogo de productos, variantes, carrito de compras, wishlist y gestión de pedidos.",
  tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
  year: "2026",
  imageSrc: magnoliasDesktop,
  imageAlt: "Tienda online de Magnolias Cotillón en versión escritorio",
  liveUrl: "https://www.magnoliascotillon.com",
};

export const about = {
  eyebrow: "Sobre mí",

  leadLines: [
    {
      text: "Estoy construyendo ",
      highlight: "experiencia profesional",
    },
    {
      text: "trabajando con ",
      highlight: "proyectos reales.",
    },
  ],

  paragraphs: [
    "Soy estudiante de Ingeniería en Computación y estoy desarrollándome profesionalmente en el área de desarrollo web.",

    "Actualmente estoy abriendo espacio para nuevos proyectos y trabajando con pequeños negocios y emprendimientos que necesitan una presencia online profesional. Mi objetivo es crear sitios que no solo se vean bien, sino que realmente sean útiles para el negocio.",

    "Por eso, mientras sigo construyendo experiencia con proyectos reales, puedo ofrecer precios accesibles para pequeños negocios y emprendimientos.",
  ],
};

export const process = {
  title: "Así trabajamos juntos.",
  steps: [
    {
      number: "01",
      title: "Me contás tu idea",
      description:
        "Hablamos sobre tu negocio, qué necesitás y qué querés conseguir con la web.",
    },
    {
      number: "02",
      title: "Definimos qué necesitás",
      description:
        "Definimos estructura, contenido, funcionalidades y alcance del proyecto.",
    },
    {
      number: "03",
      title: "Desarrollo tu web",
      description: "Diseño y desarrollo el sitio adaptado a tu negocio y a celulares.",
    },
    {
      number: "04",
      title: "La publicamos",
      description: "Dejamos todo listo para que tu web esté online.",
    },
  ],
};

export const pricing = {
  eyebrow: "Cotización",
  title: "Cada proyecto es diferente. El presupuesto también.",
  intro:
    "No trabajo con precios cerrados porque cada negocio tiene necesidades distintas. El presupuesto se define según el alcance y lo que realmente necesitás para tu web.",

  factors: [
    {
      number: "01",
      title: "Alcance",
      description:
        "Qué tan grande es el sitio, cuántas páginas necesita y qué contenido va a incluir.",
    },
    {
      number: "02",
      title: "Funcionalidades",
      description:
        "Qué tiene que poder hacer tu web y qué herramientas o integraciones necesita.",
    },
    {
      number: "03",
      title: "Necesidades",
      description:
        "Qué necesitás para que la web no solo se vea bien, sino que realmente le sirva a tu negocio.",
    },
  ],

  closingTitle: "¿Tenés una idea en mente?",
  closingText:
    "Contame un poco sobre tu proyecto y vemos juntos qué necesitás.",
  ctaLabel: "Quiero consultar →",
  ctaHref: "#contacto",
};

export const contact = {
  title: "¿Hacemos realidad tu web?",
  text: "Contame sobre tu negocio, qué necesitás y qué tenés en mente. Vemos juntos cuál es la mejor opción para vos.",
  ctaLabel: "Quiero hablar sobre mi proyecto →",
};

export const footer = {
  links: [
    { label: "Inicio", href: "#top" },
    { label: "Servicios", href: "#servicios" },
    { label: "Proyecto", href: "#proyecto" },
    { label: "Sobre mí", href: "#sobre-mi" },
    { label: "Contacto", href: "#contacto" },
  ],
  copy: "© 2026 — Todos los derechos reservados.",
};


