"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "recommend object shorthand for properties that have same key and value",
            category: "Stylistic Issues",
            recommended: true
        },
        schema: [] // no options
    },
    create: function (context) {
        return {
            ObjectExpression: function (node) {
                node.properties.forEach(prop => {
                    if (prop.key.name === prop.value.name && prop.shorthand === false) {
                        context.report({
                            node: prop,
                            message: "Use { {{prop}} } rather than { {{prop}}: {{prop}} }",
                            data: {
                                prop: prop.key.name
                            }
                        })
                    }
                    if (prop.value.type === 'FunctionExpression' && prop.value.id === null && prop.method === false) {
                        context.report({
                            node: prop,
                            message: "Use { {{prop}} () {...} } rather than { {{prop}}: function () {...} }",
                            data: {
                                prop: prop.key.name
                            }
                        })
                    }
                })
            }
        };
    }
};
