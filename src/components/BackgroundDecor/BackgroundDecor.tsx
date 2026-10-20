// Destellos y marcas de la retícula. Viven solo en los márgenes
// laterales para no cruzarse nunca con el texto.
const decorItems = [
  { kind: "star", side: "right", top: "78vh" },
  { kind: "plus", side: "left", top: "120vh" },
  { kind: "square", side: "right", top: "175vh" },
  { kind: "star", side: "left", top: "235vh" },
  { kind: "plus", side: "right", top: "300vh" },
  { kind: "star", side: "left", top: "360vh" },
  { kind: "square", side: "left", top: "425vh" },
  { kind: "star", side: "right", top: "480vh" },
  { kind: "plus", side: "left", top: "540vh" },
  { kind: "star", side: "right", top: "600vh" },
  { kind: "square", side: "right", top: "660vh" },
  { kind: "star", side: "left", top: "720vh" },
] as const;

const glyphs = {
  star: "✦",
  plus: "+",
  square: "",
};

const BackgroundDecor = () => {
  return (
    <div className="background-decor" aria-hidden="true">
      {decorItems.map((item, index) => (
        <span
          key={index}
          className={`decor decor-${item.kind} decor--${item.side}`}
          style={{
            top: item.top,
            animationDelay: `${(index % 4) * 1.2}s`,
          }}
        >
          {glyphs[item.kind]}
        </span>
      ))}
    </div>
  );
};

export default BackgroundDecor;
