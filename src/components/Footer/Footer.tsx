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

            <div className="footer__socials">
              <a
                href="https://www.instagram.com/xime.dev/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de XimeDev"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                  />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/ximehernandez/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de XimeDev"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M6 9v9M6 6v.01M10 18v-5.2c0-2 1.2-3.3 3-3.3s3 1.3 3 3.3V18M10 12c.5-1.5 1.5-2.5 3-2.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
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
                    <span aria-hidden="true">↗︎</span>
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

