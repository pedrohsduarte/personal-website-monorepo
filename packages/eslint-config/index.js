module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "prettier",
    "turbo",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:import/recommended",
  ],
  plugins: [
    "@typescript-eslint",
    "prettier",
    "eslint-plugin-import-helpers",
    "import",
    "unused-imports",
  ],
  ignorePatterns: ["**/node_modules/**", "**/coverage/**"],
  overrides: [],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2022,
    sourceType: "module",
  },
  rules: {
    "@typescript-eslint/no-use-before-define": ["error"],
    "@typescript-eslint/no-shadow": ["error"],
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      { allowExpressions: true },
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      { js: "never", ts: "never", tsx: "never" },
    ],
    "max-len": ["warn", { code: 100, ignoreComments: true, ignoreUrls: true }],
    "prettier/prettier": ["error", { endOfLine: "auto" }],
    "@typescript-eslint/no-explicit-any": "warn",
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
      typescript: {},
    },
  },
};
