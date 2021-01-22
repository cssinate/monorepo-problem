# Scenic Design System

Latest version: `vNext-SNAPSHOT`

Scenic is the successor of the original MDS (Martello Design System). The `tokens` directory is responsible for organizing the definitions of design tokens (TODO: link to design tokens section of docs). The `style` directory is all of the SASS functionality. Each of these files outputs to `dist`. `docs` is the documentation for using the design system in your project, and requires `style` and `tokens` to be built.

## For Users of Scenic

Check out the examples/directory

`npm install @mtlo/cnk-tokens`

`npm install @mtlo/cnk-vue` (optional)

... TODO ...

## For Developers of Scenic

### Quick Start

Run `npm run bootstrap`

Run `cd packages/cnk-docs && npm run serve` to launch the Scenic documents on your [localhost](http://localhost:8081/#/).


### Details

This project uses [lerna](https://lerna.js.org/) to assist in linking building and publishing multiple packages.

Each of the Scenic packages may be found under /packages. Each is an npm package in it's own right, but if you are developing in Scenic you will want to use lerna to manage the links between the different packages composing Scenic.

If you look in the node_modules for each sub package you will find symlinks to the other packages in this project.

Lerna is installed locally, the root level package.json has the various scripts you need set up for you.

### Publishing

... TODO ...

## NPM Versions

This project uses the same version of npm as defined in the README for [MarWatch](https://github.com/martellotech/MarWatch/blob/develop/README.md#download-and-install-software).

## Branching and Releasing

See the [Omnibase](https://github.com/martellotech/Omnibase/blob/develop/Branching_Releasing.md) guide.
