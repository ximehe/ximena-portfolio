import { useReveal } from "../../hooks/useReveal";
import { hero } from "../../content/site";
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

          <div className="hero__foot" data-reveal style={{ transitionDelay: "380ms" }}>
            <p className="hero__subtitle">{hero.subtitle}</p>

            <div className="hero__actions">
              <a href={hero.ctaHref} className="btn btn-primary">
                {hero.ctaLabel}
              </a>
            </div>
          </div>

          <p className="hero__tags" data-reveal style={{ transitionDelay: "440ms" }}>
            {hero.tags.join(" · ")}
          </p>
        </div>

        <div className="hero__visual" aria-hidden="true" data-reveal style={{ transitionDelay: "220ms" }}>
          <div className="hero__connector" />

          <div className="mockup-browser">
            <div className="mockup-browser__bar">
              <span />
              <span />
              <span />
            </div>
            <div className="mockup-browser__body">
              <div className="mockup-browser__nav">
                <div className="mockup-browser__brand" />
                <div className="mockup-browser__links">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
              <div className="mockup-browser__hero">
                <div className="mockup-browser__title" />
                <div className="mockup-browser__title mockup-browser__title--short" />
                <div className="mockup-browser__btn" />
              </div>
            </div>
          </div>

          <div className="mockup-phone">
            <div className="mockup-phone__notch" />
            <div className="mockup-phone__screen">
              <div className="mockup-phone__row" />
              <div className="mockup-phone__card" />
              <div className="mockup-phone__line" />
              <div className="mockup-phone__line mockup-phone__line--short" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
