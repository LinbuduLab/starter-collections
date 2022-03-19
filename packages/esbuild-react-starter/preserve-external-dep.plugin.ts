import { Plugin } from "esbuild";

interface IOptions {
  depsToExtract: Array<{
    dep: string;
    content?: string;
    contentFunc?: (dep: string) => string;
  }>;
}

export const PreserveExternalPlugin = (options: IOptions): Plugin => {
  const NAMESPACE = "preserved-external-deps";
  const depList = options.depsToExtract.map((pair) =>
    pair.contentFunc
      ? { dep: pair.dep, content: pair.contentFunc(pair.dep) }
      : pair
  );

  const filterRE = new RegExp(
    `^(${depList
      .map((config) => config.dep.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
      .join("|")})$`
  );

  return {
    name: "PreserveExternalPlugin",
    setup(build) {
      build.onResolve({ filter: filterRE }, ({ path }) => {
        return {
          path,
          namespace: NAMESPACE,
        };
      });

      for (const { dep, content } of depList) {
        build.onLoad(
          { filter: new RegExp(`^${dep}$`), namespace: NAMESPACE },
          () => {
            return {
              contents: content,
            };
          }
        );
      }
    },
  };
};
