import { useEffect, useRef } from "react";

/**
 * Marca con data-visible los elementos con data-reveal cuando
 * entran en pantalla, y con data-section-visible a la sección.
 *
 * Se usan atributos y no clases a propósito: React reescribe
 * className en cada render (por ejemplo, al abrir un acordeón) y
 * borraría una clase agregada desde acá; los atributos que React
 * no administra se conservan.
 */
export function useReveal<T extends HTMLElement>() {
  const scopeRef = useRef<T | null>(null);

  useEffect(() => {
    const scope = scopeRef.current;
    if (!scope) return;

    // Visibilidad de la sección completa
    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          scope.dataset.sectionVisible = "";
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
            (entry.target as HTMLElement).dataset.visible = "";
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    targets.forEach((el) => {
      // El escalonado se declara como transitionDelay en cada
      // componente; se pasa a la animación de entrada para que no
      // retrase también los hovers del elemento.
      if (el.style.transitionDelay) {
        el.style.animationDelay = el.style.transitionDelay;
        el.style.transitionDelay = "";
      }

      revealObserver.observe(el);
    });

    return () => {
      sectionObserver.disconnect();
      revealObserver.disconnect();
    };
  }, []);

  return scopeRef;
}
