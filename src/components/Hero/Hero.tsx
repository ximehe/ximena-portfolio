import { useReveal } from "../../hooks/useReveal";
import { hero } from "../../content/site";
import magnoliasDesktop from "../../assets/projects/magnolias-desktop.png";
import magnoliasMobile from "../../assets/projects/magnolias-mobile.png";
import "./Hero.css";

export function Hero() {
  const scopeRef = useReveal<HTMLDivElement>();

  return (
    <section id="top" className="hero" ref={scopeRef}>
      <div className="container hero__grid">
        <div className="hero__copy">
          <h1 className="hero__title">
            {hero.titleWords.map((word, index) => (
              <span
                key={word.text}
                className={`hero__word hero__word--${word.variant}`}
                style={{ transitionDelay: `${index * 55}ms` }}
                data-reveal
              >
                {word.text}
              </span>
            ))}
          </h1>

          <div
            className="hero__foot"
            data-reveal
            style={{ transitionDelay: "380ms" }}
          >
            <p className="hero__subtitle">{hero.subtitle}</p>

            <div className="hero__actions">
              <a href={hero.ctaHref} className="btn btn-primary">
                {hero.ctaLabel}
              </a>
            </div>
          </div>

          <p
            className="hero__tags"
            data-reveal
            style={{ transitionDelay: "440ms" }}
          >
            {hero.tags.join(" · ")}
          </p>
        </div>

        <div
          className="hero__visual"
          aria-label="Vista del proyecto Magnolias Cotillón en escritorio y mobile"
          data-reveal
          style={{ transitionDelay: "220ms" }}
        >
          {/* Detalle editorial */}
          <div className="hero__meta" aria-hidden="true">
            <span>WEB</span>
            <span>2026</span>
          </div>

          {/* Detalle técnico */}
          <span className="hero__cross hero__cross--top" aria-hidden="true">
            +
          </span>

          <div className="hero__connector" aria-hidden="true" />

          {/* Pantalla de escritorio */}
          <div className="device-laptop">
            <div className="device-laptop__screen">
              <div className="device-laptop__bezel">
                <img
                  src={magnoliasDesktop}
                  alt="Sitio web de Magnolias Cotillón en versión escritorio"
                />
              </div>

              <div className="device-laptop__camera" />
            </div>

            <div className="device-laptop__base">
              <div className="device-laptop__hinge" />
            </div>
          </div>

          {/* Teléfono mobile */}
          <div className="device-phone">
            <div className="device-phone__speaker" />

            <div className="device-phone__screen">
              <img
                src={magnoliasMobile}
                alt="Sitio web de Magnolias Cotillón en versión mobile"
              />
            </div>
          </div>

          <div className="hero__project-label">
            <span className="hero__project-label-dot" />
            <span>Proyecto real · Magnolias Cotillón</span>
          </div>
        </div>
      </div>
    </section>
  );
}