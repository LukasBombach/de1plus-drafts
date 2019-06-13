import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import typescript from "rollup-plugin-typescript";
import pkg from "./package.json";

function executeModule() {
  return {
    name: "exec", // this name will show up in warnings and errors

    writeBundle() {
      require(`./${pkg.module}`);
      return null; // other ids should be handled as usually
    }
  };
}

export default [
  // browser-friendly UMD build
  {
    input: "src/main.ts",
    output: {
      name: "de1",
      file: pkg.browser,
      format: "umd"
    },
    plugins: [
      resolve(), // so Rollup can find `ms`
      commonjs(), // so Rollup can convert `ms` to an ES module
      typescript() // so Rollup can convert TypeScript to JavaScript
    ],
    watch: {
      clearScreen: false
    }
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // an array for the `output` option, where we can specify
  // `file` and `format` for each target)
  {
    input: "src/main.ts",
    plugins: [
      executeModule(),
      typescript() // so Rollup can convert TypeScript to JavaScript
    ],
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "es" }
    ],
    watch: {
      clearScreen: false
    }
  }
];
