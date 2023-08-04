import { ESLintUtils, AST_NODE_TYPES } from "@typescript-eslint/utils";

export default ESLintUtils.RuleCreator((name) => name)({
  name: "react-vfc",
  meta: {
    type: "problem",
    schema: [],
    docs: {
      description:
        "Forbid the use of FC and FunctionComponent. Use VFC and VoidFunctionComponent instead.",
      recommended: "strict",
    },
    messages: {
      vfc: "Use VFC and VoidFunctionComponent instead of FC and FunctionComponent.",
    },
  },
  defaultOptions: [],
  create(context) {
    return {
      TSTypeAnnotation(node) {
        if (node.typeAnnotation.type === AST_NODE_TYPES.TSTypeReference) {
          if (node.typeAnnotation.typeName.type === AST_NODE_TYPES.Identifier) {
            if (
              node.typeAnnotation.typeName.name === "FC" ||
              node.typeAnnotation.typeName.name === "FunctionComponent"
            ) {
              context.report({
                messageId: "vfc",
                node: node.typeAnnotation,
              });
            }
          }
          if (
            node.typeAnnotation.typeName.type === AST_NODE_TYPES.TSQualifiedName
          ) {
            if (
              node.typeAnnotation.typeName.left.type ===
                AST_NODE_TYPES.Identifier &&
              node.typeAnnotation.typeName.right.type ===
                AST_NODE_TYPES.Identifier &&
              node.typeAnnotation.typeName.left.name === "React" &&
              (node.typeAnnotation.typeName.right.name === "FC" ||
                node.typeAnnotation.typeName.right.name === "FunctionComponent")
            ) {
              context.report({
                messageId: "vfc",
                node: node.typeAnnotation,
              });
            }
          }
        }
      },
    };
  },
});
