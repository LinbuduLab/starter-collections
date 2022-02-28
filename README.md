# pnpm-workspace-template

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
