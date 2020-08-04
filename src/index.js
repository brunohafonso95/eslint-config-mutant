const rules = require("./rules");
const globals = require("./globals");

module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  globals,
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  plugins: ["prettier"],
  rules,
};
