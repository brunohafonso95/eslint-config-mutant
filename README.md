# Eslint config mutant

This package provides Mutant's .eslintrc as an extensible shared config.

# Usage

1. Install the package `eslint-config-mutant` using:

```bash
# using npm
npm i eslint-config-mutant --save-dev
```

```bash
# using yarn
yarn add eslint-config-mutant -D
```

2. Create a `.eslintrc.json` file with the following content:

```javascript
{
  "extends": ["eslint-config-mutant"]
}
```

3. Create a `.prettierrc` file with following content:

```javascript
{ "printWidth": 80, "singleQuote": true }
```

4. Create a `.editorconfig` file with the following content:

```javascript
root = true

[*]
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
end_of_line = lf
# editorconfig-tools is unable to ignore longs strings or urls
max_line_length = null
```

And the configuration is ready to use, the custom rules that the config contains are:

```javascript
  "prettier/prettier": ["error"],
  "arrow-body-style": "off",
  "function-paren-newline": "off",
  complexity: ["warn", 5],
  "max-statements": ["warn", { max: 10 }],
  "max-statements-per-line": ["warn", { max: 1 }],
  "max-nested-callbacks": ["warn", { max: 2 }],
  "max-depth": ["warn", { max: 2 }],
  "max-params": ["warn", 3],
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
}
```

the other rules we extends from [Airbnb's JavaScript styleguide](https://github.com/airbnb/javascript)

