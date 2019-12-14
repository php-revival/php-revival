![php revival](https://raw.githubusercontent.com/SerhiiCho/php_revival/master/art/php-revival-promo-big.png)

## About

Browser extension that changes styles on [php.net](https://www.php.net) website with additional code examples formatting and many other fixes for better experience of using php documentation. Extension adds the dark theme to php code examples and changes their color schemes and makes User Contributed Notes more readable.

After installing the extension an extension you will be redirected to a [php.net](https://www.php.net) website and you can start typing without clicking in the search bar.

## Links for installing

- [Firefox](https://addons.mozilla.org/en-US/firefox/addon/php-revival)
- [Chrome](https://chrome.google.com/webstore/detail/php-revival/fceclmihdanbepiogjoeiolnpkalcjpe)

## Start working on source code

All necessary scripts are in package.json file. I'm using the wrapper around a webpack that's called [Laravel mix](https://laravel-mix.com/). 

Configuration file for __Laravel mix__ is called __webpack.mix.js__, it is in the root of the project.

**Clone the repo**
```bash
git clone https://github.com/SerhiiCho/php-revival.git && cd php-revival
```

**Generate node_modules directory**
```bash
npm i
```

**Watch files**
```bash
yarn run watch
```

**Compile to production**
```bash
yarn run prod
```