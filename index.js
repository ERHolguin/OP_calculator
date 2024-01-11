/*let displayedInput = document.getElementById('displayWindowContent');
let clearWindowButton = document.getElementById('AC')
let backspaceButton = document.getElementById('backspace')
let calculatorButtons = document.querySelectorAll('button');*/


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

/*let num1;
let num2;
let operator;*/

function operate(num1, operator, num2) {
    if (operator == '+') {
        return add(num1, num2);
    } else if (operator == '-') {
        return subtract(num1, num2);
    } else if (operator == '*') {
        return multiply(num1, num2);
    } else if (operator == '/') {
        return divide(num1, num2);
    } else {
        return 'invalid input';
    };
};


//console.log(operate(2,'*',4));

/*
calculatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        displayedInput.innerText += ' ' + button.innerText; 
    });
});

function deleteAll() {  
    displayedInput.innerText = '';  
    
    };
    


clearWindowButton.addEventListener('click', deleteAll);
//backspaceButton.addEventListener('click', deleteLastInput);

/*function deleteLastInput() {  
   return displayedInput.innerText.slice(0 -1);
            
    };

/*let newArray = displayedInput.innerText.split('');
newArray.splice(-1, 1);

console.log(newArray)*/
