import rule from '../../rules/no-scrollTo';
import { RuleTester } from '../RuleTester';

const ruleTester = new RuleTester({
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  }
});

ruleTester.run('no-scrollTo', rule, {
  valid: [
    // 'let f = Object();', // Should not fail if there is no options set
    // {
    //   code: 'abc();',
    // },
    // 'const abc = () => 1; abc();'
  ],
  invalid: [
    // {
    //   code: 'window.scrollTo();',
    //   errors: [
    //     {
    //       messageId: 'scrollTo-found',
    //       data: { type: 'string' },
    //       line: 1,
    //       column: 1,
    //     },
    //   ]
    // },
    {
      code: 'scrollTo();',
      errors: [
        {
          messageId: 'scrollTo-found',
          data: { type: 'string' },
          line: 1,
          column: 1,
        },
      ]
    }
  ],
});
