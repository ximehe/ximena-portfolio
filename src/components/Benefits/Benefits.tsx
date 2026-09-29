import { useReveal } from "../../hooks/useReveal";
import { benefits } from "../../content/site";
import { useState } from "react";
import "./Benefits.css";

export function Benefits() {
  const scopeRef = useReveal<HTMLDivElement>();
  const [activeBenefit, setActiveBenefit] = useState<string | null>(null);

  function toggleBenefit(number: string) {
    setActiveBenefit((current) =>
      current === number ? null : number
    );
  }

  return (
    <section id="beneficios" className="benefits" ref={scopeRef}>
      <div className="container">
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
                  <span className="benefits__phrase-accent">
                    {line.highlight}
                  </span>
                )}
              </span>
            ))}
          </h2>
        </div>

        <ul className="benefits__list">
          {benefits.items.map((item, index) => {
            const isOpen = activeBenefit === item.number;

            return (
              <li
                key={item.number}
                className={`benefits__item ${
                  isOpen ? "benefits__item--open" : ""
                }`}
                data-reveal
                style={{
                  transitionDelay: `${180 + index * 90}ms`,
                }}
              >
                <button
                  type="button"
                  className="benefits__trigger"
                  onClick={() => toggleBenefit(item.number)}
                  aria-expanded={isOpen}
                >
                  <span className="benefits__number">
                    {item.number}
                  </span>

                  <span className="benefits__item-copy">
                    <span className="benefits__item-title">
                      {item.title}
                    </span>

                    <span className="benefits__item-text">
                      {item.description}
                    </span>
                  </span>

                  <span
                    className="benefits__item-arrow"
                    aria-hidden="true"
                  >
                    {isOpen ? "↑" : "↗︎"}
                  </span>
                </button>

                <div
                  className="benefits__details"
                  aria-hidden={!isOpen}
                >
                  <div className="benefits__details-inner">
                    <p>{item.details}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}