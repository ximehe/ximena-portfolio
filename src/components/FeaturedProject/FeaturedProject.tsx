import { useReveal } from "../../hooks/useReveal";
import { featuredProject } from "../../content/site";
import "./FeaturedProject.css";

export function FeaturedProject() {
  const scopeRef = useReveal<HTMLDivElement>();

  return (
    <section id="proyecto" className="featured" ref={scopeRef}>
      <div className="container">
        <div className="featured__header">
          <p className="eyebrow" data-reveal>
            {featuredProject.eyebrow}
          </p>

          <h2
            className="featured__title"
            data-reveal
            style={{ transitionDelay: "60ms" }}
          >
            {featuredProject.name.map((line) => (
              <span key={line} className="featured__title-line">
                {line}
              </span>
            ))}
          </h2>
        </div>

        <div className="featured__grid">
         <div
            className="featured__image"
            data-reveal
            style={{ transitionDelay: "140ms" }}
          >
            <a
              href={featuredProject.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="featured__image-link"
              aria-label="Ver web de Magnolias Cotillón"
            >
              <img
                src={featuredProject.imageSrc}
                alt={featuredProject.imageAlt}
              />

              <span className="featured__image-overlay">
                <span className="featured__image-button">
                  Ver web
                  <span aria-hidden="true">↗︎</span>
                </span>
              </span>
            </a>
          </div>

          <div
            className="featured__meta"
            data-reveal
            style={{ transitionDelay: "220ms" }}
          >
            <p className="featured__category">
              {featuredProject.category}
            </p>

            <p className="featured__description">
              {featuredProject.description}
            </p>

            <div className="featured__details">
              <div className="featured__detail">
                <span className="featured__detail-label">
                  Tecnologías
                </span>

                <ul className="featured__tech">
                  {featuredProject.tech.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>

              <div className="featured__detail featured__detail--year">
                <span className="featured__detail-label">
                  Año
                </span>

                <p className="featured__year">
                  {featuredProject.year}
                </p>
              </div>
            </div>

            <a href="#contacto" className="featured__cta">
              Quiero algo así para mi negocio
              <span aria-hidden="true">↗︎</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}