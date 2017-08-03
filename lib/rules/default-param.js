"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "recommend function default params",
            category: "Stylistic Issues",
            recommended: true
        },
        schema: [] // no options
    },
    create: function (context) {
        return {
            FunctionDeclaration: function (node) {
                if (node.body && node.body.type === 'BlockStatement' && node.body.body[0].type === 'ExpressionStatement') {
                    let firstExp = node.body.body[0].expression
                    let paramStr = []
                    node.params.forEach(param => {
                        paramStr.push(param.name)
                    })
                    let leftIsParam = firstExp.left.type === 'Identifier' && paramStr.indexOf(firstExp.left.name) > -1
                    let rightIsOr = firstExp.right.operator === '||'
                    let rightHasParam = paramStr.indexOf(firstExp.right.left.name) > -1 || paramStr.indexOf(firstExp.right.right.name) > -1
                    if (leftIsParam && rightIsOr && rightHasParam) {
                        context.report({
                            node: node.body.body[0],
                            message: "Use function {{funcName}} ({{paraName}}={{defaultValue}})",
                            data: {
                                funcName: node.id.name,
                                paraName: firstExp.left.name,
                                defaultValue: paramStr.indexOf(firstExp.right.left.name) > -1 ? firstExp.right.left.name : firstExp.right.right.name
                            }
                        })
                    }
                }
            },
            FunctionExpression: function (node) {
                if (node.body && node.body.type === 'BlockStatement' && node.body.body[0].type === 'ExpressionStatement') {
                    let firstExp = node.body.body[0].expression
                    let paramStr = []
                    node.params.forEach(param => {
                        paramStr.push(param.name)
                    })
                    let leftIsParam = firstExp.left.type === 'Identifier' && paramStr.indexOf(firstExp.left.name) > -1
                    let rightIsOr = firstExp.right.operator === '||'
                    let rightHasParam = paramStr.indexOf(firstExp.right.left.name) > -1 || paramStr.indexOf(firstExp.right.right.name) > -1
                    if (leftIsParam && rightIsOr && rightHasParam) {
                        context.report({
                            node: node.body.body[0],
                            message: "Use function ({{paraName}}={{defaultValue}})",
                            data: {
                                paraName: firstExp.left.name,
                                defaultValue: paramStr.indexOf(firstExp.right.left.name) > -1 ? firstExp.right.left.name : firstExp.right.right.name
                            }
                        })
                    }
                }
            }
        };
    }
};
