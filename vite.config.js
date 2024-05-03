// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        flipper: resolve(__dirname, "flipper/index.html"),
        tabs: resolve(__dirname, "tabs/index.html"),
        fetching: resolve(__dirname, "fetch/index.html"),
        etch: resolve(__dirname, "etch/index.html"),
      },
    },
  },
});
