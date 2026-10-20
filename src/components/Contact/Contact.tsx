import { useReveal } from "../../hooks/useReveal";
import { contact, getWhatsappUrl, socials } from "../../content/site";
import "./Contact.css";

export function Contact() {
  const scopeRef = useReveal<HTMLDivElement>();

  return (
    <section id="contacto" className="contact" ref={scopeRef}>
      <div className="container">
        <div className="contact__inner">
          <div className="contact__heading">
            <p className="eyebrow" data-reveal>
              Contacto
            </p>

            <h2
              className="contact__title"
              data-reveal
              style={{ transitionDelay: "80ms" }}
            >
              ¿Hacemos realidad
              <span>tu web?</span>
            </h2>
          </div>

          <div
            className="contact__action"
            data-reveal
            style={{ transitionDelay: "180ms" }}
          >
            <p className="contact__text">
              {contact.text}
            </p>

            <a
              href={getWhatsappUrl()}
              className="contact__cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{contact.ctaLabel}</span>
              <span className="contact__cta-arrow" aria-hidden="true">
                ↗︎
              </span>
            </a>

            <p className="contact__alt">
              ¿Preferís Instagram?{" "}
              <a
                href={socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                Escribime a {contact.instagramLabel}
                <span aria-hidden="true"> ↗︎</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}