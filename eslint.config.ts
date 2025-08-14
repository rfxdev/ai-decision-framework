import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import perfectionist from "eslint-plugin-perfectionist";
import { config, configs } from "typescript-eslint";

export default config(
  { ignores: ["dist", "node_modules", "schema"] },
  js.configs.recommended,
  ...configs.recommended,
  perfectionist.configs["recommended-natural"],
  prettier,
  {
    extends: [
      importPlugin.flatConfigs.recommended,
      importPlugin.flatConfigs.typescript,
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      parserOptions: {
        project: ["./tsconfig.json", "./tsconfig.node.json"],
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    rules: {
      "import/no-extraneous-dependencies": [
        "error",
        {
          devDependencies: [
            "**/*.test.{ts,tsx}",
            "**/test/**/*",
            "eslint.config.ts",
            "vite.config.ts",
          ],
        },
      ],
      "perfectionist/sort-jsx-props": "off",
      "perfectionist/sort-modules": "off",
    },
    settings: {
      "import/resolver": {
        typescript: {
          project: ["./tsconfig.json", "./tsconfig.node.json"],
        },
      },
    },
  },
  // Node.js configuration for tools
  {
    files: ["tools/**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      globals: {
        console: "readonly",
      },
    },
  },
);
