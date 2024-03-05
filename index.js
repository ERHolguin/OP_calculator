let operationInput = document.getElementById('operationDisplay');
let resultOutput = document.getElementById('resultDisplay');
let clearWindowButton = document.getElementById('AC') ;
let backspaceButton = document.getElementById('backspace');
let numberButtons = document.querySelectorAll('.number-button');
let operationButtons = document.querySelectorAll('.operation-button');
let equalsButton = document.getElementById('equals');
let decimalSeparator = document.getElementById('dot');

let num1;
let num2;
let operator;
let result = [resultOutput.innerText]; //var must be an array in order to push results to it

function add(a, b) {
    return a + b
};

function subtract(a, b) {
    return a - b;
};

function multiply(...args) {
    return args.reduce((product, current) => product * current, 1);
};

function divide(a, b) {
    return a / b;
};


function getResult() {
    let operation = operationInput.innerText;
    let [num1, operator, num2] = operation.split(/(\.|\+|-|\x|\÷)/);
    let firstResult = operate(num1, operator, num2);
    return result.push(firstResult);
};

function updateOperation() {
    operationInput.innerText = resultOutput.innerText;
    resultOutput.innerText = '';
};


function numberInput(e) {
    if(operator == '') {
        num1 = e.target.innerText;
        operationInput.innerText += num1;
    } else {
        num2 = e.target.innerText;
        operationInput.innerText += num2;
    };
    //getFirstResult();  
};


function operatorInput(e) {
  operator = e.target.innerText;
  return operationInput.innerText += ' ' + operator;
};

function useDecimalSeparator(e) {
    decimalSeparator = e.target.innerText;
    return operationInput.innerText += decimalSeparator;
};


function operate(num1, operator, num2) {
    if (operator == '+') {
        resultOutput.innerText = add(parseInt(num1), parseInt(num2));
        console.log(num1, operator, num2);
        console.log(resultOutput.innerText);
    } else if (operator == '-') {
        resultOutput.innerText =  subtract(parseInt(num1), parseInt(num2));
        console.log(num1, operator, num2);
        console.log(resultOutput.innerText);
    } else if (operator == 'x') {
        resultOutput.innerText =  multiply(parseInt(num1), parseInt(num2));
        console.log(num1, operator, num2);     
        console.log(resultOutput.innerText);
    } else if (operator == '÷' && num2 == '0') {
        resultOutput.innerText = 'Are you trying to break me? Better luck next time!';
    } else if (operator == '÷') {
        resultOutput.innerText =  divide(parseInt(num1), parseInt(num2));
        console.log(num1, operator, num2);
        console.log(resultOutput.innerText);
    };
};



function deleteAll() {  
    operationInput.innerText = ''; 
    resultOutput.innerText = '';
};

function deleteLastInput() {  
    operationInput.innerText = operationInput.innerText.slice(0, -1);  
};

numberButtons.forEach((button) => {
    button.addEventListener('click', numberInput); 
});

decimalSeparator.addEventListener('click', useDecimalSeparator);

operationButtons.forEach((button) => {
    button.addEventListener('click', operatorInput);    
});

equalsButton.addEventListener('click', () => {
    getResult()
    updateOperation()
});


clearWindowButton.addEventListener('click', deleteAll);

backspaceButton.addEventListener('click', deleteLastInput);




// What's next?


//calcultion rules:
    // calculate one pair of numbers at a time, display the result, then use the result
    // as the first number in the new calculation

    // round answers with long decimals so that 
    // they don’t overflow the screen.

    // pressing = before entering all of the numbers or an operator 
    // could cause problems!
    