import { useReveal } from "../../hooks/useReveal";
import { about } from "../../content/site";
import "./About.css";

export function About() {
  const scopeRef = useReveal<HTMLDivElement>();

  return (
    <section id="sobre-mi" className="about" ref={scopeRef}>
      <div className="container">
        <div className="about__top">
          <div className="about__heading">
            <p className="eyebrow" data-reveal>
              {about.eyebrow}
            </p>

            <h2
              className="about__lead"
              data-reveal
              style={{ transitionDelay: "60ms" }}
            >
              {about.leadLines.map((line) => (
                <span key={line.text} className="about__lead-line">
                  {line.text}
                  <span className="about__lead-accent">
                    {line.highlight}
                  </span>
                </span>
              ))}
            </h2>
          </div>

          <div
            className="about__statement"
            data-reveal
            style={{ transitionDelay: "140ms" }}
          >
            <span className="about__statement-label">
              Enfoque
            </span>

            <p>
              Crear sitios que no solo se vean bien,
              sino que realmente sean útiles para
              el negocio.
            </p>
          </div>
        </div>

        <div className="about__bottom">
          <div className="about__body">
            {about.paragraphs.slice(0, 2).map((paragraph, index) => (
              <p
                key={paragraph.slice(0, 24)}
                className="about__paragraph"
                data-reveal
                style={{
                  transitionDelay: `${220 + index * 80}ms`,
                }}
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div
            className="about__profile"
            data-reveal
            style={{ transitionDelay: "300ms" }}
          >
            <div className="about__profile-header">
              <span className="about__profile-number">
                01
              </span>

              <span className="about__profile-label">
                Desarrollo web
              </span>
            </div>

            <div className="about__profile-content">
              <span>Diseño</span>
              <span>Frontend</span>
              <span>E-commerce</span>
              <span>Proyectos reales</span>
            </div>
          </div>
        </div>

        <div
          className="about__closing"
          data-reveal
          style={{ transitionDelay: "380ms" }}
        >
          <span className="about__closing-line" />

          <p>{about.paragraphs[2]}</p>
        </div>
      </div>
    </section>
  );
}