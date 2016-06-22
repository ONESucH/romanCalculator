var arrOne = [];
var arrTwo = [];
var allElements = {
    writeTextAtInputOne : $('.writeTextAtInputOne'),
    multiplication : $('.multiplication'),
    division : $('.division'),
    subtraction : $('.subtraction'),
    added : $('.added'),
    writeTextAtInputTwo : $('.writeTextAtInputTwo'),
    answer : $('.answer')
};
var allRomanNumbers = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};

function logicalExpressionRendering(expressionRendering) {
    var writeTextForInputOne = allElements.writeTextAtInputOne.val();
    var writeTextForInputTwo = allElements.writeTextAtInputTwo.val();
    var result;
    if (expressionRendering === 'X') {
        result = writeTextForInputOne * writeTextForInputTwo;
        console.log('Выполнено умножение');
    }
    if (expressionRendering === '/') {
        result = writeTextForInputOne / writeTextForInputTwo;
        console.log('Выполнено деление');
    }
    if (expressionRendering === '-') {
        result = writeTextForInputOne - writeTextForInputTwo;
        console.log('Выполнено вычитание');
    }
    if (expressionRendering === '+') {
        result = writeTextForInputOne + writeTextForInputTwo;
        console.log('Выполнено прибавление');
    }
    textInputValidation(result,writeTextForInputOne,writeTextForInputTwo);
}

function textInputValidation(result,writeTextForInputOne,writeTextForInputTwo) {
    for (var i = 0; i <= result.length; i++) {
        switch (result[i]) {
            case 'I':
                result = 1;
                break;
            case 'V':
                result = 5;
                break;
            case 'X':
                result = 10;
                break;
            case 'L':
                result = 50;
                break;
            case 'C':
                result = 100;
                break;
            case 'D':
                result = 500;
                break;
            case 'M':
                result = 1000;
                break;
        }
        if (writeTextForInputOne) {
            writeTextForInputOne.push(arrOne);
        }
        else {
            writeTextForInputTwo.push(arrTwo);
        }
    }
}

