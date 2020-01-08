import {
  TSESTree,
  TSESLint,
  AST_NODE_TYPES,
} from '@typescript-eslint/experimental-utils';
import * as tsutils from 'tsutils';
import ts, { isConstructorDeclaration } from 'typescript';

import * as util from '../util';

export default util.createRule({
  name: 'no-scrollTo',
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Discourage scrollTo function due to incompatitability in browsers',
      category: 'Possible Errors' as const,
      recommended: 'error' as const,
      requiresTypeChecking: true
    },
    schema: [],
    messages: {
      'scrollTo-found': 'Please dont use scollto'
    }
  },
  defaultOptions: [],
  create(context) {
    const parserServices = util.getParserServices(context);
    const checker = parserServices.program.getTypeChecker();
    return {
      CallExpression(node: TSESTree.CallExpression) {
        // const signature = checker.getResolvedSignature(node)

        // if (signature) {
        //   const declaration = signature.declaration
        // }
        console.log('node? ', node)

        checker.getTypeAtLocation(node.callee). .aliasSymbol == ts.Symbol
      },
      
      'ArrowFunctionExpression'(
        node: TSESTree.ArrowFunctionExpression,
      ): void {
      },
      'TS'
    }
  }
})
