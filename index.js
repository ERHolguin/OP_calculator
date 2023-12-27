const displayedInput = document.getElementById('userInput');
let selectedButton = document.getElementById('calculatorButton');

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
    displayedInput.textContent = '';
}

function buttonSelection() {
    if(selectedButton.textContent == 'AC') {
        deleteAll();
    } else if(selectedButton.textContent == '+' || selectedButton.textContent == '-' || selectedButton.textContent == '*' || selectedButton.textContent == '/' ) {
        operate();
    } else {
        return 'invalid input';
    };
};



selectedButton.addEventListener('click', deleteAll)