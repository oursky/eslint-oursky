const path = require("path");

const { CLIEngine } = require("eslint");

function patchResults(results) {
  const cwd = process.cwd();
  return results.map(result => {
    return {
      ...result,
      filePath: path.relative(cwd, result.filePath),
    };
  });
}

function runTest(filename) {
  test(filename, () => {
    const cli = new CLIEngine();
    const report = cli.executeOnFiles([path.join("src", filename)]);
    const formatter = cli.getFormatter("unix");
    const results = patchResults(report.results);
    // Patch results so that all paths are relative to cwd.
    const actual = formatter(results);
    expect(actual).toMatchSnapshot();
  });
}

runTest("simple.ts");
