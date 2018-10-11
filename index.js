"use strict";

module.exports = {
  extends: "stylelint-config-wordpress",
  plugins: [
    "stylelint-declaration-use-variable",
    "stylelint-order"
  ],
  rules: {
    "sh-waqar/declaration-use-variable": "/color/",
    "order/properties-alphabetical-order": true,
    "function-url-quotes": "always",
    "selector-class-pattern": ""
  }
};
