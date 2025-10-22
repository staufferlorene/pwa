import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
        runtimeCaching: [
          {
            // Cache des appels API
            // Pattern : toutes les URL d'API (https://api.*)
            urlPattern: /^https:\/\/iot\.olasserre\.dev-campus\.fr\/api\/.*/i,
            // NetworkFirst : essaie le réseau d'abord, puis le cache si échec
            // Idéal pour les données qui doivent être fraîches (APIs)
            handler: "NetworkFirst",
            options: {
              cacheName: "api-cache",
              expiration: {
                maxEntries: 100, // Maximum 100 réponses API en cache
                maxAgeSeconds: 60 * 60 * 24, // Cache valide 1 jour
              },
              // Timeout réseau : si pas de réponse en 3s, utilise le cache
              networkTimeoutSeconds: 3,
            },
          },
        ],
      },
      manifest: {
        name: "Pwa",
        short_name: "Pwa",
        description: "Pwa du projet IOT",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/image_one.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/image_two.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
