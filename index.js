let operationInput = document.getElementById('operationDisplayContent');
let clearWindowButton = document.getElementById('AC')
let backspaceButton = document.getElementById('backspace')
let numberButtons = document.querySelectorAll('.number-button');
let operationButtons = document.querySelectorAll('.operation-button');
let equalsButton = document.getElementById('=')

function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b;
}

function multiply(...args) {
    return args.reduce((product, current) => product * current, 1);
}

function divide(a, b) {
    return a / b;
}

let num1 = '';
let num2 = '';
let operator = '';

function operate(num1, operator, num2) {
    if (operator == '+') {
        return add(parseInt(num1), parseInt(num2));
    } else if (operator == '-') {
        return subtract(parseInt(num1), parseInt(num2));
    } else if (operator == '*') {
        return multiply(parseInt(num1), parseInt(num2));
    } else if (operator == '/') {
        return divide(parseInt(num1), parseInt(num2));
    } else {
        return 'invalid input';
    };
};


//console.log(operate(2,'*',4));

function numberInput(e) {
    if(operator === '') {
        num1 = ' ' + e.target.innerText;
        return operationInput.innerText += num1;
    } else {
        num2 = ' ' + e.target.innerText;
        return operationInput.innerText += num2;
    }
};

function operatorInput(e) {
  operator = ' ' + e.target.innerText;
  return operationInput.innerText += operator;
};


function deleteAll() {  
    operationInput.innerText = '';  
};


clearWindowButton.addEventListener('click', deleteAll);

numberButtons.forEach((button) => {
    button.addEventListener('click', numberInput); 
});

operationButtons.forEach((button) => {
    button.addEventListener('click', operatorInput);    
});


// What's next?


//when user clicks on equals button:
    //- the click event should trigger the operate() function
    // - the click event should also update the display with the results

//when user clicks on backspace button:
    // - the last input should be deleted
    // - the display should update, showing everything, minus the last input

