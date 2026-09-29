import { brand, footer } from "../../content/site";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <p className="footer__name">{brand.name}</p>

            <p className="footer__tagline">
              {brand.tagline}
            </p>
          </div>

          <nav
            className="footer__nav"
            aria-label="Navegación de footer"
          >
            <span className="footer__nav-label">
              Navegar
            </span>

            <ul>
              {footer.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>
                    {link.label}
                    <span aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="footer__bottom">
          <p>{footer.copy}</p>

          <a href="#top" className="footer__back">
            Volver arriba
            <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}