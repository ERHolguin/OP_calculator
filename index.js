let operationInput = document.getElementById('operationDisplay');
let resultOutput = document.getElementById('resultDisplay');
let clearWindowButton = document.getElementById('AC') ;
let backspaceButton = document.getElementById('backspace');
let numberButtons = document.querySelectorAll('.number-button');
let operationButtons = document.querySelectorAll('.operation-button');
let equalsButton = document.getElementById('equals');

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

let num1;
let num2;
let operator;

function userInput(e) {
    operationInput.innerText += e.target.innerText;
    console.log(operationInput.innerText);
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
    } else if (operator == '÷') {
        resultOutput.innerText =  divide(parseInt(num1), parseInt(num2));
        console.log(num1, operator, num2);
        console.log(resultOutput.innerText);
    } else {
        resultOutput.innerText = 'invalid input';
        console.log('Invalid Input');
    };
};

//console.log(operate(2,'+',9));

function getResult() {
    let operation = operationInput.innerText;
    let [num1, operator, num2] = operation.split(/(\+|-|\x|\÷)/);
    resultOutput.innerText = operate(num1, operator, num2);
    return resultOutput.innerText;
};


function deleteAll() {  
    operationInput.innerText = ''; 
    resultOutput.innerText = '';
};

function deleteLastInput() {  
    operationInput.innerText = operationInput.innerText.slice(0, -1);  
};

numberButtons.forEach((button) => {
    button.addEventListener('click', userInput); 
});

operationButtons.forEach((button) => {
    button.addEventListener('click', userInput);    
});

equalsButton.addEventListener('click', getResult);



clearWindowButton.addEventListener('click', deleteAll);

backspaceButton.addEventListener('click', deleteLastInput);




// What's next?


//when user clicks on equals button:
    //- the click event should trigger the operate() function
    // - the click event should also update the display with the results

