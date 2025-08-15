import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import jsxA11y from "eslint-plugin-jsx-a11y";
import nodePlugin from "eslint-plugin-n";
import perfectionist from "eslint-plugin-perfectionist";
import reactHooks from "eslint-plugin-react-hooks";
// @ts-expect-error no types for this plugin
import reactPerf from "eslint-plugin-react-perf";
import reactRefresh from "eslint-plugin-react-refresh";
import { config, configs } from "typescript-eslint";

export default config(
  { ignores: ["dist", "node_modules", "schema"] },
  js.configs.recommended,
  ...configs.recommended,
  perfectionist.configs["recommended-natural"],
  prettier,
  // Main source files
  {
    extends: [
      importPlugin.flatConfigs.recommended,
      importPlugin.flatConfigs.typescript,
      jsxA11y.flatConfigs.recommended,
    ],
    files: ["src/**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-perf": reactPerf,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...reactPerf.configs.recommended.rules,
      "import/no-extraneous-dependencies": [
        "error",
        {
          devDependencies: ["src/**/*.test.{ts,tsx}", "src/**/test/**/*"],
        },
      ],
      "perfectionist/sort-jsx-props": "off",
      "perfectionist/sort-modules": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
    settings: {
      "import/resolver": {
        typescript: {
          project: "./tsconfig.json",
        },
      },
    },
  },
  // Config files (eslint.config.ts, vite.config.ts)
  {
    extends: [
      importPlugin.flatConfigs.recommended,
      importPlugin.flatConfigs.typescript,
    ],
    files: ["*.config.ts"],
    languageOptions: {
      ecmaVersion: 2020,
      parserOptions: {
        project: "./tsconfig.node.json",
      },
    },
    rules: {
      "import/no-extraneous-dependencies": [
        "error",
        {
          devDependencies: true,
        },
      ],
    },
    settings: {
      "import/resolver": {
        typescript: {
          project: "./tsconfig.node.json",
        },
      },
    },
  },
  // Node.js tools configuration
  {
    extends: [
      nodePlugin.configs["flat/recommended-script"],
      importPlugin.flatConfigs.recommended,
    ],
    files: ["tools/**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
    },
    plugins: {
      n: nodePlugin,
    },
    rules: {
      "import/no-extraneous-dependencies": [
        "error",
        {
          devDependencies: true,
        },
      ],
      "n/hashbang": "off",
      "n/no-process-exit": "error",
      "n/prefer-global/console": "error",
      "n/prefer-global/process": "error",
      "no-console": "off",
      "no-var": "error",
      "object-shorthand": "error",
      "prefer-const": "error",
      "prefer-template": "error",
    },
    settings: {
      "import/resolver": {
        node: true,
      },
    },
  },
);
