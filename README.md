![PHP Revival](https://raw.githubusercontent.com/php-revival/php-revival/master/src/art/php-revival-promo-big.png)

[![GitHub Actions](https://github.com/php-revival/php-revival/actions/workflows/github-actions.yml/badge.svg?branch=master)](https://github.com/php-revival/php-revival/actions/workflows/github-actions.yml)

Browser extension that every PHP developer must have. It changes styles on [php.net](https://www.php.net) website for a better experience of using php documentation. Extension adds the dark theme to php code examples, changes their color schemes and makes User Contributed Notes more readable. You'll like it.

## Links
- [Landing page](https://php-revival.github.io/)
- [Firefox Extension](https://addons.mozilla.org/en-US/firefox/addon/php-revival)
- [Zen Extension](https://addons.mozilla.org/en-US/firefox/addon/php-revival)
- [Brave Extension](https://chrome.google.com/webstore/detail/php-revival/fceclmihdanbepiogjoeiolnpkalcjpe)
- [Edge Extension](https://chrome.google.com/webstore/detail/php-revival/fceclmihdanbepiogjoeiolnpkalcjpe)
- [Chrome Extension](https://chrome.google.com/webstore/detail/php-revival/fceclmihdanbepiogjoeiolnpkalcjpe)

## Contribute
### Download the Project

**Clone the Repo**
```bash
git clone https://github.com/php-revival/php-revival.git && cd php-revival
```

### NPM Commands Available
All necessary scripts are in `package.json` file. I'm using the wrapper around a webpack that's called [Laravel mix](https://laravel-mix.com/).

#### Install all Dependencies
```bash
npm i
```

#### Watch File Changes
Watches the changes and compiles SASS and TypeScript to CSS and JavaScript.
```bash
npm run watch
```

#### Compile to Production
Compile files for production.
```bash
npm run prod
```

#### Run Jest Tests
```bash
npm test
```

Configuration file for __Laravel mix__ is called __webpack.mix.js__, it is in the root of the project.

### Without a Container Engine
If you don't use container engines like [Podman](https://podman.io/) or [Docker](https://www.docker.com/), you need to do a little bit setup. You need to have [npm](https://www.npmjs.com/) package managers to run the commands.

### With a Container Engine
If you use container engines like [Podman](https://podman.io/) or [Docker](https://www.docker.com/) it's a lot easier for you. You just need to have Podman with Podman Compose or Docker with Docker Compose installed on your machine.

#### Build the Image
To build the image, run this command:
```bash
docker compose build
# for Podman, run this:
podman-compose build
```

#### Create and Enter the Container
To create and enter inside the container, run this command:
```bash
docker compose run --rm app
# for Podman, run this:
podman-compose run --rm app
```

You'll be able to run [NPM commands](#npm-commands-available) inside of the container.

#### Stop the Container
```bash
docker compose down
# for Podman, run this:
podman-compose down
```