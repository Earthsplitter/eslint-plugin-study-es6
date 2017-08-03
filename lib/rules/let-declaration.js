"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "recommend use let or const",
            category: "Stylistic Issues",
            recommended: true
        },
        schema: [] // no options
    },
    create: function (context) {
        return {
            VariableDeclaration: function (node) {
                if (node.kind === 'var') {
                    context.report({
                        node: node,
                        message: "Use let / const rather than var"
                    })
                }
            }
        };
    }
};
