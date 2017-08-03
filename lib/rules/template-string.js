"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "recommend use template string to concatenate string",
            category: "Stylistic Issues",
            recommended: true
        },
        schema: [] // no options
    },
    create: function (context) {
        return {
            BinaryExpression: function (node) {
                // not root node for a chain addition
                if (node.parent.type === 'BinaryExpression') {
                    return
                }
                // chain addition (>=3)
                if (node.left.type === 'BinaryExpression' && node.left.left.type === 'BinaryExpression') {
                    // flat it
                    let current = node
                    let addends = []
                    addends.push(current.right)
                    while (current.left.type === 'BinaryExpression') {
                        current = current.left
                        addends.push(current.right)
                    }
                    let stringLiteral = false
                    let Identifier = false
                    addends.forEach((addend, index) => {
                        if (addend.type === 'Literal' && typeof addend.value === 'string') {
                            stringLiteral = index
                        }
                        if (addend.type === 'Identifier') {
                            Identifier = index
                        }
                    })
                    // pattern match
                    if (stringLiteral && Identifier) {
                        context.report({
                            node: node,
                            message: "Use `{{addend1}}${{{addend0}}}` rather than '{{addend1}}'+{{addend0}}",
                            data: {
                                addend0: addends[Identifier].name,
                                addend1: addends[stringLiteral].value
                            }
                        })
                    }
                }
            }
        };
    }
};
