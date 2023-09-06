import { fileURLToPath, URL } from "node:url";
import { sharedExposed, exposes } from "./exposesMaps";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "map",
      filename: "map.js",
      exposes,
      shared: {
        ...sharedExposed,
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
