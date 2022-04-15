module.exports = {
  extends: [],
  settings: {
    react: {
      pragma: "React",
      version: "detect",
    },
  },
  rules: {
    "react/no-this-in-sfc": 2,
    "react/prop-types": 0,
    "template-curly-spacing": "off",
    indent: ["warn", 2, { ignoredNodes: ["TemplateLiteral"] }],
  },
  plugins: ["react"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
  },
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    cy: true,
    context: true,
    Cypress: true,
    assert: true,
  },
};
