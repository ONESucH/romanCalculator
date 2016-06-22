var reg = /[A-Z]/gi;
var allElements = {
    writeTextAtInputOne : $('.writeTextAtInputOne'),
    multiplication : $('.multiplication'),
    division : $('.division'),
    subtraction : $('.subtraction'),
    added : $('.added'),
    writeTextAtInputTwo : $('.writeTextAtInputTwo'),
    answer : $('.answer')
};

function logicalExpressionRendering(expressionRendering) {
    var result;
    if (expressionRendering === 'X') {
        result = allElements.writeTextAtInputOne * allElements.writeTextAtInputTwo;
    }
    if (expressionRendering === '/') {
        result = allElements.writeTextAtInputOne / allElements.writeTextAtInputTwo;
    }
    if (expressionRendering === '-') {
        result = allElements.writeTextAtInputOne - allElements.writeTextAtInputTwo;
    }
    if (expressionRendering === '+') {
        result = allElements.writeTextAtInputOne + allElements.writeTextAtInputTwo;
    }
    textInputValidation(result);
}

function textInputValidation(result) {
    var writeTextForInputOne = allElements.writeTextAtInputOne.val();
    var writeTextForInputTwo = allElements.writeTextAtInputTwo.val();
};

