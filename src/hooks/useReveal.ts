import { useEffect, useRef } from "react";

/**
 * Agrega "is-visible" a los elementos marcados con data-reveal
 * y "section-is-visible" a la sección cuando entra en pantalla.
 */
export function useReveal<T extends HTMLElement>() {
  const scopeRef = useRef<T | null>(null);

  useEffect(() => {
    const scope = scopeRef.current;
    if (!scope) return;

    // Reveal de la sección completa
    scope.classList.add("section-reveal");

    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          scope.classList.add("section-is-visible");
          sectionObserver.unobserve(scope);
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -4% 0px",
      }
    );

    sectionObserver.observe(scope);

    // Reveal de los elementos internos
    const targets = scope.matches("[data-reveal]")
      ? [scope, ...scope.querySelectorAll<HTMLElement>("[data-reveal]")]
      : Array.from(scope.querySelectorAll<HTMLElement>("[data-reveal]"));

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    targets.forEach((el) => revealObserver.observe(el));

    return () => {
      sectionObserver.disconnect();
      revealObserver.disconnect();
    };
  }, []);

  return scopeRef;
}