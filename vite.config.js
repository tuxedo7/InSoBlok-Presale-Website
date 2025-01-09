import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: "./",
  // server: { port: 3000 },
  // build: {
  //   outDir: "dist",
  //   rollupOptions: {
  //     external: ["react-fast-marquee"], // Add this line
  //   },
  //   chunkSizeWarningLimit: 5000,
  // },
  // resolve: {
  //   alias: {
  //     // If you want to use a specific path alias
  //     "@react-fast-marquee":
  //       "/path/to/your/custom/node_modules/react-fast-marquee",
  //   },
  //   // If you have custom directories for node_modules
  //   modules: ["node_modules", "custom_modules"],
  // },
});
