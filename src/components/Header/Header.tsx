import { useEffect, useState } from "react";
import { brand, nav } from "../../content/site";
import "./Header.css";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`header ${
        isScrolled ? "header--scrolled" : ""
      } ${isOpen ? "header--open" : ""}`}
    >
      <div className="container header__inner">
        <a href="#top" className="header__logo" onClick={handleLinkClick}>
          {brand.name}
        </a>

        <nav
          className="header__nav"
          aria-label="Navegación principal"
        >
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#contacto"
          className="header__cta"
          onClick={handleLinkClick}
        >
          <span>Hablemos</span>
          <span className="header__cta-arrow" aria-hidden="true">
            ↗︎
          </span>
        </a>

        <button
          type="button"
          className={`header__toggle ${
            isOpen ? "is-open" : ""
          }`}
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
        className={`header__mobile-menu ${
          isOpen ? "is-open" : ""
        }`}
      >
        <div className="container">
          <div className="header__mobile-label">
            Navegar
          </div>

          <nav aria-label="Navegación móvil">
            <ul>
              {nav.map((item, index) => (
                <li key={item.href}>
                  <a href={item.href} onClick={handleLinkClick}>
                    <span className="header__mobile-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span>{item.label}</span>

                    <span
                      className="header__mobile-arrow"
                      aria-hidden="true"
                    >
                      ↗︎
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href="#contacto"
            className="header__mobile-cta"
            onClick={handleLinkClick}
          >
            <span>Hablemos sobre tu proyecto</span>
            <span aria-hidden="true">↗︎</span>
          </a>
        </div>
      </div>
    </header>
  );
}