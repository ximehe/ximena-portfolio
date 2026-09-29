import { useReveal } from "../../hooks/useReveal";
import { contact, getWhatsappUrl, socials } from "../../content/site";
import "./Contact.css";

export function Contact() {
  const scopeRef = useReveal<HTMLDivElement>();

  return (
    <section id="contacto" className="contact" ref={scopeRef}>
      <div className="container contact__inner">
        <h2 className="contact__title" data-reveal>
          {contact.title}
        </h2>

        <p className="contact__text" data-reveal style={{ transitionDelay: "80ms" }}>
          {contact.text}
        </p>

        <div className="contact__actions" data-reveal style={{ transitionDelay: "160ms" }}>
          <a
            href={getWhatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary contact__cta"
          >
            {contact.ctaLabel}
          </a>
        </div>

        <ul
          className="contact__socials"
          data-reveal
          style={{ transitionDelay: "240ms" }}
        >
          <li>
            <a href={socials.instagram} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </li>
          <li>
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href={socials.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
