const displayedInput = document.getElementById('userInput');
let clearWindowButton = document.getElementById('deleteAllButton')
let calculatorButtons = document.querySelectorAll('calculator-button');

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

let num1;
let num2;
let operator;

function operate(operator, num1, num2) {
    if(operator == '+') {
        add(num1, num2);
    } else if(operator == '-') {
        subtract(num1, num2);
    } else if(operator == '*') {
        multiply(num1, num2);
    } else if(operator == '/') {
        divide(num1, num2);
    } else {
        return 'invalid input';
    };
};

function deleteAll() {
    displayedInput.innerText = '';  
};


/*function buttonSelection() {
    displayedInput.textContent = calculatorButtons.textContent; 
};*/

calculatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(calculatorButtons.innerText); 
    });
});

clearWindowButton.addEventListener('click', deleteAll);
