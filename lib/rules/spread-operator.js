"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "recommend spread operator instead of apply",
            category: "Stylistic Issues",
            recommended: true
        },
        schema: [] // no options
    },
    create: function (context) {
        return {
            MemberExpression: function (node) {
                if (node.property.name === 'apply') {
                    context.report({
                        node: node.property,
                        message: "Use {{funcName}}(...{{ arg }}) rather than {{funcName}}.apply({{env}}, {{arg}})",
                        data: {
                            funcName: node.object.property.name,
                            env: node.parent['arguments'][0].name,
                            arg: node.parent['arguments'][1].name
                        }
                    })
                }
            }
        };
    }
};
