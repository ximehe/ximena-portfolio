import { useEffect, useState } from "react";
import { brand, nav } from "../../content/site";
import "./Header.css";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <header className={`header ${isScrolled ? "header--scrolled" : ""}`}>
      <div className="container header__inner">
        <a href="#top" className="header__logo">
          {brand.name}
        </a>

        <nav className="header__nav" aria-label="Navegación principal">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contacto" className="btn btn-primary header__cta">
          Hablemos →
        </a>

        <button
          type="button"
          className={`header__toggle ${isOpen ? "is-open" : ""}`}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span />
          <span />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`header__mobile-menu ${isOpen ? "is-open" : ""}`}
      >
        <ul>
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={handleLinkClick}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contacto"
          className="btn btn-primary header__mobile-cta"
          onClick={handleLinkClick}
        >
          Hablemos →
        </a>
      </div>
    </header>
  );
}
