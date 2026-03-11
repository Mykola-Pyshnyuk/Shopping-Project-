import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  test: {
    environment: "jsdom", // DOM середовище для браузерних API
    setupFiles: ["./src/test/setup.js"], // Файл ініціалізації перед тестами
    css: true, // Підтримка CSS імпортів
    globals: true, // describe, it, expect без імпорту
    include: [
      "**/*.{test,spec}.{js,jsx,ts,tsx}",
      "**/__tests__/**/*.{js,jsx,ts,tsx}",
    ], // Патерни тестових файлів
    onConsoleLog: () => false, // Приховує console.log в тестах
    silent: true, // Мінімальний вивід в консоль
  },
});
