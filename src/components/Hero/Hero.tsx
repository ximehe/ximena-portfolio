import { useEffect, useRef } from "react";
import { useReveal } from "../../hooks/useReveal";
import { hero } from "../../content/site";
import magnoliasDesktop from "../../assets/projects/magnolias-desktop.png";
import magnoliasMobile from "../../assets/projects/magnolias-mobile.png";
import "./Hero.css";

export function Hero() {
  const scopeRef = useReveal<HTMLDivElement>();
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const visual = visualRef.current;

    if (!visual) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (reducedMotion.matches) {
      return;
    }

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let animationFrame = 0;

    const update = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      visual.style.setProperty(
        "--hero-tilt-x",
        `${currentY.toFixed(3)}deg`
      );

      visual.style.setProperty(
        "--hero-tilt-y",
        `${currentX.toFixed(3)}deg`
      );

      animationFrame = requestAnimationFrame(update);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const rect = visual.getBoundingClientRect();

      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;

      targetX = (x - 0.5) * 10;
      targetY = (y - 0.5) * -7;
    };

    const handlePointerLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    const handleTouchStart = (event: TouchEvent) => {
      const touch = event.touches[0];

      if (!touch) return;

      const rect = visual.getBoundingClientRect();

      const x = (touch.clientX - rect.left) / rect.width;
      const y = (touch.clientY - rect.top) / rect.height;

      targetX = (x - 0.5) * 8;
      targetY = (y - 0.5) * -6;
    };

    const handleTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];

      if (!touch) return;

      const rect = visual.getBoundingClientRect();

      const x = (touch.clientX - rect.left) / rect.width;
      const y = (touch.clientY - rect.top) / rect.height;

      targetX = (x - 0.5) * 8;
      targetY = (y - 0.5) * -6;
    };

    const handleTouchEnd = () => {
      targetX = 0;
      targetY = 0;
    };

    const finePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    );

    if (finePointer.matches) {
      visual.addEventListener("pointermove", handlePointerMove);
      visual.addEventListener("pointerleave", handlePointerLeave);
    } else {
      visual.addEventListener("touchstart", handleTouchStart, {
        passive: true,
      });

      visual.addEventListener("touchmove", handleTouchMove, {
        passive: true,
      });

      visual.addEventListener("touchend", handleTouchEnd);
      visual.addEventListener("touchcancel", handleTouchEnd);
    }

    animationFrame = requestAnimationFrame(update);

    return () => {
      visual.removeEventListener("pointermove", handlePointerMove);
      visual.removeEventListener("pointerleave", handlePointerLeave);

      visual.removeEventListener("touchstart", handleTouchStart);
      visual.removeEventListener("touchmove", handleTouchMove);
      visual.removeEventListener("touchend", handleTouchEnd);
      visual.removeEventListener("touchcancel", handleTouchEnd);

      cancelAnimationFrame(animationFrame);
    };
  }, []);

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
          ref={visualRef}
          className="hero__visual"
          aria-label="Vista del proyecto Magnolias Cotillón en escritorio y mobile"
          data-reveal
          style={{ transitionDelay: "220ms" }}
        >
          <div className="hero__meta" aria-hidden="true">
            <span>WEB</span>
            <span>2026</span>
          </div>

          <span
            className="hero__cross hero__cross--top"
            aria-hidden="true"
          >
            +
          </span>

          <div className="hero__connector" aria-hidden="true" />

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