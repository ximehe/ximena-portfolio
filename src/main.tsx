import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import "./styles/variables.css";
import "./styles/base.css";
import "./styles/utilities.css";

const root = document.getElementById("root")!;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// En producción el HTML viene prerenderizado (scripts/prerender.mjs)
// y se hidrata; en desarrollo se monta de cero.
if (root.firstElementChild) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
