import consola from 'consola';
import fs, { Mode } from 'fs-extra';
import { EOL } from 'os';
import path from 'path';
import execa from 'execa';
import preferredPM from 'preferred-pm';
import { PackageJson } from 'type-fest';

export class CLIUtils {
  public static get existPackages() {
    return fs.readdirSync(path.resolve(__dirname, '../packages'));
  }

  public static readJsonSync<TParsedContent = Record<string, unknown>>(
    filePath: string,
    options?: {
      encoding?: null | undefined;
      flag?: string | undefined;
      throw?: boolean;
      parserOptions?: string;
      reviver?: (key: string, value: any) => any;
    } | null
  ): TParsedContent {
    const content = fs
      .readFileSync(filePath, {
        ...options,
        encoding: 'utf-8',
      })
      .replace(/^\uFEFF/, '');

    let parsed: any;

    try {
      parsed = JSON.parse(content, options?.reviver);
    } catch (error: any) {
      if (options?.throw) {
        error.message = `${filePath}: ${error.message}`;
        throw error;
      } else {
        return {} as TParsedContent;
      }
    }

    return parsed;
  }

  public static writeJsonSync<TContent = Record<string, unknown>>(
    filePath: string,
    content: TContent,
    options?: {
      mode?: Mode | undefined;
      flag?: string | undefined;
    }
  ): void {
    const contentStr =
      JSON.stringify(content, null, 2).replace(/\n/g, EOL) + EOL;

    fs.writeFileSync(filePath, contentStr, options);
  }

  public static ensureAbsolutePath(
    input: string,
    cwd: string = process.cwd()
  ): string {
    return path.isAbsolute(input) ? input : path.resolve(input, cwd);
  }

  public static modifyJson<
    TRawContent = Record<string, unknown>,
    TUpdatedContent = Record<string, unknown>
  >(filePath: string, modifier: (content: TRawContent) => TUpdatedContent) {
    const absPath = CLIUtils.ensureAbsolutePath(filePath);

    const raw = CLIUtils.readJsonSync<TRawContent>(absPath);

    if (!raw) {
      return;
    }

    const updated = modifier(raw);

    CLIUtils.writeJsonSync(absPath, updated);
  }

  public modifyPackageJSON(
    pkgJsonPath: string,
    field: string,
    content: any,
    options?: {
      mergeObject?: boolean;
    }
  ) {
    CLIUtils.modifyJson<PackageJson, PackageJson>(pkgJsonPath, (pkg) => {
      const prevFieldContent = pkg[field as keyof PackageJson] as any;

      if (prevFieldContent && typeof prevFieldContent === 'object') {
        const updatedFieldContent =
          options?.mergeObject ?? true
            ? {
                ...prevFieldContent,
                ...content,
              }
            : content;
        pkg = {
          ...pkg,
          [field]: updatedFieldContent,
        };
      } else {
        pkg = {
          ...pkg,
          [field]: content,
        };
      }
      return pkg;
    });
  }

  public static async useChildProcess(
    command: string,
    options?: execa.Options
  ) {
    consola.info(`Executing command: ${command} \n`);

    await execa(command, {
      stdio: 'inherit',
      shell: true,
      preferLocal: true,
      ...(options ?? {}),
    });

    consola.info(`Execution finished.\n`);
  }

  public static ensureArray<T>(array: T | T[]): T[] {
    return Array.isArray(array) ? array : [array];
  }

  public static async installDeps(
    deps: Partial<Record<'deps' | 'devDeps', string | string[]>>,
    extraArgs: string = ''
  ) {
    const pm = await preferredPM(process.cwd());
    const m = pm?.name ?? 'pnpm';
    const installCommand = pm?.name === 'yarn' ? 'add' : 'install';

    // deps
    deps.deps &&
      (await this.useChildProcess(
        `${m} ${installCommand} ${CLIUtils.ensureArray(deps.deps).join(
          ' '
        )} ${extraArgs}`
      ));

    // devDeps
    deps.devDeps &&
      (await this.useChildProcess(
        `${m} ${installCommand} ${CLIUtils.ensureArray(deps.devDeps).join(
          ' '
        )} --save-dev ${extraArgs}`
      ));
  }
}
