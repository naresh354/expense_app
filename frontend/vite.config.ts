import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import svgrPlugin from "vite-plugin-svgr";

/**
 * Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects
 * @url https://vitejs.dev/config/
 * @url https://github.com/vitejs/vite-plugin-react/tree/main
 * */
export default defineConfig({
  plugins: [
    // Vite plugin for integrating React into the development environment
    react(),
    //  Vite plugin that resolves TypeScript paths defined in tsconfig.
    viteTsconfigPaths(),
    // Vite plugin for transforming SVG files using SVGR.
    svgrPlugin(),
  ],
  server: {
    open: true,

    port: 3000,
  },

  preview: {
    port: 3000,
  },
});
