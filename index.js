"use strict";

module.exports = {
  extends: "stylelint-config-wordpress",
  plugins: [
    "stylelint-declaration-use-variable",
    "stylelint-order"
  ],
  rules: {

    /*
    // WordPress Coding Standards
    // https://make.wordpress.org/core/handbook/best-practices/coding-standards/css/

    // Structure
    "selector-list-comma-newline-after": "always-multi-line",

    // Selectors
    "selector-type-case": "lower",
    "selector-attribute-quotes": "always",
    "string-quotes": "double",

    // Properties
    "declaration-colon-space-after": "always",
    "declaration-colon-space-before": "always",
    "color-named": "never",
    "color-hex-case": "lower",
    "property-case": "lower",
    "color-hex-length": "short",

    // Property Ordering - Alphabetically sorted
    "order/properties-alphabetical-order": true,

    // Vendor Prefixes
    "property-no-vendor-prefix": true,

    // Values
    "sh-waqar/declaration-use-variable": "/color/", // Use a variable for any property that contains "color"
    "no-extra-semicolons": true,
    "declaration-block-trailing-semicolon": "always",
    "function-parentheses-space-inside": "never",
    "font-weight-notation": "numeric",
    "length-zero-no-unit": "true",
    "number-leading-zero": "always",
    "value-list-comma-newline-after": "always",

    // 10up Coding Standards / General
    // https://10up.github.io/Engineering-Best-Practices/css/

    "no-eol-whitespace": true,
    "max-empty-lines": 1,
    "indentation": "tab",
    "comment-empty-line-before": "always",
    "no-invalid-double-slash-comments": true,
    "no-duplicate-at-import-rules": true,
    "number-max-precision": 2,
    "declaration-block-single-line-max-declarations": 1,
    "value-keyword-case": "lower",
    "declaration-block-semicolon-newline-after": "always",
    "declaration-block-no-ignored-properties": null, */

    "sh-waqar/declaration-use-variable": "/color/", // Use a variable for any property that contains "color"
    "order/properties-alphabetical-order": true,


  }
};
