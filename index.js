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

function operatorInput(e) {
    let operator = e.target.innerText;
    console.log(operator);
    /*operationInput.innerText += operator;*/
  };

function numberInput(e) {
    if(operator === '') {
        num1 = e.target.innerText
        console.log(num1);
    } else if(operator != '') {
        num2 = e.target.innerText;
        console.log(num2);
    }
};     



/*function operate(num1, operator, num2) {
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
};*/


function deleteAll() {  
    operationInput.innerText = '';  
};

numberButtons.forEach((button) => {
    button.addEventListener('click', numberInput); 
});

/*equalsButton.addEventListener('click', operate(operationInput.innerText));*/

operationButtons.forEach((button) => {
    button.addEventListener('click', operatorInput);    
});

clearWindowButton.addEventListener('click', deleteAll);



// What's next?


//when user clicks on equals button:
    //- the click event should trigger the operate() function
    // - the click event should also update the display with the results

//when user clicks on backspace button:
    // - the last input should be deleted
    // - the display should update, showing everything, minus the last input

