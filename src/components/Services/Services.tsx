import { useReveal } from "../../hooks/useReveal";
import { services } from "../../content/site";
import "./Services.css";

export function Services() {
  const scopeRef = useReveal<HTMLDivElement>();

  return (
    <section id="servicios" className="services" ref={scopeRef}>
      <div className="container">
        <div className="services__header">
          <p className="eyebrow" data-reveal>
            Servicios
          </p>
          <h2 className="services__title" data-reveal style={{ transitionDelay: "60ms" }}>
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
              <div className="services__content">
                <span className="services__number">{item.number}</span>
                <h3 className="services__item-title">{item.title}</h3>
                <p className="services__item-text">
                  {item.description}
                  <span className="services__arrow" aria-hidden="true">
                    →
                  </span>
                </p>
              </div>

              <div className="services__image" aria-hidden="true">
                {item.imageSrc ? (
                  <img src={item.imageSrc} alt="" />
                ) : (
                  <span className="services__image-placeholder" />
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
