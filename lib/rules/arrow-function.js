"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "recommend arrow function instead of anonymous function",
            category: "Stylistic Issues",
            recommended: true
        },
        schema: [] // no options
    },
    create: function (context) {
        return {
            FunctionExpression: function (node) {
                if (node.id === null && node.parent.type !== 'Property') {
                    context.report({
                        node: node,
                        message: "Recommend: () => {...} rather than function () {...}"
                    })
                }
            }
        };
    }
};
