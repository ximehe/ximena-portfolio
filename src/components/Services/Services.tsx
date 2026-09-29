import { useEffect, useState } from "react";
import { useReveal } from "../../hooks/useReveal";
import { services } from "../../content/site";
import "./Services.css";

type Service = (typeof services.items)[number];

export function Services() {
  const scopeRef = useReveal<HTMLDivElement>();
  const [activeService, setActiveService] = useState<Service | null>(null);

  useEffect(() => {
    if (!activeService) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [activeService]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveService(null);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <section id="servicios" className="services" ref={scopeRef}>
        <div className="container">
          <div className="services__header">
            <p className="eyebrow" data-reveal>
              Servicios
            </p>

            <h2
              className="services__title"
              data-reveal
              style={{ transitionDelay: "60ms" }}
            >
              {services.title}
            </h2>
          </div>

          <ul className="services__list">
            {services.items.map((item, index) => (
              <li
                key={item.number}
                className="services__item"
                data-reveal
                style={{ transitionDelay: `${140 + index * 80}ms` }}
              >
                <div className="services__number">{item.number}</div>

                <div className="services__content">
                  <h3 className="services__item-title">
                    {item.title}
                  </h3>

                  <p className="services__item-text">
                    {item.description}
                  </p>
                </div>

                <button
                  type="button"
                  className="services__action"
                  onClick={() => setActiveService(item)}
                  aria-label={`Ver más sobre ${item.title}`}
                >
                  <span>Ver más</span>
                  <span className="services__arrow" aria-hidden="true">
                    ↗
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {activeService && (
        <div
          className="services-modal"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setActiveService(null);
            }
          }}
        >
          <div
            className="services-modal__panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="services-modal-title"
          >
            <button
              type="button"
              className="services-modal__close"
              onClick={() => setActiveService(null)}
              aria-label="Cerrar"
            >
              ×
            </button>

            <div className="services-modal__header">
              <span className="services-modal__number">
                {activeService.number}
              </span>

              <p className="services-modal__eyebrow">
                Servicio
              </p>

              <h2
                id="services-modal-title"
                className="services-modal__title"
              >
                {activeService.title}
              </h2>
            </div>

            <div className="services-modal__body">
              <p className="services-modal__intro">
                {activeService.details.intro}
              </p>

              <div className="services-modal__section">
                <span className="services-modal__label">
                  Incluye
                </span>

                <ul className="services-modal__includes">
                  {activeService.details.includes.map((include) => (
                    <li key={include}>
                      <span aria-hidden="true">✓</span>
                      {include}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="services-modal__section">
                <span className="services-modal__label">
                  Ideal para
                </span>

                <p className="services-modal__ideal">
                  {activeService.details.idealFor}
                </p>
              </div>
            </div>

            <a
              href="#contacto"
              className="services-modal__cta"
              onClick={() => setActiveService(null)}
            >
              Quiero este servicio
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}