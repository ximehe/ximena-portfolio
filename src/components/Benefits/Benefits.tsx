import { useReveal } from "../../hooks/useReveal";
import { benefits } from "../../content/site";
import "./Benefits.css";

export function Benefits() {
  const scopeRef = useReveal<HTMLDivElement>();

  return (
    <section id="beneficios" className="benefits" ref={scopeRef}>
      <div className="container benefits__grid">
        <div className="benefits__intro">
          <p className="eyebrow" data-reveal>
            Por qué tener una web
          </p>

          <h2 className="benefits__phrase">
            {benefits.introLines.map((line, index) => (
              <span
                key={line.text}
                className="benefits__phrase-line"
                data-reveal
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                {line.text}
                {line.highlight && (
                  <span className="benefits__phrase-accent">{line.highlight}</span>
                )}
              </span>
            ))}
          </h2>
        </div>

        <ul className="benefits__list">
          {benefits.items.map((item, index) => (
            <li
              key={item.number}
              className="benefits__item"
              data-reveal
              style={{ transitionDelay: `${180 + index * 90}ms` }}
            >
              <span className="benefits__number">{item.number}</span>
              <div className="benefits__item-copy">
                <h3 className="benefits__item-title">{item.title}</h3>
                <p className="benefits__item-text">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
