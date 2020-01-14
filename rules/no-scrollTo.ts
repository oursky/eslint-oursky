import {
  AST_NODE_TYPES,
} from '@typescript-eslint/experimental-utils';
// import * as tsutils from 'tsutils';
import ts from 'typescript';

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
      'scrollTo-found': 'scrollTo is not well supported, use scrollTop instead'
    }
  },
  defaultOptions: [],
  create(context) {
    const parserServices = util.getParserServices(context);
    const checker = parserServices.program.getTypeChecker();
    return {
      MemberExpression(node) {
        if (
          node.object.type === AST_NODE_TYPES.Identifier &&
          node.object.name === 'window'
        ) {
          if (
            node.property.type === AST_NODE_TYPES.Identifier &&
            node.property.name === 'scrollTo'
          ) {
            context.report({
              node,
              messageId: 'scrollTo-found',
            });
          }
        }
      },
      CallExpression(node) {
        if (
          node.callee.type === AST_NODE_TYPES.Identifier &&
          node.callee.name === 'scrollTo'
        ) {
          const originalNode = parserServices.esTreeNodeToTSNodeMap.get<
            ts.CallExpression
          >(node);

          const type = checker.getTypeAtLocation(originalNode.expression);

          console.log('=== type of expression 2', type, checker.typeToString(type));

          context.report({
            node,
            messageId: 'scrollTo-found',
          });
        }
      }
    }
  }
})
