![PHP Revival](https://raw.githubusercontent.com/php-revival/php-revival/master/src/art/php-revival-promo-big.png)

[![GitHub Actions](https://github.com/php-revival/php-revival/actions/workflows/github-actions.yml/badge.svg?branch=master)](https://github.com/php-revival/php-revival/actions/workflows/github-actions.yml)

Browser extension that every PHP developer must have. It changes styles on the [php.net](https://www.php.net) website for a better experience of using php documentation. Extension adds dark and light themes, changes color scheme of code samples and makes User Contributed Notes more readable.

## Links

- [Landing page](https://php-revival.github.io/)
- [Firefox-based Extension](https://addons.mozilla.org/en-US/firefox/addon/php-revival)
- [Chromium-based Extension](https://chrome.google.com/webstore/detail/php-revival/fceclmihdanbepiogjoeiolnpkalcjpe)

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

Configuration file for **Laravel mix** is called **webpack.mix.js**, it is in the root of the project.

### With a Container Engine

#### Build the Image

To build the image, run this command. With Podman:

```bash
podman-compose build
```

With Docker:

```bash
docker compose build
```

#### Create `node_modules`

Run this command to install npm packages and generate a `node_modules` directory on your local machine.

With Podman:

```bash
podman-compose run --rm app npm i
```

With Docker:

```bash
docker compose run --rm app npm i
```

#### Run the Container

Start the container which will watch your changes and compile them to plain JavaScript and CSS.

With Podman:

```bash
podman-compose up
```

With Docker:

```bash
docker compose up
```

You can add `-d` (detached) mode to make it run in background, but I suggest not using detached mode since you're not going to see any Weback errors.

#### Enter the Container

Enter inside the container. With Podman:

```bash
podman-compose exec app sh
```

With Docker:

```bash
docker compose exec app sh
```

You'll be able to run [NPM commands](#npm-commands-available) inside of the container.

> [!NOTE]
> You don't need to run `npm run watch` inside since this command is already running from the start of container.

#### Destroy the Container

Remove the container. With Podman:

```bash
podman-compose down
```

With Docker:

```bash
docker compose down
```
