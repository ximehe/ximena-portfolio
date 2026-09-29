import { brand, footer } from "../../content/site";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <p className="footer__name">{brand.name}</p>
          <p className="footer__tagline">{brand.tagline}</p>
        </div>

        <nav className="footer__nav" aria-label="Navegación de footer">
          <ul>
            {footer.links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="footer__copy">{footer.copy}</p>
      </div>
    </footer>
  );
}
