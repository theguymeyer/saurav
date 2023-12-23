import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

var gh_pages_assets_path = "saurav/assets/";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  publicPath: process.env.NODE_ENV === "production" ? "/saurav/" : "/",
  base: '/saurav/',
});