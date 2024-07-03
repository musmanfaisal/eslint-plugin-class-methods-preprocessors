module.exports = {
    meta: {
        type: "problem",
        docs: {
            description: "Class methods should be decclared with preprocessors"
        },
        fixable: "code",
        schema: [] // no options
    },
    create: function (context) {
        return {
            // callback functions
            ClassDeclaration(node) {
                const classMethodsWithoutPreprocessors = node.body.body
                    .filter(({ type }) => type === "MethodDefinition")
                    .filter(({ accessibility, key }) => (!accessibility && key.name !== "constructor"));


                classMethodsWithoutPreprocessors.forEach(element => {
                    if (!element.value.async) {
                        context.report({
                            node: element,
                            message: "Pre processor missing for the class method",
                            fix(fixer) {
                                return fixer.insertTextBefore(element.key, 'public ');
                            }
                        });
                    }
                    else {
                        const sourceCode = context.getSourceCode();
                        context.report({
                            node: element,
                            message: `Pre processor missing for the class method`,
                            fix(fixer) {
                                return fixer.insertTextBefore(sourceCode.getFirstToken(element), 'public ');
                            }
                        });
                    }
                });
            }
        };
    }
};