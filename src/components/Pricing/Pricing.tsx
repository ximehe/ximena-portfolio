import { useReveal } from "../../hooks/useReveal";
import { pricing } from "../../content/site";
import "./Pricing.css";

export function Pricing() {
  const scopeRef = useReveal<HTMLDivElement>();

  return (
    <section id="precios" className="pricing" ref={scopeRef}>
      <div className="container">
        <div className="pricing__intro">
          <p className="eyebrow" data-reveal>
            {pricing.eyebrow}
          </p>

          <h2
            className="pricing__title"
            data-reveal
            style={{ transitionDelay: "60ms" }}
          >
            {pricing.title}
          </h2>

          <p
            className="pricing__intro-text"
            data-reveal
            style={{ transitionDelay: "140ms" }}
          >
            {pricing.intro}
          </p>
        </div>

        <ol className="pricing__factors">
          {pricing.factors.map((factor, index) => (
            <li
              key={factor.number}
              className="pricing__factor"
              data-reveal
              style={{
                transitionDelay: `${220 + index * 100}ms`,
              }}
            >
              <span className="pricing__number">
                {factor.number}
              </span>

              <div className="pricing__factor-content">
                <h3 className="pricing__factor-title">
                  {factor.title}
                </h3>

                <p className="pricing__factor-description">
                  {factor.description}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div
          className="pricing__closing"
          data-reveal
          style={{ transitionDelay: "560ms" }}
        >
          <div className="pricing__closing-line" />

          <div className="pricing__closing-content">
            <h3>{pricing.closingTitle}</h3>

            <p>{pricing.closingText}</p>

            <a
              href={pricing.ctaHref}
              className="pricing__cta"
            >
              {pricing.ctaLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}