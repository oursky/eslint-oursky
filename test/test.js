const path = require("path");

const { CLIEngine } = require("eslint");

function runTest(filename) {
  test(filename, () => {
    const cli = new CLIEngine();
    const report = cli.executeOnFiles([path.join("src", filename)]);
    const formatter = cli.getFormatter("unix");
    const actual = formatter(report.results);
    expect(actual).toMatchSnapshot();
  });
}

runTest("simple.ts");
