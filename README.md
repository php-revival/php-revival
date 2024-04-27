![PHP Revival](https://raw.githubusercontent.com/php-revival/php-revival/main/src/art/php-revival-promo-big.png)

[![GitHub Actions](https://github.com/php-revival/php-revival/actions/workflows/github-actions.yml/badge.svg?branch=main)](https://github.com/php-revival/php-revival/actions/workflows/github-actions.yml)

Browser extension that every PHP developer must have. It changes styles on [php.net](https://www.php.net) website for a better experience of using php documentation. Extension adds the dark theme to php code examples, changes their color schemes and makes User Contributed Notes more readable. You'll like it.

## Links

- [Landing page](https://php-revival.github.io/)
- [Firefox extension](https://addons.mozilla.org/en-US/firefox/addon/php-revival)
- [Brave extension](https://addons.mozilla.org/en-US/firefox/addon/php-revival)
- [Edge extension](https://addons.mozilla.org/en-US/firefox/addon/php-revival)
- [Chrome extension](https://chrome.google.com/webstore/detail/php-revival/fceclmihdanbepiogjoeiolnpkalcjpe)

## Start working on source code

All necessary scripts are in package.json file. I'm using the wrapper around a webpack that's called [Laravel mix](https://laravel-mix.com/). You need to have [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/lang/en/) JavaScript package managers.

Configuration file for __Laravel mix__ is called __webpack.mix.js__, it is in the root of the project.

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
