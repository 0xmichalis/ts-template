import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import importPlugin from "eslint-plugin-import";
import configPrettier from "eslint-config-prettier";

export default [
  {
    ignores: ["dist", "build", "node_modules"],
  },
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2021,
      sourceType: "module",
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      import: importPlugin,
    },
    rules: {
      "no-trailing-spaces": "error",
      "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 1 }],
      "eol-last": "error",
      "no-mixed-spaces-and-tabs": "error",
      "no-unexpected-multiline": "error",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          args: "after-used",
          vars: "all",
          ignoreRestSiblings: true,
        },
      ],
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal", "sibling"],
          pathGroups: [
            { pattern: "react", group: "builtin", position: "before" },
            { pattern: "@/**", group: "internal", position: "after" },
            { pattern: "./**", group: "sibling", position: "after" },
          ],
          alphabetize: { order: "asc", caseInsensitive: true },
          "newlines-between": "always",
        },
      ],
    },
  },
  configPrettier,
];
