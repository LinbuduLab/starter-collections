# pnpm-workspace-example

Advanced pnpm workspace example

## Commands

```bash
pnpm i typescript@beta --filter '*' -D
# workspace:^1.0.0 这种形式，如果发 parent1，会发成 ^1.0.0
pnpm add child1 --filter 'parent1' --workspace
pnpm run build --recursive --if-present --parallel --enable-pre-post-scripts --filter
# 🐂
pnpm exec jest --recursive --parallel --filter
pnpm dlx create-react-app ./my-app
pnpm create react-app my-app
pnpm env use --global lts
pnpm env use --global 16
# 发布所有尚未发布的包
pnpm publish -r
pnpm publish --tag --access=public --git-checks --report-summary --filter
```

```bash
pnpm add @changesets/cli -DW
pnpm changeset init
pnpm changeset version
pnpm install
pnpm publish -r
```
