import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // Backend (Node)
  {
    files: ["backend/**/*.{js,mjs,cjs}"],
    languageOptions: { globals: globals.node },
    rules: {
      ...js.configs.recommended.rules,
    },
  },

  // Frontend (Browser + React)
  {
    files: ["src/**/*.{js,jsx}"],
    languageOptions: { globals: globals.browser },
    rules: {
      ...js.configs.recommended.rules,
    },
  },

  // React recommended rules (apply to frontend files)
  {
    files: ["src/**/*.{js,jsx}"],
    ...pluginReact.configs.flat.recommended,
  },
]);
