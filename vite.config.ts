import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "robots.txt"],
      manifest: {
        name: "Deep Funky Radio",
        short_name: "Deep Funky",
        description: "Radio online cu muzică Afro House și Deep House. Ascultă cele mai bune vibrații underground 24/7.",
        theme_color: "#0a0a0f",
        background_color: "#0a0a0f",
        display: "standalone",
        orientation: "portrait",
        start_url: "/",
        icons: [
          {
            src: "https://storage.googleapis.com/gpt-engineer-file-uploads/vKCtC086ejUtrAVva6qRaPQEqf13/uploads/1769680597008-ChatGPT Image 29 ian. 2026, 11_56_21.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "https://storage.googleapis.com/gpt-engineer-file-uploads/vKCtC086ejUtrAVva6qRaPQEqf13/uploads/1769680597008-ChatGPT Image 29 ian. 2026, 11_56_21.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,woff2}"],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
              },
            },
          },
        ],
      },
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
