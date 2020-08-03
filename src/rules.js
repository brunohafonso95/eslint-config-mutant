module.exports = {
  "prettier/prettier": ["error"],
  "arrow-body-style": "off",
  "function-paren-newline": "off",
  complexity: ["warn", 5],
  "max-statements": ["warn", { max: 10 }],
  "max-statements-per-line": ["warn", { max: 1 }],
  "max-nested-callbacks": ["warn", { max: 2 }],
  "max-depth": ["warn", { max: 2 }],
  "max-params": ["warn", 3],
  "max-lines": ["warn", { max: 120, skipComments: true }],
  "max-len": ["warn", 80, { ignoreUrls: true, ignoreComments: true }],
  "no-param-reassign": [
    "warn",
    {
      props: true,
      ignorePropertyModificationsFor: [
        "acc",
        "accumulator",
        "item",
        "e",
        "module",
        "req",
        "request",
        "res",
        "response",
        "session",
      ],
    },
  ],
  "no-useless-constructor": "off",
  "class-methods-use-this": "off",
};
