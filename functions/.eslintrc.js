module.exports = {
  "root": true,
  "env": {
    "es6": true,
    "node": true,
  },
  "extends": [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "google",
    "plugin:@typescript-eslint/recommended",
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": ["tsconfig.json", "tsconfig.dev.json"],
    "sourceType": "module",
  },
  "ignorePatterns": [
    "/lib/**/*", // Ignore built files.
    "/generated/**/*", // Ignore generated files.
  ],
  "plugins": ["@typescript-eslint", "import"],
  "rules": {
    "import/no-unresolved": 0,
    "object-curly-spacing": "off",
    "comma-dangle": "off",
    "linebreak-style": "off",
    "quotes": "off",
    "indent": "off",
    "new-cap": "off",
    "max-len": ["error", { "code": 100 }],
  },
};
