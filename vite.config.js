import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import preact from "@preact/preset-vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1600,
  },
  server: {
    host: true
  },
  base: "./",
  plugins: [
    preact(),
    VitePWA({
      injectRegister: "script",
      registerType: "autoUpdate",
      devOptions: { enabled: false },
      includeAssets: ["/img/en/logo-app.png"],
      manifest: {
        name: "Quiz Diego Maradona by MediaMoob",
        short_name: "Trivia Maradona",
        lang: "en",
        description: "Quiz Diego Maradona - Game of questions with categories - by Media Moob",
        theme_color: "#000000",
        icons: [
          {
            src: "/img/en/logo-app.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/img/logo-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/img/logo-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
});
