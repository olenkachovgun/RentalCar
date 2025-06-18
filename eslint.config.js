import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import importPlugin from "eslint-plugin-import";

export default [
  {
    files: ["**/*.{js,jsx}"],
    ignores: ["dist"],

    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        // Дозволяємо найновіші можливості JavaScript
        ecmaVersion: "latest",
        // Вмикаємо підтримку JSX синтаксису
        ecmaFeatures: { jsx: true },
        // Вказуємо, що файли є ES Modules
        sourceType: "module",
      },
    },

    settings: {
      // Автоматично визначаємо версію React
      react: { version: "detect" },
    },

    // Підключаємо необхідні плагіни
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      import: importPlugin,
    },

    rules: {
      // Застосовуємо рекомендовані правила ESLint за замовчуванням
      ...js.configs.recommended.rules,
      // Застосовуємо рекомендовані правила для React
      ...react.configs.recommended.rules,
      // Застосовуємо правила для нового JSX runtime (React 17+)
      ...react.configs["jsx-runtime"].rules,
      // Вимикаємо перевірку propTypes,  не вик. TypeScript
      "react/prop-types": "off",
      // Вмикаємо попередження/помилки для target="_blank" без rel="noopener noreferrer"
      // Це важливо для безпеки (запобігає "tabnabbing")
      "react/jsx-no-target-blank": ["warn", { allowReferrer: true }],
      //  рекомендовані правила для React Hooks (правила залежностей, exhaustive-deps тощо)
      ...reactHooks.configs.recommended.rules,

      // --- Правила для React Refresh (Vite HMR) ---
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],

      // Запобігаємо імпорту неіснуючих модулів
      //"import/no-unresolved": "error",
      // Перевіряємо, чи іменовані імпорти дійсно існують
      "import/named": "error",
      //  правила для покращення організації імпортів
      "import/order": [
        "warn",
        {
          "newlines-between": "always",
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
        },
      ],
      "import/no-duplicates": "error", // Запобігає дублюванню імпортів одного модуля
      "import/newline-after-import": ["warn", { count: 1 }], // Вимагає нового рядка після імпортів
    },
  },
];
