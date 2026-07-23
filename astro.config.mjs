import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://eventolivre.com.br",
  output: "static",
  build: {
    assets: "_assets",
  },
});