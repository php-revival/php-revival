![PHP Revival](https://raw.githubusercontent.com/php-revival/php-revival/main/src/art/php-revival-promo-big.png)

[![GitHub Actions](https://github.com/php-revival/php-revival/actions/workflows/github-actions.yml/badge.svg?branch=main)](https://github.com/php-revival/php-revival/actions/workflows/github-actions.yml)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)


Browser extension that every PHP developer must have. It changes styles on [php.net](https://www.php.net) website for a better experience of using php documentation. Extension adds the dark theme to php code examples, changes their color schemes and makes User Contributed Notes more readable. You'll like it.

## Links

- [Landing page](https://php-revival.github.io/)
- [Firefox extension](https://addons.mozilla.org/en-US/firefox/addon/php-revival)
- [Brave extension](https://addons.mozilla.org/en-US/firefox/addon/php-revival)
- [Edge extension](https://addons.mozilla.org/en-US/firefox/addon/php-revival)
- [Chrome extension](https://chrome.google.com/webstore/detail/php-revival/fceclmihdanbepiogjoeiolnpkalcjpe)

## Start working on the source code

All necessary scripts are in package.json file. I'm using the wrapper around a webpack that's called [Laravel mix](https://laravel-mix.com/). You need to have [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/lang/en/) JavaScript package managers.

Configuration file for __Laravel mix__ is called __webpack.mix.js__, it is in the root of the project.

### Installation

**Clone the repo**
```bash
git clone https://github.com/php-revival/php-revival.git && cd php-revival
```

**Install all dependencies**
```bash
yarn install
# or
npm i
```

**Watch files**
```bash
yarn watch
# or
npm run watch
```

**Compile to production**
```bash
yarn prod
# or
npm run prod
```

### How to change the plugin version

To change the plugin version you need to modify 3 files:

1. [manifest.json](extension/manifest.json) - change the `version` field in JSON
2. [manifest2.json](extension/manifest2.json) - change the `version` field in JSON
3. [package.json](package.json) - change the `version` field in JSON

### Code style

Don't worry about the code style. We use [Prettier](https://prettier.io/) to format the code. You can run it manually by executing `yarn prettier` or `npm run prettier` to format the code, or `yarn prettier-check` or `npm run prettier-check` to check if the code is formatted correctly.

### Notes

- The extension should be supported by all major browsers: Chrome, Firefox, Edge and Brave. Since Firefox does't support manifest version 3 yet, we have to use [manifest2.json](extension/manifest2.json) for Firefox and [manifest.json](extension/manifest.json) for Chrome based browsers.