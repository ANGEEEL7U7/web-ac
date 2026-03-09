import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import * as path from "path";
import { createHtmlPlugin } from "vite-plugin-html";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    createHtmlPlugin({
      minify: {
        collapseWhitespace: true,
        keepClosingSlash: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
        minifyCSS: true,
        minifyJS: true,
      },
    }),
  ],
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "src/app"),
      "@shared": path.resolve(__dirname, "src/shared"),
      "@features": path.resolve(__dirname, "src/features"),
    },
  },
  build: {
    outDir: "dist",
    minify: "terser",
    rollupOptions: {
      output: {
        strict: true,
        manualChunks: {
          // aplicacion
          "vendor-react": ["react", "react-dom", "react-cookie"],

          // graficos
          "vendor-three": ["three"],

          // diseño y estilos
          "vendor-ui": [
            "@headlessui/react",
            "lucide-react",
            "@emotion/react",
            "@emotion/styled",
          ],
        },
        entryFileNames: "assets/lib.[hash].js",
        chunkFileNames: "assets/[name]-chunk.[hash].js",
        assetFileNames: "assets/[name].[hash].[ext]",
      },
    },
  },
});
