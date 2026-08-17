import path from "node:path";
import { fileURLToPath } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// Vite 单页应用配置。
// 入口：index.html（由 src/main.ts 挂载 Vue 应用）。
// 生产态：构建到 dist/，JS 与 CSS 分别输出到 js/、css/ 目录。
const directory = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(directory, "src"),
    },
  },
  build: {
    rolldownOptions: {
      output: {
        entryFileNames: "js/[name]-[hash].js",
        chunkFileNames: "js/[name]-[hash].js",
        assetFileNames: (assetInfo) => {
          const fileName = assetInfo.names?.[0] ?? "";

          return fileName.endsWith(".css")
            ? "css/[name]-[hash][extname]"
            : "assets/[name]-[hash][extname]";
        },
      },
    },
  },
});
