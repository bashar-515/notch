// @ts-check
import { defineConfig } from "astro/config";
import remarkBreaks from "remark-breaks";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkBreaks],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
