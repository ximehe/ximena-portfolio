import { useReveal } from "../../hooks/useReveal";
import { pricing } from "../../content/site";
import "./Pricing.css";

export function Pricing() {
  const scopeRef = useReveal<HTMLDivElement>();

  return (
    <section id="precios" className="pricing" ref={scopeRef}>
      <div className="container">
        <h2 className="pricing__title" data-reveal>
          {pricing.title}
        </h2>

        <ul className="pricing__list">
          {pricing.items.map((item, index) => (
            <li
              key={item.title}
              className="pricing__item"
              data-reveal
              style={{ transitionDelay: `${120 + index * 80}ms` }}
            >
              <span className="pricing__item-title">{item.title}</span>
              <span className="pricing__item-price">{item.price}</span>
            </li>
          ))}
        </ul>

        <p className="pricing__note" data-reveal style={{ transitionDelay: "440ms" }}>
          {pricing.note}
        </p>
      </div>
    </section>
  );
}
