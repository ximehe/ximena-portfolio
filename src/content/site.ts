// Todo el contenido editable del sitio vive acá.
// Cambiar textos, precios, links o el proyecto destacado desde este único archivo.

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
    { text: "merece", variant: "small" },
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


// Placeholder: reemplazar por el número real de WhatsApp (formato: código de país + número, sin +)
export const whatsappNumber = "598XXXXXXXX";
export const whatsappMessage =
  "Hola! Vi tu página y quiero contarte sobre mi proyecto.";

export function getWhatsappUrl() {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
}

// Placeholders: reemplazar por las URLs reales
export const socials = {
  instagram: "#",
  linkedin: "#",
  github: "#",
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
    },
    {
      number: "02",
      title: "Disponible 24/7",
      description:
        "Tu negocio puede seguir mostrando lo que ofrecés incluso cuando vos no estás.",
    },
    {
      number: "03",
      title: "Generá confianza",
      description:
        "Una presencia online profesional transmite seriedad y confianza.",
    },
    {
      number: "04",
      title: "Facilitá el contacto",
      description:
        "Hacé que tus clientes encuentren fácilmente cómo contactarte o comprar.",
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
    },
    {
      number: "02",
      title: "Landing page",
      description:
        "Una página enfocada en presentar un producto, servicio o campaña y conseguir contactos.",
      imageSrc: null as string | null,
    },
    {
      number: "03",
      title: "Tienda online",
      description:
        "Un e-commerce para mostrar productos, gestionar un catálogo y recibir pedidos.",
      imageSrc: null as string | null,
    },
    {
      number: "04",
      title: "Sitio personalizado",
      description: "Una solución adaptada a necesidades específicas de tu negocio.",
      imageSrc: null as string | null,
    },
  ],
};

// Reemplazar imageSrc por la ruta real cuando exista la captura del
// proyecto (por ejemplo: import projectShot from "../assets/projects/magnolias.jpg").
// Hasta entonces se muestra un placeholder identificable.
export const featuredProject = {
  eyebrow: "Proyecto real / 01",
  name: ["Magnolias", "Cotillón"],
  category: "E-commerce · Proyecto real",
  description:
    "Un e-commerce desarrollado para un negocio real de cotillón, con catálogo de productos, variantes, carrito de compras y gestión de productos conectada a Supabase.",
  tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
  year: "2026",
  imageSrc: null as string | null,
  imageAlt: "Captura del proyecto Magnolias Cotillón",
};

export const about = {
  eyebrow: "Sobre mí",
  lead: "Estoy construyendo experiencia profesional trabajando con proyectos reales.",
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
  title: "Elegí lo que necesitás.",
  note: "El precio final depende de las funcionalidades y necesidades de cada proyecto.",
  items: [
    { title: "Landing page", price: "Desde $XX" },
    { title: "Página web", price: "Desde $XX" },
    { title: "Tienda online", price: "Desde $XX" },
    { title: "Sitio personalizado", price: "Consultar" },
  ],
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


