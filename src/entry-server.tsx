import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App";

// Solo se usa al compilar (scripts/prerender.mjs): genera el HTML
// inicial para que la página se vea antes de que cargue el JS.
export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
