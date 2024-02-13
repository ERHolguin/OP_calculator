let operationInput = document.getElementById('operationDisplayContent');
let resultOutput = document.getElementById('resultDisplayContent');
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

/*function operatorInput(e) {
    let operator = e.target.innerText;
    console.log(operator);
    operationInput.innerText += operator;
  };

function numberInput(e) {
    if(operator === '') {
        let num1 = e.target.innerText
        console.log(num1)
        operationInput.innerText += num1
    } else {
        let num2 = e.target.innerText
       operationInput.innerText += num2
    }  
};    */

function userInput(e) {
    operationInput.innerText += e.target.innerText;
    console.log(operationInput.innerText)
}


function operate(num1, operator, num2) {
    if (operator == '+') {
        resultOutput.innerText = add(parseInt(num1), parseInt(num2));
        console.log(num1, operator, num2);
        console.log(add(parseInt(num1), parseInt(num2)));
    } else if (operator == '-') {
        resultOutput.innerText =  subtract(parseInt(num1), parseInt(num2));
        console.log(num1, operator, num2);
        console.log(subtract(parseInt(num1), parseInt(num2)));
    } else if (operator == 'x') {
        resultOutput.innerText =  multiply(parseInt(num1), parseInt(num2));
        console.log(num1, operator, num2);     
        console.log(multiply(parseInt(num1), parseInt(num2)));
    } else if (operator == '/') {
        resultOutput.innerText =  divide(parseInt(num1), parseInt(num2));
        console.log(num1, operator, num2);
        console.log(divide(parseInt(num1), parseInt(num2)))
    } else {
        resultOutput.innerText = 'invalid input';
        console.log('Invalid Input')
    };
};

function getResult() {
    let splitResult = operationInput.innerText.split(',');
    resultOutput.innerText = operate(splitResult);
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

equalsButton.addEventListener('click', getResult);

operationButtons.forEach((button) => {
    button.addEventListener('click', userInput);    
});

clearWindowButton.addEventListener('click', deleteAll);

backspaceButton.addEventListener('click', deleteLastInput);




// What's next?


//when user clicks on equals button:
    //- the click event should trigger the operate() function
    // - the click event should also update the display with the results

//when user clicks on backspace button:
    // - the last input should be deleted
    // - the display should update, showing everything, minus the last input

