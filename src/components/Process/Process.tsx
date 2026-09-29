import { useReveal } from "../../hooks/useReveal";
import { process } from "../../content/site";
import "./Process.css";

export function Process() {
  const scopeRef = useReveal<HTMLDivElement>();

  return (
    <section id="como-trabajo" className="process" ref={scopeRef}>
      <div className="container">
        <h2 className="process__title" data-reveal>
          {process.title}
        </h2>

        <ol className="process__list">
          {process.steps.map((step, index) => (
            <li
              key={step.number}
              className="process__step"
              data-reveal
              style={{ transitionDelay: `${120 + index * 90}ms` }}
            >
              <span className="process__number">{step.number}</span>
              <div className="process__copy">
                <h3 className="process__step-title">{step.title}</h3>
                <p className="process__step-text">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
