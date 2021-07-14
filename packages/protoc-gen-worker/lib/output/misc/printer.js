"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Printer = void 0;
const prettier = __importStar(require("prettier"));
const newLine = '\n';
class Printer {
    dependencies = new Set();
    code = '';
    constructor() { }
    addDeps(...deps) {
        deps.forEach((item) => this.dependencies.add(item));
    }
    add(code) {
        this.code += code;
    }
    addLine(code) {
        this.add(code);
        this.newLine();
    }
    newLine() {
        this.code += newLine;
    }
    finalize() {
        return this.prettify(this.createLeadingComment() + this.createDependenciesCode() + this.code);
    }
    createLeadingComment() {
        return `
/* tslint:disable */
/* eslint-disable */
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
//

`;
    }
    createDependenciesCode() {
        const deps = new Map();
        Array.from(this.dependencies).forEach((dep) => {
            let group = deps.get(dep.from);
            if (!group) {
                deps.set(dep.from, (group = []));
            }
            group.push(dep.token);
        });
        let code = '';
        Array.from(deps.keys())
            .sort()
            .forEach((from) => {
            const tokens = deps.get(from);
            code += `import { ${tokens.sort().join(', ')} } from '${from}';\n`;
        });
        code += newLine;
        return code;
    }
    prettify(code) {
        return prettier.format(code, { parser: 'typescript', singleQuote: true });
    }
}
exports.Printer = Printer;
//# sourceMappingURL=printer.js.map