import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://davqq.de/",
  integrations: [tailwind()],
  output: "static",
  compressHTML: true,
  trailingSlash: "never",
  experimental: {
    assets: true,
  },
  redirects: {
    "/github": {
      status: 302,
      destination: "https://github.com/davqq",
    },
    "/mail": {
      status: 302,
      destination: "mailto:contact@davqq.de",
    },
    phonenumber: {
      status: 302,
      destination: "tel:+4915735988888",
    },
  },
});
