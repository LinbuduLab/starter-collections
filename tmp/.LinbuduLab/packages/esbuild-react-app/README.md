# ESBuild + React App

This project is a sample project showing how to use [ESBuild](https://esbuild.github.io/) as a compiler in React project, including **the configuration of React, ReactDOM mounts under window via plugins with precompiled files**, and **the required [ESBuild build options](https://esbuild.github.io/api/#simple-options)**, etc.
You can refer to the [build.ts](build.ts) and [plugin.ts](preserve-external-dep.plugin.ts) files to learn how to use ESBuild for simple replacements of Webpack.

**Note: This project has not been validated in a production environment, and it is not recommended that you do so.**

## Get Started

```bash
yarn

# execute build script, and use serve to start up a server.
yarn start

# execute ESBuild build API
yarn build
```

## Further

As ESBuild does not implement a module system like Webpack, the [`external`](https://esbuild.github.io/api/#external) property in ESBuild will in some cases not behave the same way as it does under a Webpack project.
In Webpack project, we've gotten used to the idea that webpack can handle mount under `window` with the related configuration, which will automatically inject code like `module.exports = React` into the compiled code, and the application code will refer to `window` when it executes `require("react")`.
So to archive this in ESBuild, we use an extra file in this project, packaged as `inject.js`, which contains the source code for `React`, `ReactDOM`, and mounts it under `window` at the end of the file. Then, we convert the application's import of react to go under `window`.
To ensure that the variables are mounted before the application is loaded, we need to ensure that `inject.js` is executed before `index.js`. In fact, a more common way to do this would be to use a CDN to do the `inject.js` work.
