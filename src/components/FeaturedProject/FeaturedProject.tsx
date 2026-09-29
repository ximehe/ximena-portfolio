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
          <h2 className="featured__title" data-reveal style={{ transitionDelay: "60ms" }}>
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
            {featuredProject.imageSrc ? (
              <img src={featuredProject.imageSrc} alt={featuredProject.imageAlt} />
            ) : (
              <div className="featured__image-placeholder">
                <span>Captura del proyecto</span>
                <span className="featured__image-placeholder-note">
                  Se reemplaza por la imagen real
                </span>
              </div>
            )}
          </div>

          <div className="featured__meta" data-reveal style={{ transitionDelay: "220ms" }}>
            <p className="featured__category">{featuredProject.category}</p>

            <p className="featured__description">{featuredProject.description}</p>

            <ul className="featured__tech">
              {featuredProject.tech.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>

            <p className="featured__year">{featuredProject.year}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
