const bottomDisplay = document.querySelector(".bottom-display");
const topDisplay = document.querySelector(".top-display");
const clear = document.querySelector(".clear");
const deleteBtn = document.querySelector(".delete");
const numbers = document.querySelectorAll(".number");
const operands = document.querySelectorAll(".operand");
const equal = document.querySelector(".equal");

let numberOne = 0; // first number to be saved
let numberTwo = 0; // second number to be saved
let operandSelected = ""; // variable to save the operand
let sum = 0; // variable to save the sum




operands.forEach(operand => {
    operand.addEventListener('click', () =>{
        if(isNaN(topDisplay.textContent.charAt(topDisplay.textContent.length - 1))){ // checks to see if current char is an operand
            return;
        }
        if(numberOne === 0) {
            numberOne = parseInt(topDisplay.textContent);   
        }
        if(numberOne !== 0 && numberTwo !== 0){
            numberTwo = parseInt(numberTwo);
            numberOne = evaluate(numberOne, numberTwo, operandSelected);
            numberTwo = 0;
        }
        operandSelected = operand.textContent;
        topDisplay.textContent += ` ${operand.textContent} `;
    })
});

numbers.forEach(number => {
    number.addEventListener('click', () =>{
        if(numberOne !== 0){
            numberTwo += number.textContent;
        }
        topDisplay.textContent += number.textContent;
    })
});

equal.addEventListener('click', () =>{
    numberTwo = parseInt(numberTwo);
    sum = evaluate(numberOne, numberTwo, operandSelected);
    numberOne = sum;
    numberTwo = 0;
    bottomDisplay.textContent = sum;
    topDisplay.textContent = "";
})


clear.addEventListener('click', clearDisplay);
deleteBtn.addEventListener('click', deleteDigit);





function evaluate(number1, number2, operandSelected){
    switch(operandSelected) {
        case "/":
            return number1 / number2;
            break;
        case "X":
            return number1 * number2;
            break;
        case "-":
            return number1 - number2;
            break;
        case "+":
            return number1 + number2;
            break;
    }
}
function clearDisplay() {
    topDisplay.textContent = '';
    bottomDisplay.textContent = '';
    numberOne = 0;
    numberTwo = 0;
}

function deleteDigit() {
    if(topDisplay.textContent.charAt(topDisplay.textContent.length -1) === ' '){
        topDisplay.textContent = topDisplay.textContent.slice(0, -3);
    }
    else {
        topDisplay.textContent = topDisplay.textContent.slice(0, -1);
    }
    
}
