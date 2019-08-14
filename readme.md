# PHP revival

Browser extention that changes styles on php.net website width additional code examples formatting and many other fixes for better experience of using php documentation. This extantion adds the dark theme to php code examples and changes their color schemes, and makes User Contributed Notes more readable.

# Start working on source code

All necessary scripts are in package.json file. I'm using the wrapper around a webpack that's called [Laravel mix](https://laravel-mix.com/). 

Configuration file for __Laravel mix__ is called __webpack.mix.js__, it is in the root of the project.

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
