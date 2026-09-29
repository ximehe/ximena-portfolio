import { useEffect, useRef } from "react";

/**
 * Agrega la clase "is-visible" a los descendientes marcados con
 * data-reveal cuando entran en el viewport. Respeta prefers-reduced-motion
 * dejando que el CSS se encargue de anular la transición.
 */
export function useReveal<T extends HTMLElement>() {
  const scopeRef = useRef<T | null>(null);

  useEffect(() => {
    const scope = scopeRef.current;
    if (!scope) return;

    const targets = scope.matches("[data-reveal]")
      ? [scope, ...scope.querySelectorAll<HTMLElement>("[data-reveal]")]
      : Array.from(scope.querySelectorAll<HTMLElement>("[data-reveal]"));

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return scopeRef;
}
