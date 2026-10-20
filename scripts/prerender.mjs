// Inserta el HTML prerenderizado de la app en dist/index.html.
// Corre después de `vite build` y `vite build --ssr` (ver package.json).
import { readFile, rm, writeFile } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";

const projectRoot = fileURLToPath(new URL("..", import.meta.url));
const serverEntry = new URL("dist-ssr/entry-server.js", pathToFileURL(projectRoot));
const templatePath = new URL("dist/index.html", pathToFileURL(projectRoot));
const placeholder = "<!--app-html-->";

const { render } = await import(serverEntry.href);
const template = await readFile(templatePath, "utf8");

if (!template.includes(placeholder)) {
  throw new Error(`No se encontró ${placeholder} en dist/index.html`);
}

await writeFile(templatePath, template.replace(placeholder, render()));
await rm(new URL("dist-ssr", pathToFileURL(projectRoot)), {
  recursive: true,
  force: true,
});

console.log("Prerender listo: dist/index.html");
