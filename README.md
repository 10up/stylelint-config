10up Stylelint Config
=====================

At 10up, we strive to provide digital products that yield a top-notch user experience. In order to improve both our efficiency and consistency, we need to standardize what we use and how we use it. This theme scaffold allows us to share initial set up procedures to make sure all projects can get up and running as quickly as possible while closely adhering to 10up's high quality standards.

<a href="http://10up.com/contact/"><img src="https://10updotcom-uploads.s3.amazonaws.com/uploads/2016/08/10up_github_banner-2.png" alt="Work with 10up, we create amazing websites and tools that make content management simple and fun using open source tools and platforms"></a>

## Dependencies

1. [Node & NPM](https://www.npmjs.com/get-npm) - 3rd party dependencies are managed through NPM, so you will need that installed globally
2. [Stylelint](https://stylelint.io/) - as this is a config extention for Stylelint, you will need Stylelint installed in your main project in order for it to work.

## Installation

First, install Stylelint:
```
// NPM
npm install stylelint --save-dev

// Yarn
yarn add stylelint
```

Then install the 10up Stylelint config:
```
// NPM
npm install @10up/stylelint-config --save-dev
```

## Usage

Add the following to your `.stylelintrc` file:

```js
{
  "extends": [
    "@10up/stylelint-config"
  ]
}

```

### Webpack Setup
Run `npm install stylelint-webpack-plugin --save-dev`. You should already have the proper loader in `postcss-loader`, but if you don't install that as well. After installing stylelint and the configuration above add the following to your Webpack config:

```js
import StyleLintPlugin from 'stylelint-webpack-plugin';

plugins: [
  new StyleLintPlugin( {
    configFile: ".stylelintrc", // if your config is in a non-standard place
    files: "src/**/*.css", // location of your CSS files
    fix: true, // if you want to auto-fix some of the basic rules
  } ),
]

```

Read more about these options at [stylelint-webpack-plugin](https://github.com/webpack-contrib/stylelint-webpack-plugin), [the main stylelint documentation](https://stylelint.io/) and [postcss-loader](https://github.com/postcss/postcss-loader). That should be all you need, but if there are any errors in this documentation, [please file an issue and let us know](https://github.com/10up/stylelint-config/issues/new)!

## Usage with the [10up Theme Scaffold](https://github.com/10up/theme-scaffold)

As of version [x] - this stylelint config as well as stylelint itself, will be included in the theme and plugin scaffolds.

## Autofixing

Certain rules / violations can be fixed automatically using the `--fix` flag via the command line.
To ensure that Stylelint fixes what it can, you can run:

```
stylelint path/to/css/file.css --fix`
```

## Contributing

We don't know everything! We welcome pull requests and spirited, but respectful, debates. Please contribute via [pull requests on GitHub](https://github.com/10up/theme-scaffold/compare).

1. Fork it!
2. Create your feature branch: `git checkout -b feature/my-new-feature`
3. Commit your changes: `git commit -am 'Added some great feature!'`
4. Push to the branch: `git push origin feature/my-new-feature`
5. Submit a pull request
