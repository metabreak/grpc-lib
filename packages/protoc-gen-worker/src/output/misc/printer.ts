import * as prettier from 'prettier';
import { Dependency } from './interfaces';

const prettierConfig: prettier.Options = {
  printWidth: 80,
  useTabs: false,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  bracketSpacing: true,
  jsxBracketSameLine: false,
  arrowParens: 'always',
  parser: 'typescript',
};

const newLine = '\n';

export class Printer {
  private dependencies = new Set<Dependency>();

  constructor(private code = '') {}

  addDeps(...deps: Dependency[]): void {
    deps.forEach((item) => this.dependencies.add(item));
  }

  add(code: string): void {
    this.code += code;
  }

  addLine(code: string): void {
    this.add(code);
    this.newLine();
  }

  newLine(): void {
    this.code += newLine;
  }

  finalize(): string {
    return this.prettify(
      this.createLeadingComment() + this.createDependenciesCode() + this.code,
    );
  }

  private createLeadingComment(): string {
    const generationISODate = new Date().toISOString();
    const leadingCommentStrArr = [
      `/* tslint:disable */`,
      `/* eslint-disable */`,
      newLine,
      `// THIS IS A GENERATED FILE`,
      `// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST`,
      `// File was generated at: ${generationISODate}`,
      newLine,
    ];

    return leadingCommentStrArr.filter(Boolean).join(newLine);
  }

  private createDependenciesCode(): string {
    const deps = new Map<string, string[]>();
    let code = '';

    Array.from(this.dependencies).forEach((dep) => {
      let group = deps.get(dep.from);

      if (!group) {
        deps.set(dep.from, (group = []));
      }

      group.push(dep.token);
    });

    Array.from(deps.keys())
      .sort()
      .forEach((from) => {
        const tokens = deps.get(from) ?? [];

        if (tokens.length > 0) {
          code += `import { ${tokens.sort().join(', ')} } from '${from}';\n`;
        }
      });

    code += newLine;

    return code;
  }

  private prettify(code: string): string {
    return prettier.format(code, prettierConfig);
  }
}
