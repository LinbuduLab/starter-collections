# Starter Collections

Starters collection based on pnpm workspace.

**Note: This is a personal project, it is NOT community oriented, so the direction of the iteration will be entirely based on the authors' own opinions.**

## Getting Started

- [Use this template](https://github.com/LinbuduLab/starter-collections/generate) and clone it.
- **Do not run `pnpm install` immediately**, run `pnpm init:workspace` to only install dependencies required by CLI.
- Pick starters you need for this time.
- Move on!

Also, you can use `degit` to clone internal workspace packages directly:

```bash
pnpx degit https://github.com/LinbuduLab/starter-collections/packages/cac-cli-starter ./my-awesome-cli

pnpx degit https://github.com/LinbuduLab/starter-collections/packages/<package> <dir>
```

## Packages

### React

- [Create-React-App](packages/cra-ts)
- [ESBuild-React-App](packages/esbuild-react-app)
- [Parcel-React-App](packages/parcel-react/)
- [Vite-React-App](packages/vite-react-starter)

### NodeJs Server

- [NestJs](packages/nest-starter/)
- [Mercurius](packages/mercurius-starter/)
- [MidwayJs](packages/midway-koa)

### GraphQL

- [NestJs + GraphQL](packages/nest-graphql-starter/)
- [Nest + Mercurius](packages/nest-mercurius-starter/)
- [Strapi(with GraphQL)](packages/strapi-graphql-starter/)
- MidwayJs + GraphQL
- [Apollo Element](packages/apollo-element-starter/)
- [Apollo Client](packages/vite-apollo-gcg-starter/)
- [Apollo Server](packages/apollo-server-starter/)
- Envelop Plugin Starter
- [GraphQL Code Generator](packages/gcg-collections/)

### Lib

- [ESBuild Plugin Starter](packages/esbuild-plugin-starter/)
- [Vite Plugin Starter](packages/vite-plugin-starter)
- [TypeScript Tool Type](packages/ts-tool-type-starter/)
- [Common Node Library](packages/node-lib-starter/)
- [Prisma Starter](packages/prisma-starter)
- [CLI App by CAC](packages/cac-cli-starter/), with common CLI tools.
- GitHub Action
- [Puppeteer](packages/puppeteer-starter)

### Framework

- [Astro](packages/astro-generic-starter)
- [Umi](packages/umi-starter/) (Temporarily removed as it's not stable yet)
- StoryBook
- [Lit](packages/lit-app/)
- [Stencil](packages/stencil-app/)

### Documentation

- [Astro](packages/astro-docs-starter)
- [VitePress](packages/vitepress-starter)

## Scripts

### Init

Command: `pnpm cli init`

As pnpm's postinstall hook cannot be interactive, we need to run:

```bash
pnpm cli init
```

manually to init workspace.

In fact, all we need to do is to choose some of these projects according to our actual needs.

```bash
? Choose starters you want to use for this time! …
✔ cra-ts
✔ esbuild-plugin-starter
✔ esbuild-react-app
✔ midway-koa
✔ nest-graphql-starter
✔ nest-starter
✔ parcel-react
✔ prisma-starter
...
```

Projects that are not selected will be removed from the workspace packages dir `/packages`
and a backup will be kept in `node_modules/.LinbuduLab`.

- You can run `pnpm cli reset` to recover these packages back to `packages` dir.
- You can use command `pnpm cli copy` to add specified packages back.
- You can execute `pnpm cli cache` to cache workspace packages manually.

```bash
✔ Choose starters you want to copy into workspace · esbuild-plugin-starter, esbuild-react-app
✔ Rename package esbuild-plugin-starter · esbuild-plugin-boom
? Rename package esbuild-react-app › esbuild-react-todo
```

### Reset

Command: `pnpm cli reset`

This command recovers all the original packages, and does not overwrite the already existing projects.

Useful when you want to start from scratch.

### Copy

Command: `pnpm cli copy`

This command can be useful when you want to have multiple projects based on the same initial template(starter), for example you may want to develop several ESBuild plugins inside one workspace.

After you have selected the items you want to copy, you also need to rename them, which will be used to update `name` field in `package.json`.

```bash
✔ Choose starters you want to copy into workspace · esbuild-plugin-starter, esbuild-react-app
✔ Rename package esbuild-plugin-starter · esbuild-plugin-boom
? Rename package esbuild-react-app › esbuild-react-todo
```

### Rename

Command: `pnpm cli rename`

Select starters and rename them(dir and `package.json` name field).

Useful when you want to rename some packages to be actually used.

### Cache

Command: `pnpm cli cache`

Cache all initial workspacr packages to cache dir. This will be executed in `postinstall` hook.

You can also execute command manually to cache some extra changes.

### Create

Command: `pnpm cli create`

This command creates a simple TypeScript starter with minimal essential scripts for you.

### Fork

Command: `pnpm cli fork [workspace name] <forked worksapce dir>`.

This command will create a fork of the current workspace at specified directory. If destination directory is not specified, it will use `../tmp/forked` as default.

### Upgrade

Command: `pnpm cli upgrade [projectBlurKeyword]`

This command executes deps version checking and upgrading for specified packages. You can use just keyword or complete project name like:

```bash
# input 'vite' has no '-' signal, so it will work for all projects which has 'vite' in its name
pnpm cli u vite

# work for 'vite-react-starter' only
pnpm cli u vite-react-starter
```

Also, if you execute this command with no project name (or no exist project name), it will ask you for working targets.

### Release

> WIP

Command: `pnpm cli release [project] --minor --skip-git-checks --changelog`

### pnpm commands

Common commands:

```bash
pnpm i typescript@beta --filter '*' -D
pnpm add child1 --filter 'parent1' --workspace
pnpm run build --recursive --if-present --parallel --enable-pre-post-scripts --filter ''
pnpm exec jest --recursive --parallel --filter ''

pnpx create-react-app ./my-app
pnpm create react-app my-app

pnpm env use --global lts
pnpm env use --global 16

pnpm publish -r
pnpm publish --tag --access=public --git-checks --report-summary --filter
```

Release workflow:

```bash
pnpm add @changesets/cli -DW
pnpm changeset init
pnpm changeset
pnpm changeset version
pnpm install
git add . && git commit -m 'feat: bump!'
pnpm publish -r --access=public
git push
```

More filter syntax:

> See [Filtering](https://pnpm.io/filtering#--filter-package_name) for more details.

```bash
# exact matching
pnpm --filter '@scope/*'
pnpm --filter 'prefix-*'
pnpm --filter 'pre*'
pnpm --filter '*post'

# package and its deps
pnpm --filter pkg...
pnpm --filter "@scope/pkg-*..."

# package and its dependents
pnpm --filter ...pkg

# only package deps
pnpm --filter "foo^..."

# only package dependents
pnpm --filter "...^foo"

# use directory
pnpm --filter ./packages/pkg

# include packages under dir
pnpm --filter ...{./packages}
pnpm --filter {./packages}...
pnpm --filter ...{./packages}[origin/master]...

# since
pnpm --filter '...[origin/master]'

# exclude
pnpm --filter=!excluded-pkg

```

## License

This project follows [MIT License](LICENSE).
