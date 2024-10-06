import { join, relative } from "path";
import { cwd } from "node:process";
import { ESLint } from "eslint";

// Set timeout to 10s.
// It is observed that the test takes more than 5s to run, while the default timeout is 5s.
const timeout = 10 * 1000;

function runTest(filename) {
  test(
    filename,
    async () => {
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
    },
    timeout
  );
}

runTest("simple.ts");
runTest("react.tsx");
