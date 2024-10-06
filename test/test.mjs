import { join, relative } from "path";
import { cwd } from "node:process";
import { ESLint } from "eslint";

function runTest(filename) {
  test(filename, async () => {
    const cli = new ESLint();

    const lintResults = await cli.lintFiles([join("src", filename)]);
    // Patch the path so that they are the same on any machine.
    for (const r of lintResults) {
      const absolute = r.filePath;
      r.filePath = relative(cwd(), absolute);
    }

    const formatter = await cli.loadFormatter("unix");
    const actual = await formatter.format(lintResults);
    expect(actual).toMatchSnapshot();
  });
}

runTest("simple.ts");
runTest("react.tsx");
