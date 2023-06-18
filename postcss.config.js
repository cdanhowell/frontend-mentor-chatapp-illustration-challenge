import { defineConfig } from "vite";
import postcssImport from "postcss-import";
import autoprefixer from "autoprefixer";

export default defineConfig({
  plugins: [postcssImport, autoprefixer],
});
