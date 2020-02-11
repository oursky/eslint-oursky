import { TSESTree, AST_NODE_TYPES } from '@typescript-eslint/experimental-utils';
import { Scope } from '@typescript-eslint/experimental-utils/dist/ts-eslint';

export function isCallee(node: TSESTree.Node) {
  return node.parent?.type === AST_NODE_TYPES.CallExpression && node.parent.callee === node;
}

export function getVariableByName(initScope: Scope.Scope, name: string) {
  let scope: Scope.Scope | null = initScope;

  while (scope) {
      const variable = scope.set.get(name);

      if (variable) {
          return variable;
      }

      scope = scope.upper;
  }

  return null;
}

export function isIdentifier(node: TSESTree.Node, name: string) {
  return node.type === AST_NODE_TYPES.Identifier && node.name === name;
}

export function isConstant(node: TSESTree.Node, name: string) {
  switch (node.type) {
      case AST_NODE_TYPES.Literal:
          return node.value === name;

      case AST_NODE_TYPES.TemplateLiteral:
          return (
              node.expressions.length === 0 &&
              node.quasis[0].value.cooked === name
          );

      default:
          return false;
  }
}

export function isMember(node: TSESTree.Node, name: string) {
  return (
      node.type === AST_NODE_TYPES.MemberExpression &&
      (node.computed ? isConstant : isIdentifier)(node.property, name)
  );
}
