const path = require("path");

const { ESLint } = require("eslint");

function runTest(filename) {
  test(filename, async () => {
    const cli = new ESLint();
    const lintResults = await cli.lintFiles([path.join("src", filename)]);
    const formatter = await cli.loadFormatter("unix");
    const actual = await formatter.format(lintResults);
    expect(actual).toMatchSnapshot();
  });
}

runTest("simple.ts");
runTest("react.tsx");
