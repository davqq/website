import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://davq.de/",
  integrations: [tailwind()],
  output: "static",
  compressHTML: true,
  trailingSlash: "never",
  redirects: {
    "/github": {
      status: 302,
      destination: "https://github.com/davqq",
    },
    "/mail": {
      status: 302,
      destination: "mailto:contact@davq.de",
    },
    "/linkedin": {
      status: 302,
      destination: "https://www.linkedin.com/in/david-von-garrel-a0952928a/",
    },
  },
});
