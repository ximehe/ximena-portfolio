import { useReveal } from "../../hooks/useReveal";
import { about } from "../../content/site";
import "./About.css";

export function About() {
  const scopeRef = useReveal<HTMLDivElement>();

  return (
    <section id="sobre-mi" className="about" ref={scopeRef}>
      <div className="container about__grid">
        <div className="about__lead-col">
          <p className="eyebrow" data-reveal>
            {about.eyebrow}
          </p>
          <p className="about__lead" data-reveal style={{ transitionDelay: "60ms" }}>
            {about.lead}
          </p>
        </div>

        <div className="about__body-col">
          {about.paragraphs.map((paragraph, index) => (
            <p
              key={paragraph.slice(0, 24)}
              className="about__paragraph"
              data-reveal
              style={{ transitionDelay: `${140 + index * 80}ms` }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
