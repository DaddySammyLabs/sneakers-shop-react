import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
      "@components": path.resolve(import.meta.dirname, "./src/components"),
      "@pages": path.resolve(import.meta.dirname, "./src/pages"),
      "@assets": path.resolve(import.meta.dirname, "./src/assets"),
      "@utils": path.resolve(import.meta.dirname, "./src/utils"),
    },
  },
});

// @alias vite.config.js
// 2nd way
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import path from "path";

// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       "@": path.resolve(import.meta.dirname, "./src"),
//       "@components": path.resolve(import.meta.dirname, "./src/components"),
//       "@pages": path.resolve(import.meta.dirname, "./src/pages"),
//       "@assets": path.resolve(import.meta.dirname, "./src/assets"),
//       "@utils": path.resolve(import.meta.dirname, "./src/utils"),
//     },
//   },
// });

// 1st way
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import path from "path";

// // import { fileURLToPath } from "url";
// // const __dirname = path.dirname(fileURLToPath(import.meta.url));

// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//       "@components": path.resolve(__dirname, "./src/components"),
//       "@pages": path.resolve(__dirname, "./src/pages"),
//       "@assets": path.resolve(__dirname, "./src/assets"),
//       "@utils": path.resolve(__dirname, "./src/utils"),
//     },
//   },
// });
