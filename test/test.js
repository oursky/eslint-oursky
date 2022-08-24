const path = require("path");

const { ESLint } = require("eslint");

function runTest(filename) {
  test(filename, async () => {
    const cli = new ESLint();

    const lintResults = await cli.lintFiles([path.join("src", filename)]);
    // Patch the path so that they are the same on any machine.
    for (const r of lintResults) {
      const absolute = r.filePath;
      const relative = path.relative(process.cwd(), absolute);
      r.filePath = relative;
    }

    const formatter = await cli.loadFormatter("unix");
    const actual = await formatter.format(lintResults);
    expect(actual).toMatchSnapshot();
  });
}

runTest("simple.ts");
runTest("react.tsx");
